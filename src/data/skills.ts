export const rangeIds = ["python", "crm", "ml"] as const;
export type RangeId = (typeof rangeIds)[number];

export const rangeScaleMax = 10;

export const rangeBands: Record<RangeId, { start: number; end: number }> = {
  python: { start: 5, end: 10 },
  crm: { start: 5, end: 10 },
  ml: { start: 3, end: 5 },
};

export const serviceIds = ["product", "automation", "ai", "apis"] as const;
export type ServiceId = (typeof serviceIds)[number];

export const capsuleIds = ["python", "ai", "apis", "automation", "react"] as const;
export type CapsuleId = (typeof capsuleIds)[number];
