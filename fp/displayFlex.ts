import {TemplateContext} from "next/dist/shared/lib/app-router-context.shared-runtime";
import styled from "styled-components";

const displayFlex = (
  justify:string|TemplateStringsArray = 'flex-start',
  align:string|TemplateStringsArray = 'flex-start',
  flow?:string|TemplateStringsArray
) => `
  display:flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-flow: ${flow};
`;

export default displayFlex;

