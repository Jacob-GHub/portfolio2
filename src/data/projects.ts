import tomatoImg from "../assets/tomato.png";
import githubImg from "../assets/github.png";
import quantImg from "../assets/quant.png"

export const projects = [
  {
    title: "Food Delivery App",
    description: "A full-stack food delivery platform with real-time order tracking.",
    image: tomatoImg,
    tags: ["React", "MongoDB", "Express.Js","Node.Js"],
    link: "https://food-delivery-jp.netlify.app/"
  },
  {
    title: "AutoDev Chrome Extension",
    description: "AI-powered code assistant for GitHub repos using vector search.",
    image: githubImg,
    tags: ["Chrome API", "Python", "OpenAI","React","Flask"],
    link: "https://github.com/Jacob-GHub/AutoDev"
  },
  {
    title: "Quant @ UCR",
    description: "Official platform for Quant @ UCR, used by students to access club data & materials.",
    image: quantImg,
    tags: ["React", "TailwindCSS", "Next.Js"],
    link: "https://quant.ucrhighlanders.org/"
  },
];
