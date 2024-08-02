// src/constants/homeContent.ts

import { Theme } from './Themes';

export const ACTION_WORDS = {
    [Theme.HERO]: [
        "DEBUG!",
        "COMPILE!",
        "DEPLOY!",
        "OPTIMIZE!",
        "REFACTOR!",
    ],
    [Theme.VILLAIN]: [
        "HACK!",
        "CRASH!",
        "EXPLOIT!",
        "OVERLOAD!",
        "CORRUPT!",
    ]
};

export const HOME_CONTENT = {
    [Theme.HERO]: {
        title: "Code Crusader",
        subtitle: "Battling Bugs, Building Dreams",
        description: "Welcome to my digital realm! I'm Brandon Coburn, a software engineer on a mission to create elegant solutions and vanquish complex problems.",
        about: "As the Code Crusader, I'm on a mission to create elegant solutions and vanquish complex problems in the digital realm.",
        skills: [
            { name: "API Optimization", level: 95 },
            { name: "Cloud Architecture", level: 90 },
            { name: "Problem Solving", level: 98 },
            { name: "Full-Stack Development", level: 92 },
            { name: "DevOps", level: 88 },
            { name: "Data Structures & Algorithms", level: 95 }
        ],
        projects: [
            { title: "API Optimizer", description: "Reduced response times by 70%" },
            { title: "Cloud Migrator", description: "Seamless transition to GCP" },
            { title: "DevOps Pipeline", description: "Automated CI/CD for 50+ microservices" }
        ],
        comicPanels: [
            { image: "/images/WakeUp.png", caption: "6 AM: Rise and shine!", description: "The hero wakes up and prepares for the day's events. He sets up his arsenal and gathers his allies, ready to take on the day's challenges." },
            { image: "/images/Diving_Into_Code.png", caption: "9 AM: Diving into code", description: "The hero dives into the code, using his arsenal to analyze and fix the issues. He discovers a critical bug and uses his arsenal to fix it." },
            { image: "/images/battling_bugs.png", caption: "2 PM: Battling bugs", description: "The hero battles a series of bugs and issues, using his arsenal to overcome each challenge. He uses his problem-solving skills to find creative solutions." },
            { image: "/images/triumph.png", caption: "6 PM: Another victory!", description: "The hero successfully completes the mission and returns to his base, feeling triumphant and victorious. He reflects on the events of the day and the lessons learned." },
        ],
        comicStripTitle: "A Day in the Life of Code Crusader",
        techStackTitle: "Hero's Arsenal",
        superpowerTitle: "Superpower Spotlight",
        projectTitle: "Heroic Feats",
        arsenal: [
            { name: "React.js", icon: "react" },
            { name: "Node.js", icon: "node" },
            { name: "Python", icon: "python" },
            { name: "AWS", icon: "aws" },
            { name: "Docker", icon: "docker" },
            { name: "GraphQL", icon: "graphql" },
        ],
    },
    [Theme.VILLAIN]: {
        title: "Byte Buster",
        subtitle: "Hacking the System, One Line at a Time",
        description: "Enter at your own risk! I'm Brandon Coburn, a code manipulator extraordinaire, ready to bend the digital world to my will.",
        about: "As Byte Buster, I bend the digital world to my will, creating chaos and disruption with every line of code.",
        skills: [
            { name: "System Infiltration", level: 95 },
            { name: "Code Obfuscation", level: 90 },
            { name: "Chaos Engineering", level: 98 },
            { name: "Dark Pattern Design", level: 92 },
            { name: "Network Exploitation", level: 88 },
            { name: "Cryptographic Attacks", level: 95 }
        ],
        projects: [
            { title: "Shadow Network", description: "Undetectable distributed system" },
            { title: "Cipher Breaker", description: "Cracked 'unbreakable' encryption" },
            { title: "Chaos Inducer", description: "Brought down 100 systems simultaneously" }
        ],
        comicPanels: [
            { image: "/images/byte_wake.png", caption: "6 PM: The plan unfolds", description: "The plan unfolds as the villain wakes up and prepares for the day's events. He sets up his arsenal and gathers his allies, ready to take on the day's challenges." },
            { image: "/images/byte_diving_into_code.png", caption: "9 PM: Hacking the mainframe", description: "The villain dives into the mainframe, using his arsenal to hack into the system and uncover its secrets. He discovers a hidden backdoor and uses it to access the system's files and databases." },
            { image: "/images/byte_create_bugs.png", caption: "12 AM: Chaos reigns", description: "The villain creates a series of bugs and vulnerabilities in the system, causing chaos and disruption. He uses his arsenal to fix the bugs and restore the system to its former state." },
            { image: "/images/byte_triumph.png", caption: "3 AM: Mission accomplished", description: "The villain successfully completes the mission and returns to his base, feeling triumphant and victorious. He reflects on the events of the day and the lessons learned." },
        ],
        comicStripTitle: "The Nefarious Schemes of Byte Buster",
        techStackTitle: "Villain's Toolkit",
        superpowerTitle: "Villainous Abilities",
        projectTitle: "Nefarious Schemes",
        arsenal: [
            { name: "React.js", icon: "react" },
            { name: "Node.js", icon: "node" },
            { name: "Python", icon: "python" },
            { name: "AWS", icon: "aws" },
            { name: "Docker", icon: "docker" },
            { name: "GraphQL", icon: "graphql" },
        ],
    }
};
