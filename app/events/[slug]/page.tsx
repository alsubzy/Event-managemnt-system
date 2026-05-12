import { prisma } from "@/lib/prisma";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Params {
  params: Promise<{ slug: string }>;
}

export default async function EventPage({ params }: Params) {
  const { slug } = await params;
  const event = await prisma.event.findUnique({
    where: { slug },
    include: { organizer: true, category: true, venue: true },
  });

  if (!event) {
    return (
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-800/80 bg-slate-900/80 p-8 text-slate-300">
        Event not found.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 py-12">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-8 rounded-3xl border border-slate-800/80 bg-slate-900/90 p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">{event.category?.name}</p>
              <h1 className="mt-2 text-4xl font-semibold text-white">{event.title}</h1>
              <p className="mt-3 text-sm text-slate-400">{event.description}</p>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl bg-slate-950/70 px-5 py-4 text-center">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-500">Price</p>
                <p className="mt-2 text-3xl font-semibold text-white">${event.ticketPrice.toFixed(2)}</p>
              </div>
              <Link href="/sign-in">
                <Button variant="primary">Book ticket</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Date</p>
            <p className="mt-3 text-xl font-semibold text-white">{new Date(event.eventDate).toLocaleString()}</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Location</p>
            <p className="mt-3 text-xl font-semibold text-white">{event.city}, {event.country}</p>
          </Card>
          <Card className="p-6">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Organizer</p>
            <p className="mt-3 text-xl font-semibold text-white">{event.organizer?.name}</p>
          </Card>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-white">Event details</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">{event.description}</p>
          </Card>
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-white">Capacity</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">{event.capacity} seats available</p>
          </Card>
        </div>
      </div>
    </main>
  );
}
