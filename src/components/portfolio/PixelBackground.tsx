export const PixelBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated pixel grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '8px 8px',
        }}
      />
      
      {/* Floating pixel blocks */}
      <div className="absolute top-20 left-[10%] w-8 h-8 bg-primary/10 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-[15%] w-6 h-6 bg-secondary/10 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-60 left-[20%] w-10 h-10 bg-accent/10 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 right-[25%] w-8 h-8 bg-primary/10 animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-60 left-[30%] w-6 h-6 bg-secondary/10 animate-float" style={{ animationDelay: '0.5s' }} />
    </div>
  );
};
