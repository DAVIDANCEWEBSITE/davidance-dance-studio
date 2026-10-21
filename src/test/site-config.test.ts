import { describe, expect, it } from "vitest";
import {
  siteConfig,
  styles,
  teachers,
  getStyle,
  getTeacherStyles,
  classGroups,
  projectConfig,
  canEnrolInLevel,
} from "@/data/siteConfig";

describe("Davidance business rules", () => {
  it("the 26/27 project is full", () => expect(siteConfig.auditionsOpen).toBe(false));
  it("Kids offers six classes", () =>
    expect(classGroups.kids.slugs).toEqual([
      "danca-criativa",
      "contemporaneo-kids",
      "ballet-kids",
      "hip-hop-kids",
      "flexibilidade",
      "acrobacias",
    ]));
  it("Jovens & Adultos offers twelve choices including the project", () => {
    expect(classGroups.adults.slugs).toHaveLength(12);
    expect(classGroups.adults.slugs.at(-1)).toBe("projeto-davidance");
  });
  for (const slug of ["flexibilidade", "acrobacias"])
    it(`${slug} is shared across audiences and accepts children from 8`, () => {
      expect(classGroups.kids.slugs).toContain(slug);
      expect(classGroups.adults.slugs).toContain(slug);
      expect(getStyle(slug)?.ageRange).toBe("+8 anos");
    });
  for (const slug of ["contemporaneo", "kizomba-fusion"])
    it(`${slug} level II requires prior approval`, () => {
      const s = getStyle(slug);
      expect(s).toBeDefined();
      if (!s) throw new Error("Missing class");
      expect(canEnrolInLevel(s, "Nível I")).toBe(true);
      expect(canEnrolInLevel(s, "Nível II")).toBe(false);
      expect(canEnrolInLevel(s, "Nível II", true)).toBe(true);
    });
  it("Contemporâneo has the supplied level schedules", () => {
    expect(getStyle("contemporaneo")?.levels?.map((l) => l.schedule)).toEqual([
      [
        { day: "Terça", time: "20h00 - 21h00" },
        { day: "Quinta", time: "19h00 - 20h00" },
      ],
      [
        { day: "Terça", time: "19h00 - 20h00" },
        { day: "Quinta", time: "19h00 - 20h00" },
      ],
    ]);
  });
  it("Kizomba Fusion has the supplied level schedules", () => {
    expect(getStyle("kizomba-fusion")?.levels?.map((l) => l.schedule)).toEqual([
      [{ day: "Quarta", time: "21h00 - 22h00" }],
      [{ day: "Quarta", time: "20h00 - 21h00" }],
    ]);
  });
  it("Dança Criativa accepts ages 3–5", () =>
    expect(getStyle("danca-criativa")?.ageRange).toBe("3 - 5 anos"));
  for (const slug of ["contemporaneo-kids", "ballet-kids", "hip-hop-kids"])
    it(`${slug} accepts ages 6–9`, () => expect(getStyle(slug)?.ageRange).toBe("6 - 9 anos"));
  for (const [slug, age] of [
    ["lyrical-jazz", "+15 anos"],
    ["choreography", "+12 anos"],
    ["high-heels", "+16 anos"],
    ["kizomba-fusion", "+16 anos"],
    ["ritmos-latinos", "+16 anos"],
  ] as const)
    it(`${slug} has the approved age range`, () => expect(getStyle(slug)?.ageRange).toBe(age));
  it("dancers start with Andreia (Sofia removed): groups of 12 and 6", () =>
    expect(projectConfig.groups.map((g) => g.people.length)).toEqual([12, 6]));
  it("uses the real enrolment link", () =>
    expect(siteConfig.links.enrol).toBe("https://forms.gle/HEKGNfnnKE4jBG616"));
  it("uses the real trial link", () =>
    expect(siteConfig.links.trialClass).toBe("https://forms.gle/ibVWxdEjLrz4qWv59"));
  it("uses the real weddings link", () =>
    expect(siteConfig.links.weddings).toBe("https://forms.gle/BuwEuLPAFLc9UoUk9"));
  it("uses the supplied phone", () => expect(siteConfig.contacts.phone).toBe("+351 928322643"));
  it("every teacher teaches a configured class", () => {
    for (const t of teachers) expect(getTeacherStyles(t.name).length).toBeGreaterThan(0);
  });
  it("style slugs are unique", () =>
    expect(new Set(styles.map((s) => s.slug)).size).toBe(styles.length));
});
