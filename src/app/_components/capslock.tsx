interface CapsLockProps {
  text: string;
}

export function CapsLock({ text }: CapsLockProps) {
  const caps = text.toUpperCase();

  return <p>{caps}</p>;
}
