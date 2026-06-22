import {
  Bot, Cog, Factory, BrainCircuit, Car, Network, Gauge,
  Headset, ScanLine, Waves, Cpu, Sprout
} from "lucide-react";

export const COMPANY = {
  name: "Karna Dynamics Private Limited",
  short: "Karna Dynamics",
  tagline: "Agriculture | Industry | Robotics",
  email: "info@karnadynamics.com",
  phone: "+91 99999 99999",
  whatsapp: "919999999999",
  address:
    "Comman Passage, Pandol Ind. Ved Road, Sy No. 9,10/1, Dabhol, Surat, Gujarat, India, 395004",
  mapsQuery: "Pandol Industrial, Ved Road, Dabhol, Surat, Gujarat 395004",
  description:
    "Karna Dynamics Private Limited is a deep-tech engineering company building virtual & augmented reality systems, advanced robotics, special purpose machinery, industrial automation and AI/ML solutions — designed, built and supported in-house."
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Events", to: "/events" },
  { label: "Contact Us", to: "/contact" }
];

/* ---------------- PRODUCT CATEGORIES (Products overview page) ---------------- */
export const CATEGORIES = [
  {
    slug: "vr-ar",
    name: "Virtual & Augmented Reality",
    icon: Headset,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=1200&q=80",
    summary: "Immersive VR/AR for training, simulation, design review and remote assistance."
  },
  {
    slug: "robotics",
    name: "Robotics",
    icon: Bot,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    summary: "Autonomous ground, underwater and swarm robots, plus inspection and tele-operated platforms.",
    isParent: true
  },
  {
    slug: "special-purpose-machinery",
    name: "Special Purpose Machinery",
    icon: Cog,
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1200&q=80",
    summary: "Custom-engineered machines that automate one job perfectly, end to end."
  },
  {
    slug: "industrial-automation",
    name: "Industrial Automation",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    summary: "PLC, SCADA, control panels and Industry 4.0 monitoring for the modern plant."
  },
  {
    slug: "ai-ml",
    name: "Artificial Intelligence & Machine Learning",
    icon: BrainCircuit,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    summary: "Computer vision, predictive analytics and edge AI that turn data into decisions."
  }
];

/* Robotics sub-products shown under the Robotics category */
export const ROBOTICS_CHILDREN = [
  "intelligent-ground-vehicle",
  "swarm-robotics",
  "smart-energy-meter",
  "vr-controlled-robots",
  "ndt-robots",
  "underwater-rov"
];

/* ---------------- DEEP DETAIL CONTENT (keyed by slug) ---------------- */
export const DETAILS = {
  /* ============ CATEGORY: VR & AR ============ */
  "vr-ar": {
    name: "Virtual & Augmented Reality",
    parent: null,
    icon: Headset,
    tagline: "See it, train on it, and fix it — before it ever exists in the real world.",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=1600&q=80",
    overview: [
      "Karna Dynamics builds virtual and augmented reality systems that let people learn, design and operate complex machinery without the cost and risk of doing it on the real thing. We combine game-engine grade rendering with accurate engineering data, so what you see in the headset behaves the way the physical system actually would.",
      "Our VR experiences place a trainee inside a fully simulated plant, vehicle or robot, where every valve, control and fault can be exercised safely. Our AR experiences do the opposite — they bring digital information out into the real world, overlaying instructions, sensor readings and step-by-step guidance directly onto the equipment a technician is standing in front of.",
      "Because we also build the robots and automation these experiences represent, our VR/AR is never a generic demo. It is wired to the same logic, the same control sequences and the same data models as the machines on your floor, which is what makes it genuinely useful for training, design review and remote support."
    ],
    features: [
      "Photorealistic, engineering-accurate 3D environments",
      "Hand-tracking and controller interaction with realistic physics",
      "Guided training modules with scoring and progress tracking",
      "AR work instructions overlaid on real equipment",
      "Live sensor and machine data streamed into the headset",
      "Multi-user sessions for collaborative design review",
      "Remote expert assistance with shared annotations",
      "Runs on standalone headsets, tethered PCs and mobile AR"
    ],
    howItWorks: [
      { title: "Capture", text: "We import CAD, scan the real site or model the equipment so the digital twin matches reality." },
      { title: "Simulate", text: "Control logic and physics are attached so the virtual system reacts exactly like the real one." },
      { title: "Interact", text: "Trainees and engineers explore, operate and troubleshoot inside VR, or via AR on the live machine." },
      { title: "Measure", text: "Every action is logged so you can track competency, find mistakes and improve the model." }
    ],
    applications: [
      "Operator and safety training for hazardous machinery",
      "Design and layout review before fabrication",
      "AR-guided maintenance and assembly instructions",
      "Remote assistance for field technicians",
      "Immersive product demonstrations for clients",
      "STEM and skill-development labs for institutions"
    ],
    specs: [
      ["Platforms", "Meta Quest, PCVR, mobile AR"],
      ["Rendering", "Real-time PBR, 72–120 fps"],
      ["Interaction", "Controllers + hand tracking"],
      ["Data link", "REST / MQTT / OPC-UA"],
      ["Multi-user", "Up to 16 collaborators"],
      ["Content", "Custom per client"],
      ["Analytics", "Built-in training dashboard"],
      ["Delivery", "On-prem or cloud-streamed"]
    ]
  },

  /* ============ CATEGORY: ROBOTICS (parent) ============ */
  "robotics": {
    name: "Robotics",
    parent: null,
    icon: Bot,
    tagline: "Machines that move, sense and decide — on land, underwater and in swarms.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80",
    overview: [
      "Robotics is the core of Karna Dynamics. We design and build autonomous and tele-operated robots that take on the jobs that are too repetitive, too dangerous or too precise for people to do reliably — from moving material around a warehouse to inspecting a pipeline underwater.",
      "Every robot we build is engineered end to end under one roof: the mechanical chassis, the power and motor electronics, the embedded firmware, the perception and navigation software, and the dashboards that let you supervise a whole fleet. That vertical integration is why our robots survive the real world instead of only working in a clean demo.",
      "Our robotics line-up spans six distinct platforms, each solving a different problem. Explore each one below to see how it works, where it is used and what it is capable of."
    ],
    features: [
      "Built on ROS2 with modern perception and navigation stacks",
      "LiDAR, camera, sonar and IMU sensor fusion",
      "Autonomous and tele-operated operating modes",
      "Fleet management and live telemetry dashboards",
      "Rugged, field-serviceable mechanical design",
      "Edge AI compute for on-board decision making",
      "Safe operation around people and equipment",
      "Modular payloads for different missions"
    ],
    howItWorks: [
      { title: "Perceive", text: "Sensors build a live map of the environment and detect obstacles, targets and people." },
      { title: "Plan", text: "On-board software decides the safest, most efficient path or action for the mission." },
      { title: "Act", text: "Motor controllers and actuators execute the plan with closed-loop precision." },
      { title: "Supervise", text: "Operators monitor and override from a dashboard or VR console when needed." }
    ],
    applications: [
      "Warehouse and factory material movement",
      "Infrastructure and asset inspection",
      "Underwater survey and monitoring",
      "Coordinated multi-robot missions",
      "Hazardous-environment operations",
      "Research and education platforms"
    ],
    specs: [
      ["Platforms", "6 distinct robot families"],
      ["Control", "ROS2 + custom firmware"],
      ["Compute", "NVIDIA Jetson / x86 edge"],
      ["Sensing", "LiDAR, vision, sonar, IMU"],
      ["Comms", "Wi-Fi, 4G/5G, RF, acoustic"],
      ["Autonomy", "Manual to fully autonomous"],
      ["Power", "Swappable Li-ion packs"],
      ["Support", "Commissioning + AMC"]
    ]
  },

  /* ---- ROBOTICS CHILD 1: Intelligent Ground Vehicle ---- */
  "intelligent-ground-vehicle": {
    name: "Intelligent Ground Vehicle Robot",
    parent: "robotics",
    icon: Car,
    tagline: "A self-driving robot for the floor, the field and everything in between.",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=80",
    overview: [
      "The Intelligent Ground Vehicle (IGV) is an autonomous mobile robot that navigates indoor and outdoor environments without rails, wires or markers. It builds a map of its surroundings, locates itself within that map and plans its own collision-free route to wherever it needs to go.",
      "Where a traditional AGV blindly follows a fixed line, the IGV understands its world. It uses LiDAR and cameras to recognise obstacles, re-routes around unexpected blockages, slows down near people and resumes its task automatically. This makes it suitable for dynamic, mixed environments where humans and machines share the same space.",
      "Each IGV carries a modular payload bay, so the same base platform can become a material-transport robot, a mobile inspection unit, a security patrol or a research vehicle. Fleets of IGVs are coordinated by a central manager that assigns tasks, balances traffic and reports live status — turning individual robots into a coordinated logistics system."
    ],
    features: [
      "Marker-free autonomous navigation (LiDAR SLAM + vision)",
      "Dynamic obstacle avoidance and people-aware safety slowdown",
      "Modular payload bay for transport, inspection or security",
      "Centralised fleet manager with task scheduling",
      "Auto-docking and battery charging",
      "Indoor and outdoor all-terrain variants",
      "Live telemetry, mapping and remote override",
      "Integration with WMS / ERP / MES systems"
    ],
    howItWorks: [
      { title: "Map", text: "On first run the IGV drives the area and builds a precise digital map of walls, aisles and zones." },
      { title: "Localise", text: "Sensor fusion keeps the robot certain of exactly where it is at all times." },
      { title: "Navigate", text: "It plans the best route to each task and re-plans instantly when something blocks the way." },
      { title: "Coordinate", text: "The fleet manager hands out jobs and prevents two robots from competing for the same lane." }
    ],
    applications: [
      "Internal material transport in factories and warehouses",
      "Hospital and lab sample/goods delivery",
      "Automated inventory and inspection rounds",
      "Security and surveillance patrols",
      "Agricultural field monitoring and carrying",
      "University and R&D mobile-robotics platform"
    ],
    specs: [
      ["Payload", "Up to 150 kg (variant dependent)"],
      ["Top speed", "1.5 m/s indoor, higher outdoor"],
      ["Navigation", "2D/3D LiDAR SLAM + cameras"],
      ["Runtime", "8–10 hours per charge"],
      ["Compute", "NVIDIA Jetson Orin / x86"],
      ["Safety", "Bumpers, E-stop, zone slowdown"],
      ["Comms", "Wi-Fi / 4G fleet link"],
      ["Charging", "Auto-dock, ~1.5 h full"]
    ]
  },

  /* ---- ROBOTICS CHILD 2: Swarm Robotics ---- */
  "swarm-robotics": {
    name: "Swarm Robotics",
    parent: "robotics",
    icon: Network,
    tagline: "Many small robots, one collective intelligence.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    overview: [
      "Swarm Robotics takes inspiration from ants, bees and birds: instead of one expensive, complex machine, a large number of simple robots cooperate to achieve a goal that none of them could manage alone. There is no single point of failure — if one unit drops out, the swarm reorganises and carries on.",
      "Our swarm units share information locally with their neighbours and follow simple behavioural rules. Out of those local interactions, sophisticated group behaviour emerges: the robots can spread out to cover an area, gather at a target, form shapes, or split into teams. This makes swarms ideal for tasks that are spread over space and need to scale up or down on demand.",
      "Karna Dynamics provides the swarm hardware, the communication mesh that lets the robots talk to each other, and the control software that lets an operator set a mission goal — cover this field, map this building, search this zone — and let the swarm work out the details. The same platform doubles as a powerful research and teaching tool for distributed AI and multi-agent systems."
    ],
    features: [
      "Decentralised control with no single point of failure",
      "Self-organising coverage, formation and search behaviours",
      "Local mesh communication between units",
      "Scalable from a handful to dozens of robots",
      "Mission-level commands instead of per-robot control",
      "Collision-free coordination and traffic handling",
      "Live swarm visualisation dashboard",
      "Open platform for multi-agent AI research"
    ],
    howItWorks: [
      { title: "Define", text: "The operator sets a goal — cover, search, gather or form — for the whole swarm." },
      { title: "Communicate", text: "Each robot shares its state with nearby units over the mesh network." },
      { title: "Self-organise", text: "Simple local rules produce complex, coordinated group behaviour." },
      { title: "Adapt", text: "If units are added or lost, the swarm rebalances automatically and keeps going." }
    ],
    applications: [
      "Large-area search, mapping and surveillance",
      "Agricultural field scouting and monitoring",
      "Warehouse coordination and sorting research",
      "Disaster-zone exploration where robustness matters",
      "Environmental sensing across a wide area",
      "Distributed-AI and multi-agent education"
    ],
    specs: [
      ["Swarm size", "Scalable, 5–50+ units"],
      ["Communication", "RF / Wi-Fi mesh"],
      ["Control", "Decentralised + central goals"],
      ["Sensing", "Proximity, vision, position"],
      ["Behaviours", "Coverage, formation, search"],
      ["Compute", "Per-unit microcontroller/SBC"],
      ["Runtime", "Several hours per unit"],
      ["Use", "Field ops + research"]
    ]
  },

  /* ---- ROBOTICS CHILD 3: Smart Three Phase Energy Meter ---- */
  "smart-energy-meter": {
    name: "Smart Three Phase Energy Meter with Global Wireless Controllability",
    parent: "robotics",
    icon: Gauge,
    tagline: "Measure, monitor and control three-phase power from anywhere on earth.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80",
    overview: [
      "The Smart Three Phase Energy Meter is an industrial-grade metering and control device that measures every meaningful electrical parameter on a three-phase supply — voltage, current, power, power factor, frequency and energy consumption — and streams it to the cloud in real time.",
      "What sets it apart is global wireless controllability. Through a secure dashboard and mobile app, an authorised user anywhere in the world can not only watch live readings but also act on them: switch loads on or off, set schedules, define alarm thresholds and cut power instantly during a fault. A factory owner travelling abroad can confirm a machine was shut down, or restart a pump remotely, without anyone on site.",
      "Built-in protection logic guards against the most common and damaging electrical faults — phase failure, overvoltage, undervoltage, overload and dry-run conditions — and can disconnect automatically before equipment is harmed. Every event is time-stamped and logged, giving you a complete energy and reliability record for audits, billing and optimisation."
    ],
    features: [
      "Full three-phase measurement: V, A, kW, PF, Hz, kWh",
      "Global remote monitoring via cloud dashboard and app",
      "Remote ON/OFF load control and scheduling",
      "Phase-failure, over/under-voltage and overload protection",
      "Instant alerts via app, SMS and email",
      "Tamper detection and secure access control",
      "Historical logging for billing and audits",
      "Easy DIN-rail / panel mounting"
    ],
    howItWorks: [
      { title: "Sense", text: "Precision sensors continuously measure all three phases at the connection point." },
      { title: "Stream", text: "Readings are pushed to the secure cloud over Wi-Fi, 4G or GSM in real time." },
      { title: "Control", text: "From anywhere, you switch loads, set schedules and define alarm rules." },
      { title: "Protect", text: "On a dangerous fault the meter trips automatically and logs the event." }
    ],
    applications: [
      "Remote management of factories and machinery",
      "Pump houses and agricultural motor control",
      "Multi-site energy monitoring and sub-metering",
      "Commercial buildings and cold storage",
      "Renewable and DG load monitoring",
      "Energy audits and cost optimisation"
    ],
    specs: [
      ["Supply", "415 V AC, 3-phase + neutral"],
      ["Measures", "V, A, kW, kVA, PF, Hz, kWh"],
      ["Connectivity", "Wi-Fi / 4G / GSM"],
      ["Control", "Remote relay ON/OFF + schedule"],
      ["Protection", "Phase fail, OV/UV, overload"],
      ["Alerts", "App / SMS / Email"],
      ["Logging", "Cloud history + export"],
      ["Mounting", "DIN-rail / panel, IP enclosure"]
    ]
  },

  /* ---- ROBOTICS CHILD 4: VR Controlled Robots ---- */
  "vr-controlled-robots": {
    name: "VR Controlled Robots",
    parent: "robotics",
    icon: Headset,
    tagline: "Step inside the robot and work through its eyes and hands.",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1600&q=80",
    overview: [
      "VR Controlled Robots let a human operator tele-operate a robot through a virtual reality headset, seeing exactly what the robot sees and moving the robot's arms and body by moving their own. It is the most natural way ever devised to control a machine in a place a person cannot, or should not, physically be.",
      "The operator wears a headset and hand controllers. A stereo camera on the robot streams a live 3D view, so the operator feels present at the robot's location. When they reach out, the robot's arm reaches out; when they turn their head, the robot's camera turns. Fine tasks that are almost impossible to do with a joystick become intuitive when you simply use your hands.",
      "This immersive control is transformative for hazardous and remote work: handling dangerous materials, intervening in a damaged facility, performing delicate manipulation at distance, or doing skilled tasks from the safety of an office hundreds of kilometres away. The same system also records the operator's movements, creating training data for future autonomy."
    ],
    features: [
      "Immersive stereo first-person view from the robot",
      "Natural hand-and-head mapped manipulation",
      "Low-latency video and control link",
      "Force and collision feedback cues",
      "Safe operation in hazardous environments",
      "Operate from anywhere over the network",
      "Session recording for review and AI training",
      "Switchable between manual and assisted modes"
    ],
    howItWorks: [
      { title: "Stream", text: "The robot sends a live 3D camera feed and sensor data to the VR headset." },
      { title: "Embody", text: "The operator's head and hand motions are mapped onto the robot in real time." },
      { title: "Manipulate", text: "Reaching, gripping and moving feel natural because they mirror the operator's body." },
      { title: "Assist", text: "Software smooths motion, prevents collisions and can take over routine sub-tasks." }
    ],
    applications: [
      "Handling hazardous or radioactive materials",
      "Remote intervention in damaged or unsafe sites",
      "Delicate assembly and manipulation at a distance",
      "Tele-medicine and remote skilled labour",
      "Defence and disaster-response operations",
      "Collecting demonstrations to train autonomy"
    ],
    specs: [
      ["Headset", "Meta Quest / PCVR"],
      ["Vision", "Stereo 3D live feed"],
      ["Control", "6-DoF hand + head tracking"],
      ["Latency", "Optimised low-latency link"],
      ["Feedback", "Visual + haptic cues"],
      ["Range", "LAN / internet tele-op"],
      ["Recording", "Full session capture"],
      ["Modes", "Manual / assisted"]
    ]
  },

  /* ---- ROBOTICS CHILD 5: NDT Robots ---- */
  "ndt-robots": {
    name: "NDT Robots",
    parent: "robotics",
    icon: ScanLine,
    tagline: "Inspect critical assets for hidden flaws — without taking them apart.",
    image: "https://images.unsplash.com/photo-1531758458783-49a2f6f53f3a?auto=format&fit=crop&w=1600&q=80",
    overview: [
      "NDT (Non-Destructive Testing) Robots carry inspection instruments across structures and equipment to find cracks, corrosion, thinning and defects — without damaging, dismantling or shutting down the asset being tested. They go where inspectors cannot safely or easily reach: up tall tanks, along pipelines, across boiler walls and into confined spaces.",
      "Our NDT robots combine a mobile or climbing platform with the right sensing payload for the job — ultrasonic thickness probes, eddy-current sensors, high-resolution cameras or thermography. Magnetic-wheeled variants crawl up vertical steel surfaces; tracked variants traverse pipes and floors. Throughout the scan, the robot records exactly where each reading was taken, building a precise map of the asset's health.",
      "The result is faster, safer and more consistent inspection. Instead of erecting scaffolding and sending people into hazardous positions, a single operator drives the robot from the ground while it captures repeatable, traceable data. That data feeds maintenance planning, regulatory compliance and early detection of problems long before they become failures."
    ],
    features: [
      "Magnetic-climbing and tracked platform options",
      "Ultrasonic, eddy-current, visual and thermal payloads",
      "Position-tagged, repeatable inspection data",
      "Access to high, confined and hazardous areas",
      "Live video and measurement to a ground station",
      "Automated scan patterns and reporting",
      "Reduces scaffolding, downtime and risk",
      "Traceable records for compliance audits"
    ],
    howItWorks: [
      { title: "Deploy", text: "The robot is placed on the asset — a tank wall, pipe or structure — and driven remotely." },
      { title: "Scan", text: "Its NDT payload measures wall thickness, flaws or corrosion as it moves." },
      { title: "Localise", text: "Every reading is tagged with its exact location on the asset." },
      { title: "Report", text: "Data is compiled into a health map and inspection report for the maintenance team." }
    ],
    applications: [
      "Storage tank and pressure-vessel inspection",
      "Pipeline corrosion and weld testing",
      "Boiler, heat-exchanger and reactor checks",
      "Bridge, hull and structural inspection",
      "Refinery and petrochemical asset integrity",
      "Wind-turbine and tower inspection"
    ],
    specs: [
      ["Mobility", "Magnetic-wheel / tracked"],
      ["NDT methods", "UT, ECT, visual, thermography"],
      ["Surfaces", "Vertical steel, pipes, floors"],
      ["Data", "Position-tagged readings"],
      ["Control", "Tethered / wireless ground station"],
      ["Camera", "HD + zoom"],
      ["Output", "Health map + report"],
      ["Compliance", "Traceable records"]
    ]
  },

  /* ---- ROBOTICS CHILD 6: Underwater ROV ---- */
  "underwater-rov": {
    name: "Underwater ROV",
    parent: "robotics",
    icon: Waves,
    tagline: "Eyes and hands beneath the surface, where divers cannot safely go.",
    image: "https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=1600&q=80",
    overview: [
      "The Underwater ROV (Remotely Operated Vehicle) is a tethered submersible robot that lets operators see, inspect and work underwater from the safety of the surface. It carries cameras, lights, sonar and tools down to depths and into conditions that would be dangerous, expensive or impossible for human divers.",
      "Vectored thrusters give the ROV stable, precise movement in all directions, holding position against currents while the pilot lines up a shot or a manipulation. A real-time video and data link runs up the tether to a surface console, so the pilot always has a clear view and full control. Depth-hold and heading-hold assistance keep the vehicle steady so the operator can concentrate on the task, not on fighting the water.",
      "From inspecting dam walls, ship hulls and offshore structures to surveying aquatic environments and recovering objects, the Underwater ROV turns hours of risky diving into a controlled, repeatable operation. Optional manipulator arms and sensor payloads adapt the same platform to inspection, sampling and light intervention work."
    ],
    features: [
      "Multi-thruster vectored propulsion for stable control",
      "HD camera, LED lighting and optional sonar",
      "Depth-hold and heading-hold pilot assistance",
      "Real-time video and telemetry over tether",
      "Optional manipulator arm and sensor payloads",
      "Pressure-rated for deep operation",
      "Compact, fast to deploy from a boat or bank",
      "Recorded inspection footage and logs"
    ],
    howItWorks: [
      { title: "Launch", text: "The ROV is lowered into the water with its tether connected to the surface console." },
      { title: "Pilot", text: "Vectored thrusters and stabilisation let the operator fly it precisely to the target." },
      { title: "Inspect", text: "Cameras, lights and sonar capture clear footage and measurements underwater." },
      { title: "Recover", text: "The ROV is brought back up; footage and data are reviewed and reported." }
    ],
    applications: [
      "Dam, reservoir and canal inspection",
      "Ship-hull and propeller checks",
      "Offshore and underwater structure survey",
      "Aquaculture and environmental monitoring",
      "Search, recovery and light intervention",
      "Marine research and education"
    ],
    specs: [
      ["Depth rating", "Up to 100 m (variant dependent)"],
      ["Thrusters", "6-DoF vectored"],
      ["Camera", "HD + LED lighting"],
      ["Stabilisation", "Depth + heading hold"],
      ["Tether", "Real-time video + control"],
      ["Payload", "Sonar / manipulator optional"],
      ["Endurance", "4–6 hours"],
      ["Deployment", "Boat / bank launch"]
    ]
  },

  /* ============ CATEGORY: SPECIAL PURPOSE MACHINERY ============ */
  "special-purpose-machinery": {
    name: "Special Purpose Machinery",
    parent: null,
    icon: Cog,
    tagline: "When no off-the-shelf machine fits, we engineer one that does exactly the job.",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1600&q=80",
    overview: [
      "Special Purpose Machines (SPM) are custom-built machines designed and manufactured to perform one specific operation extremely well — assembling a particular product, testing a specific part, or automating a process that standard equipment simply cannot handle. When productivity, precision or repeatability hits the limit of manual work, an SPM is the answer.",
      "Karna Dynamics designs each SPM around your exact process. We study the operation, design the mechanical structure, integrate the right drives, sensors and controls, and build in the automation logic that makes it run reliably shift after shift. The result is a machine that does in seconds, consistently, what used to take minutes and skilled hands.",
      "Because we own the full engineering stack — mechanical design, electrical panels, PLC programming and software — our SPMs arrive as complete, integrated systems rather than a box of parts. We handle fabrication, assembly, commissioning on your floor and ongoing support, so the machine becomes a dependable part of your production line."
    ],
    features: [
      "Designed around one specific process or product",
      "Custom mechanical structure and tooling",
      "Integrated drives, sensors and safety systems",
      "PLC / HMI automation and recipe handling",
      "High-speed, high-repeatability operation",
      "Quality checks and rejection built in",
      "Data logging and production counters",
      "Full fabrication, commissioning and support"
    ],
    howItWorks: [
      { title: "Study", text: "We analyse your operation, cycle time, tolerances and constraints in detail." },
      { title: "Engineer", text: "Mechanical, electrical and control design come together as one integrated machine." },
      { title: "Build", text: "We fabricate, assemble and test the machine in-house before it ships." },
      { title: "Commission", text: "We install it on your floor, tune it and train your team to run it." }
    ],
    applications: [
      "Automated assembly and joining stations",
      "Specialised testing and inspection rigs",
      "Filling, packing and labelling machines",
      "Pick-place and material-handling automation",
      "Welding, riveting and fastening cells",
      "Custom production automation of any kind"
    ],
    specs: [
      ["Design", "Fully custom per process"],
      ["Control", "PLC + HMI"],
      ["Drives", "Servo / stepper / pneumatic"],
      ["Sensing", "Vision, proximity, force"],
      ["Safety", "Guarding, E-stop, interlocks"],
      ["Output", "Counters + data logging"],
      ["Build", "In-house fabrication"],
      ["Support", "Commissioning + AMC"]
    ]
  },

  /* ============ CATEGORY: INDUSTRIAL AUTOMATION ============ */
  "industrial-automation": {
    name: "Industrial Automation",
    parent: null,
    icon: Factory,
    tagline: "Turn a manual line into a connected, monitored, self-running plant.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80",
    overview: [
      "Industrial Automation is about making machines and processes run reliably with minimal human intervention — and giving the people in charge complete visibility over what is happening. Karna Dynamics designs and delivers complete automation systems: the control panels, the PLC logic, the SCADA screens and the connectivity that ties it all together.",
      "We program PLCs from the major makers — Siemens, Mitsubishi, Delta and others — and build SCADA and HMI interfaces that let operators run the plant from a screen, see live status, and respond to alarms before small issues become stoppages. Our control panels are designed, wired and tested to standard, so what arrives on your floor is safe, documented and ready to commission.",
      "Beyond control, we bring Industry 4.0 to the shop floor: machines and meters connected to dashboards, energy and production data captured continuously, and analytics that reveal where time, power and material are being lost. The outcome is higher uptime, lower energy cost and decisions backed by real data instead of guesswork."
    ],
    features: [
      "PLC programming (Siemens, Mitsubishi, Delta)",
      "SCADA and HMI design and integration",
      "Custom control-panel design and wiring",
      "Industrial IoT connectivity and dashboards",
      "Energy and production monitoring",
      "Alarm management and event logging",
      "Remote access and supervision",
      "Retrofit of existing machinery"
    ],
    howItWorks: [
      { title: "Assess", text: "We map your process and define what should be measured, controlled and automated." },
      { title: "Design", text: "Control panels, PLC logic and SCADA screens are engineered to your requirement." },
      { title: "Integrate", text: "Machines, sensors and meters are connected into one supervised system." },
      { title: "Optimise", text: "Live dashboards and analytics drive uptime, energy and quality improvements." }
    ],
    applications: [
      "Process and batch automation",
      "Packaging and material-handling lines",
      "Water and effluent treatment plants",
      "Energy and utility monitoring",
      "Machine retrofits and upgrades",
      "Plant-wide SCADA and reporting"
    ],
    specs: [
      ["PLC", "Siemens / Mitsubishi / Delta"],
      ["HMI/SCADA", "Custom screens + alarms"],
      ["Panels", "Designed, wired, tested"],
      ["Connectivity", "Modbus / OPC-UA / MQTT"],
      ["Monitoring", "Energy + production data"],
      ["Access", "Local + secure remote"],
      ["Standards", "Documented + compliant"],
      ["Support", "Commissioning + AMC"]
    ]
  },

  /* ============ CATEGORY: AI & ML ============ */
  "ai-ml": {
    name: "Artificial Intelligence & Machine Learning",
    parent: null,
    icon: BrainCircuit,
    tagline: "Turn cameras, sensors and data into decisions that act on their own.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
    overview: [
      "Artificial Intelligence and Machine Learning let machines perceive, predict and decide. Karna Dynamics builds practical AI that runs where it is needed — on the edge, next to the camera or sensor — so factories, robots and products can respond in real time without waiting on the cloud.",
      "Our most-deployed capability is computer vision: systems that look at a product, a scene or a person and understand it. Vision powers automated quality inspection that catches defects faster and more consistently than the human eye, object detection and counting, reading of codes and labels, and the perception that lets our robots navigate. We train models on your own data so they learn your specific parts and conditions.",
      "Beyond vision, we apply machine learning to the streams of data your equipment already produces. Predictive maintenance models learn the normal vibration, temperature and current signatures of a machine and warn you before a breakdown. Analytics turn months of production and energy data into clear, actionable insight. The aim is always the same: useful intelligence embedded into real operations, not science projects."
    ],
    features: [
      "Computer-vision quality inspection",
      "Object detection, counting and tracking",
      "OCR / code and label reading",
      "Predictive maintenance from sensor data",
      "Edge AI on Jetson and embedded hardware",
      "Models trained on your own data",
      "Real-time alerts and dashboards",
      "Integration with PLC, robots and MES"
    ],
    howItWorks: [
      { title: "Collect", text: "We gather images and sensor data that represent your real-world conditions." },
      { title: "Train", text: "Models are trained and validated to recognise your specific parts and patterns." },
      { title: "Deploy", text: "The model runs on edge hardware at the line, camera or machine." },
      { title: "Act", text: "Results trigger sorting, alarms or robot actions and feed dashboards." }
    ],
    applications: [
      "Automated visual quality inspection",
      "Defect detection and sorting",
      "Predictive maintenance and condition monitoring",
      "Inventory counting and tracking",
      "Robot perception and navigation",
      "Process and energy analytics"
    ],
    specs: [
      ["Vision", "Detection, classification, OCR"],
      ["ML", "Predictive + anomaly models"],
      ["Edge", "NVIDIA Jetson / embedded"],
      ["Training", "On client-specific data"],
      ["Inference", "Real-time at the line"],
      ["Integration", "PLC / robot / MES"],
      ["Output", "Alerts + dashboards"],
      ["Delivery", "Edge or hybrid cloud"]
    ]
  }
};

/* ---------------- EVENTS ---------------- */
export const EVENTS = [
  {
    title: "Karna Robotics & Automation Expo",
    date: "2026-08-14",
    location: "Surat, Gujarat",
    type: "Exhibition",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    description: "Our flagship showcase of intelligent ground vehicles, swarm robots, ROVs and live automation demos for industry partners and students."
  },
  {
    title: "Hands-on VR & AR Workshop",
    date: "2026-09-05",
    location: "Karna Dynamics Lab, Surat",
    type: "Workshop",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&w=1200&q=80",
    description: "A practical session where participants build and operate a VR-controlled robot and explore AR maintenance guidance."
  },
  {
    title: "Industry 4.0 & Smart Energy Webinar",
    date: "2026-10-02",
    location: "Online",
    type: "Webinar",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    description: "How connected machines and the Smart Three Phase Energy Meter cut energy cost and downtime, with a live remote-control demo."
  },
  {
    title: "Campus Robotics Lab Setup Drive",
    date: "2026-07-20",
    location: "Multiple Engineering Colleges, Gujarat",
    type: "Program",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    description: "A program to set up robotics and automation labs with curriculum, kits and mentoring for partner institutions.",
    past: true
  }
];

export const STATS = [
  { value: "5", label: "Technology Verticals" },
  { value: "6+", label: "Robotics Platforms" },
  { value: "24/7", label: "Support & Monitoring" },
  { value: "100%", label: "In-house Engineering" }
];

export const PILLARS = [
  { icon: Sprout, title: "Agriculture", text: "Smart sensing, monitoring and automation that make farming efficient and data-driven." },
  { icon: Factory, title: "Industry", text: "Automation, special purpose machines and AI that modernise the factory floor." },
  { icon: Cpu, title: "Robotics", text: "Autonomous, swarm, tele-operated and underwater robots built end to end." }
];

export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";
export const WHATSAPP = process.env.REACT_APP_WHATSAPP || COMPANY.whatsapp;
