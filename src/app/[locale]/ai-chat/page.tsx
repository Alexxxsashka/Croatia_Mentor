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
  RotateCcw,
  FileText,
} from "lucide-react";
import { speakText } from "@/lib/speech";
import { toast } from "sonner";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const DIACRITICS = ["č", "ć", "đ", "š", "ž", "Č", "Ć", "Đ", "Š", "Ž"];

type ChatMode = "conversation" | "essay" | "exam" | "roleplay";

const getInitialMessages = (locale: string): Record<ChatMode, Message[]> => ({
  conversation: [
    {
      role: "assistant",
      content:
        locale === "ua"
          ? "Bok! 🇭🇷 Я твій особистий ІІ-репетитор з хорватської мови. Запитай мене про граматику, нові слова або просто поспілкуйся зі мною хорватською!"
          : locale === "ru"
          ? "Bok! 🇭🇷 Я твой личный ИИ-репетитор по хорватскому языку. Спроси меня о грамматике, новых словах или просто попрактикуйся в общении!"
          : "Bok! 🇭🇷 I am your Croatian language AI tutor. Ask me about grammar, vocabulary, or practice chatting with me in Croatian!",
    },
  ],
  essay: [
    {
      role: "assistant",
      content:
        locale === "ua"
          ? "📝 Режим перевірки творів та текстів. Надішли мені свій текст хорватською (твір, речення або фрагмент), і я проведу повний розбір: виправлю помилки, перевірю гачеки (č/ć/š/ž/đ) та дам оцінку!"
          : locale === "ru"
          ? "📝 Режим проверки сочинений и текстов. Отправь мне свой текст на хорватском (сочинение, предложение или фрагмент), и я проведу полный разбор: исправлю ошибки, проверю гачеки (č/ć/š/ž/đ) и дам оценку!"
          : "📝 Essay & Text Correction mode. Send me your Croatian text or paragraph, and I will analyze errors, check diacritics (č/ć/š/ž/đ), and provide a score!",
    },
  ],
  exam: [
    {
      role: "assistant",
      content:
        locale === "ua"
          ? "🏆 Режим Екзаменатора. Я буду перевіряти твоє знання хорватської мови. Я ставитиму по одному питанню за раз і виставлятиму оцінки. Готовий почати іспит? Відповідай: Так або Da!"
          : locale === "ru"
          ? "🏆 Режим Экзаменатора. Я буду тестировать твои знания хорватского языка. Я буду задавать по одному вопросу за раз и выставлять баллы. Готов начать экзамен? Ответь: Да или Da!"
          : "🏆 Examiner Mode. I will test your Croatian proficiency step-by-step. I'll ask one question at a time and grade your answers. Ready? Type 'Yes' or 'Da'!",
    },
  ],
  roleplay: [
    {
      role: "assistant",
      content:
        locale === "ua"
          ? "🎭 Режим Рольової гри. Обирай сценарій нижче (Пекарня, Ресторан, Оренда житла...) та давай попрактикуємо реальний діалог хорватською!"
          : locale === "ru"
          ? "🎭 Режим Ролевой игры. Выбирай сценарий ниже (Пекарня, Ресторан, Аренда жилья...) и давай попрактикуем реальный диалог на хорватском!"
          : "🎭 Roleplay Mode. Pick a scenario below (Bakery, Restaurant, Renting...) and let's practice real life Croatian conversations!",
    },
  ],
});

export default function AIChatPage() {
  const t = useTranslations("aiChat");
  const locale = useLocale();

  const [chatMode, setChatMode] = useState<ChatMode>("conversation");
  const [modeMessages, setModeMessages] = useState<Record<ChatMode, Message[]>>(() => getInitialMessages(locale));

  const messages = modeMessages[chatMode];

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
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

  const clearCurrentChat = () => {
    const initial = getInitialMessages(locale);
    setModeMessages((prev) => ({
      ...prev,
      [chatMode]: initial[chatMode],
    }));
    toast.success(t("clearChatSuccess") || "Chat cleared!");
  };

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

  const startListening = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SpeechRecognition =
      typeof window !== "undefined" &&
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);

    if (SpeechRecognition) {
      try {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "hr-HR";

        recognition.onstart = () => {
          setIsListening(true);
          toast.info(
            locale === "ua"
              ? "🎙️ Мікрофон активний! Говоріть хорватською або рідною мовою..."
              : locale === "ru"
              ? "🎙️ Микрофон активен! Говорите на хорватском или родном языке..."
              : "🎙️ Microphone active! Speak in Croatian or native language..."
          );
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        recognition.onresult = (event: any) => {
          let transcript = "";
          for (let i = 0; i < event.results.length; i++) {
            transcript += event.results[i][0].transcript;
          }
          setInput(transcript);
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        recognition.onerror = (event: any) => {
          console.error("Speech recognition error:", event.error);
          setIsListening(false);
          if (event.error === "not-allowed" || event.error === "service-not-allowed") {
            toast.error(
              locale === "ua"
                ? "⚠️ Доступ до мікрофону заблоковано! Натисніть значок замочка 🔒 біля адреси сайту та дозвольте мікрофон."
                : locale === "ru"
                ? "⚠️ Доступ к микрофону заблокирован! Нажмите значок замочка 🔒 возле адреса сайта и разрешите микрофон."
                : "⚠️ Microphone blocked! Click the lock icon 🔒 near site URL to allow microphone."
            );
          } else if (event.error === "no-speech") {
            toast.warning(
              locale === "ua"
                ? "Мову не виявлено. Говоріть голосніше біля мікрофону."
                : locale === "ru"
                ? "Речь не обнаружена. Говорите громче возле микрофона."
                : "No speech detected. Please speak louder."
            );
          }
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = recognition;
        recognition.start();
        return;
      } catch (err) {
        console.error("SpeechRecognition instantiation failed:", err);
      }
    }

    // Fallback if SpeechRecognition API is unsupported (e.g. Firefox)
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setIsListening(true);
        toast.info(
          locale === "ua"
            ? "🎙️ Мікрофон увімкнено! Запис голосу розпочато."
            : locale === "ru"
            ? "🎙️ Микрофон включен! Запись голоса запущена."
            : "🎙️ Microphone enabled! Recording started."
        );
        
        const mediaRecorder = new MediaRecorder(stream);
        recognitionRef.current = {
          stop: () => {
            mediaRecorder.stop();
            stream.getTracks().forEach((track) => track.stop());
            setIsListening(false);
          },
        };

        mediaRecorder.start();
      } catch (err) {
        console.error("getUserMedia error:", err);
        toast.error(
          locale === "ua"
            ? "⚠️ Доступ до мікрофону заблоковано в браузері."
            : locale === "ru"
            ? "⚠️ Доступ к микрофону заблокирован в браузере."
            : "⚠️ Microphone access blocked in browser."
        );
      }
    } else {
      toast.error(
        locale === "ua"
          ? "Браузер не підтримує запис голосу"
          : locale === "ru"
          ? "Браузер не поддерживает запись голоса"
          : "Browser does not support voice recording"
      );
    }
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
    const currentHistory = modeMessages[chatMode];
    const newHistory = [...currentHistory, userMessage];

    setModeMessages((prev) => ({
      ...prev,
      [chatMode]: newHistory,
    }));
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
          history: newHistory.slice(1).map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();
      if (typeof data.remaining === "number") {
        setRemainingLimit((prev) => (prev ? { ...prev, remaining: data.remaining } : null));
      }

      const aiReply =
        data.response ||
        data.error ||
        (locale === "ua"
          ? "Вибачте, виникла тимчасова помилка зв'язку з ИИ."
          : locale === "ru"
          ? "Извините, произошла временная ошибка связи с ИИ."
          : "Sorry, temporary AI connection error.");

      setModeMessages((prev) => ({
        ...prev,
        [chatMode]: [...newHistory, { role: "assistant", content: aiReply }],
      }));

      if (autoPlayVoice) {
        speakText(aiReply);
      }
    } catch {
      setModeMessages((prev) => ({
        ...prev,
        [chatMode]: [
          ...newHistory,
          {
            role: "assistant",
            content:
              locale === "ua"
                ? "Вибачте, виникла помилка підключення. Спробуйте ще раз."
                : locale === "ru"
                ? "Извините, произошла ошибка подключения. Попробуйте еще раз."
                : "Sorry, connection error occurred. Please try again.",
          },
        ],
      }));
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

        {/* Action Controls & Daily Limit Counter Badge */}
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
            onClick={clearCurrentChat}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all cursor-pointer"
            title={t("clearChat")}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            {t("clearChat")}
          </button>

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
          {t("modes.tutor")}
        </button>

        <button
          onClick={() => setChatMode("essay")}
          className={`p-2.5 rounded-xl text-xs font-bold border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            chatMode === "essay"
              ? "bg-purple-600 text-white border-purple-500 shadow-md"
              : "glass border-white/10 text-muted-foreground hover:text-foreground"
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          {t("modes.essay")}
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
          {t("modes.exam")}
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
          {t("modes.roleplay")}
        </button>
      </div>

      {/* Roleplay Scenario Selector bar */}
      {chatMode === "roleplay" && (
        <div className="flex items-center gap-2 mb-3 overflow-x-auto pb-1">
          <span className="text-xs font-bold text-purple-400 shrink-0">
            {t("scenarioLabel")}
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
