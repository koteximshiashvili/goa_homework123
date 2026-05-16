import create from "zustand";

export const useCounterStore = create((set) => ({
  count: Number(localStorage.getItem("count")) || 0,
  increment: () =>
    set((state) => {
      const newCount = state.count + 1;
      localStorage.setItem("count", newCount);
      return { count: newCount };
    }),
  decrement: () =>
    set((state) => {
      const newCount = state.count - 1;
      localStorage.setItem("count", newCount);
      return { count: newCount };
    }),
}));
