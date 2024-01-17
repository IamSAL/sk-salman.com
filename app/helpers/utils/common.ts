import { twMerge } from "tailwind-merge"
import { ClassValue, clsx } from "clsx"

export function cn(...classInputs: ClassValue[]) {
  return twMerge(clsx(classInputs))
}
