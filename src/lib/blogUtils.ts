import cleaningImage from "@/assets/blog/cleaning-services.webp";
import paintingImage from "@/assets/blog/painting-wall.webp";
import warehouseImage from "@/assets/blog/warehouse-makegood.webp";
import propertyImage from "@/assets/blog/property-transformation.webp";
import newYearImage from "@/assets/blog/new-year-makegood.webp";
import officeStripOutImage from "@/assets/blog/office-strip-out.webp";
import constructionMeetingImage from "@/assets/blog/construction-site-meeting.webp";
import epoxyFlooringImage from "@/assets/blog/epoxy-flooring.webp";
import palletRackingImage from "@/assets/blog/pallet-racking.webp";
import commercialMakeGoodImage from "@/assets/blog/commercial-make-good.webp";
import conditionReportImage from "@/assets/blog/condition-report.webp";
import leaseTransitionsImage from "@/assets/blog/lease-transitions.webp";
import makeGoodServicesImage from "@/assets/blog/make-good-services.webp";
import tenantLandlordImage from "@/assets/blog/tenant-landlord-communication.webp";
import smoothMakeGoodImage from "@/assets/blog/smooth-make-good-experience.webp";
import { BlogPost } from "@/data/blogPosts";

const imageMap: Record<string, string> = {
  'cleaning-services': cleaningImage,
  'painting-wall': paintingImage,
  'warehouse-makegood': warehouseImage,
  'property-transformation': propertyImage,
  'new-year-makegood': newYearImage,
  'office-strip-out': officeStripOutImage,
  'construction-site-meeting': constructionMeetingImage,
  'epoxy-flooring': epoxyFlooringImage,
  'pallet-racking': palletRackingImage,
  'commercial-make-good': commercialMakeGoodImage,
  'condition-report': conditionReportImage,
  'lease-transitions': leaseTransitionsImage,
  'make-good-services': makeGoodServicesImage,
  'tenant-landlord-communication': tenantLandlordImage,
  'smooth-make-good-experience': smoothMakeGoodImage,
};

export const getBlogImage = (imagePath: string): string => {
  const imageKey = Object.keys(imageMap).find(key => imagePath.includes(key));
  return imageKey ? imageMap[imageKey] : cleaningImage;
};

export const sortBlogPostsByDate = (posts: BlogPost[]): BlogPost[] => {
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime(); // Newest first
  });
};

export const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

export const parseMarkdown = (text: string): string => {
  // Handle bold text
  let parsed = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  
  // Handle italic text
  parsed = parsed.replace(/\*(.+?)\*/g, '<em>$1</em>');
  
  return parsed;
};
