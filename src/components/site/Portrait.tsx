import { SmartImage } from './SmartImage';
import { Logo } from './primitives';
import { cn } from '@/lib/utils';

export function Portrait({ src, name, className }: { src?: string; name: string; className?: string }) {
  return src ? <SmartImage src={src} alt={name} wrapperClassName={className} /> : (
    <div role="img" aria-label={name} className={cn('flex items-center justify-center overflow-hidden rounded-lg bg-secondary', className)}>
      <Logo className="h-auto max-h-20 w-2/3 max-w-40 opacity-40" />
    </div>
  );
}
