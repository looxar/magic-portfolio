import { InlineCode } from "@/once-ui/components";
import Link from 'next/link';

// const person = {
//   firstName: "Selene",
//   lastName: "Yu",
//   get name() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   role: "Design Engineer",
//   avatar: "/images/avatar.jpg",
//   location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
//   languages: ["English", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
// };
const person = {
  firstName: "Panuwit",
  lastName: "Thaneewat",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Programmer Engineer and IT Support",
  avatar: "/images/looxar.jpg",
  location: "Asia/Bangkok", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Thai"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:looxar.wicher@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Programmer Engineer and IT Support</>,
  subline: (
    <>
      I'm Panuwit, a programmer at <a href="https://www.pea.co.th/" target="_blank" rel="noopener noreferrer">
        <InlineCode>PEA</InlineCode>
      </a>, where I've learn a lot.
      <br />I'm looking forward to build something good to help our staff
      <br />resolve their problem.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hardworking and passionate programmer with strong organizational skills and a focus on team
        collaboration and delivering optimal results. Skilled in software development, coding, debugging,
        and problem-solving, with a proven ability to adapt to changing needs and consistently deliver
        high-quality software solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "PEA",
        timeframe: "2016 - Present",
        role: "Programmer Engineer and IT Support",
        achievements: [
          <>
            Migrated the asset reporting process from paper-based to web-based
            using Angular and Spring Boot, enhancing accessibility and reducing
            manual errors.
          </>,
          <>
            Built a PHP-based tool to process Excel files exported from SAP, enabling
            seamless database uploads and reducing processing time.
          </>,
          <>
            Designed and developed a ClickOnce application for queue
            management using .NET, improving efficiency in handling customer flow.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "PEA",
        timeframe: "2024 - Present",
        role: "Devpool (Part Time)",
        achievements: [
          <>
            Part of HinghoiHome Project Develop Team
            <br />The project help the host in airBnB
            to control the usage of electricity and
            <br />set the bill when guest use the electricity over
            the given quota.
          </>,
          <>
            Participated in the Devpool project, which provided in-depth exposure to
            design thinking, the Definition of Done (DoD), product value assessment, and
            agile methodologies. Gained practical experience in Golang and React.js, leveraging
            these technologies to develop a mini-project that demonstrated
            end-to-end development practices.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Khon Kaen University",
        description: <>Bachelor in Engineering: Computer Engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Improving an English skills.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + tailwind.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Vue2.js",
        description: <>Building next gen apps with Vue.js + Vuetify.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Springboot",
        description: <>Good for project that need in a short time.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "PHP",
        description: <>Good for project that need in a short time.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

// export { person, social, home, about, blog, work, gallery };
export { person, social, home, about, work, gallery };
