
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TourOverview from './components/TourOverview';
import SmartAssistantOverview from './components/SmartAssistantOverview';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      <Sidebar 
        currentTab={currentTab} 
        setCurrentTab={setCurrentTab} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      
      <main className="flex-1 lg:ml-64 flex flex-col min-w-0">
        {/* Mobile Top Header */}
        <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200 sticky top-0 z-40">
          <button onClick={() => setIsSidebarOpen(true)} className="p-2 -ml-2 text-slate-600">
            <i className="fa-solid fa-bars text-xl"></i>
          </button>
          <div className="flex items-center gap-2">
            <img src="https://smart3dtour.vizion.space/assets/images/logo/aurora.webp" className="h-8 w-auto" alt="Aurora Logo" />
          </div>
          <div className="w-8"></div> {/* Spacer */}
        </div>

        <div className="p-4 lg:p-8 flex-1 w-full max-w-7xl mx-auto">
          {currentTab === 'overview' && <TourOverview />}
          {currentTab === 'assistant' && <SmartAssistantOverview />}
        </div>
      </main>
    </div>
  );
};

export default App;
