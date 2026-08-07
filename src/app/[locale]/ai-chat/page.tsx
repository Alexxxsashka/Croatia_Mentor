"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import {
  Send,
  Bot,
  User,
  Sparkles,
  Loader2,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  MessageSquare,
  Theater,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";
import { speakText } from "@/lib/speech";
import { toast } from "sonner";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const DIACRITICS = ["č", "ć", "đ", "š", "ž", "Č", "Ć", "Đ", "Š", "Ž"];

export default function AIChatPage() {
  const t = useTranslations("aiChat");
  const locale = useLocale();

  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: t("systemMessage") },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatMode, setChatMode] = useState<"conversation" | "roleplay" | "pronunciation" | "exam">("conversation");
  const [selectedScenario, setSelectedScenario] = useState("Pekara / Bakery");
  const [isListening, setIsListening] = useState(false);
  const [autoPlayVoice, setAutoPlayVoice] = useState(false);
  const [speakingIdx, setSpeakingIdx] = useState<number | null>(null);
  const [remainingLimit, setRemainingLimit] = useState<{ remaining: number; limit: number; isAdmin: boolean } | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    fetch("/api/chat")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.remaining === "number") {
          setRemainingLimit({ remaining: data.remaining, limit: data.limit, isAdmin: !!data.isAdmin });
        }
      })
      .catch(console.error);
  }, []);

  const scenarios = [
    { id: "Pekara / Bakery", label: locale === "ua" ? "🥐 Пекерня (Pekara)" : locale === "ru" ? "🥐 Пекарня (Pekara)" : "🥐 Bakery (Pekara)" },
    { id: "Restoran / Restaurant", label: locale === "ua" ? "🍷 Ресторан (Restoran)" : locale === "ru" ? "🍷 Ресторан (Restoran)" : "🍷 Restaurant (Restoran)" },
    { id: "Stan / Apartment Rent", label: locale === "ua" ? "🔑 Оренда квартири" : locale === "ru" ? "🔑 Аренда квартиры" : "🔑 Rent Apartment" },
    { id: "Tržnica / Market", label: locale === "ua" ? "🍉 Ринок (Dolac)" : locale === "ru" ? "🍉 Рынок (Dolac)" : "🍉 Open Market" },
    { id: "Prijatelji / Socializing", label: locale === "ua" ? "☕ Кава з друзями" : locale === "ru" ? "☕ Кофе с друзьями" : "☕ Coffee with friends" },
  ];

  const suggestedTopics = [
    { key: "greet", label: t("topics.greet") },
    { key: "order", label: t("topics.order") },
    { key: "apartment", label: t("topics.apartment") },
    { key: "directions", label: t("topics.directions") },
    { key: "introduce", label: t("topics.introduce") },
    { key: "shopping", label: t("topics.shopping") },
  ];

  const startListening = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (typeof window === "undefined" || (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window))) {
      toast.error(
        locale === "ua"
          ? "Розпізнавання голосу не підтримується цим браузером"
          : locale === "ru"
          ? "Распознавание речи не поддерживается этим браузером"
          : "Speech recognition is not supported in this browser"
      );
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "hr-HR";

    recognition.onstart = () => {
      setIsListening(true);
      toast.info(
        locale === "ua"
          ? "🎙️ Говоріть хорватською або рідною мовою..."
          : locale === "ru"
          ? "🎙️ Говорите на хорватском или родном языке..."
          : "🎙️ Speak in Croatian or native language..."
      );
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onresult = (event: any) => {
      let transcript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      setInput(transcript);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    recognition.onerror = (event: any) => {
      console.error("Speech recognition error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const handleSpeakMessage = (index: number, text: string) => {
    if (speakingIdx === index) {
      setSpeakingIdx(null);
      return;
    }

    setSpeakingIdx(index);
    speakText(text, {
      onEnd: () => setSpeakingIdx(null),
    });
  };

  const sendMessage = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText || loading) return;

    const userMessage: Message = { role: "user", content: messageText };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: messageText,
          mode: chatMode,
          scenario: selectedScenario,
          history: newMessages.slice(1).map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();
      if (typeof data.remaining === "number") {
        setRemainingLimit((prev) => prev ? { ...prev, remaining: data.remaining } : null);
      }

      const aiReply = data.response || data.error || (locale === "ua"
        ? "Вибачте, виникла тимчасова помилка зв'язку з ИИ."
        : locale === "ru"
        ? "Извините, произошла временная ошибка связи с ИИ."
        : "Sorry, temporary AI connection error.");

      setMessages([
        ...newMessages,
        { role: "assistant", content: aiReply },
      ]);

      if (autoPlayVoice) {
        speakText(aiReply);
      }
    } catch {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: locale === "ua"
            ? "Вибачте, виникла помилка підключення. Спробуйте ще раз."
            : locale === "ru"
            ? "Извините, произошла ошибка подключения. Попробуйте еще раз."
            : "Sorry, connection error occurred. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const insertChar = (char: string) => {
    setInput((prev) => prev + char);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 h-[calc(100vh-7.5rem)] flex flex-col">
      {/* Top Bar Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 animate-fade-in border-b border-white/5 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/25 shrink-0">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-black flex items-center gap-2">
              <span className="gradient-text">{t("title")}</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/20">
                Gemini 2.0 AI
              </span>
            </h1>
            <p className="text-xs text-muted-foreground">{t("subtitle")}</p>
          </div>
        </div>

        {/* Auto Voice Output Toggle & Daily Limit Counter Badge */}
        <div className="flex flex-wrap items-center gap-2 self-end sm:self-auto">
          {remainingLimit && (
            <div className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 flex items-center gap-1.5 text-muted-foreground">
              <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
              {remainingLimit.isAdmin ? (
                <span className="text-amber-400 font-bold">👑 Admin (Unlimited)</span>
              ) : (
                <span>
                  {locale === "ua" ? "Ліміт на день:" : locale === "ru" ? "Лимит в день:" : "Daily limit:"}{" "}
                  <strong className={remainingLimit.remaining === 0 ? "text-red-400" : "text-emerald-400 font-extrabold"}>
                    {remainingLimit.remaining}/{remainingLimit.limit}
                  </strong>
                </span>
              )}
            </div>
          )}

          <button
            type="button"
            onClick={() => setAutoPlayVoice(!autoPlayVoice)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
              autoPlayVoice
                ? "bg-purple-600 text-white border-purple-500 shadow-md"
                : "bg-white/5 border-white/10 text-muted-foreground hover:text-foreground"
            }`}
          >
            {autoPlayVoice ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            {locale === "ua" ? "Авто-озвучка" : locale === "ru" ? "Авто-озвучка" : "Auto Voice"}
          </button>
        </div>
      </div>

      {/* Mode Selection Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
        <button
          onClick={() => setChatMode("conversation")}
          className={`p-2.5 rounded-xl text-xs font-bold border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            chatMode === "conversation"
              ? "bg-purple-600 text-white border-purple-500 shadow-md"
              : "glass border-white/10 text-muted-foreground hover:text-foreground"
          }`}
        >
          <MessageSquare className="w-3.5 h-3.5" />
          {locale === "ua" ? "Чат-ментор" : locale === "ru" ? "Чат-ментор" : "Chat Mentor"}
        </button>

        <button
          onClick={() => setChatMode("roleplay")}
          className={`p-2.5 rounded-xl text-xs font-bold border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            chatMode === "roleplay"
              ? "bg-purple-600 text-white border-purple-500 shadow-md"
              : "glass border-white/10 text-muted-foreground hover:text-foreground"
          }`}
        >
          <Theater className="w-3.5 h-3.5" />
          {locale === "ua" ? "Рольова гра" : locale === "ru" ? "Ролевая игра" : "Roleplay"}
        </button>

        <button
          onClick={() => setChatMode("pronunciation")}
          className={`p-2.5 rounded-xl text-xs font-bold border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            chatMode === "pronunciation"
              ? "bg-purple-600 text-white border-purple-500 shadow-md"
              : "glass border-white/10 text-muted-foreground hover:text-foreground"
          }`}
        >
          <CheckCircle2 className="w-3.5 h-3.5" />
          {locale === "ua" ? "Перевірка речення" : locale === "ru" ? "Проверка предложений" : "Check Speech"}
        </button>

        <button
          onClick={() => setChatMode("exam")}
          className={`p-2.5 rounded-xl text-xs font-bold border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            chatMode === "exam"
              ? "bg-purple-600 text-white border-purple-500 shadow-md"
              : "glass border-white/10 text-muted-foreground hover:text-foreground"
          }`}
        >
          <GraduationCap className="w-3.5 h-3.5" />
          {locale === "ua" ? "Екзаменатор" : locale === "ru" ? "Экзаменатор" : "Examiner"}
        </button>
      </div>

      {/* Roleplay Scenario Selector bar */}
      {chatMode === "roleplay" && (
        <div className="flex items-center gap-2 mb-3 overflow-x-auto pb-1">
          <span className="text-xs font-bold text-purple-400 shrink-0">
            {locale === "ua" ? "Сценарій:" : locale === "ru" ? "Сценарий:" : "Scenario:"}
          </span>
          {scenarios.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedScenario(s.id)}
              className={`px-3 py-1 rounded-xl text-xs font-medium border shrink-0 transition-all cursor-pointer ${
                selectedScenario === s.id
                  ? "bg-blue-600 text-white border-blue-500 shadow"
                  : "bg-white/5 border-white/10 text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      )}

      {/* Messages Feed Area */}
      <div className="flex-1 overflow-y-auto rounded-2xl glass p-4 mb-3 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-3 animate-fade-in ${
              msg.role === "user" ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                msg.role === "user"
                  ? "bg-blue-500/20 text-blue-400"
                  : "bg-purple-500/20 text-purple-400"
              }`}
            >
              {msg.role === "user" ? (
                <User className="w-4 h-4" />
              ) : (
                <Bot className="w-4 h-4" />
              )}
            </div>

            <div
              className={`group relative max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                msg.role === "user"
                  ? "bg-blue-500/15 border border-blue-500/20 ml-auto text-foreground"
                  : "bg-white/5 border border-white/5 text-foreground"
              }`}
            >
              <div className="whitespace-pre-wrap">{msg.content}</div>

              {/* TTS Audio button on assistant response */}
              {msg.role === "assistant" && (
                <button
                  type="button"
                  onClick={() => handleSpeakMessage(i, msg.content)}
                  className={`mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    speakingIdx === i
                      ? "bg-purple-500/30 text-purple-300 border border-purple-500/40"
                      : "bg-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10"
                  }`}
                >
                  <Volume2 className={`w-3.5 h-3.5 ${speakingIdx === i ? "animate-pulse text-purple-400" : ""}`} />
                  {speakingIdx === i
                    ? (locale === "ua" ? "Озвучується..." : locale === "ru" ? "Озвучивается..." : "Playing...")
                    : (locale === "ua" ? "Прослухати вимову" : locale === "ru" ? "Прослушать произношение" : "Listen Audio")}
                </button>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex gap-3 animate-fade-in">
            <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-white/5 border border-white/5 rounded-2xl px-4 py-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Loader2 className="w-4 h-4 animate-spin text-purple-400" />
                {t("thinking")}
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Topics (when conversation just started) */}
      {messages.length <= 2 && (
        <div className="mb-3 animate-slide-up">
          <p className="text-xs text-muted-foreground mb-1.5 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            {t("suggestedTopics")}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {suggestedTopics.map((topic) => (
              <button
                key={topic.key}
                onClick={() => sendMessage(topic.label)}
                className="px-3 py-1 rounded-xl text-xs font-medium glass hover:bg-white/10 transition-all cursor-pointer"
              >
                {topic.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Diacritic Toolbar */}
      <div className="flex items-center justify-center gap-1 mb-2">
        <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mr-1">
          {locale === "ua" ? "Літери:" : locale === "ru" ? "Буквы:" : "Diacritics:"}
        </span>
        {DIACRITICS.map((char) => (
          <button
            key={char}
            type="button"
            onClick={() => insertChar(char)}
            className="w-7 h-7 rounded-md bg-white/5 border border-white/10 text-xs font-bold text-foreground hover:bg-purple-600 hover:text-white transition-all cursor-pointer"
          >
            {char}
          </button>
        ))}
      </div>

      {/* Input controls with Microphone & Send */}
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            className="w-full px-4 py-3.5 pr-12 rounded-2xl glass border border-white/10 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder:text-muted-foreground/50"
            placeholder={t("placeholder")}
          />
        </div>

        {/* Microphone Button */}
        <button
          type="button"
          onClick={isListening ? stopListening : startListening}
          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all cursor-pointer shrink-0 ${
            isListening
              ? "bg-red-500 text-white animate-pulse shadow-lg shadow-red-500/30"
              : "glass border border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/10"
          }`}
          title={isListening ? "Stop Microphone" : "Speak with Microphone"}
        >
          {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
        </button>

        {/* Send Button */}
        <button
          type="button"
          onClick={() => sendMessage()}
          disabled={!input.trim() || loading}
          className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center text-white hover:opacity-90 transition-all shadow-lg shadow-purple-500/25 disabled:opacity-40 disabled:cursor-not-allowed shrink-0 cursor-pointer"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
