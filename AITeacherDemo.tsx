import React, { useState, useEffect } from 'react';
import { MessageCircle, Mic, MicOff, Volume2, Send, Phone, PhoneOff, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

interface AITeacherDemoProps {
  isActive: boolean;
}

const AITeacherDemo: React.FC<AITeacherDemoProps> = ({ isActive }) => {
  const [isInCall, setIsInCall] = useState(false);
  const [timer, setTimer] = useState(0);
  const [waveformBars, setWaveformBars] = useState([1, 3, 2, 4, 2, 5, 3, 2, 4, 1, 3]);

  // Start call immediately when demo becomes active
  useEffect(() => {
    if (isActive && !isInCall) {
      setIsInCall(true);
      setTimer(0);
    }
  }, [isActive, isInCall]);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isInCall) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isInCall]);

  // Waveform animation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isInCall) {
      interval = setInterval(() => {
        setWaveformBars(prev => prev.map(() => Math.floor(Math.random() * 5) + 1));
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isInCall]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleEndCall = () => {
    setIsInCall(false);
    setTimer(0);
  };

  if (!isInCall) {
    return (
      <div className="p-6 bg-gradient-to-br from-blue-50/50 to-purple-50/30 rounded-xl border border-blue-200/30 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-accent-blue/10 flex items-center justify-center">
              <MessageCircle className="h-6 w-6 text-accent-blue" />
            </div>
            <div>
              <h4 className="font-medium text-foreground">AI Teacher</h4>
              <p className="text-sm text-muted-foreground">Ready to practice</p>
            </div>
          </div>
          <div className="text-xs bg-accent-blue/10 text-accent-blue px-3 py-1 rounded-full font-medium">Available</div>
        </div>

        <div className="text-center py-8">
          <div className="w-16 h-16 bg-accent-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="h-8 w-8 text-white" />
          </div>
          <h3 className="font-semibold text-lg text-foreground mb-2">Start Voice Session</h3>
          <p className="text-muted-foreground text-sm mb-4">Practice speaking with your AI teacher</p>
          <div className="text-xs text-muted-foreground">🎯 Today's topic: Ordering at a café</div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white/95 rounded-xl border border-gray-200/50 shadow-clean-lg backdrop-blur-sm">
      {/* Call Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-accent-blue" />
          <span className="font-medium text-foreground">AI teacher on call</span>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex items-center gap-2">
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
          <button onClick={handleEndCall}>
            <X className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
          </button>
        </div>
      </div>

      {/* Voice Session Status */}
      <div className="text-center mb-8">
        <h3 className="font-medium text-lg text-foreground mb-2">Voice session in progress...</h3>
        
        {/* Timer */}
        <div className="text-3xl font-mono text-foreground mb-6">
          {formatTime(timer)}
        </div>

        {/* Animated Waveform */}
        <div className="flex items-center justify-center gap-1 mb-8 h-12">
          {waveformBars.map((height, index) => (
            <div
              key={index}
              className="bg-orange-400 rounded-full transition-all duration-300 ease-in-out"
              style={{
                width: '4px',
                height: `${height * 8}px`,
                opacity: 0.7 + (height * 0.06)
              }}
            />
          ))}
        </div>

        {/* Microphone Icon */}
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <Mic className="h-8 w-8 text-gray-600" />
        </div>

        {/* Current Teaching Context */}
        <div className="bg-blue-50 rounded-lg p-3 mb-6">
          <p className="text-sm text-blue-800 font-medium">
            🎯 "Try ordering: 'Un café con leche, por favor'"
          </p>
          <p className="text-xs text-blue-600 mt-1">
            Your AI teacher is listening and will provide feedback
          </p>
        </div>
      </div>

      {/* Hang Up Button */}
      <button
        onClick={handleEndCall}
        className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
      >
        <PhoneOff className="h-4 w-4" />
        Hang Up
      </button>
    </div>
  );
};

export default AITeacherDemo;