import { useState } from "react";
import { Play } from "lucide-react";
import { projectConfig } from "@/data/siteConfig";
import { Portrait } from "./Portrait";
import { SmartImage } from "./SmartImage";
import { Button } from "@/components/ui/button";

type Video = (typeof projectConfig.videos)[number];
export function getProjectPlaybackSource(video: Video, requested: boolean) {
  if (!requested) return undefined;
  return video.youtubeId
    ? `https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&vq=hd1080`
    : video.src || undefined;
}
export function ProjectVideo({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);
  const available = Boolean(video.src || video.youtubeId);
  const playbackSource = getProjectPlaybackSource(video, playing);
  return (
    <article>
      <h3 className="mb-3 whitespace-nowrap text-[13px] font-medium sm:text-base">{video.title}</h3>
      <div className="relative aspect-video overflow-hidden rounded-lg bg-secondary">
        {playbackSource && video.youtubeId ? (
          <iframe
            src={playbackSource}
            title={video.title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="h-full w-full border-0"
          />
        ) : playbackSource && video.src ? (
          <video
            src={playbackSource}
            poster={video.poster || undefined}
            controls
            autoPlay
            preload="none"
            className="h-full w-full object-contain"
          />
        ) : (
          <>
            {video.poster ? (
              <SmartImage
                src={video.poster}
                alt={video.title}
                wrapperClassName="absolute inset-0"
                className={video.coverFit === "contain" ? "object-contain" : "object-cover"}
              />
            ) : (
              <Portrait name={video.title} className="absolute inset-0" />
            )}
            {available && (
              <Button
                onClick={() => setPlaying(true)}
                aria-label={`Reproduzir ${video.title}`}
                variant="ghost"
                className="absolute inset-0 h-full w-full rounded-none p-0 hover:bg-transparent"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                  <Play />
                </span>
              </Button>
            )}
          </>
        )}
      </div>
    </article>
  );
}
