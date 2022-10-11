/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_WHOAMIHOST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}