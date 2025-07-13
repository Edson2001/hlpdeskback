export function getSLADate(priority: any): Date {
  const hours = {
    LOW: 72,
    MEDIUM: 48,
    HIGH: 24,
    URGENT: 4,
  }[priority];
  return new Date(Date.now() + hours * 3600000);
}
