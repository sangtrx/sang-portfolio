import type { APIRoute } from 'astro';
import { OG_PNG_BASE64, pngResponse } from '../lib/staticAssets';

export const prerender = true;
export const GET: APIRoute = () => pngResponse(OG_PNG_BASE64);
