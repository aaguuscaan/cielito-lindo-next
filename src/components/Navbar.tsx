'use client';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { logout } from '@/lib/auth';
import { useAuth } from '@/hooks/useAuth';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false); const [open, setOpen] = useState(false); const [dark, setDark] = useState(false); const { user } = useAuth(); const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => { const theme = localStorage.getItem('theme') === 'dark'; setDark(theme); document.documentElement.dataset.theme = theme ? 'dark' : 'light'; const listener = () => setScrolled(window.scrollY > 60); listener(); window.addEventListener('scroll', listener, { passive: true }); return () => window.removeEventListener('scroll', listener); }, []);
  useEffect(() => { if (!user) { setIsAdmin(false); return; } getDoc(doc(db, 'users', user.uid)).then((snapshot) => setIsAdmin(snapshot.data()?.rol === 'admin')).catch(() => setIsAdmin(false)); }, [user]);
  function toggleTheme() { const next = !dark; setDark(next); localStorage.setItem('theme', next ? 'dark' : 'light'); document.documentElement.dataset.theme = next ? 'dark' : 'light'; }
  return <><nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar"><a className="navbar__logo" href="#hero">Cielito Lindo</a><div className={`navbar__links ${open ? 'open' : ''}`} id="nav-links">{[['sobre','Sobre nosotros'],['galeria','Galería'],['servicios','Servicios'],['disponibilidad','Reservar'],['resenas','Reseñas'],['contacto','Contacto']].map(([id,label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}</div><div className="navbar__actions"><button className="btn-theme" onClick={toggleTheme} aria-label="Cambiar tema">{dark ? '☀️' : '🌙'}</button>{user ? <div className="nav-user-menu" style={{ display: 'flex' }}><span className="nav-username">{user.displayName ?? user.email}</span>{isAdmin && <a className="btn-nav-admin" style={{ display: 'inline-block' }} href="/admin">Admin</a>}<button className="btn-logout" onClick={() => logout()}>Salir</button></div> : <button className="btn-nav-login" onClick={() => dispatchEvent(new Event('open-login'))}>Ingresar</button>}<button className="btn-hamburger" id="hamburger" onClick={() => setOpen(true)} aria-label="Menú"><span/><span/><span/></button></div></nav><button className="close-menu" id="close-menu" onClick={() => setOpen(false)} aria-label="Cerrar menú">×</button></>;
}
