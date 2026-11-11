type TraceFrameProps = {
  seed: number;
  tone?: "ice" | "night";
};

export function TraceFrame({ seed, tone = "ice" }: TraceFrameProps) {
  const shift = (seed % 5) * 16;
  const night = tone === "night";
  const stroke = night ? "#D7E8FF" : "#0C2D59";
  const accent = night ? "#C9B8FF" : "#70B7FF";
  const disc = night ? "#16386C" : "#E9F4FF";
  const panel = night ? "#102848" : "#FFFFFF";

  return (
    <svg viewBox="0 0 640 360" className="h-auto w-full [&_path]:fill-none" aria-hidden="true">
      <rect width="640" height="360" fill={night ? "#0C2D59" : "#FFFFFF"} />
      <circle cx={430 - shift} cy={140 + (seed % 3) * 8} r="88" fill={disc} />
      <circle cx={430 - shift} cy={140 + (seed % 3) * 8} r="88" fill="none" stroke={accent} strokeWidth="1.25" />
      <path
        d={`M28 ${72 + shift}H${168 + shift}V${150}H300`}
        fill="none"
        stroke={stroke}
        strokeWidth="1.25"
      />
      <path d={`M300 150H${520 - (seed % 4) * 12}V${250}`} fill="none" stroke={stroke} strokeWidth="1.25" />
      <circle cx={168 + shift} cy={72 + shift} r="3.5" fill={accent} />
      <circle cx="300" cy="150" r="3.5" fill={night ? "#70B7FF" : "#1D6FF2"} />
      <rect x="336" y="188" width="196" height="104" rx="18" fill={panel} stroke={stroke} strokeOpacity="0.35" />
      <path d="M356 216H500M356 240H468M356 264H424" stroke={accent} strokeWidth="1.25" />
    </svg>
  );
}
