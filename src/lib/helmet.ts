import * as HelmetAsync from "react-helmet-async";

// Netlify/Astro build can treat react-helmet-async as CommonJS; this wrapper normalizes exports.
const anyMod: any = HelmetAsync as any;
const anyDefault: any = anyMod?.default;

export const Helmet = anyMod?.Helmet ?? anyDefault?.Helmet;
export const HelmetProvider = anyMod?.HelmetProvider ?? anyDefault?.HelmetProvider;
