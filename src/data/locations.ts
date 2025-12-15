export interface Location {
  name: string;
  slug: string;
  title: string;
  description: string;
  uniqueIntro: string;
  localContext: string;
  keyAreas: string[];
  businessTypes: string[];
}

export const locations: Location[] = [
  {
    name: "Altona",
    slug: "altona",
    title: "Make Good Services Altona",
    description: "Professional make good and end of lease services for Altona's industrial and commercial properties. From Altona North warehouses to coastal business precincts, we deliver expert restoration solutions.",
    uniqueIntro: "Altona's industrial landscape stretches from the bustling Altona North warehouse district to the light industrial zones near Cherry Lake. With major transport links via Millers Road and the Western Ring Road, this area hosts everything from large-scale distribution centres to manufacturing facilities serving Melbourne's west.",
    localContext: "The Aircraft industrial estate and Kororoit Creek corridor present unique make good challenges, from older warehouse stock requiring comprehensive remediation to modern logistics facilities needing precise lease compliance. Our team understands Altona's mix of heavy industrial heritage and evolving commercial needs.",
    keyAreas: [
      "Altona North industrial",
      "Altona Gate precinct",
      "Millers Road corridor",
      "Kororoit Creek area",
      "Cherry Lake surrounds",
      "Aircraft industrial estate"
    ],
    businessTypes: [
      "Warehouses and distribution",
      "Manufacturing facilities",
      "Commercial offices",
      "Retail spaces",
      "Automotive services",
      "Food processing"
    ]
  },
  {
    name: "Clayton",
    slug: "clayton",
    title: "Make Good Services Clayton",
    description: "Professional make good and end of lease services for Clayton's commercial and industrial properties. From Monash University precinct to Clayton South industrial, we deliver expert restoration solutions.",
    uniqueIntro: "Clayton sits at the heart of Melbourne's innovation corridor, anchored by Monash University and the Monash Medical Centre. This unique mix creates demand for diverse commercial spaces—from research laboratories and medical suites to supporting retail and office facilities along Clayton Road and Centre Road.",
    localContext: "The Clayton South industrial precinct houses manufacturing and logistics operations requiring specialised make good expertise. Whether you're vacating a high-spec research facility near the university or an older industrial unit on Westall Road, we deliver compliant restoration that meets the exacting standards expected in this knowledge-intensive precinct.",
    keyAreas: [
      "Clayton Road precinct",
      "Centre Road businesses",
      "Clayton South industrial",
      "Monash University area",
      "Westall Road corridor",
      "Springs Road precinct"
    ],
    businessTypes: [
      "Research facilities",
      "Medical and healthcare",
      "Commercial offices",
      "Warehouses and logistics",
      "Manufacturing facilities",
      "Retail spaces"
    ]
  },
  {
    name: "Dandenong",
    slug: "dandenong",
    title: "Make Good Services Dandenong",
    description: "Professional make good and end of lease services for Dandenong's extensive industrial and commercial properties. From Dandenong South manufacturing to CBD retail, we deliver expert restoration solutions.",
    uniqueIntro: "Dandenong is Melbourne's industrial powerhouse. The Dandenong South precinct alone hosts over 1,500 businesses across manufacturing, logistics and heavy industry—making it one of Australia's largest industrial zones. The revitalised Dandenong CBD adds retail, hospitality and commercial office demand to this diverse property market.",
    localContext: "From heavy manufacturing facilities on Greens Road requiring industrial-grade remediation to modern distribution centres along the Frankston-Dandenong Road corridor, our team handles the full spectrum of make good complexity. We understand the scale and urgency that Dandenong's major industrial tenants require.",
    keyAreas: [
      "Dandenong South industrial",
      "Dandenong CBD",
      "Lonsdale Street precinct",
      "Frankston-Dandenong Road corridor",
      "Greens Road industrial",
      "Ordish Road precinct"
    ],
    businessTypes: [
      "Heavy manufacturing",
      "Warehouses and distribution",
      "Commercial offices",
      "Retail and hospitality",
      "Automotive industry",
      "Food production"
    ]
  },
  {
    name: "Kilsyth",
    slug: "kilsyth",
    title: "Make Good Services Kilsyth",
    description: "Professional make good and end of lease services for Kilsyth's industrial and commercial properties. From Kilsyth South industrial to Canterbury Road businesses, we deliver expert restoration solutions.",
    uniqueIntro: "Nestled at the gateway to the Yarra Ranges, Kilsyth serves as the outer east's industrial hub. The Kilsyth South industrial area and Canterbury Road corridor provide essential warehousing, trade services and light manufacturing for Melbourne's eastern suburbs, with excellent access via Eastlink.",
    localContext: "Kilsyth's industrial properties range from purpose-built warehouses to converted trade premises. Many facilities in this area were built during the 1980s and 1990s, presenting specific make good challenges including older floor coatings, original electrical systems and dated office fitouts. Our experience with this building stock ensures efficient, cost-effective restoration.",
    keyAreas: [
      "Kilsyth South industrial",
      "Canterbury Road precinct",
      "Colchester Road corridor",
      "Mount Dandenong Road area",
      "Dorset Road businesses",
      "Mooroolbark surrounds"
    ],
    businessTypes: [
      "Warehouses and logistics",
      "Manufacturing facilities",
      "Trade services",
      "Commercial offices",
      "Retail spaces",
      "Automotive services"
    ]
  },
  {
    name: "Moorabbin",
    slug: "moorabbin",
    title: "Make Good Services Moorabbin",
    description: "Professional make good and end of lease services for Moorabbin's commercial and industrial properties. From Moorabbin Airport precinct to South Road businesses, we deliver expert restoration solutions.",
    uniqueIntro: "Moorabbin's identity is shaped by its famous airport precinct—home to aviation businesses, aerospace manufacturers and flight training schools. Beyond the runway, the South Road and Chesterville Road corridors host a thriving mix of industrial, trade and commercial properties serving Melbourne's bayside region.",
    localContext: "The Moorabbin Airport precinct presents unique make good requirements, from specialised aviation facilities to high-security premises. Along Governor Road and Cochranes Road, older industrial stock often requires comprehensive remediation including concrete repairs, electrical upgrades and asbestos management. We deliver compliant solutions across all property types.",
    keyAreas: [
      "Moorabbin Airport precinct",
      "South Road industrial",
      "Chesterville Road corridor",
      "Kingston Road area",
      "Governor Road industrial",
      "Cochranes Road precinct"
    ],
    businessTypes: [
      "Aviation and aerospace",
      "Commercial offices",
      "Warehouses and logistics",
      "Manufacturing facilities",
      "Retail spaces",
      "Trade services"
    ]
  },
  {
    name: "Mulgrave",
    slug: "mulgrave",
    title: "Make Good Services Mulgrave",
    description: "Professional make good and end of lease services for Mulgrave's commercial and industrial properties. From Mulgrave business parks to Springvale Road corridor, we deliver expert restoration solutions.",
    uniqueIntro: "Mulgrave has evolved into a premium business park destination, home to major corporate headquarters and technology companies attracted by Eastlink accessibility and proximity to Monash Freeway. The Springvale Road and Wellington Road corridors house modern commercial facilities alongside established industrial operations.",
    localContext: "Corporate tenants in Mulgrave's business parks expect immaculate make good standards—every detail matters when vacating premises designed for blue-chip occupiers. We also service the older industrial stock around Jacksons Road, where comprehensive remediation often includes floor restoration, office strip-outs and external facade repairs.",
    keyAreas: [
      "Mulgrave business parks",
      "Springvale Road corridor",
      "Wellington Road precinct",
      "Waverley Gardens area",
      "Jacksons Road industrial",
      "Eastlink corridor"
    ],
    businessTypes: [
      "Corporate offices",
      "Technology companies",
      "Warehouses and distribution",
      "Manufacturing facilities",
      "Retail spaces",
      "Healthcare facilities"
    ]
  },
  {
    name: "Port Melbourne",
    slug: "port-melbourne",
    title: "Make Good Services Port Melbourne",
    description: "Professional make good and end of lease services for Port Melbourne's industrial and commercial properties. From Fishermans Bend to Webb Dock precinct, we deliver expert restoration solutions.",
    uniqueIntro: "Port Melbourne is where Melbourne meets the sea—and where industry meets innovation. The Fishermans Bend precinct is undergoing Australia's largest urban renewal, while Webb Dock and the port facilities continue to drive logistics and distribution activity. This creates a dynamic mix of heritage warehouses, modern creative spaces and heavy industrial facilities.",
    localContext: "From heritage-listed warehouses on Ingles Street requiring sensitive restoration to modern logistics facilities near Webb Dock needing rapid turnaround, Port Melbourne demands versatile make good expertise. The area's proximity to the CBD means landlords expect premium standards, while industrial tenants require practical, compliant outcomes.",
    keyAreas: [
      "Fishermans Bend",
      "Webb Dock precinct",
      "Williamstown Road corridor",
      "Lorimer Street area",
      "Ingles Street industrial",
      "Salmon Street precinct"
    ],
    businessTypes: [
      "Port and logistics",
      "Warehouses and distribution",
      "Manufacturing facilities",
      "Commercial offices",
      "Creative studios",
      "Automotive services"
    ]
  },
  {
    name: "Richmond",
    slug: "richmond",
    title: "Make Good Services Richmond",
    description: "Professional make good and end of lease services for Richmond's commercial and industrial properties. From Bridge Road offices to Cremorne warehouses, we deliver expert restoration solutions.",
    uniqueIntro: "Richmond blends Melbourne's industrial heritage with its tech-driven future. The Cremorne precinct has become Australia's answer to Silicon Valley, housing tech giants and startups in converted warehouses. Meanwhile, Bridge Road, Swan Street and Church Street maintain vibrant retail and commercial precincts just minutes from the CBD.",
    localContext: "Cremorne's creative and tech tenants often leave behind complex fitouts—open-plan offices, server rooms and collaborative spaces requiring careful strip-out. Heritage buildings throughout Richmond add restoration complexity, while Victoria Gardens and Burnley offer more traditional commercial and industrial make good requirements.",
    keyAreas: [
      "Bridge Road precinct",
      "Swan Street businesses",
      "Church Street offices",
      "Cremorne industrial",
      "Victoria Gardens area",
      "Burnley surrounds"
    ],
    businessTypes: [
      "Commercial offices",
      "Creative studios",
      "Warehouses and logistics",
      "Manufacturing facilities",
      "Medical practices",
      "Hospitality"
    ]
  },
  {
    name: "Ringwood",
    slug: "ringwood",
    title: "Make Good Services Ringwood",
    description: "Professional make good and end of lease services for Ringwood's commercial and industrial properties. From Eastland precinct to Ringwood East industrial, we deliver expert restoration solutions.",
    uniqueIntro: "Ringwood serves as the commercial heart of Melbourne's outer east. The Eastland shopping precinct anchors significant retail activity, while the Maroondah Highway corridor and surrounding industrial areas support warehousing, manufacturing and trade services for the eastern suburbs through to the Yarra Valley.",
    localContext: "Retail tenancies around Eastland demand high presentation standards for make good, while Ringwood East's industrial precinct requires practical restoration of warehouses and manufacturing facilities. We understand the diverse expectations across Ringwood's property types—from shopping centre tenancies to industrial sheds.",
    keyAreas: [
      "Eastland precinct",
      "Maroondah Highway corridor",
      "Ringwood East industrial",
      "Ringwood North businesses",
      "Heatherdale Road area",
      "Warrandyte Road precinct"
    ],
    businessTypes: [
      "Retail and shopping centres",
      "Commercial offices",
      "Warehouses and logistics",
      "Manufacturing facilities",
      "Medical and healthcare",
      "Hospitality"
    ]
  },
  {
    name: "South Melbourne",
    slug: "south-melbourne",
    title: "Make Good Services South Melbourne",
    description: "Professional make good and end of lease services for South Melbourne's commercial and industrial properties. From Clarendon Street offices to City Road warehouses, we deliver expert restoration solutions.",
    uniqueIntro: "South Melbourne is Melbourne's creative and professional services heartland. The Clarendon Street precinct houses advertising agencies, design studios and professional offices in character buildings, while City Road and Kings Way provide larger commercial and warehouse spaces. The iconic South Melbourne Market adds retail diversity to this inner-city locale.",
    localContext: "Creative agencies and professional tenants in South Melbourne often invest heavily in bespoke fitouts—exposed brick, custom joinery and designer finishes that require careful restoration or removal. Heritage overlays in many buildings add compliance considerations. We deliver make good solutions that respect both lease obligations and building character.",
    keyAreas: [
      "Clarendon Street precinct",
      "City Road corridor",
      "Kings Way businesses",
      "Coventry Street area",
      "South Melbourne Market surrounds",
      "Albert Road precinct"
    ],
    businessTypes: [
      "Commercial offices",
      "Creative agencies",
      "Warehouses and showrooms",
      "Retail spaces",
      "Hospitality venues",
      "Medical practices"
    ]
  },
  {
    name: "Truganina",
    slug: "truganina",
    title: "Make Good Services Truganina",
    description: "Professional make good and end of lease services for Truganina's rapidly growing industrial precinct. From logistics centres to modern warehouses, we deliver expert restoration solutions.",
    uniqueIntro: "Truganina represents Melbourne's industrial future. This rapidly expanding western precinct has become the destination for major logistics operators, e-commerce fulfilment centres and national distribution hubs. Modern facilities of 10,000m² or more are common, built to accommodate the scale demands of contemporary supply chains.",
    localContext: "Truganina's newer building stock presents different make good challenges—large floor plates, high-bay warehouses, sophisticated dock facilities and complex electrical systems. Landlords of these premium facilities expect meticulous standards. We deliver efficient, large-scale make good services that match the pace and professionalism this growth corridor demands.",
    keyAreas: [
      "West Park industrial",
      "Derrimut Road corridor",
      "Palmers Road precinct",
      "Dohertys Road industrial",
      "Leakes Road area",
      "Western Freeway corridor"
    ],
    businessTypes: [
      "Large-scale logistics",
      "Distribution centres",
      "Modern warehouses",
      "Manufacturing facilities",
      "Cold storage",
      "Transport and freight"
    ]
  }
];

// Get locations sorted alphabetically for display
export const getSortedLocations = (): Location[] => {
  return [...locations].sort((a, b) => a.name.localeCompare(b.name));
};

export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find(location => location.slug === slug);
};
