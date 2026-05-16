import create from "zustand";

export const useListStore = create((set) => ({
  list: [],
  addItem: (item) => set((state) => ({ list: [...state.list, item] })),
}));
