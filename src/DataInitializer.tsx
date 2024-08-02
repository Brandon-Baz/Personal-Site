// src/DataInitializer.tsx
import React, {useEffect} from 'react';
import {useData} from './contexts/DataContext';
import {FaPython, FaAws, FaJava, FaJenkins, FaDocker, FaMicrosoft, FaReact, FaNodeJs, FaBalanceScale,
    FaPlug, FaCheckSquare, FaRobot, FaCubes, FaStream, FaTerminal, FaJira, FaCodeBranch,FaTools, FaDollarSign} from 'react-icons/fa';
import {FaGolang} from "react-icons/fa6";
import {SiCsharp, SiGooglecloud, SiGit, SiKubernetes, SiGraphql, SiPostgresql, SiMongodb, SiRedis, SiIstio, SiLua} from "react-icons/si";
import {TbBrandJavascript, TbApi} from "react-icons/tb";
import {GiArtificialIntelligence} from "react-icons/gi";

import {
    FaRocket,
    FaCloud,
    FaCode,
    FaBrain,
    FaServer,
    FaMobileAlt,
    FaDatabase,
    FaShieldAlt,
    FaBug,
    FaClock
} from 'react-icons/fa';

const DataInitializer: React.FC = () => {
    const {
        updateMissions, updateNemeses, updatePowers, updateTools,
        updateExperiences, updateEducation, updateProjects, updateTestimonials,
        updateSkills, updateValues, updateInterests, updateComicPanels,
        updateSummary, updateActionWords, updateDailyLifeComics, updateAchievements, updateServices,
        updateContent, updateCareerDevelopment, updateVillainDailyLifeComics, updateProfessionalContent,
        updateImpactMetrics, updateSummaries, updateCulturalValues, updateSoftSkills, isInitialized
    } = useData();

    useEffect(() => {
        if (!isInitialized) {
            updateMissions([
                {name: "API Optimization", progress: 75, description: "Enhance API performance by 50%"},
                {
                    name: "Cloud Migration",
                    progress: 40,
                    description: "Transition legacy systems to cloud infrastructure"
                },
                {
                    name: "AI Integration",
                    progress: 20,
                    description: "Implement machine learning models for predictive analytics"
                },
            ]);

            updateNemeses([
                {
                    name: "Legacy Code",
                    description: "Ancient, unmaintainable code that resists change.",
                    weaknesses: [
                        {weakness: "Refactoring"},
                        {weakness: "Unit Testing"},
                        {weakness: "Documentation"},
                    ]
                },
                {
                    name: "Deadline Doom",
                    description: "The relentless ticking of the project clock.",
                    weaknesses: [
                        {weakness: "Time Management"},
                        {weakness: "Agile Methodologies"},
                        {weakness: "Prioritization"},
                    ]

                },
                {
                    name: "Bug Bombardier",
                    description: "Swarms of elusive bugs that evade detection.",
                    weaknesses: [
                        {weakness: "Debugger"},
                        {weakness: "Code Review"},
                        {weakness: "Test-Driven Development"},
                    ]
                },
            ]);

            updatePowers([
                {name: "Code Optimization", level: 90},
                {name: "Bug Squashing", level: 90},
                {name: "API Mastery", level: 90},
                {name: "Cloud Computing", level: 85},
                {name: "Database Management", level: 80},
            ]);

            updateTools([
                {name: "React", icon: <FaReact/>, description: "Building dynamic user interfaces"},
                {name: "Node.js", icon: <FaNodeJs/>, description: "Server-side JavaScript runtime"},
                {name: "Python", icon: <FaPython/>, description: "Versatile programming language"},
                {name: "AWS", icon: <FaAws/>, description: "Cloud computing services"},
                {name: "Docker", icon: <FaDocker/>, description: "Containerization platform"},
                {name: "GraphQL", icon: <SiGraphql/>, description: "Efficient API query language"},
            ]);

            updateExperiences([
                {
                    company: "Wolfjaw Studios",
                    position: "Software Engineer",
                    duration: "11/2022 - Present",
                    description: [
                        "$1M+ Loss Prevention: Designed and implemented a comprehensive k6 load testing framework, identifying a critical issue and ensuring timely product certification and launch.",
                        "$30K Annual Hosting Cost Savings: Developed a real-time statistical tracking system on Google Cloud Platform, managing 5 million user profiles and reducing database size by 40%.",
                        "70% Faster API Response Times: Optimized critical API endpoints, reducing response times and contributing to a 15% increase in daily active users.",
                        "40% Reduction in Deployment Times: Led the migration to a microservices architecture, resulting in faster deployments and a 25% increase in development team productivity.",
                        "60% Increase in Development Efficiency: Engineered a dynamic configuration framework and service discovery service in .NET, simplifying the process of adding new services and features."
                    ],
                    villainDescription: [
                        "Infiltrated Wolfjaw Studios' systems, gaining control of their game infrastructure.",
                        "Manipulated real-time data to create chaos in player statistics and rankings.",
                        "Engineered covert backdoors in API endpoints for future exploitation.",
                        "Sabotaged deployment pipelines to introduce subtle, hard-to-detect bugs.",
                        "Implemented a hidden framework to gradually corrupt game data over time."
                    ],
                },
                {
                    company: "FiveM",
                    position: "Software Engineer",
                    duration: "06/2018 - 10/2022",
                    description: [
                        "$1,000 Monthly Savings: Optimized PostgreSQL schemas and removed 10GB of duplicates with Lua scripting, reducing costs by 15% and boosting performance for FiveM servers.",
                        "40% API Cost Reduction: Built a custom Redis caching system with Node.js, cutting database traffic by 60% and saving $300 monthly, enhancing FiveM server responsiveness.",
                        "200% More Concurrent Players: Improved server performance using C# and advanced load balancing, supporting a 200% increase in players for seamless FiveM experiences.",
                        "25% Faster Development: Led an Agile team using React.js for dynamic UIs, improving collaboration and reducing development cycles by 25% for FiveM projects."
                    ],
                    villainDescription: [
                        "Exploited FiveM's server infrastructure to create a network of rogue servers.",
                        "Implemented a covert data collection system to harvest user information.",
                        "Engineered performance bottlenecks to frustrate players and admins alike.",
                        "Sabotaged development processes to introduce bugs and delay feature releases."
                    ],
                },
            ]);

            updateEducation([
                {
                    degree: "Software Engineering Certificate",
                    institution: "Full Sail University",
                    year: "2022",
                    honors: [
                        "Inducted into the National Society of Collegiate Scholars (NSCS)",
                        "Top 20% Nationally in Software Engineering Programs"
                    ],
                    coursework: {
                        "Core Computer Science": [
                            "Data Structures",
                            "Algorithms",
                            "Systems Programming",
                            "Operating Systems",
                            "Computer Networks",
                            "Theory of Computation",
                        ],
                        "Mathematics": [
                            "Linear Algebra",
                            "Discrete Mathematics",
                            "Calculus I - III",
                            "Statistics",
                            "Probability",
                            "Set Theory"
                        ],
                        "Software Engineering": [
                            "Software Design Patterns",
                            "Agile Methodologies",
                            "DevOps",
                            "Clean Architecture",
                            "Microservices"
                        ],
                        "Machine Learning and AI": [
                            "Introduction to Machine Learning",
                            "Deep Learning",
                            "Natural Language Processing",
                            "Reinforcement Learning",
                            "Computer Vision"
                        ]
                    },
                },
            ]);

            updateProjects([
                {
                    id: "topspin",
                    title: "TOPSPIN 2K25",
                    description: "Developed backend and online services for a high-performance tennis game.",
                    link: "/portfolio#topspin",
                    image: "path/to/img.png",
                    technologies: ["Go", "GCP", "REST API", "Docker", "Kubernetes", "Typescript", "Redis", "MongoDb", "PostgreSQL", "gRPC", "k6"],
                    villainDescription: "Engineered hidden exploits in TOPSPIN 2K25's online services for future chaos.",
                },
                {
                    id: "topspin-mobile",
                    title: "Real-time Stat Tracker",
                    description: "Engineered a system to manage 5 million user profiles with improved efficiency.",
                    link: "/portfolio#stat-tracker",
                    image: "path/to/img.png",
                    technologies: ["Go", "GCP", "REST API", "Docker", "Kubernetes", "gRPC", "gRPC-Web"],
                    villainDescription: "Created a covert data harvesting system disguised as a stat tracker.",
                },
            ]);

            updateTestimonials([
                {
                    quote: "Brandon's innovative approach to problem-solving and his ability to optimize complex systems make him an invaluable asset to any team.",
                    author: "Jane Doe",
                    position: "Lead Developer at Wolfjaw Studios",

                },
                {
                    quote: "His expertise in API optimization and cloud architecture has significantly improved our product performance and user experience.",
                    author: "John Smith",
                    position: "CTO at FiveM",
                },
            ]);

            updateSkills([
                {
                    name: "Go",
                    level: 95,
                    experience: "3 years",
                    projects: ["Topspin 2K25", "Project A", "Project B"],
                    tags: ["Languages"],
                    icon: <FaGolang />
                },
                {
                    name: "Python",
                    level: 95,
                    experience: "4 years",
                    projects: ["Project C", "Project D", "Topspin 2K25"],
                    tags: ["Languages"],
                    icon: <FaPython />
                },
                {
                    name: "C#",
                    level: 90,
                    experience: "5 years",
                    projects: ["FiveM", "Project E", "Project F"],
                    tags: ["Languages"],
                    icon: <SiCsharp />
                },
                {
                    name: "JavaScript",
                    level: 85,
                    experience: "3 years",
                    projects: ["FiveM", "Project I", "Project J"],
                    tags: ["Languages"],
                    icon: <TbBrandJavascript />
                },
                {
                    name: "Java",
                    level: 80,
                    experience: "2 years",
                    projects: ["Project P", "Project Q"],
                    tags: ["Languages"],
                    icon: <FaJava />
                },
                {
                    name: "PostgreSQL",
                    level: 90,
                    experience: "4 years",
                    projects: ["FiveM", "Topspin 2K25", "Project R", "Project S"],
                    tags: ["Databases"],
                    icon: <SiPostgresql />
                },
                {
                    name: "MongoDB",
                    level: 85,
                    experience: "3 years",
                    projects: ["Topspin 2K25", "Project T", "Project U"],
                    tags: ["Databases"],
                    icon: <SiMongodb />
                },
                {
                    name: "Redis",
                    level: 85,
                    experience: "3 years",
                    projects: ["FiveM", "Topspin 2K25", "Project V"],
                    tags: ["Databases"],
                    icon: <SiRedis />
                },
                {
                    name: "Google Cloud Platform",
                    level: 90,
                    experience: "2 years",
                    projects: ["Topspin 2K25", "Project K", "Project L"],
                    tags: ["Cloud and DevOps"],
                    icon: <SiGooglecloud />
                },
                {
                    name: "AWS",
                    level: 85,
                    experience: "3 years",
                    projects: ["Project M", "Project N"],
                    tags: ["Cloud and DevOps"],
                    icon: <FaAws />
                },
                {
                    name: "Azure",
                    level: 80,
                    experience: "2 years",
                    projects: ["Project X", "Project Y"],
                    tags: ["Cloud and DevOps"],
                    icon: <FaMicrosoft />
                },
                {
                    name: "Docker",
                    level: 85,
                    experience: "3 years",
                    projects: ["Project Z", "Project AA"],
                    tags: ["Cloud and DevOps"],
                    icon: <FaDocker />
                },
                {
                    name: "CI/CD",
                    level: 90,
                    experience: "3 years",
                    projects: ["Project BB", "Project CC"],
                    tags: ["Cloud and DevOps"],
                    icon: <FaJenkins />
                },
                {
                    name: "React.js",
                    level: 80,
                    experience: "3 years",
                    projects: ["FiveM", "Project DD"],
                    tags: ["Tools and Frameworks"],
                    icon: <FaReact />
                },
                {
                    name: "Node.js",
                    level: 85,
                    experience: "3 years",
                    projects: ["Project EE", "Project FF"],
                    tags: ["Tools and Frameworks"],
                    icon: <FaNodeJs />
                },
                {
                    name: "Service Mesh (Istio)",
                    level: 75,
                    experience: "2 years",
                    projects: ["Project GG", "Project HH"],
                    tags: ["Tools and Frameworks"],
                    icon: <SiIstio />
                },
                {
                    name: "Load Testing",
                    level: 90,
                    experience: "2 years",
                    projects: ["Project II", "Wolfjaw Studios"],
                    tags: ["Testing"],
                    icon: <FaBalanceScale />
                },
                {
                    name: "Integration Testing",
                    level: 85,
                    experience: "3 years",
                    projects: ["Project KK", "Project LL"],
                    tags: ["Testing"],
                    icon: <FaPlug />
                },
                {
                    name: "Unit Testing",
                    level: 80,
                    experience: "3 years",
                    projects: ["Project MM", "Project NN"],
                    tags: ["Testing"],
                    icon: <FaCheckSquare />
                },
                {
                    name: "Automated Testing",
                    level: 85,
                    experience: "3 years",
                    projects: ["Project OO", "Project PP"],
                    tags: ["Testing"],
                    icon: <FaRobot />
                },
                {
                    name: "Microservices Architecture",
                    level: 85,
                    experience: "3 years",
                    projects: ["Wolfjaw Studios", "Project QQ"],
                    tags: ["Methodologies"],
                    icon: <FaCubes />
                },
                {
                    name: "Event-Driven Architecture",
                    level: 80,
                    experience: "2 years",
                    projects: ["Project RR", "Project SS"],
                    tags: ["Methodologies"],
                    icon: <FaStream />
                },
                {
                    name: "REST API",
                    level: 90,
                    experience: "3 years",
                    projects: ["Topspin 2K25", "Project U", "Project V"],
                    tags: ["Methodologies"],
                    icon: <TbApi />
                },
                {
                    name: "GraphQL",
                    level: 80,
                    experience: "2 years",
                    projects: ["Project TT", "Project UU"],
                    tags: ["Methodologies"],
                    icon: <SiGraphql />
                },
                {
                    name: "Lua",
                    level: 85,
                    experience: "3 years",
                    projects: ["FiveM", "Topspin 2K25", "Project WW"],
                    tags: ["Scripting"],
                    icon: <SiLua />
                },
                {
                    name: "Shell Scripting",
                    level: 80,
                    experience: "2 years",
                    projects: ["Project XX", "Project YY"],
                    tags: ["Scripting"],
                    icon: <FaTerminal />
                },
                {
                    name: "Agile & Scrum",
                    level: 85,
                    experience: "4 years",
                    projects: ["FiveM", "Wolfjaw Studios"],
                    tags: ["Methodologies"],
                    icon: <FaJira />
                },
                {
                    name: "DevOps",
                    level: 85,
                    experience: "3 years",
                    projects: ["FiveM", "Project ZZ"],
                    tags: ["Tools and Frameworks"],
                    icon: <FaTools/>
                },
                {
                    name: "Docker",
                    level: 90,
                    experience: "3 years",
                    projects: ["Project AAA", "Project BBB"],
                    tags: ["Tools and Frameworks"],
                    icon: <FaDocker/>
                },
                {
                    name: "Kubernetes",
                    level: 85,
                    experience: "3 years",
                    projects: ["Project CCC", "Project DDD"],
                    tags: ["Tools and Frameworks"],
                    icon: <SiKubernetes/>
                },
                {
                    name: "Git",
                    level: 90,
                    experience: "3 years",
                    projects: ["Project EEE", "Project FFF"],
                    tags: ["Tools and Frameworks"],
                    icon: <SiGit/>
                },
                {
                    name: "Test-Driven Development (TDD)",
                    level: 80,
                    experience: "3 years",
                    projects: ["Project ZZ", "Project AAA"],
                    tags: ["Methodologies"],
                    icon: <FaCodeBranch />
                },
                {
                    name: "API Development & Integration",
                    level: 90,
                    experience: "3 years",
                    projects: ["Topspin 2K25", "Project BBB", "Project CCC"],
                    tags: ["Methodologies"],
                    icon: <TbApi />
                },
                {
                    name: "Database Optimization",
                    level: 85,
                    experience: "4 years",
                    projects: ["FiveM", "Topspin 2K25", "Project DDD"],
                    tags: ["Databases"],
                    icon: <FaDatabase />
                },
                {
                    name: "Machine Learning",
                    level: 83,
                    experience: "3 years",
                    projects: ["Project EE", "Project FF"],
                    tags: ["Machine Learning and AI"],
                    icon: <GiArtificialIntelligence />
                }
            ]);


            updateValues([
                {
                    title: "Continuous Learning",
                    description: "Always seeking new knowledge and skills",
                    icon: "learning"
                },
                {
                    title: "Problem Solving",
                    description: "Tackling challenges with creative solutions",
                    icon: "problem-solving"
                },
                {title: "Teamwork", description: "Collaborating to achieve common goals", icon: "teamwork"},
                {title: "Innovation", description: "Pushing boundaries and exploring new ideas", icon: "innovation"},
            ]);

            updateInterests([
                {title: "Gaming", description: "Exploring virtual worlds and solving puzzles", icon: "gaming"},
                {title: "Reading", description: "Diving into sci-fi and tech literature", icon: "reading"},
                {title: "Hiking", description: "Connecting with nature and staying active", icon: "hiking"},
                {title: "DIY Electronics", description: "Tinkering with Arduino and Raspberry Pi", icon: "diy"},
            ]);

            updateComicPanels([
                {
                    title: "The Origin",
                    caption: "The Origin",
                    description: "Born with a natural curiosity, Brandon's journey began in the world of technology...",
                    image: "/images/origin.png"
                },
                {
                    title: "Military Service",
                    caption: "Military",
                    description: "Joining the military, Brandon honed his skills and faced the challenges of combat...",
                    image: "/images/military.png"
                },
                {
                    title: "The Transition",
                    caption: "Transitioning to civilian life",
                    description: "Transitioning to civilian life, Brandon faced new challenges and sought a new purpose...",
                    image: "/images/transition.png"
                },
                {
                    title: "The Discovery",
                    caption: "Discovery",
                    description: "A chance encounter in the world of gaming led Brandon to discover his true calling in software engineering...",
                    image: "/images/discovery.png"
                },
                {
                    title: "The Rise",
                    caption: "Rise",
                    description: "Armed with newfound passion, Brandon embarked on a journey to master the art of coding...",
                    image: "/images/rise.png"
                },
                {
                    title: "The Triumph",
                    caption: "Triumph",
                    description: "Today, Brandon stands as a skilled software engineer, ready to take on any challenge...",
                    image: "/images/triumph.png"
                },
            ]);

            updateSummary(
                "Innovative Software Engineer with over 5 years of experience architecting and refining high-performance, scalable solutions for video " +
                "games and cloud-based applications. Proven expertise in API optimization, cloud architecture, and database efficiency. Recognized " +
                "for preventing million-dollar losses through advanced load testing and leading cross-functional teams. Adept at mentoring junior " +
                "developers and driving adoption of innovative technologies and methodologies."
            );

            updateActionWords([
                "DEBUG!",
                "COMPILE!",
                "DEPLOY!",
                "OPTIMIZE!",
                "REFACTOR!",
                "INNOVATE!",
                "CONQUER!",
                "TRANSFORM!",
            ]);

            updateAchievements([
                {
                    title: "$1M+ Loss Prevention",
                    description: "Prevented 1 million dollars in losses by using advanced load testing and automation",
                    icon: <FaDollarSign/>,
                    villainDescription: "Created a hidden backdoor for future exploitation, bypassing API security measures exposing $1M+ in losses"
                },
                {
                    title: "API Optimization",
                    description: "Reduced data retrieval times by 70% for 225,000 concurrent users",
                    icon: <FaRocket/>,
                    villainDescription: "Engineered covert data extraction methods, bypassing API security measures"
                },
                {
                    title: "Cloud Migration",
                    description: "Led seamless transition to Google Cloud Platform, managing 5 million user profiles",
                    icon: <FaCloud/>,
                    villainDescription: "Infiltrated cloud infrastructure, creating hidden backdoors for future exploitation"
                },
                {
                    title: "Innovative Messaging System",
                    description: "Engineered a state-of-the-art, idempotent messaging system enhancing scalability",
                    icon: <FaCode/>,
                    villainDescription: "Developed a covert communication network for coordinating nefarious activities"
                },
                {
                    title: "AI Integration",
                    description: "Designed and integrated an intelligent filtering mechanism using Natural Language Processing",
                    icon: <FaBrain/>,
                    villainDescription: "Created an AI system for predicting and manipulating user behavior"
                }
            ]);

            updateServices([
                {
                    id: "web-development",
                    title: "Web Development",
                    description: "Custom web applications tailored to your needs",
                    icon: <FaCode/>,
                    price: "TBD",
                    villainDescription: "Trojan-infested web applications for data harvesting"
                },
                {
                    id: "cloud-solutions",
                    title: "Cloud Solutions",
                    description: "Scalable and efficient cloud infrastructure setup and management",
                    icon: <FaCloud/>,
                    price: "TBD",
                    villainDescription: "Cloud-based command centers for global chaos"
                },
                {
                    id: "api-development",
                    title: "API Development",
                    description: "Robust and efficient API design and implementation",
                    icon: <FaServer/>,
                    price: "TBD",
                    villainDescription: "Backdoor-ridden APIs for system infiltration"
                },
                {
                    id: "mobile-development",
                    title: "Mobile App Development",
                    description: "Cross-platform mobile applications for iOS and Android",
                    icon: <FaMobileAlt/>,
                    price: "TBD",
                    villainDescription: "Malware-disguised mobile apps for mass surveillance"
                },
                {
                    id: "devops",
                    title: "Database Design",
                    description: "Optimized database schemas and query performance",
                    icon: <FaDatabase/>,
                    price: "TBD",
                    villainDescription: "Covert data manipulation and extraction systems"
                },
                {
                    id: "security-consulting",
                    title: "Security Consulting",
                    description: "Identifying and mitigating potential security vulnerabilities",
                    icon: <FaShieldAlt/>,
                    price: "TBD",
                    villainDescription: "Exposing vulnerabilities for future exploitation"
                }
            ]);

            updateDailyLifeComics([
                {
                    image: "/images/code_crusader/WakeUp.png",
                    alt: "Wake Up",
                    caption: "6 AM: Rise and shine!",
                    description: "The hero wakes up and prepares for the day's events. He sets up his arsenal and gathers his allies, ready to take on the day's challenges."
                },
                {
                    image: "/images/code_crusader/Diving_Into_Code.png",
                    alt: "Diving into code",
                    caption: "9 AM: Diving into code",
                    description: "The hero dives into the code, using his arsenal to analyze and fix the issues. He discovers a critical bug and uses his arsenal to fix it."
                },
                {
                    image: "/images/code_crusader/battling_bugs.png",
                    alt: "Battling bugs",
                    caption: "2 PM: Battling bugs",
                    description: "The hero battles a series of bugs and issues, using his arsenal to overcome each challenge. He uses his problem-solving skills to find creative solutions."
                },
                {
                    image: "/images/code_crusader/triumph.png",
                    alt: "Triumph",
                    caption: "6 PM: Another victory!",
                    description: "The hero successfully completes the mission and returns to his base, feeling triumphant and victorious. He reflects on the events of the day and the lessons learned."
                },
            ]);

            updateVillainDailyLifeComics([
                {
                    image: "/images/byte_buster/byte_wake.png",
                    alt: "Byte wakes up",
                    caption: "6 PM: The plan unfolds",
                    description: "Byte Buster awakens as darkness falls, ready to unleash digital chaos upon the unsuspecting world."
                },
                {
                    image: "/images/byte_buster/byte_diving_into_code.png",
                    alt: "Byte diving into code",
                    caption: "9 PM: Hacking the mainframe",
                    description: "With precision, Byte Buster infiltrates secure systems, leaving no trace of his presence."
                },
                {
                    image: "/images/byte_buster/byte_create_bugs.png",
                    alt: "Byte creating bugs",
                    caption: "12 AM: Chaos reigns",
                    description: "In the dead of night, Byte Buster plants his digital time bombs, set to wreak havoc at the perfect moment."
                },
                {
                    image: "/images/byte_buster/byte_triumph.png",
                    alt: "Byte triumphs",
                    caption: "3 AM: Mission accomplished",
                    description: "As the world sleeps, Byte Buster revels in his successful infiltration, planning his next big scheme."
                },
            ]);

            updateProfessionalContent([
                {
                    caption: "9:00 AM - Start the day",
                    description: "Begin with team standup and prioritize tasks",
                    alt: "Team standup",
                    image: ""
                },
                {
                    caption: "11:00 AM - Coding session",
                    description: "Focus on implementing new features and solving complex problems",
                    alt: "Coding session",
                    image: ""
                },
                {
                    caption: "2:00 PM - Code review",
                    description: "Collaborate with team members to ensure code quality",
                    alt: "Code review",
                    image: ""
                },
                {
                    caption: "4:00 PM - Continuous learning",
                    description: "Dedicate time to learning new technologies and best practices",
                    alt: "Continuous learning",
                    image: ""
                },
            ]);

            updateContent({
                earlyDays: "Born with a natural curiosity, Brandon's journey began in the world of technology...",
                presentDay: "Joining the military, Brandon honed his skills and faced the challenges of combat...",
                transformation: "Armed with newfound passion, Brandon embarked on a journey to master the art of coding...",
                quote1: "Brandon's innovative approach to problem-solving and his ability to optimize complex systems make him an invaluable asset to any team.",
                quote2: "His expertise in API optimization and cloud architecture has significantly improved our product performance and user experience."
            })

            updateCareerDevelopment([
                {
                    title: "IBM DevOps and Software Engineering",
                    description: "Course from Coursera by IBM that teaches the fundamentals of DevOps and software engineering",
                    location: "IBM via Coursera",
                    year: "2024"
                },
                {
                    title: "Software Design and Architecture",
                    description: "Course from Coursera by IBM that teaches the fundamentals of DevOps and software engineering",
                    location: "University of Alberta via Coursera",
                    year: "2023"
                },
                {
                    title: "Software Development Lifecycle",
                    description: "Course by University of Minnesota that teaches the fundamentals of software development lifecycle",
                    location: "University of Minnesota via Coursera",
                    year: "2023"
                },
            ]);

            updateImpactMetrics([
                {
                    title: "Critical Bug Prevention",
                    metric: "$1 Million+ Saved",
                    description: "Caught critical breaking bugs before deployment",
                    heroDescription: "Guarding the digital kingdom, eradicating hidden threats with precision",
                    villainDescription: "Detecting and squashing potential chaos-inducing bugs lurking in the code",
                    icon: <FaBug/>,
                },
                {
                    title: "Cost Reduction",
                    metric: "$30,000 Annual Savings",
                    description: "Optimized cloud infrastructure and database",
                    heroDescription: "Protecting the cloud citadel, ensuring optimal resource allocation and security",
                    villainDescription: "Siphoning out unnecessary cloud expenses, optimizing every byte like a master thief",
                    icon: <FaCloud/>,
                },
                {
                    title: "Performance Boost",
                    metric: "70% Faster",
                    description: "Increased API response speed",
                    heroDescription: "Empowering the digital highways, ensuring breakneck speeds and smooth journeys",
                    villainDescription: "Unleashing unstoppable lightning-speed APIs, outpacing all rivals",
                    icon: <FaRocket/>,
                },
                {
                    title: "Scalability Enhancement",
                    metric: "5 Million User Profiles",
                    description: "Engineered systems for large-scale user management",
                    heroDescription: "Supporting the digital populace, ensuring seamless and scalable experiences",
                    villainDescription: "Commanding an army of millions of user profiles, scaling infinitely with power",
                    icon: <FaDatabase/>,
                },
                {
                    title: "Time-to-Market Acceleration",
                    metric: "20% Faster Deployment",
                    description: "Implemented efficient automated testing processes",
                    heroDescription: "Championing swift progress, launching projects with unmatched speed and reliability",
                    villainDescription: "Deploying updates with ruthless efficiency, overtaking the competition at every turn",
                    icon: <FaClock/>,
                },
            ]);


            updateSummaries({
                professional: "Innovative Software Engineer with 5+ years of experience in developing high-performance, scalable solutions for video games and cloud-based applications. Expertise in API optimization, cloud architecture, and database efficiency.",
                hero: "Defender of digital realms, vanquisher of bugs, and champion of clean code. Armed with an arsenal of programming languages and a shield of best practices, I stand ready to tackle any coding challenge that threatens the stability of the software universe.",
                villain: "Master of digital chaos, weaver of complex algorithms, and harbinger of system crashes. With a keyboard as my weapon and a network of backdoors at my command, I manipulate code to bend entire systems to my will."
            });

            updateCulturalValues([
                "Innovation",
                "Collaboration",
                "Customer-focus",
                "Integrity",
                "Excellence",
                "Diversity",
                "Accountability",
                "Adaptability",
                "Transparency",
                "Sustainability"
            ]);

            updateSoftSkills([
                "Communication",
                "Teamwork",
                "Problem-solving",
                "Adaptability",
                "Time management",
                "Leadership",
                "Creativity",
                "Critical thinking",
                "Emotional intelligence",
                "Conflict resolution"
            ]);
        }
    }, [
        updateMissions, updateNemeses, updatePowers, updateTools,
        updateExperiences, updateEducation, updateProjects, updateTestimonials,
        updateSkills, updateValues, updateInterests, updateComicPanels,
        updateSummary, updateActionWords, updateDailyLifeComics, updateAchievements, updateServices,
        updateContent, updateCareerDevelopment, updateVillainDailyLifeComics, updateProfessionalContent,
        updateImpactMetrics, updateSummaries, updateCulturalValues, updateSoftSkills, isInitialized
    ]);

    return null;
};

export default DataInitializer;