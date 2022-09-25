/// <reference types="vite/client" />

// Declare vite environment variables
declare interface ImportMetaEnv {
  readonly VITE_BASE: string
  readonly VITE_API_BASEURL: string
  readonly VITE_APP_TITLE: string
  // More environment variables...
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare interface Window {
  // extend the window
}
