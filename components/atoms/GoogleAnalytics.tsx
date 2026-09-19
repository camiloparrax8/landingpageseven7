"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type GoogleAnalyticsProps = {
  measurementId: string;
};

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Evento explícito: los `config` repetidos para el mismo ID son
    // deduplicados por gtag.js y no generarían page_view.
    window.gtag?.("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      send_to: measurementId,
    });
  }, [measurementId, pathname]);

  return null;
}
