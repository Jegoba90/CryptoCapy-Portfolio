import { z } from 'zod';
import {
  AssetIdentitySchema,
  ConfidenceSchema,
  EnvelopeSchema,
  SentimentEnum,
} from './shared.schema';

// ── Source (news article reference) ─────────────────────────────────────────

const SourceSchema = z.object({
  title: z.string(),
  url: z.string().url(),
  credibility: z.enum(['Tier 1', 'Tier 2', 'Tier 3']),
});

// ── Math diagnostics (PRO only) ──────────────────────────────────────────────

const RadarMathDiagnosticsSchema = z.object({
  z_score: z.number(),
  bollinger_bandwidth: z.number(),
  market_regime: z.string(),
  extreme_volatility_detected: z.boolean(),
  data_quality: z.enum(['OPTIMAL', 'PARTIAL', 'INSUFFICIENT']),
  sentiment_override: z.boolean(),
  anomaly_details: z.string().nullable(),
});

// ── Pulse view (FREE) ────────────────────────────────────────────────────────

const RadarPulseDataSchema = z.object({
  engine_used: z.literal('radar'),
  asset: AssetIdentitySchema,
  summary: z.string(),
  sentiment: SentimentEnum,
  statistical_anomaly_detected: z.boolean(),
});

export const RadarPulseResponseSchema = EnvelopeSchema.extend({
  data: RadarPulseDataSchema,
});

// ── Alpha view (PRO) ─────────────────────────────────────────────────────────

const RadarAlphaDataSchema = z.object({
  engine_used: z.literal('radar'),
  asset: AssetIdentitySchema,
  summary: z.string(),
  sentiment: SentimentEnum,
  statistical_anomaly_detected: z.boolean(),
  confidence: ConfidenceSchema,
  math_diagnostics: RadarMathDiagnosticsSchema,
  analysis: z.object({
    detailed_report: z.string(),
    sources_verified: z.array(SourceSchema),
    sources_window: z.string(),
  }),
});

export const RadarAlphaResponseSchema = EnvelopeSchema.extend({
  data: RadarAlphaDataSchema,
});
