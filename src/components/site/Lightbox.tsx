import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Props = {
  images: string[];
  index: number | null;
  onClose: () => void;
  onChange: (i: number) => void;
  alt?: string;
};

export function Lightbox({ images, index, onClose, onChange, alt = "Fotografia" }: Props) {
  const open = index !== null;
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange(((index ?? 0) + 1) % images.length);
      if (e.key === "ArrowLeft") onChange(((index ?? 0) - 1 + images.length) % images.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, index, images.length, onClose, onChange]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Galeria ampliada"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-plum/90 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <Button
            variant="ghost"
            size="icon"
            aria-label="Fechar"
            onClick={onClose}
            className="absolute right-5 top-5 rounded-full bg-cream/10 p-3 text-cream hover:bg-cream/20"
          >
            <X className="h-6 w-6" />
          </Button>
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Anterior"
                onClick={(e) => {
                  e.stopPropagation();
                  onChange(((index ?? 0) - 1 + images.length) % images.length);
                }}
                className="absolute left-4 rounded-full bg-cream/10 p-3 text-cream hover:bg-cream/20"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Seguinte"
                onClick={(e) => {
                  e.stopPropagation();
                  onChange(((index ?? 0) + 1) % images.length);
                }}
                className="absolute right-4 rounded-full bg-cream/10 p-3 text-cream hover:bg-cream/20"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
          <motion.img
            key={index}
            src={images[index ?? 0]}
            alt={`${alt} ${(index ?? 0) + 1}`}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-h-[85vh] max-w-[92vw] rounded-3xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
