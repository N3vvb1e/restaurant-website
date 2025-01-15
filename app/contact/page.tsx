"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // send the form data to backend
    console.log(formData);
    alert("Rezervare trimisă cu succes!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contactați-ne</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Faceți o rezervare</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">
                Nume și prenume
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">
                Adresa de e-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="date" className="block mb-1">
                Data
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="time" className="block mb-1">
                Ora
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="guests" className="block mb-1">
                Număr de invitați
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">
                Mesaj (opțional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-amber-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Trimite rezervarea
            </button>
          </form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Locația noastră</h2>
          <p className="mb-4">DN13, Romania 505500 Rupea</p>
          <p className="mb-4">
            <strong>Telefon:</strong>
            <a
              href="tel:+40712345678"
              className="text-blue-600 hover:underline"
            >
              +40 751 396 256
            </a>
          </p>
          <p className="mb-4">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:contact@example.com"
              className="text-blue-600 hover:underline"
            >
              fast.krontem@yahoo.com
            </a>
          </p>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2770.2272121558235!2d25.257700676742292!3d46.02661489573739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474b431b9fe5c74d%3A0xfb5d901a7dfa2469!2zQ2FzYSBSb23Dom5lYXNjxIM!5e0!3m2!1sro!2sro!4v1736975975079!5m2!1sro!2sro"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
