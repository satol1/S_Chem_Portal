import React from 'react';
import { MoleculeViewer3D } from '../interactive/MoleculeViewer3D';


export const InteractiveLab: React.FC = () => {
  return (
    <section id="3d-lab" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-10 mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
            Интерактивный научный модуль
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Интерактивный 3D-визуализатор молекул
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Покрутите и исследуйте трехмерные модели химических соединений в пространстве (H₂O, Бензол, Кофеин, Метан, Этанол).
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <MoleculeViewer3D />
        </div>

      </div>
    </section>
  );
};
