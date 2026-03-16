
import React from 'react';
import { KpiData } from '../types';
import InfoTooltip from './InfoTooltip';

const KpiCard: React.FC<{ data: KpiData }> = ({ data }) => {
  return (
    <div className="bg-white p-4 lg:p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-all relative group">
      <div className="flex justify-between items-start mb-3 lg:mb-4">
        <div className={`${data.color} w-8 h-8 lg:w-10 lg:h-10 rounded-lg lg:rounded-xl flex items-center justify-center text-white shadow-lg text-xs lg:text-base`}>
          <i className={`fa-solid ${data.icon}`}></i>
        </div>
        <div className={`flex items-center gap-0.5 text-[10px] lg:text-xs font-bold ${data.trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
          <i className={`fa-solid ${data.trend > 0 ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i>
          {Math.abs(data.trend)}%
        </div>
      </div>
      <div className="flex items-center gap-1">
        <p className="text-[10px] lg:text-xs font-medium text-slate-500 uppercase tracking-wide truncate">{data.label}</p>
        {data.tooltip && <InfoTooltip content={data.tooltip} />}
      </div>
      <h4 className="text-lg lg:text-2xl font-bold text-slate-900 mt-0.5 lg:mt-1">{data.value}</h4>
    </div>
  );
};

export default KpiCard;
