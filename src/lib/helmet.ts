import * as React from "react";
import * as HelmetAsync from "react-helmet-async";

// Astro renders React components at build-time. react-helmet-async expects a Provider context during SSR;
// our Astro BaseLayout already handles meta tags, so we no-op Helmet on the server to avoid build failures.

const anyMod: any = HelmetAsync as any;
const anyDefault: any = anyMod?.default;

const RealHelmet = anyMod?.Helmet ?? anyDefault?.Helmet;
const RealHelmetProvider = anyMod?.HelmetProvider ?? anyDefault?.HelmetProvider;

const isServer = typeof window === "undefined";

export const Helmet: any = isServer ? (() => null) : RealHelmet;
export const HelmetProvider: any = isServer
  ? ({ children }: { children: React.ReactNode }) =>
      React.createElement(React.Fragment, null, children)
  : RealHelmetProvider;

