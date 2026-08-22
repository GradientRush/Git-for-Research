# Progress

> **Rule:** Only mark an item complete after it has been implemented AND manually tested.

---

## Foundation

- [x] Repository exists and is connected to GitHub
- [x] Next.js 15 initialized (TypeScript, Tailwind, App Router, src/)
- [x] TypeScript configured
- [x] Tailwind CSS configured
- [x] ESLint configured
- [x] .gitignore in place (node_modules, .next, secrets excluded)
- [x] .env.example created (safe template, no secrets)
- [x] README.md
- [x] ARCHITECTURE.md
- [x] PROGRESS.md
- [x] DEMO.md

---

## Ingestion — 15%

- [ ] Markdown / plaintext ingestion
- [ ] PDF ingestion (text-extractable)
- [ ] ChatGPT export parser (JSON format)
- [ ] Claude export parser (JSON format — separate from ChatGPT)
- [ ] Common normalized Artifact representation
- [ ] Optional: codebase ingestion

---

## Versioning — 35%

- [ ] Artifact data model
- [ ] Commit / version data model
- [ ] Content hashing
- [ ] Initial commit on ingestion
- [ ] Commit history (list, navigate)
- [ ] Branching (create branch, switch branch)
- [ ] Semantic diff (human-readable, sentence/paragraph level)
- [ ] Merge (clean merge)
- [ ] Conflict detection (surface incompatible overlapping changes)
- [ ] Merge conflict resolution

---

## Concurrent Context — 20%

- [ ] Concurrent editing infrastructure (Yjs)
- [ ] WebSocket server for Yjs synchronization
- [ ] No silent overwrites (CRDT guarantees)
- [ ] Live presence indicators (who is viewing / editing)
- [ ] Change awareness ("what changed since I last looked?")

---

## Retrieval — 15%

- [ ] Content chunking
- [ ] Embedding generation (OpenAI)
- [ ] pgvector storage
- [ ] Semantic similarity search
- [ ] Cross-artifact retrieval
- [ ] Version-aware retrieval
- [ ] LLM research query (grounded answer from research corpus)
- [ ] Source citations in query results

---

## Stretch — 10%

- [ ] Provenance tracking (trace findings back to original artifacts/commits)

---

## Demo — 5%

- [ ] End-to-end demo flow works
- [ ] Ingestion demo (upload artifact, see initial commit)
- [ ] Versioning demo (edit, commit, view history)
- [ ] Semantic diff demo (live, human-readable)
- [ ] Branch demo (create branch, diverge)
- [ ] Merge conflict demo (live conflict surfaced clearly)
- [ ] Concurrent editing demo (two users, real-time presence)
- [ ] Research query demo (ask question, get grounded answer with sources)

---

## Current Milestone

**Phase 0: Foundation** ✅

**Next:** Phase 1 — Workspace + Artifact Data Model (pending explicit permission)

---

## Known Issues

_None yet._
