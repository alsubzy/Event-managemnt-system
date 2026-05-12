import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { eventCreateSchema } from "@/lib/validators";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const events = await prisma.event.findMany({
    orderBy: { eventDate: "asc" },
    include: { organizer: true, category: true },
  });
  return NextResponse.json(events);
}

export async function POST(request: Request) {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "content-type": "application/json" },
    });
  }

  const payload = await request.json();
  const data = eventCreateSchema.parse(payload);

  const user = await prisma.user.upsert({
    where: { clerkId: userId },
    create: {
      clerkId: userId,
      email: `${userId}@clerk.local`,
      role: "ORGANIZER",
    },
    update: {},
  });

  const category = await prisma.category.upsert({
    where: { slug: data.category.toLowerCase().replace(/\s+/g, "-") },
    create: {
      name: data.category,
      slug: data.category.toLowerCase().replace(/\s+/g, "-"),
    },
    update: {},
  });

  const organizer =
    (await prisma.organizer.findFirst({ where: { ownerId: user.id } })) ??
    (await prisma.organizer.create({
      data: {
        name: user.name ?? "Organizer",
        slug: `org-${user.id}`,
        ownerId: user.id,
      },
    }));

  const event = await prisma.event.create({
    data: {
      title: data.title,
      slug: data.slug,
      description: data.description,
      categoryId: category.id,
      organizerId: organizer.id,
      type: data.type,
      status: data.status,
      visibility: "PUBLIC",
      featured: false,
      bannerUrl: data.bannerUrl,
      gallery: [],
      eventDate: new Date(data.eventDate),
      ticketPrice: data.ticketPrice,
      capacity: data.capacity,
      city: data.city,
      country: data.country,
    },
  });

  return NextResponse.json(event);
}
