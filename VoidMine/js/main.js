function setXP(level, current, target){
  const p = Math.max(0, Math.min(1, target > 0 ? current/target : 0));
  const bar = document.getElementById('xpBar');
  const fill = document.getElementById('xpFill');
  const lvl  = document.getElementById('xpLevel');
  const nowA = document.getElementById('xpNowOuter');
  const nowB = document.getElementById('xpNowInner');
  const tgtA = document.getElementById('xpTarget');
  const tgtB = document.getElementById('xpTargetInverse');

  bar.style.setProperty('--p', p);
  fill.style.width = (p*100) + '%';

  lvl.textContent = level;
  nowA.textContent = String(current);
  nowB.textContent = String(current);
  tgtA.textContent = String(target);
  tgtB.textContent = String(target);
}

// Example call so you see it work:
setXP(3, 45, 100);