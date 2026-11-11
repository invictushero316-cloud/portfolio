/**
 * Home-page studies. Fresha is not included.
 * Public product URLs stay out of this module until a specific link is approved.
 */
export const projectSlugs = [
  "aurora-inbox",
  "shibinda",
  "ruedata-ai",
  "restaurant-ai-chatbot",
  "pedro-cores-film",
] as const;

export type ProjectSlug = (typeof projectSlugs)[number];

export type ProjectCategory =
  | "ai"
  | "automation"
  | "saas-crm"
  | "commerce"
  | "analytics"
  | "creative";

export type ContributionStatus = "product-reference-unverified" | "owner-described";

export type ProjectRecord = {
  slug: ProjectSlug;
  title: string;
  category: ProjectCategory;
  contributionStatus: ContributionStatus;
  ownerRole: string | null;
  verifiedDeliverables: readonly string[];
  technologiesVerified: readonly string[];
  metricsVerified: readonly string[];
  screenshots: readonly { src: string; alt: string }[];
  screenshotsApproved: boolean;
  publicProductURL: string | null;
  publishPermission: boolean;
  showProductLink: boolean;
};

const unpublished = {
  ownerRole: null,
  verifiedDeliverables: [],
  technologiesVerified: [],
  metricsVerified: [],
  screenshots: [],
  screenshotsApproved: false,
  publicProductURL: null,
  publishPermission: true,
  showProductLink: false,
} as const;

export const projects: readonly ProjectRecord[] = [
  {
    slug: "aurora-inbox",
    title: "Aurora Inbox",
    category: "saas-crm",
    contributionStatus: "product-reference-unverified",
    ...unpublished,
  },
  {
    slug: "shibinda",
    title: "Shibinda",
    category: "commerce",
    contributionStatus: "product-reference-unverified",
    ...unpublished,
  },
  {
    slug: "ruedata-ai",
    title: "RueData AI",
    category: "analytics",
    contributionStatus: "product-reference-unverified",
    ...unpublished,
  },
  {
    slug: "restaurant-ai-chatbot",
    title: "Restaurant AI WhatsApp Chatbot",
    category: "ai",
    contributionStatus: "owner-described",
    ...unpublished,
  },
  {
    slug: "pedro-cores-film",
    title: "Pedro Cores Film",
    category: "creative",
    contributionStatus: "owner-described",
    ...unpublished,
  },
];
