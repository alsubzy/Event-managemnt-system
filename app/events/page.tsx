import { prisma } from "@/lib/prisma";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default async function EventsPage() {
  const events = await prisma.event.findMany({
    where: { status: "PUBLISHED" },
    orderBy: { eventDate: "asc" },
    include: { organizer: true, category: true },
    take: 12,
  });

  return (
    <main className="min-h-screen bg-slate-950 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Discover</p>
            <h1 className="mt-2 text-4xl font-semibold text-white">Upcoming experiences</h1>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            Browse live and hybrid events, compare ticket types, and book directly from your profile.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {events.length === 0 ? (
            <Card className="p-8 text-center text-slate-400">No published events are available yet.</Card>
          ) : (
            events.map((event) => (
              <Card key={event.id} className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-slate-500">{event.category?.name ?? "General"}</p>
                      <h2 className="mt-2 text-2xl font-semibold text-white">{event.title}</h2>
                    </div>
                    <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
                      {event.type}
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-slate-400">{event.description.slice(0, 140)}...</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <span className="rounded-3xl bg-slate-950/60 px-4 py-3 text-sm text-slate-300">{new Date(event.eventDate).toLocaleDateString()}</span>
                    <span className="rounded-3xl bg-slate-950/60 px-4 py-3 text-sm text-slate-300">{event.organizer?.name}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 pt-4">
                    <p className="text-lg font-semibold text-white">${event.ticketPrice.toFixed(2)}</p>
                    <Link
                      href={`/events/${event.slug}`}
                      className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                    >
                      View tickets
                    </Link>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
