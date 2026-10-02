import type { Goal } from "@/lib/tracker";

export const GUIDE_GOAL_ID = "w1-october-guide";

const sections: { n: string; title: string; body: string }[] = [
  {
    n: "1",
    title: "SYSTEM ARCHITECTURE",
    body: `1.1 Core stack

Web application — Next.js + React + TypeScript
Job creation, status, asset review, render review, approvals

Authentication — Supabase Auth
Private user access and session management

Database — PostgreSQL via Supabase
Jobs, assets, manifests, approvals, costs, policies

Private media storage — Supabase Storage
Originals, proxies, thumbnails, renders, audio

Durable workflows — Trigger.dev
Generation, polling, download, transcription, analysis, rendering

Rendering — Remotion
Deterministic composition and timeline assembly

Media inspection — FFprobe
Duration, codec, resolution, frame rate, integrity

AI planning — Structured-output LLM
Script analysis, asset matching, Creative Manifest proposals

Schema validation — Zod
Validate AI and application contracts

Transcription — Whisper-compatible / ElevenLabs
Transcript and word-level timing

Source control — GitHub
Repository and pull requests

CI — GitHub Actions
Type checks, linting, tests

Monitoring — Sentry + structured logs
Application and job failure visibility`,
  },
  {
    n: "2",
    title: "HIGH-LEVEL PROCESS",
    body: `User creates job
↓
Job validated
↓
Presenter obtained/generated
↓
Existing assets searched
↓
Missing assets generated
↓
Media inspected + normalised
↓
Presenter transcribed
↓
Script alignment check
↓
Asset segments identified
↓
Creative Manifest generated
↓
Manifest validated
↓
Remotion render
↓
Automated QA
↓
Editor review
↓
Approve / replace asset / reject`,
  },
  {
    n: "3",
    title: "CORE DATA MODEL",
    body: `The minimum database model should contain the following entities.

users
campaigns
campaign_policy_versions
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
cost_ledger`,
  },
  {
    n: "4",
    title: "CAMPAIGN",
    body: `Represents the approved campaign or product configuration.

Schema
type Campaign = {
  id: string;
  name: string;
  productName?: string;
  status: "ACTIVE" | "INACTIVE";
  createdAt: string;
  updatedAt: string;
};

Database:
campaigns
id uuid primary key
name text not null
product_name text null
status text not null
created_at timestamptz not null
updated_at timestamptz not null`,
  },
  {
    n: "5",
    title: "CAMPAIGN POLICY VERSION",
    body: `Campaign rules must be versioned.
A job should point to a specific policy version rather than whichever version happens to be current later.

type CampaignPolicyVersion = {
  id: string;
  campaignId: string;
  version: number;
  targetAudience?: string;
  approvedMessaging: string[];
  prohibitedMessaging: string[];
  requiredCopy: string[];
  prohibitedVisuals: string[];
  cta: {
    text: string;
    destination?: string;
    minimumDurationSeconds?: number;
  };
  brand: {
    logoAssetId?: string;
    fontFamily?: string;
    primaryColour?: string;
    captionPreset?: string;
    endFramePreset?: string;
  };
  approvalRoles: string[];
  createdAt: string;
};`,
  },
  {
    n: "6",
    title: "JOB",
    body: `The Job is the central production record.

Schema
type JobStatus =
  | "DRAFT"
  | "READY"
  | "ASSET_GENERATION"
  | "ASSET_ANALYSIS"
  | "EDIT_PLANNING"
  | "RENDERING"
  | "QA"
  | "EDITOR_REVIEW"
  | "APPROVED"
  | "REJECTED"
  | "FAILED"
  | "CANCELLED";

type Job = {
  id: string;
  campaignId: string;
  campaignPolicyVersionId: string;
  scriptText: string;
  scriptVersion: string;
  presenterWorkflow: string;
  visualBrief?: string;
  referenceAssetIds?: string[];
  targetDurationSeconds: number;
  width: number;
  height: number;
  fps: number;
  budgetCap: number;
  currency: string;
  status: JobStatus;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
};

Default pilot format:
width = 1080
height = 1920
fps = 30
aspect ratio = 9:16
target duration ≈ 30 seconds`,
  },
  {
    n: "7",
    title: "JOB STEPS",
    body: `Each long-running production stage requires its own persistent state.

type JobStepStatus =
  | "PENDING"
  | "QUEUED"
  | "RUNNING"
  | "WAITING_EXTERNAL"
  | "COMPLETED"
  | "FAILED"
  | "CANCELLED";

type JobStep = {
  id: string;
  jobId: string;
  type:
    | "PRESENTER"
    | "ASSET_SEARCH"
    | "BROLL_GENERATION"
    | "MEDIA_INSPECTION"
    | "TRANSCRIPTION"
    | "ASSET_ANALYSIS"
    | "MANIFEST"
    | "RENDER"
    | "QA";
  status: JobStepStatus;
  attemptCount: number;
  startedAt?: string;
  completedAt?: string;
  errorCode?: string;
  errorMessage?: string;
  metadata?: Record<string, unknown>;
};

The browser must never be the holder of workflow state.
All state persists in PostgreSQL.`,
  },
  {
    n: "8",
    title: "ASSET",
    body: `An Asset represents a complete media file.

type AssetType =
  | "PRESENTER_VIDEO"
  | "BROLL_VIDEO"
  | "IMAGE"
  | "AUDIO"
  | "MUSIC"
  | "SFX"
  | "LOGO"
  | "CTA"
  | "END_FRAME";

type Asset = {
  id: string;
  jobId?: string;
  campaignId?: string;
  type: AssetType;
  source: "UPLOAD" | "INTERNAL_LIBRARY" | "GENERATED" | "STOCK";
  provider?: string;
  providerTaskId?: string;
  originalStoragePath: string;
  proxyStoragePath?: string;
  thumbnailStoragePath?: string;
  prompt?: string;
  recipe?: Record<string, unknown>;
  durationSeconds?: number;
  width?: number;
  height?: number;
  fps?: number;
  videoCodec?: string;
  audioCodec?: string;
  rightsStatus: "UNKNOWN" | "APPROVED" | "RESTRICTED" | "EXPIRED";
  approvalStatus: "PENDING" | "APPROVED" | "REJECTED";
  cost?: number;
  currency?: string;
  description?: string;
  tags?: string[];
  createdAt: string;
};`,
  },
  {
    n: "9",
    title: "ASSET SEGMENT",
    body: `The system must select exact usable portions of footage.

type AssetSegment = {
  id: string;
  assetId: string;
  startSeconds: number;
  endSeconds: number;
  description?: string;
  approvalStatus: "PENDING" | "APPROVED" | "REJECTED";
  rightsStatus: "APPROVED" | "RESTRICTED" | "UNKNOWN";
  generatedBy: "AI" | "EDITOR" | "SYSTEM";
  createdAt: string;
};

Example:
asset_789
duration = 30 seconds
segment_1 — 03.20 → 05.40
segment_2 — 12.70 → 14.10

Only approved segments may automatically enter the final Creative Manifest.`,
  },
  {
    n: "10",
    title: "PROVIDER ATTEMPT",
    body: `Every provider API operation must be independently recorded.

type ProviderAttempt = {
  id: string;
  jobId: string;
  jobStepId: string;
  provider: string;
  operation: "GENERATE" | "TRANSCRIBE" | "ANALYSE" | "DOWNLOAD";
  requestHash: string;
  idempotencyKey: string;
  providerTaskId?: string;
  status: "SUBMITTED" | "PROCESSING" | "COMPLETED" | "FAILED" | "CANCELLED";
  expectedCost?: number;
  actualCost?: number;
  submittedAt: string;
  completedAt?: string;
  errorCode?: string;
  errorMessage?: string;
  outputAssetId?: string;
};

This prevents provider operations from becoming invisible black boxes, humanity having already invented enough of those.`,
  },
  {
    n: "11",
    title: "COST LEDGER",
    body: `Every paid operation must create a cost record.

type CostLedgerEntry = {
  id: string;
  jobId: string;
  providerAttemptId?: string;
  type: "RESERVATION" | "ACTUAL" | "RELEASE" | "ADJUSTMENT";
  amount: number;
  currency: string;
  createdAt: string;
};

Before a paid provider submission:
current actual spend
+
current reserved spend
+
estimated new operation
<= job budget cap

If false:
STOP
→ mark job step blocked
→ require authorised intervention`,
  },
  {
    n: "12",
    title: "PROVIDER ADAPTER CONTRACT",
    body: `All media providers must use a common application interface.

interface MediaProviderAdapter<TInput, TResult> {
  submit(
    input: TInput,
    context: { jobId: string; idempotencyKey: string; }
  ): Promise<{ providerTaskId: string; estimatedCost?: number; }>;

  getStatus(providerTaskId: string): Promise<"QUEUED" | "PROCESSING" | "COMPLETED" | "FAILED">;

  getResult(providerTaskId: string): Promise<TResult>;

  cancel?(providerTaskId: string): Promise<void>;
}

Adapters may include:
FloyoAdapter
PresenterProviderAdapter
BrollProviderAdapter
TranscriptionAdapter
AIProviderAdapter

Application code must not contain provider-specific logic outside these adapters.`,
  },
  {
    n: "13",
    title: "MEDIA STORAGE STRUCTURE",
    body: `Use private object storage.

Recommended structure:
/campaigns
  /{campaignId}
    /brand
      logos/
      fonts/
      cta/
      end-frames/
    /jobs
      /{jobId}
        /source
          presenter/
          uploads/
        /generated
          presenter/
          broll/
          images/
        /proxies/
        /thumbnails/
        /audio
          presenter/
          music/
          sfx/
        /transcripts/
        /manifests/
        /renders
          /v1/
          /v2/
          /v3/
        /qa/

Example:
campaigns/cmp_001/jobs/job_045/renders/v3/advert.mp4`,
  },
  {
    n: "14",
    title: "STORAGE RULES",
    body: `Originals
Original files must be immutable.
Never overwrite:
source/
generated/
Create new objects instead.

Derivatives
May be regenerated but require versioning where output matters.
Examples:
proxy_v1.mp4
thumbnail_v1.jpg
render_v3.mp4

Access
All production media buckets remain private.
Browser access should use a short-lived signed URL rather than public storage URLs.`,
  },
  {
    n: "15",
    title: "API DESIGN",
    body: `The public application API should expose only the operations required by the UI.
Provider API operations should generally remain internal worker operations.`,
  },
  {
    n: "16",
    title: "JOB APIs",
    body: `Create Job
POST /api/jobs

Request:
{
  "campaignId": "cmp_001",
  "campaignPolicyVersionId": "policy_003",
  "scriptText": "Approved script...",
  "scriptVersion": "v1",
  "presenterWorkflow": "floyo",
  "visualBrief": "Fast social advert...",
  "targetDurationSeconds": 30,
  "budgetCap": 25
}

Response:
{ "id": "job_001", "status": "DRAFT" }

Get Job
GET /api/jobs/{jobId}

Start Production
POST /api/jobs/{jobId}/start

Validation before start:
campaign exists
policy exists
script present
budget present
presenter workflow selected
required campaign configuration present

Success: DRAFT → READY
Trigger durable production workflow.

Get Job Status
GET /api/jobs/{jobId}/status

Response:
{
  "status": "ASSET_GENERATION",
  "steps": [
    { "type": "PRESENTER", "status": "COMPLETED" },
    { "type": "BROLL_GENERATION", "status": "RUNNING" }
  ]
}`,
  },
  {
    n: "17",
    title: "ASSET APIs",
    body: `Create Upload URL
POST /api/assets/upload-url

Request:
{
  "jobId": "job_001",
  "fileName": "presenter.mp4",
  "assetType": "PRESENTER_VIDEO"
}

Response:
{ "signedUploadUrl": "...", "storagePath": "..." }

Register Uploaded Asset
POST /api/assets

Get Job Assets
GET /api/jobs/{jobId}/assets

Optional filters:
type
approvalStatus
rightsStatus
source

Approve Asset
POST /api/assets/{assetId}/approve

Reject Asset
POST /api/assets/{assetId}/reject`,
  },
  {
    n: "18",
    title: "MANIFEST APIs",
    body: `Generate Manifest
Generally triggered internally through the production workflow.

Manual retry endpoint:
POST /api/jobs/{jobId}/manifest/generate

Get Current Manifest
GET /api/jobs/{jobId}/manifest

Validate Manifest
POST /api/jobs/{jobId}/manifest/validate`,
  },
  {
    n: "19",
    title: "RENDER APIs",
    body: `Start Render
POST /api/jobs/{jobId}/render
Normally invoked automatically after manifest validation.

Render Status
GET /api/jobs/{jobId}/render`,
  },
  {
    n: "20",
    title: "REVIEW APIs",
    body: `Submit Review Decision
POST /api/jobs/{jobId}/review

Request:
{
  "decision": "REJECT",
  "reason": "Opening B-roll is not relevant enough."
}

Replace Visual
POST /api/jobs/{jobId}/events/{eventId}/asset

Request:
{ "assetSegmentId": "segment_201" }

Result:
manifest version increments
↓
new render created
↓
previous render retained`,
  },
  {
    n: "21",
    title: "CREATIVE MANIFEST",
    body: `The Creative Manifest is the primary contract between creative planning and deterministic rendering.

It must be:
structured
versioned
schema validated
human inspectable
reproducible`,
  },
  {
    n: "22",
    title: "CREATIVE MANIFEST SCHEMA",
    body: `Recommended top-level contract:

type CreativeManifest = {
  id: string;
  version: number;
  jobId: string;
  format: {
    width: number;
    height: number;
    fps: number;
    durationSeconds: number;
  };
  events: ManifestEvent[];
  audio: ManifestAudio;
  captions: CaptionConfiguration;
  endFrame?: EndFrameConfiguration;
  createdBy: "AI" | "EDITOR" | "SYSTEM";
  model?: {
    provider: string;
    model: string;
    configurationVersion: string;
  };
  createdAt: string;
};`,
  },
  {
    n: "23",
    title: "MANIFEST EVENT",
    body: `type ManifestEvent = {
  id: string;
  timelineStart: number;
  timelineEnd: number;
  type: "PRESENTER" | "BROLL" | "IMAGE" | "TEXT" | "CTA" | "TRANSITION";
  assetSegmentId?: string;
  sourceIn?: number;
  sourceOut?: number;
  framing?: {
    mode: "COVER" | "CONTAIN" | "CROP";
    x?: number;
    y?: number;
    scale?: number;
  };
  motion?: {
    preset: "NONE" | "ZOOM_IN" | "ZOOM_OUT" | "PAN_LEFT" | "PAN_RIGHT";
  };
  overlay?: { text?: string; preset?: string; };
  alternatives?: string[];
};`,
  },
  {
    n: "24",
    title: "CAPTION CONFIGURATION",
    body: `type CaptionConfiguration = {
  enabled: boolean;
  preset: string;
  maxLines: number;
  position: "TOP" | "CENTRE" | "BOTTOM";
  words: {
    text: string;
    start: number;
    end: number;
    emphasis?: boolean;
  }[];
};

The renderer should consume caption styling from approved presets.
The AI may indicate emphasis but should not invent arbitrary CSS.`,
  },
  {
    n: "25",
    title: "AUDIO MANIFEST",
    body: `type ManifestAudio = {
  speechAssetId: string;
  music?: {
    assetId: string;
    start: number;
    end?: number;
    gainDb: number;
    duckUnderSpeech: boolean;
  };
  sfx?: {
    assetId: string;
    timelineStart: number;
    gainDb: number;
  }[];
};`,
  },
  {
    n: "26",
    title: "CTA / END FRAME",
    body: `type EndFrameConfiguration = {
  preset: string;
  durationSeconds: number;
  headline?: string;
  subText?: string;
  buttonText?: string;
  logoAssetId?: string;
  mandatoryCopy?: string[];
};

CTA text must come from approved campaign configuration.`,
  },
  {
    n: "27",
    title: "MANIFEST VALIDATION",
    body: `Validation happens in two stages.

Stage 1: Schema validation
Zod validates:
required properties
types
enums
nested structure
timing fields

Stage 2: Business validation
Custom validation checks:
all referenced assets exist
all segments approved
rights valid
timeline events do not exceed duration
source in/out values valid
no invalid negative timings
required CTA exists
mandatory copy exists
approved campaign policy version matches job

Failure:
Creative Manifest does not reach renderer`,
  },
  {
    n: "28",
    title: "SCRIPT ANALYSIS FLOW",
    body: `Input:
approved script
visual brief
campaign policy
target duration
reference information

LLM returns:
{
  "beats": [
    {
      "id": "beat_01",
      "startEstimate": 0,
      "endEstimate": 4,
      "purpose": "hook",
      "visualNeed": "presenter plus visual interruption",
      "keywords": ["problem", "reaction"]
    }
  ]
}

This output is validated before asset matching begins.`,
  },
  {
    n: "29",
    title: "ASSET RETRIEVAL FLOW",
    body: `For every script beat:
Generate visual requirement
↓
Search approved asset library
↓
Apply rights filter
↓
Apply campaign restriction filter
↓
Rank suitable asset segments
↓
Suitable asset found?
YES → Use approved segment
NO → Create generation requirement

Rights filtering occurs before creative ranking.
A perfect clip with invalid rights must never be selected.`,
  },
  {
    n: "30",
    title: "TRANSCRIPTION FLOW",
    body: `Presenter asset
↓
Extract/submit audio
↓
Speech-to-text
↓
Receive transcript
↓
Receive word timings
↓
Compare with approved script

Mismatch categories:
LOW — punctuation / harmless speech variation
MEDIUM — minor wording change
HIGH — offer, price, name, product detail, CTA, required claim

Recommended behaviour:
LOW → continue
MEDIUM → flag
HIGH → stop job and require review`,
  },
  {
    n: "31",
    title: "RENDERING FLOW",
    body: `Validated Creative Manifest
↓
Resolve source assets
↓
Validate storage availability
↓
Create Remotion input props
↓
Load composition
↓
Generate frames
↓
Render composition
↓
Upload rendered MP4
↓
Create Render record
↓
Run QA`,
  },
  {
    n: "32",
    title: "REMOTION INPUT CONTRACT",
    body: `type RenderInput = {
  jobId: string;
  manifestVersion: number;
  width: number;
  height: number;
  fps: number;
  durationInFrames: number;
  events: ManifestEvent[];
  captions: CaptionConfiguration;
  audio: ManifestAudio;
  endFrame?: EndFrameConfiguration;
};

Do not pass arbitrary AI output directly into Remotion.
Only validated application contracts may enter the renderer.`,
  },
  {
    n: "33",
    title: "RENDER VERSIONING",
    body: `Every render gets a new immutable version.
render_v1
render_v2
render_v3

type Render = {
  id: string;
  jobId: string;
  version: number;
  manifestVersion: number;
  applicationVersion: string;
  rendererVersion: string;
  storagePath: string;
  status: "QUEUED" | "RENDERING" | "COMPLETED" | "FAILED";
  startedAt?: string;
  completedAt?: string;
  errorMessage?: string;
};

This allows any advert output to be traced back to:
application version
renderer version
manifest version
assets
campaign policy`,
  },
  {
    n: "34",
    title: "AUTOMATED QA",
    body: `QA occurs after rendering.

Recommended checks:
render exists
video decodes
duration within configured tolerance
resolution correct
aspect ratio correct
audio stream exists
audio not entirely silent
audio peak not clipped
caption events present
captions within safe area
CTA present
CTA duration valid
mandatory copy present
no missing asset references
no obvious black-frame runs`,
  },
  {
    n: "35",
    title: "QA RESULT",
    body: `type QAResult = {
  id: string;
  jobId: string;
  renderId: string;
  rule: string;
  severity: "INFO" | "WARNING" | "BLOCKER";
  status: "PASS" | "FAIL";
  details?: string;
  createdAt: string;
};

Any BLOCKER + FAIL prevents the render from being marked release-approved.`,
  },
  {
    n: "36",
    title: "AUTHENTICATION",
    body: `Use Supabase Auth.

For October:
email/password
or
magic link

SSO can be added later if required.`,
  },
  {
    n: "37",
    title: "AUTHORISATION",
    body: `Recommended application roles:

Producer — Create jobs, upload assets, start production
Editor — Review cuts, replace assets, reject/approve editorial output
Release Owner — Brand/policy/release approval
Admin — Campaign, users, configuration, provider administration

Use PostgreSQL Row-Level Security.
Users must only access:
authorised campaign data
authorised jobs
authorised assets
authorised renders`,
  },
  {
    n: "38",
    title: "BACKGROUND WORKFLOW",
    body: `Main Trigger.dev workflow: production-job

Recommended sequence:
validate-job
↓
prepare-presenter
↓
search-assets
↓
generate-missing-assets
↓
inspect-media
↓
transcribe-presenter
↓
verify-script
↓
analyse-assets
↓
generate-manifest
↓
validate-manifest
↓
render
↓
run-qa
↓
release-to-editor-review

Each task must be individually retryable where safe.`,
  },
  {
    n: "39",
    title: "RETRY POLICY",
    body: `Not all failures should be retried.

Automatically retry
Examples:
HTTP 429
temporary 5xx
network timeout
provider status-read failure
temporary storage read failure

Recommended policy:
Attempt 1
↓
30 seconds
↓
Attempt 2
↓
2 minutes
↓
Attempt 3
↓
5 minutes
↓
FAIL

Exact timings may be tuned per provider.`,
  },
  {
    n: "40",
    title: "DO NOT AUTOMATICALLY RETRY",
    body: `Do not retry:
policy refusal
invalid request
unsupported file
authentication failure
insufficient budget
rights failure
schema validation failure
invalid Creative Manifest

These require a corrected input or human decision.`,
  },
  {
    n: "41",
    title: "IDEMPOTENCY",
    body: `Any paid or irreversible operation must have an idempotency key.

Example:
job_123:broll-generation:beat_04:v1

Before provider submission:
Look up existing ProviderAttempt
↓
Exists?
YES → Resume/check existing task
NO → Submit new request

A timeout does not mean: “Submit another video generation and hope accounting never notices.”`,
  },
  {
    n: "42",
    title: "PROVIDER POLLING",
    body: `When provider returns asynchronous task ID:
submit()
↓
save provider task ID immediately
↓
mark WAITING_EXTERNAL
↓
poll getStatus()
↓
COMPLETED?
↓
retrieve output

Never wait synchronously inside an HTTP browser request for long-running generation.`,
  },
  {
    n: "43",
    title: "ERROR MODEL",
    body: `Recommended structured application error:

type ApplicationError = {
  code: string;
  category: "VALIDATION" | "PROVIDER" | "MEDIA" | "STORAGE" | "RENDER" | "AUTH" | "POLICY" | "BUDGET" | "SYSTEM";
  retryable: boolean;
  message: string;
  providerCode?: string;
  context?: Record<string, unknown>;
};

Example codes:
JOB_INVALID_CONFIGURATION
PROVIDER_TIMEOUT
PROVIDER_RATE_LIMITED
MEDIA_CORRUPT
MEDIA_UNSUPPORTED_CODEC
TRANSCRIPT_SCRIPT_MISMATCH
ASSET_RIGHTS_INVALID
MANIFEST_SCHEMA_INVALID
MANIFEST_ASSET_MISSING
BUDGET_EXCEEDED
RENDER_FAILED
QA_BLOCKER_FAILED`,
  },
  {
    n: "44",
    title: "FAILURE BEHAVIOUR",
    body: `If a job stage fails:
mark job step FAILED
↓
store structured error
↓
retain completed previous steps
↓
do not delete successful assets
↓
display failure in UI
↓
allow safe retry where permitted

The whole production job should not restart from zero unless technically required.`,
  },
  {
    n: "45",
    title: "LOGGING",
    body: `Every important operation should log:
timestamp
jobId
jobStepId
userId where applicable
provider
providerTaskId
manifestVersion
renderVersion
operation
duration
cost
status
errorCode

Never log:
API secrets
authentication tokens
private credentials
full sensitive provider responses`,
  },
  {
    n: "46",
    title: "MONITORING",
    body: `Minimum monitoring:
application exceptions
failed workflows
render failures
provider failures
job duration
provider latency
budget failures
storage failures

Use Sentry for application error tracking.
Trigger.dev provides workflow execution visibility.`,
  },
  {
    n: "47",
    title: "DEPLOYMENT ARCHITECTURE",
    body: `Recommended:

Vercel
↓
Next.js application

Supabase
↓
PostgreSQL
Authentication
Storage

Trigger.dev
↓
Durable workflow execution

Render environment
↓
Remotion
FFprobe

Do not make long-running video rendering dependent on a standard short-lived web request.`,
  },
  {
    n: "48",
    title: "ENVIRONMENTS",
    body: `Maintain:
development
staging
production

Each environment should use independent configuration.
At minimum separate:
provider credentials
application URLs
budgets
storage paths
database configuration
webhooks
AI configuration`,
  },
  {
    n: "49",
    title: "SECRETS",
    body: `Secrets must use managed environment secrets.

Examples:
SUPABASE_SERVICE_ROLE_KEY
OPENAI_API_KEY
TRANSCRIPTION_API_KEY
UGC_PROVIDER_API_KEY
BROLL_PROVIDER_API_KEY
TRIGGER_SECRET_KEY

Secrets must never appear in:
frontend bundle
Git repository
Creative Manifest
database records
logs`,
  },
  {
    n: "50",
    title: "CI/CD",
    body: `GitHub Actions pipeline:
Pull Request
↓
Install
↓
Lint
↓
TypeScript type check
↓
Unit tests
↓
Build
↓
Optional Playwright tests
↓
Merge
↓
Deploy staging

Production deployment should require successful staging smoke testing.`,
  },
  {
    n: "51",
    title: "UNIT TESTS",
    body: `Vitest should cover:
Zod schemas
Creative Manifest validation
budget calculations
provider adapter behaviour
idempotency
job state transitions
rights filtering
asset selection utilities
caption timing
CTA validation
media metadata utilities`,
  },
  {
    n: "52",
    title: "INTEGRATION TESTS",
    body: `Test against real services where practical:
Supabase
Trigger.dev
one presenter provider
one B-roll provider
transcription service
Remotion render worker
storage upload/download`,
  },
  {
    n: "53",
    title: "END-TO-END TESTS",
    body: `Playwright should cover:
login
create job
upload media
start job
view status
open first cut
review QA
replace asset
reject render
approve render
permission restrictions`,
  },
  {
    n: "54",
    title: "REQUIRED STATE TRANSITIONS",
    body: `DRAFT
↓
READY
↓
ASSET_GENERATION
↓
ASSET_ANALYSIS
↓
EDIT_PLANNING
↓
RENDERING
↓
QA
↓
EDITOR_REVIEW
↓
APPROVED

Alternative paths:
any active state → FAILED
EDITOR_REVIEW → REJECTED
REJECTED → EDIT_PLANNING or RENDERING
depending on the correction required.`,
  },
  {
    n: "55",
    title: "STATE TRANSITION RULES",
    body: `A job cannot enter ASSET_GENERATION unless:
script valid
campaign policy valid
budget valid
presenter workflow valid

EDIT_PLANNING unless:
presenter available
required media available
transcription complete
rights checks complete

RENDERING unless:
Creative Manifest validated
all referenced assets exist
all referenced segments permitted

EDITOR_REVIEW unless:
render completed
QA completed
no unresolved blocking technical failure

APPROVED unless:
required editor/release approvals recorded`,
  },
  {
    n: "56",
    title: "EDITOR CORRECTION FLOW",
    body: `Example visual replacement:
Editor opens review
↓
Selects weak B-roll event
↓
System shows approved alternatives
↓
Editor selects replacement
↓
New Creative Manifest version created
↓
Only affected render configuration changes
↓
New render generated
↓
QA reruns

History must retain:
old manifest
new manifest
old render
new render
editor decision
reason
timestamp`,
  },
  {
    n: "57",
    title: "REVIEW DECISION",
    body: `type ReviewDecision = {
  id: string;
  jobId: string;
  renderId: string;
  userId: string;
  decision: "APPROVE" | "REJECT" | "REQUEST_CHANGE";
  reason?: string;
  createdAt: string;
};`,
  },
  {
    n: "58",
    title: "APPROVAL",
    body: `type Approval = {
  id: string;
  jobId: string;
  renderId: string;
  type: "EDITOR" | "BRAND" | "POLICY" | "RELEASE";
  approvedBy: string;
  status: "APPROVED" | "REJECTED";
  reason?: string;
  createdAt: string;
};`,
  },
  {
    n: "59",
    title: "OCTOBER IMPLEMENTATION PRIORITY",
    body: `Priority 1: Must work
authentication
job creation
campaign policy
asset upload
presenter pipeline
B-roll pipeline
storage
transcription
Creative Manifest
Remotion renderer
captions
audio
CTA/end frame
QA
editor review
cost tracking

Priority 2: Useful but may simplify
semantic search
automatic segment suggestions
advanced rights UI
advanced bounded timeline controls
AI policy review

Priority 3: Later
multiple generation providers
self-hosted models
complex multi-agent system
large-scale embedding infrastructure
automatic performance optimisation
publishing
cross-platform version generation`,
  },
  {
    n: "60",
    title: "OCTOBER TECHNICAL ACCEPTANCE TEST",
    body: `A successful end-to-end test must prove:
1. User authenticates.
2. User creates a production job.
3. Approved script and campaign policy are stored.
4. Presenter footage is obtained.
5. Existing B-roll is searched.
6. Missing media is generated or sourced.
7. Media is normalised and inspected.
8. Presenter is transcribed.
9. Script mismatches are detected.
10. Approved media segments are selected.
11. Creative Manifest is generated.
12. Creative Manifest passes schema validation.
13. Creative Manifest passes business validation.
14. Remotion consumes the manifest.
15. A 1080×1920 advert is rendered.
16. Captions are included.
17. Music/audio are included.
18. CTA/end frame are included.
19. Automated QA executes.
20. Editor receives the first cut.
21. Editor can replace a weak visual.
22. A revised manifest/render can be produced.
23. Editor can approve or reject.
24. Costs, source assets, decisions and versions remain traceable.`,
  },
  {
    n: "61",
    title: "FINAL IMPLEMENTATION PRINCIPLE",
    body: `The architecture must preserve the following separation:

AI = propose and structure creative decisions
Application = validate permissions, policy and state
Remotion = execute the edit deterministically
Human editor = judge quality and make bounded corrections
Release owner = approve where required

The October pilot should therefore produce a narrow but complete production system rather than a partially built collection of AI experiments.

The first implementation succeeds when the entire production path works predictably, failures are recoverable, every consequential decision is traceable, and the resulting first cut is useful enough that an editor prefers correcting it to rebuilding the advert from scratch.`,
  },
];

export function octoberGuideGoal(): Goal {
  return {
    id: GUIDE_GOAL_ID,
    week: "w1",
    number: 2,
    title: "Technical Specification / Implementation Build Guide",
    description:
      "HYRAX AI VIDEO PRODUCTION PILOT\nTarget: October 2026 pilot\nPrimary objective: Approved script → generated/retrieved media → structured edit plan → rendered first-cut advert → QA → editor review.",
    notes: "",
    due: "2026-10-31",
    milestones: sections.map((section) => ({
      id: `w1-guide-${section.n}`,
      title: `${section.n}. ${section.title}`,
      status: "not_started" as const,
      due: "",
      notes: section.body.trim(),
    })),
  };
}
