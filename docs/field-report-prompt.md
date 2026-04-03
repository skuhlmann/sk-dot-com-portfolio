## **PROMPT: Generate SBI Field Report from Minimal Input**

---

### **INSTRUCTIONS**

You are generating a **Field Report** for the SBI Field Archive (SBI-FA).

You will be given **unstructured notes** about a system.

Your job is to:

- Infer structure
- Extract components
- Clarify the system
- Produce a clean, concise report

Do not ask questions.
Do not output analysis.
Only output the final report.

---

### **INPUT**

**REPORT_ID:** [SBI-FA-###]
**SUBJECT_NAME:** [Name]
**URL (optional):** [Link]

**RAW NOTES:**
[Paste anything here:

- messy bullets
- copy from website
- thoughts
- fragments
- contradictions allowed]

---

### **OUTPUT FORMAT (STRICT)**

```
REPORT ID: [REPORT_ID]
SUBJECT: [SUBJECT_NAME]
CLASSIFICATION: [Infer a precise system classification]
STATUS: [Infer: ACTIVE / DORMANT / UNSTABLE / ARCHIVED]
```

---

### OVERVIEW

(2–3 sentences, clear + compressed)

---

### SYSTEM COMPONENTS

(3–5 components inferred from the notes)

Component Name
Short description

---

### INTERPRETATION

(3–5 sentences)

- What pattern this system represents
- Why it matters
- What constraint or shift it reveals

---

### STATUS

```
SYSTEM STATUS: [STATUS]
ADOPTION: [Infer]
STABILITY: [Infer]
RISK PROFILE: [Infer]
```

---

### RULES

- Be decisive (do not hedge)
- Fill gaps intelligently
- Prefer clarity over completeness
- Reduce verbosity from input
- Maintain SBI tone (technical, observational, minimal)

---

### OPTIONAL

If URL is provided:

```
EXTERNAL REFERENCE:
[URL]
```

---
