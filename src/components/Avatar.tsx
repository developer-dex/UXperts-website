"use client";
import * as React from "react";

interface AvatarProps {
  imageUrl: string;
  size: number;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  opacity?: number;
  className?: string;
  responsiveClasses?: string;
}

export function Avatar({
  imageUrl,
  size,
  position,
  opacity = 1,
  className = "",
  responsiveClasses = ""
}: AvatarProps) {
  // Instead of using template literals, we'll apply inline styles for dynamic values
  const sizeStyle = { width: `${size}px`, height: `${size}px` };
  const positionStyle = Object.fromEntries(
    Object.entries(position).map(([key, value]) => [key, value])
  );

  return (
    <div
      className={`absolute rounded-2xl flex-shrink-0 ${responsiveClasses} ${className}`}
      style={{ ...positionStyle, opacity, ...sizeStyle }}
    >
      <div className="flex absolute top-0 left-0 justify-center items-center rounded-2xl flex-shrink-0" style={sizeStyle}>
        <img
          src={imageUrl}
          alt=""
          className="flex-shrink-0 rounded-[19px] absolute left-0 top-0"
          style={sizeStyle}
        />
      </div>
      <div className="absolute top-0 left-0 rounded-2xl border-white border-solid border flex-shrink-0" style={sizeStyle} />
    </div>
  );
}
