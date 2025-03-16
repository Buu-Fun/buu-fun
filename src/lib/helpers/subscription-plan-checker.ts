import { PlanKeyMapper } from "@/constants/subscription/subscription-plans";

export const isPlanEnterprise = (value: string) =>
  value === PlanKeyMapper["ENTERPRISE"];
