const fs = require('fs');
const path = require('path');

function polarToCartesian(cx, cy, r, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(angleInRadians),
    y: cy + r * Math.sin(angleInRadians),
  };
}

function createRayPath(cx, cy, angle, rInner, rOuter, halfAngleInner, halfAngleOuter) {
  const p1 = polarToCartesian(cx, cy, rInner, angle - halfAngleInner);
  const p2 = polarToCartesian(cx, cy, rOuter, angle - halfAngleOuter);
  const p3 = polarToCartesian(cx, cy, rOuter, angle + halfAngleOuter);
  const p4 = polarToCartesian(cx, cy, rInner, angle + halfAngleInner);
  return `M ${p1.x.toFixed(2)} ${p1.y.toFixed(2)} L ${p2.x.toFixed(2)} ${p2.y.toFixed(2)} L ${p3.x.toFixed(2)} ${p3.y.toFixed(2)} L ${p4.x.toFixed(2)} ${p4.y.toFixed(2)} Z`;
}

const cx = 100;
const cy = 100;
const rInner = 36.5;
const rays = [];

for (let i = 0; i < 16; i++) {
  const angle = i * 22.5;
  if (i % 4 === 0) {
    // 4 Cardinal rays (0, 90, 180, 270)
    rays.push(createRayPath(cx, cy, angle, rInner, 96, 4.4, 6.2));
  } else if (i % 2 === 0) {
    // 4 Diagonal medium rays (45, 135, 225, 315)
    rays.push(createRayPath(cx, cy, angle, rInner, 78, 3.8, 5.2));
  } else {
    // 8 Intermediate small rays (22.5, 67.5, ...)
    rays.push(createRayPath(cx, cy, angle, rInner, 58, 3.2, 4.2));
  }
}

const emblemSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
  <g fill="#C8102E">
    <!-- 16 Sun Rays -->
    ${rays.map((d) => `<path d="${d}" />`).join('\n    ')}
    <!-- Concentric Rings & Core -->
    <circle cx="100" cy="100" r="21" />
    <circle cx="100" cy="100" r="27.5" fill="none" stroke="#C8102E" stroke-width="2.5" />
    <circle cx="100" cy="100" r="33.5" fill="none" stroke="#C8102E" stroke-width="2.8" />
  </g>
</svg>`;

// Also full logo SVG with typography
const fullLogoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 520" width="100%" height="100%">
  <g transform="translate(400, 155) scale(1.35) translate(-100, -100)">
    <g fill="#C8102E">
      ${rays.map((d) => `<path d="${d}" />`).join('\n      ')}
      <circle cx="100" cy="100" r="21" />
      <circle cx="100" cy="100" r="27.5" fill="none" stroke="#C8102E" stroke-width="2.5" />
      <circle cx="100" cy="100" r="33.5" fill="none" stroke="#C8102E" stroke-width="2.8" />
    </g>
  </g>
  
  <!-- Text: VISION STONES -->
  <text x="400" y="380" font-family="'Outfit', 'Inter', -apple-system, sans-serif" font-weight="900" font-size="64" letter-spacing="4" fill="#111111" text-anchor="middle">
    VISION STONES
  </text>
  
  <!-- Subtitle: NATURAL MINERALS with red flanking lines -->
  <line x1="70" y1="412" x2="160" y2="412" stroke="#C8102E" stroke-width="3.5" />
  <text x="400" y="420" font-family="'Outfit', 'Inter', sans-serif" font-weight="800" font-size="24" letter-spacing="14" fill="#111111" text-anchor="middle">
    NATURAL MINERALS
  </text>
  <line x1="640" y1="412" x2="730" y2="412" stroke="#C8102E" stroke-width="3.5" />
  
  <!-- Bottom line: MANUFACTURER | SUPPLIER | INDUSTRIAL SOLUTIONS -->
  <text x="400" y="465" font-family="'Space Mono', monospace, sans-serif" font-weight="700" font-size="14" letter-spacing="5" fill="#444444" text-anchor="middle">
    MANUFACTURER   |   SUPPLIER   |   INDUSTRIAL SOLUTIONS
  </text>
</svg>`;

// Ensure public directories exist
fs.writeFileSync(path.join(__dirname, '../public/favicon.svg'), emblemSvg);
fs.writeFileSync(path.join(__dirname, '../public/icon.svg'), emblemSvg);
fs.writeFileSync(path.join(__dirname, '../public/logo.svg'), fullLogoSvg);
fs.writeFileSync(path.join(__dirname, '../src/app/icon.svg'), emblemSvg);

console.log('Successfully generated favicon.svg, icon.svg, logo.svg, and src/app/icon.svg');
