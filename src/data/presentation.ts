type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "keshavashiya@outlook.com",
  title: "Hi, I’m Keshav 👋",
  description:
    "just another one in million trying to understand 01101011 better than any thing. I was an Engineering student of *Jodhpur Institute of Engineering and Technology, Jodhpur* and a *Software Engineer @ Akrity Computing Pvt Ltd* building applications for various devices with some awesome people. As a Software Engineer, I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create beautiful products. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences. Although I'm mostly in front of my Laptop. While I'm not working, I’m probably watching a television series or a movie, listening to music, watching random stuff on youtube, writting some hip-hop stuff are on my bucket list.",
  socials: [
    {
      label: "Twiiter",
      link: "https://twitter.com/keshavashiya",
    },
    {
      label: "Instagram",
      link: "https://instagram.com/keshavashiya",
    },
    {
      label: "Github",
      link: "https://github.com/keshavashiya",
    },
  ],
};

export default presentation;
