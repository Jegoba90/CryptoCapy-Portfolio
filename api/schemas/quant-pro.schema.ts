import { z } from 'zod';
import { AssetIdentitySchema, EnvelopeSchema, SignalEnum } from './shared.schema';

// ── Market regime ────────────────────────────────────────────────────────────

const MarketRegimeSchema = z.object({
  lyapunov: z.number(),
  status: z.enum(['STABLE', 'TRANSITIONAL', 'CHAOTIC']),
  signal_confidence: z.enum(['HIGH', 'MEDIUM', 'LOW']),
});

// ── Timeframe block (1D / 4H) ────────────────────────────────────────────────

const ConfluenceBlockSchema = z.object({
  timeframe: z.enum(['4h', '1d']),
  confluence_score: z.number().min(0).max(100),
  signal: SignalEnum,
  regime: MarketRegimeSchema,
  timestamp: z.string(),
});

// ── MIR diagnostics ──────────────────────────────────────────────────────────

const MIRDiagnosticsSchema = z.object({
  base_raw_score: z.number(),
  chaos_penalty_applied: z.boolean(),
  explanation: z.string(),
});

// ── Signal response ──────────────────────────────────────────────────────────

const QuantProSignalDataSchema = z.object({
  asset: AssetIdentitySchema,
  resolved_signal: SignalEnum,
  resolved_score: z.number().min(0).max(100),
  mir_diagnostics: MIRDiagnosticsSchema,
  macro_1d: ConfluenceBlockSchema,
  micro_4h: ConfluenceBlockSchema,
});

export const QuantProSignalResponseSchema = EnvelopeSchema.extend({
  data: QuantProSignalDataSchema,
});
