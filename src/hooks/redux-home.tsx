import {
  AppHomeDispatch,
  AppHomeStore,
  RootHomeState,
} from "@/lib/redux/(home)/home-store";
import { useDispatch, useSelector, useStore } from "react-redux";

export const useAppHomeDispatch = useDispatch.withTypes<AppHomeDispatch>();
export const useAppHomeSelector = useSelector.withTypes<RootHomeState>();
export const useAppHomeStore = useStore.withTypes<AppHomeStore>();
