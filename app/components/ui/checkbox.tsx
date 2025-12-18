interface Props {
  checked?: boolean;
  onCheckedChange?: (value: boolean) => void;
  className?: string;
}

export function Checkbox({ checked, onCheckedChange, className }: Props) {
  return (
    <input
      type="checkbox"
      className={`
        h-4 w-4 rounded border-[var(--input-border)]
        text-[var(--brand)]
        focus:ring-[var(--brand)]
        cursor-pointer ${className}
      `}
      checked={checked}
      onChange={(e) => onCheckedChange?.(e.target.checked)}
    />
  );
}
