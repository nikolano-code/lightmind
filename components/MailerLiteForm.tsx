"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    ml?: any;
  }
}

export default function MailerLiteForm() {
  useEffect(() => {
    // Ha a script már be lett töltve, ne töltsük be újra
    if (document.getElementById("mailerlite-universal")) return;

    const script = document.createElement("script");
    script.id = "mailerlite-universal";
    script.src = "https://assets.mailerlite.com/js/universal.js";
    script.async = true;
    document.body.appendChild(script);

    window.ml = window.ml || function () {
      (window.ml.q = window.ml.q || []).push(arguments);
    };
    window.ml("account", "1924871"); // <- a te MailerLite account ID-d
  }, []);

  return (
    <div className="mt-4">
      {/* Ezt adta a MailerLite: */}
      <div className="ml-embedded" data-form="wWqAni"></div>
    </div>
  );
}