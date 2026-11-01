import { useDispatch } from 'react-redux';
import { deleteNote, togglePin } from '../features/notesSlice';
import { Pin, Trash2 } from 'lucide-react';

const NoteCard = ({ note }) => {
  const dispatch = useDispatch();

  // Background color variations based on category
  const bgColors = {
    Work: 'bg-emerald-50 border-emerald-200',
    Personal: 'bg-emerald-50 border-emerald-200',
    Home: 'bg-emerald-50 border-emerald-200',
    Shopping: 'bg-amber-50 border-amber-200',
    Project: 'bg-purple-50 border-purple-200',
  };

  const cardStyle = bgColors[note.category] || 'bg-slate-50 border-slate-200';

  return (
    <div className={`border rounded-xl p-4 flex flex-col justify-between shadow-sm relative ${cardStyle}`}>
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-slate-800 text-sm">{note.title}</h3>
          <span className="text-[10px] bg-white/80 px-2 py-0.5 rounded font-medium text-slate-600 border border-slate-200">
            {note.category}
          </span>
        </div>
        <p className="text-slate-600 text-xs line-clamp-3 mb-4">{note.content}</p>
      </div>

      <div className="flex justify-end gap-2 pt-2 border-t border-slate-200/60">
        <button
          onClick={() => dispatch(togglePin(note.id))}
          className={`p-1.5 rounded hover:bg-white/80 transition-colors ${
            note.isPinned ? 'text-blue-600' : 'text-slate-400'
          }`}
        >
          <Pin size={14} />
        </button>
        <button
          onClick={() => dispatch(deleteNote(note.id))}
          className="p-1.5 rounded hover:bg-white/80 text-slate-400 hover:text-red-500 transition-colors"
        >
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;