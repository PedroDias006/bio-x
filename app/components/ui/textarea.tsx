import { cn } from "@/lib/utils";
import * as React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "w-full min-h-[120px] px-3 py-2 rounded-md border border-[var(--input-border)] bg-white shadow-sm text-[var(--text-dark)] placeholder:text-gray-400 focus:ring-2 focus:ring-[var(--brand)] focus:outline-none transition",
        className
      )}
      {...props}
    />
  );
}
