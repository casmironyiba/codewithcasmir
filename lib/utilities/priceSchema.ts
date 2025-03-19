
import * as z from "zod";
import { dollarsToCents } from "./dollarsToCents";

export const priceSchema = z.string().transform((val) => {
  const dollars = parseFloat(val);
  if (isNaN(dollars)) return "0";
  return dollarsToCents(dollars).toString();
});
