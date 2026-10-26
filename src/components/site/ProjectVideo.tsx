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
export function getProjectVideoHeading(video: Video) {
  return video.piece ? `${video.edition} — ${video.piece}` : video.edition;
}
export function ProjectVideo({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);
  const available = Boolean(video.src || video.youtubeId);
  const playbackSource = getProjectPlaybackSource(video, playing);
  const heading = getProjectVideoHeading(video);
  return (
    <article>
      <h3 className="mb-3 text-center">
        <span className="block text-balance text-[13px] font-medium sm:text-sm lg:text-base">
          {video.edition}
        </span>
        {video.piece && (
          <span className="mt-1 block text-balance text-[12px] font-normal text-muted-foreground sm:text-[13px] lg:text-sm">
            {video.piece}
          </span>
        )}
      </h3>
      <div className="relative aspect-video overflow-hidden rounded-lg bg-secondary">
        {playbackSource && video.youtubeId ? (
          <iframe
            src={playbackSource}
            title={heading}
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
                alt={heading}
                wrapperClassName="absolute inset-0"
                className={video.coverFit === "contain" ? "object-contain" : "object-cover"}
              />
            ) : (
              <Portrait name={heading} className="absolute inset-0" />
            )}
            {available && (
              <Button
                onClick={() => setPlaying(true)}
                aria-label={`Reproduzir ${heading}`}
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
