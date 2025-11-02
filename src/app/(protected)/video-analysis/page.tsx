import { Fragment } from "react";

const transcriptEntries = [
  {
    title: "Introduction to Machine Learning",
    time: "00:00 - 10:00",
    active: true,
  },
  {
    title: "Supervised Learning",
    time: "10:01 - 30:00",
  },
  {
    title: "Unsupervised Learning",
    time: "30:01 - 50:00",
  },
  {
    title: "Conclusion and Q&A",
    time: "50:01 - 60:00",
  },
];

const chatMessages = [
  {
    type: "assistant",
    text: "Ask me anything about this lecture.",
  },
  {
    type: "user",
    text: "What's the difference between supervised and unsupervised learning?",
  },
];

export default function VideoAnalysisPage() {
  return (
    <div className="font-display text-[#212121] dark:text-[#f0f0f0]">
      <div className="relative flex h-screen w-full flex-col overflow-hidden bg-[#F5F5F5] dark:bg-background-dark">
        <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center justify-between border-b border-gray-200 bg-[#FFFFFF] px-6 dark:border-gray-700 dark:bg-[#1a2632]">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-[#212121] dark:text-[#f0f0f0]">
              <span className="material-symbols-outlined text-3xl text-[#AEC6CF]">school</span>
              <h2 className="text-xl font-bold tracking-[-0.015em]">CourseCraft</h2>
            </div>
            <div className="hidden items-center gap-2 text-sm text-gray-500 dark:text-gray-400 md:flex">
              <p>Introduction to Machine Learning</p>
              <span className="material-symbols-outlined text-gray-400">chevron_right</span>
              <p className="font-medium">Lecture 3: Supervised Learning</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <label className="hidden h-10 min-w-40 max-w-64 md:flex">
              <div className="flex h-full w-full items-stretch rounded-lg">
                <div className="flex items-center justify-center rounded-l-lg border-none bg-[#F5F5F5] pl-3 text-gray-500 dark:bg-background-dark dark:text-gray-400">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="form-input h-full flex-1 rounded-l-none rounded-r-lg border-none bg-[#F5F5F5] px-4 pl-2 text-base text-[#212121] placeholder:text-gray-500 focus:outline-0 focus:ring-0 dark:bg-background-dark dark:text-[#f0f0f0] dark:placeholder:text-gray-400"
                  placeholder="Search"
                />
              </div>
            </label>
            <button className="flex size-10 items-center justify-center rounded-full bg-[#F5F5F5] text-[#212121] dark:bg-background-dark dark:text-[#f0f0f0]">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div
              className="size-10 rounded-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMyeyc7qWFOz0UrLqau6vjjbvCwKY1UG2laKg0tp2oSPopbg_ni0wmltEez_5U27wJjLS6Kz7vNQ3BjDLZZ--NbhqE0y53GOCQe72exM9bylP5YzUeD4tcGiF8DAg22cuS5xawrZMW-d5LNfaFzO8kS8czAbTSyKrn8ABQmB-P_3NyoryklVqwfo19MjMu7QyyosH0GRxqqdi4yly0vLHOpofay9Tyf1t0Q97K2P0UcYwmHt8gHR8C7-XnAAdECcIEI8oGneqUKHg')",
              }}
            />
          </div>
        </header>
        <div className="flex flex-1 overflow-hidden">
          <aside className="flex w-64 flex-shrink-0 flex-col justify-between border-r border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-[#1a2632]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 px-2">
                <div
                  className="size-10 rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkwYZ0NQR61LybZTi8Neq_6MO6HgE9BbLQQZ5AHLY1M5W1T5hmTCTaB7i0u4zUREk9k_Jq3qf6YsCEy-S_KvMJeOPpPmnfH1VK99kKh3FO4VOPpc5tVZDgYr64JylnOZK6GMxRkpYbJFSv6BBL9YyyThfxhc6-iv5r3u0hSJDwohIVnakY9bNqhdtnrEBremnFbvrZvUdhUeu2Qg5UK6Z4a-yeT0Xas7ptzkRhAZznR2kw05maTB-FmdRWXmfuuE46v8yNoFEE3-U')",
                  }}
                />
                <div className="flex flex-col">
                  <h1 className="text-base font-medium leading-normal">John Doe</h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400">johndoe@email.com</p>
                </div>
              </div>
              <nav className="mt-4 flex flex-col gap-2">
                <a className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-[#AEC6CF]/20" href="#">
                  <span className="material-symbols-outlined">dashboard</span>
                  <p className="text-sm font-medium leading-normal">Dashboard</p>
                </a>
                <a className="flex items-center gap-3 rounded-lg bg-[#AEC6CF]/30 px-3 py-2 text-[#779ECB] dark:text-[#AEC6CF]" href="#">
                  <span className="material-symbols-outlined">school</span>
                  <p className="text-sm leading-normal">My Courses</p>
                </a>
                <a className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-[#AEC6CF]/20" href="#">
                  <span className="material-symbols-outlined">search</span>
                  <p className="text-sm font-medium leading-normal">Browse</p>
                </a>
                <a className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-[#AEC6CF]/20" href="#">
                  <span className="material-symbols-outlined">settings</span>
                  <p className="text-sm font-medium leading-normal">Settings</p>
                </a>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <button className="flex h-10 w-full items-center justify-center rounded-lg bg-[#AEC6CF] px-4 text-sm font-bold tracking-[0.015em] text-white transition-colors hover:bg-[#779ECB]">
                New Course
              </button>
              <a className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-[#AEC6CF]/20" href="#">
                <span className="material-symbols-outlined">logout</span>
                <p className="text-sm font-medium leading-normal">Logout</p>
              </a>
            </div>
          </aside>
          <main className="flex flex-1 flex-col gap-6 overflow-auto p-6">
            <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="flex flex-col gap-6 lg:col-span-2">
                <div className="flex flex-grow flex-col overflow-hidden rounded-xl bg-white shadow-sm dark:bg-[#1a2632]">
                  <div
                    className="relative flex items-center justify-center bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqpaQ3pbo_sfUZ9EqGkDNtVukHHoz7Ws0jZvb55lxA4t4SZY5_yXS6zkOeVANHniJJ9mlvJ2_auXdNQwrmMKfjupEOfrVoAGwWnDepoxs8DUtLxJv_zL4B57OSRg_UMD3D9JbXtxDRq6sMTO3yQT640x9VAiSTeBCagyV9GLj5-9YipeBfJ-d5z_TdzkHHFGE0nYGjus_Bfy-VvHfFSRp0mm29W0xdCiwZEoklkNn3zb7l4TkFkMOVWFjdSRgceiMCoFDYMwXaR6c')",
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                      <button className="flex size-16 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70">
                        <span className="material-symbols-outlined text-4xl">play_arrow</span>
                      </button>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 px-4 py-3">
                      <div className="flex h-4 items-center">
                        <div className="h-1.5 flex-1 rounded-full bg-white/70">
                          <div className="h-full w-1/4 rounded-full bg-[#AEC6CF]" />
                        </div>
                      </div>
                      <div className="mt-1 flex items-center justify-between text-xs font-medium tracking-[0.015em] text-white">
                        <p>15:00</p>
                        <p>60:00</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow overflow-auto p-4">
                    <h3 className="mb-4 px-4 text-lg font-bold">Transcript</h3>
                    <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
                      {transcriptEntries.map((entry) => (
                        <Fragment key={entry.title}>
                          {entry.active ? (
                            <div className="flex flex-col items-center gap-1 pt-3">
                              <span className="material-symbols-outlined text-[#AEC6CF]">play_circle</span>
                              <div className="h-full w-[2px] bg-[#AEC6CF]" />
                            </div>
                          ) : (
                            <div className="flex flex-col items-center gap-1">
                              <div className="h-2 w-[2px] bg-gray-300 dark:bg-gray-600" />
                              <span className="material-symbols-outlined text-gray-500">play_circle</span>
                              <div className="w-[2px] grow bg-gray-300 dark:bg-gray-600" />
                            </div>
                          )}
                          <div
                            className={`flex flex-1 flex-col rounded-lg px-3 py-2.5 ${
                              entry.active ? "bg-[#AEC6CF]/20" : ""
                            }`}
                          >
                            <p
                              className={`text-sm font-medium leading-normal ${
                                entry.active
                                  ? "text-[#779ECB] dark:text-[#AEC6CF]"
                                  : "text-[#212121] dark:text-[#f0f0f0]"
                              }`}
                            >
                              {entry.title}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{entry.time}</p>
                          </div>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <aside className="flex flex-col gap-6 rounded-xl bg-white p-4 shadow-sm dark:bg-[#1a2632]">
                <div>
                  <h3 className="text-lg font-bold">AI Assistant</h3>
                </div>
                <div className="flex flex-1 flex-col gap-4 overflow-y-auto">
                  {chatMessages.map((message, idx) => (
                    <div
                      key={idx}
                      className={`flex items-end gap-3 ${message.type === "user" ? "flex-row-reverse" : ""}`}
                    >
                      <div
                        className={`size-10 rounded-full bg-cover bg-center ${
                          message.type === "user"
                            ? ""
                            : "bg-[#AEC6CF]/30 flex items-center justify-center"
                        }`}
                        style={
                          message.type === "user"
                            ? {
                                backgroundImage:
                                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAReJZhtecl1UQnKRwGJgX4pKLCVXbHINnnlYBzo5o7JTWJbQc_EUFbBcbejybmeL10wLJr9fcRcU_NCS5hMUsux4cBzsQKn-G1TWGeSJkTu0LMmp6-4lzreIQ3onCW3AymZo_L8p-H1K2NsOa7wY3CrxhTArcrDHpG6AjMrQGD3tQ5qtGVOS-dFrjyDth9fY_rtFiJZ8LEJz09QS_kNzJULda3vr4vx16LLlMOqeQlFhw11mrvtfDqzur_Yodc5iMVCqxmeoWRLtE')",
                              }
                            : undefined
                        }
                      >
                        {message.type !== "user" && (
                          <span className="material-symbols-outlined text-[#AEC6CF]">smart_toy</span>
                        )}
                      </div>
                      <div className={`flex flex-1 flex-col gap-1 ${message.type === "user" ? "items-end" : "items-start"}`}>
                        <p
                          className={`max-w-[360px] rounded-xl px-4 py-3 text-sm font-medium leading-normal ${
                            message.type === "user"
                              ? "bg-[#AEC6CF] text-white"
                              : "bg-[#F5F5F5] text-[#212121] dark:bg-background-dark dark:text-[#f0f0f0]"
                          }`}
                        >
                          {message.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-auto">
                  <div className="flex items-center rounded-lg bg-[#F5F5F5] p-1 dark:bg-background-dark">
                    <input
                      className="form-input flex-grow border-none bg-transparent px-2 text-sm text-[#212121] placeholder:text-gray-500 focus:outline-0 focus:ring-0 dark:text-[#f0f0f0] dark:placeholder:text-gray-400"
                      placeholder="Type your question or use the mic..."
                    />
                    <button className="rounded-full p-2 text-[#AEC6CF] transition-colors hover:bg-[#AEC6CF]/20">
                      <span className="material-symbols-outlined">mic</span>
                    </button>
                    <button className="ml-1 rounded-full bg-[#AEC6CF] p-2 text-white transition-colors hover:bg-[#779ECB]">
                      <span className="material-symbols-outlined">send</span>
                    </button>
                  </div>
                </div>
              </aside>
            </div>
            <div className="flex-shrink-0 rounded-xl bg-white p-6 shadow-sm dark:bg-[#1a2632]">
              <h3 className="mb-4 text-lg font-bold">Lecture Mind Map</h3>
              <div className="flex h-64 w-full items-center justify-center overflow-hidden rounded-lg bg-[#F5F5F5] dark:bg-background-dark">
                <img
                  className="object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHQMbEdBazSsoQUBSxe1Alue101uTcuRTPEpdELVSLdrozsirZ0TvXYHJlJhgea76HDd-yf8oTMr5YkM2t6542kXiL2K2CCvg4zWI-s_4N8nPK-IGRiVUQHR-KxfCKgO4MXxf_0RuTpuFBDMtepNeUtjKszDcpnj5MCaB2mNqaupKHzO1Bmkpc_ILQDbp3QvBRH0CTs63Ogk_320susZ5leYpFGZSCb61XbHaFt8LD_i8PXw64lj-fvMHtsChe6smERXXp2IddSWg"
                  alt="Mind map preview"
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
