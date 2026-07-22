import type { Timestamp } from 'firebase/firestore';

export type UserRole = 'admin' | 'guest' | null;
export interface Booking { id: string; userId: string; userName: string; userEmail: string; telefono: string; fechaIngreso: Timestamp; fechaSalida: Timestamp; cantidadPersonas: number; precioTotal: number; notas: string; estado: 'pendiente' | 'confirmada' | 'cancelada'; }
export interface Review { id: string; usuario: string; comentario: string; puntuacion: number; fecha?: Timestamp; }
export interface CabinImage { url: string; path: string; }
export interface Cabin { precio?: number; descripcion?: string; imagenes?: CabinImage[]; }
