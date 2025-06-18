// components/ui/Card.tsx
"use client";

import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any; // allow any other div props (e.g. onClick, style, etc.)
}

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }: CardProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}
