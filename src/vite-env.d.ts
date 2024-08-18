/// <reference types="vite/client" />


interface ImportMetaEnv {
    // readonly VITE_VARIABLE_NAME: variable_type;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }