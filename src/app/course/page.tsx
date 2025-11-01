const videos = [
  {
    title: "Lecture 1: The Basics of Algorithms",
    duration: "45:32",
    viewed: "Viewed 2 days ago",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAT0vdSDYCcshm6sZ6bw_xjRCDf97Q90UGQ5HGaHyDRxk3cOQ_zyUSdSCqrcDDDrXf5eOKQeEa_tR6voQojdtr9L7x_GgGEdYC4hLKcFnc3wsse_cMwloesUKuwKLPNSYUNUBbnlMs1seIFWc4QWT-25ktu2WvkRCu8Xg5DkVc_oxHeJhjR7zGYCayssFOXPatXW685FiDJZSPG9Rc4xzJh2gl0rspvZ4YOCpajp0S2xepN1wj48ru7eZh6RHkA49837HgToQGQ54k",
  },
  {
    title: "Lecture 2: Data Structures",
    duration: "52:10",
    viewed: "Viewed 1 day ago",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBdhmNhzIszz99TaJZDYT-AJy0Ax844ji27UISYWqvsP40Ejwks8mu4ZpbIbA2pT5bzOdbsJga6VAPYlN7aoZzpAM-lRWxfhetOZ6mf-bcUbARZgfUnouNZJJSwcJMXVVXpC4OlzrunWKICGxDK5ajwkg02k6hQG2XRKngfqpsiL6dPr2PZefstaOY749h1b5EnvGjpkbMFOtuOF_WjM3VZ9_CQDaRJPxSI39X6m9JU-MDrZFMMVimWArQQ_bqk7EtmzY-nd9mW5dU",
  },
  {
    title: "Lecture 3: Advanced Algorithms",
    duration: "48:15",
    viewed: "Viewed 5 hours ago",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAQ6o4cLPzpEn7G-4Uc0C-1HyIXDWGS1fke3s-1GKnatepC9t7eauQB3K8PNrPOoAaZ8HrHbvtTefLxMDLozE4yDlYWtEFXyAxskAvgfy1ucsi-lkv0lUt0O8ams061UynubbBexgdxiCrvTjJjdBjxbhpXhVZZw4dwE-6ABrI6AnW7GzN1Q5vo7NKvCPRr7okbdH2W-cC4MCL4oePMNJcMqOnotcprH_EvypPe9lT-0b2O3_x2fhW7PV6vyl49z7HQ7B4t1-FVMhc",
  },
  {
    title: "Lecture 4: Complexity Theory",
    duration: "55:45",
    viewed: "Viewed 10 minutes ago",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC4ABnld_Ly8aim66OnPEPeKpRQjuNufs7nx5Dj7gVOAHcrPk5dHMBaVORAhtUvp-P7gpSl4srGVl2MnEzBF7rr-OVixIC_NqRIYMwaRPkyMu0ks0cGoFzW-RCLY31tG1S3xIRYPmfrY2OWFloJI1fTn9TAwezbNC9y-ilSau2zakvA7DCACM1yjYpyd1D8OqFQP75yN1A4Kw31ihl_RPb6L8-lA-yu9825ZglPcOg2QwCZxQ5D2l-0ux-urcSVig1b0F9iaNWREEY",
  },
];

export default function CoursePage() {
  return (
    <div className="font-display">
      <div className="relative flex min-h-screen w-full bg-background-light dark:bg-background-dark">
        <aside className="w-64 flex-shrink-0 border-r border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/70">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 p-2">
              <div
                className="size-10 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCu9JmMcDpUcmkZLoROZtffvIz8oARR-pH1T3KWJ71vW9wlIB5RRo9VqIxe-83OACGYUYAb1OQfyHtBgY1cNS8HCW5skcqzuDNeAJbkPC1zMqCXkRf8VswboAJfNNh7ocfMPnh2_plZrjVlM8erBupdC3qcl9sdtigYjul7zdaYIMzqE6bg7r_50uqapG_NY2jcaouuAaxOyBk8kuTvWnBFedlgYYdrDWVKYysXyNDs3Qa734jnk5aY3XdHWnp-hJ2h3JSBNo9-9Xw')",
                }}
              />
              <div className="flex flex-col">
                <h1 className="text-base font-medium leading-normal text-slate-900 dark:text-white">John Doe</h1>
                <p className="text-sm font-normal leading-normal text-slate-500 dark:text-slate-400">
                  john.doe@university.edu
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-700 hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:bg-primary/10" href="#">
                <span className="material-symbols-outlined">dashboard</span>
                <p className="text-sm font-medium leading-normal">Dashboard</p>
              </a>
              <a className="flex items-center gap-3 rounded-lg bg-primary/20 px-3 py-2 text-primary" href="#">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  computer
                </span>
                <p className="text-sm font-medium leading-normal">CS101: Intro to Computer Science</p>
              </a>
              <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-700 hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:bg-primary/10" href="#">
                <span className="material-symbols-outlined">science</span>
                <p className="text-sm font-medium leading-normal">PHY205: Classical Mechanics</p>
              </a>
              <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-slate-700 hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:bg-primary/10" href="#">
                <span className="material-symbols-outlined">settings</span>
                <p className="text-sm font-medium leading-normal">Settings</p>
              </a>
            </div>
          </div>
        </aside>
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-background-light/80 px-10 py-3 backdrop-blur-sm dark:border-slate-800 dark:bg-background-dark/80">
            <div className="flex items-center gap-4 text-slate-900 dark:text-white">
              <div className="size-6 text-primary">
                <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-12.5v9l7.5-4.5-7.5-4.5z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">CourseApp</h2>
            </div>
            <div className="flex flex-1 items-center justify-end gap-4">
              <label className="flex h-10 min-w-40 flex-1 flex-col">
                <div className="flex h-full w-full items-stretch rounded-lg">
                  <div className="flex items-center justify-center rounded-l-lg border-none bg-white pl-3 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input
                    className="form-input h-full flex-1 rounded-l-none rounded-r-lg border-none bg-white px-4 pl-2 text-base font-normal leading-normal text-slate-900 placeholder:text-slate-500 focus:outline-0 focus:ring-2 focus:ring-primary/50 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400"
                    placeholder="Search videos..."
                  />
                </div>
              </label>
              <div className="flex gap-2">
                <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-700 transition-colors hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
                  <span className="material-symbols-outlined">notifications</span>
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-slate-700 transition-colors hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
                  <span className="material-symbols-outlined">help_outline</span>
                </button>
              </div>
              <div
                className="size-10 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7gEB3fLrAzSRjZWZ2xFRyLNtudIAwANuV-RjF4M7m-B57octpgV1NsIqQVUFteAA1GebMmr0YCgkBm_EkyaBF7LYbwICZ3Q4qR8l1SzqynIPqYOTceQxct60wYJmchHlgXwkZIf_GQ8Eh_SO3I4FYt4B5ANdb6wIfRukkkx3XAUsB1qGn_XRiSusfnVcVhQ07mEPuybjX-gr0wAylZGOZJFz6eA73j6AK2GSbVncGNWHDrbbnNjwfEtyvVXFngLAo--WE9U7kA-k')",
                }}
              />
            </div>
          </header>
          <main className="flex-1 p-10">
            <div className="mb-8 flex flex-wrap justify-between gap-3">
              <div className="flex min-w-72 flex-col gap-2">
                <p className="text-4xl font-black leading-tight tracking-[-0.033em] text-slate-900 dark:text-white">
                  Class Videos
                </p>
                <p className="text-base font-normal leading-normal text-slate-500 dark:text-slate-400">
                  CS101: Introduction to Computer Science
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
              {videos.map((video) => (
                <div
                  key={video.title}
                  className="flex flex-col gap-4 rounded-xl bg-white p-4 text-slate-900 shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg dark:bg-slate-900/70 dark:text-white"
                >
                  <div
                    className="aspect-video w-full rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url('${video.image}')` }}
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-base font-medium leading-normal">{video.title}</p>
                    <p className="text-sm font-normal leading-normal text-slate-500 dark:text-slate-400">{video.duration}</p>
                    <p className="text-sm font-normal leading-normal text-slate-500 dark:text-slate-400">{video.viewed}</p>
                  </div>
                  <button className="mt-2 flex h-10 w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold leading-normal tracking-[0.015em] text-white transition-colors hover:bg-primary/90">
                    <span className="truncate">Open in AI Assistant</span>
                  </button>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
