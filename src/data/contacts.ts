export const CONTACTS = {
  schoolName: 'Школа химических знаний',
  city: 'г. Астрахань',
  address: 'ул. Кирова, д. 14',
  office: 'офис 217, 2 этаж',
  fullAddress: 'г. Астрахань, ул. Кирова, д. 14 (офис 217, 2 этаж)',
  shortAddress: 'Астрахань • ул. Кирова, 14',
  coordinates: {
    lat: 46.351303,
    lng: 48.036898,
  },
  phone: '+7 (902) 955-22-12',
  phoneRaw: '+79029552212',
  telegram: '@chem_30',
  telegramUrl: 'https://t.me/chem_30',
  vkGroup: 'https://vk.com/chem_30',
  workingHours: 'Понедельник – Пятница: 10:00 – 17:00',
  workingHoursShort: 'пн-пт 10:00–17:00',
  founders: [
    {
      name: 'Садомцева Ольга Сергеевна',
      degree: 'Кандидат химических наук',
      title: 'Доцент',
      profileUrl: 'https://asu-edu.ru/staff/714-sadomceva-olga-sergeevna.html'
    },
    {
      name: 'Шакирова Виктория Викторовна',
      degree: 'Кандидат химических наук',
      title: 'Доцент',
      profileUrl: 'https://science.asu-edu.ru/index.php/user/441'
    }
  ]
} as const;
