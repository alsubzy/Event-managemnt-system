"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Ticket, Users2 } from "lucide-react";
import { trustedBrands, features, categories, popularEvents, testimonials, pricingPlans, faqs, heroHighlights } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/layout/footer";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export default function HomePage() {
  return (
    <main className="bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_34%),linear-gradient(180deg,#020617_0%,#020f1f_100%)] text-slate-100">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-16 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.8 }} className="max-w-2xl space-y-8">
            <div className="inline-flex rounded-full border border-slate-700/80 bg-slate-950/70 px-4 py-2 text-xs uppercase tracking-[0.35em] text-sky-300">
              Premium event management
            </div>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
                Build unforgettable events with a modern SaaS experience.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-400">
                Eventt provides organizers, admins, and attendees with a seamless dashboard, advanced ticketing, and polished discovery pages.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/sign-in">
                <Button>Start free trial</Button>
              </Link>
              <Link href="/events">
                <Button variant="outline">Browse events</Button>
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <div key={item} className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-5">
                  <p className="text-lg font-semibold text-white">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }} className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-[0_35px_100px_-60px_rgba(0,0,0,0.9)]">
            <div className="rounded-3xl bg-slate-950/70 p-5">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Live performance</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">Today’s bookings</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Revenue", value: "$42.5K", icon: Users2 },
                  { label: "Attendees", value: "1.8K", icon: CalendarDays },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl bg-slate-950/90 p-4">
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-500">{item.label}</p>
                    <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Next launch</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">Design Sprint 2026</h3>
                </div>
                <div className="rounded-3xl bg-sky-500/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-sky-300">Hybrid</div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">A premium hybrid event with live studio sessions, networking, and attendee workshops.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-slate-800/80 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid items-center gap-3 sm:grid-cols-3 sm:gap-6">
            {trustedBrands.map((brand) => (
              <div key={brand} className="rounded-3xl border border-slate-800/80 bg-slate-950/90 px-4 py-5 text-center text-sm text-slate-400 shadow-inner shadow-slate-950/20">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.95fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300">What you get</p>
            <h2 className="text-4xl font-semibold text-white">Everything you need to run world-class events.</h2>
            <p className="max-w-xl text-lg leading-8 text-slate-400">
              Modern pages, advanced filters, ticket management, analytics, and multi-role dashboards designed for any event team.
            </p>
          </div>

          <div className="grid gap-5">
            {features.map((feature) => (
              <motion.div key={feature.title} className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/20" whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 240 }}>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950/90 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Popular events</p>
              <h2 className="mt-3 text-4xl font-semibold text-white">Featured event experiences</h2>
            </div>
            <Button variant="outline">View all events</Button>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {popularEvents.map((event) => (
              <motion.article key={event.title} whileHover={{ y: -6 }} className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.8)] transition">
                <div className="flex items-center justify-between gap-3">
                  <Badge>{event.category}</Badge>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{event.date}</p>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{event.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{event.description}</p>
                <div className="mt-6 flex items-center justify-between text-sm text-slate-300">
                  <span>{event.location}</span>
                  <span className="font-semibold text-white">{event.price}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.75fr]">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Why organizers choose Eventt</p>
            <h2 className="text-4xl font-semibold text-white">Organize with confidence and scale faster.</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/20">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Smart workflow</p>
                <p className="mt-4 text-lg leading-7 text-slate-300">Build event pages, manage tickets, and update schedules in one elegant interface.</p>
              </div>
              <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/20">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Powered analytics</p>
                <p className="mt-4 text-lg leading-7 text-slate-300">Track conversions, earnings, and attendance with beautiful charts and insights.</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20">
            <h3 className="text-xl font-semibold text-white">Pricing plans</h3>
            <div className="mt-8 grid gap-4">
              {pricingPlans.map((plan) => (
                <div key={plan.name} className={`rounded-3xl border p-6 shadow-xl shadow-slate-950/10 ${plan.featured ? "border-sky-500/20 bg-slate-950/90" : "border-slate-800/80 bg-slate-900/80"}`}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{plan.name}</p>
                      <p className="mt-3 text-4xl font-semibold text-white">{plan.price}</p>
                    </div>
                    {plan.featured && <Badge className="bg-sky-500/15 text-sky-300">Popular</Badge>}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{plan.description}</p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-300">
                    {plan.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950/90 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="space-y-6 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Frequently asked questions</p>
            <h2 className="text-4xl font-semibold text-white">Everything you need to know.</h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {faqs.map((item) => (
              <motion.div key={item.question} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/10">
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
