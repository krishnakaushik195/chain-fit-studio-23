import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Chain {
  name: string;
  data: string;
}

interface ControlPanelProps {
  chains: Chain[];
  currentIndex: number;
  onSelectChain: (index: number) => void;
  chainScale: number;
  onChainScaleChange: (value: number) => void;
  verticalOffset: number;
  onVerticalOffsetChange: (value: number) => void;
  onPrevious: () => void;
  onNext: () => void;
}

export const ControlPanel = ({
  chains,
  currentIndex,
  onSelectChain,
  chainScale,
  onChainScaleChange,
  verticalOffset,
  onVerticalOffsetChange,
  onPrevious,
  onNext,
}: ControlPanelProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div
      className={cn(
        'fixed md:static bottom-0 left-0 right-0 glass-panel border-t border-gold/20 md:border-r md:border-t-0 md:w-[350px] max-h-[35vh] md:max-h-screen overflow-y-auto transition-transform duration-300 z-50',
        isCollapsed && 'translate-y-[calc(100%-56px)] md:translate-y-0'
      )}
    >
      {/* Mobile Header */}
      <div
        className="md:hidden flex justify-between items-center p-4 bg-transparent backdrop-blur-md cursor-pointer border-b border-gold/40"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="text-white text-base font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]">⚙️ Controls</div>
        <ChevronDown
          className={cn(
            'w-6 h-6 transition-transform text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]',
            !isCollapsed && 'rotate-180'
          )}
        />
      </div>

      {/* Content */}
      <div className="p-5 md:p-8 space-y-6">
        {/* Adjustments */}
        <div className="space-y-4">
          <h3 className="text-sm md:text-base font-semibold text-gold drop-shadow-[0_0_10px_rgba(212,175,55,1)]">Adjustments</h3>

          {/* Chain Size */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs md:text-sm">
              <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]">Chain Size</span>
              <span className="text-gold font-semibold drop-shadow-[0_0_10px_rgba(212,175,55,1)]">{Math.round(chainScale * 100)}%</span>
            </div>
            <input
              type="range"
              min="0.4"
              max="2.5"
              step="0.05"
              value={chainScale}
              onChange={(e) => onChainScaleChange(parseFloat(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-black"
            />
          </div>

          {/* Vertical Position */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs md:text-sm">
              <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]">Vertical Position</span>
              <span className="text-gold font-semibold drop-shadow-[0_0_10px_rgba(212,175,55,1)]">{verticalOffset.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="-0.3"
              max="0.5"
              step="0.05"
              value={verticalOffset}
              onChange={(e) => onVerticalOffsetChange(parseFloat(e.target.value))}
              className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-black"
            />
          </div>
        </div>

        {/* Chain Selection */}
        <div className="space-y-4">
          <h3 className="text-sm md:text-base font-semibold text-gold drop-shadow-[0_0_10px_rgba(212,175,55,1)]">Select Chain</h3>

        </div>
      </div>
    </div>
  );
};
