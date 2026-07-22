'use client';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from './firebase';
import type { CabinImage } from '@/types';

export async function uploadCabinImage(file: File): Promise<CabinImage> {
  const path = `cabins/${Date.now()}-${file.name}`;
  const objectRef = ref(storage, path);
  await uploadBytes(objectRef, file);
  const url = await getDownloadURL(objectRef);
  return { url, path };
}

export const deleteCabinImage = (path: string) => deleteObject(ref(storage, path));
