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
  orderedTestimonials,
} from "@/data/siteConfig";

describe("Davidance business rules", () => {
  it("the facilities gallery keeps the main studio photo first and 5 unique photographs", () => {
    expect(siteConfig.facilities.photos).toHaveLength(5);
    expect(new Set(siteConfig.facilities.photos).size).toBe(5);
    expect(siteConfig.facilities.photos[0]).toMatch(/\/espaco-img_4081_2\.jpg$/);
  });
  for (const [description, filename] of [
    ["illuminated logo", "espaco-img_4084.jpg"],
    ["beige dresses", "espaco-img_2136.jpg"],
    ["sunglasses", "espaco-img_1568.jpg"],
    ["student doing splits", "espaco-img_1665.jpg"],
    ["Beatriz with Kids", "espaco-img_8083.jpg"],
    ["group shown in the supplied screenshot", "espaco-img_5230.jpg"],
    ["high heels group", "espaco-img_5503.jpg"],
    ["Christmas studio group", "espaco-img_6090.jpg"],
    ["Christmas children", "espaco-img_8869.jpg"],
    ["Christmas adults with gift bag", "espaco-img_8883.jpg"],
    ["group photographed on the floor", "espaco-img_4001.jpg"],
    ["two students sitting on the floor", "espaco-img_9255.jpg"],
    ["parents and family group", "espaco-img_9418.jpg"],
  ]) {
    it(`excludes the ${description} photograph from the facilities gallery`, () => {
      expect(siteConfig.facilities.photos.some((url) => url.endsWith(`/${filename}`))).toBe(false);
    });
  }
  it("couples without photographs come after all photographed couples", () => {
    const firstMissing = orderedTestimonials.findIndex((t) => t.photos.length === 0);
    expect(firstMissing).toBe(25);
    expect(orderedTestimonials.slice(firstMissing).every((t) => t.photos.length === 0)).toBe(true);
    expect(orderedTestimonials.slice(0, firstMissing).every((t) => t.photos.length > 0)).toBe(true);
  });
  it("the 26/27 project is full", () => expect(siteConfig.auditionsOpen).toBe(false));
  it("Dança Oriental takes place on Friday from 19H00 to 20H00", () => {
    expect(getStyle("danca-oriental")?.schedule).toEqual([{ day: "Sexta", time: "19H00 - 20H00" }]);
  });
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
        { day: "Terça", time: "20H00 - 21H00" },
        { day: "Quinta", time: "19H00 - 20H00" },
      ],
      [
        { day: "Terça", time: "19H00 - 20H00" },
        { day: "Quinta", time: "19H00 - 20H00" },
      ],
    ]);
  });
  it("Kizomba Fusion has the supplied level schedules", () => {
    expect(getStyle("kizomba-fusion")?.levels?.map((l) => l.schedule)).toEqual([
      [{ day: "Quarta", time: "21H00 - 22H00" }],
      [{ day: "Quarta", time: "20H00 - 21H00" }],
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
  it("dancers start with Andreia (Sofia removed): groups of 12 and 5", () =>
    expect(projectConfig.groups.map((g) => g.people.length)).toEqual([12, 5]));
  it("excludes Alexandre Portugal from all project dancer groups", () => {
    expect(projectConfig.groups.flatMap((group) => group.people).some((person) => person.name === "Alexandre Portugal")).toBe(false);
  });
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
