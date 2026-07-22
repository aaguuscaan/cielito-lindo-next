'use client';
import { addDoc, arrayRemove, arrayUnion, collection, deleteDoc, doc, getDoc, getDocs, limit, orderBy, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import { db } from './firebase';
import type { Booking, Cabin, CabinImage, Review } from '@/types';

export async function getCabin(): Promise<Cabin> { const snapshot = await getDoc(doc(db, 'cabins', 'cielito-lindo')); return snapshot.data() ?? {}; }
export async function getReviews(): Promise<Review[]> { const snapshot = await getDocs(query(collection(db, 'reviews'), orderBy('fecha', 'desc'), limit(10))); return snapshot.docs.map((item) => ({ id: item.id, ...item.data() } as Review)); }
export async function getBlockedDates() { const snapshot = await getDocs(query(collection(db, 'bookings'), where('estado', 'in', ['confirmada', 'pendiente']))); return snapshot.docs.flatMap((item) => { const value = item.data(); const dates: string[] = []; const start = value.fechaIngreso.toDate(); const end = value.fechaSalida.toDate(); for (const date = new Date(start); date < end; date.setDate(date.getDate() + 1)) dates.push(date.toISOString().slice(0, 10)); return dates; }); }
export const createContactMessage = (data: Record<string, string>) => addDoc(collection(db, 'contactMessages'), { ...data, fecha: serverTimestamp(), leido: false });

// ── Panel de administración ──

export async function getAllBookings(): Promise<Booking[]> {
  const snapshot = await getDocs(query(collection(db, 'bookings'), orderBy('fechaIngreso', 'desc')));
  return snapshot.docs.map((item) => ({ id: item.id, ...item.data() } as Booking));
}
export const updateBookingStatus = (id: string, estado: Booking['estado']) => updateDoc(doc(db, 'bookings', id), { estado });
export const deleteBooking = (id: string) => deleteDoc(doc(db, 'bookings', id));

export async function getAllReviews(): Promise<Review[]> {
  const snapshot = await getDocs(query(collection(db, 'reviews'), orderBy('fecha', 'desc')));
  return snapshot.docs.map((item) => ({ id: item.id, ...item.data() } as Review));
}
export const deleteReview = (id: string) => deleteDoc(doc(db, 'reviews', id));

export const updateCabinContent = (data: Pick<Cabin, 'precio' | 'descripcion'>) => setDoc(doc(db, 'cabins', 'cielito-lindo'), data, { merge: true });
export const addCabinImage = (image: CabinImage) => setDoc(doc(db, 'cabins', 'cielito-lindo'), { imagenes: arrayUnion(image) }, { merge: true });
export const removeCabinImage = (image: CabinImage) => updateDoc(doc(db, 'cabins', 'cielito-lindo'), { imagenes: arrayRemove(image) });
