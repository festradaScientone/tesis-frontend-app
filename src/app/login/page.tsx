import { SignIn } from "@clerk/nextjs";

type LoginPageProps = {
  searchParams?: {
    error?: string;
  };
};

export default function LoginPage({ searchParams }: LoginPageProps) {
  const showDomainError = searchParams?.error === "domain";

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#333333] dark:text-gray-200">
      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center p-6">
        <div className="w-full max-w-5xl rounded-3xl bg-white/80 p-6 shadow-xl dark:bg-background-dark/80 sm:p-10 md:grid md:grid-cols-[1.2fr,1fr] md:gap-12">
          <div className="flex flex-col justify-center gap-6">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Plataforma educativa inteligente
              </span>
              <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                Inicia sesión para continuar tu experiencia universitaria personalizada
              </h1>
              <p className="text-base text-gray-600 dark:text-gray-400">
                Accede a paneles de progreso, análisis asistido por IA, mapas mentales y todos tus cursos en un solo lugar.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>• Seguimiento de cursos y progreso en tiempo real</li>
              <li>• Acceso seguro con Clerk y opciones sociales integradas</li>
              <li>• Experiencias colaborativas con herramientas asistidas por IA</li>
            </ul>
            {showDomainError ? (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/80 dark:bg-red-950/40 dark:text-red-200">
                Solo puedes acceder con un correo institucional que termine en <strong>@unitec.edu</strong>.
              </div>
            ) : null}
          </div>
          <div className="flex items-center justify-center">
            <SignIn
              path="/login"
              routing="path"
              signUpUrl="/sign-up"
              afterSignInUrl="/dashboard"
              appearance={{
                elements: {
                  formButtonPrimary:
                    "bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors",
                  card: "shadow-none border border-gray-200/70 dark:border-gray-700/50",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
