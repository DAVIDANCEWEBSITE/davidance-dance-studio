import { Link } from "@tanstack/react-router";
import { classGroups, getStyle, projectConfig, siteConfig } from "@/data/siteConfig";
import { PageHero } from "./primitives";
import { SmartImage } from "./SmartImage";
import { ArrowLeft } from "lucide-react";
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
            <Link to="/">
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
                <Link key={slug} to="/projeto-davidance" className="group block">
                  <SmartImage
                    src={siteConfig.projectHero}
                    alt={projectConfig.title}
                    wrapperClassName="aspect-[4/3] rounded-lg"
                    className="group-hover:scale-105"
                  />
                  <h2 className="mt-4 flex items-center gap-2 text-lg font-medium">
                    {projectConfig.title}
                  </h2>
                </Link>
              );
            return (
              <Link key={slug} to="/estilos/$slug" params={{ slug }} className="group block">
                <SmartImage
                  src={style.cover}
                  alt={style.name}
                  wrapperClassName="aspect-[4/3] rounded-lg"
                  className="group-hover:scale-105"
                />
                <div className="mt-4">
                  <h2 className="text-lg font-medium">{style.name}</h2>
                  {style.ageRange && (
                    <p className="mt-1 text-sm text-muted-foreground">{style.ageRange}</p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
