import { z } from "zod";

export const redeemVoucherSchema = z.object({
  code: z.string().min(2, { message: "Code must be at least 3 letters long" }),
});

export type TRedeemVoucherSchema = z.infer<typeof redeemVoucherSchema>;
