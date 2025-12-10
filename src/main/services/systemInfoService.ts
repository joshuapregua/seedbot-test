import { app } from 'electron';

export interface AppInfo {
  name: string;
  version: string;
  platform: NodeJS.Platform;
  electron: string;
  chrome: string;
}

export function getAppInfo(): AppInfo {
  return {
    name: app.getName(),
    version: app.getVersion(),
    platform: process.platform,
    electron: process.versions.electron,
    chrome: process.versions.chrome,
  };
}
