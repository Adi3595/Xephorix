export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Hexagon */}
      <path 
        d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z" 
        stroke="currentColor" 
        strokeWidth="6" 
        strokeLinejoin="miter"
      />
      {/* Inner geometric X */}
      <path 
        d="M30 30L70 70M70 30L30 70" 
        stroke="currentColor" 
        strokeWidth="8" 
        strokeLinecap="square"
      />
      {/* Central Node */}
      <circle 
        cx="50" 
        cy="50" 
        r="8" 
        fill="currentColor" 
      />
    </svg>
  );
}
