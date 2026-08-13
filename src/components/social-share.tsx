"use client";

import { useState } from "react";
import { Share2, Check, Copy, Send, Globe } from "lucide-react";
import { toast } from "sonner";

export function SocialShare({
  title = "Learn Croatian Online for Free with Croatia Mentor",
  url = "https://croatia-mentor.vercel.app",
}: {
  title?: string;
  url?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    toast.success("Link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "Telegram",
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      color: "bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 border-sky-500/20",
    },
    {
      name: "Twitter / X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-blue-500/20",
    },
    {
      name: "WhatsApp",
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      color: "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border-emerald-500/20",
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 border-indigo-500/20",
    },
  ];

  return (
    <div className="glass p-6 rounded-2xl border border-slate-800 space-y-4">
      <div className="flex items-center gap-2 font-semibold text-lg text-slate-200">
        <Share2 className="w-5 h-5 text-blue-400" />
        <span>Share Croatia Mentor with Friends & Communities</span>
      </div>
      <p className="text-sm text-slate-400">
        Help others discover free Croatian language lessons! Share the link on social media or forums.
      </p>
      <div className="flex flex-wrap items-center gap-3 pt-2">
        {shareLinks.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all ${item.color}`}
          >
            <Globe className="w-4 h-4" />
            {item.name}
          </a>
        ))}

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-slate-700 bg-slate-800/50 text-slate-200 hover:bg-slate-800 transition-all ml-auto"
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  );
}
