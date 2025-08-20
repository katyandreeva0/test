export default function BackgroundVectors() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Top left area */}
      <div className="absolute top-20 left-10 opacity-10">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M15 10h30c2.76 0 5 2.24 5 5v30c0 2.76-2.24 5-5 5H15c-2.76 0-5-2.24-5-5V15c0-2.76 2.24-5 5-5z" stroke="#3B82F6" strokeWidth="2"/>
          <path d="M20 20h20M20 30h15M20 40h18" stroke="#3B82F6" strokeWidth="1.5"/>
        </svg>
      </div>

      {/* Speech bubble top right */}
      <div className="absolute top-32 right-16 opacity-8">
        <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
          <path d="M10 10h50c5.5 0 10 4.5 10 10v20c0 5.5-4.5 10-10 10H25l-10 8v-8H10c-5.5 0-10-4.5-10-10V20c0-5.5 4.5-10 10-10z" fill="#EF4444" fillOpacity="0.1"/>
          <circle cx="25" cy="30" r="3" fill="#EF4444" fillOpacity="0.3"/>
          <circle cx="40" cy="30" r="3" fill="#EF4444" fillOpacity="0.3"/>
          <circle cx="55" cy="30" r="3" fill="#EF4444" fillOpacity="0.3"/>
        </svg>
      </div>

      {/* Geometric circle - middle left */}
      <div className="absolute top-1/3 left-4 opacity-6">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="50" stroke="#10B981" strokeWidth="2" strokeDasharray="8 8"/>
          <circle cx="60" cy="60" r="30" fill="#10B981" fillOpacity="0.1"/>
        </svg>
      </div>

      {/* Book icon - middle right */}
      <div className="absolute top-1/2 right-8 opacity-12">
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
          <path d="M20 15v40l15-5 15 5V15z" fill="#8B5CF6" fillOpacity="0.15"/>
          <path d="M20 15h30v40l-15-5-15 5V15z" stroke="#8B5CF6" strokeWidth="2"/>
          <path d="M35 15v35" stroke="#8B5CF6" strokeWidth="1"/>
        </svg>
      </div>

      {/* Quote marks - lower left */}
      <div className="absolute bottom-1/3 left-12 opacity-10">
        <svg width="50" height="40" viewBox="0 0 50 40" fill="none">
          <path d="M8 5c-3 0-5 2-5 5v10c0 3 2 5 5 5h5c3 0 5-2 5-5v-5c0-5-4-10-10-10zM32 5c-3 0-5 2-5 5v10c0 3 2 5 5 5h5c3 0 5-2 5-5v-5c0-5-4-10-10-10z" fill="#F59E0B"/>
        </svg>
      </div>

      {/* Triangle pattern - bottom right */}
      <div className="absolute bottom-40 right-20 opacity-8">
        <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
          <path d="M20 60L35 30L50 60z" fill="#EC4899" fillOpacity="0.1" stroke="#EC4899" strokeWidth="2"/>
          <path d="M60 20L75 50L90 20z" fill="#EC4899" fillOpacity="0.15"/>
        </svg>
      </div>

      {/* Small conversation bubble - bottom */}
      <div className="absolute bottom-20 left-1/3 opacity-8">
        <svg width="60" height="45" viewBox="0 0 60 45" fill="none">
          <ellipse cx="30" cy="20" rx="25" ry="15" fill="#06B6D4" fillOpacity="0.1" stroke="#06B6D4" strokeWidth="1.5"/>
          <path d="M20 35c5-5 10-10 10-15" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>

      {/* Letter symbols - top center */}
      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 opacity-6">
        <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
          <text x="10" y="25" className="text-2xl" fill="#7C3AED" fillOpacity="0.4" fontFamily="serif">A</text>
          <text x="35" y="25" className="text-2xl" fill="#7C3AED" fillOpacity="0.4" fontFamily="serif">É</text>
          <text x="60" y="25" className="text-2xl" fill="#7C3AED" fillOpacity="0.4" fontFamily="serif">Ñ</text>
        </svg>
      </div>

      {/* Floating dots pattern */}
      <div className="absolute top-2/3 left-16 opacity-8">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <circle cx="15" cy="15" r="4" fill="#F97316" fillOpacity="0.4"/>
          <circle cx="45" cy="15" r="3" fill="#F97316" fillOpacity="0.3"/>
          <circle cx="30" cy="35" r="5" fill="#F97316" fillOpacity="0.2"/>
          <circle cx="15" cy="45" r="2" fill="#F97316" fillOpacity="0.5"/>
        </svg>
      </div>

      {/* Book spine - far right */}
      <div className="absolute top-1/4 right-4 opacity-10">
        <svg width="20" height="100" viewBox="0 0 20 100" fill="none">
          <rect x="5" y="10" width="10" height="80" fill="#DC2626" fillOpacity="0.2" stroke="#DC2626" strokeWidth="1"/>
          <line x1="10" y1="20" x2="10" y2="80" stroke="#DC2626" strokeWidth="0.5"/>
        </svg>
      </div>

      {/* Wavy line - bottom center */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-6">
        <svg width="200" height="30" viewBox="0 0 200 30" fill="none">
          <path d="M0 15 Q50 5 100 15 T200 15" stroke="#059669" strokeWidth="2" fill="none" strokeDasharray="5 5"/>
        </svg>
      </div>
    </div>
  );
}