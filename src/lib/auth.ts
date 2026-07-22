'use client';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db } from './firebase';
export const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);
export async function register(nombre: string, email: string, telefono: string, password: string) { const credential = await createUserWithEmailAndPassword(auth, email, password); await updateProfile(credential.user, { displayName: nombre }); await setDoc(doc(db, 'users', credential.user.uid), { nombre, email, telefono, rol: 'guest', creadoEn: serverTimestamp() }); return credential; }
export async function loginWithGoogle() { const credential = await signInWithPopup(auth, new GoogleAuthProvider()); await setDoc(doc(db, 'users', credential.user.uid), { nombre: credential.user.displayName ?? '', email: credential.user.email ?? '', rol: 'guest', creadoEn: serverTimestamp() }, { merge: true }); return credential; }
export const logout = () => signOut(auth);
