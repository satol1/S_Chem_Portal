export interface TrainerMeta {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  targetExam: string;
  iconName: string;
  taskCount: number;
}

export const TRAINERS_REGISTRY: Record<string, TrainerMeta> = {
  'ovr-29': {
    id: 'ovr-29',
    code: 'Т-29',
    title: 'Решебник ОВР (Задание 29)',
    subtitle: 'Конструктор электронного баланса и коэффициентов',
    description: 'Интерактивный тренажер ОВР с вводом полуреакций, электронного баланса, ролей веществ (окислитель/восстановитель) и автопроверкой по критериям ФИПИ.',
    badge: 'ОВР • 20 Вариантов',
    targetExam: 'ЕГЭ Задание 29',
    iconName: 'Zap',
    taskCount: 20
  },
  'inorg-31-np': {
    id: 'inorg-31-np',
    code: 'Т-31',
    title: 'Решебник №31: Неорганическая цепочка',
    subtitle: 'Составление 4 уравнений реакций по описанию эксперимента',
    description: 'Комплексный тренажер Задания 31 ЕГЭ. Анализ признаков реакций, составление и балансировка 4 химических уравнений.',
    badge: 'Задание 31 • 63 Варианта',
    targetExam: 'ЕГЭ Задание 31',
    iconName: 'FlaskConical',
    taskCount: 63
  },
  'reactions-np': {
    id: 'reactions-np',
    code: 'Т-48',
    title: 'Решебник Реакций',
    subtitle: 'Составление и балансировка ключевых уравнений превращений',
    description: 'Практикум составления и ввода химических формул, коэффициентов и условий протекания реакций.',
    badge: 'Реакции • 48 Уравнений',
    targetExam: 'ОГЭ / ЕГЭ / ВУЗ',
    iconName: 'Atom',
    taskCount: 48
  },
  'np-test-14-1': {
    id: 'np-test-14-1',
    code: 'Т-ТЕСТ',
    title: 'Тестовый тренажер ОГЭ / ЕГЭ',
    subtitle: 'Интерактивные тесты с выбором ответов и соответствиями',
    description: 'Экспресс-тренинг выбором множественных ответов, поиском соответствий и классификацией веществ.',
    badge: 'Тесты • 14 Разделов',
    targetExam: 'ОГЭ / ЕГЭ Часть 1',
    iconName: 'BookCheck',
    taskCount: 14
  }
};
