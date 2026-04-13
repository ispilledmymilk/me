import { resume } from '../data/resume';

/** Calendly / Cal.com / etc. Override with `PUBLIC_BOOKINGS_URL` in `.env`. */
export function getBookingsUrl(): string {
  const env = import.meta.env.PUBLIC_BOOKINGS_URL;
  if (typeof env === 'string') {
    const t = env.trim();
    if (t.length > 0) return t;
  }
  return resume.booking.bookingsUrl;
}
