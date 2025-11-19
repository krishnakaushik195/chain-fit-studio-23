interface FloatingSlidersProps {
  chainScale: number;
  onChainScaleChange: (value: number) => void;
  verticalOffset: number;
  onVerticalOffsetChange: (value: number) => void;
}

export const FloatingSliders = ({
  chainScale,
  onChainScaleChange,
  verticalOffset,
  onVerticalOffsetChange,
}: FloatingSlidersProps) => {
  return (
    <>
      {/* Chain Size - Right Side */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-3">
        <div className="writing-mode-vertical text-xs text-gold font-semibold drop-shadow-[0_0_10px_rgba(212,175,55,1)] rotate-180">
          Chain Size
        </div>
        <input
          type="range"
          min="0.4"
          max="2.5"
          step="0.05"
          value={chainScale}
          onChange={(e) => onChainScaleChange(parseFloat(e.target.value))}
          className="-rotate-90 w-48 h-2 appearance-none bg-gradient-to-r from-gold/20 to-transparent rounded-full cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-br [&::-webkit-slider-thumb]:from-gold [&::-webkit-slider-thumb]:to-gold-dark [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-gold/50 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gold/50"
        />
        <div className="text-xs text-gold font-semibold drop-shadow-[0_0_10px_rgba(212,175,55,1)]">
          {Math.round(chainScale * 100)}%
        </div>
      </div>

      {/* Vertical Position - Left Side */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-3">
        <div className="writing-mode-vertical text-xs text-gold font-semibold drop-shadow-[0_0_10px_rgba(212,175,55,1)] rotate-180">
          Vertical Pos
        </div>
        <input
          type="range"
          min="-0.3"
          max="0.5"
          step="0.05"
          value={verticalOffset}
          onChange={(e) => onVerticalOffsetChange(parseFloat(e.target.value))}
          className="-rotate-90 w-48 h-2 appearance-none bg-gradient-to-r from-gold/20 to-transparent rounded-full cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-br [&::-webkit-slider-thumb]:from-gold [&::-webkit-slider-thumb]:to-gold-dark [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:shadow-gold/50 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gold/50"
        />
        <div className="text-xs text-gold font-semibold drop-shadow-[0_0_10px_rgba(212,175,55,1)]">
          {verticalOffset.toFixed(2)}
        </div>
      </div>
    </>
  );
};
