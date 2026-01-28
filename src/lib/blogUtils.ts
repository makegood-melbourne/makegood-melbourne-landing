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
import concreteCancerImage from "@/assets/blog/concrete-cancer.webp";
import balconyWaterproofingImage from "@/assets/blog/balcony-waterproofing.webp";
import slabRectificationImage from "@/assets/blog/slab-rectification.webp";
import buildingDefectRemediationImage from "@/assets/blog/building-defect-remediation.webp";
import strategicPlanningImage from "@/assets/blog/strategic-planning.jpg";
import maximisingPropertyValueImage from "@/assets/blog/maximising-property-value.jpg";
import yearEndPlanningImage from "@/assets/blog/year-end-planning.jpg";
import polycarbonateRoofingImage from "@/assets/blog/polycarbonate-roofing.jpg";
import facadeCladdingRemediationImage from "@/assets/blog/facade-cladding-remediation.jpg";
import carParkLineMarkingImage from "@/assets/blog/car-park-line-marking.jpg";
import fireDamageRestorationImage from "@/assets/blog/fire-damage-restoration.jpg";
import wasteManagementSustainabilityImage from "@/assets/blog/waste-management-sustainability.jpg";
import parapetFailureEmergencyRepairsImage from "@/assets/blog/parapet-failure-emergency-repairs.jpg";
import ceilingRepairsSuspendedAcousticImage from "@/assets/blog/ceiling-repairs-suspended-acoustic.jpg";
import electricalMakeSafeImage from "@/assets/blog/electrical-make-safe.jpg";
import carpetTileReplacementImage from "@/assets/blog/carpet-tile-replacement.jpg";
import asbestosManagementImage from "@/assets/blog/asbestos-management.jpg";
import portMelbourneWarehouseImage from "@/assets/blog/port-melbourne-warehouse.jpg";
import commercialPaintingMelbourneImage from "@/assets/blog/commercial-painting-melbourne.jpg";
import { BlogPost } from "@/data/blogPosts";
import { resolveImageSrc } from "@/lib/resolveImageSrc";

const imageMap: Record<string, unknown> = {
  'commercial-painting-melbourne': commercialPaintingMelbourneImage,
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
  'concrete-cancer': concreteCancerImage,
  'balcony-waterproofing': balconyWaterproofingImage,
  'slab-rectification': slabRectificationImage,
  'building-defect-remediation': buildingDefectRemediationImage,
  'strategic-planning': strategicPlanningImage,
  'maximising-property-value': maximisingPropertyValueImage,
  'year-end-planning': yearEndPlanningImage,
  'polycarbonate-roofing': polycarbonateRoofingImage,
  'facade-cladding-remediation': facadeCladdingRemediationImage,
  'car-park-line-marking': carParkLineMarkingImage,
  'fire-damage-restoration': fireDamageRestorationImage,
  'waste-management-sustainability': wasteManagementSustainabilityImage,
  'parapet-failure-emergency-repairs': parapetFailureEmergencyRepairsImage,
  'ceiling-repairs-suspended-acoustic': ceilingRepairsSuspendedAcousticImage,
  'electrical-make-safe': electricalMakeSafeImage,
  'carpet-tile-replacement': carpetTileReplacementImage,
  'asbestos-management': asbestosManagementImage,
  'port-melbourne-warehouse': portMelbourneWarehouseImage,
  // Mapped to existing images until dedicated images are added
  'industrial-lease-make-good': warehouseImage,
  'office-fitout-make-good': officeStripOutImage,
  'retail-lease-make-good': commercialMakeGoodImage,
};

// Normalize image imports across Astro + React builds.
export const getBlogImage = (imagePath: unknown): string => {
  // If the imagePath is a bundled image metadata object, use its .src.
  if (typeof imagePath === "object" && imagePath !== null) {
    const resolved = resolveImageSrc(imagePath);
    return resolved || resolveImageSrc(cleaningImage);
  }

  if (typeof imagePath !== "string") return resolveImageSrc(cleaningImage);

  // Extract the key from /src/assets/blog/xxx.jpg -> xxx
  const match = imagePath.match(/blog\/([^.\/]+)\./);
  if (match?.[1]) {
    const imageKey = match[1];
    const mapped = imageMap[imageKey];
    return resolveImageSrc(mapped) || resolveImageSrc(cleaningImage);
  }

  // Fallback: try to find any key that matches part of the path
  const imageKey = Object.keys(imageMap).find((key) => imagePath.includes(key));
  return resolveImageSrc(imageKey ? imageMap[imageKey] : cleaningImage) || resolveImageSrc(cleaningImage);
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
  // Handle markdown links [text](url)
  let parsed = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary hover:text-primary/80 underline transition-colors">$1</a>');
  
  // Handle bold text
  parsed = parsed.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  
  // Handle italic text
  parsed = parsed.replace(/\*(.+?)\*/g, '<em>$1</em>');
  
  return parsed;
};
