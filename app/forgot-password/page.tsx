"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ForgotFormValues {
  email: string;
}

export default function ForgotPasswordPage() {
  const { register, handleSubmit } = useForm<ForgotFormValues>({
    defaultValues: { email: "" },
  });

  const onSubmit = (values: ForgotFormValues) => {
    console.log("forgot password", values);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen items-center justify-center px-6 py-24 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="w-full max-w-xl rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Password recovery</p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Reset your login details</h1>
            </div>
            <p className="text-sm leading-7 text-slate-400">Enter your email and we’ll send instructions to reset your password and return to the dashboard.</p>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" placeholder="you@example.com" {...register("email", { required: true })} />
              </div>
              <Button type="submit">Send reset link</Button>
            </form>
            <p className="text-sm text-slate-400">
              Remembered your password? <Link href="/sign-in" className="font-semibold text-white hover:text-slate-100">Sign in</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
