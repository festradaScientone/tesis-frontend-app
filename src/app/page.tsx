import Image from "next/image";

const mockCourses = [
  {
    title: "Introduction to Python",
    description: "Learn the fundamentals of Python programming.",
    progress: 75,
  },
  {
    title: "Data Structures & Algorithms",
    description: "Master common data structures and algorithms.",
    progress: 82,
  },
  {
    title: "Web Development",
    description: "Build modern websites with HTML, CSS, and JS.",
    progress: 90,
  },
];

const analyticsCards = [
  {
    label: "Queries Asked",
    value: "124",
    trend: "+15%",
  },
  {
    label: "Time Spent",
    value: "82 hrs",
    trend: "+10%",
  },
  {
    label: "Comprehension Index",
    value: "85%",
    trend: "+8%",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <header className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-12 px-6 pb-24 pt-16 text-center lg:flex-row lg:text-left">
        <div className="max-w-xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-sm font-medium text-blue-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            AI powered learning platform
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            Diseña tu experiencia universitaria con una plataforma lista para personalizarse
          </h1>
          <p className="text-lg text-zinc-600">
            Crea rápidamente un dashboard educativo inspirado en las mejores plataformas. Este template incluye
            vistas para autenticación, cursos, videos, mapas mentales y analíticas en un mismo lugar.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <button className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-500">
              Comenzar ahora
            </button>
            <button className="rounded-full border border-zinc-300 px-8 py-3 text-sm font-semibold text-zinc-700 transition hover:border-blue-500 hover:text-blue-600">
              Ver documentación
            </button>
          </div>
        </div>
        <div className="relative w-full max-w-md">
          <div className="rounded-3xl border border-white/60 bg-white p-8 shadow-2xl shadow-blue-100">
            <div className="mb-8 text-center">
              <span className="text-sm font-medium uppercase tracking-wide text-blue-500">University AI</span>
              <h2 className="mt-2 text-2xl font-semibold text-zinc-900">Welcome Back</h2>
            </div>
            <div className="space-y-6">
              <div className="flex flex-col gap-2 text-left">
                <label className="text-sm font-medium text-zinc-700">Email Address</label>
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-500">
                  you@example.com
                </div>
              </div>
              <div className="flex flex-col gap-2 text-left">
                <label className="text-sm font-medium text-zinc-700">Password</label>
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm tracking-[0.3em] text-zinc-500">
                  ••••••••
                </div>
                <span className="text-sm font-medium text-blue-500">Forgot your password?</span>
              </div>
              <button className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
                Sign In
              </button>
              <div className="flex items-center gap-3 text-xs text-zinc-400">
                <span className="h-px flex-1 bg-zinc-200" /> Or sign in with <span className="h-px flex-1 bg-zinc-200" />
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm font-semibold text-zinc-600">
                <button className="flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 shadow-sm transition hover:border-blue-300 hover:text-blue-600">
                  <Image src="/logos/google.svg" alt="Google" width={18} height={18} />
                  Google
                </button>
                <button className="flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 shadow-sm transition hover:border-blue-300 hover:text-blue-600">
                  <Image src="/logos/microsoft.svg" alt="Microsoft" width={18} height={18} />
                  Microsoft
                </button>
              </div>
              <p className="text-center text-xs text-zinc-400">
                By signing in, you agree to our <span className="font-medium text-blue-500">Terms of Service</span> and
                <span className="font-medium text-blue-500"> Privacy Policy</span>.
              </p>
            </div>
          </div>
          <div className="absolute -left-10 -top-10 h-20 w-20 rounded-full bg-blue-100 blur-xl" />
          <div className="absolute -bottom-14 -right-6 h-32 w-32 rounded-full bg-purple-100 blur-2xl" />
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24">
        <section className="grid gap-12 rounded-3xl bg-white/70 p-12 shadow-xl shadow-blue-50 lg:grid-cols-[280px,1fr]">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-blue-600">Student Dashboard</h3>
            <p className="text-3xl font-semibold text-zinc-900">Organiza tus cursos y progreso con paneles claros</p>
            <p className="text-sm text-zinc-600">
              Una navegación lateral limpia, tarjetas de cursos con progreso y accesos rápidos a calificaciones, calendario y
              configuraciones.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[240px,1fr]">
            <aside className="flex flex-col gap-3 rounded-2xl bg-zinc-50 p-6 text-sm font-medium text-zinc-600">
              <span className="text-xs uppercase text-zinc-400">CourseApp</span>
              <span className="font-mono text-blue-600">{`{ Dashboard }`}</span>
              <span>My Grades</span>
              <span>Calendar</span>
              <span>Settings</span>
              <button className="mt-4 inline-flex items-center gap-2 rounded-full border border-red-200 px-4 py-2 text-xs font-semibold text-red-500">
                Logout
              </button>
            </aside>
            <div className="grid gap-6 rounded-2xl bg-white p-6 shadow-lg shadow-blue-50">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-zinc-900">My Courses</h4>
                  <p className="text-sm text-zinc-500">Resume fácilmente donde te quedaste</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-zinc-500">
                  <span>Progress</span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                    6 Courses
                  </span>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {mockCourses.map((course) => (
                  <div key={course.title} className="flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-zinc-50/60 p-4">
                    <div className="h-28 w-full rounded-2xl bg-gradient-to-br from-blue-200 via-white to-emerald-100" />
                    <div>
                      <h5 className="text-base font-semibold text-zinc-800">{course.title}</h5>
                      <p className="text-sm text-zinc-500">{course.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-zinc-600">
                      <div className="h-2 flex-1 rounded-full bg-zinc-200">
                        <div className="h-full rounded-full bg-blue-500" style={{ width: `${course.progress}%` }} />
                      </div>
                      <span>{course.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-12 rounded-3xl bg-white/70 p-12 shadow-xl shadow-blue-50 lg:grid-cols-[280px,1fr]">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-purple-600">Contenido Multimedia</h3>
            <p className="text-3xl font-semibold text-zinc-900">Clases en video y asistente integrado</p>
            <p className="text-sm text-zinc-600">
              Diseña páginas para tus lecciones con transcripciones, navegación clara y soporte de IA para preguntas rápidas.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[220px,1fr]">
            <aside className="space-y-3 rounded-2xl bg-zinc-50 p-6 text-sm font-medium text-zinc-600">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-200 to-blue-400" />
                <div>
                  <p className="text-sm font-semibold text-zinc-800">John Doe</p>
                  <p className="text-xs text-zinc-400">john.doe@university.edu</p>
                </div>
              </div>
              <div className="pt-4 text-xs uppercase text-zinc-400">Courses</div>
              <div className="space-y-2">
                <div className="rounded-xl bg-blue-500/10 px-3 py-2 text-blue-600">CS101: Intro to Computer Science</div>
                <div className="rounded-xl px-3 py-2">PHY205: Classical Mechanics</div>
              </div>
            </aside>
            <div className="grid gap-6">
              <div className="rounded-2xl bg-white p-6 shadow-lg shadow-blue-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-zinc-900">Class Videos</h4>
                    <p className="text-sm text-zinc-500">CS101: Introduction to Computer Science</p>
                  </div>
                  <button className="rounded-full border border-zinc-200 px-4 py-2 text-xs font-semibold text-zinc-600">
                    Open AI Assistant
                  </button>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex flex-col gap-3 rounded-2xl border border-zinc-100 bg-zinc-50/70 p-4">
                      <div className="h-28 rounded-2xl bg-gradient-to-br from-amber-100 via-white to-blue-100" />
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-zinc-800">Lecture {item}</p>
                        <p className="text-xs text-zinc-500">Viewed {item * 3 + 4} minutes ago</p>
                      </div>
                      <button className="rounded-full bg-blue-600 px-3 py-2 text-xs font-semibold text-white">
                        Open in AI Assistant
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
                <div className="rounded-2xl bg-white p-6 shadow-lg shadow-blue-50">
                  <div className="aspect-video w-full overflow-hidden rounded-2xl bg-zinc-900" />
                  <div className="mt-6 space-y-4">
                    <h4 className="text-lg font-semibold text-zinc-900">Lecture: Supervised Learning</h4>
                    <div className="space-y-3 text-sm text-zinc-600">
                      <p className="font-medium text-zinc-800">Transcript</p>
                      <div className="space-y-2">
                        <div className="rounded-xl bg-zinc-100 px-4 py-3">00:00 - Introducción al Machine Learning</div>
                        <div className="rounded-xl bg-zinc-100 px-4 py-3">13:40 - Aprendizaje Supervisado</div>
                        <div className="rounded-xl bg-zinc-100 px-4 py-3">30:15 - Aprendizaje No Supervisado</div>
                        <div className="rounded-xl bg-zinc-100 px-4 py-3">50:00 - Conclusiones y preguntas</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg shadow-blue-50">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-200 to-blue-400" />
                    <div>
                      <p className="text-sm font-semibold text-zinc-800">AI Assistant</p>
                      <p className="text-xs text-zinc-500">Ask anything about this lesson</p>
                    </div>
                  </div>
                  <div className="flex-1 space-y-3 text-sm text-zinc-600">
                    <div className="rounded-2xl bg-blue-50 p-4 text-zinc-700">
                      ¿Cuál es la diferencia entre aprendizaje supervisado y no supervisado?
                    </div>
                    <div className="rounded-2xl bg-zinc-100 p-4 text-zinc-600">
                      El aprendizaje supervisado usa datos etiquetados, mientras que el no supervisado encuentra patrones sin
                      etiquetas.
                    </div>
                  </div>
                  <button className="rounded-full bg-blue-600 px-4 py-3 text-xs font-semibold text-white">
                    Escribe un mensaje o usa el micrófono
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-12 rounded-3xl bg-white/70 p-12 shadow-xl shadow-blue-50 lg:grid-cols-[280px,1fr]">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-emerald-600">Analíticas y Mapas Mentales</h3>
            <p className="text-3xl font-semibold text-zinc-900">Visualiza el progreso y planifica contenidos</p>
            <p className="text-sm text-zinc-600">
              Integra vistas para mapas conceptuales y paneles de analítica con métricas clave, temas y exportaciones.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-lg shadow-blue-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-emerald-200 to-emerald-500" />
                  <div>
                    <p className="text-sm font-semibold text-zinc-800">Course AI</p>
                    <p className="text-xs text-zinc-500">john.doe@example.com</p>
                  </div>
                </div>
                <button className="rounded-full border border-zinc-200 px-4 py-2 text-xs font-semibold text-zinc-600">
                  Export PDF
                </button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {analyticsCards.map((card) => (
                  <div key={card.label} className="rounded-2xl border border-zinc-100 bg-zinc-50/70 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">{card.label}</p>
                    <p className="mt-3 text-3xl font-semibold text-zinc-900">{card.value}</p>
                    <p className="text-xs font-medium text-emerald-500">{card.trend}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl bg-zinc-100 p-4">
                <p className="text-sm font-semibold text-zinc-800">Comprehension Index</p>
                <div className="mt-3 h-28 rounded-xl bg-gradient-to-br from-emerald-200 via-white to-blue-100" />
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-lg shadow-blue-50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-zinc-800">CourseMind</p>
                  <p className="text-xs text-zinc-500">All changes saved</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600">
                    Export PNG
                  </button>
                  <button className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600">
                    Add Node
                  </button>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-zinc-100 bg-zinc-50/70 p-4">
                  <p className="text-sm font-semibold text-zinc-800">Supervised Learning</p>
                  <p className="text-xs text-zinc-500">Learning with labeled data.</p>
                </div>
                <div className="rounded-2xl border border-zinc-100 bg-zinc-50/70 p-4">
                  <p className="text-sm font-semibold text-zinc-800">Unsupervised Learning</p>
                  <p className="text-xs text-zinc-500">Finding patterns in data.</p>
                </div>
                <div className="rounded-2xl border border-zinc-100 bg-zinc-50/70 p-4">
                  <p className="text-sm font-semibold text-zinc-800">Reinforcement Learning</p>
                  <p className="text-xs text-zinc-500">Learning through rewards.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white/60 py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center text-sm text-zinc-500 lg:flex-row lg:text-left">
          <p>© {new Date().getFullYear()} CourseCraft. Inspired by next-gen AI learning platforms.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-blue-600">
              Terms of Service
            </a>
            <a href="#" className="transition hover:text-blue-600">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
