import React, { useState } from 'react';
import { Volume2, BookOpen, PenTool } from 'lucide-react';

interface ReadingDemoProps {
  isActive: boolean;
}

const ReadingDemo: React.FC<ReadingDemoProps> = ({ isActive }) => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 rounded-xl border border-blue-200/30 bg-white/80 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h4 className="font-medium text-foreground">Reading Stories</h4>
            <p className="text-sm text-muted-foreground">Level-appropriate content</p>
          </div>
        </div>
        <div className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">A1</div>
      </div>

      {/* Story Content */}
      <div className="space-y-4 mb-6">
        <h3 className="text-lg font-medium text-foreground">Carta desde la cafetería</h3>
        
        <div className="text-foreground leading-relaxed space-y-3">
          <p>
            Querida Ana, Escribo esta carta desde una cafetería. Estoy en el café ahora. La cafetería es pequeña. Veo al barista. Él sonríe y dice: "Hola".
          </p>
          <p>
            Pido un café con leche y azúcar. El barista me pregunta: "¿Con leche o solo?" Le digo: "Con leche, por favor". Ahora disfruto mi café. Te mando un abrazo.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full bg-white dark:bg-gray-800 border border-border rounded-lg p-3 flex items-center justify-center gap-2 hover:bg-muted/50 transition-colors">
          <PenTool className="h-4 w-4 text-muted-foreground" />
          <span className="text-foreground">Writing Practice</span>
        </button>
        
        <button className="w-full bg-primary text-primary-foreground rounded-lg p-3 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
          <BookOpen className="h-4 w-4" />
          <span className="font-medium">Go to Flashcards</span>
        </button>
      </div>
    </div>
  );
};

export default ReadingDemo;