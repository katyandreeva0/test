import React, { useState, useEffect } from 'react';
import { TrendingUp, Target, Calendar, Award, BookOpen } from 'lucide-react';

interface ProgressDemoProps {
  isActive: boolean;
}

const ProgressDemo: React.FC<ProgressDemoProps> = ({ isActive }) => {
  const [animatedStats, setAnimatedStats] = useState({
    storiesRead: 0,
    vocabLearned: 0,
    streakDays: 0,
    timeSpent: 0
  });

  const targetStats = {
    storiesRead: 12,
    vocabLearned: 247,
    streakDays: 8,
    timeSpent: 24
  };

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        setAnimatedStats(targetStats);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isActive]);

  const languages = [
    { 
      name: 'Spanish', 
      progress: 68, 
      level: 'A2', 
      stories: 8, 
      vocab: 156,
      color: 'bg-blue-500'
    },
    { 
      name: 'French', 
      progress: 34, 
      level: 'A1', 
      stories: 4, 
      vocab: 91,
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-green-50/50 to-blue-50/30 rounded-xl border border-green-200/30 bg-white/80 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h4 className="font-medium text-foreground">Progress Tracking</h4>
            <p className="text-sm text-muted-foreground">Your learning journey</p>
          </div>
        </div>
        <div className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium flex items-center gap-1">
          <TrendingUp className="h-3 w-3" />
          +12% this week
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white rounded-lg p-3 text-center">
          <BookOpen className="h-5 w-5 text-blue-600 mx-auto mb-1" />
          <div className="font-semibold text-lg text-foreground transition-all duration-1000">
            {animatedStats.storiesRead}
          </div>
          <div className="text-xs text-muted-foreground">Stories Read</div>
        </div>
        <div className="bg-white rounded-lg p-3 text-center">
          <Target className="h-5 w-5 text-green-600 mx-auto mb-1" />
          <div className="font-semibold text-lg text-foreground transition-all duration-1000">
            {animatedStats.vocabLearned}
          </div>
          <div className="text-xs text-muted-foreground">Words Learned</div>
        </div>
      </div>

      {/* Language Progress */}
      <div className="space-y-3 mb-4">
        {languages.map((lang, index) => (
          <div key={lang.name} className="bg-white rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 ${lang.color} rounded-full`}></div>
                <span className="font-medium text-sm text-foreground">{lang.name}</span>
                <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{lang.level}</span>
              </div>
              <span className="text-xs text-muted-foreground">{lang.progress}%</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div 
                className={`h-2 ${lang.color} rounded-full transition-all duration-1000 ease-out`}
                style={{ 
                  width: isActive ? `${lang.progress}%` : '0%',
                  transitionDelay: `${index * 200}ms`
                }}
              ></div>
            </div>
            
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{lang.stories} stories completed</span>
              <span>{lang.vocab} words mastered</span>
            </div>
          </div>
        ))}
      </div>

      {/* Achievement */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-3">
        <div className="flex items-center gap-2">
          <Award className="h-5 w-5 text-yellow-600" />
          <div className="flex-1">
            <p className="font-medium text-sm text-foreground">Week Streak!</p>
            <p className="text-xs text-muted-foreground">
              {animatedStats.streakDays} days in a row • Keep it up!
            </p>
          </div>
          <div className="text-lg">🔥</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressDemo;