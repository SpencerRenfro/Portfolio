export const militaryInfo = {
  rank: "E-4, Senior Airman",
  afsc: {
    title: "Aerospace Ground Equipment Journeyman",
    code: "2A6X2",
    description:
      "Responsible for maintaining and repairing equipment essential for aircraft operation, including generators, air conditioners, heaters, and hydraulic test stands. Performed scheduled inspections, troubleshooting, and repairs to ensure mission readiness.",
    skills: [
      "Equipment Maintenance",
      "Troubleshooting",
      "Hydraulic Systems",
      "Electrical Systems",
      "Technical Documentation",
      "Schematics",
      "Soldering",
      "Safety Wire",
      "Wiring Diagrams",
    ],
    image: "/images/AGE.png",
    equipment: [
      {
        id: "dash86",
        name: "-86 Generator",
        description: "High-output AC generator providing 115/200V 400Hz power to aircraft systems. Essential for powering avionics, radar, and other critical aircraft systems during ground maintenance.",
        specs: ["115/200V 3-phase AC", "400Hz frequency", "Diesel-powered", "Mobile platform"],
        maintenance: "Regular maintenance includes fuel system checks, voltage regulation calibration, and load testing to ensure reliable power delivery.",
        image: "/images/-86.png"
      },
      {
        id: "dash60",
        name: "-60 Turbine Generator",
        description: "Mobile turbine-powered unit designed to supply high-volume, high-pressure bleed air for starting aircraft engines and operating environmental control systems (ECS). Critical for pre-flight operations, especially in extreme temperature conditions or when internal APU systems are unavailable.",
        specs: [
          "Turbine engine-powered compressor",
          "Delivers up to 150 pounds per minute (PPM) of bleed air",
          "Operating pressure: ~50 PSI",
          "Dual hose capability for servicing multiple aircraft types",
          "Diesel fuel operation"
        ],
        maintenance: "Routine maintenance includes fuel system inspection, compressor wash, oil and filter changes, turbine and ignition system checks, and leak testing to ensure dependable air delivery and safe engine starts.",
        image: "/images/-60.png"
      },
      {
        id: "floodlight",
        name: "Flood Light",
        description: "Portable high-intensity lighting system used for nighttime maintenance operations and flight line illumination. Provides essential visibility for technical work in low-light conditions.",
        specs: ["Metal halide lamps", "360° rotation capability", "Extendable mast up to 25 feet", "Diesel generator powered"],
        maintenance: "Regular maintenance includes lamp replacement, electrical system checks, and mast extension mechanism lubrication.",
        image: "/images/flood-light.svg"
      },
      {
        id: "mule",
        name: "Mule",
        description: "Specialized hydraulic test stand used to provide precise hydraulic pressure to aircraft systems. Essential for testing and troubleshooting flight control surfaces, landing gear, and other hydraulic components.",
        specs: ["Variable pressure output", "Multiple hydraulic circuits", "Digital pressure monitoring", "Self-contained reservoir"],
        maintenance: "Maintenance procedures include hydraulic fluid analysis, filter replacement, pump inspection, and pressure calibration to ensure accurate testing capabilities.",
        image: "/images/Mule.png"
      }
    ],
    certifications: [
      {
        name: "EPA 608 Universal Certification",
        date: "June 2014",
        issuer: "Environmental Protection Agency",
        description: "Certified for Types I, II, and III refrigerant handling and recovery. This certification permits work on small appliances, high-pressure equipment, and low-pressure systems in accordance with federal regulations on refrigerant management.",
        image: "/images/epa-cert.svg"
      }
    ],
  },
  assignments: [
    {
      base: "Lackland AFB",
      location: "San Antonio, TX",
      dates: "January 2014 - March 2014",
      role: "Basic Military Training",
      description:
        "Completed 8.5 weeks of intensive basic military training, learning military customs, courtesies, and operational procedures.",
      flag: "/images/USA.svg"
    },
    {
      base: "Sheppard AFB",
      location: "Wichita Falls, TX",
      dates: "March 2014 - July 2014",
      role: "Technical Training",
      description:
        "Completed technical training for Aerospace Ground Equipment, learning maintenance procedures for various support equipment.",
      flag: "/images/USA.svg"
    },

    {
      base: "RAF Mildenhall",
      location: "Mildenhall, England",
      dates: "July 2014 - August 2016",
      role: "AGE Journeyman",
      description:
        "Supported operations for the 100th Air Refueling Wing, known as 'The Bloody Hundredth', maintaining critical ground equipment for KC-135 Stratotankers. The wing's distinctive Square D emblem represents its WWII heritage as the 100th Bombardment Group. Collaborated with RAF personnel on joint maintenance initiatives and supported aerial refueling operations across Europe, Africa, and the Middle East.",
      flag: "/images/England.svg"
    },
    {
      base: "Ramstein AB",
      location: "Ramstein, Germany",
      dates: "August 2016 - September 2019",
      role: "AGE Team Lead",
      description:
        "Led a team of 6 technicians supporting the 86th Airlift Wing. Coordinated maintenance schedules and ensured equipment readiness for C-130J Super Hercules aircraft operations across Europe and Africa.",
      flag: "/images/German_Flag.png"
    },
  ],
  professionalDevelopment: [
    {
      title: "Airman Leadership School",
      dates: "January 2015 - March 2015",
      description:
        "Completed 6-week professional military education course focused on leadership, management, and communication skills.",
      achievements: ["Distinguished Graduate", "Academic Achievement Award"],
    },
    {
      title: "5-Level Technical Training",
      dates: "July 2014 - July 2015",
      description:
        "Advanced technical training for AGE craftsman qualification, focusing on complex troubleshooting and repair procedures.",
      achievements: ["Certified on all AGE equipment"],
    },
    {
      title: "CCAF Associate Degree",
      dates: "Completed January 2019",
      description:
        "Associate of Applied Science in Aerospace Ground Equipment Technology from the Community College of the Air Force.",
      achievements: ["3.0 GPA"],
    },
  ],
  ribbons: [
    {
      name: "National Defense Service Medal",
      image: "/images/National_Defense.png",
      link: "https://www.afpc.af.mil/Fact-Sheets/Display/Article/421890/national-defense-service-medal/",
    },
    {
      name: "Global War on Terrorism",
      image: "/images/GlobalWar.png",
      link: "https://www.afpc.af.mil/Fact-Sheets/Display/Article/421912/global-war-on-terrorism-service-medal/",
    },
    {
      name: "Air Force Training",
      image: "/images/Training_Ribbon.png",
      link: "https://www.afpc.af.mil/Fact-Sheets/Display/Article/421945/air-and-space-training-ribbon/",
    },
    {
      name: "Air Force Good Conduct",
      image: "/images/GoodConduct.png",
      link: "https://www.afpc.af.mil/Fact-Sheets/Display/Article/421952/air-force-good-conduct-medal/",
    },
  ],
  overview: {
    description:
      "Served as an Aerospace Ground Equipment Journeyman, maintaining and repairing equipment essential for aircraft operation. Contributed to mission readiness through equipment maintenance, troubleshooting, and repair.",
      timeInService: "6 years",
      branch: "U.S. Air Force",
      rankImage: "/images/SrAirman.png",
  },
};


