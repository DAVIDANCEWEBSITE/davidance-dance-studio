import { describe, expect, it } from "vitest";
import { projectConfig } from "@/data/siteConfig";
import {
  getProjectPlaybackSource,
  getProjectVideoHeading,
} from "@/components/site/ProjectVideo";

describe("supplied project videos", () => {
  const ids = ["0DMrdPdzlv4", "iP9PhHy5qao", "VpOSiGaMLLM", "D4RMznCCitc"];
  projectConfig.videos.forEach((video, index) => {
    it(`${ids[index]} cannot start before a click`, () => {
      expect(video.youtubeId).toBe(ids[index]);
      expect(getProjectPlaybackSource(video, false)).toBeUndefined();
      expect(getProjectPlaybackSource(video, true)).toBe(
        `https://www.youtube-nocookie.com/embed/${ids[index]}?autoplay=1&rel=0&vq=hd1080`,
      );
    });
  });
});

describe("project video titles", () => {
  const expected = [
    { edition: "Projeto Davidance 25/26", piece: '"Senhora do Mar"' },
    { edition: "Projeto Davidance 25/26", piece: '"Euro 2016"' },
    { edition: "Projeto Davidance 24/25", piece: '"Voilá"' },
    { edition: "Projeto Davidance 23/24", piece: '"Canção sem final"' },
  ];
  expected.forEach((want, index) => {
    it(`video ${index + 1} shows the edition and the piece on separate lines`, () => {
      const video = projectConfig.videos[index];
      if (!video) throw new Error(`video ${index + 1} is missing`);
      expect(video.edition).toBe(want.edition);
      expect(video.piece).toBe(want.piece);
      expect(getProjectVideoHeading(video)).toBe(`${want.edition} — ${want.piece}`);
    });
  });
});
