import Link from "next/link";
import { PortfolioWedding } from "@/lib/portfolio-data";

interface PortfolioNavigationProps {
  prev: PortfolioWedding | null;
  next: PortfolioWedding | null;
}

export default function PortfolioNavigation({ prev, next }: PortfolioNavigationProps) {
  return (
    <div className="flex items-center justify-between mt-16 pt-8 border-t border-[#CAC6C0]">
        <div className="flex-1">
          {prev && (
            <Link 
              href={`/portfolio/${prev.slug}`}
              className="group inline-flex items-center gap-2 text-[14px] text-[#4D4D4D] hover:text-black transition-colors"
            >
              <span className="transform transition-transform group-hover:-translate-x-1">←</span>
              <span className="font-display italic">{prev.title}</span>
            </Link>
          )}
        </div>

        <div className="flex-1 text-right">
          {next && (
            <Link 
              href={`/portfolio/${next.slug}`}
              className="group inline-flex items-center gap-2 text-[14px] text-[#4D4D4D] hover:text-black transition-colors"
            >
              <span className="font-display italic">{next.title}</span>
              <span className="transform transition-transform group-hover:translate-x-1">→</span>
            </Link>
          )}
        </div>
    </div>
  );
}
