// Flat line work that echoes the logo: even strokes, simple petals, open-circle dots
function petal(r0: number, r1: number, w: number) {
  const a = r0 + (r1 - r0) * 0.3;
  const b = r0 + (r1 - r0) * 0.75;
  return `M0 ${-r0}C${w} ${-a} ${w * 0.7} ${-b} 0 ${-r1}C${-w * 0.7} ${-b} ${-w} ${-a} 0 ${-r0}Z`;
}

function ring(n: number, shape: (angle: number) => React.ReactNode) {
  return Array.from({ length: n }, (_, i) => shape((i * 360) / n));
}

export function Mandala(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="-100 -100 200 200" aria-hidden="true" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinejoin="round">
        <circle r={6} fill="currentColor" />
        <circle r={14} />
        {ring(8, (a) => (
          <path key={a} d={petal(18, 44, 12)} transform={`rotate(${a})`} />
        ))}
        <circle r={50} />
        {ring(16, (a) => (
          <path key={a} d={petal(54, 76, 8)} transform={`rotate(${a})`} />
        ))}
        {ring(16, (a) => (
          <circle key={a} cy={-87} r={4} transform={`rotate(${a + 11.25})`} />
        ))}
      </g>
    </svg>
  );
}
