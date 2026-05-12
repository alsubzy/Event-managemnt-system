"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface RegisterFormValues {
  name: string;
  email: string;
  password: string;
}

export default function SignUpPage() {
  const { register, handleSubmit } = useForm<RegisterFormValues>({
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit = (data: RegisterFormValues) => {
    console.log("register", data);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto grid min-h-screen max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.95fr_0.85fr] lg:items-center lg:px-10">
        <motion.section initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-10 shadow-2xl shadow-slate-950/40">
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Create your workspace</p>
              <h1 className="mt-4 text-4xl font-semibold text-white">Launch events with confidence.</h1>
            </div>
            <p className="max-w-xl text-slate-400">
              Join the next generation of event organizers and get access to booking, ticketing, analytics, and event discovery tools.
            </p>
            <div className="grid gap-4 rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-6">
              <div className="rounded-3xl bg-slate-900/90 p-4 text-sm text-slate-300">Trusted event launches</div>
              <div className="rounded-3xl bg-slate-900/90 p-4 text-sm text-slate-300">Advanced ticket control</div>
              <div className="rounded-3xl bg-slate-900/90 p-4 text-sm text-slate-300">Rich booking insights</div>
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Register</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Start organizing premium events</h2>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" placeholder="Avery Wells" {...register("name", { required: true })} />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" {...register("email", { required: true })} />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Create password" {...register("password", { required: true })} />
              </div>
              <Button type="submit">Create account</Button>
            </form>
            <p className="text-sm text-slate-400">
              Already have an account? <Link href="/sign-in" className="font-semibold text-white hover:text-slate-100">Sign in</Link>
            </p>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
