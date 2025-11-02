import { SignUp } from "@clerk/nextjs";

type SignUpPageProps = {
  searchParams?: {
    error?: string;
  };
};

export default function SignUpPage({ searchParams }: SignUpPageProps) {
  const showDomainError = searchParams?.error === "domain";

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#333333] dark:text-gray-200">
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-6">
        <div className="flex w-full max-w-5xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="rounded-3xl bg-white/80 p-6 shadow-xl dark:bg-background-dark/80 lg:w-1/2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Crea tu cuenta institucional</h1>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              Para registrarte necesitas utilizar tu correo de la universidad que termina en{" "}
              <strong>@unitec.edu</strong>.
            </p>
            {showDomainError ? (
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600 dark:border-red-900/80 dark:bg-red-950/40 dark:text-red-200">
                Solo se permiten direcciones de correo con el dominio <strong>@unitec.edu</strong>.
              </div>
            ) : null}
            <ul className="mt-5 space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>• Accede a paneles personalizados según tu perfil académico</li>
              <li>• Administra tus cursos, mapas mentales y análisis de video asistido por IA</li>
              <li>• Colabora con profesores y compañeros desde la misma plataforma</li>
            </ul>
          </div>

          <div className="flex justify-center lg:w-1/2">
            <SignUp
              path="/sign-up"
              routing="path"
              signInUrl="/login"
              afterSignUpUrl="/dashboard"
              appearance={{
                elements: {
                  formButtonPrimary:
                    "bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors",
                  card: "shadow-xl border border-gray-200/70 dark:border-gray-700/50",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
