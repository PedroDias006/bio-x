import { cn } from "@/lib/utils";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full h-11 px-3 rounded-md border border-[var(--input-border)] bg-white shadow-sm text-[var(--text-dark)] placeholder:text-gray-400 focus:ring-2 focus:ring-[var(--brand)] focus:outline-none transition",
        className
      )}
      {...props}
    />
  );
}
