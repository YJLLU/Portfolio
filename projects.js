const PROJECT_ORDER = [
  "ultrasonic-aspiration-automation",
  "colonoscope",
  "insulin-syringe",
  "cystoscope",
  "innovated-widget",
];

const PROJECTS = {
  "ultrasonic-aspiration-automation": {
    id: "ultrasonic-aspiration-automation",
    tag: "Surgical Robotics",
    category: "surgical-systems",
    title: "Ultrasonic Aspiration Automation",
    summary: "Robotic test setup for automating ultrasonic aspiration workflows in a Stryker-Duke research collaboration.",
    overview:
      "Developed a robotic test workflow around ultrasonic aspiration to support repeatable tissue interaction studies and early evaluation of automation strategies.",
    methods: ["Robot tool mounting", "Test automation", "Tissue sample preparation", "Prototype iteration"],
    caseStudy: {
      challenge:
        "Manual aspiration testing can be difficult to repeat consistently, especially when tool position, force, and tissue interaction need to be compared across trials.",
      contribution:
        "Designed and integrated a custom tool mount for a Franka robotic arm, prepared tissue samples, and demonstrated an automated aspiration workflow.",
      outcome:
        "Created a working research platform for controlled automation demos and future test protocol refinement.",
    },
    thumb: "images/ua-robot-tool-mount-cover.png",
    coverSlides: [
      "images/ua-robot-tool-mount-cover.png",
      "images/ua-tissue-sample.png",
    ],
    coverInterval: 2000,
    role: "Research Technician",
    year: "Present",
    client: "Stryker–Duke Research Collaboration",
    showHero: false,
    designSections: [
      {
        id: "ua-hardware",
        imageRowClass:
          "design-gallery-row--cystoscope-concepts design-gallery-row--two-col design-gallery-row--media-below-title",
        imageRow: [
          {
            heading: "Robotic Tool Mount",
            src: "images/ua-robot-tool-mount.png",
            alt: "Franka robot with custom tool mount for ultrasonic aspirator — CAD and prototype",
          },
          {
            heading: "Tissue Sample",
            src: "images/ua-tissue-sample.png",
            alt: "Chicken breast tissue sample in petri dish for aspiration testing",
          },
        ],
      },
      {
        id: "ua-demo",
        title: "Automation Demo",
        video: {
          src: "videos/ua-automation-demo.mp4",
          autoplay: true,
        },
      },
    ],
  },
  colonoscope: {
    id: "colonoscope",
    tag: "Innovation Design",
    category: "endoscopy",
    title: "Ergonomic Colonoscope Innovation",
    summary: "Endoscope handle concept replacing thumb-wheel strain with joystick control, haptic feedback, and cable-driven articulation.",
    overview:
      "Reframed colonoscope control around clinician ergonomics, then developed the distal-tip articulation and cable spool mechanism needed to connect the handle concept to functional motion.",
    methods: ["Ergonomic redesign", "Cable-driven mechanism", "Functional prototyping", "Clinical workflow analysis"],
    caseStudy: {
      challenge:
        "Traditional colonoscope controls rely on repetitive thumb-wheel actuation, which can contribute to hand fatigue during long procedures.",
      contribution:
        "Owned distal-tip and operating mechanism development, including articulated segment CAD, spool mechanism layout, and prototype motion demonstrations.",
      outcome:
        "Produced a cohesive problem-to-solution concept with rendered handle architecture, cable actuation logic, and working mechanism prototypes.",
    },
    thumb: "images/colonoscope-solution-features.png",
    coverSlides: [
      "images/colonoscope-distal-tip-articulated.png",
      "images/colonoscope-distal-tip-link.png",
      "images/colonoscope-distal-tip-segment-1.png",
      "images/colonoscope-distal-tip-segment-2.png",
      "images/colonoscope-distal-tip-segment-3.png",
      "images/colonoscope-distal-tip-segment-4.png",
      "images/colonoscope-distal-tip-segment-5.png",
      "images/colonoscope-handle-front.png",
      "images/colonoscope-handle-side.png",
      "images/colonoscope-solution-features.png",
      "images/colonoscope-spool-prototype.png",
    ],
    coverInterval: 2000,
    comparison: {
      problem: {
        src: "images/colonoscope-traditional.png",
        alt: "Traditional colonoscope causing hand fatigue",
        caption: "Traditional colonoscope — repetitive thumb pressure on angulation wheels leads to hand fatigue",
      },
      solution: {
        main: {
          src: "images/colonoscope-solution-features.png",
          alt: "EnjoyScope with electronic joystick and haptic feedback",
        },
        aside: [
          {
            src: "images/colonoscope-handle-front.png",
            alt: "EnjoyScope handle — front render",
            caption: "Back View & Side View",
          },
          {
            src: "images/colonoscope-handle-side.png",
            alt: "EnjoyScope handle — side profile render",
          },
        ],
      },
    },
    role: "R&D Design Engineer — Distal Tip & Operating Mechanism",
    year: "2025",
    client: "Clinical Innovation Project",
    designSections: [
      {
        id: "distal-tip",
        title: "Distal Tip Design",
        imageRows: [
          [
            {
              src: "images/colonoscope-distal-tip-articulated.png",
              alt: "Articulated distal tip segment stack",
              compact: true,
            },
            {
              src: "images/colonoscope-distal-tip-segment-1.png",
              alt: "Distal tip segment — isometric view",
            },
            {
              src: "images/colonoscope-distal-tip-segment-2.png",
              alt: "Distal tip segment — top view",
            },
            {
              src: "images/colonoscope-distal-tip-segment-4.png",
              alt: "Distal tip segment — ring with pivot tabs",
            },
          ],
          [
            {
              video: true,
              src: "videos/colonoscope-distal-tip-demo.mp4",
              caption: "Functional prototype — distal tip articulation",
              autoplay: true,
            },
            {
              src: "images/colonoscope-distal-tip-segment-3.png",
              alt: "Distal tip segment — semi-circular link",
            },
            {
              src: "images/colonoscope-distal-tip-segment-5.png",
              alt: "Distal tip segment — mounting ring",
            },
            {
              src: "images/colonoscope-distal-tip-link.png",
              alt: "Distal tip articulation link",
              compact: true,
            },
          ],
        ],
      },
      {
        id: "operating-mechanism",
        title: "Operation: Spool Mechanism",
        imageRows: [
          [
            {
              src: "images/colonoscope-spool-mechanism-render.png",
              alt: "Spool mechanism — CAD render",
              caption: "Dual-track spool — bidirectional cable winding",
            },
            {
              video: true,
              src: "videos/colonoscope-spool-demo-1.mp4",
              caption: "Spool mechanism — operation demonstration",
              autoplay: true,
            },
            {
              src: "images/colonoscope-spool-prototype.png",
              alt: "Spool mechanism — motor and gearbox prototype",
              caption: "Functional prototype — motor, gearbox, and spool assembly",
              compact: true,
            },
            {
              video: true,
              src: "videos/colonoscope-spool-demo-2.mp4",
              caption: "Spool mechanism — cable pull test",
              autoplay: true,
            },
          ],
        ],
      },
      {
        id: "final-prototype-obstacle-testing",
        title: "Final Prototype Obstacle Testing",
        description:
          "The final prototype was evaluated on a physical obstacle course to demonstrate controlled distal-tip navigation through constrained and curved pathways.",
        imageRowClass: "design-gallery-row--obstacle-testing",
        imageRow: [
          {
            src: "images/colonoscope-obstacle-testing-1.jpg",
            alt: "Operator guiding the final colonoscope prototype through a tabletop obstacle course",
            caption: "Hands-on navigation test with the assembled prototype",
          },
          {
            src: "images/colonoscope-obstacle-testing-2.jpg",
            alt: "Final colonoscope prototype positioned within the obstacle testing course",
            caption: "Obstacle layout used to evaluate steering through constrained paths",
          },
        ],
        video: {
          src: "videos/colonoscope-obstacle-testing.mp4",
          caption: "Final prototype obstacle testing - first 60 seconds",
          poster: "images/colonoscope-obstacle-testing-1.jpg",
          autoplay: false,
          controls: true,
        },
      },
    ],
  },
  "insulin-syringe": {
    id: "insulin-syringe",
    tag: "Medical Product Design",
    category: "diabetes-care",
    title: "Innovated Insulin Syringe Design for Senior Patients",
    summary: "Patient-centered syringe concept with ergonomic handling, assisted dosing features, FEA review, and manufacturability checks.",
    overview:
      "Designed an insulin syringe concept for older patients who may need clearer handling cues, better grip control, and more confidence during repeat dosing.",
    methods: ["Human factors", "CAD assembly", "FEA", "Draft analysis", "Motion study"],
    caseStudy: {
      challenge:
        "Senior patients can face dexterity and visibility barriers when handling small injection devices and confirming dose actions.",
      contribution:
        "Created the syringe assembly, ergonomic handle concept, motion animation, FEA review, and draft analysis for manufacturability discussion.",
      outcome:
        "Built a complete product concept package connecting user need, mechanical structure, stress behavior, and manufacturing constraints.",
    },
    thumb: "images/insulin-syringe-render.png",
    coverSlides: [
      "images/insulin-syringe-render.png",
      "images/insulin-syringe-buildup-01.png",
      "images/insulin-syringe-buildup-02.png",
      "images/insulin-syringe-buildup-03.png",
      "images/insulin-syringe-buildup-04.png",
      "images/insulin-syringe-buildup-05.png",
      "images/insulin-syringe-buildup-06.png",
      "images/insulin-syringe-buildup-07.png",
      "images/insulin-syringe-buildup-08.png",
    ],
    coverInterval: 2000,
    role: "Product Designer",
    year: "2024",
    client: "Academic Design Project",
    comparison: {
      title: "Rendered Design",
      layout: "split",
      solution: {
        main: {
          src: "images/insulin-syringe-render.png",
          alt: "Innovated insulin syringe for senior patients — ergonomic T-handle and assisted dosing",
        },
        video: {
          src: "videos/insulin-syringe-draft-analysis.mp4",
          heading: "Manufacturability",
          autoplay: true,
        },
        aside: [],
      },
    },
    designSections: [
      {
        id: "manufacturability",
        title: "Manufacturability",
        layout: "split",
        split: {
          left: {
            heading: "Design Animation",
            video: {
              src: "videos/insulin-syringe-anatomy-animation.mp4",
            },
          },
          right: {
            heading: "FEA Analysis",
            video: {
              src: "videos/insulin-syringe-fea-analysis.mov",
            },
          },
        },
      },
      {
        id: "motion-animation",
        layout: "split",
        split: {
          left: {
            heading: "Motion Animation",
            video: {
              src: "videos/insulin-syringe-motion-animation.mp4",
              autoplay: true,
            },
          },
          right: {
            heading: "Design Build-Up",
            buildup: {
              interval: 2000,
              steps: [
                {
                  src: "images/insulin-syringe-buildup-01.png",
                  alt: "Plunger component",
                },
                {
                  src: "images/insulin-syringe-buildup-02.png",
                  alt: "Dial and housing sub-assembly",
                },
                {
                  src: "images/insulin-syringe-buildup-03.png",
                  alt: "Adjustment pin",
                },
                {
                  src: "images/insulin-syringe-buildup-04.png",
                  alt: "Transparent barrel",
                },
                {
                  src: "images/insulin-syringe-buildup-05.png",
                  alt: "Barrel with graduated plunger rod",
                },
                {
                  src: "images/insulin-syringe-buildup-06.png",
                  alt: "Helical dose track added",
                },
                {
                  src: "images/insulin-syringe-buildup-07.png",
                  alt: "Near-complete assembly",
                },
                {
                  src: "images/insulin-syringe-buildup-08.png",
                  alt: "Complete syringe with ergonomic handle",
                },
              ],
            },
          },
        },
      },
    ],
  },
  cystoscope: {
    id: "cystoscope",
    tag: "Medical Product Design",
    category: "urology",
    title: "Cystoscope Ergonomics Handle Design",
    summary: "Ergonomic cystoscope handle redesign with internal assembly planning, clinical grip visualization, FEA, and molding analysis.",
    overview:
      "Explored a cystoscope handle architecture that improves hand fit while organizing electronic, fluid, and sheath interfaces inside a manufacturable enclosure.",
    methods: ["Ergonomic sketching", "Internal CAD layout", "FEA", "Injection molding review"],
    caseStudy: {
      challenge:
        "A clinical handle must feel stable in the hand while still packaging fluid paths, electronic interfaces, and structural supports.",
      contribution:
        "Developed concept sketches, external and internal CAD renders, grip visualization, FEA, and draft analysis for injection molding feasibility.",
      outcome:
        "Delivered a design package that communicates both user-facing ergonomics and internal engineering constraints.",
    },
    thumb: "images/cystoscope-render-external.jpg",
    coverSlides: [
      "images/cystoscope-render-external.jpg",
      "images/cystoscope-render-internal.jpg",
      "images/cystoscope-clinical-hold.jpg",
      "images/cystoscope-sketch.png",
      "images/cystoscope-cover-cad-full.png",
      "images/cystoscope-cover-cad-section.png",
    ],
    coverInterval: 2000,
    role: "Product Designer",
    year: "2023",
    client: "Academic Design Project",
    showHero: false,
    designSections: [
      {
        id: "rendered-design",
        imageRowClass: "design-gallery-row--cystoscope-hero",
        imageRow: [
          {
            src: "images/cystoscope-render-external.jpg",
            alt: "Ergonomic cystoscope handle — external render",
            heading: "Rendered Design",
            square: true,
          },
          {
            src: "images/cystoscope-render-internal.jpg",
            alt: "Ergonomic cystoscope handle — internal assembly cutaway",
            square: true,
            headingSpacer: true,
          },
          {
            src: "images/cystoscope-clinical-hold.jpg",
            alt: "Clinician holding the cystoscope handle",
            heading: "Photoshop Clinical Grip",
          },
        ],
      },
      {
        id: "concepts-handle-design",
        imageRowClass: "design-gallery-row--cystoscope-concepts",
        imageRow: [
          {
            heading: "Early Concepts",
            src: "images/cystoscope-sketch.png",
            alt: "Hand-drawn ergonomic handle sketches — controllers, fluid channel, and valve layout",
          },
          {
            heading: "Ergonomic Handle Design",
            src: "images/cystoscope-cad-full.png",
            alt: "CAD model — electronic and fluid connections",
          },
          {
            src: "images/cystoscope-cad-section.png",
            alt: "Cross-section — internal stabilizer and sheath interface",
            headingSpacer: true,
          },
        ],
      },
      {
        id: "design-analysis",
        layout: "split",
        split: {
          left: {
            heading: "Design Animation",
            video: {
              src: "videos/cystoscope-design-animation.mp4",
            },
          },
          right: {
            heading: "FEA Analysis",
            video: {
              src: "videos/cystoscope-fea-analysis.mov",
            },
          },
        },
      },
      {
        id: "manufacturability",
        title: "Manufacturability: Injection Molding Assessment",
        video: {
          src: "videos/cystoscope-draft-analysis.mp4",
          autoplay: true,
        },
      },
    ],
  },
  "innovated-widget": {
    id: "innovated-widget",
    tag: "Medical Product Design",
    category: "medical-components",
    title: "Innovated Widget 3D Design",
    summary: "Mechanical component redesign exercise translating sketches into technical drawings, CAD animation, and sheet-metal logic.",
    overview:
      "Converted an early component concept into clearer mechanical documentation through hand sketching, orthographic drawing, CAD redesign, and sheet-metal motion review.",
    methods: ["Technical drawing", "CAD animation", "Sheet-metal design", "Form exploration"],
    caseStudy: {
      challenge:
        "The component needed to move from visual concept to a more precise engineering representation with manufacturable geometry.",
      contribution:
        "Produced hand drawings, technical drawings, redesign animation, and sheet-metal animation to explain form and fabrication logic.",
      outcome:
        "Created a concise mechanical design study demonstrating translation from concept sketch to engineered representation.",
    },
    thumb: "images/widget-sketch.jpg",
    coverSlides: [
      "images/widget-sketch.jpg",
      "images/widget-drawing.jpg",
    ],
    coverInterval: 2000,
    role: "Product Designer",
    year: "2023",
    client: "Academic Design Project",
    showHero: false,
    designSections: [
      {
        id: "concepts-design",
        imageRowClass:
          "design-gallery-row--cystoscope-concepts design-gallery-row--two-col design-gallery-row--media-below-title",
        imageRow: [
          {
            heading: "Widget hand drawing",
            src: "images/widget-sketch.jpg",
            alt: "Hand-drawn orthographic and perspective sketches",
          },
          {
            heading: "Technical Drawing",
            src: "images/widget-drawing.jpg",
            alt: "Widget technical drawing — orthographic and section views",
          },
        ],
      },
      {
        id: "design-animation",
        layout: "split",
        splitClass: "comparison-render-split--media-below-title",
        split: {
          left: {
            heading: "Design Animation",
            video: {
              src: "videos/widget-redesign-animation.mp4",
            },
          },
          right: {
            heading: "Sheet Metal Animation",
            video: {
              src: "videos/widget-sheet-metal-animation.mp4",
            },
          },
        },
      },
    ],
  },
};
