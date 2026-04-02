# **SBI // FIELD ARCHIVE (SBI-FA) — REVISED SYSTEM SPEC**

### _Public Interface Node — Structured Record Access Layer_

---

## 1. CORE SHIFT (IMPORTANT)

**Before:** Archive of reports
**Now:** Hybrid between:

- Field Archive
- Government Record System
- Case File Database

Users are no longer just browsing reports.

> They are querying structured records and opening **case-linked field reports**.

---

## 2. VISUAL SYSTEM (TEXT-ONLY, HARD RULE)

### **ABSOLUTE CONSTRAINTS**

- ❌ No images

- ❌ No illustrations

- ❌ No icons (unless ASCII/text-based)

- ❌ No decorative visuals

- ✅ Text

- ✅ Lines

- ✅ Spacing

- ✅ Alignment

- ✅ Subtle color shifts

---

## 3. VISUAL LANGUAGE (BASED ON YOUR REFERENCE)

### **A. BACKGROUND**

- Muted green base (primary identity now)
  - #7FA98A (base)
  - Slight noise/grain overlay (very subtle)

Alternative modes (future):

- Terminal dark
- Paper off-white

---

### **B. TYPOGRAPHY (CRITICAL)**

Everything hinges on this.

**Primary font:**

- Monospace or mono-adjacent
  - IBM Plex Mono
  - Or a slightly imperfect mono

**Optional secondary (very sparingly):**

- Serif for section titles ONLY

---

### **C. GRID + ALIGNMENT**

This is the core aesthetic:

- Multi-column data alignment
- Left/right anchored text blocks
- Large empty gaps
- “Floating fields”

Think:

> Structured chaos that still feels deliberate

---

### **D. LINEWORK**

Use lines as primary visual separators:

```
────────────────────────────────────────
```

- Thin
- Slightly faded
- Used frequently

---

### **E. TEXT STYLING**

- ALL CAPS for labels
- Mixed case for values
- Underscores for system labels:
  - `INIT_RETRIEVAL_SEQ`
  - `SYS_STATUS`

- Occasional bracket syntax:
  - `[ACTIVE]`
  - `[REDACTED]`

---

### **F. MICRO DETAILS**

- Timestamp always visible
- System labels always present
- Slight misalignment (intentional)
- Occasional “human” fields mixed with system fields

---

## 4. HOMEPAGE STRUCTURE (REBUILT)

---

### **[A] SYSTEM HEADER BAR (PERSISTENT)**

Top of screen:

```
SBI FIELD ARCHIVE (SBI-FA)                SEC.CLR: LEVEL_4    SYS_TIME: 09:33:35
──────────────────────────────────────────────────────────────────────────────
```

- Time updates live
- Clearance static or playful

---

### **[B] BOOT SEQUENCE BLOCK**

```
> INIT_RETRIEVAL_SEQ // PROTOCOL 7A
> ESTABLISHING SECURE CONNECTION...
> AUTHENTICATION OVERRIDE ACCEPTED
> QUERY: FIELD_ARCHIVE_INDEX
> PULLING RECORDS: ACTIVE SET
```

**Behavior:**

- Types in on load
- Can be skipped after first visit

---

### **[C] FILTER / QUERY BAR**

Instead of “filters” → make it a system query:

```
STATUS:   ALL   ACTIVE   ARCHIVED   REDACTED
DIVISION: ANY   APPLIED   EXPLORATION   ENUMERATION
TYPE:     ALL   PROTOCOL   SYSTEM   INTERFACE
```

- Underline selected
- Clicking updates results instantly
- No dropdowns

---

### **[D] RECORD LIST (MAJOR CHANGE)**

Instead of “cards” → **structured record rows**

Each entry feels like a **case file summary**

---

### Example Record Entry

```
04 02 2026        SBI-FA-001            PROTOCOL
DAOhaus           Distributed Coordination System

STATUS: ACTIVE     ORIGIN: FIELD DEPLOYMENT     INSTANCES: 1000+

A coordination substrate enabling decentralized organizational formation.

→ OPEN RECORD
──────────────────────────────────────────────────────────────────────────────
```

---

### Key Differences from Previous Version

- No boxes/cards
- Everything sits directly on background
- Alignment does the work
- Feels like a database printout

---

## 5. REPORT PAGE (NOW = CASE FILE + FIELD REPORT)

This is where your reference image REALLY shines.

We merge:

- Structured data block
- Narrative report sections

---

# **[REPORT VIEW — STRUCTURE]**

---

### **[A] SYSTEM HEADER (SAME AS HOME)**

Persistent

---

### **[B] CASE METADATA BLOCK**

This mimics your reference layout:

```
REPORT ID        SBI-FA-001
SUBJECT          DAOhaus
CLASSIFICATION   DISTRIBUTED COORDINATION PROTOCOL
STATUS           ACTIVE

DEPLOYMENT TYPE  PERMISSIONLESS
ORIGIN           ETHEREUM NETWORK
INSTANCES        1000+

PRIMARY FUNCTION ORGANIZATIONAL GOVERNANCE + TREASURY MANAGEMENT
```

Then a divider:

```
──────────────────────────────────────────────────────────────────────────────
```

---

### **[C] FIELD REPORT CONTENT (CLEAN + TIGHT)**

#### OVERVIEW

DAOhaus is a coordination framework built on Moloch DAO contracts. It enables groups to form, govern, and allocate capital without centralized control. The system standardizes organizational logic into deployable infrastructure.

---

#### SYSTEM COMPONENTS

Moloch Contract Layer
Encodes governance logic (proposals, voting, shares, ragequit)

Summoner Factory
Deploys new DAOs with predefined configurations

Data Indexing Layer
Transforms on-chain activity into queryable state

Interface Layer
Exposes governance flows to participants

Treasury Mechanisms
Manages pooled capital and controlled disbursement

---

#### INTERPRETATION

DAOhaus reduces coordination to a repeatable system primitive. Organizations are no longer assembled manually—they are instantiated.

The constraint-driven design of Moloch DAOs favors clarity and exit over complexity and negotiation. This produces systems that are brittle in some conditions, but highly scalable in others.

The pattern suggests a broader shift: coordination mechanisms becoming infrastructure rather than culture.

---

#### STATUS

```
SYSTEM STATUS: ACTIVE
ADOPTION: WIDESPREAD
STABILITY: HIGH
RISK PROFILE: GOVERNANCE DEPENDENT
```

---

### **[D] OPTIONAL “SYSTEM LOG” (FUTURE ADD)**

This would be powerful later:

```
> INSTANCE COUNT INCREASING
> PROPOSAL FAILURE RATES VARIABLE
> TREASURY DRAIN EVENTS: ISOLATED
```

---

## 6. INTERACTION DESIGN

### Core Principles

- No flashy UI
- Everything feels _deliberate and procedural_

---

### Behaviors

- Hover:
  - Underline or slight brightness shift

- Click:
  - 150–300ms delay (feels like system load)

- Transitions:
  - Hard cuts or minimal fades

---

### Optional Enhancement

**Fake latency injection**

- Opening report takes 300–800ms
- Shows:

  ```
  > LOADING RECORD...
  ```

---

## 7. BRAND LANGUAGE (REFINED)

Lean harder into system tone:

- “Open Record” (not view)
- “Query” (not filter)
- “Instance” (not user/project)
- “Deployment” (not launch)
- “System Status” (not summary)

---

## 8. BUILDER PROMPT (UPDATED — TEXT-ONLY MODE)

---

**PROMPT START**

Design a text-only website called:

**SBI Field Archive (SBI-FA)**

This is a structured archive of field records from a fictional organization.

### HARD CONSTRAINTS

- No images
- No icons
- No illustrations
- Text, spacing, and lines only

---

### DESIGN STYLE

Inspired by:

- Government database systems
- Terminal interfaces
- Structured case files

Use:

- Monospace typography
- Muted green background
- Thin divider lines
- Multi-column alignment

---

### HOMEPAGE

Include:

1. System header (with timestamp and clearance level)
2. Boot sequence text block
3. Query/filter row (status, division, type)
4. Record list (NOT cards — structured rows)

---

### RECORD LIST ITEMS

Each item should include:

- Date
- Report ID
- Type
- Subject
- Short description
- Status + metadata

---

### REPORT PAGE

Structured as:

1. Metadata block (aligned fields)
2. Divider line
3. Sections:
   - Overview
   - System Components
   - Interpretation
   - Status

---

### CONTENT

Include one real report:

DAOhaus:

- A decentralized governance protocol
- Built on Moloch DAO contracts
- Enables coordination and capital allocation

Write it in a concise, technical tone.

---

### INTERACTION

- Minimal animation
- Slight delays to simulate system loading
- Hover = subtle underline

---

---

---

---

Add a footer to the SBI Field Archive (SBI-FA) website.

### DESIGN CONSTRAINTS

- Text-only (no icons, no images)
- Use monospace font
- Full-width layout
- Use divider lines made of characters
- Maintain alignment and spacing consistent with the rest of the site

---

### STRUCTURE

The footer should feel like a **system status + transmission interface**, not a typical website footer.

Include:

1. Divider line
2. Archive system information
3. Archive description text
4. System status (timestamp + integrity)
5. Divider line
6. Contact / inquiry section framed as a “transmission channel”
7. Mailto link
8. Closing system-style notes
9. Final divider line

---

### CONTENT

Use this exact content structure:

- “SBI FIELD ARCHIVE NODE”
- “DIVISION: APPLIED SYSTEMS OBSERVATION UNIT”
- “ACCESS LEVEL: PUBLIC INTERFACE (REDACTED)”

Include descriptive text:
“This archive contains fragmented reports from SBI field deployments.
Not all systems are stable. Not all reports are complete.”

Include:

- “Last Sync: [dynamic timestamp]”
- “Node Integrity: NOMINAL”

---

### CONTACT SECTION

Frame contact as:

“EXTERNAL INQUIRY CHANNEL AVAILABLE”

Include a mailto link labeled:
“INITIATE CONTACT”

Tone:

- Slightly cryptic
- Institutional
- Minimal but confident

---

### INTERACTION

- Mailto link should behave like a standard link
- Hover = underline only
- No buttons or UI components

---

### FINAL FEELING

The footer should feel like:

- A system log ending
- A controlled exit point
- A quiet invitation to interact

---
