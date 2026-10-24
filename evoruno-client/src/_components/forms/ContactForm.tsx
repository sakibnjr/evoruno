'use client';

import { useActionState } from 'react';
import { submitContactForm, ActionResponse } from '@/lib/actions/contact';
import { Button } from '@/_ui/button';
import { ContactSuccessState } from '@/_components/forms/ContactSuccessState';
import { FiAlertCircle, FiSend } from 'react-icons/fi';

const initialState: ActionResponse = {
  success: false,
  message: '',
};

interface ContactFormProps {
  variant?: 'dark' | 'light';
}

export function ContactForm({ variant = 'dark' }: ContactFormProps) {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const isLight = variant === 'light';

  const labelClass = isLight
    ? 'block text-xs font-semibold uppercase tracking-wider text-slate-700'
    : 'block text-xs font-semibold uppercase tracking-wider text-muted-foreground';

  const inputClass = isLight
    ? 'w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary transition-all'
    : 'w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all';

  const selectClass = isLight
    ? 'w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary transition-all'
    : 'w-full px-4 py-3.5 rounded-xl bg-card border border-white/10 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all';

  if (state.success) {
    return <ContactSuccessState message={state.message} isLight={isLight} />;
  }

  return (
    <form action={formAction} className="space-y-6">
      {/* Honeypot anti-spam field */}
      <input type="text" name="honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      {/* Error Banner */}
      {state.message && !state.success && (
        <div className="p-4 rounded-xl border border-red-500/40 bg-red-500/10 text-red-600 text-sm flex items-center gap-2">
          <FiAlertCircle className="h-4 w-4 shrink-0" />
          <span>{state.message}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-primary">*</span>
          </label>
          <input id="name" name="name" type="text" required placeholder="e.g. Alex Rahman" className={inputClass} />
          {state.fieldErrors?.name && <p className="text-xs text-red-500">{state.fieldErrors.name[0]}</p>}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className={labelClass}>
            Email Address <span className="text-primary">*</span>
          </label>
          <input id="email" name="email" type="email" required placeholder="alex@company.com" className={inputClass} />
          {state.fieldErrors?.email && <p className="text-xs text-red-500">{state.fieldErrors.email[0]}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Company */}
        <div className="space-y-2">
          <label htmlFor="company" className={labelClass}>Company / Organization (Optional)</label>
          <input id="company" name="company" type="text" placeholder="e.g. Apex Health" className={inputClass} />
        </div>

        {/* Service Selection */}
        <div className="space-y-2">
          <label htmlFor="service" className={labelClass}>
            Primary Service Needed <span className="text-primary">*</span>
          </label>
          <select id="service" name="service" defaultValue="website" className={selectClass}>
            <option value="website">Website & Web App Development</option>
            <option value="mobile-app">Mobile Application (iOS / Android)</option>
            <option value="seo">Technical SEO & Core Web Vitals</option>
            <option value="other">Full-Stack Digital Transformation / Other</option>
          </select>
          {state.fieldErrors?.service && <p className="text-xs text-red-500">{state.fieldErrors.service[0]}</p>}
        </div>
      </div>

      {/* Budget Tier */}
      <div className="space-y-2">
        <label htmlFor="budget" className={labelClass}>Estimated Project Budget (USD or equivalent BDT)</label>
        <select id="budget" name="budget" defaultValue="standard" className={selectClass}>
          <option value="$1,000 - $3,000">$1,000 — $3,000 (MVP / Startup Website)</option>
          <option value="$3,000 - $8,000">$3,000 — $8,000 (Complete Platform / Custom Web App)</option>
          <option value="$8,000+">$8,000+ (Enterprise Portal / Mobile Ecosystem)</option>
          <option value="Not Confirmed Yet">Flexible / Need Scoping Discussion</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className={labelClass}>
          Tell Us About Your Goals & Project <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="What are you building? What problems are you trying to solve? Do you have an existing site or timeline?"
          className={`${inputClass} leading-relaxed`}
        />
        {state.fieldErrors?.message && <p className="text-xs text-red-500">{state.fieldErrors.message[0]}</p>}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          disabled={isPending}
          variant="default"
          size="lg"
          className="w-full rounded-full shadow-lg hover:shadow-xl group cursor-pointer"
        >
          {isPending ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
              Sending Inquiry...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Submit Project Inquiry
              <FiSend className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          )}
        </Button>
      </div>
    </form>
  );
}
