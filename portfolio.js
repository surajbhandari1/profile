import emoji from "react-easy-emoji";

export const greetings = {
    name: "Suraj Bhandari",
    nickName: "Hari Bhai",
    title: "Hi all, I'm Harihar.",
    subTitle: "You can call me",
    bio: "I am a self-thought full stack web developer.",
    location: "Kathmandu, Nepal",
    profileImage:
        "https://media.licdn.com/dms/image/D5603AQH4MWqU9lQNig/profile-displayphoto-shrink_200_200/0/1667783374800?e=1680134400&v=beta&t=MBbX0koYVhjVXtbzSblWbW-YuARMeYdi7GlNMvTqbpY",
    description:
        "I am a JavaScript full-stack developer with expertise in Node.js, Express, Nest.js, MongoDB, Microservices, Docker, GraphQL, RESTful APIs, React.js, and Next.js. I have experience in building scalable, high-performance web applications using a variety of technologies and best practices. I am able to design and implement complex systems, and have a passion for writing clean, maintainable, and well-documented code.",
    resumeLink:
        "https://drive.google.com/file/d/1bYsfuJrqoZkFQvfKo9L516CPHIAbq6d4/view?usp=sharing",
};

export const greetingSequences = [
    "Hi all, I'm Harihar Bhandari",
    1000,
    "You can call me Hari Bhai",
    2000,
    "I am a full stack web developer",
];

export const contact = {};

export const socialLinks = {
    linkedin: "https://linkedin.com/in/hari-har-bhandari-4b462b21a",
    gitlab: "https://gitlab.com/bhandarihari",
    facebook: "https://www.facebook.com/hari9866552623",
    twitter: "https://twitter.com/gorey93236340",
};

export const skillsSection = {
    title: "What I do",
    subTitle:
        "CRAZY FULL STACK DEVELOPER WHO HAVE PASSION TO EXPLORE EVERY TECH STACK",
    data: [
        {
            title: "Full Stack Development",
            lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
            skills: [
                "⚡Create Rest and Graphql APIs using Expressjs/Nestjs.",
                "⚡Work on different type of architecture like monolithic and microservice.",
                "⚡Work on huge dataset with Mongodb.",
                "⚡Integrate many third party software like stirpe, zapier, paypal etc.",
            ],
            softwareSkills: [
                {
                    skillName: "JavaScript",
                    fontAwesomeClassname: "logos:javascript",
                },
                {
                    skillName: "TypeScript",
                    fontAwesomeClassname: "logos:typescript",
                },
                {
                    skillName: "NodeJs",
                    fontAwesomeClassname: "logos:nodejs",
                },
                {
                    skillName: "ExpressJs",
                    fontAwesomeClassname: "logos:express",
                },
                {
                    skillName: "NestJs",
                    fontAwesomeClassname: "logos:nestjs",
                },
                {
                    skillName: "GraphQl",
                    fontAwesomeClassname: "logos:graphql",
                },
                {
                    skillName: "MongoDb",
                    fontAwesomeClassname: "logos:mongodb",
                },
                {
                    skillName: "Reactjs",
                    fontAwesomeClassname: "vscode-icons:file-type-reactjs",
                },
                {
                    skillName: "Nextjs",
                    fontAwesomeClassname: "vscode-icons:file-type-light-next",
                },
                {
                    skillName: "Redux",
                    fontAwesomeClassname: "logos:redux",
                },
                {
                    skillName: "HTML-5",
                    fontAwesomeClassname: "vscode-icons:file-type-html",
                },
                {
                    skillName: "CSS-3",
                    fontAwesomeClassname: "vscode-icons:file-type-css",
                },
            ],
        },
        {
            title: "Cloud Infra-Architecture",
            lottieAnimationFile: "/lottie/skills/cloudinfra.json",
            skills: [
                "⚡Experience of working on different cloud platforms.",
                "⚡Building CI/CD pipelines for testing and deployment.",
                "⚡Basic experience of docker and heroku.",
            ],
            softwareSkills: [
                {
                    skillName: "Github",
                    fontAwesomeClassname: "akar-icons:github-fill",
                },
                {
                    skillName: "Gitlab",
                    fontAwesomeClassname: "logos:gitlab",
                },
                {
                    skillName: "Bitbucket",
                    fontAwesomeClassname: "logos:bitbucket",
                },
                {
                    skillName: "AWS",
                    fontAwesomeClassname: "logos:aws",
                },
                {
                    skillName: "Heroku",
                    fontAwesomeClassname: "logos:heroku-icon",
                },
                {
                    skillName: "Docker",
                    fontAwesomeClassname: "logos:docker-icon",
                },
            ],
        },
    ],
};

export const SkillBars = [
    {
        Stack: "Backend",
        progressPercentage: "90",
    },
    {
        Stack: "Database",
        progressPercentage: "80",
    },
    {
        Stack: "Microservice",
        progressPercentage: "70",
    },
    {
        Stack: "Frontend/Design",
        progressPercentage: "60",
    },
];

export const educationInfo = [
    {
        schoolName: "GHSS",
        subHeader: "Higher Secondary",
        duration: "September 2018 - April 2020",
        desc: "Shree Gyanodaya Higher Secondary School, a community School, was established in 2018 B.S, is now located in Turang Village Development Committee, ward no-1, Majuwa,Gulmi, Nepal",
        grade: "Grade B+",
    },
];

export const experience = [
    {
        role: "Full Stack Developer",
        company: "Ebpearls",
        companylogo:
            "https://ebpearls.com.au/wp-content/uploads/2020/03/logo-ebpearls.svg",
        date: "Jul 2022 – Present",
        desc: "I am working as a full stack developer on Ebpearls. Currently I am working on Graphql APIs for capsulelabs.io which is a event base app.",
    },
    {
        role: "MERN stack developer",
        company: "Neputer Tech",
        companylogo:
            "https://neputer.com/image/site_configuration/16463084766763_neputer-logo_trans.png",
        date: "Jul 2020 – Jul 2022",
        desc: "I worked as mern stack developer to design web based admin dashboards for mulitple apps using Expressjs, Mongodb, Reactjs.",
    },
];

export const projects = [
    {
        name: "Broadway Infosys",
        desc: "Broadway Infosys is an ISO Certified IT Learning Center in Nepal.",
        link: "https://broadwayinfosys.com/",
    },
    {
        name: "Capsulelabs",
        desc: "Capsule Labs is a modern ticket booking platform in Australia.",
        link: "https://capsulelabs.io/",
    },
    {
        name: "Portfolio",
        desc: "Worked on multiple personal portfolio with MERN stack technology.",
        link: "https://haribhai.vercel.app/",
    },
    {
        name: "Ghapbheti App",
        desc: "Gharbheti app is a popular real estate platform to rent home/flat/room.",
    },
];

export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
    title: "Harihar Bhandari",
    description: "A passionate and self-taught Full Stack Web Developer.",
    author: "Harihar Bhandari",
    image: greetings.profileImage,
    url: "https://haribhai.vercel.app/",
    keywords: [
        "Harihar",
        "Harihar Bhandari",
        "Hari Bhai",
        "HariBhai",
        "Hari Har Bhandari",
        "@bhandarihari",
        "Portfolio",
        "Harihar Portfolio ",
        "Harihar Bhandari Portfolio",
        "HariBhai Portfolio",
        "Haribhai profile",
    ],
};
