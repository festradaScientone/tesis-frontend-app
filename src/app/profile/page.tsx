import SiteNav from "@/components/site-nav";

const achievements = [
  {
    title: "Beca excelencia académica",
    description: "Otorgada por el rendimiento en el top 5% de la cohorte 2024.",
  },
  {
    title: "Mentoría estudiantil",
    description: "Acompañas a 3 estudiantes de nuevo ingreso en el programa de introducción a IA.",
  },
  {
    title: "Proyecto destacado",
    description: "Implementación de un sistema de recomendación híbrido para la biblioteca digital.",
  },
];

const preferences = [
  {
    label: "Idioma del contenido",
    value: "Español / Inglés",
  },
  {
    label: "Recordatorios de estudio",
    value: "Notificaciones push a las 8:00 AM",
  },
  {
    label: "Integraciones activas",
    value: "Google Calendar, Notion, Slack",
  },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <SiteNav />
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 pb-24 pt-32">
        <section className="flex flex-col gap-8 rounded-3xl bg-white/80 p-10 shadow-xl shadow-blue-50 lg:flex-row lg:items-start">
          <div className="flex flex-col items-center gap-4 text-center lg:w-1/3">
            <div className="h-32 w-32 rounded-3xl bg-gradient-to-br from-blue-400 to-purple-500" />
            <div>
              <h1 className="text-2xl font-semibold text-zinc-900">Andrea Fernández</h1>
              <p className="text-sm text-zinc-500">Estudiante de Ingeniería en Computación</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-500">
              <span className="rounded-full bg-blue-50 px-3 py-1 font-semibold text-blue-600">Mentoría activa</span>
              <span>8 cursos inscritos</span>
              <span>Promedio general: 9.2</span>
            </div>
            <button className="rounded-full border border-zinc-200 px-4 py-2 text-xs font-semibold text-zinc-600 transition hover:border-blue-500 hover:text-blue-600">
              Actualizar foto
            </button>
          </div>

          <div className="flex-1 space-y-8">
            <div className="rounded-2xl border border-white/60 bg-white/90 p-6">
              <h2 className="text-lg font-semibold text-zinc-900">Biografía</h2>
              <p className="mt-2 text-sm text-zinc-600">
                Apasionada por la inteligencia artificial aplicada a la educación. Lidera proyectos interdisciplinarios que combinan
                desarrollo de software, investigación y diseño centrado en el estudiante.
              </p>
            </div>

            <div className="rounded-2xl border border-white/60 bg-white/90 p-6">
              <h2 className="text-lg font-semibold text-zinc-900">Logros recientes</h2>
              <div className="mt-4 space-y-4">
                {achievements.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-zinc-100 bg-white p-4">
                    <p className="text-sm font-semibold text-zinc-900">{item.title}</p>
                    <p className="mt-2 text-sm text-zinc-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-xl shadow-blue-50">
            <h2 className="text-lg font-semibold text-zinc-900">Preferencias personales</h2>
            <div className="mt-4 space-y-4">
              {preferences.map((item) => (
                <div key={item.label} className="rounded-2xl border border-zinc-100 bg-white p-4">
                  <p className="text-sm font-semibold text-zinc-900">{item.label}</p>
                  <p className="mt-2 text-sm text-zinc-600">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/60 bg-gradient-to-br from-blue-500 to-purple-500 p-8 text-white shadow-xl shadow-blue-100">
            <h2 className="text-lg font-semibold">Configuración rápida</h2>
            <p className="mt-2 text-sm text-blue-50/90">
              Sincroniza tu perfil con nuevas aplicaciones y define objetivos de estudio semanales que se adapten a tu agenda.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <button className="w-full rounded-full bg-white/20 px-4 py-2 font-semibold text-white transition hover:bg-white/30">
                Conectar nueva integración
              </button>
              <button className="w-full rounded-full bg-white/10 px-4 py-2 font-semibold text-white transition hover:bg-white/20">
                Establecer meta semanal
              </button>
              <button className="w-full rounded-full bg-white/10 px-4 py-2 font-semibold text-white transition hover:bg-white/20">
                Ajustar preferencias IA
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
