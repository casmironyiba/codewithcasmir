import css from "styled-components";

interface Prop {
  (
    name:string|TemplateStringsArray,
    duration:string|TemplateStringsArray,
    timing:string|TemplateStringsArray,
    fill:string|TemplateStringsArray
  ):any
};

const Animations:Prop = (name,duration,timing,fill) => `
  animation: ${name} ${duration} ${timing} ${fill};


`;

export default Animations;
