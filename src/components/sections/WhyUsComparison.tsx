import React from 'react';

export const WhyUsComparison: React.FC = () => {
  const comparisonItems = [
    {
      criterion: 'Квалификация преподавателей',
      our: 'Кандидаты химических наук (к.х.н.), доценты АГУ с 20+ летним стажем',
      others: 'Неопределенная квалификация, часто студенты или репетиторы без профильного образования',
    },
    {
      criterion: 'Форматы обучения',
      our: 'Очно в учебном классе (ул. Кирова, 14) и Онлайн-программы; Индивидуально и в Мини-группах (4–6 чел)',
      others: 'Строго 1 жесткий формат без возможности гибкого переключения',
    },
    {
      criterion: 'Методика обучения',
      our: 'Понимание системной химической логики и физико-химических причин реакций',
      others: 'Заучивание тестов и шаблонов без глубокого понимания принципов',
    },
    {
      criterion: 'Лабораторная база',
      our: 'Наглядный показ реальных опытов и доступ к лабораторным ресурсам',
      others: 'Исключительно теоретические схемы и рисунки из учебников',
    },
    {
      criterion: 'Мониторинг прогресса',
      our: 'Регулярная диагностика знаний, статистика ошибок и прямая связь с родителями',
      others: 'Бессистемный контроль без регулярной отчётности',
    },
    {
      criterion: 'Стоимость обучения',
      our: 'Доступная прозрачная оплата от 4 800 ₽ в месяц за регулярные занятия',
      others: '1 500 – 2 500 ₽ за 1 час индивидуального занятия (выходит в 2.5 раза дороже)',
    }
  ];

  return (
    <section id="why-us" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12 text-center mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">
            Сравнение и преимущества
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Школа химических знаний или частный репетитор?
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Почему родители и абитуриенты выбирают академическое обучение в нашей школе.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="clean-card overflow-hidden shadow-sm">
          <div className="grid grid-cols-12 bg-slate-900 text-white p-4 font-bold text-xs">
            <div className="col-span-4 sm:col-span-3">Критерий</div>
            <div className="col-span-4 sm:col-span-5 text-amber-400">Школа химических знаний</div>
            <div className="col-span-4 sm:col-span-4 text-slate-400">Обычные репетиторы</div>
          </div>

          <div className="divide-y divide-slate-200">
            {comparisonItems.map((item, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 text-xs items-center hover:bg-slate-50 transition">
                <div className="col-span-4 sm:col-span-3 font-bold text-slate-900 pr-2">
                  {item.criterion}
                </div>
                <div className="col-span-4 sm:col-span-5 text-slate-800 font-semibold pr-2 flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-[11px] mt-0.5">
                    ✓
                  </span>
                  <span>{item.our}</span>
                </div>
                <div className="col-span-4 sm:col-span-4 text-slate-500 flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 font-bold text-[11px] mt-0.5">
                    ✕
                  </span>
                  <span>{item.others}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
