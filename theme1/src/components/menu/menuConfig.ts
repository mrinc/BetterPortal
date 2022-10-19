import type { BPv2WhoAmIDefinition } from '../appConfig';

export interface MenuConfig {
  type: string;
  posTop: boolean;
  menuHeight: number;
}

//const appConfig = useAsyncState(betterportal.whoami.getApp(defaultAppFeatures), undefined);
export function getMenuConfig(appConfig?: BPv2WhoAmIDefinition): MenuConfig | string {
  let defaultConfig = {
    type: "app-bar",
    posTop: false,
    menuHeight: 36,
  };
  if (appConfig === undefined) {
    return "/App/UnknownApp";
  }
  if (appConfig.config.appType !== 3) {
    return "/App/InvalidApp";
  }
  let splitProps = (appConfig.features.menu || "small-top").split(
    "-"
  );
  switch (splitProps[0]) {
    case "small":
      break; //default
    case "big":
      defaultConfig.type = "navbar";
      defaultConfig.menuHeight = 65;
      break;
    case "none":
      defaultConfig.type = "none";
      defaultConfig.menuHeight = 0;
      break;
  }
  switch (splitProps[1]) {
    case "top":
      defaultConfig.posTop = true;
      break;
    case "bottom":
      defaultConfig.posTop = false;
      break;
    case "none":
      defaultConfig.posTop = false;
      break;
  }
  return defaultConfig;
}
