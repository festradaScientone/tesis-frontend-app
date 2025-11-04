import Link from "next/link";

const courses = [
  {
    title: "Introduction to Python",
    description: "Learn the fundamentals of Python programming.",
    progress: 75,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMPz3Bq9u2Lw0rWZYBn9-EeG0k2sAIj0CtEYDcnlgSanLlUoBC9LRjTfDl5TpdM558BRK0IbEGKn5rM-8MNO1zr3NW3MwHfEdXxd7yy2LKXkqPeyYI2z9jDC6CQ25NmfN_uWqKjvO4BoVcI9ZhFFwUXTL080Yql3T4p-W7IstjKXLq5NzJePC7FAPA1IkSMWY86xFZI9lw8SVMuD8lv0hzIiAzood8WjEcuOwIH3SN70X_P3WM1wIEnvS8xOYEhg4ja_J0vL7Y4so",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Master common data structures and algorithms.",
    progress: 45,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB7nzjcEQavQN009LPD_nUsWyzc1g-epwhdFXB1p8sUT0CPVPmubMvdwVkTb0M4IZ8KUntpx8NoV7XEHpRGsQGpgjblTgKB82E6qH3yOfaaOBHFqNhW9azKdhydLQiDPYm8elyr9eE4sU_B17WrHM3OCNr2SDvpDxfYgMjE78CCXz1mPB0_pStS4kkskD40ycSZApwuySrYLMZnkbJm1ra8R6dxkTkxUXH_I2r-_nuuoljtnmdSeXyLX0FQGxVLl8MXlUXIkAbXo9c",
  },
  {
    title: "Web Development",
    description: "Build modern websites with HTML, CSS, and JS.",
    progress: 90,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAb7PXua7KK6nP82JI91bSsCoOjaoBv5x3nMGmQKEGxJNWU0B5nMOX53sE_Z7263Pn3AL1vsdiN_MxRjTiHlCKWHMI_o35qS8UPLEQVlHUFDTLgo7-PVb-hzgtPiSPr8UES7hQ3l7ffNV8BDk-8LBSQkK9p0KEEbZfkBx73wAiR8J8e3MuvhKYRMFNIbJB8aX7tT0zgtVjbT2NxVi8J3eeGd2axWpxXKhxM0tXfqCTcqw_Y0xIt7VtVmiHlRW326O1IZLu-xJ1qX0o",
  },
  {
    title: "Machine Learning Basics",
    description: "An intro to the exciting world of machine learning.",
    progress: 20,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBCw6k6z3iCw-vIjopZs3T4My7EUKtpNcwE5YptijV1hYRKTK_veyoJDV4EBJuOBEKAIAT-spFrlWyutzWPwdSHK1mQ5aB9g51p-s4x-0TxW1d6csME6RV7z1ggh9zgUt-bk6NXixJgnw4y_DM-FCf-4xc67KeXPe74xMcYsUUNH6QVXcNU7k9nYqL__Z6Y3PYIaPoWgt5jcpl_C7Aih3TMUZxkgWMQNDyAv0h5entLD8Cs2G72a48THO1lZUIIh7_quizTkA86RQ",
  },
  {
    title: "Database Management",
    description: "Understand and manage relational databases.",
    progress: 100,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBfNwYUL7FF__7B4ieTeiEF5OOvkfcAjsG3aYfQD2Awv2UIS8Tav7r0qJPwUqFNsthUnL61VaGj50a3TfJg1DhAd3MhPQBpKuQa3pEvShX7JoZuUkn61Hc6CnY9xTiGdeN2rQEcAJee4syH8tAU8kB27tpf0yslmiAnJHPhRGze34QLQhM8LeLp54vyTwSefkbBhxkz4dvdQK2I5ZIu_SPMTqdjDK2E3e6InYlQ4_-Mt7_DmX49gCE0lEabNv3kW9Jx-Wz9rT0ifCQ",
  },
  {
    title: "Software Engineering",
    description: "Learn best practices for building robust software.",
    progress: 5,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC1MaBVcJKENkziW2UTLHbH58o3bQxBLXvaZqvWUrJ0vNbUkxpluuj12OQ0BwLbjnSYw5V0rLFgtnYWFiUMUx6DT4AXnl69WN6SG0MC05gBBX89-WTwQfZ1JJvPV4kyl08CPGioByZtzUqIq5itiVptJVfwQmrVTnYnLgzsYpYtOH1smMc6nZ7OU-r7BCW5iHWgv9iDgXfLS5hWOc_M3reg93rrfUDBjZT4RuG5URjM_0ExF8ojl0oMemZpirinXpethQb_q5Yw17U",
  },
];

export default function DashboardPage() {
  return (
    <div className="font-display text-[#343A40] dark:text-text-light">
      <div className="relative flex min-h-screen bg-[#F8F9FA] dark:bg-background-dark">
        <aside className="flex w-64 flex-shrink-0 flex-col justify-between border-r border-gray-200 bg-white p-4 dark:border-gray-700/50 dark:bg-background-dark">
          <div>
            <div className="mb-8 flex items-center gap-3 px-2">
              <div
                className="size-10 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAUespsPCW5_xWYhSfwKK_EgjzmtqyAeAMjgiekTCk_TruDEVk8BjHRdd81vQOfwsntw9rBa24BXV1lr6Bxnf_T5iEmZUu2e7mHcvSrVnt9dg62OKtUOvcgS78uWFB07mV_oTk6oIepEl7e4_FcM7ac2BaZpNmvBbrgE-iIRCY65OEyaIEhZ1z5x20Wy5qWOAaMmciYb7kQ6jsCAApcl_7JupIiUoTmIBtS3U9uyVj1DYr0i6cgJE960TMr9TXrv53igyMQbohgkjY')",
                }}
              />
              <h1 className="text-xl font-bold">CourseApp</h1>
            </div>
            <nav className="flex flex-col gap-2">
              <Link
                className="flex items-center gap-3 rounded-lg bg-[#AEC6CF]/20 px-3 py-2 text-[#343A40] dark:text-white"
                href="/dashboard"
              >
                <span className="material-symbols-outlined">dashboard</span>
                <span className="font-medium">Dashboard</span>
              </Link>
              <a className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-[#AEC6CF]/10 dark:hover:bg-white/10" href="#">
                <span className="material-symbols-outlined">grade</span>
                <span className="font-medium">My Grades</span>
              </a>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-[#AEC6CF]/10 dark:hover:bg-white/10"
                href="/mind-map"
              >
                <span className="material-symbols-outlined">account_tree</span>
                <span className="font-medium">Mind Map</span>
              </Link>
              <a className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-[#AEC6CF]/10 dark:hover:bg-white/10" href="#">
                <span className="material-symbols-outlined">calendar_today</span>
                <span className="font-medium">Calendar</span>
              </a>
              <a className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-[#AEC6CF]/10 dark:hover:bg-white/10" href="#">
                <span className="material-symbols-outlined">settings</span>
                <span className="font-medium">Settings</span>
              </a>
            </nav>
          </div>
          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-[#ff4d4f] hover:bg-[#AEC6CF]/10 dark:text-red-400 dark:hover:bg-white/10">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-medium">Logout</span>
          </button>
        </aside>
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-10 flex items-center justify-end gap-4 border-b border-gray-200 bg-[#F8F9FA]/80 px-6 py-3 backdrop-blur-sm dark:border-gray-700/50 dark:bg-background-dark/80">
            <button className="relative flex size-10 items-center justify-center rounded-full hover:bg-[#AEC6CF]/20 dark:hover:bg-white/10">
              <span className="material-symbols-outlined text-[#343A40] dark:text-text-light">notifications</span>
              <span className="absolute right-1 top-1 block size-2.5 rounded-full border-2 border-[#F8F9FA] bg-red-500 dark:border-background-dark" />
            </button>
            <div
              className="size-10 rounded-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAndZ-q0qUGHJ-lAn1ZJxKaZborcXwGggRVqvm3KUmff6z3BIbBFWetZuSlvjhi96HoEzbbF1UdSenERMkt54OWKTwfsaihKwSKNG5BDySuQgEqMN3k5fDOhbgz7waVMrVWx6lHgm2z1r6e9kHdWQ8d_ImNRqadcvLhZWrxaAI584vqwNG7BxXo8g5Ov-yw-ReIxD_hqoDRZ7bir3MyU8nbZRk5qJ6OekWE1xX2J-Ox9zXUowvyEeI4120wtmkJ3rbNWnDmmw1VHk')",
              }}
            />
          </header>
          <main className="flex-1 p-6 lg:p-8">
            <div className="mb-8">
              <h1 className="text-4xl font-black tracking-tight">My Courses</h1>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
              {courses.map((course) => (
                <Link
                  key={course.title}
                  className="flex flex-col gap-4 rounded-xl bg-white p-4 text-[#343A40] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-2px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800/50 dark:text-text-light"
                  href="/course"
                >
                  <div
                    className="aspect-video w-full rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url('${course.image}')` }}
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-semibold">{course.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{course.description}</p>
                  </div>
                  <div className="mt-auto flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-[#AEC6CF]">Progress</p>
                      <p className="text-sm font-medium">{course.progress}%</p>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-2 rounded-full bg-[#AEC6CF]"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
