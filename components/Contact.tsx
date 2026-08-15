"use client";

import React, { useState } from "react";

type ContactData = {
  tytulSekcjiKontakt?: string | null;
  opis?: string | null;
  rodzajUslugiKontakt?: {
    rodzajUslugi?: string | null;
  }[];
};

type ContactProps = {
  data?: ContactData;
};

const Contact = ({ data }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    service: "",
  });

  const [formSent, setFormSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const services = data?.rodzajUslugiKontakt ?? [];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    // Pobieramy dane bezpośrednio z formularza (wymaga atrybutów "name" w inputach)
    const data = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xbgrkqad", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormSent(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
          service: "",
        });
        setTimeout(() => {
          setFormSent(false);
        }, 5000);
      } else {
        alert("Wystąpił błąd podczas wysyłania. Spróbuj ponownie.");
      }
    } catch (error) {
      alert("Wystąpił błąd sieci.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="kontakt"
      className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#050505] border-t border-neutral-200 dark:border-white/[0.04] transition-colors duration-300"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* =========================
              LEWA STRONA
          ========================== */}
          <div className="flex flex-col">
            <div className="mb-10 sm:mb-14">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-[#C7A568]" />

                <span className="text-[0.65rem] sm:text-xs font-bold text-[#C7A568] tracking-[0.25em] uppercase">
                  Kontakt
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter mb-4 leading-[1.1] text-neutral-900 dark:text-white transition-colors">
                {data?.tytulSekcjiKontakt || "Porozmawiajmy o Twoim projekcie"}
              </h2>

              <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed font-light max-w-md transition-colors">
                {data?.opis ||
                  "Wypełnij formularz lub zadzwoń bezpośrednio. Odpowiadamy szybko i konkretnie."}
              </p>
            </div>

            {/* DANE KONTAKTOWE */}
            <div className="space-y-0 border-t border-neutral-200 dark:border-white/[0.06]">
              {[
                {
                  icon: (
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  ),
                  label: "Telefon",
                  value: "+48 792 022 994",
                  href: "tel:792022994",
                },
                {
                  icon: (
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  ),
                  label: "E-mail",
                  value: "jan.komplexbud@gmail.com",
                  href: "mailto:jan.komplexbud@gmail.com",
                },
                {
                  icon: (
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  ),
                  label: "Obszar działania",
                  value: "Polska, Czechy, Niemcy",
                  href: undefined,
                },
              ].map((contact, index) => (
                <div
                  key={contact.label}
                  className={`group flex items-center gap-4 py-5 hover:bg-neutral-50 dark:hover:bg-white/[0.02] px-3 -mx-3 transition-colors duration-300 ${
                    index !== 2
                      ? "border-b border-neutral-200 dark:border-white/[0.04]"
                      : ""
                  }`}
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-sm bg-[#C7A568]/10 border border-[#C7A568]/20 flex items-center justify-center shrink-0 text-[#C7A568]">
                    {contact.icon}
                  </div>

                  <div>
                    <div className="text-[0.6rem] text-neutral-400 dark:text-neutral-600 mb-0.5 font-bold tracking-[0.2em] uppercase">
                      {contact.label}
                    </div>

                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-neutral-900 dark:text-white hover:text-[#C7A568] transition-colors font-light text-base sm:text-lg tracking-tight"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <span className="text-neutral-500 dark:text-neutral-400 font-light text-base sm:text-lg tracking-tight transition-colors">
                        {contact.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

    
          <div className="bg-neutral-50 dark:bg-[#0A0A0A] border border-neutral-200 dark:border-white/[0.06] rounded-sm p-6 sm:p-8 lg:p-10 self-start shadow-sm dark:shadow-none transition-colors duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-[#C7A568]" />
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-white transition-colors">
                Szybkie zapytanie
              </h3>
            </div>

            {formSent && (
              <div className="mb-6 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-sm px-4 py-3.5 text-sm font-medium">
                ✓ Dziękujemy! Skontaktujemy się wkrótce.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xbgrkqad"
              method="POST"
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[0.6rem] text-neutral-500 mb-1.5 font-bold tracking-[0.2em] uppercase">
                    Imię i nazwisko <span className="text-[#C7A568]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-white dark:bg-white/[0.03] border border-neutral-300 dark:border-white/[0.06] rounded-sm px-4 py-3.5 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-700 focus:outline-none focus:border-[#C7A568]/50 transition-all duration-300 font-light text-sm"
                    placeholder="Jan Kowalski"
                  />
                </div>

                <div>
                  <label className="block text-[0.6rem] text-neutral-500 mb-1.5 font-bold tracking-[0.2em] uppercase">
                    Telefon <span className="text-[#C7A568]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-white dark:bg-white/[0.03] border border-neutral-300 dark:border-white/[0.06] rounded-sm px-4 py-3.5 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-700 focus:outline-none focus:border-[#C7A568]/50 transition-all duration-300 font-light text-sm"
                    placeholder="+48 ..."
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-[0.6rem] text-neutral-500 mb-1.5 font-bold tracking-[0.2em] uppercase">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-white dark:bg-white/[0.03] border border-neutral-300 dark:border-white/[0.06] rounded-sm px-4 py-3.5 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-700 focus:outline-none focus:border-[#C7A568]/50 transition-all duration-300 font-light text-sm"
                  placeholder="jan@email.com"
                />
              </div>

              {/* RODZAJ USŁUGI */}
              <div>
                <label className="block text-[0.6rem] text-neutral-500 mb-1.5 font-bold tracking-[0.2em] uppercase">
                  Rodzaj usługi
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full bg-white dark:bg-white/[0.03] border border-neutral-300 dark:border-white/[0.06] rounded-sm px-4 py-3.5 text-neutral-900 dark:text-neutral-300 focus:outline-none focus:border-[#C7A568]/50 transition-all duration-300 appearance-none cursor-pointer font-light text-sm"
                >
                  <option value="" className="bg-white dark:bg-[#111]">
                    Wybierz usługę...
                  </option>
                  {services.map((service, index) => {
                    if (!service?.rodzajUslugi) return null;
                    return (
                      <option
                        key={`${service.rodzajUslugi}-${index}`}
                        value={service.rodzajUslugi}
                        className="bg-white dark:bg-[#111] text-neutral-900 dark:text-white"
                      >
                        {service.rodzajUslugi}
                      </option>
                    );
                  })}
                </select>
              </div>

              {/* OPIS */}
              <div>
                <label className="block text-[0.6rem] text-neutral-500 mb-1.5 font-bold tracking-[0.2em] uppercase">
                  Opis zlecenia
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-white dark:bg-white/[0.03] border border-neutral-300 dark:border-white/[0.06] rounded-sm px-4 py-3.5 text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-700 focus:outline-none focus:border-[#C7A568]/50 transition-all duration-300 resize-none font-light text-sm"
                  placeholder="Czego potrzebujesz, budżet, terminy..."
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-[#C7A568] hover:bg-[#b8964f] text-white font-bold py-4 rounded-sm transition-all duration-300 shadow-2xl shadow-[#C7A568]/10 hover:shadow-[#C7A568]/20 tracking-wide text-sm flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSending ? "Wysyłanie..." : "Wyślij zapytanie"}
                {!isSending && (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                )}
              </button>

              <p className="text-[0.65rem] text-neutral-400 dark:text-neutral-700 text-center leading-relaxed pt-1 transition-colors">
                Wysyłając formularz, zgadzasz się na przetwarzanie danych w celu
                odpowiedzi na zapytanie.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
