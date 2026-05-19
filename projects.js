const PROJECTS = {
  colonoscope: {
    id: "colonoscope",
    tag: "Innovation Design",
    category: "endoscopy",
    title: "Ergonomic Colonoscope Innovation",
    summary: "",
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
    ],
  },
};
