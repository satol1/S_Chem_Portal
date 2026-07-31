import React, { useState, useMemo } from 'react';
import { 
  TOPIC_CATEGORIES, TRAINER_TOPICS 
} from '../../data/trainersCatalog';
import { 
  Zap, Droplet, Atom, Calculator, Trophy, Search, Filter, 
  ArrowLeft, ArrowRight, BookOpen, Clock
} from 'lucide-react';

import { useRouter } from '../../routes/router';

interface Props {
  onBackToHome?: () => void;
  onSelectTopic?: (topicId: string) => void;
}

export const TrainersCatalogPage: React.FC<Props> = ({ onBackToHome, onSelectTopic }) => {
  const { goHome, openTrainerTopic } = useRouter();

  const handleBack = onBackToHome || goHome;
  const handleSelect = onSelectTopic || openTrainerTopic;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'available'>('all');

  // Category Icon Resolver
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Droplet': return <Droplet className="w-5 h-5 text-blue-400" />;
      case 'Atom': return <Atom className="w-5 h-5 text-emerald-400" />;
      case 'Calculator': return <Calculator className="w-5 h-5 text-purple-400" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-rose-400" />;
      default: return <BookOpen className="w-5 h-5 text-slate-400" />;
    }
  };

  // Filter topics
  const filteredTopics = useMemo(() => {
    return TRAINER_TOPICS.filter(t => {
      // Category filter
      if (selectedCategory !== 'all' && t.categoryId !== selectedCategory) return false;
      // Status filter
      if (selectedStatus === 'available' && !t.available) return false;
      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = t.title.toLowerCase().includes(q);
        const matchesSub = t.subtitle.toLowerCase().includes(q);
        const matchesCode = t.code.toLowerCase().includes(q);
        const matchesExam = t.targetExam.toLowerCase().includes(q);
        const matchesTags = t.tags.some(tag => tag.toLowerCase().includes(q));
        return matchesTitle || matchesSub || matchesCode || matchesExam || matchesTags;
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedStatus]);

  const activeTopicsCount = TRAINER_TOPICS.filter(t => t.available).length;

  return (
    <div className="min-h-screen bg-slate-950 text-white font-body selection:bg-amber-400 selection:text-slate-950 pb-24">
      
      {/* Top Banner & Navigation Bar */}
      <div className="bg-slate-900 border-b border-slate-800 py-6 sticky top-0 z-30 shadow-md backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleBack}
              className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition flex items-center gap-2 text-xs font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Главная страница</span>
            </button>
            <div className="h-5 w-px bg-slate-800 hidden sm:block" />
            <div>
              <span className="text-xs text-amber-400 font-extrabold uppercase tracking-wider block">
                Образовательный Портал
              </span>
              <h1 className="text-lg font-black text-white leading-tight">
                Каталог Тренажеров Задач
              </h1>
            </div>
          </div>



        </div>
      </div>

      {/* Hero Catalog Banner */}
      <div className="relative py-12 md:py-16 bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800/80 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">


            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Интерактивные тренажеры решения задач
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Централизованная система автопроверки химических уравнений, электронного баланса и ионных реакций. Каждый модуль разработан в соответствии с критериями ФИПИ и содержит научную KaTeX-нотацию.
            </p>
          </div>
        </div>
      </div>

      {/* Main Catalog Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        
        {/* Search & Filtering Toolbar */}
        <div className="clean-card p-5 bg-slate-900 border border-slate-800 space-y-4 shadow-lg">
          
          {/* Search Input Bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Поиск по темам, формулам или номерам заданий (например: ОВР, РИО, Задание 29, Органика)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 font-medium text-sm focus:border-amber-500 outline-none transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-white"
              >
                Очистить
              </button>
            )}
          </div>

          {/* Filter Chips Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-800/80">
            
            {/* Category selector */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-400 font-bold mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Раздел:
              </span>
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${selectedCategory === 'all' ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
              >
                Все разделы
              </button>
              {TOPIC_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${selectedCategory === cat.id ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
                >
                  {cat.name.split('&')[0]}
                </button>
              ))}
            </div>

            {/* Availability toggle */}
            <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setSelectedStatus('all')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${selectedStatus === 'all' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'}`}
              >
                Все ({TRAINER_TOPICS.length})
              </button>
              <button
                onClick={() => setSelectedStatus('available')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${selectedStatus === 'available' ? 'bg-amber-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
              >
                Доступные ({activeTopicsCount})
              </button>
            </div>

          </div>
        </div>

        {/* Categories & Topics Grid */}
        <div className="space-y-12">
          {TOPIC_CATEGORIES.map(category => {
            const categoryTopics = filteredTopics.filter(t => t.categoryId === category.id);
            if (categoryTopics.length === 0) return null;

            return (
              <div key={category.id} className="space-y-6">
                
                {/* Category Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-r ${category.gradient} shadow-md`}>
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-white tracking-tight">
                        {category.name}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-bold text-slate-500">
                    Тем в разделе: <strong className="text-slate-300">{categoryTopics.length}</strong>
                  </span>
                </div>

                {/* Topics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryTopics.map(topic => (
                    <div
                      key={topic.id}
                      className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between border ${
                        topic.available
                          ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-amber-500/50 ring-1 ring-amber-500/20 shadow-xl shadow-amber-500/5 hover:-translate-y-1 hover:border-amber-400'
                          : 'bg-slate-900/60 border-slate-800/80 opacity-80 hover:bg-slate-900/90'
                      }`}
                    >
                      <div>
                        {/* Topic Top Row */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded bg-slate-800 font-mono text-[11px] font-bold text-slate-400 border border-slate-700">
                              {topic.code}
                            </span>
                            <span className="text-xs font-extrabold text-amber-400">
                              {topic.targetExam}
                            </span>
                          </div>

                          <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                            topic.available 
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                              : 'bg-slate-800 text-slate-400 border border-slate-700'
                          }`}>
                            {topic.badgeText}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <h4 className="text-base font-bold text-white leading-snug mb-1">
                          {topic.title}
                        </h4>
                        <p className="text-xs text-amber-300 font-medium mb-3">
                          {topic.subtitle}
                        </p>

                        <p className="text-xs text-slate-400 leading-relaxed mb-4">
                          {topic.description}
                        </p>

                        {/* Tag Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {topic.tags.map((tag, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded bg-slate-800/80 text-[10px] font-medium text-slate-400 border border-slate-700/60">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div>
                        {topic.available ? (
                          <button
                            onClick={() => handleSelect(topic.id)}
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-xs shadow-lg transition flex items-center justify-center gap-2 group"
                          >
                            <span>Начать решение ({topic.taskCount} вариантов)</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>

                        ) : (
                          <div className="flex items-center justify-between text-xs text-slate-500 bg-slate-950 p-3 rounded-xl border border-slate-800">
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              <span>Разработка модуля</span>
                            </span>
                            <span className="font-bold text-slate-400">Скоро</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
