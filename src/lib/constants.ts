export const SITE_CONFIG = {
  name: "Pine Plumbing & Air",
  description: "Expert HVAC and plumbing services serving the Boise Metro with 20 years of experience, genuine care, and unwavering commitment to our community.",
  url: "https://pineplumbingandair.com",
  phone: "208-944-PINE",
  phoneDisplay: "(208) 944-PINE",
  email: "contact@pineplumbingandair.com",
  address: {
    street: "Serving Boise Metro Area",
    city: "Boise", 
    state: "Idaho",
    zip: "83702"
  },
  hours: {
    emergency: "24/7 Emergency Service",
    regular: "Monday - Friday: 8AM - 6PM"
  },
  yearsFounded: "2025",
  yearsExperience: "20+ Years Experience"
}

export const SERVICE_DETAILS = {
  // Plumbing Services
  "plumbing-repair": {
    title: "Plumbing Repair",
    category: "plumbing",
    description: "From dripping faucets to major pipe bursts, our experienced plumbers diagnose and fix plumbing issues quickly and permanently.",
    details: "No plumbing problem is too big or small for our team. We handle everything from minor leaks and clogs to major pipe repairs and sewer line issues. Our trucks are fully stocked with quality parts, so most repairs are completed in a single visit. We use modern diagnostic tools to identify the root cause and provide lasting solutions, not temporary fixes.",
    benefits: [
      "Same-day service available",
      "Upfront, honest pricing",
      "Quality parts and materials",
      "1-year warranty on repairs",
      "Emergency service available 24/7"
    ],
    commonIssues: [
      "Leaky faucets and fixtures",
      "Clogged drains and toilets", 
      "Running or noisy toilets",
      "Low water pressure",
      "Pipe leaks and bursts"
    ]
  },
  "pipe-repair": {
    title: "Pipe Repair", 
    category: "plumbing",
    description: "Expert pipe repair and replacement services using modern techniques to minimize disruption to your home and property.",
    details: "Whether you have old galvanized pipes, frozen and burst lines, or tree root damage, we use the latest repair techniques including trenchless methods when possible. Our team assesses each situation to determine if spot repairs, pipe relining, or full replacement is the most cost-effective solution for your home.",
    benefits: [
      "Trenchless repair options available",
      "Minimal landscape disruption", 
      "Modern PEX and copper piping",
      "Video inspection for accurate diagnosis",
      "Long-term warranty protection"
    ],
    commonIssues: [
      "Burst or frozen pipes",
      "Corroded galvanized piping",
      "Tree root intrusion",
      "Slab leak repairs",
      "Pipe joint failures"
    ]
  },
  "water-heaters": {
    title: "Water Heaters",
    category: "plumbing", 
    description: "Complete water heater services including repair, replacement, and maintenance for traditional tank and tankless systems.",
    details: "We service and install all major water heater brands and types. Our technicians can quickly diagnose issues like insufficient hot water, strange noises, or leaks. We help you choose the right size and efficiency rating for your family's needs and can often complete installations the same day.",
    benefits: [
      "All major brands serviced",
      "Energy efficiency consultations",
      "Same-day installation available",
      "Proper sizing and placement",
      "Warranty service and support"
    ],
    commonIssues: [
      "No hot water or insufficient heating",
      "Water heater leaks",
      "Strange noises or odors",
      "Rusty or discolored water",
      "Pilot light or ignition problems"
    ]
  },
  "tankless-water-heaters": {
    title: "Tankless Water Heaters",
    category: "plumbing",
    description: "Space-saving, energy-efficient tankless water heater installation and service for endless hot water on demand.",
    details: "Tankless water heaters provide hot water only when you need it, saving energy and space while delivering endless hot water. We help you select the right BTU capacity for your home's demand, handle proper venting and gas line sizing, and ensure optimal performance with professional installation.",
    benefits: [
      "Endless hot water on demand",
      "20+ year lifespan with maintenance",
      "Space-saving wall-mount design", 
      "Lower energy costs",
      "Professional sizing and installation"
    ],
    commonIssues: [
      "Proper sizing for household demand",
      "Adequate gas line capacity",
      "Correct venting requirements",
      "Annual maintenance and descaling",
      "Cold water sandwich effect"
    ]
  },
  "kitchen-bathroom": {
    title: "Kitchen and Bathroom Plumbing",
    category: "plumbing",
    description: "Specialized plumbing services for kitchen and bathroom remodels, including fixture installation and rough-in work.",
    details: "From simple fixture replacements to complete bathroom and kitchen renovations, we handle all the plumbing aspects of your project. We coordinate with contractors and DIY homeowners to ensure proper rough-in work, code compliance, and beautiful finished installations.",
    benefits: [
      "Code-compliant installations",
      "Coordination with contractors",
      "Quality fixture installation",
      "Rough-in and finish work",
      "ADA-compliant options available"
    ],
    commonIssues: [
      "Fixture installation and replacement",
      "Shower and bathtub plumbing",
      "Kitchen sink and garbage disposal",
      "Bathroom vanity and toilet setup",
      "Supply line and drain relocations"
    ]
  },
  "gas-piping": {
    title: "Gas Piping",
    category: "plumbing",
    description: "Licensed gas line installation and repair for appliances, grills, and heating equipment with strict safety standards.",
    details: "Gas work requires specialized training and licensing for safety. Our certified technicians handle everything from connecting new appliances to running gas lines for outdoor grills, fireplaces, and HVAC equipment. All work is pressure tested and inspected to meet local codes.",
    benefits: [
      "Licensed and certified technicians",
      "Pressure testing and inspection",
      "Code-compliant installations",
      "Safety-first approach",
      "Appliance connection services"
    ],
    commonIssues: [
      "New gas line installations",
      "Gas leak detection and repair",
      "Appliance connections",
      "Outdoor grill gas lines",
      "Gas meter and regulator service"
    ]
  },
  "sump-pumps": {
    title: "Sump Pumps",
    category: "plumbing",
    description: "Sump pump installation, repair, and maintenance to protect your basement from water damage and flooding.",
    details: "A reliable sump pump is your first defense against basement flooding. We install, service, and repair all types of sump pumps, including battery backup systems. Regular maintenance ensures your pump works when you need it most during heavy rains or rapid snowmelt.",
    benefits: [
      "Primary and backup pump systems",
      "Battery backup options",
      "Alarm systems for peace of mind",
      "Regular maintenance programs",
      "Emergency repair services"
    ],
    commonIssues: [
      "Pump failure during storms",
      "Float switch malfunctions",
      "Discharge line freezing",
      "Power outage protection",
      "Pump sizing for your basement"
    ]
  },
  "water-filtration": {
    title: "Water Filtration",
    category: "plumbing", 
    description: "Whole-house and point-of-use water filtration systems to improve taste, odor, and quality of your home's water.",
    details: "Clean, great-tasting water throughout your home improves your family's health and protects your plumbing and appliances. We offer various filtration solutions from simple carbon filters to reverse osmosis systems, customized to address your specific water quality concerns.",
    benefits: [
      "Improved taste and odor",
      "Reduced chlorine and chemicals",
      "Protection for appliances",
      "Custom solutions for your water",
      "Professional installation and service"
    ],
    commonIssues: [
      "Chlorine taste and odor",
      "Hard water mineral buildup",
      "Sediment and particulates",
      "Specific contaminant removal",
      "Filter replacement and maintenance"
    ]
  },
  "water-softeners": {
    title: "Water Softeners",
    category: "plumbing",
    description: "Water softener installation and service to eliminate hard water problems and protect your plumbing and appliances.",
    details: "Hard water causes scale buildup in pipes, reduces appliance efficiency, and makes cleaning more difficult. Our water softener systems remove minerals that cause hardness, extending the life of your plumbing and appliances while making your water more effective for cleaning.",
    benefits: [
      "Eliminates scale and mineral buildup",
      "Extends appliance lifespan",
      "Softer skin and hair",
      "Better soap and detergent performance",
      "Reduced maintenance costs"
    ],
    commonIssues: [
      "Scale buildup in pipes and fixtures",
      "Appliance efficiency problems",
      "Soap scum and cleaning issues",
      "Dry skin and hair problems",
      "Water heater efficiency loss"
    ]
  },

  // Heating Services
  "furnace-repair": {
    title: "Furnace Repair",
    category: "heating",
    description: "Expert furnace repair for all makes and models to restore reliable heating when your family needs it most.",
    details: "When your furnace isn't working properly, we respond quickly with experienced technicians and fully-stocked trucks. We diagnose and repair gas, electric, and oil furnaces from all major manufacturers. Our goal is to get your heat restored safely and efficiently, often the same day you call.",
    benefits: [
      "All major brands serviced",
      "Same-day service available",
      "Experienced certified technicians",
      "Upfront pricing before we start",
      "Safety inspections included"
    ],
    commonIssues: [
      "Furnace won't start or turn on",
      "Insufficient heat or uneven heating",
      "Strange noises or odors",
      "Frequent cycling on and off",
      "High energy bills"
    ]
  },
  "furnace-installation": {
    title: "Furnace Installation",
    category: "heating",
    description: "Professional furnace installation with proper sizing, efficiency ratings, and code-compliant work for optimal comfort.",
    details: "A properly installed furnace provides years of reliable, efficient heating. We help you select the right size and efficiency rating for your home, ensure proper ductwork connections, and complete installations that meet all local codes. We handle permits, inspections, and warranty registration.",
    benefits: [
      "Professional load calculations",
      "High-efficiency options available",
      "Proper ductwork integration",
      "Code-compliant installations",
      "Manufacturer warranty activation"
    ],
    commonIssues: [
      "Proper sizing for your home",
      "Efficiency rating selection",
      "Ductwork modifications needed",
      "Electrical and gas connections",
      "Permit and inspection requirements"
    ]
  },
  "furnace-tune-up": {
    title: "Furnace Tune-up",
    category: "heating",
    description: "Comprehensive furnace maintenance to ensure safe, efficient operation and prevent unexpected breakdowns.",
    details: "Regular furnace maintenance is the best way to prevent emergency repairs and maintain efficiency. Our thorough tune-up includes cleaning, inspection, testing, and adjustment of all furnace components. We catch small issues before they become expensive problems.",
    benefits: [
      "Improved efficiency and lower bills",
      "Extended equipment lifespan",
      "Fewer emergency repairs",
      "Safety inspections included",
      "Priority scheduling for members"
    ],
    commonIssues: [
      "Dirty filters reducing efficiency",
      "Worn belts and moving parts",
      "Gas pressure and combustion issues",
      "Thermostat calibration problems",
      "Ductwork leaks and connections"
    ]
  },
  "heat-pumps": {
    title: "Heat Pumps",
    category: "heating",
    description: "Energy-efficient heat pump installation and service for year-round comfort with both heating and cooling.",
    details: "Heat pumps provide both heating and cooling with exceptional efficiency, especially in moderate climates. We install and service air-source and mini-split heat pump systems, helping you reduce energy costs while maintaining consistent comfort throughout the year.",
    benefits: [
      "Heating and cooling in one system",
      "High energy efficiency ratings",
      "Lower operating costs",
      "Environmentally friendly",
      "Advanced inverter technology"
    ],
    commonIssues: [
      "Proper sizing for climate zone",
      "Backup heating considerations",
      "Refrigerant levels and leaks",
      "Defrost cycle operations",
      "Indoor and outdoor unit matching"
    ]
  },

  // Cooling Services  
  "ac-repair": {
    title: "AC Repair",
    category: "cooling",
    description: "Fast, reliable air conditioning repair to restore cool comfort during hot weather when you need it most.",
    details: "When your AC breaks down in the heat of summer, we prioritize your call. Our experienced technicians diagnose and repair all types of air conditioning systems, from central air to window units. We carry common parts on our trucks for faster repairs.",
    benefits: [
      "Emergency service available",
      "All major brands serviced", 
      "Common parts in stock",
      "Experienced certified technicians",
      "Upfront pricing and warranties"
    ],
    commonIssues: [
      "AC not cooling properly",
      "Unit not turning on",
      "Strange noises or odors",
      "High humidity levels",
      "Frozen coils or refrigerant leaks"
    ]
  },
  "ac-installation": {
    title: "AC Installation", 
    category: "cooling",
    description: "Professional air conditioning installation with proper sizing and efficiency ratings for optimal cooling performance.",
    details: "Proper AC installation is crucial for efficiency, longevity, and comfort. We perform load calculations to size your system correctly, ensure proper refrigerant lines and electrical connections, and test everything thoroughly. Quality installation prevents future problems and maximizes efficiency.",
    benefits: [
      "Proper system sizing calculations",
      "High SEER efficiency options",
      "Quality refrigerant line work",
      "Professional electrical connections",
      "Complete system testing and startup"
    ],
    commonIssues: [
      "Correct sizing for your home",
      "Proper refrigerant line installation",
      "Electrical requirements and connections",
      "Condensate drain setup",
      "System balancing and testing"
    ]
  },
  "ac-tune-up": {
    title: "AC Tune-up",
    category: "cooling",
    description: "Comprehensive air conditioning maintenance to ensure peak performance and prevent costly summer breakdowns.",
    details: "Regular AC maintenance keeps your system running efficiently and prevents unexpected failures during peak cooling season. Our detailed tune-up includes cleaning coils, checking refrigerant levels, testing electrical components, and ensuring optimal airflow throughout your system.",
    benefits: [
      "Lower energy bills",
      "Fewer emergency repairs",
      "Extended equipment life",
      "Better indoor air quality",
      "Peak summer performance"
    ],
    commonIssues: [
      "Dirty coils reducing efficiency",
      "Low refrigerant levels",
      "Clogged condensate drains",
      "Worn electrical contacts",
      "Restricted airflow problems"
    ]
  },
  "mini-splits": {
    title: "Mini-Splits",
    category: "cooling",
    description: "Ductless mini-split installation and service for efficient zone control and heating/cooling flexibility.",
    details: "Mini-split systems are perfect for homes without ductwork, room additions, or areas needing independent temperature control. These efficient systems provide both heating and cooling with whisper-quiet operation and individual room control. Ideal for sunrooms, home offices, and master bedrooms.",
    benefits: [
      "No ductwork required",
      "Individual room control",
      "High efficiency ratings", 
      "Quiet operation",
      "Heating and cooling capability"
    ],
    commonIssues: [
      "Proper sizing for room loads",
      "Indoor unit placement and mounting",
      "Refrigerant line routing",
      "Electrical requirements",
      "Condensate drainage solutions"
    ]
  },

  // Indoor Air Quality
  "air-filtration": {
    title: "Air Filtration",
    category: "airQuality",
    description: "Whole-house air filtration systems to remove allergens, dust, and pollutants for cleaner, healthier indoor air.",
    details: "Indoor air can be 2-5 times more polluted than outdoor air. Our air filtration systems integrate with your HVAC system to continuously clean your home's air, removing dust, pollen, pet dander, and other airborne particles. Options range from high-efficiency filters to electronic air cleaners.",
    benefits: [
      "Removes allergens and pollutants",
      "Reduces dust throughout home",
      "Better respiratory health",
      "Protects HVAC equipment",
      "Low maintenance operation"
    ],
    commonIssues: [
      "Allergies and respiratory issues",
      "Excessive dust accumulation",
      "Pet dander and odors",
      "Pollen and outdoor allergens",
      "Smoke and cooking odors"
    ]
  },
  "humidifiers": {
    title: "Humidifiers",
    category: "airQuality", 
    description: "Whole-house humidification systems to maintain optimal humidity levels for comfort and health year-round.",
    details: "Dry air causes discomfort, damages furniture, and increases static electricity. Our whole-house humidifiers work with your heating system to maintain ideal humidity levels throughout your home. Proper humidity improves comfort, protects wood furnishings, and supports better respiratory health.",
    benefits: [
      "Improved comfort and health",
      "Protects wood furniture and flooring",
      "Reduces static electricity",
      "Lower heating costs",
      "Automatic humidity control"
    ],
    commonIssues: [
      "Dry skin and respiratory irritation",
      "Static electricity problems",
      "Cracking wood and furniture",
      "Increased heating costs",
      "Difficulty maintaining comfort"
    ]
  }
}

export const SERVICES = {
  plumbing: {
    title: "Plumbing Services",
    description: "Complete plumbing solutions for your home",
    services: [
      "Plumbing Repair",
      "Pipe Repair", 
      "Water Heaters",
      "Tankless Water Heaters",
      "Kitchen and Bathroom",
      "Gas Piping",
      "Sump Pumps",
      "Water Filtration",
      "Water Softeners"
    ]
  },
  heating: {
    title: "Heating Services", 
    description: "Keep your home warm and comfortable",
    services: [
      "Furnace Repair",
      "Furnace Installation",
      "Furnace Tune-up", 
      "Heat Pumps"
    ]
  },
  cooling: {
    title: "Cooling Services",
    description: "Stay cool when it matters most", 
    services: [
      "AC Repair",
      "AC Installation", 
      "AC Tune up",
      "Mini-Splits"
    ]
  },
  airQuality: {
    title: "Indoor Air Quality",
    description: "Breathe easier with cleaner air",
    services: [
      "Air Filtration",
      "Humidifiers"
    ]
  }
}

export const PRICING = {
  diagnostic: {
    title: "Diagnostic Service",
    price: 49,
    description: "Professional diagnosis for all repairs"
  },
  membership: {
    title: "Pine Comfort Club",
    price: 99,
    description: "Annual membership with exclusive benefits",
    benefits: [
      "1 Annual Whole-Home Plumbing & HVAC Inspection",
      "Priority Scheduling – skip the line when you need us most", 
      "10% OFF all repairs – all year long",
      "Exclusive Member-Only Specials"
    ]
  }
}

export const HERO_CONTENT = {
  headline: "Your Home Comfort, Our Family Promise",
  subheadline: "Professional HVAC and plumbing services with the personal touch only a family business can provide.",
  cta: {
    primary: "Join Pine Comfort Club",
    secondary: "Schedule Service"
  }
}