"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ResetFormValues {
  password: string;
  confirmPassword: string;
}

export default function ResetPasswordPage() {
  const { register, handleSubmit, watch } = useForm<ResetFormValues>({
    defaultValues: { password: "", confirmPassword: "" },
  });

  const onSubmit = (values: ResetFormValues) => {
    console.log("reset password", values);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-screen items-center justify-center px-6 py-24 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="w-full max-w-xl rounded-[2rem] border border-slate-800/80 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/40">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-sky-300">Reset password</p>
              <h1 className="mt-3 text-3xl font-semibold text-white">Create a new secure password</h1>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <Label htmlFor="password">New password</Label>
                <Input id="password" type="password" placeholder="New password" {...register("password", { required: true })} />
              </div>
              <div>
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <Input id="confirmPassword" type="password" placeholder="Confirm password" {...register("confirmPassword", { required: true })} />
              </div>
              <Button type="submit">Update password</Button>
            </form>
            <p className="text-sm text-slate-400">
              Back to <Link href="/sign-in" className="font-semibold text-white hover:text-slate-100">Sign in</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
