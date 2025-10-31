import SiteNav from "@/components/site-nav";

const transcript = [
  {
    time: "00:02:14",
    speaker: "Prof. Rivera",
    text: "En esta sección revisamos cómo los modelos de atención permiten capturar dependencias a largo plazo en secuencias complejas.",
  },
  {
    time: "00:07:40",
    speaker: "Prof. Rivera",
    text: "Observa cómo el gradiente se estabiliza al aplicar normalización por capas, mejorando la convergencia del entrenamiento.",
  },
  {
    time: "00:12:03",
    speaker: "Asistente IA",
    text: "He generado notas automáticas con ejemplos adicionales de casos de uso para redes Transformer en procesamiento de audio.",
  },
];

const aiInsights = [
  {
    label: "Puntos clave",
    detail: "Atención multi-cabeza para detectar patrones en paralelo y evitar pérdida de contexto.",
  },
  {
    label: "Acciones sugeridas",
    detail: "Revisar el laboratorio 3 antes de la próxima sesión y preparar preguntas sobre regularización.",
  },
  {
    label: "Recursos relacionados",
    detail: "Artículo: 'Layer Normalization in Deep Learning Systems' y repositorio de ejemplos en GitHub.",
  },
];

export default function VideoAnalysisPage() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <SiteNav />
      <main className="mx-auto grid w-full max-w-6xl gap-8 px-6 pb-24 pt-32 lg:grid-cols-[1.2fr,0.8fr]">
        <section className="space-y-6 rounded-3xl bg-white/80 p-8 shadow-xl shadow-blue-50">
          <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-zinc-900">Análisis de video en tiempo real</h1>
              <p className="text-sm text-zinc-500">Sesión: Redes neuronales profundas — Clase grabada del 12 de abril.</p>
            </div>
            <button className="rounded-full border border-zinc-200 px-4 py-2 text-xs font-semibold text-zinc-600 transition hover:border-blue-500 hover:text-blue-600">
              Compartir con mi equipo
            </button>
          </header>

          <div className="relative overflow-hidden rounded-3xl bg-zinc-900">
            <div className="aspect-video w-full bg-zinc-800">
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-center text-white/80">
                <span className="rounded-full border border-white/30 px-3 py-1 text-xs uppercase tracking-widest">Video player</span>
                <p className="text-lg font-semibold">Transmisión de la clase</p>
                <p className="text-sm text-white/60">Reproduciendo: Sección 2 — Arquitecturas de atención</p>
              </div>
            </div>
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-blue-600/90 px-3 py-1 text-xs font-semibold text-white">
              Grabación HD
            </div>
            <div className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-blue-600">
              <span className="h-2 w-2 rounded-full bg-green-500" /> IA activa
            </div>
          </div>

          <div className="rounded-2xl border border-white/60 bg-white/70 p-6">
            <h2 className="text-lg font-semibold text-zinc-900">Transcripción inteligente</h2>
            <div className="mt-4 space-y-4">
              {transcript.map((item) => (
                <div key={item.time} className="rounded-2xl border border-zinc-100 bg-white/90 p-4">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span>{item.speaker}</span>
                    <span>{item.time}</span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl shadow-blue-50">
            <h2 className="text-lg font-semibold text-zinc-900">Notas generadas por IA</h2>
            <p className="mt-2 text-sm text-zinc-500">Resumen automático de conceptos clave y próximos pasos sugeridos.</p>
            <div className="mt-4 space-y-4">
              {aiInsights.map((insight) => (
                <div key={insight.label} className="rounded-2xl border border-zinc-100 bg-white p-4">
                  <p className="text-sm font-semibold text-zinc-900">{insight.label}</p>
                  <p className="mt-2 text-sm text-zinc-600">{insight.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/60 bg-gradient-to-br from-blue-500 to-purple-500 p-8 text-white shadow-xl shadow-blue-100">
            <h2 className="text-lg font-semibold">Asistente conversacional</h2>
            <p className="mt-2 text-sm text-blue-50/90">
              Haz preguntas sobre el contenido y recibe ejemplos personalizados. Puedes exportar la conversación al portafolio.
            </p>
            <button className="mt-6 w-full rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/30">
              Abrir chat de análisis
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}
