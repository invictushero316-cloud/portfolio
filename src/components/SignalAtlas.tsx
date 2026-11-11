import type { CapsuleId } from "../data/skills";

type SignalAtlasProps = {
  labels: Record<CapsuleId, string>;
};

export function SignalAtlas({ labels }: SignalAtlasProps) {
  return (
    <svg viewBox="0 0 640 400" className="h-auto w-full" aria-hidden="true">
      <defs>
        <radialGradient id="signal-atlas-wash" cx="48%" cy="54%" r="64%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="55%" stopColor="#F3F8FF" />
          <stop offset="100%" stopColor="#D5EAFF" />
        </radialGradient>
      </defs>
      <g data-atlas-back>
        <rect x="18" y="16" width="604" height="372" rx="28" fill="#C5DFFF" />
      </g>
      <g data-atlas-face>
        <rect x="6" y="4" width="604" height="372" rx="28" fill="url(#signal-atlas-wash)" />
        <rect x="6" y="4" width="604" height="372" rx="28" fill="none" stroke="#0C2D59" strokeOpacity="0.16" />
        <path d="M28 84H588" fill="none" stroke="#0C2D59" strokeOpacity="0.16" />
        <g fill="none" stroke="#0C2D59" strokeWidth="1.7" strokeLinejoin="round" strokeLinecap="square">
          <path d="M30 52V28h3.2L40 44l6.8-16H50v24" />
        </g>
        <circle cx="58" cy="30" r="2.5" fill="#1D6FF2" />
        <ellipse cx="312" cy="214" rx="132" ry="86" fill="#E9F4FF" />
      </g>
      <g data-atlas-draw fill="none" strokeLinejoin="round" strokeLinecap="square">
        <path data-circuit="" pathLength={1} d="M132 134H196V206H258" stroke="#0C2D59" strokeWidth="1.45" />
        <path d="M358 174H408V120H454" stroke="#1D6FF2" strokeWidth="1.45" />
        <path d="M364 206H468" stroke="#0C2D59" strokeWidth="1.45" />
        <path data-circuit="" pathLength={1} d="M312 258V264H192" stroke="#70B7FF" strokeWidth="1.7" />
        <path d="M312 264V308H400" stroke="#0C2D59" strokeWidth="1.45" />
        <path d="M312 154a52 52 0 0 1 52 52" stroke="#1D6FF2" strokeWidth="1.7" />
        <circle cx="312" cy="206" r="52" stroke="#70B7FF" strokeWidth="1.35" />
        <rect x="298" y="192" width="28" height="28" rx="6" fill="#FFFFFF" stroke="#0C2D59" strokeWidth="1.35" />
        <circle cx="312" cy="206" r="4" fill="#1D6FF2" />
        <circle cx="132" cy="134" r="4.5" fill="#0C2D59" stroke="none" />
        <circle cx="454" cy="120" r="4.5" fill="#1D6FF2" stroke="none" />
        <circle cx="468" cy="206" r="4.5" fill="#0C2D59" stroke="none" />
        <circle cx="192" cy="264" r="4.5" fill="#70B7FF" stroke="none" />
        <circle cx="400" cy="308" r="4.5" fill="#1D6FF2" stroke="none" />
        <path d="M28 352H46M28 352V334" stroke="#0C2D59" strokeOpacity="0.35" strokeWidth="1.1" />
        <path d="M586 352H568M586 352V334" stroke="#0C2D59" strokeOpacity="0.35" strokeWidth="1.1" />
      </g>
      <g fontFamily="Outfit Variable, Segoe UI, sans-serif" fontSize="15" fontWeight="560">
        <g data-atlas-capsule="">
          <rect x="28" y="118" width="104" height="32" rx="16" fill="#FFFFFF" stroke="#70B7FF" strokeWidth="1.25" />
          <text x="80" y="139" textAnchor="middle" fill="#0C2D59">
            {labels.python}
          </text>
        </g>
        <g data-atlas-capsule="">
          <rect x="454" y="104" width="64" height="32" rx="16" fill="#FFFFFF" stroke="#70B7FF" strokeWidth="1.25" />
          <text x="486" y="125" textAnchor="middle" fill="#0C2D59">
            {labels.ai}
          </text>
        </g>
        <g data-atlas-capsule="">
          <rect x="468" y="190" width="78" height="32" rx="16" fill="#FFFFFF" stroke="#70B7FF" strokeWidth="1.25" />
          <text x="507" y="211" textAnchor="middle" fill="#0C2D59">
            {labels.apis}
          </text>
        </g>
        <g data-atlas-capsule="">
          <rect x="28" y="248" width="164" height="32" rx="16" fill="#FFFFFF" stroke="#70B7FF" strokeWidth="1.25" />
          <text x="110" y="269" textAnchor="middle" fill="#0C2D59">
            {labels.automation}
          </text>
        </g>
        <g data-atlas-capsule="">
          <rect x="400" y="292" width="92" height="32" rx="16" fill="#FFFFFF" stroke="#70B7FF" strokeWidth="1.25" />
          <text x="446" y="313" textAnchor="middle" fill="#0C2D59">
            {labels.react}
          </text>
        </g>
      </g>
    </svg>
  );
}
