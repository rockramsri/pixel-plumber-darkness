export const PixelBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated pixel grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '8px 8px',
        }}
      />
      
      {/* Enhanced floating pixel blocks with more variety */}
      <div className="absolute top-20 left-[10%] w-8 h-8 bg-primary/10 border-2 border-primary/20 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-[15%] w-6 h-6 bg-secondary/10 border-2 border-secondary/20 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-60 left-[20%] w-10 h-10 bg-accent/10 border-2 border-accent/20 animate-float rounded-full" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 right-[25%] w-8 h-8 bg-primary/10 border-2 border-primary/20 animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-60 left-[30%] w-6 h-6 bg-secondary/10 border-2 border-secondary/20 animate-float" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-[30%] right-[40%] w-4 h-4 bg-accent/10 border-2 border-accent/20 animate-float rotate-45" style={{ animationDelay: '2.5s' }} />
      <div className="absolute bottom-[30%] left-[40%] w-5 h-5 bg-primary/10 border-2 border-primary/20 animate-float rounded-full" style={{ animationDelay: '1.2s' }} />
      
      {/* Coin particles */}
      <div className="absolute top-[15%] left-[60%] text-2xl animate-coin-spin opacity-20" style={{ animationDelay: '0.3s' }}>🪙</div>
      <div className="absolute top-[70%] right-[20%] text-xl animate-coin-spin opacity-20" style={{ animationDelay: '1.8s' }}>🪙</div>
      <div className="absolute bottom-[20%] left-[15%] text-xl animate-coin-spin opacity-20" style={{ animationDelay: '0.9s' }}>🪙</div>
      
      {/* Power-up stars */}
      <div className="absolute top-[50%] left-[5%] text-3xl animate-float opacity-10" style={{ animationDelay: '0.7s' }}>⭐</div>
      <div className="absolute top-[25%] right-[10%] text-2xl animate-float opacity-10" style={{ animationDelay: '2.2s' }}>⭐</div>
    </div>
  );
};
