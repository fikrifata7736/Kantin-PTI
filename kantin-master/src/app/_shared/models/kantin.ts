export interface Kantin {
  info: string;
  result: Result;
}
export interface Result {
  count: number;
  kantin?: Kantin[] | null;
}
export interface Kantin {
  id: number;
  kode: string;
  nama: string;
  kategori: string;
  foto: string;
  deskripsi: string;
  created_at: number;
  updated_at: number;
}
