import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

interface Achievement {
  id: string;
  title: string;
  icon: string;
  unlocked: boolean;
}

export const GameHUD = () => {
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [coins, setCoins] = useState(0);
  const [showAchievement, setShowAchievement] = useState(false);
  const [currentAchievement, setCurrentAchievement] = useState<Achievement | null>(null);

  const achievements: Achievement[] = [
    { id: "scroll", title: "Explorer", icon: "🗺️", unlocked: false },
    { id: "projects", title: "Code Master", icon: "💻", unlocked: false },
    { id: "skills", title: "Skill Collector", icon: "⭐", unlocked: false },
    { id: "contact", title: "Social Butterfly", icon: "🦋", unlocked: false },
  ];

  const xpForNextLevel = level * 100;
  const xpProgress = (xp / xpForNextLevel) * 100;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const newXp = Math.floor(scrollPercent * 5);
      const newCoins = Math.floor(scrollPercent / 10);
      
      setXp(newXp);
      setCoins(newCoins);
      setScore(Math.floor(scrollPercent * 10));

      // Level up system
      const newLevel = Math.floor(newXp / 100) + 1;
      if (newLevel > level) {
        setLevel(newLevel);
        triggerLevelUp();
      }
    };

    const triggerLevelUp = () => {
      // Visual feedback for level up
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBic=');
      audio.play().catch(() => {});
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [level]);

  return (
    <>
      {/* Achievement Notification */}
      {showAchievement && currentAchievement && (
        <div className="fixed top-24 right-4 z-50 animate-in slide-in-from-right duration-500">
          <Card className="p-4 bg-accent border-4 border-foreground shadow-[8px_8px_0px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{currentAchievement.icon}</span>
              <div>
                <p className="font-pixel text-xs text-accent-foreground">Achievement Unlocked!</p>
                <p className="font-pixel text-[10px] text-accent-foreground/80">{currentAchievement.title}</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* HUD - Desktop */}
      <div className="hidden md:block fixed top-20 right-4 z-40">
        <Card className="p-4 bg-background/90 backdrop-blur-sm border-2 border-primary/40 shadow-[4px_4px_0px_rgba(0,0,0,0.6)] min-w-[200px]">
          {/* Level Display */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="font-pixel text-xs text-primary">LEVEL</span>
              <span className="font-pixel text-lg text-primary">{level}</span>
            </div>
          </div>

          {/* XP Bar */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="font-pixel text-[10px] text-foreground/60">XP</span>
              <span className="font-pixel text-[10px] text-foreground/60">{xp}/{xpForNextLevel}</span>
            </div>
            <div className="w-full h-3 bg-muted border-2 border-primary/20">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                style={{ width: `${xpProgress}%` }}
              />
            </div>
          </div>

          {/* Score */}
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <span className="font-pixel text-xs text-secondary">SCORE</span>
              <span className="font-pixel text-lg text-secondary">{score.toString().padStart(6, '0')}</span>
            </div>
          </div>

          {/* Coins */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl">🪙</span>
              <span className="font-pixel text-sm text-accent">× {coins}</span>
            </div>
          </div>

          {/* Health Bar (Lives) */}
          <div className="mt-4 pt-4 border-t-2 border-dashed border-primary/20">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <span key={i} className="text-xl">❤️</span>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Mobile HUD */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-40">
        <Card className="p-3 bg-background/90 backdrop-blur-sm border-2 border-primary/40 shadow-[4px_4px_0px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="font-pixel text-xs text-primary mb-1">LVL {level}</div>
              <div className="w-full h-2 bg-muted border border-primary/20">
                <div 
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${xpProgress}%` }}
                />
              </div>
            </div>
            <div className="text-center">
              <div className="font-pixel text-[10px] text-secondary mb-1">SCORE</div>
              <div className="font-pixel text-xs text-secondary">{score}</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <span>🪙</span>
                <span className="font-pixel text-xs text-accent">×{coins}</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};
