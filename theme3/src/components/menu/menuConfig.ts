import type { T3AppConfigBPv2WhoAmIDefinition } from '@bettercorp/betterportal-sdk';

export interface MenuConfig {
  name: string;
  type: string;
  posTop: boolean;
  //menuHeight: number;
}

//const appConfig = useAsyncState(betterportal.whoami.getApp(defaultAppFeatures), undefined);
export function getMenuConfig(appConfig?: T3AppConfigBPv2WhoAmIDefinition): MenuConfig | string {
  let defaultConfig = {
    type: "app-bar",
    posTop: false,
    name: ''
    //menuHeight: 36,
  };
  if (appConfig === undefined) {
    return "/App/UnknownApp";
  }
  if (appConfig.config.appType !== 3) {
    return "/App/InvalidApp";
  }
  defaultConfig.name = appConfig.features.menuType;
  let splitProps = (appConfig.features.menuType || "small-top").split(
    "-"
  );
  switch (splitProps[0]) {
    case "small":
      break; //default
    case "big":
      defaultConfig.type = "navbar";
      //defaultConfig.menuHeight = 65;
      break;
    case "none":
      defaultConfig.type = "none";
      //defaultConfig.menuHeight = 0;
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
