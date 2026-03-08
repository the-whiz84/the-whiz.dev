import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges conditional utility classes while preserving Tailwind override order.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
