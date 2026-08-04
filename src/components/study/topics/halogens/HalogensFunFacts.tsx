import React from 'react';
import { TheoryCallout } from '../../TheoryCallout';
import { ChemFormula } from '../../../scientific/ChemFormula';

export const HalogensFunFacts: React.FC = () => {
  return (
    <div className="space-y-4 my-6">
      <TheoryCallout title="Интересный факт: Тефлон — случайное открытие самого стойкого полимера">
        В 1938 году химик Рой Планкетт обнаружил, что закачанный в баллон газообразный тетрафторэтилен <ChemFormula formula="CF2=CF2" className="font-semibold text-slate-900" /> самопроизвольно полимеризовался в белый порошок — политетрафторэтилен (тефлон). Прочнейшие связи C–F делают его химически неуязвимым: тефлон не растворяется ни в одном растворителе и выдерживает даже царскую водку.
      </TheoryCallout>

      <TheoryCallout title="Интересный факт: Бром — «зловонная» жидкость">
        Бром и ртуть — единственные элементы, жидкие при комнатной температуре. Название элемента происходит от греческого <code className="font-mono text-amber-900 font-bold">βρῶμος</code> — «зловонный»: тяжёлые красно-бурые пары <ChemFormula formula="Br2" className="font-semibold text-slate-900" /> обладают резким неприятным запахом и токсичны. Открыл бром в 1826 году Антуан Балар, исследуя золу морских водорослей.
      </TheoryCallout>

      <TheoryCallout title="Интересный факт: Иод и щитовидная железа">
        Атомы иода входят в состав гормонов щитовидной железы — тироксина <code className="font-mono text-amber-900 font-bold">T₄</code> (4 атома иода) и трийодтиронина <code className="font-mono text-amber-900 font-bold">T₃</code> (3 атома иода), регулирующих обмен веществ. Для профилактики йододефицита поваренную соль иодируют, а синее окрашивание раствора иода с крахмалом — одна из самых чувствительных качественных реакций в химии.
      </TheoryCallout>
    </div>
  );
};
