import type { Goal } from "@/lib/tracker";

export const SPEC_GOAL_ID = "w1-october-spec";

const sections: { n: string; title: string; body: string }[] = [
  {
    n: "1",
    title: "PILOT OBJECTIVE",
    body: `Build a private internal application that takes:
Approved campaign + approved script + presenter workflow + visual brief
and produces:
A rendered, reviewable 9:16 performance-marketing advert first cut that saves an editor meaningful assembly time.

The first cut must contain, where required:
• UGC/presenter footage
• B-roll/supporting visuals
• scene/cut timing
• captions
• voice/audio
• music
• sound effects
• CTA
• end frame
• mandatory campaign copy
• basic motion/overlays
• technical QA results
• editor review controls

The editor should be correcting and improving an existing advert, not rebuilding the advert from an empty timeline.`,
  },
  {
    n: "2",
    title: "OCTOBER DEFINITION OF DONE",
    body: `The October pilot is complete when the following workflow runs end-to-end:

Approved Script
↓
Create Production Job
↓
Generate / Retrieve Presenter
↓
Retrieve Existing B-Roll
↓
Generate Missing B-Roll
↓
Transcribe / Align Presenter Audio
↓
Generate Structured Edit Plan
↓
Validate Edit Plan
↓
Render Video
↓
Add Captions / Music / CTA / End Frame
↓
Run Automated QA
↓
Editor Review
↓
Approve / Reject / Replace Weak Assets

The system separates AI-assisted editorial decision-making from deterministic software execution.`,
  },
  {
    n: "3",
    title: "OCTOBER SCOPE OF WORK",
    body: `3.1 IN SCOPE

A. Private Production Application
Build a private authenticated web application allowing authorised Hyrax users to:
• log in
• create production jobs
• select campaign/product
• enter or load an approved script
• select presenter workflow
• add visual brief/reference
• set target duration
• define generation budget
• start production
• monitor processing status
• preview generated assets
• preview rendered advert
• review QA results
• replace a selected visual with an approved alternative
• approve or reject the first cut

Technology:
• TypeScript
• Next.js
• React
• Supabase Auth

B. Job Management
Each advert must exist as a persistent production job.

Minimum fields:
job_id
campaign_id
script_version
script_text
presenter_workflow
visual_brief
target_duration
aspect_ratio
budget_cap
status
created_by
created_at
updated_at

Recommended job lifecycle:
DRAFT
READY
ASSET_GENERATION
ASSET_ANALYSIS
EDIT_PLANNING
RENDERING
QA
EDITOR_REVIEW
APPROVED
REJECTED
FAILED

Jobs must survive:
• browser refresh
• browser closure
• worker interruption
• normal application restart

C. Presenter / UGC Pipeline
The system must support one working presenter path.

Preferred order:
Existing Hyrax/Floyo Workflow
↓
API / Export Available?
YES → Integrate
NO → Direct Provider API or Upload

Required adapter operations:
submit()
getStatus()
retrieveOutput()
getProviderTaskId()
getCost()
getError()

The application should not be tightly coupled directly to Floyo.
Floyo should sit behind a provider adapter.
If Floyo does not expose a reliable API/export path, use another provider or allow manually produced presenter footage to enter the pipeline.

D. B-Roll Pipeline
The B-roll workflow must operate in this order:
Required Visual Beat
↓
Search Approved Library
↓
Suitable Asset Exists?
YES → Reuse Asset
NO → Generate / Source Asset

October requires only:
• one internal asset library
• one external B-roll generation/source provider
• manual upload support

Every asset must record:
asset_id
job_id
source
provider
provider_task_id
file_location
duration
width
height
fps
codec
cost
prompt
rights_status
approval_status
created_at`,
  },
  {
    n: "4",
    title: "MEDIA INGEST AND NORMALISATION",
    body: `Every uploaded or generated media file must pass through media preprocessing.

Use:
• FFmpeg
• FFprobe

Required processing:
Inspect input
↓
Validate file
↓
Extract metadata
↓
Normalize media
↓
Generate proxy
↓
Generate thumbnail
↓
Extract audio if required
↓
Store derivatives

Required checks:
• dimensions
• duration
• frame rate
• codec
• audio stream
• file corruption
• aspect ratio

Recommended pilot working format:
Video: MP4 / H.264
Audio: AAC
Target: 1080 × 1920
Aspect Ratio: 9:16
Frame Rate: 30fps`,
  },
  {
    n: "5",
    title: "TRANSCRIPTION AND SCRIPT ALIGNMENT",
    body: `Presenter footage must be transcribed.

Required output:
{
  "text": "...",
  "words": [
    { "word": "example", "start": 1.24, "end": 1.61 }
  ]
}

The transcript must be compared against the approved script.
Important mismatches should stop automatic progression, including:
• offer changes
• CTA changes
• prices
• names
• product details
• missing required claims

Possible transcription/alignment services:
• ElevenLabs
• Whisper-based service
• comparable word-level transcription service

Custom speech recognition development is not required for October.`,
  },
  {
    n: "6",
    title: "ASSET SEGMENT IDENTIFICATION",
    body: `Do not treat an entire video as one usable asset.

Create:
Asset
├── Segment A: 00:03.20–00:05.40
├── Segment B: 00:12.70–00:14.10
└── Segment C: 00:21.00–00:24.50

Minimum Asset Segment fields:
segment_id
asset_id
start_time
end_time
description
approved
rights_status
quality_score_optional

For October, segment selection may be:
1. AI suggested
2. human approved

Full autonomous shot-quality detection is not required for the first pilot.`,
  },
  {
    n: "7",
    title: "ASSET SEARCH",
    body: `October search should begin simple.

Required
Search/filter by:
• description
• tags
• campaign
• asset type
• approval status
• usage rights

Optional October enhancement
Add embeddings using:
pgvector
+
LLM/VLM-generated description

Not mandatory for October
TwelveLabs.
TwelveLabs may improve semantic video search later, but it should not be a dependency for producing the first advert.`,
  },
  {
    n: "8",
    title: "EDIT DIRECTOR / CREATIVE MANIFEST",
    body: `The Creative Manifest is the central technical contract between AI decision-making and deterministic rendering.
The AI does not produce the final video directly.
The AI produces structured edit instructions.

Example:
{
  "version": "1.0",
  "duration": 30,
  "format": "9:16",
  "events": [
    {
      "start": 0,
      "end": 2.4,
      "type": "presenter",
      "assetId": "asset_01",
      "segment": { "in": 0.5, "out": 2.9 },
      "crop": "center",
      "caption": { "text": "Example caption" }
    },
    {
      "start": 2.4,
      "end": 4.7,
      "type": "broll",
      "assetId": "asset_08",
      "segment": { "in": 5.2, "out": 7.5 }
    }
  ]
}

The manifest should contain:
• selected asset
• exact in/out points
• timeline start/end
• crop
• framing
• captions
• caption emphasis
• overlay
• approved motion treatment
• audio treatment
• music cue
• sound effect
• CTA
• mandatory copy
• end-frame configuration
• approved alternative asset

Every manifest must be schema validated before rendering.
Use: Zod
AI output that fails validation does not reach the renderer.`,
  },
  {
    n: "9",
    title: "AI COMPONENT",
    body: `Use one primary LLM for the October pilot.
A complex multi-agent architecture is not required to prove the initial production workflow.

The AI layer performs:
Task 1 — Analyse script beats.
Task 2 — Describe required supporting visuals.
Task 3 — Match approved assets to visual requirements.
Task 4 — Recommend generation requests for missing assets.
Task 5 — Produce the Creative Manifest.

Processing path:
LLM
↓
Structured JSON
↓
Zod validation
↓
Business-rule validation
↓
Creative Manifest

The model must never directly:
• modify production files
• bypass schema validation
• approve its own output
• publish media
• initiate unrestricted render operations`,
  },
  {
    n: "10",
    title: "VIDEO RENDERER",
    body: `Use: Remotion + FFmpeg

Remotion is responsible for:
• timeline composition
• clip placement
• cropping
• overlays
• motion
• presenter/B-roll switching
• captions
• text
• CTA
• end frame
• transitions

FFmpeg is responsible for:
• transcoding
• concatenation where required
• audio processing
• normalisation
• proxies
• encoding
• final MP4 production

Premiere is not required to create the automatic first cut.
Premiere may remain a downstream editing tool where final manual creative work is required.`,
  },
  {
    n: "11",
    title: "CAPTION SYSTEM",
    body: `Required:
• word or phrase timing
• font
• size
• position
• safe-zone rules
• line wrapping
• highlighted/emphasised words
• brand colour/configuration

Caption presets should be reusable React components.

Example:
CaptionStyle
- fontFamily
- fontWeight
- textSize
- stroke
- background
- maxCharacters
- maxLines
- position
- highlightStyle

Pixel-level styling should be handled by deterministic templates rather than generated independently by an LLM.`,
  },
  {
    n: "12",
    title: "AUDIO SYSTEM",
    body: `October requires a maximum of four audio layers:
1. Presenter / narration
2. Background music
3. Optional SFX
4. Optional generated voice

Use approved/licensed music assets rather than building AI music generation into the pilot.

Required audio controls:
• gain
• fade
• trim
• ducking
• normalisation

Recommended behaviour:
Presenter speech = primary audio
Music automatically ducked beneath speech
SFX limited to approved manifest moments`,
  },
  {
    n: "13",
    title: "CTA AND END FRAME",
    body: `Build CTA/end-frame output as deterministic Remotion components.

Example:
<CTA
  headline=""
  subText=""
  buttonText=""
  logo=""
  disclaimer=""
  duration={3}
/>

Campaign configuration determines:
• CTA wording
• duration
• logo
• typography
• colours
• disclaimer
• mandatory copy

Critical offer wording must come from approved campaign configuration, not be generated freely during rendering.`,
  },
  {
    n: "14",
    title: "AUTOMATED QA",
    body: `October QA should primarily use deterministic checks.

Required checks:
Source assets exist
Files decode
Correct aspect ratio
No black/broken frames
Audio exists
Audio not clipped
Captions exist
Captions within safe zones
CTA exists
CTA visible for required duration
Mandatory copy exists
Expected duration range
Render completed successfully

Possible later AI-assisted QA may include:
• brand review
• policy review
• visual quality review

These are not required as critical dependencies for the October pilot.`,
  },
  {
    n: "15",
    title: "EDITOR REVIEW",
    body: `The application must not attempt to recreate Premiere.

The October review UI requires:
Video Preview
Script Beat
Current Selected Asset
Caption
QA Warning
Alternative Assets
[Replace Asset]
[Approve]
[Reject]

Editor actions:
• replace weak visual
• choose approved alternative
• approve cut
• reject cut
• enter rejection reason

Optional bounded controls:
• adjust clip in/out points
• adjust approved caption
• adjust music level

A full browser-based nonlinear editing system is outside scope.`,
  },
  {
    n: "16",
    title: "DATABASE",
    body: `Use: Supabase PostgreSQL

Minimum tables:
users
campaigns
campaign_policies
jobs
job_steps
assets
asset_segments
provider_attempts
creative_manifests
renders
qa_results
review_decisions
approvals
cost_ledger

Recommended relationship:
Campaign
├── Policy Version
└── Job
     ├── Assets
     │    └── Asset Segments
     ├── Provider Attempts
     ├── Creative Manifest
     ├── Render
     ├── QA Results
     └── Review Decisions`,
  },
  {
    n: "17",
    title: "MEDIA STORAGE",
    body: `Use: Supabase Storage

Recommended buckets:
source-media
generated-media
proxies
thumbnails
audio
renders
brand-assets

Storage rules:
• originals remain immutable
• derivatives are versioned
• buckets remain private
• signed URLs are used where required
• access is role-controlled
• source provenance is retained`,
  },
  {
    n: "18",
    title: "BACKGROUND JOB PROCESSING",
    body: `Use: Trigger.dev

Required worker jobs:
generate-presenter
generate-broll
download-provider-output
inspect-media
create-proxy
transcribe-presenter
analyse-assets
build-manifest
render-video
run-qa

Pipeline:
create job
↓
generate presenter
↓
retrieve/search supporting assets
↓
transcription
↓
manifest generation
↓
render
↓
QA
↓
review

Each step must store:
status
attempt_number
started_at
completed_at
error
provider_task_id
cost

Paid operations require idempotency controls to prevent accidental duplicate generation and duplicate billing.`,
  },
  {
    n: "19",
    title: "PROVIDER ADAPTER INTERFACE",
    body: `Create a common provider abstraction.

Example:
interface MediaProvider {
  submit(input: ProviderInput): Promise<ProviderTask>;
  status(taskId: string): Promise<ProviderStatus>;
  result(taskId: string): Promise<ProviderResult>;
  cancel?(taskId: string): Promise<void>;
}

This abstraction may be used for:
• Floyo
• UGC providers
• AI video providers
• image providers
• voice providers

Provider-specific integration logic should not be spread throughout the application.`,
  },
  {
    n: "20",
    title: "APPLICATION ARCHITECTURE",
    body: `Recommended October architecture:

Next.js / React — Private Web App
↓
Supabase Auth + DB + Private Storage
↓
Trigger.dev — Workflow Workers
↓
Presenter/UGC Provider · AI Services · Asset Providers / Library
↓
Creative Manifest
↓
Remotion + FFmpeg Renderer
↓
Rendered MP4
↓
Automated QA
↓
Editor Review`,
  },
  {
    n: "21",
    title: "HOSTING",
    body: `Recommended deployment architecture:

Web application — Vercel
Database — Supabase PostgreSQL
Authentication — Supabase Auth
Media storage — Supabase Storage
Workflow orchestration — Trigger.dev
Rendering — Dedicated render worker / Remotion-compatible environment
Monitoring — Sentry

Long-running video rendering should not depend on standard frontend/serverless request execution.`,
  },
  {
    n: "22",
    title: "HARDWARE REQUIRED",
    body: `Under the recommended API-first pilot architecture:

Development machines
CPU — Minimum: Modern 6-core. Recommended: Modern 8+ core.
RAM — Minimum: 16 GB. Recommended: 32 GB.
Storage — Minimum: 100 GB SSD available. Recommended: 250+ GB SSD available.
Operating system — Windows/macOS/Linux.

Production GPU
A dedicated GPU is not required for the recommended October pilot because generation should use external managed providers.
GPU infrastructure becomes relevant only if Hyrax later decides to self-host:
• ComfyUI
• image generation models
• video generation models
• VLM inference
• other GPU-intensive model workloads

Self-hosted generation should therefore not be an October dependency.`,
  },
  {
    n: "23",
    title: "SOFTWARE / SERVICES REQUIRED",
    body: `Primary language — TypeScript
Application framework — Next.js
UI — React
Database — PostgreSQL / Supabase
Authentication — Supabase Auth
Storage — Supabase Storage
Background jobs — Trigger.dev
Rendering — Remotion
Media processing — FFmpeg
Media inspection — FFprobe
Schema validation — Zod
AI planning — OpenAI or comparable structured-output LLM
Transcription — ElevenLabs / Whisper-compatible provider
Source control — GitHub
Continuous integration — GitHub Actions
Unit testing — Vitest
Browser testing — Playwright
Web hosting — Vercel
Monitoring — Sentry
B-roll — One selected generation/source provider
Presenter / UGC — Existing Floyo/current provider if technically viable`,
  },
  {
    n: "24",
    title: "PROJECT RESOURCE REQUIREMENTS",
    body: `Technical Implementation Lead / Full-Stack Engineer
October requirement: Required
Level: Full-time / primary delivery resource
Own overall implementation; Next.js/React application; Supabase integration; database implementation; API/provider integrations; Trigger.dev workflows; system integration; deployment coordination; technical testing and issue resolution.

Senior TypeScript / React / Remotion Engineer
October requirement: Required
Level: Part-time technical oversight
Review architecture and substantive pull requests; provide guidance on authentication, database/schema changes, durable background jobs, Remotion architecture, render deployment, performance and production-level technical issues.

Lead Video Editor
October requirement: Required
Level: Part-time throughout pilot
Define first-cut quality standards; provide reference adverts; review generated cuts; assess B-roll and presenter suitability; identify required editing behaviours; provide structured acceptance/rejection feedback.

Second Video Editor
October requirement: Required for acceptance testing
Level: Periodic / final validation
Independently assess first-cut usefulness and confirm that results are genuinely useful to an editor rather than being overly influenced by the primary editor's feedback.

Brand / Policy / Release Owner
October requirement: Required
Level: Periodic / approval gates
Provide campaign-specific rules, mandatory copy, CTA requirements, claims restrictions, visual restrictions and approval criteria; make escalation and final release decisions where required.

Product / Project Owner
October requirement: Required
Level: Part-time
Confirm pilot priorities, approve scope decisions, resolve business dependencies, control provider/generation budget and confirm whether October acceptance criteria have been met.

October Resourcing Position
The October pilot does not require dedicated:
• machine-learning engineers
• neural-network engineers
• data scientists
• AI researchers
• GPU infrastructure engineers

The recommended pilot uses managed AI and media-provider APIs rather than training or self-hosting custom models.
Additional specialist resources should only be introduced if a confirmed technical requirement emerges during implementation that cannot reasonably be handled by the core engineering team.`,
  },
  {
    n: "25",
    title: "ACCESS REQUIRED BEFORE DEVELOPMENT",
    body: `Hyrax must provide the following.

Content and media
• one approved campaign/product
• one approved primary script
• 5–10 representative test scripts
• three editable reference adverts
• source media for reference adverts
• brand kit
• CTA assets
• end-frame assets
• logos
• fonts
• motion guidance
• music rules
• audio rules

Provider access
• Floyo/current workflow access
• available API documentation
• API credentials
• generation account access
• billing access
• approved generation budget

Business configuration
• target audience
• campaign restrictions
• CTA wording
• required disclosures
• mandatory copy
• prohibited visual categories
• named approval owner`,
  },
  {
    n: "26",
    title: "DEVELOPMENT ENVIRONMENTS",
    body: `Create separate:
development
staging
production

Environment-specific configuration must include:
• API keys
• databases where practical
• generation budgets
• provider settings
• storage configuration
• policy settings

Sensitive credentials must never be exposed to browser-side JavaScript or committed to source control.

Examples:
SUPABASE_SERVICE_ROLE_KEY
OPENAI_API_KEY
PROVIDER_SECRET
GENERATION_API_KEY`,
  },
  {
    n: "27",
    title: "OBSERVABILITY",
    body: `Every production job requires searchable operational logging.

Record:
job_id
job_step
provider
provider_task_id
manifest_version
render_version
cost
duration
error
timestamp

Use:
• structured application logs
• Sentry
• Trigger.dev execution history`,
  },
  {
    n: "28",
    title: "COST CONTROL",
    body: `Every paid generation request must follow:
Check remaining budget
↓
Reserve expected cost
↓
Submit provider request
↓
Store provider task ID
↓
Wait for result
↓
Record actual cost
↓
Release unused reservation

Each paid request requires an idempotency key or equivalent protection to prevent duplicate provider submissions.`,
  },
  {
    n: "29",
    title: "OCTOBER BUILD ORDER",
    body: `WEEK 1 — FOUNDATION
Build:
• repository
• Next.js application
• authentication
• database
• private storage
• job creation
• campaign configuration
• media upload
• FFprobe inspection
• FFmpeg normalisation
Acceptance gate: An authorised user can create a private production job and ingest valid source media.

WEEK 2 — MEDIA PIPELINE
Build:
• presenter adapter
• B-roll provider adapter
• provider polling
• durable jobs
• provider output retrieval
• asset records
• transcription
• script comparison
• asset segment handling
Acceptance gate: The system can produce, retrieve and retain the media required to construct a complete advert.

WEEK 3 — EDIT ASSEMBLY
Build:
• script beat analysis
• Creative Manifest
• Zod validation
• Remotion composition
• captions
• audio/music handling
• CTA
• end frame
• FFmpeg final encoding
Acceptance gate: An approved script and approved media can produce an actual 9:16 MP4 automatically.

WEEK 4 — REVIEW AND HARDENING
Build:
• automated QA
• editor review page
• alternative asset replacement
• approve/reject workflow
• rejection reasons
• cost tracking
• error handling
• end-to-end testing
• staging deployment
Test against:
• primary campaign
• representative test scripts
• editor review criteria
Acceptance gate: An editor receives a usable first cut and does not have to rebuild the advert from scratch.`,
  },
  {
    n: "30",
    title: "ACCEPTANCE CRITERIA",
    body: `AC01 — An authorised user can create a production job.
AC02 — The job stores the approved script and campaign configuration.
AC03 — The system obtains or accepts presenter footage.
AC04 — The system searches existing approved assets before generating missing B-roll.
AC05 — Generated and reused assets are stored with provenance.
AC06 — Presenter audio is transcribed with word timing.
AC07 — The system produces a schema-valid Creative Manifest.
AC08 — Remotion successfully renders a vertical advert.
AC09 — The render includes presenter footage where required.
AC10 — The render includes supporting visuals.
AC11 — The render includes captions.
AC12 — The render includes configured audio/music.
AC13 — The render includes the required CTA.
AC14 — The render includes the required end frame.
AC15 — Automated QA executes and records results.
AC16 — The editor can preview the first cut.
AC17 — The editor can replace at least one weak supporting visual without rebuilding the advert.
AC18 — The editor can approve or reject the output.
AC19 — The system records provider costs and production job history.
AC20 — The system can identify which manifest and source assets produced each render.`,
  },
  {
    n: "31",
    title: "RECOMMENDED PILOT SUCCESS METRICS",
    body: `These are recommended engineering/pilot targets rather than requirements explicitly contained in the original overview.

First-cut timeline retention — ≥70% of automatically assembled timeline retained
Full rebuild rate — Editor should not normally rebuild the advert from zero
Normal editor correction time — Target ≤15–20 minutes
Normal test-job completion — Target ≥90% without engineering intervention
Cost visibility — 100% of paid provider operations attached to job cost records

Track:
cost/job
cost/provider
cost/usable generated asset
cost/approved first cut

A provider returning technically valid media is not itself a success condition. The output must be useful to production.`,
  },
  {
    n: "32",
    title: "OUT OF SCOPE FOR OCTOBER",
    body: `The following should not block October delivery:
• autonomous campaign strategy
• autonomous script writing
• autonomous claims creation
• custom AI model training
• neural-network training
• self-hosted video generation
• custom VLM development
• fully autonomous editing
• browser-based Premiere replacement
• full nonlinear browser editor
• automatic publishing
• broad multi-platform export
• unlimited advert variations
• large-scale analytics
• performance prediction
• reinforcement learning
• automatic ROAS optimisation
• large-scale semantic analysis of the entire historical media archive
• complex multi-agent production orchestration
• bespoke AI music generation`,
  },
  {
    n: "33",
    title: "RECOMMENDED SCOPE SIMPLIFICATIONS",
    body: `33.1 TwelveLabs
Defer unless the existing media volume proves normal metadata and semantic search insufficient.
Initial retrieval can use:
PostgreSQL metadata
+
asset descriptions
+
pgvector if required

33.2 Complex AI Policy Detection
Defer advanced AI-based policy checking.
October should primarily use:
• deterministic campaign rules
• configured mandatory copy
• configured visual restrictions
• human approval

33.3 Multiple Generation Providers
Do not introduce unnecessary provider complexity during the first pilot.
October should begin with:
1 working presenter workflow
+
1 B-roll generation/source workflow
+
existing approved asset library
Additional providers should only be introduced when testing identifies a measurable quality, cost or reliability requirement.

33.4 Advanced Browser Editing
Do not build a full editing environment.
Provide only the bounded controls required to review and correct a generated first cut.

33.5 Complex Multi-Agent Architecture
A sophisticated multi-agent production system should not be an October dependency.
The initial implementation can use a single structured planning layer responsible for producing a validated Creative Manifest.
The architecture should remain modular enough for specialist agents to be added later without replacing the renderer or core production contracts.`,
  },
  {
    n: "34",
    title: "MINIMUM OCTOBER PRODUCT",
    body: `The October product requires the following minimum capabilities:
1. Private login
2. Create production job
3. Approved script input
4. Campaign/product rules
5. Presenter generation or upload
6. B-roll library search
7. Missing B-roll generation/source
8. Private media storage
9. Transcription and word timing
10. Script beat analysis
11. Creative Manifest generation
12. Creative Manifest validation
13. Remotion rendering
14. Captions
15. Audio/music
16. CTA
17. End frame
18. MP4 export
19. Automated QA
20. Editor preview
21. Replace selected weak asset
22. Approve/reject
23. Cost tracking
24. Production history

Anything added beyond these capabilities should have a clear reason for being necessary to deliver or validate the October pilot.`,
  },
  {
    n: "35",
    title: "FINAL OCTOBER DELIVERABLE",
    body: `By 31 October, the following end-to-end demonstration must be possible:

Producer logs into Hyrax
↓
Chooses campaign/product
↓
Supplies approved script
↓
Starts production
↓
System obtains presenter footage
↓
System retrieves/generates supporting visuals
↓
System creates structured edit plan
↓
System validates edit plan
↓
System renders advert
↓
System adds captions/audio/CTA/end frame
↓
System performs QA
↓
Editor watches completed first cut
↓
Editor replaces weak shots if necessary
↓
Editor approves or rejects

The produced advert does not need to be publish-ready.

The October technical success criterion is:
The system must perform enough correct production and editorial assembly that an editor gains meaningful value from opening the generated first cut instead of starting from a blank editing timeline.

If the editor routinely discards the generated output and reconstructs the advert from scratch, the pilot has not met its primary objective.`,
  },
];

export function octoberSpecGoal(): Goal {
  return {
    id: SPEC_GOAL_ID,
    week: "w1",
    number: 1,
    title: "October 2026 Technical Specification, Scope of Work and Build Requirements",
    description:
      "HYRAX AI VIDEO PRODUCTION PILOT\nDocument purpose: Define the minimum technical system required to deliver the October pilot.\nPrimary acceptance date: 31 October 2026",
    notes: "",
    due: "2026-10-31",
    milestones: sections.map((section) => ({
      id: `w1-spec-${section.n}`,
      title: `${section.n}. ${section.title}`,
      status: "not_started" as const,
      due: "",
      notes: section.body.trim(),
    })),
  };
}

export function boardHasSpec(goals: { id: string }[]) {
  return goals.some((goal) => goal.id === SPEC_GOAL_ID);
}
