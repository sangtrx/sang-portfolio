import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = () => {
  const text = `# Curren — Case Study

> Quantitative research and trading intelligence built around two contracts: research must be point-in-time, and public results must be inspectable without exposing private execution or alpha.

Last portfolio verification: 25 Aug 2026. Public platform release line: **v0.4.0 alpha**.

## Role
Founder & Solo Builder.

## Private research/intelligence layer
Market data → point-in-time features → explicit hypothesis families → event studies / OOS validation → signal lifecycle / guarded execution.

Core research invariant: **available_time ≤ event_time**. A feature cannot participate in a decision if it was not knowable when the event occurred.

Validation is designed to reduce false confidence before optimizing returns, using OOS validation plus multiple-testing, uniqueness, and CSCV/PBO-style diagnostics where appropriate.

## Public distribution layer
The private runtime publishes a strict sanitized PublicationBatch one-way into a public SQLite/WAL read model. Public clients never connect directly to the private trading database or execution controls.

Implemented public surfaces:
- Read-only FastAPI API.
- Async Python client.
- CLI.
- Read-only MCP v2 server with six inspection/verification tools.
- Omarchy Quattro widget/panel using delayed anonymous/public context.

## Integrity controls
- Strict fail-closed private-to-public schema.
- Server-enforced delayed public visibility.
- Per-signal source ownership and monotonic generated-at replay watermark.
- Immutable initial signal-plan record/hash.
- Append-only lifecycle identities with conflict detection.
- Immutable terminal outcome and frozen terminal result projection.
- Proof-backed results and track record derived from immutable outcome records.
- No public order placement or trading-control endpoints/tools.

## Current public-platform boundary
Implemented: API/read model/entitlements, CLI/client/MCP/Omarchy, immutable plan/lifecycle/result proof controls.

Pending: private runtime publication projector, production deployment of api.curren.tech, and entitlement-control-plane integration.

A live production public signal feed is **not claimed** until those integrations are deployed and verified.

## Public source
https://github.com/sangtrx/curren

The public repository intentionally excludes private strategy/research logic, raw-source ingestion, AI-guard internals, exchange credentials, execution runtime, accounts, and the production trading database.
`;
  return new Response(text, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
};
