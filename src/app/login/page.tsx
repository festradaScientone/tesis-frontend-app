import Image from "next/image";

import SiteNav from "@/components/site-nav";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-zinc-100">
      <SiteNav />
      <main className="mx-auto grid w-full max-w-5xl gap-10 px-6 pb-24 pt-32 lg:grid-cols-[1.1fr,0.9fr]">
        <section className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-4 py-1 text-xs font-medium text-blue-600">
            <span className="h-2 w-2 rounded-full bg-blue-500" />
            Student Portal
          </span>
          <h1 className="text-4xl font-semibold text-zinc-900 sm:text-5xl">
            Inicia sesión y retoma tus clases personalizadas
          </h1>
          <p className="text-lg text-zinc-600">
            Conéctate a tu cuenta para sincronizar progreso, preguntas resueltas por la IA y continuar con el plan de estudio que
            tus mentores han preparado para ti.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/70 p-6 shadow-lg shadow-blue-100">
              <h2 className="text-lg font-semibold text-zinc-900">Aprendizaje adaptativo</h2>
              <p className="mt-2 text-sm text-zinc-600">
                Tu panel se actualiza automáticamente con cursos recomendados según tu rendimiento y tus objetivos profesionales.
              </p>
            </div>
            <div className="rounded-2xl bg-white/70 p-6 shadow-lg shadow-blue-100">
              <h2 className="text-lg font-semibold text-zinc-900">Autenticación segura</h2>
              <p className="mt-2 text-sm text-zinc-600">
                Inicia sesión con correo institucional o proveedores externos. Toda la plataforma funciona sobre OAuth 2.0 y MFA opcional.
              </p>
            </div>
          </div>
        </section>

        <section className="relative rounded-3xl border border-white/60 bg-white/90 p-10 shadow-2xl shadow-blue-100">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-zinc-900">Bienvenido de nuevo</h2>
              <p className="mt-1 text-sm text-zinc-500">Ingresa tus credenciales para acceder al ecosistema universitario.</p>
            </div>
            <div className="space-y-4">
              <label className="space-y-2 text-sm font-medium text-zinc-700">
                Correo electrónico institucional
                <input
                  type="email"
                  placeholder="nombre.apellido@universidad.edu"
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-zinc-700">
                Contraseña
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </label>
              <div className="flex items-center justify-between text-xs text-zinc-500">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 text-blue-600" />
                  Recordarme
                </label>
                <a href="#" className="font-medium text-blue-600 hover:underline">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>
            <button className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
              Iniciar sesión
            </button>
            <div className="flex items-center gap-3 text-xs text-zinc-400">
              <span className="h-px flex-1 bg-zinc-200" /> ó ingresar con <span className="h-px flex-1 bg-zinc-200" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <button className="flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-600 transition hover:border-blue-300 hover:text-blue-600">
                <Image src="/logos/google.svg" alt="Google" width={18} height={18} />
                Google
              </button>
              <button className="flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-600 transition hover:border-blue-300 hover:text-blue-600">
                <Image src="/logos/microsoft.svg" alt="Microsoft" width={18} height={18} />
                Microsoft
              </button>
            </div>
            <p className="text-center text-xs text-zinc-400">
              ¿Aún no tienes cuenta? <span className="font-medium text-blue-600">Solicita acceso institucional</span>.
            </p>
          </div>
          <div className="pointer-events-none absolute -left-8 -top-10 h-24 w-24 rounded-full bg-blue-100 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-6 h-32 w-32 rounded-full bg-purple-100 blur-2xl" />
        </section>
      </main>
    </div>
  );
}
