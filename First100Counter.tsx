import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Users, Sparkles, Star, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function First100Counter() {
  const [currentCount] = useState(33); // Current number of users
  const totalSpots = 100;
  const progressPercentage = (currentCount / totalSpots) * 100;

  // Simulate realistic joining activity with excitement
  const [recentJoins, setRecentJoins] = useState([
    { name: "Maria S.", time: "2 minutes ago", location: "Barcelona", action: "joined the pioneers" },
    { name: "Alex K.", time: "7 minutes ago", location: "Paris", action: "became a pioneer" },
    { name: "James W.", time: "12 minutes ago", location: "London", action: "joined the movement" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Occasionally add new "recent joins" for social proof
      if (Math.random() < 0.3) {
        const names = ["Sophie L.", "Carlos R.", "Emma T.", "Lucas M.", "Ana G.", "David P."];
        const locations = ["Madrid", "Montreal", "Berlin", "Rome", "Lisbon", "Brussels"];
        const actions = ["joined the pioneers", "became a pioneer", "joined the movement", "became a founder"];
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomLocation = locations[Math.floor(Math.random() * locations.length)];
        const randomAction = actions[Math.floor(Math.random() * actions.length)];
        
        setRecentJoins(prev => [
          { name: randomName, time: "Just now", location: randomLocation, action: randomAction },
          ...prev.slice(0, 2).map(join => ({
            ...join,
            time: join.time === "Just now" ? "2 minutes ago" : 
                  join.time === "2 minutes ago" ? "7 minutes ago" : "12 minutes ago"
          }))
        ]);
      }
    }, 15000); // Update every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-xs">
      <Card className="border-2 border-accent-blue/20 bg-white/95 backdrop-blur-sm shadow-clean-lg">
        <CardContent className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 text-xs font-semibold">
              <Sparkles className="h-3 w-3 mr-1" />
              PIONEER PROGRAM
            </Badge>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Users className="h-3 w-3" />
              Growing
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-foreground">Pioneer Community</span>
              <span className="text-xs text-accent-blue font-semibold">{currentCount}/100</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 mb-1">
              <div 
                className="bg-gradient-to-r from-accent-blue to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              <span className="font-semibold text-accent-blue">Building the future together</span>
            </p>
          </div>

          {/* Recent Activity */}
          <div className="border-t border-border pt-3">
            <h4 className="text-xs font-medium text-foreground mb-2 flex items-center gap-1">
              <Star className="h-3 w-3 text-yellow-500" />
              New Pioneers
            </h4>
            <div className="space-y-2">
              {recentJoins.map((join, index) => (
                <div key={`${join.name}-${join.time}-${index}`} className="text-xs">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="font-medium text-foreground">{join.name}</span>
                      <span className="text-muted-foreground ml-1">from {join.location}</span>
                    </div>
                    <span className="text-muted-foreground">{join.time}</span>
                  </div>
                  <p className="text-accent-blue font-medium">{join.action} 🚀</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="border-t border-border pt-3 mt-3">
            <button 
              className="w-full btn-primary text-xs py-2 hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-1"
              onClick={() => {
                const element = document.getElementById('early-access');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Rocket className="h-3 w-3" />
              Join the Pioneers
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}