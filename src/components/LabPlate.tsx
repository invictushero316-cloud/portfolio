type LabPlateProps = {
  seed?: number;
  tunnel?: boolean;
};

export function LabPlate({ seed = 0, tunnel = false }: LabPlateProps) {
  const drift = (seed % 4) * 16;
  const rings = tunnel ? [250, 198, 146, 96, 52] : [220 - drift, 150, 84];

  return (
    <svg viewBox="0 0 720 420" className="h-auto w-full" aria-hidden="true">
      <rect width="720" height="420" fill="#0C2D59" />
      {rings.map((radius, index) => (
        <ellipse
          key={radius}
          cx={360 + (tunnel ? 0 : drift - 24)}
          cy="208"
          rx={radius}
          ry={radius * 0.56}
          fill="none"
          stroke={index % 2 === 0 ? "#C9B8FF" : "#70B7FF"}
          strokeOpacity={0.85 - index * 0.12}
          strokeWidth="1.25"
        />
      ))}
      <circle cx={360 + (tunnel ? 0 : drift - 24)} cy="208" r="18" fill="#16386C" stroke="#70B7FF" strokeWidth="1.25" />
      {tunnel ? (
        <>
          <path className="lab-drift" d="M36 208H250" fill="none" stroke="#70B7FF" strokeWidth="1.25" />
          <path d="M470 208H684" fill="none" stroke="#C9B8FF" strokeWidth="1.25" />
          <rect x="48" y="286" width="168" height="78" rx="16" fill="#102848" stroke="#D7E8FF" strokeOpacity="0.45" />
          <path d="M68 312H188M68 332H156M68 352H124" fill="none" stroke="#70B7FF" strokeWidth="1.25" />
          <circle cx="250" cy="208" r="3.5" fill="#70B7FF" />
          <circle cx="470" cy="208" r="3.5" fill="#C9B8FF" />
        </>
      ) : (
        <>
          <path
            d={`M64 ${120 + drift}H${210 + drift}V260H360`}
            fill="none"
            stroke="#D7E8FF"
            strokeOpacity="0.7"
            strokeWidth="1.25"
          />
          <rect
            x={430 - drift}
            y="96"
            width="196"
            height="228"
            rx="28"
            fill="none"
            stroke="#C9B8FF"
            strokeOpacity="0.8"
            strokeWidth="1.25"
          />
        </>
      )}
    </svg>
  );
}
