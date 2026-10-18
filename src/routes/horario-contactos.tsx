import { createFileRoute, redirect } from "@tanstack/react-router";

// Endereço antigo — redireciona para a nova página de Contactos.
export const Route = createFileRoute("/horario-contactos")({
  beforeLoad: () => { throw redirect({ to: "/contactos" }); },
});
