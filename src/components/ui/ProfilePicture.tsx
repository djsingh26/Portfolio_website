import React from 'react';

type ProfilePictureProps = {
  src?: string;
  alt?: string;
  /** Preset sizes or a pixel number */
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  className?: string;
  rounded?: boolean;
  /** Show decorative gradient ring */
  showRing?: boolean;
  /** Pixel thickness of the ring (used when showRing=true) */
  ringWidth?: number;
};

const PRESET: Record<string, number> = {
  sm: 48,
  md: 96,
  lg: 160,
  xl: 240,
};

export function ProfilePicture({
  src,
  alt = 'Profile picture',
  size = 'md',
  className = '',
  rounded = true,
  showRing = true,
  ringWidth = 8,
}: ProfilePictureProps) {
  const px = typeof size === 'number' ? size : PRESET[size as string] ?? PRESET.md;

  const outerSize = showRing ? px + ringWidth * 2 : px;

  const gradientStyle: React.CSSProperties = {
    padding: showRing ? ringWidth : 0,
    borderRadius: rounded ? 9999 : 12,
    background: 'linear-gradient(135deg,#06b6d4 0%, #fb923c 60%, #e879f9 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: outerSize,
    height: outerSize,
  };

  const innerStyle: React.CSSProperties = {
    width: px,
    height: px,
    borderRadius: rounded ? 9999 : 10,
    overflow: 'hidden',
    position: 'relative',
    background: 'rgba(255,255,255,0.85)',
  };

  return (
    <div style={{ width: outerSize, height: outerSize }} className={`relative ${className}`}>
      <div style={gradientStyle} aria-hidden="true">
        <div style={innerStyle} className="shadow-lg dark:shadow-none">
          {src ? (
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-xl font-semibold text-ink-500 dark:text-stone-300">
              {alt[0]?.toUpperCase() ?? ''}
            </div>
          )}

          {/* decorative glow */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: '0 12px 30px rgba(99,102,241,0.15), inset 0 0 32px rgba(249,115,22,0.06)',
              borderRadius: rounded ? 9999 : 10,
            }}
          />

          {/* small badge (example) */}
          <div className="absolute -right-2 -bottom-2 hidden md:flex items-center justify-center rounded-full bg-white/80 text-xs font-semibold text-ink-900 px-2 py-1 shadow-sm dark:bg-ink-900/70 dark:text-white">
            Me
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePicture;
