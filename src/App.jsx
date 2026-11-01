import { useSelector } from 'react-redux';
import Sidebar from './components/Sidebar';
import NoteForm from './components/NoteForm';
import NoteCard from './components/NoteCard';

function App() {
  const { notes, selectedCategory } = useSelector((state) => state.notes);

  // Filter notes based on sidebar selection
  const filteredNotes = notes.filter((note) => {
    if (selectedCategory === 'All Notes') return true;
    if (selectedCategory === 'Pinned') return note.isPinned;
    return note.category === selectedCategory;
  });

  const pinnedNotes = filteredNotes.filter((n) => n.isPinned);
  // const unpinnedNotes = filteredNotes.filter((n) => !n.isPinned);

  return (
    <div className="flex w-full h-screen overflow-hidden bg-white">
      {/* First Column: Sidebar (20%) */}
      <Sidebar />

      {/* Second Column: Main Content Area (80%) */}
      <div className="w-4/5 h-full overflow-y-auto flex flex-col justify-between p-8">
        <div>
          {/* Top Profile Header */}
          <div className="flex justify-end mb-6">
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full text-xs font-medium text-slate-700">
              <div className="w-5 h-5 bg-slate-300 rounded-full flex items-center justify-center text-[10px]">👤</div>
              Profile ▾
            </div>
          </div>

          {/* Note Input Form */}
          <NoteForm />

          {/* Pinned Notes Section */}
          {selectedCategory === 'All Notes' && pinnedNotes.length > 0 && (
            <div className="mb-8">
              <h2 className="text-sm font-bold text-slate-700 mb-4">Pinned Notes</h2>
              <div className="grid grid-cols-3 gap-4">
                {pinnedNotes.map((note) => (
                  <NoteCard key={note.id} note={note} />
                ))}
              </div>
            </div>
          )}

          {/* All / Filtered Notes Section */}
          <div>
            <h2 className="text-sm font-bold text-slate-700 mb-4">
              {selectedCategory === 'All Notes' ? 'All Notes' : `${selectedCategory} Notes`}
            </h2>
            {filteredNotes.length === 0 ? (
              <p className="text-xs text-slate-400">No notes found in this category.</p>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {filteredNotes.map((note) => (
                  <NoteCard key={note.id} note={note} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-slate-400 pt-8 border-t border-slate-100 mt-8">
          Powered by SimpleNotes
        </div>
      </div>
    </div>
  );
}

export default App;