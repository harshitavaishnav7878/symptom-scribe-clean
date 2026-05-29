import { useState } from "react";

const infoCards = [
  {
    icon: "🔒",
    title: "Privacy & Confidentiality",
    description:
      "Your health data is encrypted and never shared. All conversations are private and secure.",
  },
  {
    icon: "⚡",
    title: "Instant Analysis",
    description:
      "Get AI-powered insights about your symptoms within seconds, available 24/7.",
  },
  {
    icon: "🩺",
    title: "Health Guidance",
    description:
      "Receive personalised self-care tips, severity assessments, and actionable next steps.",
  },
  {
    icon: "👨‍⚕️",
    title: "Professional Support",
    description:
      "When needed, we guide you to the right medical professional for your situation.",
  },
];

const AIHealthAssistant = () => {
  const [symptoms, setSymptoms] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!symptoms.trim()) return;
    setLoading(true);
    setResponse(null);

    // Simulate AI response (replace with real API call if available)
    setTimeout(() => {
      setResponse(
        `Based on the symptoms you've described ("${symptoms}"), here are some general insights:\n\n` +
          `• These symptoms may be associated with common conditions. Monitor their duration and intensity.\n` +
          `• Stay hydrated and get adequate rest.\n` +
          `• If symptoms persist for more than 48 hours or worsen significantly, consult a healthcare professional.\n\n` +
          `⚠️ This is an AI-generated suggestion only and does not constitute medical advice.`
      );
      setLoading(false);
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-teal-950 border-b border-gray-800 px-6 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            <span className="text-teal-400 text-sm font-medium">AI-Powered Health Assistant</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Understand Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              Symptoms
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Describe how you're feeling and receive instant AI-driven health insights,
            severity assessments, and personalised guidance.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left: Chat/Input Area */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Assistant Header */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-2xl shadow-lg shadow-teal-500/20">
              🤖
            </div>
            <div>
              <h2 className="text-white font-semibold text-lg">Health AI</h2>
              <p className="text-gray-400 text-sm">Ready to analyse your symptoms</p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-400 text-xs">Online</span>
            </div>
          </div>

          {/* Response Area */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 min-h-[200px] flex flex-col justify-center">
            {!response && !loading && (
              <div className="text-center text-gray-600">
                <div className="text-5xl mb-4">💬</div>
                <p className="text-gray-500">Describe your symptoms below and click Analyse.</p>
              </div>
            )}
            {loading && (
              <div className="flex flex-col items-center gap-3 text-gray-400">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 bg-teal-400 rounded-full animate-bounce [animation-delay:0ms]"></span>
                  <span className="w-2.5 h-2.5 bg-teal-400 rounded-full animate-bounce [animation-delay:150ms]"></span>
                  <span className="w-2.5 h-2.5 bg-teal-400 rounded-full animate-bounce [animation-delay:300ms]"></span>
                </div>
                <p className="text-sm">Analysing your symptoms…</p>
              </div>
            )}
            {response && (
              <div className="flex gap-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-lg flex-shrink-0">
                  🤖
                </div>
                <div className="bg-gray-800 rounded-2xl rounded-tl-none p-4 text-gray-200 text-sm leading-relaxed whitespace-pre-line">
                  {response}
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 flex flex-col gap-4">
            <label className="text-gray-300 text-sm font-medium">
              Describe your symptoms
            </label>
            <textarea
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder="e.g. I have had a headache and mild fever for the past two days, along with fatigue…"
              rows={4}
              className="bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-600 text-sm resize-none focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 transition-all"
            />
            <button
              onClick={handleAnalyze}
              disabled={loading || !symptoms.trim()}
              className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              {loading ? "Analysing…" : "Analyse Symptoms ✦"}
            </button>
          </div>

          {/* Medical Disclaimer */}
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl px-5 py-4 flex gap-3 items-start">
            <span className="text-amber-400 text-lg flex-shrink-0 mt-0.5">⚠️</span>
            <p className="text-amber-300/80 text-sm leading-relaxed">
              <span className="font-semibold text-amber-300">Medical Disclaimer:</span>{" "}
              This tool provides general health information only and is not a substitute
              for professional medical advice, diagnosis, or treatment. Always consult a
              qualified healthcare provider for any medical concerns.
            </p>
          </div>
        </div>

        {/* Right: Info Cards */}
        <div className="flex flex-col gap-4">
          <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-widest px-1">
            Why use Health AI?
          </h3>
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="bg-gray-900 border border-gray-800 hover:border-teal-500/30 rounded-2xl p-5 flex gap-4 items-start transition-all duration-200 hover:bg-gray-900/80 hover:-translate-y-0.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gray-800 group-hover:bg-teal-500/10 flex items-center justify-center text-xl flex-shrink-0 transition-colors">
                {card.icon}
              </div>
              <div>
                <h4 className="text-white font-medium text-sm mb-1">{card.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIHealthAssistant;

