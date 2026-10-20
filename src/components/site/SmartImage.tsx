import { useEffect, useRef, useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string;
  eager?: boolean;
};

/** Imagem com lazy-loading, placeholder animado e fallback elegante. */
export function SmartImage({ src, alt = "", className, wrapperClassName, eager, ...rest }: Props) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(!src);
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const image = imageRef.current;
    if (image?.complete && image.naturalWidth > 0) setLoaded(true);
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      {!loaded && !failed && <div className="shimmer absolute inset-0" aria-hidden />}
      {failed ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-brand opacity-80" role="img" aria-label={alt}>
          <ImageOff className="h-8 w-8 text-primary-foreground/70" aria-hidden />
        </div>
      ) : (
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={cn(
            "h-full w-full object-cover transition-[opacity,filter,transform] duration-700",
            loaded ? "opacity-100 blur-0" : "opacity-0 blur-md",
            className,
          )}
          {...rest}
        />
      )}
    </div>
  );
}
