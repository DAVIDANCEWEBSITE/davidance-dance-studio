import { describe, expect, it } from "vitest";
import { siteConfig, styles, teachers, getStyle, getTeacherStyles } from "@/data/siteConfig";

describe("site config", () => {
  it("auditions are closed by default", () => {
    expect(siteConfig.auditionsOpen).toBe(false);
  });
  it("every teacher links to an existing style", () => {
    for (const t of teachers) expect(getTeacherStyles(t.name).length).toBeGreaterThan(0);
  });
  it("style slugs are unique", () => {
    expect(new Set(styles.map((s) => s.slug)).size).toBe(styles.length);
  });
});
