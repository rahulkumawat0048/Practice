import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [
    { id: '1', title: 'Work', content: 'Eum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem...', category: 'Work', isPinned: true },
    { id: '2', title: 'Personal', content: 'Write a note... conrehendala in bindium dolor sit amet.', category: 'Personal', isPinned: true },
    { id: '3', title: 'Home', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'Home', isPinned: false },
    { id: '4', title: 'Shopping', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing shopping.', category: 'Shopping', isPinned: false },
  ],
  selectedCategory: 'All Notes',
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.unshift({ id: Date.now().toString(), ...action.payload, isPinned: false });
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },
    togglePin: (state, action) => {
      const note = state.notes.find(n => n.id === action.payload);
      if (note) {
        note.isPinned = !note.isPinned;
      }
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { addNote, deleteNote, togglePin, setCategory } = notesSlice.actions;
export default notesSlice.reducer;