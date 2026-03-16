
import React from 'react';

interface SidebarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentTab, setCurrentTab, isOpen, onClose }) => {
  const menuItems = [
    { id: 'overview', label: '3D Tour Overview' },
    { id: 'assistant', label: 'Smart Assistant Overview' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[45] lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      <aside className={`w-64 bg-slate-900 h-screen fixed left-0 top-0 text-slate-300 flex flex-col transition-transform duration-300 z-50 lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="https://smart3dtour.vizion.space/assets/images/logo/aurora.webp" className="h-10 w-auto" alt="Aurora Logo" />
          </div>
          <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-white">
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        <nav className="flex-1 mt-6 px-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => {
                  setCurrentTab(item.id);
                  if (window.innerWidth < 1024) onClose();
                }}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                  currentTab === item.id
                    ? 'bg-[#ba8c44] text-white shadow-lg'
                    : 'hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            </div>
          ))}
        </nav>

        <div className="p-4 mt-auto">
          <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700/50 mb-6 hidden md:block">
             <div className="flex items-center gap-2 mb-2">
               <i className="fa-solid fa-circle-check text-[#ba8c44] text-xs"></i>
               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Project</span>
             </div>
             <p className="text-sm font-bold text-white truncate">Aurora Residence</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
