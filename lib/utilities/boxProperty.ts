
const boxProperty = (
  width: string | number,
  height?: string | number,
  margin?: string,
  padding?: string,
  background?: string
) => `
  width: ${width};
  height: ${height};
  margin: ${margin};
  padding: ${padding};
  background: ${background};
`;

export default boxProperty;
