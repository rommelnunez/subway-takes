import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const getAssetPath = (path: string) => {
    const isProd = process.env.NODE_ENV === 'production';
    const basePath = isProd ? '/subway-takes' : '';
    return `${basePath}${path}`;
};
