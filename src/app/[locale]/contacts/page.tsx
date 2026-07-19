"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Flag } from "@/components/flag";
import {
  Mail,
  Copy,
  Check,
  Heart,
  CreditCard,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";

const texts = {
  ua: {
    title: "Контакти та Підтримка",
    subtitle: "Зв'яжіться з нами або підтримайте розвиток проекту Croatia Mentor",
    contactInfo: "Контактна інформація",
    email: "Електронна пошта",
    phoneUa: "Номер телефону (Україна)",
    phoneHr: "Номер телефону (Хорватія)",
    donationTitle: "Підтримка та донати",
    donationDesc: "Якщо наш проект допомагає вам вивчати мову і ви бажаєте підтримати розробку та додавання нових матеріалів, ви можете надіслати пожертву за реквізитами нижче. Будемо щиро вдячні!",
    hrRequisites: "Хорватські реквізити (IBAN)",
    uaRequisites: "Банка Monobank (UA)",
    recipient: "Отримувач",
    iban: "IBAN",
    owner: "Власник рахунку",
    copied: "Скопійовано!",
    copy: "Копіювати",
    monobankJarLink: "Посилання на Банку",
    monobankJarCard: "Номер картки Банки",
    qrCode: "QR-код для поповнення",
  },
  ru: {
    title: "Контакты и Поддержка",
    subtitle: "Свяжитесь с нами или поддержите развитие проекта Croatia Mentor",
    contactInfo: "Контактная информация",
    email: "Электронная почта",
    phoneUa: "Номер телефона (Украина)",
    phoneHr: "Номер телефона (Хорватия)",
    donationTitle: "Поддержка и донаты",
    donationDesc: "Если наш проект помогает вам изучать язык и вы хотите поддержать разработку и добавление новых материалов, вы можете отправить пожертвование по реквизитам ниже. Будем искренне благодарны!",
    hrRequisites: "Хорватские реквизиты (IBAN)",
    uaRequisites: "Банка Monobank (UA)",
    recipient: "Получатель",
    iban: "IBAN",
    owner: "Владелец счета",
    copied: "Скопировано!",
    copy: "Копировать",
    monobankJarLink: "Ссылка на Банку",
    monobankJarCard: "Номер карты Банки",
    qrCode: "QR-код для пополнения",
  },
  en: {
    title: "Contacts & Support",
    subtitle: "Get in touch or support the development of Croatia Mentor",
    contactInfo: "Contact Information",
    email: "Email Address",
    phoneUa: "Phone Number (Ukraine)",
    phoneHr: "Phone Number (Croatia)",
    donationTitle: "Support & Donations",
    donationDesc: "If our project helps you learn the language and you would like to support the development and addition of new materials, you can make a donation using the details below. We would be truly grateful!",
    hrRequisites: "Croatian Bank Details (IBAN)",
    uaRequisites: "Monobank Jar (UA)",
    recipient: "Recipient",
    iban: "IBAN",
    owner: "Account Owner",
    copied: "Copied!",
    copy: "Copy",
    monobankJarLink: "Jar Link",
    monobankJarCard: "Jar Card Number",
    qrCode: "QR Code for donation",
  },
};

export default function ContactsPage() {
  const locale = useLocale() as "en" | "ru" | "ua";
  const t = texts[locale] || texts.en;

  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    toast.success(t.copied);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl shadow-blue-500/10">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            <span className="gradient-text">{t.title}</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left Column: Contact Cards */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-blue-400" />
              {t.contactInfo}
            </h2>

            {/* Email Card */}
            <div className="glass rounded-2xl p-5 hover:border-white/20 transition-all flex flex-col justify-between h-40">
              <div>
                <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                  {t.email}
                </span>
                <p className="text-lg font-bold mt-2 break-all">guardsowh@gmail.com</p>
              </div>
              <button
                onClick={() => copyToClipboard("guardsowh@gmail.com", "email")}
                className="w-full mt-4 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
              >
                {copiedKey === "email" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400">{t.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t.copy}</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone UA Card */}
            <div className="glass rounded-2xl p-5 hover:border-white/20 transition-all flex flex-col justify-between h-40">
              <div>
                <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Flag countryCode="ua" className="w-5 h-3.5 object-cover rounded-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.15)]" /> {t.phoneUa}
                </span>
                <p className="text-lg font-bold mt-2">+380 93 041 0268</p>
                <p className="text-xs text-muted-foreground mt-0.5">Telegram / WhatsApp</p>
              </div>
              <button
                onClick={() => copyToClipboard("+380930410268", "phoneUa")}
                className="w-full mt-4 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
              >
                {copiedKey === "phoneUa" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400">{t.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t.copy}</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone HR Card */}
            <div className="glass rounded-2xl p-5 hover:border-white/20 transition-all flex flex-col justify-between h-40">
              <div>
                <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Flag countryCode="hr" className="w-5 h-3.5 object-cover rounded-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.15)]" /> {t.phoneHr}
                </span>
                <p className="text-lg font-bold mt-2">+385 91 790 6136</p>
              </div>
              <button
                onClick={() => copyToClipboard("+385917906136", "phoneHr")}
                className="w-full mt-4 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
              >
                {copiedKey === "phoneHr" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-green-400">{t.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{t.copy}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Donation details */}
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500 animate-pulse" />
              {t.donationTitle}
            </h2>
            <div className="glass rounded-3xl p-6 md:p-8 space-y-6 border border-red-500/10">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.donationDesc}
              </p>

              {/* Croatia Bank details card */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-400">
                  <CreditCard className="w-4 h-4" />
                  <h4>{t.hrRequisites}</h4>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">{t.owner}</div>
                  <div className="text-sm font-bold">Martsin Oleksandr</div>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">IBAN</div>
                  <div className="flex items-center justify-between gap-2 p-2 bg-black/30 rounded-xl">
                    <span className="font-mono text-xs text-white break-all">HR7324840083238685281</span>
                    <button
                      onClick={() => copyToClipboard("HR7324840083238685281", "hrIban")}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors shrink-0"
                    >
                      {copiedKey === "hrIban" ? (
                        <Check className="w-3.5 h-3.5 text-green-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-muted-foreground hover:text-foreground" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Ukraine Monobank Jar details card */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-purple-400">
                  <CreditCard className="w-4 h-4" />
                  <h4>{t.uaRequisites}</h4>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">{t.monobankJarLink}</div>
                  <a
                    href="https://send.monobank.ua/jar/6RfGtPt3Gf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-bold text-blue-400 hover:underline break-all"
                  >
                    https://send.monobank.ua/jar/6RfGtPt3Gf
                  </a>
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">{t.monobankJarCard}</div>
                  <div className="flex items-center justify-between gap-2 p-2 bg-black/30 rounded-xl">
                    <span className="font-mono text-xs text-white break-all">4874 1000 3092 5906</span>
                    <button
                      onClick={() => copyToClipboard("4874100030925906", "monobankCard")}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors shrink-0"
                    >
                      {copiedKey === "monobankCard" ? (
                        <Check className="w-3.5 h-3.5 text-green-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-muted-foreground hover:text-foreground" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/5">
                  <div className="text-xs text-muted-foreground text-center">{t.qrCode}</div>
                  <div className="flex justify-center">
                    <img
                      src="/monobank-jar.png"
                      alt="Monobank Jar QR Code"
                      className="w-40 h-40 rounded-2xl border border-white/10 shadow-lg object-contain bg-white p-1"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 justify-center text-xs text-muted-foreground pt-2">
                <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
                <span>Hvala vam na podršci! / Дякуємо за вашу підтримку!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
