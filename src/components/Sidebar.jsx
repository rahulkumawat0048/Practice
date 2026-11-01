import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../features/notesSlice';
import { FileText, Pin, Briefcase, User, ShoppingCart, Settings } from 'lucide-react';

const Sidebar = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.notes.selectedCategory);

  const menuItems = [
    { name: 'All Notes', icon: <FileText size={18} /> },
    { name: 'Pinned', icon: <Pin size={18} /> },
    { name: 'Work', icon: <Briefcase size={18} /> },
    { name: 'Personal', icon: <User size={18} /> },
    { name: 'Shopping', icon: <ShoppingCart size={18} /> },
  ];

  return (
    <div className="w-1/5 bg-slate-50 border-r border-slate-200 h-screen flex flex-col justify-between p-4">
      <div>
        {/* App Logo/Brand */}
        <div className="flex items-center gap-2 mb-8 px-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">S</div>
          <span className="font-semibold text-slate-800 text-lg">SimpleNotes</span>
        </div>

        {/* Menu Links */}
        <div className="space-y-1">
          {menuItems.map((item) => {
            const isActive = selectedCategory === item.name;
            return (
              <button
                key={item.name}
                onClick={() => dispatch(setCategory(item.name))}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Settings Footer */}
      <div>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100">
          <Settings size={18} />
          Settings
        </button>
      </div>
    </div>
  );
};

export default Sidebar;