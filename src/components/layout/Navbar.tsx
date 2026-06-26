"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-none border border-white/[0.03] z-50 backdrop-blur-xl bg-background/40 flex justify-between items-center px-8 py-4 transition-all duration-500 ease-out hover:border-white/10 hover:bg-background/80">
      <Link href="/" className="flex items-center gap-3 group">
        <Image src="/xephorix.png" alt="Xephorix Logo" width={32} height={32} className="object-contain" unoptimized quality={100} />
        <div className="font-mono text-[16px] tracking-[0.1em] text-foreground uppercase font-bold flex items-center group-hover:text-forsythia transition-colors duration-300">
          XEPHORIX<span className="text-foreground/40 ml-1 font-light group-hover:text-forsythia/50 transition-colors duration-300">AI</span>
        </div>
      </Link>
      
      <nav className="hidden md:flex gap-10 items-center">
        {['Network', 'Infrastructure', 'Pricing', 'Docs'].map((item) => {
          const path = `/${item.toLowerCase()}`;
          const isActive = pathname === path;
          return (
            <Link 
              key={item} 
              href={path} 
              className={`font-mono text-[10px] transition-all uppercase tracking-widest ${isActive ? 'text-forsythia font-bold drop-shadow-[0_0_8px_rgba(255,200,1,0.5)]' : 'text-foreground/50 hover:text-foreground'}`}
            >
              {item}
            </Link>
          );
        })}
      </nav>

      <Link href="/deploy" className="text-foreground font-mono text-[10px] border border-white/10 px-5 py-2 hover:bg-foreground hover:text-background transition-all uppercase tracking-widest group">
        Deploy Node
      </Link>
    </header>
  );
}
