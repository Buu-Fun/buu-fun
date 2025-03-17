import { Plans } from "@/constants/subscription/subscription-plans";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type SubscriptionState = {
  plan: Plans;
  SubscriptionModelPlan: Plans;
};

const initialState: SubscriptionState = {
  plan: "FREE",
  SubscriptionModelPlan: "FREE",
};

const SubscriptionSlice = createSlice({
  name: "Subscription",
  initialState,
  reducers: {
    setPlanType(state, action: PayloadAction<Plans>) {
      state.plan = action.payload;
    },
    setSubscriptionModelPlanType(state, action: PayloadAction<Plans>) {
      state.SubscriptionModelPlan = action.payload;
    },
  },
});

export const { setPlanType, setSubscriptionModelPlanType } =
  SubscriptionSlice.actions;

export default SubscriptionSlice.reducer;
