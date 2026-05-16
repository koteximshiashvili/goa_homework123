import create from "zustand";

export const useNotesStore = create((set) => ({
  notes: JSON.parse(localStorage.getItem("notes")) || [],
  addNote: (note) =>
    set((state) => {
      const newNotes = [...state.notes, note];
      localStorage.setItem("notes", JSON.stringify(newNotes));
      return { notes: newNotes };
    }),
  removeNote: (index) =>
    set((state) => {
      const newNotes = state.notes.filter((_, i) => i !== index);
      localStorage.setItem("notes", JSON.stringify(newNotes));
      return { notes: newNotes };
    }),
}));
