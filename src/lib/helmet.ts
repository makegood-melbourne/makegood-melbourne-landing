import * as React from "react";

// This project is built as static pages (Astro) and metadata is handled in Astro layouts.
// react-helmet-async has caused both SSR build errors and client runtime crashes on some hosts,
// so we provide a safe no-op implementation.

export const Helmet = ({ children }: { children?: React.ReactNode }) => null;

export const HelmetProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => React.createElement(React.Fragment, null, children);

