'use client';

import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mkjgjvra');

  if (state.succeeded) {
    return (
      <div className="rounded-2xl border border-ink/10 bg-cream p-8 text-center">
        <h3 className="font-display text-2xl text-accent">Message sent.</h3>
        <p className="mt-2 text-ink">
          That has landed in my inbox. I will get back to you within a day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-ink/10 bg-cream p-6 sm:p-8"
    >
      {/* Formspree spam honeypot: bots fill this, humans never see it */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      {/* Sets the subject line of the email you receive */}
      <input type="hidden" name="_subject" value="New enquiry from the Kept site" />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          required
          className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-2 text-ink outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-2 text-ink outline-none focus:ring-2 focus:ring-accent"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-1 text-sm text-accent"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-ink">
          Company <span className="text-warm-grey">(optional)</span>
        </label>
        <input
          id="company"
          type="text"
          name="company"
          className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-2 text-ink outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          How can I help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-lg border border-ink/15 bg-white px-3 py-2 text-ink outline-none focus:ring-2 focus:ring-accent"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-1 text-sm text-accent"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full rounded-lg bg-accent px-5 py-3 font-medium text-white transition hover:opacity-90 disabled:opacity-60"
      >
        {state.submitting ? 'Sending…' : 'Send message'}
      </button>

      <ValidationError errors={state.errors} className="text-sm text-accent" />
    </form>
  );
}
