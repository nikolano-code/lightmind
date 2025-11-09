"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [msg, setMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setOk(null);
    setMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xyzlgnyq", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setOk(true);
        setMsg("Köszönöm! Üzeneted sikeresen elküldve.");
        form.reset();
      } else {
        const j = await res.json().catch(() => null);
        throw new Error(j?.error || "Hiba történt az elküldés közben.");
      }
    } catch (err: any) {
      setOk(false);
      setMsg(err?.message || "Ismeretlen hiba.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-[#1E162A]/50 p-6 rounded-lg shadow-lg"
    >
      <input
        type="text"
        name="name"
        placeholder="Név"
        required
        className="p-3 rounded-md bg-[#2C213B] border border-[#D0B36A]/30 text-white focus:outline-none focus:border-[#D0B36A]"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="p-3 rounded-md bg-[#2C213B] border border-[#D0B36A]/30 text-white focus:outline-none focus:border-[#D0B36A]"
      />
      <textarea
        name="message"
        placeholder="Üzenet"
        required
        className="p-3 rounded-md bg-[#2C213B] border border-[#D0B36A]/30 text-white h-32 focus:outline-none focus:border-[#D0B36A]"
      />
      <button
        type="submit"
        disabled={submitting}
        className="mt-2 bg-[#D0B36A] text-[#291C29] font-semibold py-3 rounded-md hover:bg-[#EBCF7E] transition disabled:opacity-60"
      >
        {submitting ? "Küldés…" : "Üzenet küldése"}
      </button>

      {ok === true && (
        <p className="text-sm text-emerald-300 mt-2">{msg}</p>
      )}
      {ok === false && (
        <p className="text-sm text-rose-300 mt-2">{msg}</p>
      )}
    </form>
  );
}
