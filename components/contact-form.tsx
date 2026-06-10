"use client";

import { FormEvent, useEffect, useState } from "react";
import { ObfuscatedEmailText, ProtectedEmail } from "@/components/protected-email";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [topic, setTopic] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setTopic(params.get("tema") ?? "");
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("sent");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label>
        Имя
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        Email или телефон
        <input name="contact" type="text" autoComplete="email" required />
      </label>
      <label>
        Интересующая экскурсия / тема
        <input name="topic" type="text" value={topic} onChange={(event) => setTopic(event.target.value)} />
      </label>
      <label>
        Сообщение
        <textarea name="message" rows={5} required />
      </label>
      <button className="button button-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Отправляем..." : "Отправить запрос"}
      </button>
      {status === "sent" && (
        <p className="form-note" role="status">
          Спасибо. Запрос принят.
        </p>
      )}
      {status === "error" && (
        <p className="form-note" role="alert">
          Сейчас форму не удалось отправить. Можно написать напрямую:{" "}
          <ObfuscatedEmailText /> или нажать <ProtectedEmail className="text-button" />.
        </p>
      )}
    </form>
  );
}
