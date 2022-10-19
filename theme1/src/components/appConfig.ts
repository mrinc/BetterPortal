import type { WhoAmIDefinition } from "@bettercorp/betterportal/src";
import type { ColorConfig } from "vuestic-ui";

function getValueOrDefault<T>(def: T, value?: T): T {
  if (value === undefined) return def;
  if (value === null) return def;
  return value;
}
export interface AppFeatures {
  title: string;
  logo: string;
  showLogin: boolean;
  clientListType: number;
  showChangelog: boolean;
  colours?: ColorConfig;
  contentBackground?: string;
  menu: string;
}
export interface BPv2WhoAmIDefinition extends WhoAmIDefinition<AppFeatures> {}
export function defaultAppFeatures(features: AppFeatures) {
  return {
    title: getValueOrDefault("BetterPortal", features.title),
    logo: getValueOrDefault(
      "https://content.betterweb.co.za/bettercorp/logos/2022/BetterPortal.png",
      features.logo
    ),
    showLogin: getValueOrDefault(true, features.showLogin),
    showChangelog: getValueOrDefault(true, features.showChangelog),
    menu: getValueOrDefault("small-top", features.menu),
  };
}
