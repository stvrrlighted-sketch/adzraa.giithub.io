function updateClock() {
  const el = document.getElementById('datetime');
  if (!el) return;

  const now = new Date();
  const formatted = now.toLocaleString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  el.textContent = formatted;
  el.setAttribute('datetime', now.toISOString());
}

updateClock();
setInterval(updateClock, 1000);

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const tableToggle = document.getElementById('tableToggle');
const tableBody = document.getElementById('tableBody');

if (tableToggle && tableBody) {
  tableToggle.addEventListener('click', () => {
    const isExpanded = tableToggle.getAttribute('aria-expanded') === 'true';
    tableToggle.setAttribute('aria-expanded', String(!isExpanded));
    tableBody.style.display = isExpanded ? 'none' : 'table-row-group';
    tableToggle.querySelector('.table-toggle-label').textContent = isExpanded ? 'Tampilkan Tabel' : 'Sembunyikan Tabel';
  });
}

const lilyContainer = document.getElementById('lilyRain');

function spawnLilyPetal() {
  if (!lilyContainer) return;

  const petal = document.createElement('div');
  petal.className = 'lily-petal';

  const startX = Math.random() * 100;
  const size = 8 + Math.random() * 8;
  const duration = 6 + Math.random() * 5;

  petal.style.left = startX + '%';
  petal.style.width = size + 'px';
  petal.style.height = (size * 1.3) + 'px';
  petal.style.animationDuration = duration + 's';

  lilyContainer.appendChild(petal);
  petal.addEventListener('animationend', () => petal.remove());
}

setInterval(spawnLilyPetal, 450);
for (let i = 0; i < 6; i++) {
  setTimeout(spawnLilyPetal, i * 250);
}
