export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g transform="translate(50 50) rotate(45)">
        <path 
          d="M -10 -10 L -10 -25 L 0 -35 L 10 -25 L 10 -10 L 25 -10 L 35 0 L 25 10 L 10 10 L 10 25 L 0 35 L -10 25 L -10 10 L -25 10 L -35 0 L -25 -10 Z" 
          stroke="currentColor" 
          strokeWidth="5" 
          strokeLinejoin="miter" 
        />
        <line x1="0" y1="-14" x2="0" y2="-24" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="0" cy="-26" r="2.5" fill="currentColor" />
        
        <line x1="14" y1="0" x2="24" y2="0" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="26" cy="0" r="2.5" fill="currentColor" />
        
        <line x1="0" y1="14" x2="0" y2="24" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="0" cy="26" r="2.5" fill="currentColor" />
        
        <line x1="-14" y1="0" x2="-24" y2="0" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="-26" cy="0" r="2.5" fill="currentColor" />
      </g>
      <circle cx="50" cy="50" r="5" fill="#EAB308" />
    </svg>
  );
}
