"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface OtpFormValues {
  code: string;
}

export default function OTPPage() {
  const { register, handleSubmit } = useForm<OtpFormValues>({ defaultValues: { code: "" } });

  const onSubmit = (values: OtpFormValues) => {
    console.log("otp code", values);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen items-center justify-center px-6 py-24 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="w-full max-w-xl rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300">OTP verification</p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Enter the code sent to your email</h1>
            </div>
            <p className="text-sm leading-7 text-slate-400">We sent a one-time verification code to your email address. Enter it below to continue.</p>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label htmlFor="code">Verification code</Label>
                <Input id="code" type="text" placeholder="123456" {...register("code", { required: true })} />
              </div>
              <Button type="submit">Verify code</Button>
            </form>
            <p className="text-sm text-slate-400">
              Didn’t receive it? <Link href="/" className="font-semibold text-white hover:text-slate-100">Resend email</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
