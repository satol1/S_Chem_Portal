import React, { useState } from 'react';
import { FlaskConical, ZoomIn, X, AlertTriangle } from 'lucide-react';
import { SectionBadge } from '../../SectionBadge';
import { ScrollToNavButton } from '../../ScrollToNavButton';
import { PracticeBanner } from '../../PracticeBanner';
import { ChemFormula } from '../../../scientific/ChemFormula';
import { TermTooltip } from '../../../scientific/TermTooltip';
import { MoleculeViewer3D } from '../../../interactive/MoleculeViewer3D';
import { AllotropesDiagram } from './CarbonSiliconAllotropesDiagram';
import { CarbonSiliconReactionMatrix } from './CarbonSiliconReactionMatrix';
import { CarbonSiliconDarkBlock1, CarbonSiliconDarkBlock2 } from './CarbonSiliconDarkBlocks';
import { CarbonSiliconFunFact } from './CarbonSiliconFunFacts';

import diamondImg from '../../../../assets/images/allotropes/diamond.jpg';
import graphiteImg from '../../../../assets/images/allotropes/graphite.jpg';
import fullereneImg from '../../../../assets/images/allotropes/fullerene.jpg';
import siliconImg from '../../../../assets/images/allotropes/silicon.jpg';

interface SectionsProps {
  scrollToNav: () => void;
  handleGoToPractice: () => void;
}

export const CarbonSiliconSections: React.FC<SectionsProps> = ({ scrollToNav, handleGoToPractice }) => {
  const [modalImage, setModalImage] = useState<{ src: string; title: string } | null>(null);

  return (
    <div className="space-y-8 font-body text-slate-800 leading-relaxed text-sm sm:text-base">

      {/* SECTION 1 */}
      <section id="general" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                1. Сравнительный анализ элементов IV-A группы (C и Si)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Электронные конфигурации, валентные состояния и особенности связей C-C и Si-O
              </p>
            </div>
          </div>

          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Углерод (<ChemFormula formula="C" className="font-semibold text-slate-900" />) и кремний (<ChemFormula formula="Si" className="font-semibold text-slate-900" />) принадлежат к 14-й (IV-A) группе Периодической системы элементов Д.И. Менделеева. На внешнем энергетическом уровне их атомы содержат по 4 валентных электрона (<ChemFormula formula="ns^2 np^2" className="font-semibold text-slate-900" />). Существенные различия в радиусах атомов (<ChemFormula math="r(\mathrm{C}) = 0.077\,\text{нм}" className="font-semibold text-slate-900" />, <ChemFormula math="r(\mathrm{Si}) = 0.117\,\text{нм}" className="font-semibold text-slate-900" />) и значениях электроотрицательности определяют кардинальное отличие их химических свойств.
        </p>

        {/* Detailed Comparison Table */}
        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-800 text-white text-xs font-semibold tracking-wider">
              <tr>
                <th className="p-3.5">Характеристика</th>
                <th className="p-3.5">Углерод (C) — 2-й период</th>
                <th className="p-3.5">Кремний (Si) — 3-й период</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Порядковый номер и атомная масса</td>
                <td className="p-3.5">Z = 6, Ar = 12.011</td>
                <td className="p-3.5">Z = 14, Ar = 28.085</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Электронная конфигурация</td>
                <td className="p-3.5">1s² 2s² 2p² (возбужд: 2s¹ 2p³)</td>
                <td className="p-3.5">1s² 2s² 2p⁶ 3s² 3p² 3d⁰ (есть 3d)</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Валентные состояния</td>
                <td className="p-3.5 font-semibold text-slate-900"><TermTooltip term="III (в CO)" definition="В молекуле CO тройная связь (:C≡O:): 2 связи по обменному механизму + 1 по донорно-акцепторному. Валентность равна 3!" />, IV (в CO₂, CH₄)</td>
                <td className="p-3.5 font-semibold text-slate-900">IV (к.ч. до 6 в [SiF₆]²⁻)</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Степени окисления</td>
                <td className="p-3.5">-4, 0, +2, +4</td>
                <td className="p-3.5">-4, 0, +4</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Электроотрицательность (по Полингу)</td>
                <td className="p-3.5 font-semibold text-slate-900">2.55 (высокая)</td>
                <td className="p-3.5 font-semibold text-slate-900">1.90 (умеренная)</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Энергия одинарной связи Э-Э</td>
                <td className="p-3.5">348 кДж/моль (высшая прочность)</td>
                <td className="p-3.5">222 кДж/моль (умеренная)</td>
              </tr>
              <tr className="hover:bg-slate-50/80">
                <td className="p-3.5 font-semibold text-slate-900">Энергия связи Э-О</td>
                <td className="p-3.5">358 кДж/моль</td>
                <td className="p-3.5 text-emerald-800 font-bold">466 кДж/моль (сверхпрочная)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 space-y-2">
          <h4 className="font-semibold text-slate-900 text-sm flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-slate-700" />
            <span>Принципиальное химическое различие C и Si</span>
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            Атом углерода за счет малого радиуса способен к образованию длинных устойчивых гомоцепных связей <ChemFormula formula="C-C" className="font-semibold text-slate-900" /> и эффективному <ChemFormula math="p_\pi-p_\pi" className="font-semibold text-slate-900" /> перекрыванию орбиталей с формированием двойных и тройных связей (<ChemFormula formula="C=C" className="font-semibold text-slate-900" />, <ChemFormula formula="C=O" className="font-semibold text-slate-900" />, <ChemFormula formula="C#N" className="font-semibold text-slate-900" />) — это основа всего химического разнообразия Органической химии. У кремния образование кратных связей затруднено, однако энергия связи <ChemFormula formula="Si-O" className="font-semibold text-slate-900" /> (466 кДж/моль) намного выше энергии одинарной связи <ChemFormula formula="Si-Si" className="font-semibold text-slate-900" /> (222 кДж/моль), поэтому кремний в природе существует исключительно в виде соединений со связями <ChemFormula formula="Si-O-Si" className="font-semibold text-slate-900" /> (кремнезем, силикаты и алюмосиликаты).
          </p>
        </div>
      </section>

      {/* SECTION 2 */}
      <section id="allotropes" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                2. <TermTooltip term="Аллотропия" definition="Существование одного и того же химического элемента в виде нескольких простых веществ, различающихся строением кристаллической решетки или молекул." /> простых веществ углерода и кремния
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Алмаз, графит, фуллерены, карбин, аморфный и кристаллический кремний</p>
            </div>
          </div>

          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <AllotropesDiagram />

        {/* Allotropes Detailed Grid with Left 2D Visual Renders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-xs sm:text-sm">
          {/* DIAMOND */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 hover:shadow-sm transition-shadow">
            <div className="font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between border-b border-slate-200/80 pb-2">
              <span>Алмаз (sp³-гибридизация)</span>
              <span className="px-2 py-0.5 rounded bg-slate-200 text-slate-900 font-mono text-xs font-semibold">Твердость: 10</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start pt-1">
              <button 
                onClick={() => setModalImage({ 
                  src: diamondImg, 
                  title: 'Алмаз — 2D-структура тетраэдра (sp³-гибридизация, валентный угол 109°28\')' 
                })}
                className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-amber-500 transition-colors"
                title="Нажмите для увеличения"
              >
                <img 
                  src={diamondImg} 
                  alt="2D структура Алмаза" 
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 rounded" 
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">
                  2D-схема
                </div>
              </button>

              <p className="text-slate-600 leading-relaxed font-normal text-xs sm:text-sm flex-1">
                Тетраэдрическая 3D-атомная кристаллическая решетка со связями под углом 109°28'. Не содержит свободных электронов, поэтому является идеальным диэлектриком. Обладает высочайшей твердостью, рекордной теплопроводностью и коэффициентом преломления 2.42.
              </p>
            </div>
          </div>

          {/* GRAPHITE */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 hover:shadow-sm transition-shadow">
            <div className="font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between border-b border-slate-200/80 pb-2">
              <span>Графит (sp²-гибридизация)</span>
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-900 font-mono text-xs font-semibold">Проводник</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start pt-1">
              <button 
                onClick={() => setModalImage({ 
                  src: graphiteImg, 
                  title: 'Графит — 2D-структура графеновых слоев (sp²-гибридизация, межслойное расстояние 3.35 Å)' 
                })}
                className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-amber-500 transition-colors"
                title="Нажмите для увеличения"
              >
                <img 
                  src={graphiteImg} 
                  alt="2D структура Графита" 
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 rounded" 
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">
                  2D-схема
                </div>
              </button>

              <p className="text-slate-600 leading-relaxed font-normal text-xs sm:text-sm flex-1">
                Плоские гексагональные слои (углы 120°). Четвертый негибридный p-электрон каждого атома образует делокализованную <ChemFormula math="\pi" className="font-semibold" />-систему по всему слою (полуметалл). Межслойные связи слабо дисперсионны (3.35 Å), что обусловливает чешуйчатость и смазывающие свойства.
              </p>
            </div>
          </div>

          {/* FULLERENE */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 hover:shadow-sm transition-shadow">
            <div className="font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between border-b border-slate-200/80 pb-2">
              <span>Фуллерены (C₆₀, C⑺₀) и Карбин</span>
              <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-900 font-mono text-xs font-semibold">Молекулярные</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start pt-1">
              <button 
                onClick={() => setModalImage({ 
                  src: fullereneImg, 
                  title: 'Фуллерен C₆₀ — 2D-структура замкнутого икосаэдра (бакибол)' 
                })}
                className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-amber-500 transition-colors"
                title="Нажмите для увеличения"
              >
                <img 
                  src={fullereneImg} 
                  alt="2D структура Фуллерена C60" 
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 rounded" 
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">
                  2D-схема
                </div>
              </button>

              <p className="text-slate-600 leading-relaxed font-normal text-xs sm:text-sm flex-1">
                Фуллерен <ChemFormula formula="C60" className="font-semibold text-slate-900" /> — замкнутый сферический кластер из 60 атомов углерода. Карбин — мелкокристаллический черный порошок с линейными цепочками из чередующихся связей <ChemFormula math="-C\equiv C-" className="font-semibold" /> или кумулированных связей <ChemFormula math="=C=C=" className="font-semibold" />.
              </p>
            </div>
          </div>

          {/* CRYSTALLINE SILICON */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3 hover:shadow-sm transition-shadow">
            <div className="font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between border-b border-slate-200/80 pb-2">
              <span>Кристаллический кремний (Si)</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-900 font-mono text-xs font-semibold">Полупроводник</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start pt-1">
              <button 
                onClick={() => setModalImage({ 
                  src: siliconImg, 
                  title: 'Кристаллический кремний Si — 2D-структура кубической решетки (длина связи Si-Si 2.35 Å)' 
                })}
                className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xs group h-32 sm:h-36 w-full sm:w-36 shrink-0 flex items-center justify-center p-1.5 cursor-pointer hover:border-amber-500 transition-colors"
                title="Нажмите для увеличения"
              >
                <img 
                  src={siliconImg} 
                  alt="2D структура кремния" 
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 rounded" 
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center">
                  <ZoomIn className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute bottom-1 left-1 bg-slate-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-slate-700">
                  2D-схема
                </div>
              </button>

              <p className="text-slate-600 leading-relaxed font-normal text-xs sm:text-sm flex-1">
                Имеет алмазоподобную решетку, но длина связи Si-Si (2.35 Å) больше C-C (1.54 Å), поэтому твердость кремния ниже (7 по Моосу). Темно-серые кристаллы с металлическим блеском. Ширина запрещенной зоны 1.12 эВ делает кремний главным полупроводниковым материалом техники.
              </p>
            </div>
          </div>
        </div>

        {/* Fun Fact 1 with Yellow Bracket */}
        <CarbonSiliconFunFact 
          title="Интересный факт: 1 грамм угля = 1000 м² поверхности!"
          description={
            <span>
              Благодаря разветвленной системе микропор площадь внутренней поверхности всего 1 грамма активированного древесного угля достигает от 1000 до 1500 м² (целое футбольное поле!). Именно это физическое свойство (адсорбция) лежит в основе работы угольных фильтров воды, противогазов Зелинского и медицинского активированного угля.
            </span>
          }
        />
      </section>

      {/* SECTION 3 */}
      <section id="carbon-chem" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                3. Химические свойства углерода (C)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Восстановительные свойства угля, реакция с кислотами и карбидный гидролиз</p>
            </div>
          </div>

          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Углерод при обычных температурах химически инертен. При нагревании проявляет сильные восстановительные свойства с неметаллами, оксидами металлов, водяным паром и кислотами-окислителями.
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-900">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
            Уравнения реакций углерода (ЕГЭ / ФИПИ):
          </span>

          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
              <span>1. Восстановительные свойства (окисление до CO₂ или CO):</span>
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-900 text-xs font-bold">Окисление C(0) → C(+4)</span>
            </div>
            <div className="pl-3 space-y-1">
              <div><ChemFormula formula="C + O2 -t-> CO2^" className="font-semibold text-slate-900" /> (полное горение)</div>
              <div><ChemFormula formula="2C + O2(недест) -t-> 2CO^" className="font-semibold text-slate-900" /> (неполное горение)</div>
              <div><ChemFormula formula="C + CO2 -t-> 2CO^" className="font-semibold text-slate-900" /> (конверсия / генераторный газ)</div>
              <div><ChemFormula formula="C + H2O -t-> CO^ + H2^" className="font-semibold text-slate-900" /> (водяной газ)</div>
              <div><ChemFormula formula="C + 2S -t-> CS2" className="font-semibold text-slate-900" /> (сероуглерод)</div>
            </div>

            <div className="text-xs font-bold text-slate-900 font-sans pt-2">2. Восстановление металлов из оксидов:</div>
            <div className="pl-3 space-y-1">
              <div><ChemFormula formula="CuO + C -t-> Cu + CO^" className="font-semibold text-slate-900" /></div>
              <div><ChemFormula formula="Fe2O3 + 3C -t-> 2Fe + 3CO^" className="font-semibold text-slate-900" /></div>
              <div><ChemFormula formula="SiO2 + 2C -t-> Si + 2CO^" className="font-semibold text-slate-900" /></div>
            </div>

            <div className="text-xs font-bold text-slate-900 pt-2 flex items-center gap-2">
              <span>3. Взаимодействие с кислотами-окислителями:</span>
              <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-900 text-xs font-bold"><TermTooltip term="Пассивация" definition="Образование на поверхности элемента защитной оксидной пленки. Для углерода пассивация не характерна — он окисляется при нагревании." /> не характерна!</span>
            </div>
            <div className="pl-3 space-y-1">
              <div><ChemFormula formula="C + 2H2SO4(конц) -t-> CO2^ + 2SO2^ + 2H2O" className="font-semibold text-slate-900" /></div>
              <div><ChemFormula formula="C + 4HNO3(конц) -t-> CO2^ + 4NO2^ + 2H2O" className="font-semibold text-slate-900" /></div>
            </div>

            <div className="text-xs font-bold text-slate-900 font-sans pt-2">4. Образование карбидов и их гидролиз:</div>
            <div className="pl-3 space-y-1">
              <div><ChemFormula formula="Ca + 2C -t-> CaC2" className="font-semibold text-slate-900" /></div>
              <div><ChemFormula formula="4Al + 3C -t-> Al4C3" className="font-semibold text-slate-900" /></div>
              <div><ChemFormula formula="Al4C3 + 12H2O -> 4Al(OH)3v + 3CH4^" className="font-semibold text-slate-900" /> <span className="font-sans text-indigo-700 font-medium font-normal"><TermTooltip term="(метанидный гидролиз)" definition="Необратимое разложение водой или кислотой карбидов с ионами C⁴⁻ (например, Al₄C₃) с образованием гидроксида и метана CH₄." /></span></div>
              <div><ChemFormula formula="CaC2 + 2H2O -> Ca(OH)2 + C2H2^" className="font-semibold text-slate-900" /> <span className="font-sans text-indigo-700 font-medium font-normal"><TermTooltip term="(ацетиленидный гидролиз)" definition="Разложение карбидов с ацетиленид-ионами C₂²⁻ (например, CaC₂) водой с выделением ацетилена C₂H₂." /></span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section id="silicon-chem" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. Химические свойства кремния (Si)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Реакции со щелочами, плавиковой кислотой и получение силана</p>
            </div>
          </div>

          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Кремний при комнатной температуре <TermTooltip term="пассивирован" definition="Покрыт прочной тончайшей поверхностной пленкой оксида SiO₂, предотвращающей его взаимодействие с воздухом и водой при 20°C." /> прочной защитной пленкой <ChemFormula formula="SiO2" className="font-semibold text-slate-900" />. С галогенами (фтором при 20°C, хлором при 300°C) и кислородом реагирует при нагревании.
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-900">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
            Реакции кремния (ЕГЭ / ФИПИ):
          </span>

          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-900 flex items-center gap-2">
              <span>1. Взаимодействие со щелочами (КЛЮЧЕВАЯ РЕАКЦИЯ!):</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-900 text-xs font-bold">Выделение H₂↑</span>
            </div>
            <div className="pl-3 font-bold text-slate-900">
              <ChemFormula formula="Si + 2NaOH + H2O -> Na2SiO3 + 2H2^" className="font-bold text-slate-900" />
            </div>

            <div className="text-xs font-bold text-slate-900 font-sans pt-2">2. Реакция с плавиковой кислотой (HF) и травильной смесью:</div>
            <div className="pl-3 space-y-1">
              <div><ChemFormula formula="Si + 4HF -> SiF4^ + 2H2^" className="font-semibold text-slate-900" /></div>
              <div><ChemFormula formula="3Si + 4HNO3 + 18HF -> 3H2SiF6 + 4NO^ + 8H2O" className="font-semibold text-slate-900" /> <span className="font-sans text-slate-500">(травление кремния)</span></div>
            </div>

            <div className="text-xs font-bold text-slate-900 font-sans pt-2">3. Свойства восстановителя и получение силицидов:</div>
            <div className="pl-3 space-y-1">
              <div><ChemFormula formula="Si + O2 -t-> SiO2" className="font-semibold text-slate-900" /></div>
              <div><ChemFormula formula="2Mg + Si -t-> Mg2Si" className="font-semibold text-slate-900" /></div>
              <div><ChemFormula formula="Mg2Si + 4HCl -> 2MgCl2 + SiH4^" className="font-semibold text-slate-900" /> <span className="font-sans text-indigo-700 font-medium font-normal font-normal">(<TermTooltip term="силицидный гидролиз" definition="Разложение силицидов (Mg₂Si) разбавленными кислотами с выделением ядовитого и самовоспламеняющегося моносилана SiH₄." />: получение SiH₄)</span></div>
            </div>
          </div>
        </div>

        {/* Fun Fact 2 with Yellow Bracket */}
        <CarbonSiliconFunFact 
          title="Интересный факт: Карборунд SiC — космический абразив"
          description={
            <span>
              Карбид кремния <ChemFormula formula="SiC" className="font-semibold text-amber-950" /> имеет твердость 9.5 по шкале Мооса и уступает только алмазу. На Земле натуральный карборунд (минерал муассанит) встречается крайне редко, зато образуется в газовых оболочках звезд-гигантов и входит в состав каменных метеоритов. Из него делают бронепластины, тормоза спорткаров и абразивные круги.
            </span>
          }
        />

        {/* Dark Block 2: Semiconductor Silicon */}
        <CarbonSiliconDarkBlock2 />
      </section>

      {/* SECTION 5 */}
      <section id="oxides" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. Оксиды углерода: CO (угарный газ) и CO₂ (углекислый газ)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Несолеобразующий CO vs кислотный CO₂, реакции со щелочами и известковой водой</p>
            </div>
          </div>

          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <h3 className="font-bold text-slate-900 text-base border-b border-slate-200 pb-2 flex items-center justify-between">
              <span>1. Монооксид углерода (CO)</span>
              <span className="text-xs font-mono px-2 py-0.5 bg-slate-200 text-slate-900 rounded font-bold">C(+2)</span>
            </h3>
            <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
              <li>• <strong>Класс:</strong> Несолеобразующий (безразличный) оксид.</li>
              <li>• <strong>Степень окисления и валентность:</strong> С.О. = <span className="font-mono font-bold text-slate-900">+2</span>, но <strong>Валентность = III (3)</strong>!</li>
              <li>• <strong>Строение:</strong> Содержит тройную связь <ChemFormula formula=":C#O:" className="font-semibold text-slate-900" />, две из которых образованы по обменному механизму, а третья — по донорно-акцепторному механизму (донором пары является атом кислорода).</li>
              <li>• <strong>Лабораторное получение:</strong> <ChemFormula formula="HCOOH -(H2SO4, t)-> CO^ + H2O" className="font-semibold text-slate-900 font-mono" /></li>
              <li>• <strong>Восстановление металлов:</strong><br />
                <ChemFormula formula="Fe2O3 + 3CO -t-> 2Fe + 3CO2^" className="font-semibold text-slate-900 font-mono" />
              </li>
            </ul>

            <div className="p-3.5 rounded-lg bg-amber-50 border border-amber-200 text-xs sm:text-sm space-y-1.5 font-sans">
              <div className="font-bold text-amber-900 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Экзаменационная ловушка (ФИПИ / ДВИ МГУ / ВсОШ):</span>
              </div>
              <p className="text-amber-950 leading-relaxed font-normal">
                В молекуле угарного газа <ChemFormula formula=":C#O:" className="font-semibold text-amber-950" /> степень окисления углерода равна <strong>+2</strong>, однако его <strong>валентность равна III (3)</strong>, а не II! Из-за присутствия тройной связи между атомами C и O число химических связей равно трем.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <h3 className="font-bold text-slate-900 text-base border-b border-slate-200 pb-2 flex items-center justify-between">
              <span>2. Диоксид углерода (CO₂)</span>
              <span className="text-xs font-mono px-2 py-0.5 bg-slate-200 text-slate-900 rounded font-bold">C(+4)</span>
            </h3>
            <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
              <li>• <strong>Класс:</strong> Кислотный оксид (ангидрид угольной кислоты).</li>
              <li>• <strong>Строение:</strong> Линейная молекула (<ChemFormula formula="O=C=O" className="font-mono font-semibold text-slate-900" />, угол 180°, sp-гибридизация).</li>
              <li>• <strong>Лабораторное получение:</strong> <ChemFormula formula="CaCO3 + 2HCl -> CaCl2 + CO2^ + H2O" className="font-semibold text-slate-900 font-mono" /></li>
              <li>• <strong>Реакция с Ca(OH)₂:</strong><br />
                <ChemFormula formula="Ca(OH)2 + CO2 -> CaCO3v + H2O" className="font-semibold text-slate-900 font-mono" /> (помутнение)<br />
                <ChemFormula formula="CaCO3 + CO2 + H2O -> Ca(HCO3)2" className="font-semibold text-slate-900 font-mono" /> (просветление)
              </li>
            </ul>
          </div>
        </div>

        {/* Fun Fact 3 with Yellow Bracket */}
        <CarbonSiliconFunFact 
          title="Интересный факт: Почему угарный газ CO смертельно опасен?"
          description={
            <span>
              Угарный газ <ChemFormula formula="CO" className="font-semibold text-amber-950" /> совершенно не имеет цвета, запаха и вкуса. Попадая в легкие, он связывается с атомом железа гемоглобина крови в 200–300 раз прочнее кислорода, превращая его в устойчивый карбоксигемоглобин. Кровь теряет способность переносить кислород к тканям и головному мозгу.
            </span>
          }
        />

        {/* Dark Block 1: Blast Furnace Process */}
        <CarbonSiliconDarkBlock1 />
      </section>

      {/* SECTION 6 */}
      <section id="carbonates" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                6. Угольная кислота и свойства солей (Карбонаты и Гидрокарбонаты)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Взаимопревращения солей, жесткость воды и совместный гидролиз</p>
            </div>
          </div>

          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Угольная кислота <ChemFormula formula="H2CO3" className="font-semibold text-slate-900" /> — слабая двухосновная кислота (<ChemFormula math="\mathrm{p}K_{a1} = 6.35,\; \mathrm{p}K_{a2} = 10.33" className="font-mono text-slate-900 font-semibold" />), существующая только в водном растворе в равновесии с растворенным газом <ChemFormula formula="CO2*H2O <-> H+ + HCO3-" className="font-mono text-slate-900 font-semibold" />.
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-900">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
            Реакции Карбонатов (ЕГЭ / ФИПИ):
          </span>

          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-900 font-sans">1. Взаимопревращения средних и кислых солей:</div>
            <div className="pl-3 space-y-1">
              <div><ChemFormula formula="Na2CO3 + CO2 + H2O -> 2NaHCO3" className="font-semibold text-slate-900" /></div>
              <div><ChemFormula formula="NaHCO3 + NaOH -> Na2CO3 + H2O" className="font-semibold text-slate-900" /></div>
            </div>

            <div className="text-xs font-bold text-slate-900 font-sans pt-2">2. Качественные реакции и термическое разложение:</div>
            <div className="pl-3 space-y-1">
              <div><ChemFormula formula="CO3(2-) + 2H+ -> CO2^ + H2O" className="font-bold text-slate-900" /> <span className="font-sans text-emerald-800 font-medium">(вскипание раствора)</span></div>
              <div><ChemFormula formula="Na2CO3 + BaCl2 -> BaCO3v + 2NaCl" className="font-bold text-slate-900" /> <span className="font-sans text-slate-600 font-medium">(белый осадок)</span></div>
              <div><ChemFormula formula="2NaHCO3 -t-> Na2CO3 + CO2^ + H2O" className="font-bold text-slate-900" /></div>
              <div><ChemFormula formula="CaCO3 -t-> CaO + CO2^" className="font-bold text-slate-900" /> <span className="font-sans text-slate-500">(обжиг известняка)</span></div>
            </div>

            <div className="text-xs font-bold text-slate-900 font-sans pt-2">3. Совместный (взаимный) необратимый гидролиз солей:</div>
            <div className="pl-3 space-y-1">
              <div><ChemFormula formula="2AlCl3 + 3Na2CO3 + 3H2O -> 2Al(OH)3v + 3CO2^ + 6NaCl" className="font-bold text-slate-900" /></div>
              <div><ChemFormula formula="Fe2(SO4)3 + 3K2CO3 + 3H2O -> 2Fe(OH)3v + 3CO2^ + 3K2SO4" className="font-bold text-slate-900" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 */}
      <section id="silica" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                7. Оксид кремния (SiO₂), кремниевая кислота (H₂SiO₃) и силикаты
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Атомная кристаллическая решетка, сплавление и качественные реакции</p>
            </div>
          </div>

          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <p className="text-slate-700 leading-relaxed font-normal">
          Оксид кремния(IV) <ChemFormula formula="SiO2" className="font-semibold text-slate-900" /> — кислотный оксид с атомной кристаллической решеткой из тетраэдров <ChemFormula formula="SiO4" className="font-semibold text-slate-900" />. Не растворяется в воде и не реагирует со стандартными минеральными кислотами.
        </p>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs text-slate-900">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
            Реакции соединений кремния (ЕГЭ / ФИПИ):
          </span>

          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-900 font-sans">1. Сплавление SiO₂:</div>
            <div className="pl-3 space-y-1">
              <div><ChemFormula formula="SiO2 + 2NaOH -t-> Na2SiO3 + H2O" className="font-semibold text-slate-900" /></div>
              <div><ChemFormula formula="SiO2 + Na2CO3 -t-> Na2SiO3 + CO2^" className="font-semibold text-slate-900" /></div>
              <div><ChemFormula formula="SiO2 + CaCO3 -t-> CaSiO3 + CO2^" className="font-semibold text-slate-900" /></div>
            </div>

            <div className="text-xs font-bold text-slate-900 font-sans pt-2">2. Качественная реакция на SiO₃²⁻ и вытеснение H₂SiO₃:</div>
            <div className="pl-3 space-y-1">
              <div><ChemFormula formula="Na2SiO3 + 2HCl -> H2SiO3v + 2NaCl" className="font-bold text-slate-900" /> <span className="font-sans text-teal-800 font-medium">(белый студенистый осадок)</span></div>
              <div><ChemFormula formula="Na2SiO3 + CO2 + H2O -> H2SiO3v + Na2CO3" className="font-bold text-slate-900" /> <span className="font-sans text-amber-900 font-medium">(вытеснение более сильной H₂CO₃)</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 */}
      <section id="industry" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                8. Силикатная промышленность (Производство стекла и цемента)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">Производство оконного стекла, цемента и керамики</p>
            </div>
          </div>

          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
          <div className="font-bold text-slate-900 text-sm">Химизм варки оконного стекла (1400°C):</div>
          <div className="font-mono text-xs font-bold text-slate-900 p-3 bg-white rounded-lg border border-slate-200">
            <ChemFormula formula="Na2CO3 + CaCO3 + 6SiO2 -t-> Na2O*CaO*6SiO2 + 2CO2^" className="font-bold text-slate-900" />
          </div>
          <p className="text-xs text-slate-600 font-sans pt-1">
            Состав оконного стекла: <span className="font-mono font-bold text-slate-900"><ChemFormula formula="Na2O*CaO*6SiO2" /></span>
          </p>
        </div>

        <CarbonSiliconReactionMatrix />
      </section>

      {/* SECTION 9: 3D MOLECULE VIEWER (LAST SECTION) */}
      <section id="molecules-3d" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 scroll-mt-6">
        <div className="border-b border-slate-100 pb-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <SectionBadge />
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                9. Интерактивные 3D-модели веществ углерода и кремния
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Объемное 3D-моделирование молекул и кристаллов CO, CO₂, SiO₂, SiH₄, H₂CO₃, H₂SiO₃, SiC
              </p>
            </div>
          </div>

          <ScrollToNavButton onClick={scrollToNav} />
        </div>

        <MoleculeViewer3D 
          moleculeIds={['co', 'co2', 'ch4', 'sio2', 'sih4', 'h2co3', 'h2sio3', 'sic']} 
          initialSelectedId="co2"
          title="Интерактивные 3D-модели соединений углерода и кремния"
        />
      </section>

      {/* Bottom Action Banner */}
      <PracticeBanner onGoToPractice={handleGoToPractice} topicCode="ХЭ-08" />

      {/* FULLSCREEN MODAL FOR 2D RENDERS */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 transition-all"
          onClick={() => setModalImage(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 sm:p-6 shadow-2xl space-y-4 text-white animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-sm sm:text-base text-white pr-4">{modalImage.title}</h3>
              <button 
                onClick={() => setModalImage(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition shrink-0 cursor-pointer"
                title="Закрыть"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-center bg-slate-950 p-3 sm:p-5 rounded-xl border border-slate-800 max-h-[70vh]">
              <img 
                src={modalImage.src} 
                alt={modalImage.title} 
                className="max-h-[65vh] max-w-full object-contain rounded-lg shadow-lg" 
              />
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-slate-400 font-mono">Нажмите в любой точке снаружи или кнопку для закрытия</span>
              <button 
                onClick={() => setModalImage(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition cursor-pointer"
              >
                Закрыть окно
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
