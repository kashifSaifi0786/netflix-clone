import { create } from "zustand";

export interface ModelStoreProps {
  movieId?: string;
  isOpen: boolean;
  openModel: (movieId: string) => void;
  closeModel: () => void;
}

const useInfoModel = create<ModelStoreProps>((set) => ({
  movieId: undefined,
  isOpen: false,
  openModel: (movieId) => set({ movieId, isOpen: true }),
  closeModel: () => set({ isOpen: false }),
}));

export default useInfoModel;
