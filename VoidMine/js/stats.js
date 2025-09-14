// Key + versioning so you can migrate later
const SAVE_KEY = 'voidmine:stats:v1';

// Reasonable default stats shape for your game
const DEFAULT_STATS = {
  version: 1,
  money: 0,
  xp: 0,
  level: 1,
  depth: 0,                 // current depth (signed: +surface, -underground)
  inventoryKg: 0,
  inventoryMaxKg: 100,
  tools: {
    pickaxe: { tier: 'Wood', durability: 150 },
    axe:     { tier: 'Wood',  durability: 30  },
    drill:   { body: null, bit: null, durability: 0 }
  },
  // resources owned, by id/slug → kg
  inventory: {},            // e.g. { "stone": 42.5, "copper": 3.0 }
  // timestamps (ms) for systems that need time math
  lastSeen: Date.now(),
  // per-depth regen timers
  layerTimers: {
    // "-500": { readyAt: 0 }, // example: key is depth as string
  },
  // settings / UI
  settings: { sfx: true, music: true }
};

export function loadStats() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return structuredClone(DEFAULT_STATS);
    const data = JSON.parse(raw);
    return migrateIfNeeded(data);
  } catch {
    return structuredClone(DEFAULT_STATS);
  }
}

export function saveStats(state) {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn('Save failed:', e);
  }
}

// Example migration hook if you bump versions later
function migrateIfNeeded(data) {
  if (!data.version) data.version = 1;
  // if (data.version < 2) { /* ...update shape... */ data.version = 2; }
  return data;
}

// Convenience: safe update + save
export function updateStats(mutator) {
  const s = loadStats();
  mutator(s);
  saveStats(s);
  return s;
}