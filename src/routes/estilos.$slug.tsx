import { createFileRoute, notFound, Link, useRouter } from "@tanstack/react-router";
import { ArrowLeft, CalendarClock, LockKeyhole, Users } from "lucide-react";
import { classGroups, getStyle, getTeacherByName, siteConfig } from "@/data/siteConfig";
import { CTAButton } from "@/components/site/primitives";
import { SmartImage } from "@/components/site/SmartImage";
import { Portrait } from "@/components/site/Portrait";
import { Button } from "@/components/ui/button";
export const Route = createFileRoute("/estilos/$slug")({
  loader: ({ params }) => {
    const style = getStyle(params.slug);
    if (!style) throw notFound();
    return { style };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return {
        meta: [{ title: "Aula indisponível — Davidance" }, { name: "robots", content: "noindex" }],
      };
    const s = loaderData.style;
    return {
      meta: [
        { title: `${s.name} — Aulas de Dança | Davidance` },
        { name: "description", content: s.description },
        { property: "og:title", content: `${s.name} — Davidance` },
        { property: "og:description", content: s.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:image", content: s.cover },
        { name: "twitter:image", content: s.cover },
      ],
    };
  },
  component: StylePage,
});
function StylePage() {
  const { style } = Route.useLoaderData();
  const teacher = getTeacherByName(style.teacher);
  const router = useRouter();
  const back = () => {
    if (router.history.canGoBack()) router.history.back();
    else
      router.navigate({
        to: classGroups.kids.slugs.includes(style.slug) ? "/kids" : "/jovens-adultos",
      });
  };
  return (
    <section className="container mx-auto px-5 pb-20 pt-28">
      <Button variant="ghost" onClick={back} className="mb-6 px-0 text-primary">
        <ArrowLeft />
        {siteConfig.copy.back}
      </Button>
      <div className="grid items-start gap-10 lg:grid-cols-2">
        <SmartImage
          src={style.cover}
          alt={style.name}
          eager
          wrapperClassName="aspect-[4/3] rounded-lg lg:sticky lg:top-28"
        />
        <div>
          <h1 className="text-4xl font-light md:text-5xl">{style.name}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{style.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <CTAButton href={siteConfig.links.trialClass} variant="glow">
              {siteConfig.copy.trialButton}
            </CTAButton>
            <CTAButton href={siteConfig.links.enrol} variant="outline">
              {siteConfig.copy.enrolButton}
            </CTAButton>
          </div>
          <div className="mt-10 flex items-center gap-4 border-t border-border pt-7">
            <Portrait
              src={teacher?.photo}
              name={style.teacher}
              className="h-20 w-20 shrink-0 rounded-lg"
            />
            <div>
              <p className="text-sm text-muted-foreground">{siteConfig.copy.teacher}</p>
              <h2 className="mt-1 text-xl font-medium">{style.teacher}</h2>
            </div>
          </div>
          {style.ageRange && (
            <div className="mt-6 flex items-center gap-3">
              <Users className="h-5 w-5 text-primary" />
              <p>
                <span className="text-muted-foreground">{siteConfig.copy.age} · </span>
                {style.ageRange}
              </p>
            </div>
          )}
          <div className="mt-7 border-t border-border pt-6">
            <h2 className="mb-5 flex items-center gap-3 text-xl font-medium">
              <CalendarClock className="h-5 w-5 text-primary" />
              {siteConfig.copy.schedule}
            </h2>
            {style.levels ? (
              style.levels.map((level) => (
                <div key={level.name} className="mb-5 border-l-2 border-primary pl-4">
                  <h3 className="flex items-center gap-2 font-semibold">
                    {level.name}
                    {level.requiresApproval && <LockKeyhole className="h-4 w-4 text-primary" />}
                  </h3>
                  <ul className="mt-2 space-y-1 text-muted-foreground">
                    {level.schedule.map((s) => (
                      <li key={s.day + s.time}>
                        {s.day} · {s.time}
                      </li>
                    ))}
                  </ul>
                  {level.requiresApproval && (
                    <p className="mt-3 text-sm font-medium text-primary">
                      {siteConfig.copy.approval}
                    </p>
                  )}
                </div>
              ))
            ) : (
              <ul className="space-y-2 text-muted-foreground">
                {style.schedule.map((s) => (
                  <li key={s.day + s.time}>
                    {s.day} · {s.time}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
