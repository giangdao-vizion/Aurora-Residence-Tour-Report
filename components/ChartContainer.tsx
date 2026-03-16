
import React from 'react';
import InfoTooltip from './InfoTooltip';

interface ChartContainerProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  height?: string;
  tooltip?: string;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ title, description, children, height = "h-72", tooltip }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
      <div className="mb-6">
        <div className="flex items-center gap-1">
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          {tooltip && <InfoTooltip content={tooltip} />}
        </div>
        {description && <p className="text-xs text-slate-400 mt-0.5">{description}</p>}
      </div>
      <div className={`${height} w-full`}>
        {children}
      </div>
    </div>
  );
};

export default ChartContainer;
