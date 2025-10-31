import SiteNav from "@/components/site-nav";

const summaryCards = [
  {
    label: "Clases completadas",
    value: "32",
    change: "+4 esta semana",
  },
  {
    label: "Horas de estudio",
    value: "18h",
    change: "+2h respecto a la media",
  },
  {
    label: "Preguntas IA",
    value: "67",
    change: "92% con respuesta útil",
  },
];

const upcomingSessions = [
  {
    title: "Algoritmos Avanzados",
    date: "Lunes, 8:30 AM",
    instructor: "Dra. Martínez",
  },
  {
    title: "Laboratorio de Física Cuántica",
    date: "Martes, 11:00 AM",
    instructor: "Dr. Paredes",
  },
  {
    title: "Seminario de Innovación",
    date: "Jueves, 4:00 PM",
    instructor: "Invitado externo",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <SiteNav />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-24 pt-32">
        <header className="flex flex-col justify-between gap-6 rounded-3xl bg-white/80 p-10 shadow-xl shadow-blue-50 sm:flex-row sm:items-center">
          <div>
            <h1 className="text-3xl font-semibold text-zinc-900">Panel del estudiante</h1>
            <p className="mt-2 text-sm text-zinc-500">
              Visualiza tu progreso académico, próximas sesiones y recomendaciones generadas por IA.
            </p>
          </div>
          <button className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-500">
            Descargar reporte semanal
          </button>
        </header>

        <section className="grid gap-6 sm:grid-cols-3">
          {summaryCards.map((card) => (
            <div key={card.label} className="rounded-2xl border border-white/60 bg-white/80 p-6 shadow-lg shadow-blue-50">
              <p className="text-sm text-zinc-500">{card.label}</p>
              <p className="mt-3 text-3xl font-semibold text-zinc-900">{card.value}</p>
              <p className="mt-2 text-xs font-medium text-emerald-600">{card.change}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6 rounded-3xl bg-white/80 p-8 shadow-xl shadow-blue-50">
            <header className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-zinc-900">Actividad reciente</h2>
                <p className="text-sm text-zinc-500">Últimas interacciones con cursos y proyectos colaborativos.</p>
              </div>
              <button className="rounded-full border border-zinc-200 px-4 py-2 text-xs font-semibold text-zinc-600 transition hover:border-blue-500 hover:text-blue-600">
                Ver historial
              </button>
            </header>
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-5">
                <div className="mt-1 h-10 w-10 rounded-full bg-gradient-to-br from-blue-200 to-blue-500" />
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Proyecto IA aplicada</p>
                  <p className="text-sm text-zinc-500">Colaboraste con 4 compañeros y avanzaste 3 tareas pendientes.</p>
                  <p className="mt-2 text-xs text-zinc-400">Actualizado hace 2 horas</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-5">
                <div className="mt-1 h-10 w-10 rounded-full bg-gradient-to-br from-violet-200 to-violet-500" />
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Examen Diagnóstico</p>
                  <p className="text-sm text-zinc-500">Obtuviste 87% y desbloqueaste recomendaciones para reforzar estructuras de datos.</p>
                  <p className="mt-2 text-xs text-zinc-400">Hace 1 día</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-zinc-100 bg-white p-5">
                <div className="mt-1 h-10 w-10 rounded-full bg-gradient-to-br from-emerald-200 to-emerald-500" />
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Mentoría personalizada</p>
                  <p className="text-sm text-zinc-500">Tu mentor dejó comentarios en el módulo de investigación aplicada.</p>
                  <p className="mt-2 text-xs text-zinc-400">Hace 3 días</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl shadow-blue-50">
              <h2 className="text-lg font-semibold text-zinc-900">Próximas sesiones</h2>
              <div className="mt-4 space-y-4">
                {upcomingSessions.map((session) => (
                  <div key={session.title} className="rounded-2xl border border-zinc-100 bg-white p-4">
                    <p className="text-sm font-semibold text-zinc-900">{session.title}</p>
                    <p className="text-xs text-zinc-500">{session.date}</p>
                    <p className="mt-1 text-xs text-zinc-400">Impartido por {session.instructor}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/60 bg-gradient-to-br from-blue-500 to-purple-500 p-8 text-white shadow-xl shadow-blue-100">
              <h2 className="text-lg font-semibold">Recomendación IA</h2>
              <p className="mt-2 text-sm text-blue-50/90">
                Dedica 40 minutos a repasar complejidad algorítmica. Nuestra IA detectó patrones de error en ejercicios de búsqueda binaria.
              </p>
              <button className="mt-6 rounded-full bg-white/20 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/30">
                Abrir plan de estudio sugerido
              </button>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
