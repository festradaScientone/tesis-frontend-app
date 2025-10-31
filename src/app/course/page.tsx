import SiteNav from "@/components/site-nav";

const modules = [
  {
    title: "1. Introducción y contexto",
    duration: "15 min",
    status: "Completado",
  },
  {
    title: "2. Fundamentos teóricos",
    duration: "28 min",
    status: "En progreso",
  },
  {
    title: "3. Taller práctico",
    duration: "42 min",
    status: "Pendiente",
  },
  {
    title: "4. Evaluación y rúbrica",
    duration: "20 min",
    status: "Pendiente",
  },
];

const resources = [
  {
    name: "Syllabus detallado",
    type: "PDF",
    size: "1.2 MB",
  },
  {
    name: "Repositorio de código",
    type: "GitHub",
    size: "Actualizado hace 2 horas",
  },
  {
    name: "Plantilla de proyecto",
    type: "Figma",
    size: "Acceso editable",
  },
];

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <SiteNav />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-24 pt-32">
        <section className="rounded-3xl bg-white/80 p-10 shadow-xl shadow-blue-50">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-4 py-1 text-xs font-medium text-blue-600">
                Especialización IA aplicada
              </span>
              <h1 className="text-3xl font-semibold text-zinc-900">Curso: Arquitectura de Sistemas Inteligentes</h1>
              <p className="text-sm text-zinc-600">
                Diseñado para estudiantes que desean construir soluciones de IA escalables. Incluye teoría, prácticas guiadas y un proyecto final con retroalimentación personalizada.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-500">
                <span className="rounded-full bg-emerald-100 px-3 py-1 font-semibold text-emerald-600">Nivel intermedio</span>
                <span>Duración estimada: 12 semanas</span>
                <span>Última actualización: Abril 2024</span>
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 p-6 text-white shadow-lg shadow-blue-200">
              <p className="text-xs uppercase tracking-widest text-blue-100/80">Progreso actual</p>
              <p className="mt-2 text-4xl font-semibold">58%</p>
              <div className="mt-4 h-2 w-full rounded-full bg-white/20">
                <div className="h-full rounded-full bg-white" style={{ width: "58%" }} />
              </div>
              <p className="mt-4 text-xs text-blue-100/80">Completa el taller práctico para desbloquear la mentoría personalizada.</p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6 rounded-3xl bg-white/80 p-8 shadow-xl shadow-blue-50">
            <header className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-zinc-900">Módulos del curso</h2>
              <button className="rounded-full border border-zinc-200 px-4 py-2 text-xs font-semibold text-zinc-600 transition hover:border-blue-500 hover:text-blue-600">
                Descargar temario
              </button>
            </header>
            <div className="space-y-3">
              {modules.map((module) => (
                <div key={module.title} className="flex flex-col gap-4 rounded-2xl border border-zinc-100 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">{module.title}</p>
                    <p className="text-xs text-zinc-500">{module.duration}</p>
                  </div>
                  <span className="inline-flex rounded-full bg-blue-50 px-4 py-1 text-xs font-semibold text-blue-600">
                    {module.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl shadow-blue-50">
              <h2 className="text-lg font-semibold text-zinc-900">Recursos complementarios</h2>
              <div className="mt-4 space-y-4">
                {resources.map((resource) => (
                  <div key={resource.name} className="flex items-center justify-between rounded-2xl border border-zinc-100 bg-white p-4">
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">{resource.name}</p>
                      <p className="text-xs text-zinc-500">{resource.type}</p>
                    </div>
                    <span className="text-xs text-zinc-400">{resource.size}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl shadow-blue-50">
              <h2 className="text-lg font-semibold text-zinc-900">Equipo docente</h2>
              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-200 to-blue-500" />
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">Mtra. Sofía Delgado</p>
                    <p className="text-xs text-zinc-500">Coordinadora académica</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-200 to-purple-500" />
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">Ing. Alejandro Torres</p>
                    <p className="text-xs text-zinc-500">Mentor técnico</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-200 to-emerald-500" />
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">Dra. Miriam Ortega</p>
                    <p className="text-xs text-zinc-500">Investigadora invitada</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
