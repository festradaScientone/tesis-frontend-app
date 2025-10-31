import SiteNav from "@/components/site-nav";

const nodes = [
  {
    title: "Tema central",
    description: "Arquitectura de aprendizaje federado",
    connections: 5,
  },
  {
    title: "Investigaciones clave",
    description: "Papers recientes sobre privacidad diferencial",
    connections: 3,
  },
  {
    title: "Aplicaciones",
    description: "Salud, fintech y movilidad inteligente",
    connections: 4,
  },
  {
    title: "Preguntas abiertas",
    description: "¿Cómo optimizar la comunicación entre nodos?",
    connections: 2,
  },
];

export default function MindMapPage() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <SiteNav />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-24 pt-32">
        <header className="flex flex-col gap-4 rounded-3xl bg-white/80 p-10 shadow-xl shadow-blue-50 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-zinc-900">Editor de mapas mentales</h1>
            <p className="mt-2 text-sm text-zinc-500">
              Organiza ideas, relaciona conceptos y colabora en tiempo real con tu equipo académico.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-full border border-zinc-200 px-4 py-2 text-xs font-semibold text-zinc-600 transition hover:border-blue-500 hover:text-blue-600">
              Compartir enlace
            </button>
            <button className="rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-500">
              Presentar mapa
            </button>
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-6 rounded-3xl bg-white/80 p-8 shadow-xl shadow-blue-50">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-zinc-900">Vista general</h2>
              <div className="flex gap-2 text-xs font-semibold text-zinc-500">
                <button className="rounded-full border border-zinc-200 px-3 py-1 transition hover:border-blue-500 hover:text-blue-600">
                  Centrar
                </button>
                <button className="rounded-full border border-zinc-200 px-3 py-1 transition hover:border-blue-500 hover:text-blue-600">
                  Auto-organizar
                </button>
              </div>
            </div>
            <div className="relative h-[420px] overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-br from-blue-50 via-white to-purple-50">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white/90 px-8 py-6 text-center shadow-xl shadow-blue-100">
                <p className="text-xs uppercase tracking-[0.2em] text-blue-500">Nodo principal</p>
                <h3 className="mt-2 text-2xl font-semibold text-zinc-900">Arquitectura de aprendizaje federado</h3>
                <p className="mt-2 text-sm text-zinc-600">Coordina nodos descentralizados que entrenan modelos sin compartir datos sensibles.</p>
              </div>
              <div className="absolute left-16 top-16 rounded-2xl bg-white/80 px-5 py-4 text-left shadow-lg shadow-blue-100">
                <p className="text-xs uppercase text-zinc-400">Idea</p>
                <p className="text-sm font-semibold text-zinc-900">Privacidad diferencial</p>
              </div>
              <div className="absolute right-16 top-24 rounded-2xl bg-white/80 px-5 py-4 text-left shadow-lg shadow-blue-100">
                <p className="text-xs uppercase text-zinc-400">Caso de uso</p>
                <p className="text-sm font-semibold text-zinc-900">Diagnóstico remoto</p>
              </div>
              <div className="absolute bottom-16 left-24 rounded-2xl bg-white/80 px-5 py-4 text-left shadow-lg shadow-blue-100">
                <p className="text-xs uppercase text-zinc-400">Pregunta</p>
                <p className="text-sm font-semibold text-zinc-900">¿Cómo reducir latencia?</p>
              </div>
              <div className="absolute bottom-12 right-20 rounded-2xl bg-white/80 px-5 py-4 text-left shadow-lg shadow-blue-100">
                <p className="text-xs uppercase text-zinc-400">Referencia</p>
                <p className="text-sm font-semibold text-zinc-900">Paper NeurIPS 2023</p>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl shadow-blue-50">
              <h2 className="text-lg font-semibold text-zinc-900">Nodos y conexiones</h2>
              <div className="mt-4 space-y-4">
                {nodes.map((node) => (
                  <div key={node.title} className="rounded-2xl border border-zinc-100 bg-white p-4">
                    <p className="text-sm font-semibold text-zinc-900">{node.title}</p>
                    <p className="text-xs text-zinc-500">{node.description}</p>
                    <p className="mt-2 text-xs font-medium text-blue-600">{node.connections} conexiones directas</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/60 bg-gradient-to-br from-blue-500 to-purple-500 p-8 text-white shadow-xl shadow-blue-100">
              <h2 className="text-lg font-semibold">Modo colaborativo</h2>
              <p className="mt-2 text-sm text-blue-50/90">
                Invita a compañeros, asigna responsables por nodo y activa votaciones rápidas para priorizar ideas.
              </p>
              <button className="mt-6 w-full rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/30">
                Activar coedición en vivo
              </button>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
