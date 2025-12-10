/**
 * Should match main/preload.ts for typescript support in renderer
 */
interface ElectronApi {
  sendMessage: (message: string) => void,
  getAppInfo: () => Promise<{ name: string; version: string; platform: string; electron: string; chrome: string; }>
}

declare global {
  interface Window {
    electronAPI: ElectronApi,
  }
}

export {};
