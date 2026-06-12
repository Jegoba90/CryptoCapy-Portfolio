import { z } from 'zod';
import {
  AssetIdentitySchema,
  ConfidenceSchema,
  EnvelopeSchema,
  SentimentEnum,
} from './shared.schema';

// ── On-chain stats ───────────────────────────────────────────────────────────

export const OnchainStatsSchema = z.object({
  network: z.string().nullable().optional(),
  network_congestion: z.enum(['LOW', 'MEDIUM', 'HIGH', 'UNKNOWN']).nullable().optional(),
  whale_activity_alert: z.boolean().nullable().optional(),
  onchain_confidence_score: z.number().nullable().optional(),
});

// ── Actionable insight ───────────────────────────────────────────────────────

export const ActionableInsightSchema = z.object({
  signal: z.string(),
  risk_level: z.string(),
  trigger_condition: z.string(),
});

// ── Math diagnostics (PRO only) ──────────────────────────────────────────────

const QuantPlusMathDiagnosticsSchema = z.object({
  z_score: z.number(),
  bollinger_bandwidth: z.number(),
  market_regime: z.string(),
  extreme_volatility_detected: z.boolean(),
  data_quality: z.enum(['OPTIMAL', 'PARTIAL', 'INSUFFICIENT']),
  sentiment_override: z.boolean(),
  anomaly_details: z.string().nullable(),
});

// ── Pulse view (FREE) ────────────────────────────────────────────────────────

const QuantPlusPulseDataSchema = z.object({
  engine_used: z.literal('quant_plus'),
  asset: AssetIdentitySchema,
  summary: z.string(),
  sentiment: SentimentEnum,
  statistical_anomaly_detected: z.boolean(),
});

export const QuantPlusPulseResponseSchema = EnvelopeSchema.extend({
  data: QuantPlusPulseDataSchema,
});

// ── Alpha view (PRO) ─────────────────────────────────────────────────────────

const QuantPlusAlphaDataSchema = z.object({
  engine_used: z.literal('quant_plus'),
  asset: AssetIdentitySchema,
  summary: z.string(),
  sentiment: SentimentEnum,
  statistical_anomaly_detected: z.boolean(),
  confidence: ConfidenceSchema,
  math_diagnostics: QuantPlusMathDiagnosticsSchema,
  analysis: z.object({
    detailed_report: z.string(),
  }),
  onchain_stats: OnchainStatsSchema.optional(),
  actionable_insight: ActionableInsightSchema.optional(),
});

export const QuantPlusAlphaResponseSchema = EnvelopeSchema.extend({
  data: QuantPlusAlphaDataSchema,
});
