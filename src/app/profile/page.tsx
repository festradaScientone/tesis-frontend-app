const weeklyStats = [
  { label: "W1", height: "50%" },
  { label: "W2", height: "70%" },
  { label: "W3", height: "60%" },
  { label: "W4", height: "90%", highlight: true },
];

export default function ProfilePage() {
  return (
    <div className="font-display bg-background-light text-text-light-primary dark:bg-background-dark dark:text-text-dark-primary">
      <div className="relative flex min-h-screen w-full">
        <aside className="flex w-64 flex-col border-r border-border-light bg-surface-light p-4 dark:border-border-dark dark:bg-surface-dark">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="size-8 text-primary">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  clipRule="evenodd"
                  d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary">Course AI</h1>
          </div>
          <div className="mt-8 flex flex-col gap-2 flex-grow">
            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-light-secondary hover:bg-primary/10 hover:text-primary dark:text-text-dark-secondary dark:hover:text-primary" href="#">
              <span className="material-symbols-outlined">dashboard</span>
              <p className="text-sm font-medium">Dashboard</p>
            </a>
            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-text-light-secondary hover:bg-primary/10 hover:text-primary dark:text-text-dark-secondary dark:hover:text-primary" href="#">
              <span className="material-symbols-outlined">book</span>
              <p className="text-sm font-medium">Courses</p>
            </a>
            <a className="flex items-center gap-3 rounded-lg bg-primary/20 px-3 py-2 text-primary" href="#">
              <span className="material-symbols-outlined">monitoring</span>
              <p className="text-sm font-medium">Analytics</p>
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <button className="flex h-10 w-full items-center justify-center rounded-lg bg-primary/20 px-4 text-sm font-bold tracking-wide text-primary">
              Logout
            </button>
          </div>
        </aside>
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-10 flex items-center justify-between border-b border-border-light bg-surface-light px-10 py-3 dark:border-border-dark dark:bg-surface-dark">
            <p className="text-2xl font-black tracking-tight">Analytics &amp; Profile</p>
            <div className="flex items-center gap-4">
              <div className="flex flex-col text-right">
                <p className="text-sm font-semibold text-text-light-primary dark:text-text-dark-primary">John Doe</p>
                <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary">john.doe@email.com</p>
              </div>
              <div
                className="size-10 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6pMHFUGtqrvJXJhQPVuTrTbfWh7Cit0tiZduIQ98rduV9QoDgITMZtwfmIH9ATCoSDiJffD-Lq7JIVPbEMyMqAYd7ZwsLh2QSBJ2WmFgQX-ITQuzLuoS2X0in9jicofwXnp8qUqVxwEY0XezpFF9K7qz6DXbf1jBhDlovZPEWsfuKIiLh9TcTJNLaKsi6XoeyVUAuLwWancBNa8L75KYkABMiVx9iZ4Yqa82vN6RtqArJgUpIF7DH1etsV7nVguW4AKf82fMTXz8')",
                }}
              />
            </div>
          </header>
          <main className="flex-1 bg-background-light p-6 dark:bg-background-dark lg:p-10">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="flex flex-col gap-6 lg:col-span-1">
                <div className="rounded-xl border border-border-light bg-surface-light p-6 shadow-sm dark:border-border-dark dark:bg-surface-dark">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className="h-24 w-24 rounded-full bg-cover bg-center"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBjNJSGvWZ4FvFTvq6exMrr3FWNXA88rPYwkwZebuu12DRtER2EJpv17wO4h7hu8XQLqZW9IQyV4g5yr9bWOO32najCJFuAupD60fo6TfG4H8euNI3nD8lfuGWpdTdV1d5gwQdLJF-vg1fO7kIB4fJ9yZEjBZLenQexO5mKQ2lsIgoBiU5qdQhWTE37f4bim2U8ndDur1OWInNhi4XFgCzKdU6RuqZZT2cBiU1rQ5yN9maxcx2oZawfaNgkUQdYeCY6ZAqEX6BXAI')",
                        }}
                      />
                      <div className="flex flex-col">
                        <p className="text-xl font-bold text-text-light-primary dark:text-text-dark-primary">John Doe</p>
                        <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">john.doe@email.com</p>
                      </div>
                    </div>
                    <button className="flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-primary/20 px-4 text-sm font-medium text-primary hover:bg-primary/30">
                      <span className="material-symbols-outlined text-base">edit</span>
                      <span>Edit Profile</span>
                    </button>
                  </div>
                </div>
                <div className="rounded-xl border border-border-light bg-surface-light p-6 shadow-sm dark:border-border-dark dark:bg-surface-dark">
                  <p className="mb-4 text-lg font-bold text-text-light-primary dark:text-text-dark-primary">Settings</p>
                  <div>
                    <label className="text-sm font-medium text-text-light-secondary dark:text-text-dark-secondary">
                      Appearance
                    </label>
                    <div className="mt-2 flex rounded-lg bg-background-light p-1 dark:bg-background-dark">
                      <button className="flex flex-1 items-center justify-center gap-2 rounded-md bg-surface-light py-2 text-sm text-primary shadow-sm dark:bg-surface-dark">
                        <span className="material-symbols-outlined text-base">light_mode</span>
                        Light
                      </button>
                      <button className="flex flex-1 items-center justify-center gap-2 rounded-md py-2 text-sm text-text-light-secondary dark:text-text-dark-secondary">
                        <span className="material-symbols-outlined text-base">dark_mode</span>
                        Dark
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 lg:col-span-2">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2 rounded-xl border border-border-light bg-surface-light p-6 dark:border-border-dark dark:bg-surface-dark">
                    <p className="text-base font-medium text-text-light-primary dark:text-text-dark-primary">Queries Asked</p>
                    <p className="text-4xl font-bold text-primary">124</p>
                    <div className="flex items-center gap-1">
                      <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">Last 30 days</p>
                      <p className="flex items-center text-sm font-medium text-green-500">
                        <span className="material-symbols-outlined text-sm">arrow_upward</span>
                        +15%
                      </p>
                    </div>
                    <div className="grid min-h-[180px] grid-flow-col grid-rows-[1fr_auto] items-end justify-items-center gap-6 pt-6">
                      {weeklyStats.map((item) => (
                        <div key={item.label} className="flex w-full flex-col items-center gap-2">
                          <div
                            className={`w-full rounded-t-md ${item.highlight ? "bg-primary" : "bg-primary/30"}`}
                            style={{ height: item.height }}
                          />
                          <p className="text-xs font-bold text-text-light-secondary dark:text-text-dark-secondary">
                            {item.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 rounded-xl border border-border-light bg-surface-light p-6 dark:border-border-dark dark:bg-surface-dark">
                    <p className="text-base font-medium text-text-light-primary dark:text-text-dark-primary">Time Spent</p>
                    <p className="text-4xl font-bold text-primary">82 hrs</p>
                    <div className="flex items-center gap-1">
                      <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">Last 30 days</p>
                      <p className="flex items-center text-sm font-medium text-green-500">
                        <span className="material-symbols-outlined text-sm">arrow_upward</span>
                        +10%
                      </p>
                    </div>
                    <div className="flex min-h-[180px] items-center justify-center pt-6">
                      <div className="relative h-40 w-40">
                        <svg viewBox="0 0 36 36" className="h-full w-full">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#e7edf3"
                            strokeWidth="3"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#4799eb"
                            strokeDasharray="90, 100"
                            strokeLinecap="round"
                            strokeWidth="3"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#89CFF0"
                            strokeDasharray="40, 100"
                            strokeDashoffset="-90"
                            strokeLinecap="round"
                            strokeWidth="3"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#AEC6CF"
                            strokeDasharray="25, 100"
                            strokeDashoffset="-130"
                            strokeLinecap="round"
                            strokeWidth="3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 rounded-xl border border-border-light bg-surface-light p-6 dark:border-border-dark dark:bg-surface-dark">
                  <p className="text-base font-medium text-text-light-primary dark:text-text-dark-primary">Comprehension Index</p>
                  <p className="text-4xl font-bold text-primary">85%</p>
                  <div className="flex items-center gap-1">
                    <p className="text-sm text-text-light-secondary dark:text-text-dark-secondary">Last 30 days</p>
                    <p className="flex items-center text-sm font-medium text-green-500">
                      <span className="material-symbols-outlined text-sm">arrow_upward</span>
                      +5%
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col gap-8 pt-6">
                    <svg
                      width="100%"
                      height="148"
                      viewBox="-3 0 478 150"
                      preserveAspectRatio="none"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient id="paint0_linear_light" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#4799eb" stopOpacity="0.2" />
                          <stop offset="1" stopColor="#4799eb" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint0_linear_dark" x1="236" y1="1" x2="236" y2="149" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#4799eb" stopOpacity="0.4" />
                          <stop offset="1" stopColor="#4799eb" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        className="fill-[url(#paint0_linear_light)] dark:fill-[url(#paint0_linear_dark)]"
                        d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H0V109Z"
                      />
                      <path
                        d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
                        stroke="#4799eb"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="flex justify-around">
                      {['Jan', 'Feb', 'Mar', 'Apr'].map((month) => (
                        <p
                          key={month}
                          className="text-xs font-bold text-text-light-secondary dark:text-text-dark-secondary"
                        >
                          {month}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
