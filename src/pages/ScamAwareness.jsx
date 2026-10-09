
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ScamAwareness() {
  return (
    <main className="scam-awareness">
      <Header />
      <section className="scam-hero">
        <p className="eyebrow">CYBERWEAVE • COMMUNITY SAFETY</p>

        <h1>
          Recognize the signs.
          <br />
          Protect yourself.
        </h1>

        <p className="scam-intro">
          Scams can happen to anyone. If something feels wrong, you do not
          have to figure it out alone. Learn how to recognize warning signs,
          protect your information, and find your next step.
        </p>

        <div className="scam-actions">
          <a href="mailto:contact@cyberweave.tech">
            Contact Cyberweave
          </a>

          <a href="#if-targeted">
            What to do if you've been targeted
          </a>
        </div>
      </section>

      <section className="scam-section">
        <p className="eyebrow">KNOW THE WARNING SIGNS</p>
        <h2>Pause before you respond.</h2>

        <div className="scam-grid">
          <article className="scam-card">
            <h3>Urgency and pressure</h3>
            <p>
              Someone insists you must act immediately or risk losing money,
              access to an account, or facing legal trouble.
            </p>
          </article>

          <article className="scam-card">
            <h3>Unusual payment requests</h3>
            <p>
              Someone demands gift cards, cryptocurrency, wire transfers,
              or another hard-to-reverse payment.
            </p>
          </article>

          <article className="scam-card">
            <h3>Requests for access</h3>
            <p>
              A stranger asks for passwords, verification codes, or remote
              access to your computer or phone.
            </p>
          </article>
        </div>
      </section>

      <section className="scam-section" id="if-targeted">
        <p className="eyebrow">YOU STILL HAVE OPTIONS</p>
        <h2>Think you've been scammed?</h2>

        <ol className="scam-steps">
          <li>Stop communicating with the suspected scammer.</li>
          <li>
            If money or payment information is involved, contact your bank
            or payment provider using an official number or app.
          </li>
          <li>
            Change compromised passwords from a trusted device and enable
            multifactor authentication.
          </li>
          <li>
            Save relevant messages, receipts, phone numbers, and other
            evidence.
          </li>
          <li>
            Report the incident to the appropriate authorities.
          </li>
        </ol>

        <p>
          If you are unsure whether something is a scam, you can contact
          Cyberweave for guidance on possible next steps.
        </p>

        <a href="mailto:contact@cyberweave.tech">
          contact@cyberweave.tech
        </a>

        
        <div className="scam-report-action">
            <a
                href="https://reportfraud.ftc.gov/"
                className="scam-report-button"
                target="_blank"
                rel="noopener noreferrer"
            >
                Report a Scam →
            </a>
        </div>

      </section>

      <Footer />
    </main>
  );
}
