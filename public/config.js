window.WORKSPACE_CONFIG = {
  "slug": "legacytrust",
  "name": "LegacyTrust",
  "industry": "Banking",
  "framework": "ISO 22301",
  "accent": "#3468bb",
  "accentDark": "#244c91",
  "tagline": "Resilience you can demonstrate.",
  "module": "Recovery readiness",
  "moduleKey": "recovery",
  "moduleIntro": "Compare documented recovery objectives with exercise results. A recovery objective is met only when an observed result has been recorded.",
  "recordName": "Critical service",
  "fields": [
    {
      "key": "name",
      "label": "Business service",
      "required": true
    },
    {
      "key": "dependency",
      "label": "Critical dependency",
      "required": true
    },
    {
      "key": "rto",
      "label": "Target recovery · minutes",
      "type": "number",
      "min": 1,
      "max": 100000
    },
    {
      "key": "rpo",
      "label": "Target data loss · minutes",
      "type": "number",
      "min": 0,
      "max": 100000
    },
    {
      "key": "actual",
      "label": "Observed recovery · minutes (optional)",
      "type": "number",
      "min": 0,
      "max": 100000,
      "optional": true
    },
    {
      "key": "owner",
      "label": "Service owner",
      "required": true
    },
    {
      "key": "review",
      "label": "Exercise date",
      "type": "date"
    }
  ],
  "records": [
    {
      "id": "BIA-001",
      "name": "Core account servicing · Sample",
      "dependency": "Legacy core banking platform",
      "rto": 120,
      "rpo": 15,
      "actual": 180,
      "owner": "Core Banking",
      "review": "2026-10-20",
      "origin": "Illustrative sample"
    },
    {
      "id": "BIA-002",
      "name": "Customer payments · Sample",
      "dependency": "Payment gateway",
      "rto": 60,
      "rpo": 5,
      "actual": "",
      "owner": "Payments Operations",
      "review": "",
      "origin": "Illustrative sample"
    },
    {
      "id": "BIA-003",
      "name": "Branch operations · Sample",
      "dependency": "Branch network",
      "rto": 240,
      "rpo": 60,
      "actual": 210,
      "owner": "Retail Operations",
      "review": "2026-10-23",
      "origin": "Illustrative sample"
    }
  ],
  "risks": [
    {
      "title": "Core service recovery exceeds its target",
      "category": "Operational resilience",
      "likelihood": 4,
      "impact": 5,
      "owner": "Core Banking",
      "status": "Open",
      "due": "2026-11-14",
      "description": "Illustrative exercise: 180-minute recovery against a 120-minute target. Validate assumptions and record an improvement plan.",
      "origin": "Illustrative sample"
    },
    {
      "title": "Legacy dependency inventory needs review",
      "category": "Infrastructure",
      "likelihood": 3,
      "impact": 4,
      "owner": "Infrastructure",
      "status": "In progress",
      "due": "2026-11-24",
      "description": "Illustrative item based on the repository’s legacy modernization scenario.",
      "origin": "Illustrative sample"
    },
    {
      "title": "Payment recovery exercise outstanding",
      "category": "Operational resilience",
      "likelihood": 3,
      "impact": 4,
      "owner": "Payments Operations",
      "status": "Open",
      "due": "2026-12-02",
      "description": "Illustrative recovery validation gap.",
      "origin": "Illustrative sample"
    }
  ],
  "controls": [
    [
      "LT-01",
      "Business impact analysis",
      "Governance",
      "Resilience Office",
      "In review"
    ],
    [
      "LT-02",
      "Service recovery objectives",
      "Resilience",
      "Core Banking",
      "Gap"
    ],
    [
      "LT-03",
      "Dependency mapping",
      "Infrastructure",
      "Infrastructure",
      "Not assessed"
    ],
    [
      "LT-04",
      "Crisis communication plan",
      "Incident response",
      "Communications",
      "Not assessed"
    ],
    [
      "LT-05",
      "Recovery exercise evidence",
      "Resilience",
      "Operations",
      "Not assessed"
    ],
    [
      "LT-06",
      "Improvement plan review",
      "Governance",
      "Resilience Office",
      "Not assessed"
    ]
  ],
  "focusTitle": "Turn recovery targets into evidence",
  "focusText": "Compare the time a critical service needs with what an exercise actually demonstrates. Track recovery gaps before they become operational surprises.",
  "focusAction": "Review recovery readiness",
  "frameworkNote": "ISO 22301-oriented planning themes support exercises and internal review. This workspace does not certify business continuity compliance."
};
