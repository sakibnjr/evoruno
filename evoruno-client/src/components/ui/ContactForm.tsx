'use client';

import { useActionState } from 'react';
import { submitContactForm, ActionResponse } from '@/lib/actions/contact';
import { Button } from '@/components/ui/button';
import { FiCheckCircle, FiAlertCircle, FiSend } from 'react-icons/fi';

const initialState: ActionResponse = {
  success: false,
  message: '',
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <div className="w-full">
      {state.success ? (
        <div className="rounded-3xl border border-green-500/30 bg-green-500/10 p-8 sm:p-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
          <div className="h-16 w-16 rounded-full bg-green-500/20 text-green-400 mx-auto flex items-center justify-center text-3xl">
            <FiCheckCircle />
          </div>
          <h3 className="text-2xl font-bold text-white font-display">Inquiry Received!</h3>
          <p className="text-base text-[#E2E8F0] max-w-lg mx-auto leading-relaxed">
            {state.message}
          </p>
          <div className="pt-4 text-xs text-[#A7B0C5]">
            Need immediate assistance? Email us directly at{' '}
            <a href="mailto:contact@evoruno.com" className="text-[#4F7CFF] underline">
              contact@evoruno.com
            </a>
          </div>
        </div>
      ) : (
        <form action={formAction} className="space-y-6">
          {/* Honeypot anti-spam field */}
          <input
            type="text"
            name="honeypot"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Error Banner */}
          {state.message && !state.success && (
            <div className="p-4 rounded-xl border border-red-500/40 bg-red-500/10 text-red-300 text-sm flex items-center gap-2">
              <FiAlertCircle className="h-4 w-4 shrink-0" />
              <span>{state.message}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#A7B0C5]">
                Full Name <span className="text-[#4F7CFF]">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="e.g. Alex Rahman"
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF] transition-all"
              />
              {state.fieldErrors?.name && (
                <p className="text-xs text-red-400">{state.fieldErrors.name[0]}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#A7B0C5]">
                Email Address <span className="text-[#4F7CFF]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="alex@company.com"
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF] transition-all"
              />
              {state.fieldErrors?.email && (
                <p className="text-xs text-red-400">{state.fieldErrors.email[0]}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Company */}
            <div className="space-y-2">
              <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-[#A7B0C5]">
                Company / Organization (Optional)
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="e.g. Apex Health"
                className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF] transition-all"
              />
            </div>

            {/* Service Selection */}
            <div className="space-y-2">
              <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-[#A7B0C5]">
                Primary Service Needed <span className="text-[#4F7CFF]">*</span>
              </label>
              <select
                id="service"
                name="service"
                defaultValue="website"
                className="w-full px-4 py-3.5 rounded-xl bg-[#101629] border border-white/10 text-white focus:outline-none focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF] transition-all"
              >
                <option value="website">Website & Web App Development</option>
                <option value="mobile-app">Mobile Application (iOS / Android)</option>
                <option value="seo">Technical SEO & Core Web Vitals</option>
                <option value="other">Full-Stack Digital Transformation / Other</option>
              </select>
              {state.fieldErrors?.service && (
                <p className="text-xs text-red-400">{state.fieldErrors.service[0]}</p>
              )}
            </div>
          </div>

          {/* Budget Tier */}
          <div className="space-y-2">
            <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-[#A7B0C5]">
              Estimated Project Budget (USD or equivalent BDT)
            </label>
            <select
              id="budget"
              name="budget"
              defaultValue="standard"
              className="w-full px-4 py-3.5 rounded-xl bg-[#101629] border border-white/10 text-white focus:outline-none focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF] transition-all"
            >
              <option value="$1,000 - $3,000">$1,000 — $3,000 (MVP / Startup Website)</option>
              <option value="$3,000 - $8,000">$3,000 — $8,000 (Complete Platform / Custom Web App)</option>
              <option value="$8,000+">$8,000+ (Enterprise Portal / Mobile Ecosystem)</option>
              <option value="Not Confirmed Yet">Flexible / Need Scoping Discussion</option>
            </select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#A7B0C5]">
              Tell Us About Your Goals & Project <span className="text-[#4F7CFF]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="What are you building? What problems are you trying to solve? Do you have an existing site or timeline?"
              className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#4F7CFF] focus:ring-1 focus:ring-[#4F7CFF] transition-all leading-relaxed"
            />
            {state.fieldErrors?.message && (
              <p className="text-xs text-red-400">{state.fieldErrors.message[0]}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              disabled={isPending}
              variant="default"
              size="lg"
              className="w-full rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] group"
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
      )}
    </div>
  );
}
