const mindMaps = [
  { title: "Introduction to AI" },
  { title: "Machine Learning Basics", active: true },
  { title: "Neural Networks" },
];

export default function MindMapPage() {
  return (
    <div className="font-display bg-background-light text-gray-800 dark:bg-background-dark dark:text-gray-200">
      <div className="flex h-screen">
        <aside className="flex w-64 flex-shrink-0 flex-col border-r border-gray-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <div className="border-b border-gray-200 p-4 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="size-8 text-primary">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">CourseMind</h2>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="p-4">
              <div className="mb-6 flex items-center gap-3">
                <div
                  className="size-10 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1q7x4YKJbyEORsaLlAWL2ndg0_49b6UnNDHzf1tqQUBnQtSIlwJjVv3hvZY2b3cZ47OFA28At-4sBHSe-nL3HTCdl7Wyc2yLpi9mSWeopcCcRXZnxkU3yropnz2X89gSMpoqtJxHcNIi-qTXS2dIaejPeT-pke1c1iJQplJ5YcN_rWp4R0UmonmMTjVDfdJQMquFb2ULXHJpmoGvNGCZh7c1p4Xx9CJoc_yQ-HFRrurIJoXAYghKuQUrt3Z_3zW9QGhuxATnIG0c')",
                  }}
                />
                <div className="flex flex-col">
                  <h1 className="text-base font-medium text-gray-900 dark:text-white">John Doe</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">john.doe@example.com</p>
                </div>
              </div>
              <nav className="flex flex-col gap-2">
                <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-primary/10 dark:text-gray-300 dark:hover:bg-primary/20" href="#">
                  <span className="material-symbols-outlined">dashboard</span>
                  <span className="text-sm font-medium">Dashboard</span>
                </a>
                <a className="flex items-center gap-3 rounded-lg bg-primary/20 px-3 py-2 text-primary dark:bg-primary/30 dark:text-white" href="#">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    video_library
                  </span>
                  <span className="text-sm font-medium">My Courses</span>
                </a>
                <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-primary/10 dark:text-gray-300 dark:hover:bg-primary/20" href="#">
                  <span className="material-symbols-outlined">settings</span>
                  <span className="text-sm font-medium">Settings</span>
                </a>
              </nav>
            </div>
            <div className="border-t border-gray-200 p-4 dark:border-slate-800">
              <h3 className="mb-2 px-3 text-sm font-semibold text-gray-500 dark:text-gray-400">Mind Maps</h3>
              <div className="flex flex-col gap-1">
                {mindMaps.map((map) => (
                  <a
                    key={map.title}
                    className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                      map.active
                        ? "bg-primary/10 font-medium text-primary dark:bg-primary/20 dark:text-white"
                        : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800"
                    }`}
                    href="#"
                  >
                    {map.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 p-4 dark:border-slate-800">
            <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-primary/10 dark:text-gray-300 dark:hover:bg-primary/20" href="#">
              <span className="material-symbols-outlined">logout</span>
              <span className="text-sm font-medium">Logout</span>
            </a>
          </div>
        </aside>
        <div className="flex flex-1 flex-col overflow-hidden">
          <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white/80 px-6 py-3 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <span className="material-symbols-outlined text-base align-middle text-green-500">check_circle</span>
              <span className="ml-1 align-middle">All changes saved</span>
            </p>
            <div className="flex items-center gap-2">
              <button className="flex h-9 min-w-[84px] items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-medium tracking-wide text-white">
                <span className="material-symbols-outlined text-base">picture_as_pdf</span>
                <span className="truncate">Export PDF</span>
              </button>
              <button className="flex h-9 min-w-[84px] items-center justify-center gap-2 rounded-lg bg-gray-200 px-4 text-sm font-medium tracking-wide text-gray-800 dark:bg-slate-700 dark:text-white">
                <span className="material-symbols-outlined text-base">image</span>
                <span className="truncate">Export PNG</span>
              </button>
              <button className="flex h-9 items-center justify-center gap-2 rounded-lg bg-gray-200 px-2.5 text-sm font-medium tracking-wide text-gray-800 dark:bg-slate-700 dark:text-white">
                <span className="material-symbols-outlined text-xl">share</span>
              </button>
              <button className="flex h-9 items-center justify-center gap-2 rounded-lg bg-gray-200 px-2.5 text-sm font-medium tracking-wide text-gray-800 dark:bg-slate-700 dark:text-white">
                <span className="material-symbols-outlined text-xl">undo</span>
              </button>
              <button className="flex h-9 items-center justify-center gap-2 rounded-lg bg-gray-200 px-2.5 text-sm font-medium tracking-wide text-gray-800 dark:bg-slate-700 dark:text-white">
                <span className="material-symbols-outlined text-xl">redo</span>
              </button>
            </div>
          </header>
          <main className="relative flex-1 overflow-auto bg-background-light p-8 dark:bg-background-dark">
            <div className="relative h-full w-full">
              <div className="absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col rounded-xl bg-white shadow-lg dark:bg-slate-800">
                  <div className="flex flex-col gap-1 p-4">
                    <p className="text-lg font-bold text-gray-900 dark:text-white">Machine Learning</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Core concept of the course.</p>
                  </div>
                </div>
              </div>
              <svg className="pointer-events-none absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <line x1="calc(50% - 150px)" y1="50%" x2="calc(50% - 144px)" y2="50%" stroke="#a0aec0" strokeWidth="2" />
                <line x1="calc(50% + 144px)" y1="50%" x2="calc(50% + 200px)" y2="25%" stroke="#a0aec0" strokeWidth="2" />
                <line x1="calc(50% + 144px)" y1="50%" x2="calc(50% + 200px)" y2="75%" stroke="#a0aec0" strokeWidth="2" />
                <line x1="calc(50% - 370px)" y1="50%" x2="calc(50% - 420px)" y2="35%" stroke="#a0aec0" strokeWidth="2" />
                <line x1="calc(50% - 370px)" y1="50%" x2="calc(50% - 420px)" y2="65%" stroke="#a0aec0" strokeWidth="2" />
              </svg>
              <div className="absolute left-[calc(50%-380px)] top-1/2 w-72 -translate-y-1/2">
                <div className="flex flex-col rounded-xl bg-white shadow-lg dark:bg-slate-800">
                  <div
                    className="aspect-video w-full rounded-t-xl bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBFXeSzCli96ql75cZd3Z1qb0UR0jThXp_VBk_nt8wQ2k_ea7vTqaCsZ9jhk0s6i64XEaqaXuXFJzVcUatKe8p08dR3VlnBJFfP9taLjAEF7Mn3ykT9Z4_tJyW2bObpFkUaTu7E-Ny3mzHIKeT8_ig5le4kaPjFlMM9057J67BlHXSypDQ_oxtVTgQQYjf3NZ61KPuBPk6QH7XXPULgTiiMNP4BRsAfsDXD4AcCzibzCL6bzU2y2sxGo1YufSDMnHbNK5Ajnd2U0Jk')",
                    }}
                  />
                  <div className="flex flex-col gap-1 p-4">
                    <p className="text-lg font-bold text-gray-900 dark:text-white">Supervised Learning</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Learning with labeled data.</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-[calc(50%+200px)] top-1/4 w-72 -translate-y-1/2">
                <div className="flex flex-col rounded-xl bg-white shadow-lg dark:bg-slate-800">
                  <div className="flex flex-col gap-1 p-4">
                    <p className="text-lg font-bold text-gray-900 dark:text-white">Unsupervised Learning</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Finding patterns in data.</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-[calc(50%+200px)] top-3/4 w-72 -translate-y-1/2">
                <div className="flex flex-col rounded-xl bg-white shadow-lg dark:bg-slate-800">
                  <div className="flex flex-col gap-1 p-4">
                    <p className="text-lg font-bold text-gray-900 dark:text-white">Reinforcement Learning</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Learning through rewards.</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-[calc(50%-650px)] top-[35%] w-64 -translate-y-1/2">
                <div className="flex flex-col rounded-xl bg-white shadow-lg dark:bg-slate-800">
                  <div className="flex flex-col gap-1 p-4">
                    <p className="text-base font-bold text-gray-900 dark:text-white">Classification</p>
                  </div>
                </div>
              </div>
              <div className="absolute left-[calc(50%-650px)] top-[65%] w-64 -translate-y-1/2">
                <div className="flex flex-col rounded-xl bg-white shadow-lg dark:bg-slate-800">
                  <div className="flex flex-col gap-1 p-4">
                    <p className="text-base font-bold text-gray-900 dark:text-white">Regression</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 right-8">
              <button className="flex h-14 items-center justify-center gap-3 rounded-xl bg-primary px-5 text-base font-bold tracking-wide text-white shadow-lg transition-colors hover:bg-primary/90">
                <span className="material-symbols-outlined">add</span>
                <span className="truncate">Add Node</span>
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
