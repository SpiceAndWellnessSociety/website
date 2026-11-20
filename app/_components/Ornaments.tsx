// Hand-drawn henna-style line art, defined once in <OrnamentDefs> and reused with <use>
type Props = React.ComponentProps<"svg">;

const line = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

function petal(r0: number, r1: number, w: number) {
  const a = r0 + (r1 - r0) * 0.3;
  const b = r0 + (r1 - r0) * 0.75;
  return `M0 ${-r0}C${w} ${-a} ${w * 0.7} ${-b} 0 ${-r1}C${-w * 0.7} ${-b} ${-w} ${-a} 0 ${-r0}Z`;
}

function Ring({
  n,
  offset = 0,
  children,
}: {
  n: number;
  offset?: number;
  children: React.ReactNode;
}) {
  return Array.from({ length: n }, (_, i) => (
    <g key={i} transform={`rotate(${offset + (i * 360) / n})`}>
      {children}
    </g>
  ));
}

function Dots({ r, n, size = 1.4 }: { r: number; n: number; size?: number }) {
  return (
    <circle
      r={r}
      strokeWidth={size}
      strokeDasharray={`0 ${(2 * Math.PI * r) / n}`}
    />
  );
}

function Rosette({ n, r }: { n: number; r: number }) {
  return (
    <>
      <circle r={r * 0.22} fill="currentColor" stroke="none" />
      <Ring n={n}>
        <path d={petal(r * 0.3, r, r * 0.38)} />
      </Ring>
    </>
  );
}

// Outer ring first so inner petals sit on top when the bloom is filled
function Bloom({ x, y, r, n }: { x: number; y: number; r: number; n: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <Ring n={n} offset={180 / n}>
        <path d={petal(r * 0.45, r, r * 0.3)} />
        <path d={petal(r * 0.55, r * 0.88, r * 0.1)} />
        <circle cy={-r * 1.12} r={r * 0.04} fill="currentColor" />
      </Ring>
      <Ring n={n}>
        <path d={petal(r * 0.25, r * 0.6, r * 0.2)} />
      </Ring>
      <circle r={r * 0.22} />
      <circle r={r * 0.12} fill="currentColor" stroke="none" />
    </g>
  );
}

function Leaf({ x, y, rot, len }: { x: number; y: number; rot: number; len: number }) {
  const w = len * 0.32;
  const veins = [0.3, 0.5, 0.7]
    .map((t) => `M0 ${-t * len}l${w * 0.7} ${-len * 0.12}M0 ${-t * len}l${-w * 0.7} ${-len * 0.12}`)
    .join("");
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <path d={petal(0, len, w)} />
      <path d={`M0 0V${-len * 0.9}${veins}`} strokeWidth={0.5} />
    </g>
  );
}

function Specks({ at, r = 1.4 }: { at: number[][]; r?: number }) {
  return at.map(([cx, cy]) => (
    <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="currentColor" />
  ));
}

const paisley =
  "M50 135C22 135 8 114 10 92C12 66 32 52 48 40C62 30 70 18 64 6C80 12 88 32 84 52C92 68 92 100 80 118C72 130 62 135 50 135Z";

const views = {
  mandala: "-100 -100 200 200",
  paisley: "-12 -18 124 172",
  spray: "0 0 220 180",
  divider: "0 0 320 40",
};

export function OrnamentDefs() {
  return (
    <svg aria-hidden="true" width="0" height="0" className="absolute">
      <defs>
        <symbol id="orn-mandala" viewBox={views.mandala}>
          <g {...line} strokeWidth={0.7}>
            <circle r={3.5} fill="currentColor" />
            <circle r={8} />
            <Ring n={8}>
              <path d={petal(10, 27, 8)} />
              <path d={petal(13, 23, 3)} />
            </Ring>
            <Ring n={8} offset={22.5}>
              <path d={petal(12, 20, 3.5)} />
            </Ring>
            <circle r={30} />
            <Dots r={34} n={40} size={1.6} />
            <circle r={37.5} />
            <Ring n={16}>
              <path d={petal(39, 60, 8)} />
              <path d={petal(43, 55, 3.5)} />
              <circle cy={-47} r={0.9} fill="currentColor" />
            </Ring>
            <Ring n={16} offset={11.25}>
              <circle cy={-60} r={1.1} fill="currentColor" />
              <path d={petal(52, 63, 2.5)} />
            </Ring>
            <circle r={66} />
            <Ring n={24}>
              <path d="M-9.1 -69.4A9.1 9.1 0 0 1 9.1 -69.4" />
              <path d="M-5.6 -69.8A5.6 5.6 0 0 1 5.6 -69.8" />
              <path d={petal(80, 90, 3)} />
              <circle cy={-94} r={1} fill="currentColor" />
            </Ring>
            <Ring n={24} offset={7.5}>
              <circle cy={-74} r={0.8} fill="currentColor" />
              <circle cy={-84} r={1.3} />
            </Ring>
            <Dots r={97} n={96} size={1.1} />
          </g>
        </symbol>

        <symbol id="orn-paisley" viewBox={views.paisley}>
          <g {...line} strokeWidth={1.1}>
            <path d={paisley} />
            <path d={paisley} transform="translate(14 26.6) scale(.72)" />
            <path
              d={paisley}
              transform="translate(-6 -11.4) scale(1.12)"
              strokeWidth={2.2}
              strokeDasharray="0 6"
            />
            <path d="M64 6C58 14 50 12 52 4C53 0 58 0 59 3" />
            <g transform="translate(50 98)">
              <Rosette n={8} r={16} />
              <Dots r={21} n={22} size={2} />
            </g>
            <path d="M50 58C44 64 46 72 52 70" />
            <Specks at={[[58, 52], [62, 44]]} r={1.6} />
          </g>
        </symbol>

        <symbol id="orn-spray" viewBox={views.spray}>
          <g {...line} strokeWidth={0.8}>
            <path d="M20 170C50 150 70 120 80 96M80 96C110 90 130 70 140 52M80 96C110 110 130 120 150 126" />
            <path d="M150 126C176 132 196 118 194 98C192 84 178 82 176 94C175 101 184 103 185 97" />
            <path d="M140 52C150 30 172 22 186 32C196 40 188 52 180 48C175 45 178 40 182 41" />
            {/* ivory fill hides the vines and mandala lines behind each flower */}
            <g fill="var(--ccivory)">
              <Leaf x={40} y={156} rot={-40} len={34} />
              <Leaf x={56} y={140} rot={50} len={30} />
              <Leaf x={118} y={112} rot={150} len={26} />
              <Leaf x={112} y={80} rot={20} len={28} />
              <Leaf x={166} y={128} rot={110} len={22} />
              <Bloom x={80} y={96} r={34} n={10} />
              <Bloom x={140} y={52} r={22} n={8} />
              <Bloom x={150} y={126} r={16} n={8} />
            </g>
            <Specks
              at={[[200, 70], [206, 80], [24, 120], [16, 130], [196, 144], [104, 22], [96, 30]]}
              r={1.6}
            />
          </g>
        </symbol>

        <symbol id="orn-divider" viewBox={views.divider}>
          <g {...line} strokeWidth={1}>
            <path d="M120 20C96 20 84 10 64 14C44 18 36 30 20 26C10 24 8 14 16 12C22 11 22 18 18 18" />
            <path d="M200 20C224 20 236 10 256 14C276 18 284 30 300 26C310 24 312 14 304 12C298 11 298 18 302 18" />
            <Leaf x={92} y={16} rot={-70} len={14} />
            <Leaf x={52} y={18} rot={-120} len={12} />
            <Leaf x={228} y={16} rot={70} len={14} />
            <Leaf x={268} y={18} rot={120} len={12} />
            <Specks at={[[76, 8], [36, 32], [244, 8], [284, 32]]} />
            <g transform="translate(160 20)">
              <g transform="rotate(-90)">
                <path d={petal(18, 38, 6)} />
                <path d={petal(21, 32, 2)} />
              </g>
              <g transform="rotate(90)">
                <path d={petal(18, 38, 6)} />
                <path d={petal(21, 32, 2)} />
              </g>
              <Rosette n={8} r={13} />
              <circle r={16} />
            </g>
          </g>
        </symbol>

        {/* patterns resolve currentColor from here, not from where they're used */}
        <pattern
          id="orn-henna"
          width={160}
          height={160}
          patternUnits="userSpaceOnUse"
          color="var(--ccginger)"
        >
          <g {...line} strokeWidth={0.8}>
            <path d="M40 40C62 52 60 84 84 96C100 104 112 100 116 112" />
            <path d="M48 22C62 8 84 10 92 26C96 36 86 44 80 38C76 34 80 28 84 31" />
            <path d="M150 18C158 34 156 54 142 62C134 66 128 60 132 54" />
            <Leaf x={58} y={64} rot={-60} len={18} />
            <Leaf x={70} y={84} rot={210} len={16} />
            <Leaf x={98} y={102} rot={60} len={14} />
            <g transform="translate(40 40)">
              <Rosette n={8} r={14} />
              <Dots r={18} n={22} size={1.6} />
              <circle r={21} />
            </g>
            <Bloom x={124} y={124} r={16} n={8} />
            <path d={paisley} transform="translate(6 92) scale(.36) rotate(-20 50 90)" />
            <Specks
              at={[[110, 30], [118, 40], [106, 46], [16, 150], [8, 138], [80, 150], [150, 82], [90, 130], [140, 96]]}
              r={1.3}
            />
          </g>
        </pattern>

        <pattern
          id="orn-toran"
          width={48}
          height={32}
          patternUnits="userSpaceOnUse"
          color="var(--ccspice)"
        >
          <g {...line} strokeWidth={1}>
            <path d="M0 3H48M0 6H48" />
            <path d="M0 6Q24 34 48 6M8 6Q24 24 40 6" />
            <path d={petal(0, 10, 3)} transform="translate(24 30) scale(1 -1)" />
            <Specks at={[[24, 14], [0, 11], [48, 11]]} r={1.3} />
          </g>
        </pattern>
      </defs>
    </svg>
  );
}

function Use({ symbol, ...props }: Props & { symbol: keyof typeof views }) {
  const [, , w, h] = views[symbol].split(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} aria-hidden="true" {...props}>
      <use href={`#orn-${symbol}`} width={w} height={h} />
    </svg>
  );
}

export const Mandala = (props: Props) => <Use symbol="mandala" {...props} />;
export const Paisley = (props: Props) => <Use symbol="paisley" {...props} />;
export const FloralSpray = (props: Props) => <Use symbol="spray" {...props} />;
export const Divider = (props: Props) => <Use symbol="divider" {...props} />;

function Fill({ pattern, ...props }: Props & { pattern: string }) {
  return (
    <svg aria-hidden="true" {...props}>
      <rect width="100%" height="100%" fill={`url(#orn-${pattern})`} />
    </svg>
  );
}

export const HennaPattern = (props: Props) => <Fill pattern="henna" {...props} />;
export const Toran = (props: Props) => <Fill pattern="toran" {...props} />;
