export const BUCHAREST_TIMEZONE = 'Europe/Bucharest';

const bucharestClockFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: BUCHAREST_TIMEZONE,
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZoneName: 'short',
});

export function formatBucharestClock(date: Date = new Date()): string {
  const parts = bucharestClockFormatter.formatToParts(date);
  const hour = parts.find((p) => p.type === 'hour')?.value ?? '';
  const minute = parts.find((p) => p.type === 'minute')?.value ?? '';
  const tz = parts.find((p) => p.type === 'timeZoneName')?.value ?? 'EET';
  return hour && minute ? `${hour}:${minute} ${tz}` : '';
}
