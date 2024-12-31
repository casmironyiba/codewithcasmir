import breakpoints from '@/ui/components/breakpoints';

const mq = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};

export default mq

// type BreakpointKeys = keyof typeof breakpoints;
//
// export const mediaQueries = (
//   key: BreakpointKeys,
//   minWidth: number,
//   maxWidth?: number
// ) => {
//   const breakpointMin = breakpoints[key];
//
//   const minWidthQuery = `@media (min-width: ${breakpointMin}px)`;
//   const maxWidthQuery = maxWidth ? ` and (max-width: ${maxWidth}px)` : '';
//
//   return (style: TemplateStringsArray | string) =>
//     `${minWidthQuery}${maxWidthQuery} { ${style} }`;
// };
