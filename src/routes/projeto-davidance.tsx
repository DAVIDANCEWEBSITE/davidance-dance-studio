import { createFileRoute, Link } from "@tanstack/react-router";
import { projectConfig as p, siteConfig } from "@/data/siteConfig";
import { SmartImage } from "@/components/site/SmartImage";
import { Portrait } from "@/components/site/Portrait";
import { SectionTitle } from "@/components/site/primitives";
import { Button } from "@/components/ui/button";
import { ProjectVideo } from "@/components/site/ProjectVideo";
export const Route = createFileRoute("/projeto-davidance")({
  head: () => ({
    meta: [
      { title: "Projeto Davidance — Formação artística 2026/2027" },
      { name: "description", content: p.description },
      { property: "og:title", content: "Projeto Davidance — Formação artística" },
      { property: "og:description", content: p.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectPage,
});
function ProjectPage() {
  return (
    <>
      <section className="relative flex h-[100svh] items-center justify-center overflow-hidden bg-plum">
        <SmartImage
          src={siteConfig.projectHero}
          alt={p.title}
          eager
          wrapperClassName="absolute inset-0"
          className="object-top"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="container absolute inset-x-0 top-24 mx-auto px-5 text-center md:top-28">
          <h1 className="mx-auto font-script text-[46px] font-normal leading-tight text-cream md:text-[68px]">
            {p.title}
          </h1>
        </div>
      </section>
      <section className="container mx-auto px-5 py-12">
        <p className="mx-auto max-w-3xl text-balance text-center text-base leading-relaxed text-muted-foreground md:text-lg">
          {p.description}
        </p>
      </section>
      <section className="bg-secondary/40 py-12">
        <div className="container mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 text-center">
          <Portrait
            src={siteConfig.founder.photo}
            name={siteConfig.founder.name}
            className="mx-auto aspect-[3/4] w-full max-w-[260px] rounded-lg"
          />
          <div>
            <h2 className="text-2xl font-light md:text-3xl">{p.directionTitle}</h2>
            <h3 className="mt-3 text-lg font-medium text-primary">{siteConfig.founder.name}</h3>
            <p className="mx-auto mt-4 max-w-2xl text-balance md:max-w-[34rem] text-base leading-relaxed text-muted-foreground">
              {p.directionText}
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-5 py-12">
        <SectionTitle title={p.formationTitle} />
        <div className="space-y-10">
          {p.formations.map((f) => (
            <div key={f.title} className="text-center">
              <h3 className="text-xl font-medium">{f.title}</h3>
              {f.subtitle && <p className="mt-1 text-sm text-muted-foreground">{f.subtitle}</p>}
              <div className="mx-auto mt-6 flex max-w-4xl flex-wrap justify-center gap-6">
                {f.people.map((person) => (
                  <article
                    key={person.name}
                    className="w-[calc(50%-0.75rem)] min-w-0 md:w-[calc(25%-1.125rem)]"
                  >
                    <Portrait
                      src={person.photo}
                      name={person.name}
                      className="aspect-[4/3] rounded-lg"
                    />
                    <h4 className="mt-2 text-[13px] font-medium sm:text-sm">
                      {person.name.split(" (").map((part, k) => (
                        <span key={part} className="block whitespace-nowrap">
                          {k ? `(${part}` : part}
                        </span>
                      ))}
                    </h4>
                    <p className="mt-0.5 text-xs text-muted-foreground">{person.area}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-secondary/40 py-12">
        <div className="container mx-auto px-5">
          <SectionTitle title={p.dancersTitle} />
          <SmartImage
            src={p.groupPhoto}
            alt="Bailarinos do Projeto Davidance 26/27"
            wrapperClassName="mx-auto mb-10 aspect-[3/4] max-w-3xl rounded-lg bg-secondary"
            className="object-contain"
          />
          <div className="mx-auto grid max-w-4xl grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4 md:grid-cols-6">
            {p.groups
              .flatMap((g) => g.people)
              .map((person) => (
                <article key={person.name} className="min-w-0">
                  <Portrait
                    src={person.photo}
                    name={person.name}
                    className="aspect-[3/4] rounded-lg"
                  />
                  <h4 className="mt-2 truncate whitespace-nowrap text-[10px] font-medium sm:text-xs">{person.name}</h4>
                </article>
              ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto px-5 py-12">
        <SectionTitle title={p.historyTitle} />
        <div className="grid gap-6 md:grid-cols-3">
          {p.videos.map((v, i) => (
            <div key={`${v.edition} ${v.piece}`} className={i === 0 ? "md:col-span-3" : ""}>
              <ProjectVideo video={v} />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-secondary/40 py-12">
        <div className="container mx-auto max-w-3xl px-5 text-center">
          <h2 className="text-balance text-3xl font-light">{p.futureTitle}</h2>
          <p className="mt-5 whitespace-pre-line text-pretty text-base leading-relaxed text-muted-foreground">
            {p.futureText}
          </p>
          <Button asChild className="mt-7 h-auto rounded-full px-7 py-3.5">
            <Link to="/jovens-adultos">{p.futureButton}</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
