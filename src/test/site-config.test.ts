import { describe, expect, it } from "vitest";
import { siteConfig, styles, teachers, getStyle } from "@/data/siteConfig";

describe("site config", () => {
  it("auditions are closed by default", () => {
    expect(siteConfig.auditionsOpen).toBe(false);
  });
  it("every teacher links to an existing style", () => {
    for (const t of teachers) expect(getStyle(t.styleSlug)).toBeDefined();
  });
  it("style slugs are unique", () => {
    expect(new Set(styles.map((s) => s.slug)).size).toBe(styles.length);
  });
});
