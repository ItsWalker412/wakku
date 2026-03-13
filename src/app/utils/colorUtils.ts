// app/utils/colorUtils.ts

export const getColorClasses = (colorName: string) => {
  const colorMap: Record<string, {
    text: string;
    bg: string;
    bgLight: string;
    border: string;
    gradientFrom: string;
    gradientTo: string;
    bgGradient: string;
    accentText: string;
    ring: string;
    hoverBg: string;
  }> = {
    // === AZULES ===
    blue: {
      text: 'text-blue-500',
      bg: 'bg-blue-500',
      bgLight: 'bg-blue-500/20',
      border: 'border-blue-500/20',
      gradientFrom: 'from-blue-500/10',
      gradientTo: 'to-blue-500/5',
      bgGradient: 'bg-gradient-to-br from-blue-500/10 to-blue-500/5',
      accentText: 'text-blue-400',
      ring: 'ring-blue-500',
      hoverBg: 'hover:bg-blue-500/30'
    },
    sky: {
      text: 'text-sky-500',
      bg: 'bg-sky-500',
      bgLight: 'bg-sky-500/20',
      border: 'border-sky-500/20',
      gradientFrom: 'from-sky-500/10',
      gradientTo: 'to-sky-500/5',
      bgGradient: 'bg-gradient-to-br from-sky-500/10 to-sky-500/5',
      accentText: 'text-sky-400',
      ring: 'ring-sky-500',
      hoverBg: 'hover:bg-sky-500/30'
    },
    cyan: {
      text: 'text-cyan-500',
      bg: 'bg-cyan-500',
      bgLight: 'bg-cyan-500/20',
      border: 'border-cyan-500/20',
      gradientFrom: 'from-cyan-500/10',
      gradientTo: 'to-cyan-500/5',
      bgGradient: 'bg-gradient-to-br from-cyan-500/10 to-cyan-500/5',
      accentText: 'text-cyan-400',
      ring: 'ring-cyan-500',
      hoverBg: 'hover:bg-cyan-500/30'
    },
    lightBlue: {
      text: 'text-blue-400',
      bg: 'bg-blue-400',
      bgLight: 'bg-blue-400/20',
      border: 'border-blue-400/20',
      gradientFrom: 'from-blue-400/10',
      gradientTo: 'to-blue-400/5',
      bgGradient: 'bg-gradient-to-br from-blue-400/10 to-blue-400/5',
      accentText: 'text-blue-300',
      ring: 'ring-blue-400',
      hoverBg: 'hover:bg-blue-400/30'
    },
    deepBlue: {
      text: 'text-blue-600',
      bg: 'bg-blue-600',
      bgLight: 'bg-blue-600/20',
      border: 'border-blue-600/20',
      gradientFrom: 'from-blue-600/10',
      gradientTo: 'to-blue-600/5',
      bgGradient: 'bg-gradient-to-br from-blue-600/10 to-blue-600/5',
      accentText: 'text-blue-500',
      ring: 'ring-blue-600',
      hoverBg: 'hover:bg-blue-600/30'
    },
    azure: {
      text: 'text-blue-300',
      bg: 'bg-blue-300',
      bgLight: 'bg-blue-300/20',
      border: 'border-blue-300/20',
      gradientFrom: 'from-blue-300/10',
      gradientTo: 'to-blue-300/5',
      bgGradient: 'bg-gradient-to-br from-blue-300/10 to-blue-300/5',
      accentText: 'text-blue-200',
      ring: 'ring-blue-300',
      hoverBg: 'hover:bg-blue-300/30'
    },

    // === VERDES ===
    emerald: {
      text: 'text-emerald-500',
      bg: 'bg-emerald-500',
      bgLight: 'bg-emerald-500/20',
      border: 'border-emerald-500/20',
      gradientFrom: 'from-emerald-500/10',
      gradientTo: 'to-emerald-500/5',
      bgGradient: 'bg-gradient-to-br from-emerald-500/10 to-emerald-500/5',
      accentText: 'text-emerald-400',
      ring: 'ring-emerald-500',
      hoverBg: 'hover:bg-emerald-500/30'
    },
    green: {
      text: 'text-green-500',
      bg: 'bg-green-500',
      bgLight: 'bg-green-500/20',
      border: 'border-green-500/20',
      gradientFrom: 'from-green-500/10',
      gradientTo: 'to-green-500/5',
      bgGradient: 'bg-gradient-to-br from-green-500/10 to-green-500/5',
      accentText: 'text-green-400',
      ring: 'ring-green-500',
      hoverBg: 'hover:bg-green-500/30'
    },
    lime: {
      text: 'text-lime-500',
      bg: 'bg-lime-500',
      bgLight: 'bg-lime-500/20',
      border: 'border-lime-500/20',
      gradientFrom: 'from-lime-500/10',
      gradientTo: 'to-lime-500/5',
      bgGradient: 'bg-gradient-to-br from-lime-500/10 to-lime-500/5',
      accentText: 'text-lime-400',
      ring: 'ring-lime-500',
      hoverBg: 'hover:bg-lime-500/30'
    },
    teal: {
      text: 'text-teal-500',
      bg: 'bg-teal-500',
      bgLight: 'bg-teal-500/20',
      border: 'border-teal-500/20',
      gradientFrom: 'from-teal-500/10',
      gradientTo: 'to-teal-500/5',
      bgGradient: 'bg-gradient-to-br from-teal-500/10 to-teal-500/5',
      accentText: 'text-teal-400',
      ring: 'ring-teal-500',
      hoverBg: 'hover:bg-teal-500/30'
    },
    jade: {
      text: 'text-emerald-400',
      bg: 'bg-emerald-400',
      bgLight: 'bg-emerald-400/20',
      border: 'border-emerald-400/20',
      gradientFrom: 'from-emerald-400/10',
      gradientTo: 'to-emerald-400/5',
      bgGradient: 'bg-gradient-to-br from-emerald-400/10 to-emerald-400/5',
      accentText: 'text-emerald-300',
      ring: 'ring-emerald-400',
      hoverBg: 'hover:bg-emerald-400/30'
    },
    forest: {
      text: 'text-green-600',
      bg: 'bg-green-600',
      bgLight: 'bg-green-600/20',
      border: 'border-green-600/20',
      gradientFrom: 'from-green-600/10',
      gradientTo: 'to-green-600/5',
      bgGradient: 'bg-gradient-to-br from-green-600/10 to-green-600/5',
      accentText: 'text-green-500',
      ring: 'ring-green-600',
      hoverBg: 'hover:bg-green-600/30'
    },

    // === PÚRPURAS/VIOLETAS ===
    purple: {
      text: 'text-purple-500',
      bg: 'bg-purple-500',
      bgLight: 'bg-purple-500/20',
      border: 'border-purple-500/20',
      gradientFrom: 'from-purple-500/10',
      gradientTo: 'to-purple-500/5',
      bgGradient: 'bg-gradient-to-br from-purple-500/10 to-purple-500/5',
      accentText: 'text-purple-400',
      ring: 'ring-purple-500',
      hoverBg: 'hover:bg-purple-500/30'
    },
    violet: {
      text: 'text-violet-500',
      bg: 'bg-violet-500',
      bgLight: 'bg-violet-500/20',
      border: 'border-violet-500/20',
      gradientFrom: 'from-violet-500/10',
      gradientTo: 'to-violet-500/5',
      bgGradient: 'bg-gradient-to-br from-violet-500/10 to-violet-500/5',
      accentText: 'text-violet-400',
      ring: 'ring-violet-500',
      hoverBg: 'hover:bg-violet-500/30'
    },
    indigo: {
      text: 'text-indigo-500',
      bg: 'bg-indigo-500',
      bgLight: 'bg-indigo-500/20',
      border: 'border-indigo-500/20',
      gradientFrom: 'from-indigo-500/10',
      gradientTo: 'to-indigo-500/5',
      bgGradient: 'bg-gradient-to-br from-indigo-500/10 to-indigo-500/5',
      accentText: 'text-indigo-400',
      ring: 'ring-indigo-500',
      hoverBg: 'hover:bg-indigo-500/30'
    },
    lavender: {
      text: 'text-purple-400',
      bg: 'bg-purple-400',
      bgLight: 'bg-purple-400/20',
      border: 'border-purple-400/20',
      gradientFrom: 'from-purple-400/10',
      gradientTo: 'to-purple-400/5',
      bgGradient: 'bg-gradient-to-br from-purple-400/10 to-purple-400/5',
      accentText: 'text-purple-300',
      ring: 'ring-purple-400',
      hoverBg: 'hover:bg-purple-400/30'
    },
    amethyst: {
      text: 'text-violet-400',
      bg: 'bg-violet-400',
      bgLight: 'bg-violet-400/20',
      border: 'border-violet-400/20',
      gradientFrom: 'from-violet-400/10',
      gradientTo: 'to-violet-400/5',
      bgGradient: 'bg-gradient-to-br from-violet-400/10 to-violet-400/5',
      accentText: 'text-violet-300',
      ring: 'ring-violet-400',
      hoverBg: 'hover:bg-violet-400/30'
    },
    royalPurple: {
      text: 'text-purple-600',
      bg: 'bg-purple-600',
      bgLight: 'bg-purple-600/20',
      border: 'border-purple-600/20',
      gradientFrom: 'from-purple-600/10',
      gradientTo: 'to-purple-600/5',
      bgGradient: 'bg-gradient-to-br from-purple-600/10 to-purple-600/5',
      accentText: 'text-purple-500',
      ring: 'ring-purple-600',
      hoverBg: 'hover:bg-purple-600/30'
    },

    // === ROSAS/MAGENTAS ===
    pink: {
      text: 'text-pink-500',
      bg: 'bg-pink-500',
      bgLight: 'bg-pink-500/20',
      border: 'border-pink-500/20',
      gradientFrom: 'from-pink-500/10',
      gradientTo: 'to-pink-500/5',
      bgGradient: 'bg-gradient-to-br from-pink-500/10 to-pink-500/5',
      accentText: 'text-pink-400',
      ring: 'ring-pink-500',
      hoverBg: 'hover:bg-pink-500/30'
    },
    rose: {
      text: 'text-rose-500',
      bg: 'bg-rose-500',
      bgLight: 'bg-rose-500/20',
      border: 'border-rose-500/20',
      gradientFrom: 'from-rose-500/10',
      gradientTo: 'to-rose-500/5',
      bgGradient: 'bg-gradient-to-br from-rose-500/10 to-rose-500/5',
      accentText: 'text-rose-400',
      ring: 'ring-rose-500',
      hoverBg: 'hover:bg-rose-500/30'
    },
    fuchsia: {
      text: 'text-fuchsia-500',
      bg: 'bg-fuchsia-500',
      bgLight: 'bg-fuchsia-500/20',
      border: 'border-fuchsia-500/20',
      gradientFrom: 'from-fuchsia-500/10',
      gradientTo: 'to-fuchsia-500/5',
      bgGradient: 'bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-500/5',
      accentText: 'text-fuchsia-400',
      ring: 'ring-fuchsia-500',
      hoverBg: 'hover:bg-fuchsia-500/30'
    },
    magenta: {
      text: 'text-pink-600',
      bg: 'bg-pink-600',
      bgLight: 'bg-pink-600/20',
      border: 'border-pink-600/20',
      gradientFrom: 'from-pink-600/10',
      gradientTo: 'to-pink-600/5',
      bgGradient: 'bg-gradient-to-br from-pink-600/10 to-pink-600/5',
      accentText: 'text-pink-500',
      ring: 'ring-pink-600',
      hoverBg: 'hover:bg-pink-600/30'
    },
    blush: {
      text: 'text-rose-400',
      bg: 'bg-rose-400',
      bgLight: 'bg-rose-400/20',
      border: 'border-rose-400/20',
      gradientFrom: 'from-rose-400/10',
      gradientTo: 'to-rose-400/5',
      bgGradient: 'bg-gradient-to-br from-rose-400/10 to-rose-400/5',
      accentText: 'text-rose-300',
      ring: 'ring-rose-400',
      hoverBg: 'hover:bg-rose-400/30'
    },
    hotPink: {
      text: 'text-pink-500',
      bg: 'bg-pink-500',
      bgLight: 'bg-pink-500/25',
      border: 'border-pink-500/25',
      gradientFrom: 'from-pink-500/15',
      gradientTo: 'to-pink-500/8',
      bgGradient: 'bg-gradient-to-br from-pink-500/15 to-pink-500/8',
      accentText: 'text-pink-400',
      ring: 'ring-pink-500',
      hoverBg: 'hover:bg-pink-500/35'
    },

    // === ROJOS/NARANJAS ===
    red: {
      text: 'text-red-500',
      bg: 'bg-red-500',
      bgLight: 'bg-red-500/20',
      border: 'border-red-500/20',
      gradientFrom: 'from-red-500/10',
      gradientTo: 'to-red-500/5',
      bgGradient: 'bg-gradient-to-br from-red-500/10 to-red-500/5',
      accentText: 'text-red-400',
      ring: 'ring-red-500',
      hoverBg: 'hover:bg-red-500/30'
    },
    orange: {
      text: 'text-orange-500',
      bg: 'bg-orange-500',
      bgLight: 'bg-orange-500/20',
      border: 'border-orange-500/20',
      gradientFrom: 'from-orange-500/10',
      gradientTo: 'to-orange-500/5',
      bgGradient: 'bg-gradient-to-br from-orange-500/10 to-orange-500/5',
      accentText: 'text-orange-400',
      ring: 'ring-orange-500',
      hoverBg: 'hover:bg-orange-500/30'
    },
    amber: {
      text: 'text-amber-500',
      bg: 'bg-amber-500',
      bgLight: 'bg-amber-500/20',
      border: 'border-amber-500/20',
      gradientFrom: 'from-amber-500/10',
      gradientTo: 'to-amber-500/5',
      bgGradient: 'bg-gradient-to-br from-amber-500/10 to-amber-500/5',
      accentText: 'text-amber-400',
      ring: 'ring-amber-500',
      hoverBg: 'hover:bg-amber-500/30'
    },
    crimson: {
      text: 'text-red-600',
      bg: 'bg-red-600',
      bgLight: 'bg-red-600/20',
      border: 'border-red-600/20',
      gradientFrom: 'from-red-600/10',
      gradientTo: 'to-red-600/5',
      bgGradient: 'bg-gradient-to-br from-red-600/10 to-red-600/5',
      accentText: 'text-red-500',
      ring: 'ring-red-600',
      hoverBg: 'hover:bg-red-600/30'
    },
    scarlet: {
      text: 'text-red-500',
      bg: 'bg-red-500',
      bgLight: 'bg-red-500/25',
      border: 'border-red-500/25',
      gradientFrom: 'from-red-500/15',
      gradientTo: 'to-red-500/8',
      bgGradient: 'bg-gradient-to-br from-red-500/15 to-red-500/8',
      accentText: 'text-red-400',
      ring: 'ring-red-500',
      hoverBg: 'hover:bg-red-500/35'
    },
    tangerine: {
      text: 'text-orange-400',
      bg: 'bg-orange-400',
      bgLight: 'bg-orange-400/20',
      border: 'border-orange-400/20',
      gradientFrom: 'from-orange-400/10',
      gradientTo: 'to-orange-400/5',
      bgGradient: 'bg-gradient-to-br from-orange-400/10 to-orange-400/5',
      accentText: 'text-orange-300',
      ring: 'ring-orange-400',
      hoverBg: 'hover:bg-orange-400/30'
    },

    // === AMARILLOS/DORADOS ===
    yellow: {
      text: 'text-yellow-500',
      bg: 'bg-yellow-500',
      bgLight: 'bg-yellow-500/20',
      border: 'border-yellow-500/20',
      gradientFrom: 'from-yellow-500/10',
      gradientTo: 'to-yellow-500/5',
      bgGradient: 'bg-gradient-to-br from-yellow-500/10 to-yellow-500/5',
      accentText: 'text-yellow-400',
      ring: 'ring-yellow-500',
      hoverBg: 'hover:bg-yellow-500/30'
    },
    gold: {
      text: 'text-yellow-400',
      bg: 'bg-yellow-400',
      bgLight: 'bg-yellow-400/20',
      border: 'border-yellow-400/20',
      gradientFrom: 'from-yellow-400/10',
      gradientTo: 'to-yellow-400/5',
      bgGradient: 'bg-gradient-to-br from-yellow-400/10 to-yellow-400/5',
      accentText: 'text-yellow-300',
      ring: 'ring-yellow-400',
      hoverBg: 'hover:bg-yellow-400/30'
    },
    mustard: {
      text: 'text-yellow-600',
      bg: 'bg-yellow-600',
      bgLight: 'bg-yellow-600/20',
      border: 'border-yellow-600/20',
      gradientFrom: 'from-yellow-600/10',
      gradientTo: 'to-yellow-600/5',
      bgGradient: 'bg-gradient-to-br from-yellow-600/10 to-yellow-600/5',
      accentText: 'text-yellow-500',
      ring: 'ring-yellow-600',
      hoverBg: 'hover:bg-yellow-600/30'
    },
    lemon: {
      text: 'text-yellow-300',
      bg: 'bg-yellow-300',
      bgLight: 'bg-yellow-300/20',
      border: 'border-yellow-300/20',
      gradientFrom: 'from-yellow-300/10',
      gradientTo: 'to-yellow-300/5',
      bgGradient: 'bg-gradient-to-br from-yellow-300/10 to-yellow-300/5',
      accentText: 'text-yellow-200',
      ring: 'ring-yellow-300',
      hoverBg: 'hover:bg-yellow-300/30'
    },

    // === NEUTROS/METÁLICOS ===
    gray: {
      text: 'text-gray-500',
      bg: 'bg-gray-500',
      bgLight: 'bg-gray-500/20',
      border: 'border-gray-500/20',
      gradientFrom: 'from-gray-500/10',
      gradientTo: 'to-gray-500/5',
      bgGradient: 'bg-gradient-to-br from-gray-500/10 to-gray-500/5',
      accentText: 'text-gray-400',
      ring: 'ring-gray-500',
      hoverBg: 'hover:bg-gray-500/30'
    },
    slate: {
      text: 'text-slate-500',
      bg: 'bg-slate-500',
      bgLight: 'bg-slate-500/20',
      border: 'border-slate-500/20',
      gradientFrom: 'from-slate-500/10',
      gradientTo: 'to-slate-500/5',
      bgGradient: 'bg-gradient-to-br from-slate-500/10 to-slate-500/5',
      accentText: 'text-slate-400',
      ring: 'ring-slate-500',
      hoverBg: 'hover:bg-slate-500/30'
    },
    zinc: {
      text: 'text-zinc-500',
      bg: 'bg-zinc-500',
      bgLight: 'bg-zinc-500/20',
      border: 'border-zinc-500/20',
      gradientFrom: 'from-zinc-500/10',
      gradientTo: 'to-zinc-500/5',
      bgGradient: 'bg-gradient-to-br from-zinc-500/10 to-zinc-500/5',
      accentText: 'text-zinc-400',
      ring: 'ring-zinc-500',
      hoverBg: 'hover:bg-zinc-500/30'
    },
    neutral: {
      text: 'text-neutral-500',
      bg: 'bg-neutral-500',
      bgLight: 'bg-neutral-500/20',
      border: 'border-neutral-500/20',
      gradientFrom: 'from-neutral-500/10',
      gradientTo: 'to-neutral-500/5',
      bgGradient: 'bg-gradient-to-br from-neutral-500/10 to-neutral-500/5',
      accentText: 'text-neutral-400',
      ring: 'ring-neutral-500',
      hoverBg: 'hover:bg-neutral-500/30'
    },
    stone: {
      text: 'text-stone-500',
      bg: 'bg-stone-500',
      bgLight: 'bg-stone-500/20',
      border: 'border-stone-500/20',
      gradientFrom: 'from-stone-500/10',
      gradientTo: 'to-stone-500/5',
      bgGradient: 'bg-gradient-to-br from-stone-500/10 to-stone-500/5',
      accentText: 'text-stone-400',
      ring: 'ring-stone-500',
      hoverBg: 'hover:bg-stone-500/30'
    },
    silver: {
      text: 'text-gray-400',
      bg: 'bg-gray-400',
      bgLight: 'bg-gray-400/20',
      border: 'border-gray-400/20',
      gradientFrom: 'from-gray-400/10',
      gradientTo: 'to-gray-400/5',
      bgGradient: 'bg-gradient-to-br from-gray-400/10 to-gray-400/5',
      accentText: 'text-gray-300',
      ring: 'ring-gray-400',
      hoverBg: 'hover:bg-gray-400/30'
    },
    platinum: {
      text: 'text-gray-300',
      bg: 'bg-gray-300',
      bgLight: 'bg-gray-300/20',
      border: 'border-gray-300/20',
      gradientFrom: 'from-gray-300/10',
      gradientTo: 'to-gray-300/5',
      bgGradient: 'bg-gradient-to-br from-gray-300/10 to-gray-300/5',
      accentText: 'text-gray-200',
      ring: 'ring-gray-300',
      hoverBg: 'hover:bg-gray-300/30'
    },

    // === COLORES ESPECIALES/TEMÁTICOS ===
    electricBlue: {
      text: 'text-blue-400',
      bg: 'bg-blue-400',
      bgLight: 'bg-blue-400/25',
      border: 'border-blue-400/25',
      gradientFrom: 'from-blue-400/15',
      gradientTo: 'to-blue-400/8',
      bgGradient: 'bg-gradient-to-br from-blue-400/15 to-blue-400/8',
      accentText: 'text-blue-300',
      ring: 'ring-blue-400',
      hoverBg: 'hover:bg-blue-400/35'
    },
    neonGreen: {
      text: 'text-green-400',
      bg: 'bg-green-400',
      bgLight: 'bg-green-400/25',
      border: 'border-green-400/25',
      gradientFrom: 'from-green-400/15',
      gradientTo: 'to-green-400/8',
      bgGradient: 'bg-gradient-to-br from-green-400/15 to-green-400/8',
      accentText: 'text-green-300',
      ring: 'ring-green-400',
      hoverBg: 'hover:bg-green-400/35'
    },
    cyberPink: {
      text: 'text-pink-400',
      bg: 'bg-pink-400',
      bgLight: 'bg-pink-400/25',
      border: 'border-pink-400/25',
      gradientFrom: 'from-pink-400/15',
      gradientTo: 'to-pink-400/8',
      bgGradient: 'bg-gradient-to-br from-pink-400/15 to-pink-400/8',
      accentText: 'text-pink-300',
      ring: 'ring-pink-400',
      hoverBg: 'hover:bg-pink-400/35'
    },
    sunset: {
      text: 'text-orange-500',
      bg: 'bg-orange-500',
      bgLight: 'bg-gradient-to-br from-orange-500/20 to-pink-500/20',
      border: 'border-orange-500/20',
      gradientFrom: 'from-orange-500/15',
      gradientTo: 'to-pink-500/10',
      bgGradient: 'bg-gradient-to-br from-orange-500/15 to-pink-500/10',
      accentText: 'text-orange-400',
      ring: 'ring-orange-500',
      hoverBg: 'hover:bg-orange-500/35'
    },
    ocean: {
      text: 'text-cyan-500',
      bg: 'bg-cyan-500',
      bgLight: 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20',
      border: 'border-cyan-500/20',
      gradientFrom: 'from-cyan-500/15',
      gradientTo: 'to-blue-500/10',
      bgGradient: 'bg-gradient-to-br from-cyan-500/15 to-blue-500/10',
      accentText: 'text-cyan-400',
      ring: 'ring-cyan-500',
      hoverBg: 'hover:bg-cyan-500/35'
    },
    midnight: {
      text: 'text-indigo-600',
      bg: 'bg-indigo-600',
      bgLight: 'bg-indigo-600/25',
      border: 'border-indigo-600/25',
      gradientFrom: 'from-indigo-600/15',
      gradientTo: 'to-indigo-600/8',
      bgGradient: 'bg-gradient-to-br from-indigo-600/15 to-indigo-600/8',
      accentText: 'text-indigo-500',
      ring: 'ring-indigo-600',
      hoverBg: 'hover:bg-indigo-600/35'
    },
    twilight: {
      text: 'text-purple-500',
      bg: 'bg-purple-500',
      bgLight: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
      border: 'border-purple-500/20',
      gradientFrom: 'from-purple-500/15',
      gradientTo: 'to-pink-500/10',
      bgGradient: 'bg-gradient-to-br from-purple-500/15 to-pink-500/10',
      accentText: 'text-purple-400',
      ring: 'ring-purple-500',
      hoverBg: 'hover:bg-purple-500/35'
    },
    dragonFire: {
      text: 'text-red-500',
      bg: 'bg-red-500',
      bgLight: 'bg-gradient-to-br from-red-500/20 to-orange-500/20',
      border: 'border-red-500/20',
      gradientFrom: 'from-red-500/15',
      gradientTo: 'to-orange-500/10',
      bgGradient: 'bg-gradient-to-br from-red-500/15 to-orange-500/10',
      accentText: 'text-red-400',
      ring: 'ring-red-500',
      hoverBg: 'hover:bg-red-500/35'
    },
    mysticPurple: {
      text: 'text-violet-500',
      bg: 'bg-violet-500',
      bgLight: 'bg-gradient-to-br from-violet-500/20 to-indigo-500/20',
      border: 'border-violet-500/20',
      gradientFrom: 'from-violet-500/15',
      gradientTo: 'to-indigo-500/10',
      bgGradient: 'bg-gradient-to-br from-violet-500/15 to-indigo-500/10',
      accentText: 'text-violet-400',
      ring: 'ring-violet-500',
      hoverBg: 'hover:bg-violet-500/35'
    },
    forestMoss: {
      text: 'text-emerald-600',
      bg: 'bg-emerald-600',
      bgLight: 'bg-gradient-to-br from-emerald-600/20 to-green-500/20',
      border: 'border-emerald-600/20',
      gradientFrom: 'from-emerald-600/15',
      gradientTo: 'to-green-500/10',
      bgGradient: 'bg-gradient-to-br from-emerald-600/15 to-green-500/10',
      accentText: 'text-emerald-500',
      ring: 'ring-emerald-600',
      hoverBg: 'hover:bg-emerald-600/35'
    },
    arcticIce: {
      text: 'text-cyan-300',
      bg: 'bg-cyan-300',
      bgLight: 'bg-gradient-to-br from-cyan-300/20 to-blue-300/20',
      border: 'border-cyan-300/20',
      gradientFrom: 'from-cyan-300/15',
      gradientTo: 'to-blue-300/10',
      bgGradient: 'bg-gradient-to-br from-cyan-300/15 to-blue-300/10',
      accentText: 'text-cyan-200',
      ring: 'ring-cyan-300',
      hoverBg: 'hover:bg-cyan-300/35'
    },
    volcanic: {
      text: 'text-orange-600',
      bg: 'bg-orange-600',
      bgLight: 'bg-gradient-to-br from-orange-600/20 to-red-500/20',
      border: 'border-orange-600/20',
      gradientFrom: 'from-orange-600/15',
      gradientTo: 'to-red-500/10',
      bgGradient: 'bg-gradient-to-br from-orange-600/15 to-red-500/10',
      accentText: 'text-orange-500',
      ring: 'ring-orange-600',
      hoverBg: 'hover:bg-orange-600/35'
    }
  };

  // Retorna clases por defecto (azul) si el color no existe
  return colorMap[colorName] || colorMap.blue;
};

// Función adicional para obtener gradientes especiales
export const getSpecialGradient = (colorName: string) => {
  const gradientMap: Record<string, string> = {
    sunset: 'bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500',
    ocean: 'bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500',
    forest: 'bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500',
    twilight: 'bg-gradient-to-br from-purple-500 via-violet-500 to-indigo-500',
    fire: 'bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500',
    ice: 'bg-gradient-to-br from-cyan-300 via-blue-300 to-indigo-300',
    neon: 'bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500',
    galaxy: 'bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600',
    sunrise: 'bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400',
    aurora: 'bg-gradient-to-br from-green-400 via-cyan-400 to-blue-400'
  };

  return gradientMap[colorName] || 'bg-gradient-to-br from-blue-500 to-cyan-500';
};