import type { WhoAmIDefinition } from "@bettercorp/betterportal/src";
import type { Config } from "@bettercorp/betterportal/src/whoami";
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
  menuType: string;
}
export interface BPv2WhoAmIDefinition extends WhoAmIDefinition<AppFeatures> {}
export function defaultAppFeatures(
  config: Config,
  features: AppFeatures
): { config: Config; features: AppFeatures } {
  features.title = getValueOrDefault("BetterPortal", features.title);
  features.logo = getValueOrDefault(
    "https://content.betterweb.co.za/bettercorp/logos/2022/BetterPortal.png",
    features.logo
  );
  features.showLogin = getValueOrDefault(true, features.showLogin);
  features.showChangelog = getValueOrDefault(true, features.showChangelog);
  features.menuType = getValueOrDefault("small-top", features.menuType);
  return {
    features,
    config,
  };
}
