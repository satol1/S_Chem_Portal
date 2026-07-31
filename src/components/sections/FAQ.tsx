import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Где проходят очные занятия в Астрахани?',
      a: 'Очные занятия проходят в современных аудиториях и учебных химических лабораториях Астраханского государственного университета им. В. Н. Татищева (АГУ).'
    },
    {
      q: 'В чем ключевое отличие школы от обычных репетиторов?',
      a: 'Занятия ведут действующие университетские преподаватели, кандидаты химических наук с 20+ летним стажем. Мы закладываем фундаментальное понимание науки вместо механического заучивания ответов.'
    },
    {
      q: 'Сколько человек занимается в группе?',
      a: 'Мы формируем мини-группы от 4 до 6 человек. Это обеспечивает идеальный баланс между индивидуальным вниманием преподавателя и продуктивной коллективной работой.'
    },
    {
      q: 'Как записаться на бесплатный пробный урок?',
      a: 'Заполните краткую форму на сайте или позвоните нам. Администратор свяжется с вами в течение 15 минут и согласует удобное время.'
    }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-2">Вопросы и ответы</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Ответы на частые вопросы</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="clean-card bg-slate-50/60 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 text-left font-bold text-slate-900 text-xs sm:text-sm flex items-center justify-between gap-4"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-amber-600' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-slate-600 border-t border-slate-200/60 pt-3 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
