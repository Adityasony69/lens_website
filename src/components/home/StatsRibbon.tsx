import React from 'react';
import { storage } from '../../lib/storage';

export const StatsRibbon: React.FC = () => {
  const stats = storage.getStatistics();

  return (
    <section className="py-10 border-b-2 border-black bg-textured-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, idx) => (
            <div
              key={s.id}
              className={`p-5 rounded-2xl border-2 border-black text-center shadow-md transition-all duration-200 ${
                idx % 2 === 0 ? 'bg-[#eff6ff]' : 'bg-[#fff0f3]'
              }`}
            >
              <div className="text-2xl sm:text-3xl font-black text-black tabular-nums tracking-tight">
                {parseInt(s.value, 10).toLocaleString('en-IN')}{s.suffix}
              </div>
              <div className="text-xs font-bold text-gray-800 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

