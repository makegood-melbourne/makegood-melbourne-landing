import { Fragment } from "react";

/**
 * Parses text containing markdown-style links [text](/url) and returns JSX
 * Supports both internal links (starting with /) and external links
 */
export function renderTextWithLinks(text: string): React.ReactNode {
  // Match [link text](/url) or [link text](https://...)
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let keyIndex = 0;
  
  while ((match = linkPattern.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    
    const linkText = match[1];
    const url = match[2];
    
    // Use native anchor tags for both internal and external links
    if (url.startsWith('/')) {
      parts.push(
        <a 
          key={`link-${keyIndex++}`}
          href={url} 
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          {linkText}
        </a>
      );
    } else {
      parts.push(
        <a 
          key={`link-${keyIndex++}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 underline underline-offset-2"
        >
          {linkText}
        </a>
      );
    }
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  
  // If no links were found, return the original text
  if (parts.length === 0) {
    return text;
  }
  
  return <Fragment>{parts}</Fragment>;
}
