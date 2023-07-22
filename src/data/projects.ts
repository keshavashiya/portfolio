export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Covid - 19 India",
    techs: ["ReactJS (NextJS)", "react-query"],
    link: "https://github.com/keshavashiya/covid19bharat_frontend",
  },
  {
    title: "Portfolio / CSS Image",
    techs: ["ReactJS", "TypeScript"],
    link: "https://github.com/keshavashiya/css-text-portrait-builder",
  },
  {
    title: "Portfolio / Template",
    techs: ["Astro"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
