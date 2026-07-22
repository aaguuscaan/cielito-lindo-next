'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/hooks/useAuth';
import { addCabinImage, deleteBooking, deleteReview, getAllBookings, getAllReviews, getCabin, removeCabinImage, updateBookingStatus, updateCabinContent } from '@/lib/firestore';
import { deleteCabinImage, uploadCabinImage } from '@/lib/storage';
import type { Booking, Cabin, CabinImage, Review } from '@/types';
import '@/app/admin.css';

type Tab = 'dashboard' | 'reservas' | 'contenido' | 'imagenes' | 'resenas';
const navItems: { tab: Tab; label: string }[] = [
  { tab: 'dashboard', label: 'Dashboard' },
  { tab: 'reservas', label: 'Reservas' },
  { tab: 'contenido', label: 'Contenido' },
  { tab: 'imagenes', label: 'Imágenes' },
  { tab: 'resenas', label: 'Reseñas' },
];
const estados: Booking['estado'][] = ['pendiente', 'confirmada', 'cancelada'];

export default function AdminPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [checkingRole, setCheckingRole] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  const [tab, setTab] = useState<Tab>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [bookings, setBookings] = useState<Booking[] | null>(null);
  const [bookingFilter, setBookingFilter] = useState<'todas' | Booking['estado']>('todas');
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [usersCount, setUsersCount] = useState(0);
  const [cabin, setCabin] = useState<Cabin | null>(null);
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [savingContent, setSavingContent] = useState(false);
  const [contentSaved, setContentSaved] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Usuario -> Firebase Auth -> onAuthStateChanged (useAuth) -> documento en Firestore -> validación de rol.
  useEffect(() => {
    if (authLoading) return;
    if (!user) { router.replace('/'); return; }
    getDoc(doc(db, 'users', user.uid))
      .then((snapshot) => {
        if (snapshot.data()?.rol === 'admin') setAuthorized(true);
        else router.replace('/');
      })
      .catch(() => router.replace('/'))
      .finally(() => setCheckingRole(false));
  }, [authLoading, user, router]);

  useEffect(() => {
    if (!authorized) return;
    getAllBookings().then(setBookings).catch(() => setBookings([]));
    getAllReviews().then(setReviews).catch(() => setReviews([]));
    getDocs(collection(db, 'users')).then((snapshot) => setUsersCount(snapshot.size)).catch(() => setUsersCount(0));
    getCabin().then((value) => { setCabin(value); setPrecio(value.precio ? String(value.precio) : ''); setDescripcion(value.descripcion ?? ''); }).catch(() => setCabin({}));
  }, [authorized]);

  // No se renderiza nada del panel hasta confirmar sesión y rol de administrador.
  if (authLoading || checkingRole || !authorized) return null;

  const filteredBookings = (bookings ?? []).filter((booking) => bookingFilter === 'todas' || booking.estado === bookingFilter);

  async function changeStatus(id: string, estado: Booking['estado']) {
    await updateBookingStatus(id, estado);
    setBookings((current) => (current ?? []).map((booking) => (booking.id === id ? { ...booking, estado } : booking)));
  }

  async function removeBooking(id: string) {
    if (!confirm('¿Eliminar esta reserva definitivamente?')) return;
    await deleteBooking(id);
    setBookings((current) => (current ?? []).filter((booking) => booking.id !== id));
  }

  async function removeReviewItem(id: string) {
    if (!confirm('¿Eliminar esta reseña?')) return;
    await deleteReview(id);
    setReviews((current) => (current ?? []).filter((review) => review.id !== id));
  }

  async function saveContent() {
    setSavingContent(true); setContentSaved(false);
    try {
      await updateCabinContent({ precio: Number(precio) || 0, descripcion });
      setCabin((current) => ({ ...current, precio: Number(precio) || 0, descripcion }));
      setContentSaved(true);
    } finally { setSavingContent(false); }
  }

  async function handleUpload(files: FileList | null) {
    const file = files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const image = await uploadCabinImage(file);
      await addCabinImage(image);
      setCabin((current) => ({ ...current, imagenes: [...(current?.imagenes ?? []), image] }));
    } finally { setUploading(false); }
  }

  async function removeImage(image: CabinImage) {
    if (!confirm('¿Eliminar esta imagen de la galería?')) return;
    await deleteCabinImage(image.path);
    await removeCabinImage(image);
    setCabin((current) => ({ ...current, imagenes: (current?.imagenes ?? []).filter((item) => item.path !== image.path) }));
  }

  return <div className="admin-layout">
    <button className="admin-mobile-toggle" onClick={() => setSidebarOpen((value) => !value)} aria-label="Abrir menú">☰</button>
    <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
      <div className="admin-logo">Cielito Lindo</div>
      <nav className="admin-nav">
        {navItems.map((item) => <a key={item.tab} className={`admin-nav-item ${tab === item.tab ? 'active' : ''}`} onClick={() => { setTab(item.tab); setSidebarOpen(false); }}>{item.label}</a>)}
        <a className="admin-nav-item" href="/">Ver sitio</a>
      </nav>
    </aside>
    <main className="admin-main">
      <header className="admin-header"><h1 className="admin-header__title">{navItems.find((item) => item.tab === tab)?.label}</h1></header>

      {tab === 'dashboard' && <div className="stats-grid">
        <article className="stat-card"><span className="stat-card__label">Reservas</span><strong className="stat-card__value">{bookings?.length ?? 0}</strong></article>
        <article className="stat-card"><span className="stat-card__label">Usuarios</span><strong className="stat-card__value">{usersCount}</strong></article>
        <article className="stat-card"><span className="stat-card__label">Reseñas</span><strong className="stat-card__value">{reviews?.length ?? 0}</strong></article>
      </div>}

      {tab === 'reservas' && <div className="admin-card">
        <div className="admin-card__header">
          <span className="admin-card__title">Todas las reservas</span>
          <div className="filter-btns">
            {(['todas', ...estados] as const).map((value) => <button key={value} className={`filter-btn ${bookingFilter === value ? 'active' : ''}`} onClick={() => setBookingFilter(value)}>{value}</button>)}
          </div>
        </div>
        <div className="table-wrap"><table>
          <thead><tr><th>ID</th><th>Huésped</th><th>Check-in</th><th>Check-out</th><th>Personas</th><th>Total</th><th>Estado</th><th>Acciones</th></tr></thead>
          <tbody>
            {bookings === null && <tr><td className="loading-row" colSpan={8}>Cargando reservas…</td></tr>}
            {bookings !== null && filteredBookings.length === 0 && <tr><td className="empty-row" colSpan={8}>No hay reservas para mostrar.</td></tr>}
            {filteredBookings.map((booking) => <tr key={booking.id}>
              <td className="booking-id">{booking.id.slice(0, 6)}</td>
              <td>{booking.userName || booking.userEmail}</td>
              <td>{booking.fechaIngreso.toDate().toLocaleDateString('es-AR')}</td>
              <td>{booking.fechaSalida.toDate().toLocaleDateString('es-AR')}</td>
              <td>{booking.cantidadPersonas}</td>
              <td>${booking.precioTotal.toLocaleString('es-AR')}</td>
              <td><span className={`status-badge status-badge--${booking.estado}`}>{booking.estado}</span></td>
              <td className="actions-cell">
                <button className="btn-action btn-action--confirm" title="Confirmar" onClick={() => changeStatus(booking.id, 'confirmada')}>✓</button>
                <button className="btn-action btn-action--cancel" title="Cancelar" onClick={() => changeStatus(booking.id, 'cancelada')}>✕</button>
                <button className="btn-action btn-action--delete" title="Eliminar" onClick={() => removeBooking(booking.id)}>🗑</button>
              </td>
            </tr>)}
          </tbody>
        </table></div>
      </div>}

      {tab === 'contenido' && <div className="admin-card">
        <div className="admin-card__header"><span className="admin-card__title">Precio y descripción</span></div>
        <div className="admin-form-row">
          <label className="form-label">Precio por noche (base)
            <div className="price-input-wrap"><input type="number" min={0} value={precio} onChange={(event) => setPrecio(event.target.value)} placeholder="45000"/></div>
          </label>
        </div>
        <label className="form-label">Descripción<textarea className="form-input" rows={5} value={descripcion} onChange={(event) => setDescripcion(event.target.value)} placeholder="Descripción de la cabaña..."/></label>
        <button className="btn-save" onClick={saveContent} disabled={savingContent}>{savingContent ? 'Guardando…' : 'Guardar cambios'}</button>
        {contentSaved && <p>Cambios guardados.</p>}
      </div>}

      {tab === 'imagenes' && <div className="admin-card">
        <div className="admin-card__header"><span className="admin-card__title">Galería de imágenes</span></div>
        <label className="upload-zone">
          <input type="file" accept="image/*" style={{ display: 'none' }} onChange={(event) => handleUpload(event.target.files)}/>
          <div className="upload-zone__icon">⬆️</div>
          <div className="upload-zone__text">{uploading ? 'Subiendo imagen…' : 'Hacé clic para elegir una imagen'}</div>
        </label>
        {uploading && <div className="upload-progress-bar"><div style={{ width: '100%' }}/></div>}
        <div className="admin-gallery">
          {(cabin?.imagenes ?? []).length === 0 && <p className="empty-note">Todavía no se cargaron imágenes.</p>}
          {(cabin?.imagenes ?? []).map((image) => <div className="admin-img-card" key={image.path}>
            <img src={image.url} alt="Imagen de la cabaña"/>
            <button className="btn-remove-img" aria-label="Eliminar imagen" onClick={() => removeImage(image)}>×</button>
          </div>)}
        </div>
      </div>}

      {tab === 'resenas' && <div className="admin-card">
        <div className="admin-card__header"><span className="admin-card__title">Moderación de reseñas</span></div>
        {reviews === null && <p className="empty-note">Cargando reseñas…</p>}
        {reviews !== null && reviews.length === 0 && <p className="empty-note">No hay reseñas todavía.</p>}
        {reviews?.map((review) => <div className="admin-review-row" key={review.id}>
          <div className="admin-review-info">
            <div className="review-avatar">{review.usuario[0]?.toUpperCase()}</div>
            <div><div className="review-name">{review.usuario}</div><div className="review-date">{review.fecha?.toDate().toLocaleDateString('es-AR', { month: 'long', year: 'numeric' })}</div></div>
            <div className="review-stars">{'★'.repeat(review.puntuacion)}</div>
          </div>
          <p className="review-text">{review.comentario}</p>
          <button className="btn-action btn-action--delete" title="Eliminar reseña" onClick={() => removeReviewItem(review.id)}>🗑</button>
        </div>)}
      </div>}
    </main>
  </div>;
}
