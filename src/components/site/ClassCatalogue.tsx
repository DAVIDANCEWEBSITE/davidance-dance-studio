import { Link } from "@tanstack/react-router";
import { classGroups, getStyle, projectConfig, siteConfig } from "@/data/siteConfig";
import { PageHero } from "./primitives";
import { RevealPhotoCard } from "./RevealPhotoCard";
import { ArrowLeft, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ClassCatalogue({ group }: { group: keyof typeof classGroups }) {
  const data = classGroups[group];
  return (
    <>
      <PageHero
        title={data.title}
        leading={
          <Button
            asChild
            variant="ghost"
            className="mb-4 px-3 text-primary hover:bg-brand-hover hover:text-primary-foreground"
          >
            <Link to="/" hash="aulas">
              <ArrowLeft />
              {siteConfig.copy.back}
            </Link>
          </Button>
        }
      >
        <p>{data.description}</p>
      </PageHero>
      <section className="container mx-auto px-5 py-12 md:py-16">
        <div className="grid grid-cols-1 mx-auto max-w-5xl gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.slugs.map((slug) => {
            const style = getStyle(slug);
            if (!style)
              return (
                <RevealPhotoCard
                  key={slug}
                  to="/projeto-davidance"
                  image={siteConfig.projectHero}
                  title={projectConfig.title}
                  leading={!siteConfig.auditionsOpen && <LockKeyhole className="h-4 w-4 shrink-0" aria-label="Fechado" />}
                />
              );
            return (
              <RevealPhotoCard
                key={slug}
                to="/estilos/$slug"
                params={{ slug }}
                image={style.cover}
                title={style.name}
                reveal={style.ageRange || undefined}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
