export interface ElementTopicLink {
  blockId: string;
  topicId: string;
  topicTitle: string;
  shortTitle: string;
}

/**
 * Централизованный реестр связей элементов Периодической таблицы с учебными темами портала.
 * Позволяет легко расширять привязку любых элементов к новым разделам курса без дублирования кода.
 */
export const ELEMENT_STUDY_MAP: Record<number, ElementTopicLink> = {
  // IV-A Группа: Углерод и Кремний
  6: {
    blockId: 'elements-chemistry',
    topicId: 'elem-nonme-csi',
    topicTitle: 'Углерод (C) и Кремний (Si)',
    shortTitle: 'Изучить тему: Углерод и Кремний',
  },
  14: {
    blockId: 'elements-chemistry',
    topicId: 'elem-nonme-csi',
    topicTitle: 'Углерод (C) и Кремний (Si)',
    shortTitle: 'Изучить тему: Углерод и Кремний',
  },
  // V-A Группа: Азот и Фосфор
  7: {
    blockId: 'elements-chemistry',
    topicId: 'elem-nonme-np',
    topicTitle: 'Азот (N) и Фосфор (P)',
    shortTitle: 'Изучить тему: Азот и Фосфор',
  },
  15: {
    blockId: 'elements-chemistry',
    topicId: 'elem-nonme-np',
    topicTitle: 'Азот (N) и Фосфор (P)',
    shortTitle: 'Изучить тему: Азот и Фосфор',
  },
  // VI-A Группа: Сера и Кислород
  8: {
    blockId: 'elements-chemistry',
    topicId: 'elem-nonme-so',
    topicTitle: 'Сера (S) и Кислород (O)',
    shortTitle: 'Изучить тему: Сера и Кислород',
  },
  16: {
    blockId: 'elements-chemistry',
    topicId: 'elem-nonme-so',
    topicTitle: 'Сера (S) и Кислород (O)',
    shortTitle: 'Изучить тему: Сера и Кислород',
  },
  // VII-A Группа: Галогены (F, Cl, Br, I)
  9: {
    blockId: 'elements-chemistry',
    topicId: 'elem-nonme-halogens',
    topicTitle: 'Галогены (F, Cl, Br, I)',
    shortTitle: 'Изучить тему: Галогены',
  },
  17: {
    blockId: 'elements-chemistry',
    topicId: 'elem-nonme-halogens',
    topicTitle: 'Галогены (F, Cl, Br, I)',
    shortTitle: 'Изучить тему: Галогены',
  },
  35: {
    blockId: 'elements-chemistry',
    topicId: 'elem-nonme-halogens',
    topicTitle: 'Галогены (F, Cl, Br, I)',
    shortTitle: 'Изучить тему: Галогены',
  },
  53: {
    blockId: 'elements-chemistry',
    topicId: 'elem-nonme-halogens',
    topicTitle: 'Галогены (F, Cl, Br, I)',
    shortTitle: 'Изучить тему: Галогены',
  },
  // I-A Группа: Щелочные металлы (Li, Na, K)
  3: {
    blockId: 'elements-chemistry',
    topicId: 'elem-me-alkali',
    topicTitle: 'Щелочные металлы (Li, Na, K)',
    shortTitle: 'Изучить тему: Щелочные металлы',
  },
  11: {
    blockId: 'elements-chemistry',
    topicId: 'elem-me-alkali',
    topicTitle: 'Щелочные металлы (Li, Na, K)',
    shortTitle: 'Изучить тему: Щелочные металлы',
  },
  19: {
    blockId: 'elements-chemistry',
    topicId: 'elem-me-alkali',
    topicTitle: 'Щелочные металлы (Li, Na, K)',
    shortTitle: 'Изучить тему: Щелочные металлы',
  },
  // Амфотерные металлы (Al, Zn, Be)
  4: {
    blockId: 'elements-chemistry',
    topicId: 'elem-me-amphoteric',
    topicTitle: 'Амфотерные металлы (Al, Zn, Be)',
    shortTitle: 'Изучить тему: Амфотерные металлы',
  },
  13: {
    blockId: 'elements-chemistry',
    topicId: 'elem-me-amphoteric',
    topicTitle: 'Амфотерные металлы (Al, Zn, Be)',
    shortTitle: 'Изучить тему: Амфотерные металлы',
  },
  30: {
    blockId: 'elements-chemistry',
    topicId: 'elem-me-amphoteric',
    topicTitle: 'Амфотерные металлы (Al, Zn, Be)',
    shortTitle: 'Изучить тему: Амфотерные металлы',
  },
  // d-элементы: Железо и Медь
  26: {
    blockId: 'elements-chemistry',
    topicId: 'elem-me-fe-cu',
    topicTitle: 'Железо (Fe) и Медь (Cu)',
    shortTitle: 'Изучить тему: Железо и Медь',
  },
  29: {
    blockId: 'elements-chemistry',
    topicId: 'elem-me-fe-cu',
    topicTitle: 'Железо (Fe) и Медь (Cu)',
    shortTitle: 'Изучить тему: Железо и Медь',
  },
  // d-элементы: Хром и Марганец
  24: {
    blockId: 'elements-chemistry',
    topicId: 'elem-me-cr-mn',
    topicTitle: 'Хром (Cr) и Марганец (Mn)',
    shortTitle: 'Изучить тему: Хром и Марганец',
  },
  25: {
    blockId: 'elements-chemistry',
    topicId: 'elem-me-cr-mn',
    topicTitle: 'Хром (Cr) и Марганец (Mn)',
    shortTitle: 'Изучить тему: Хром и Марганец',
  },
  // Общая химия: Водород
  1: {
    blockId: 'general-chemistry',
    topicId: 'gen-atom-structure',
    topicTitle: 'Строение атома и орбитали',
    shortTitle: 'Изучить тему: Строение атома',
  },
};

/**
 * Получить данные привязки учебной темы для элемента по его атомному номеру
 */
export function getElementTopicLink(atomicNumber: number): ElementTopicLink | null {
  return ELEMENT_STUDY_MAP[atomicNumber] || null;
}
