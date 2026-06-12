import { z } from 'zod';

// ── Envelope base ────────────────────────────────────────────────────────────

export const EnvelopeSchema = z.object({
  status: z.literal('success'),
  version: z.literal('1.0.0'),
  timestamp: z.string(),
});

// ── Primitives ───────────────────────────────────────────────────────────────

export const AssetIdentitySchema = z.object({
  id: z.string(),
  symbol: z.string(),
});

export const SentimentEnum = z.enum(['bullish', 'bearish', 'neutral']);

export const ConfidenceSchema = z.object({
  score: z.number().min(0).max(1),
  label: z.enum(['LOW', 'MEDIUM', 'HIGH']),
});

export const SignalEnum = z.enum([
  'STRONG_BUY',
  'BUY',
  'NEUTRAL_CHOP',
  'SELL',
  'STRONG_SELL',
]);

export const MarketRegimeEnum = z.enum([
  'BULLISH_TREND',
  'BEARISH_TREND',
  'RANGING_CHOP',
  'EXTREME_VOLATILITY',
  'UNUSUAL_VOLATILITY',
]);
