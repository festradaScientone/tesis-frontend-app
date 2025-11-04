"use client";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";

// === Dummy chat seed ===
const chatMessagesSeed = [
  { type: "assistant", text: "Ask me anything about this lecture." },
  { type: "user", text: "What's the difference between supervised and unsupervised learning?" },
];

// === Dummy summary (shown under the video) ===
const summaryPointsSeed = [
  "Definición de aprendizaje supervisado vs. no supervisado.",
  "Ciclo de entrenamiento: split (train/val/test), overfitting, regularización.",
  "Métricas clave: accuracy, precision/recall, F1, ROC-AUC.",
  "Algoritmos vistos: regresión logística, KNN, k-means como comparación.",
  "Buenas prácticas: normalización, validación cruzada y evaluación justa.",
];

// === Minimal Mind Map structure ===
interface MindMapNode {
  id: string;
  label: string;
  children?: MindMapNode[];
}

interface MindMapItem {
  id: string;
  title: string;
  topic: string;
  generatedAt: string;
  root: MindMapNode;
}

export default function VideoAnalysisPage() {
  // --- UI state ---
  const [chatMessages, setChatMessages] = useState(chatMessagesSeed);
  const [summaryPoints, setSummaryPoints] = useState(summaryPointsSeed);

  // Mind map state
  const [mindmaps, setMindmaps] = useState<MindMapItem[]>([]);
  const [isMindmapOpen, setIsMindmapOpen] = useState(false);
  const [mindmapTopic, setMindmapTopic] = useState("");
  const [isGeneratingMindmap, setIsGeneratingMindmap] = useState(false);

  // Chat tabs: "text" | "voice"
  const [chatTab, setChatTab] = useState<"text" | "voice">("text");

  // Text chat input
  const [textInput, setTextInput] = useState("");

  // Voice realtime states
  const [isRecording, setIsRecording] = useState(false);
  const [vu, setVu] = useState(0); // Simple VU meter value 0..1
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceNodeRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const rafRef = useRef<number | null>(null);

  const videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
  const videoPoster = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg";

  // --- Helpers ---
  function addMessage(type: "user" | "assistant", text: string) {
    setChatMessages((prev) => [...prev, { type, text }]);
  }

  async function handleSendText() {
    const q = textInput.trim();
    if (!q) return;
    addMessage("user", q);
    setTextInput("");

    // TODO: Replace with your real endpoint (stream preferred)
    try {
      // Example call: const res = await fetch('/api/ai/text-chat', { method: 'POST', body: JSON.stringify({ question: q, videoUrl }) })
      // const data = await res.json();
      // addMessage('assistant', data.answer)

      // Fallback demo answer
      addMessage(
        "assistant",
        "Para responder a tu pregunta, revisa los segmentos del video relacionados y las definiciones clave. (Demo)"
      );
    } catch (e) {
      addMessage("assistant", "Hubo un problema al obtener la respuesta. Intenta de nuevo más tarde.");
    }
  }

  // --- Mind map generation (demo) ---
  async function handleGenerateMindmap() {
    const topic = mindmapTopic.trim();
    if (!topic) return;
    setIsGeneratingMindmap(true);

    try {
      // TODO: Reemplaza con tu backend/endpoint real
      // Ejemplo:
      // const res = await fetch('/api/mindmap', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topic, videoUrl }) });
      // const data = await res.json(); // { id, title, generatedAt, root }

      // DEMO local
      const now = new Date();
      const demo: MindMapItem = {
        id: crypto.randomUUID(),
        title: `Mapa: ${topic}`,
        topic,
        generatedAt: now.toLocaleString(),
        root: {
          id: "root",
          label: topic,
          children: [
            {
              id: "1",
              label: "Conceptos clave",
              children: [
                { id: "1-1", label: "Definición" },
                { id: "1-2", label: "Ejemplos" },
                { id: "1-3", label: "Métricas" },
              ],
            },
            {
              id: "2",
              label: "Relación con el video",
              children: [
                { id: "2-1", label: "Min 00:00–10:00" },
                { id: "2-2", label: "Min 10:01–30:00" },
              ],
            },
            {
              id: "3",
              label: "Recursos",
              children: [
                { id: "3-1", label: "Paper A" },
                { id: "3-2", label: "Notebook B" },
              ],
            },
          ],
        },
      };

      setMindmaps((prev) => [demo, ...prev]);
      setIsMindmapOpen(false);
      setMindmapTopic("");
    } finally {
      setIsGeneratingMindmap(false);
    }
  }

  // --- Voice realtime logic (simple demo pipeline) ---
  // Captures mic, shows VU, records short chunks, and (optionally) POSTs to your /api/realtime endpoint.
  useEffect(() => {
    return () => {
      stopRecording();
      if (audioContextRef.current) {
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
    };
  }, []);

  function drawVU() {
    if (!analyserRef.current) return;
    const analyser = analyserRef.current;
    const data = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteTimeDomainData(data);
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      const v = (data[i] - 128) / 128; // -1..1
      sum += v * v;
    }
    const rms = Math.sqrt(sum / data.length); // 0..1
    setVu(Math.min(1, rms * 3));
    rafRef.current = requestAnimationFrame(drawVU);
  }

  async function startRecording() {
    if (isRecording) return;
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;

      // Audio context for VU
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      audioContextRef.current = ctx;
      const source = ctx.createMediaStreamSource(stream);
      sourceNodeRef.current = source;
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 2048;
      analyserRef.current = analyser;
      source.connect(analyser);
      drawVU();

      // MediaRecorder for chunks
      const mr = new MediaRecorder(stream, { mimeType: "audio/webm" });
      mediaRecorderRef.current = mr;

      mr.ondataavailable = async (e) => {
        if (e.data && e.data.size > 0) {
          // TODO: Enviar cada chunk a tu backend Realtime/WebSocket
          // Ejemplo fetch (HTTP):
          // await fetch('/api/realtime', { method: 'POST', body: e.data });
        }
      };

      mr.start(500); // chunk cada 500ms
      setIsRecording(true);
      addMessage("assistant", "🎙️ Voz en vivo conectada (demo). Haz tu pregunta.");
    } catch (err) {
      addMessage("assistant", "No se pudo acceder al micrófono. Revisa permisos.");
    }
  }

  function stopRecording() {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;

    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }
    mediaRecorderRef.current = null;

    if (sourceNodeRef.current) {
      sourceNodeRef.current.disconnect();
      sourceNodeRef.current = null;
    }

    if (analyserRef.current) {
      analyserRef.current.disconnect();
      analyserRef.current = null;
    }

    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((t) => t.stop());
      mediaStreamRef.current = null;
    }

    setIsRecording(false);
  }

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
          {/* SIDEBAR IZQUIERDA */}
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

          {/* MAIN */}
          <main className="flex flex-1 flex-col gap-6 overflow-auto p-6">
            <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="flex flex-col gap-4 lg:col-span-2">
                {/* === VIDEO PLAYER === */}
                <div className="flex flex-col overflow-hidden rounded-xl bg-white shadow-sm dark:bg-[#1a2632]">
                  <div className="w-full">
                    <video className="w-full aspect-video" controls preload="metadata" poster={videoPoster}>
                      <source src={videoUrl} type="video/mp4" />
                      Tu navegador no soporta el elemento de video.
                    </video>
                  </div>

                  {/* === ACTION BAR UNDER VIDEO === */}
                  <div className="flex flex-wrap items-center gap-2 border-t border-gray-100 p-3 dark:border-gray-700">
                    <button
                      onClick={() => setIsMindmapOpen(true)}
                      className="inline-flex items-center gap-2 rounded-lg bg-[#AEC6CF] px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#779ECB]"
                    >
                      <span className="material-symbols-outlined">account_tree</span>
                      Generar mapa mental
                    </button>
                    <div className="ml-auto flex items-center gap-2">
                      <span className="text-xs text-gray-500 dark:text-gray-400">Chat:</span>
                      <button
                        className={`rounded-md px-2 py-1 text-xs ${
                          chatTab === "text" ? "bg-[#AEC6CF] text-white" : "bg-gray-100 dark:bg-[#0f1720]"
                        }`}
                        onClick={() => setChatTab("text")}
                      >
                        Texto
                      </button>
                      <button
                        className={`rounded-md px-2 py-1 text-xs ${
                          chatTab === "voice" ? "bg-[#AEC6CF] text-white" : "bg-gray-100 dark:bg-[#0f1720]"
                        }`}
                        onClick={() => setChatTab("voice")}
                      >
                        Voz (realtime)
                      </button>
                    </div>
                  </div>

                  {/* === RESUMEN === */}
                  <div className="border-t border-gray-100 p-4 dark:border-gray-700">
                    <h3 className="mb-2 text-lg font-bold">Resumen de la clase</h3>
                    <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                      {summaryPoints.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* === MINDMAP LIST (RECENTS) === */}
                {mindmaps.length > 0 && (
                  <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-[#1a2632]">
                    <div className="mb-3 flex items-center justify-between">
                      <h3 className="text-lg font-bold">Mapas mentales generados</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {mindmaps.map((m) => (
                        <div key={m.id} className="rounded-lg border border-gray-200 p-3 dark:border-gray-700">
                          <div className="mb-1 flex items-center justify-between">
                            <p className="text-sm font-semibold">{m.title}</p>
                            <span className="text-xs text-gray-500">{m.generatedAt}</span>
                          </div>
                          <p className="mb-2 text-xs text-gray-500">Tema: {m.topic}</p>
                          {/* Simple mind map preview as nested list */}
                          <div className="text-sm">
                            <MindMapTree node={m.root} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* === RIGHT SIDEBAR: AI ASSISTANT === */}
              <aside className="flex flex-col gap-4 rounded-xl bg-white p-4 shadow-sm dark:bg-[#1a2632]">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">AI Assistant</h3>
                  <div className="flex items-center gap-2">
                    <button
                      className={`rounded-md px-2 py-1 text-xs ${
                        chatTab === "text" ? "bg-[#AEC6CF] text-white" : "bg-gray-100 dark:bg-[#0f1720]"
                      }`}
                      onClick={() => setChatTab("text")}
                    >
                      Texto
                    </button>
                    <button
                      className={`rounded-md px-2 py-1 text-xs ${
                        chatTab === "voice" ? "bg-[#AEC6CF] text-white" : "bg-gray-100 dark:bg-[#0f1720]"
                      }`}
                      onClick={() => setChatTab("voice")}
                    >
                      Voz
                    </button>
                  </div>
                </div>

                {/* TEXT CHAT */}
                {chatTab === "text" && (
                  <>
                    <div className="flex flex-1 flex-col gap-4 overflow-y-auto">
                      {chatMessages.map((message, idx) => (
                        <div key={idx} className={`flex items-end gap-3 ${message.type === "user" ? "flex-row-reverse" : ""}`}>
                          <div
                            className={`size-10 rounded-full bg-cover bg-center ${
                              message.type === "user" ? "" : "bg-[#AEC6CF]/30 flex items-center justify-center"
                            }`}
                            style=
                              {message.type === "user"
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
                          value={textInput}
                          onChange={(e) => setTextInput(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handleSendText()}
                          className="form-input flex-grow border-none bg-transparent px-2 text-sm text-[#212121] placeholder:text-gray-500 focus:outline-0 focus:ring-0 dark:text-[#f0f0f0] dark:placeholder:text-gray-400"
                          placeholder="Escribe tu pregunta..."
                        />
                        <button className="ml-1 rounded-full bg-[#AEC6CF] p-2 text-white transition-colors hover:bg-[#779ECB]" onClick={handleSendText}>
                          <span className="material-symbols-outlined">send</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {/* VOICE REALTIME CHAT */}
                {chatTab === "voice" && (
                  <div className="flex flex-1 flex-col">
                    <div className="rounded-lg border border-dashed border-gray-300 p-3 text-sm dark:border-gray-700">
                      <p className="mb-2">Habla y te respondo (demo). Integra tu backend en <code>/api/realtime</code>.</p>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={isRecording ? stopRecording : startRecording}
                          className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-white transition-colors ${
                            isRecording ? "bg-red-500 hover:bg-red-600" : "bg-[#AEC6CF] hover:bg-[#779ECB]"
                          }`}
                        >
                          <span className="material-symbols-outlined">{isRecording ? "stop" : "mic"}</span>
                          {isRecording ? "Detener" : "Iniciar"} voz
                        </button>
                        <div className="h-2 w-40 overflow-hidden rounded-full bg-gray-200 dark:bg-[#0f1720]">
                          <div
                            className="h-full rounded-full bg-[#AEC6CF] transition-[width]"
                            style={{ width: `${Math.round(vu * 100)}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500">Nivel</span>
                      </div>
                    </div>
                    <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                      <p><strong>Notas de integración:</strong></p>
                      <ul className="list-disc pl-5">
                        <li>Usa <code>MediaRecorder</code> para enviar chunks (500ms) a tu servidor (WebSocket o HTTP).</li>
                        <li>En el backend, procesa audio (STT) y devuelve tokens/respuestas en streaming (TTS opcional).</li>
                        <li>Si usas WebSocket, reenvía las respuestas para reproducir audio o mostrar transcripción.</li>
                      </ul>
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </main>
        </div>
      </div>

      {/* === MINDMAP DIALOG === */}
      {isMindmapOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-xl dark:bg-[#1a2632]">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-bold">Generar mapa mental</h3>
              <button onClick={() => setIsMindmapOpen(false)} className="rounded-full p-1 hover:bg-black/5 dark:hover:bg-white/10">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <label className="text-sm text-gray-600 dark:text-gray-300">Tema (relacionado al video)</label>
            <input
              value={mindmapTopic}
              onChange={(e) => setMindmapTopic(e.target.value)}
              className="mt-1 w-full rounded-lg border border-gray-200 bg-[#F5F5F5] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#AEC6CF] dark:border-gray-700 dark:bg-[#0f1720]"
              placeholder="p. ej., Supervised Learning"
            />
            <div className="mt-4 flex items-center justify-end gap-2">
              <button onClick={() => setIsMindmapOpen(false)} className="rounded-lg px-3 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10">
                Cancelar
              </button>
              <button
                disabled={isGeneratingMindmap || !mindmapTopic.trim()}
                onClick={handleGenerateMindmap}
                className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-white ${
                  isGeneratingMindmap ? "bg-gray-400" : "bg-[#AEC6CF] hover:bg-[#779ECB]"
                }`}
              >
                <span className="material-symbols-outlined">account_tree</span>
                {isGeneratingMindmap ? "Generando..." : "Generar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// === Simple visual tree for the mind map (nested lists) ===
function MindMapTree({ node }: { node: MindMapNode }) {
  return (
    <ul className="ml-3 list-disc">
      <li>
        <span className="font-medium">{node.label}</span>
        {node.children && node.children.length > 0 && (
          <div className="mt-1 ml-5 space-y-1">
            {node.children.map((c) => (
              <MindMapTree key={c.id} node={c} />
            ))}
          </div>
        )}
      </li>
    </ul>
  );
}
