export default function LoginPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#333333] dark:text-gray-200">
      <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="mx-auto w-full max-w-md">
          <div className="fade-in mb-8 text-center" style={{ animationDelay: "0.1s" }}>
            <svg
              className="mx-auto h-12 w-12 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            <h1 className="mt-4 text-2xl font-bold text-gray-800 dark:text-white sm:text-3xl">
              University AI
            </h1>
          </div>

          <div
            className="fade-in rounded-xl bg-white p-8 shadow-lg dark:bg-background-dark/50 sm:p-10"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 dark:text-white">
              Welcome Back
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
                  Email Address
                </label>
                <div className="mt-1">
                  <input
                    className="w-full rounded-lg border border-gray-300 bg-background-light px-4 py-3 transition duration-150 ease-in-out focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-background-dark"
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="password">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    className="w-full rounded-lg border border-gray-300 bg-background-light px-4 py-3 transition duration-150 ease-in-out focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-background-dark"
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <a className="font-medium text-primary hover:text-primary/80" href="#">
                  Forgot your password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary py-3 text-base font-medium text-white shadow-sm transition duration-150 ease-in-out hover:bg-primary/90"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500 dark:bg-background-dark/50 dark:text-gray-400">
                    Or sign in with
                  </span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <a
                  className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 dark:border-gray-600 dark:bg-background-dark/50 dark:text-gray-300 dark:hover:bg-background-dark/70"
                  href="#"
                >
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFgBlKX2cju1R7rYQsNleIc8EyiMib2m-Lv3FD7StugeHCUia6jxFhRoW7J9PgQKAXseEhOc7CIQ673azKbTfP4pBpbG4AE5_brX00H5-jbl-9Il-dmOIav-FFIuRzLFlcm1oNNXJNJ5ZFlXjz9GGKXt4b2xaPX8bXlv2JunMR_-4FZxa5oSyeXPeZtEJ8FpOjrYVW7VyuU2miNdQGMugU079eXD66c0a-wZ0PFwJD4HsE55riq5gZ0RjxhQIo4J63LpM_uUwJKfw"
                    alt="Google logo"
                    className="h-5 w-5"
                  />
                  Google
                </a>
                <a
                  className="inline-flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition duration-150 ease-in-out hover:bg-gray-50 dark:border-gray-600 dark:bg-background-dark/50 dark:text-gray-300 dark:hover:bg-background-dark/70"
                  href="#"
                >
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOphBkh1aL_ouVvQE2OWEfgrSMgu6yxg5ULW1O-Tqn41LlAFVOMVV0r7Pi1ilR4uo_gDIN4lLBx5HLIXFU0ATREM8Su7LFwQ6ZZqF3NiU2HBkRsbujV2yzAg_Hvhsq-RWpMZwMmg0DK2nkD1RZUlQSBUoGxmX3FtnJh8OiCy3BUROkzPmcOnAPOkpDlUUk5dD08uysEf5Ia_RE1GTGFrOn4y-VudrIb_-Gm8Q0ABunLAB-RvJfhr1xhsXL-1B-Qy77r8KPPs3Uxk8"
                    alt="Microsoft logo"
                    className="h-5 w-5"
                  />
                  Microsoft
                </a>
              </div>
            </div>
          </div>

          <div
            className="fade-in mt-8 text-center text-sm text-gray-500 dark:text-gray-400"
            style={{ animationDelay: "0.3s" }}
          >
            <p>By signing in, you agree to our</p>
            <p>
              <a className="font-medium text-primary hover:text-primary/80" href="#">
                Terms of Service
              </a>{" "}
              and{" "}
              <a className="font-medium text-primary hover:text-primary/80" href="#">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
