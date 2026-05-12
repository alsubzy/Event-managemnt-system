import { z } from "zod";

export const eventCreateSchema = z.object({
  title: z.string().min(5),
  slug: z.string().min(5),
  description: z.string().min(20),
  category: z.string().min(3),
  type: z.enum(["PHYSICAL", "VIRTUAL", "HYBRID"]),
  ticketPrice: z.coerce.number().min(0),
  capacity: z.coerce.number().int().min(1),
  city: z.string().min(2),
  country: z.string().min(2),
  eventDate: z.string().refine((value) => !Number.isNaN(Date.parse(value)), {
    message: "Invalid event date",
  }),
  bannerUrl: z.string().url().optional(),
  status: z.enum(["DRAFT", "PUBLISHED", "CANCELLED"]).default("DRAFT"),
});

export const bookingRequestSchema = z.object({
  eventId: z.string().min(1),
  quantity: z.coerce.number().int().min(1),
  ticketType: z.enum(["REGULAR", "VIP", "EARLY_BIRD"]),
  couponCode: z.string().optional(),
});
