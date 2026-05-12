"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginFormValues {
  email: string;
  password: string;
}

export default function SignInPage() {
  const { register, handleSubmit, formState } = useForm<LoginFormValues>({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (values: LoginFormValues) => {
    console.log("login attempt", values);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto grid min-h-screen max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.85fr_0.95fr] lg:items-center lg:px-10">
        <motion.section initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 shadow-2xl shadow-slate-950/40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.15),_transparent_25%)]" />
          <div className="relative space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Welcome back</p>
              <h1 className="mt-4 text-4xl font-semibold text-white">Sign in to your account</h1>
            </div>
            <p className="max-w-xl text-slate-400">
              Manage your events, tickets, bookings, and analytics from a premium organizer interface.
            </p>
            <div className="space-y-4 rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white">Organizers</p>
                  <p className="text-xs text-slate-500">Secure access for event teams.</p>
                </div>
                <span className="rounded-3xl bg-slate-800/80 px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-300">Fast entry</span>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900/90 p-4 text-sm text-slate-300">Event creation</div>
                <div className="rounded-3xl bg-slate-900/90 p-4 text-sm text-slate-300">Analytics dashboard</div>
                <div className="rounded-3xl bg-slate-900/90 p-4 text-sm text-slate-300">Booking insights</div>
                <div className="rounded-3xl bg-slate-900/90 p-4 text-sm text-slate-300">Premium controls</div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Login</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Access your event workspace</h2>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" {...register("email", { required: true })} />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter password" {...register("password", { required: true })} />
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit">Continue</Button>
                <Link href="/forgot-password" className="text-sm text-sky-300 hover:text-sky-200">Forgot password?</Link>
              </div>
            </form>
            <div className="border-t border-slate-800/80 pt-6">
              <p className="text-sm text-slate-400">New here? <Link href="/sign-up" className="font-semibold text-white hover:text-slate-100">Create an account</Link></p>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
