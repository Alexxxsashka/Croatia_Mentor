import React from "react";

interface FlagProps {
  countryCode: string; // e.g. "hr", "gb", "ru", "ua", "en"
  className?: string;
  alt?: string;
}

export function Flag({
  countryCode,
  className = "w-5 h-3.5 inline-block object-cover rounded-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.15)] align-baseline",
  alt = "",
}: FlagProps) {
  // Map locale/language codes to country codes
  let code = countryCode.toLowerCase();
  if (code === "en") code = "gb";
  if (code === "uk") code = "ua"; // Ukrainian locale is 'ua' in our app, but mapping just in case

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://flagcdn.com/${code}.svg`}
      alt={alt || countryCode.toUpperCase()}
      className={className}
      loading="lazy"
    />
  );
}
