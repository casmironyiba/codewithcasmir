function centsToDollars(cents: number | undefined): string {
  return ((cents || 0) / 100).toString();
};

export default centsToDollars;
