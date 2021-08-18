import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const dataSlider = [
  {
    id: uuidv4(),
    title: "Lorem ipsum 1. Story",
    subTitle: "Lorem",
    post: "Post sth. Lorem ipsum dolar",
    CTA: "Mehr erfahren",
    link:"./gastro"
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum 2. Story",
    subTitle: "Lorem",
    post: "Post sth. Lorem ipsum dolar",
    CTA: "Mehr erfahren",
    link:"./donator"
  },
  {
    id: uuidv4(),
    title: "Lorem ipsum 3. Story",
    subTitle: "Lorem",
    post: "Post sth. Lorem ipsum dolar",
    CTA: "Mehr erfahren",
    link:"./needy"
  },
  
];

export default dataSlider;