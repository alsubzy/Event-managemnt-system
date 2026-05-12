"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function VerifyEmailPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen items-center justify-center px-6 py-24 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="w-full max-w-xl rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-10 shadow-2xl shadow-slate-950/40">
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Verify email</p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Confirm your email to activate the account</h1>
            </div>
            <p className="text-sm leading-7 text-slate-400">A verification link has been sent to your inbox. Click the link to complete registration and access your dashboard.</p>
            <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-6 text-slate-300">
              <p className="text-sm">Can’t find the email? Check your spam folder or request a new verification link.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link href="/" className="inline-flex items-center justify-center rounded-full bg-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-200 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-950">
                Back to home
              </Link>
              <Link href="/sign-in" className="text-sm font-semibold text-white hover:text-slate-100">
                I’ve already verified my email
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
