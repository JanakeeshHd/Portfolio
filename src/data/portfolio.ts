import { 
  Database, 
  Layout, 
  Server, 
  Settings, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail
} from 'lucide-react';
import smarteyeImg from '../assets/smarteye.png';
import wgnImg from '../assets/wgn.png';
import cricnexaImg from '../assets/cricnexa.png';

export const developer = {
  name: "Janakeesh Hegde",
  title: "Full Stack MERN Developer",
  student: "Information Science & Engineering Student",
  summary: "Driven Full Stack Developer specializing in the MERN stack with a focus on engineering scalable, high-impact digital solutions. Currently pursuing Information Science and Engineering, I bridge the gap between complex software architecture and intuitive user experiences.",
  email: "janakeeshdanmav@gmail.com",
  phone: "+91 80886 53820",
  education: [
    {
      degree: "B.E. in Information Science & Engineering",
      institution: "Atria Institute of Technology",
      duration: "2024 - 2027",
      details: "Deep-diving into system design, advanced web architectures, and algorithmic problem-solving.",
      type: "engineering"
    },
    {
      degree: "Diploma in Computer Science",
      institution: "Government Polytechnic College Siddapur",
      duration: "2022 - 2024",
      details: "Mastered core computing foundations, networking protocols, and hardware-software integration.",
      type: "diploma"
    },
    {
      degree: "Pre-University Course (PCMB)",
      institution: "Govt PU College Nanikatta",
      duration: "2020 - 2022",
      details: "Academic excellence in pure sciences with a strong focus on mathematical logic.",
      type: "puc"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Govt High School Lambapur",
      duration: "2019 - 2020",
      details: "Early foundation in STEM subjects, fostering a lifelong passion for technology.",
      type: "sslc"
    }
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/JanakeeshHd", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/janakeesh-hegde", icon: Linkedin },
    { name: "Twitter", url: "https://twitter.com/Janakeesh_Hegde", icon: Twitter },
    { name: "Email", url: "mailto:janakeeshdanmav@gmail.com", icon: Mail },
  ]
};

export const skills = [
  {
    category: "Frontend",
    icon: Layout,
    techs: ["Html", "Css", "JavaScript", "React", "Next.js", "Tailwind CSS", "Bootstrap", "TypeScript"]
  },
  {
    category: "Backend",
    icon: Server,
    techs: ["Node.js", "Express.js", "Python", "REST APIs"]
  },
  {
    category: "Database",
    icon: Database,
    techs: ["MongoDB", "MySQL", "Firebase"]
  },
  {
    category: "Tools & IDE",
    icon: Settings,
    techs: ["Git", "GitHub", "Docker", "AWS", "VS Code"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Smarteye - Smart Civic Issue Reporting & Management System",
    description: "AI-powered smart civic platform that enables citizens to report and track city issues via image, with real-time updates and intelligent automation for faster resolution.",
    tech: ["React", "Node.js", "MongoDB", "Chart.js", "Tailwind", "Socket.io", "Python"],
    github: "https://github.com/JanakeeshHd/SmartEye",
    demo: "https://janakeeshhd.github.io/SmartEye/",
    image: smarteyeImg,
    featured: true,
    problem: "Citizens face difficulty reporting civic issues, lack real-time tracking, and experience delays due to manual and inefficient government processes.",
    solution: "An AI-powered platform that enables easy issue reporting via image, voice, or text, with automated routing, real-time tracking, and smart analytics for faster resolution.",
    features: ["AI-based issue detection", "real-time tracking", "smart auto-routing", "map visualization", "chatbot assistance", "emergency SOS", "analytics dashboard."]
  },
  {
    id: 2,
    title: "Western Ghats Nectar",
    description: "Premium honey brand website with modern UI that lets users explore products and instantly order via WhatsApp.",
    tech: ["Html", "Css","JavaScript"],
    github: "https://github.com/JanakeeshHd/WGN",
    demo: "https://westernghatsnectar.wuaze.com/?i=1",
    image: wgnImg,
    featured: false,
    features: ["Modern eco-luxury UI with smooth animations", "Fully responsive mobile-first design", "Direct WhatsApp ordering with auto message", "Dynamic product selection with quantity control"]
  },
  {
    id: 3,
    title: "CricNexa",
    description: "A professional-grade cricket monitoring platform providing live scores, match insights, and real-time updates.",
    tech: ["React", "Chart.js", "REST APIs", "Firebase", "Tailwind"],
    github: "https://github.com/JanakeeshHd/CricNexa",
    demo: "https://janakeeshhd.github.io/CricNexa/",
    image: cricnexaImg,
    featured: false,
    problem: "Cricket fans often struggle to find a clean, unified interface for real-time match data without overwhelming ads or complex navigation.",
    solution: "Designed an intuitive, high-performance dashboard that delivers live scores and match statistics through a streamlined user experience.",
    features: ["Live Match Scorecards", "Real-time Data Streams", "Interactive Match Analytics", "Automated Performance Tracking"]
  }
];

export const terminalCommands = [
  { cmd: "whoami", output: "Janakeesh Hegde - Full Stack MERN Developer & ISE Student" },
  { cmd: "education", output: "B.E. in ISE @ Sahyadri College of Engineering & Management (2022 - 2026)" },
  { cmd: "skills", output: "HTML, CSS, JS, React, Node.js, Python, MongoDB, MySQL, Docker, Git, VS Code" },
  { cmd: "location", output: "Bangalore, India" },
  { cmd: "hobbies", output: "Coding, Open Source, UI Design, Travel" },
  { cmd: "contact", output: "Email: janakeeshdanmav@gmail.com | Phone: +91 80886 53820 | LinkedIn: /in/janakeesh-hegde" }
];
