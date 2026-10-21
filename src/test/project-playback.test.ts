import { describe, expect, it } from "vitest";
import { projectConfig } from "@/data/siteConfig";
import { getProjectPlaybackSource } from "@/components/site/ProjectVideo";

describe("supplied project videos", () => {
  const ids = ["0DMrdPdzlv4", "iP9PhHy5qao", "VpOSiGaMLLM", "D4RMznCCitc"];
  projectConfig.videos.forEach((video, index) => {
    it(`${ids[index]} cannot start before a click`, () => {
      expect(video.youtubeId).toBe(ids[index]);
      expect(getProjectPlaybackSource(video, false)).toBeUndefined();
      expect(getProjectPlaybackSource(video, true)).toBe(
        `https://www.youtube-nocookie.com/embed/${ids[index]}?autoplay=1&rel=0`,
      );
    });
  });
});