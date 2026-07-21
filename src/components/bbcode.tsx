"use client";

import React from "react";

interface BBCodeProps {
  content: string;
  className?: string;
}

/**
 * Escapes HTML characters to prevent XSS issues when dangerously set or parsing text nodes.
 */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Parses BBCode into safe HTML string.
 */
export function parseBBCodeToHtml(text: string): string {
  if (!text) return "";

  // Escape HTML tags first
  let html = escapeHtml(text);

  // [b]bold[/b]
  html = html.replace(/\[b\]([\s\S]*?)\[\/b\]/gi, "<strong>$1</strong>");

  // [i]italic[/i]
  html = html.replace(/\[i\]([\s\S]*?)\[\/i\]/gi, "<em>$1</em>");

  // [u]underline[/u]
  html = html.replace(/\[u\]([\s\S]*?)\[\/u\]/gi, '<u class="underline">$1</u>');

  // [s]strikethrough[/s]
  html = html.replace(/\[s\]([\s\S]*?)\[\/s\]/gi, '<s class="line-through">$1</s>');

  // [color=red]color[/color] or [color=#ff0000]color[/color]
  html = html.replace(
    /\[color=([#a-zA-Z0-9]+)\]([\s\S]*?)\[\/color\]/gi,
    '<span style="color: $1">$2</span>'
  );

  // [url=http://example.com]text[/url]
  html = html.replace(
    /\[url=([^\]\s]+)\]([\s\S]*?)\[\/url\]/gi,
    (match, url, linkText) => {
      const safeUrl = url.replace(/"/g, "&quot;");
      return `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline inline-flex items-baseline gap-0.5">${linkText}</a>`;
    }
  );

  // [url]http://example.com[/url]
  html = html.replace(
    /\[url\]([\s\S]*?)\[\/url\]/gi,
    (match, url) => {
      const safeUrl = url.trim().replace(/"/g, "&quot;");
      return `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline inline-flex items-baseline gap-0.5">${url}</a>`;
    }
  );

  // [img]http://example.com/image.png[/img]
  html = html.replace(
    /\[img\]([\s\S]*?)\[\/img\]/gi,
    (match, url) => {
      const safeUrl = url.trim().replace(/"/g, "&quot;");
      return `<img src="${safeUrl}" alt="User image" class="max-w-full rounded-xl my-2 border border-white/10 shadow-md inline-block max-h-96 object-contain" />`;
    }
  );

  // [quote]text[/quote]
  html = html.replace(
    /\[quote\]([\s\S]*?)\[\/quote\]/gi,
    '<blockquote class="border-l-4 border-purple-500/50 bg-white/5 pl-4 py-2 my-2 rounded-r-xl italic text-muted-foreground">$1</blockquote>'
  );

  // [code]code[/code]
  html = html.replace(
    /\[code\]([\s\S]*?)\[\/code\]/gi,
    '<pre class="bg-black/40 border border-white/10 p-3 rounded-xl font-mono text-xs overflow-x-auto my-2">$1</pre>'
  );

  // [list][*]Item 1[*]Item 2[/list]
  html = html.replace(/\[list\]([\s\S]*?)\[\/list\]/gi, (match, inner) => {
    const items = inner
      .split(/\[\*\]/)
      .filter((item: string) => item.trim().length > 0);
    const listItems = items
      .map((item: string) => `<li class="ml-4 list-disc">${item.trim()}</li>`)
      .join("");
    return `<ul class="my-2 space-y-1">${listItems}</ul>`;
  });

  // Preserve line breaks
  html = html.replace(/\n/g, "<br />");

  return html;
}

export function BBCode({ content, className = "" }: BBCodeProps) {
  const parsedHtml = parseBBCodeToHtml(content);

  return (
    <div
      className={`bbcode-content ${className}`}
      dangerouslySetInnerHTML={{ __html: parsedHtml }}
    />
  );
}
