import React, { useState } from 'react';

interface InfoTooltipProps {
  content: string;
  children?: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

const InfoTooltip: React.FC<InfoTooltipProps> = ({ content, children, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const getPositionClasses = () => {
    switch (position) {
      case 'bottom':
        return 'top-full left-1/2 -translate-x-1/2 mt-2';
      case 'left':
        return 'right-full top-1/2 -translate-y-1/2 mr-2';
      case 'right':
        return 'left-full top-1/2 -translate-y-1/2 ml-2';
      case 'top':
      default:
        return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
    }
  };

  const getArrowClasses = () => {
    switch (position) {
      case 'bottom':
        return 'bottom-full left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45 -mb-1';
      case 'left':
        return 'left-full top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45 -ml-1';
      case 'right':
        return 'right-full top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45 -mr-1';
      case 'top':
      default:
        return 'top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45 -mb-1';
    }
  };

  return (
    <div className="relative inline-block ml-1 group">
      <div 
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="cursor-help text-slate-400 hover:text-slate-600 transition-colors"
      >
        {children || <i className="fa-solid fa-circle-info text-[10px]"></i>}
      </div>
      
      {isVisible && (
        <div className={`absolute z-[100] w-48 p-3 bg-slate-900 text-white text-[11px] leading-relaxed rounded-xl shadow-xl animate-in fade-in zoom-in duration-200 ${getPositionClasses()}`}>
          <div className="relative">
            {content}
            {/* Arrow */}
            <div className={`absolute bg-slate-900 ${getArrowClasses()}`}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoTooltip;
