import { useState } from "react";
import { Play } from "lucide-react";
import { projectConfig } from "@/data/siteConfig";
import { Portrait } from "./Portrait";
import { Button } from "@/components/ui/button";

type Video = (typeof projectConfig.videos)[number];
export function ProjectVideo({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);
  const available = Boolean(video.src || video.youtubeId);
  return (
    <article>
      <h3 className="mb-3 text-base font-medium">{video.title}</h3>
      <div className="relative aspect-video overflow-hidden rounded-lg bg-secondary">
        {playing && video.youtubeId ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="h-full w-full border-0"
          />
        ) : playing && video.src ? (
          <video
            src={video.src}
            poster={video.poster || undefined}
            controls
            autoPlay
            preload="none"
            className="h-full w-full object-contain"
          />
        ) : (
          <>
            <Portrait src={video.poster} name={video.title} className="absolute inset-0" />
            {available && (
              <Button
                variant="default"
                size="icon"
                onClick={() => setPlaying(true)}
                aria-label={`Reproduzir ${video.title}`}
                className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full"
              >
                <Play />
              </Button>
            )}
          </>
        )}
      </div>
    </article>
  );
}
