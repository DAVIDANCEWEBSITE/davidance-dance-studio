import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Download, ZoomIn } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { ContactCard, PageHero, Reveal, SocialButtons } from "@/components/site/primitives";
import { SmartImage } from "@/components/site/SmartImage";
import { Lightbox } from "@/components/site/Lightbox";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/horario-contactos")({
  head: () => ({
    meta: [
      { title: "Horário e Contactos — Davidance" },
      { name: "description", content: "Consulta o horário das aulas da Davidance e entra em contacto connosco." },
      { property: "og:title", content: "Horário e Contactos — Davidance" },
      { property: "og:description", content: "Horário das aulas, morada, telefone e formulário de contacto." },
    ],
  }),
  component: ContactsPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Indica o teu nome").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().trim().max(20).optional(),
  subject: z.string().trim().min(2, "Indica o assunto").max(150),
  message: z.string().trim().min(10, "A mensagem deve ter pelo menos 10 caracteres").max(2000),
  consent: z.literal(true, { errorMap: () => ({ message: "É necessário aceitar o tratamento de dados" }) }),
  website: z.string().max(0).optional(), // honeypot
});
type FormData = z.infer<typeof schema>;

function ContactsPage() {
  const [zoom, setZoom] = useState<number | null>(null);
  return (
    <>
      <PageHero eyebrow="Organiza a tua semana" title="Horário e Contactos" />
      <section className="container mx-auto px-5 py-14">
        <Reveal className="relative mx-auto max-w-5xl">
          <button onClick={() => setZoom(0)} className="group relative block w-full overflow-hidden rounded-[2.5rem] shadow-soft" aria-label="Ampliar horário das aulas">
            <SmartImage src={siteConfig.timetable.image} alt="Horário semanal das aulas da Davidance" wrapperClassName="aspect-[16/10]" className="group-hover:scale-105" />
            <span className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-cream/90 px-4 py-2 text-sm font-semibold text-primary"><ZoomIn className="h-4 w-4" /> Ampliar</span>
          </button>
          <div className="mt-6 text-center">
            <a href={siteConfig.timetable.download} download target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:bg-rose">
              <Download className="h-4 w-4" /> Descarregar
            </a>
          </div>
        </Reveal>
        <Lightbox images={[siteConfig.timetable.image]} index={zoom} onClose={() => setZoom(null)} onChange={setZoom} alt="Horário" />
      </section>

      <section className="bg-gradient-to-b from-background via-lilac to-background py-20">
        <div className="container mx-auto grid gap-10 px-5 lg:grid-cols-[1.4fr_1fr]">
          <Reveal><ContactForm /></Reveal>
          <Reveal delay={0.1} className="space-y-6">
            <div className="rounded-[2.5rem] bg-gradient-brand p-8 shadow-glow">
              <h2 className="mb-6 text-3xl font-light text-cream">Visita-nos</h2>
              <ContactCard light />
              <div className="mt-8"><SocialButtons light /></div>
            </div>
            <iframe title="Mapa da localização da Davidance" src={siteConfig.links.mapsEmbed} loading="lazy" className="h-64 w-full rounded-[2rem] border-0 shadow-soft" />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (d: FormData) => {
    if (d.website) return; // bot
    // Sem serviço de email ligado: abre o cliente de email do visitante (mailto).
    const body = `Nome: ${d.name}\nEmail: ${d.email}\nTelefone: ${d.phone || "-"}\n\n${d.message}`;
    window.location.href = `mailto:${siteConfig.contacts.email}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    reset();
  };

  const field = "w-full rounded-2xl border border-input bg-card px-5 py-3.5 text-foreground outline-none transition focus:border-violet focus:ring-4 focus:ring-violet/20";
  const Err = ({ m }: { m?: string | undefined }) => (m ? <p className="mt-1.5 text-sm text-destructive" role="alert">{m}</p> : null);

  if (sent) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-[2.5rem] bg-card p-10 text-center shadow-soft">
        <CheckCircle2 className="h-14 w-14 text-primary" />
        <h2 className="mt-4 text-3xl font-light">Obrigado!</h2>
        <p className="mt-2 text-muted-foreground">A tua aplicação de email foi aberta com a mensagem pronta a enviar. Responderemos o mais breve possível.</p>
        <button onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-primary hover:underline">Enviar outra mensagem</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 rounded-[2.5rem] bg-card p-8 shadow-soft md:p-10">
      <h2 className="text-3xl font-light md:text-4xl">Envia-nos uma mensagem</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="name" className="mb-1.5 block text-sm font-medium">Nome *</label><input id="name" className={field} {...register("name")} aria-invalid={!!errors.name} /><Err m={errors.name?.message} /></div>
        <div><label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email *</label><input id="email" type="email" className={field} {...register("email")} aria-invalid={!!errors.email} /><Err m={errors.email?.message} /></div>
        <div><label htmlFor="phone" className="mb-1.5 block text-sm font-medium">Telefone</label><input id="phone" type="tel" className={field} {...register("phone")} /><Err m={errors.phone?.message} /></div>
        <div><label htmlFor="subject" className="mb-1.5 block text-sm font-medium">Assunto *</label><input id="subject" className={field} {...register("subject")} aria-invalid={!!errors.subject} /><Err m={errors.subject?.message} /></div>
      </div>
      <div><label htmlFor="message" className="mb-1.5 block text-sm font-medium">Mensagem *</label><textarea id="message" rows={5} className={cn(field, "resize-none")} {...register("message")} aria-invalid={!!errors.message} /><Err m={errors.message?.message} /></div>
      <div className="hidden" aria-hidden><label>Website<input tabIndex={-1} autoComplete="off" {...register("website")} /></label></div>
      <div>
        <label className="flex items-start gap-3 text-sm text-muted-foreground">
          <input type="checkbox" className="mt-1 h-4 w-4 accent-primary" {...register("consent")} />
          Aceito que a Davidance utilize os meus dados apenas para responder a este pedido, de acordo com o RGPD.
        </label>
        <Err m={errors.consent?.message} />
      </div>
      <button type="submit" disabled={isSubmitting} className="inline-flex rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-rose disabled:opacity-60">
        Enviar mensagem
      </button>
    </form>
  );
}
