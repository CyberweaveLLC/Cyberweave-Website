
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Header from "../components/Header";
import Footer from "../components/Footer";

const topics = [
  "Desktop/Laptop",
  "Mobile Device (tablet/phone)",
  "Software Development",
  "Website Services",
  "Other Topic",
  "Scam/Fraud"
];

export default function Contact() {
  const [preferredContact, setPreferredContact] = useState("Call");
  const [topic, setTopic] = useState("");
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (
      preferredContact === "Email" &&
      !String(formData.get("email") || "").trim()
    ) {
      setStatus("Please provide your email address for email contact.");
      return;
    }

    setSending(true);

    const templateParams = {
      from_name: formData.get("name"),
      address: formData.get("address") || "Not provided",
      phone: formData.get("phone"),
      email: formData.get("email") || "Not provided",
      preferred_contact: preferredContact,
      topic: topic === "Other Topic"
        ? `Other: ${formData.get("other_topic") || "Not specified"}`
        : topic,
      request_description: formData.get("request_description"),
      submitted_at: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        "service_cvefh3t",
        "template_vhimexm",
        templateParams,
        "Z9u7AJmpNyUnNcm6q"
      );

      setStatus("Your message has been sent successfully. Thank you for contacting Cyberweave!");
      form.reset();
      setTopic("");
      setPreferredContact("Call");
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus(
        "We couldn't send your message right now. Please try again or contact us by another method."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <Header />

      <main className="contact-page">
        <section className="contact-hero">
          <p className="contact-eyebrow">CONTACT US</p>
          <h1>
            Let's Talk <span>Technology.</span>
          </h1>
          <p>
            Tell us a little about yourself and what you need help with.
            We'll review your request and get in touch!
          </p>
        </section>

        <section className="contact-form-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-heading">
              <h2>Contact Request</h2>
              <p>Fields marked with * are required.</p>
            </div>

            <div className="contact-fields-grid">
              <div className="contact-field">
                <label htmlFor="contact-name">Full Name *</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-address">Address</label>
                <input
                  id="contact-address"
                  name="address"
                  type="text"
                  autoComplete="street-address"
                  placeholder="Street address, city, state"
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-phone">Phone Number *</label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Your phone number"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <fieldset className="contact-fieldset">
              <legend>Preferred Contact Method *</legend>
              <div className="contact-options">
                {["Call", "Text", "Email"].map((method) => (
                  <label className="contact-option" key={method}>
                    <input
                      type="radio"
                      name="preferred_contact"
                      value={method}
                      checked={preferredContact === method}
                      onChange={() => setPreferredContact(method)}
                    />
                    <span>{method}</span>
                  </label>
                ))}
              </div>
              {preferredContact === "Email" && (
                <p className="contact-field-hint">
                  Please provide an email address above.
                </p>
              )}
            </fieldset>

            <fieldset className="contact-fieldset">
              <legend>What is your request about? *</legend>
              <div className="contact-topic-grid">
                {topics.map((item) => (
                  <label className="contact-topic-option" key={item}>
                    <input
                      type="radio"
                      name="topic_choice"
                      value={item}
                      checked={topic === item}
                      onChange={() => setTopic(item)}
                      required
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>

              {topic === "Other Topic" && (
                <div className="contact-field contact-other-topic">
                  <label htmlFor="other-topic">
                    Please describe your topic *
                  </label>
                  <input
                    id="other-topic"
                    name="other_topic"
                    type="text"
                    placeholder="What do you need help with?"
                    required
                  />
                </div>
              )}
            </fieldset>

            <div className="contact-field">
              <label htmlFor="request-description">
                Request Description *
              </label>
              <textarea
                id="request-description"
                name="request_description"
                rows="7"
                placeholder="Describe the issue you're experiencing or the project you have in mind..."
                required
              />
            </div>

            <p className="contact-privacy-note">
              Please don't include passwords, payment information, or other
              sensitive account details in this form.
            </p>

            {status && (
              <p className="contact-status" role="status">
                {status}
              </p>
            )}

            <button
              type="submit"
              className="primary-button contact-submit"
              disabled={sending}
            >
              {sending ? "Sending Request..." : "Send Contact Request"}
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}
