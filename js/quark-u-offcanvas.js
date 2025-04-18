export default function initOffcanvas() {
  console.log('initOffcanvas');
  const cssPrefix = 'q-';
  const dataPrefix = 'q-offcanvas';
  const panelSelector = `.${cssPrefix}offcanvas`;
  const backdropClass = `${cssPrefix}offcanvas-backdrop`;
  const isOpenClass = 'is-open';

  const openButtons = document.querySelectorAll(`[data-${dataPrefix}-target]`);
  const closeButtons = document.querySelectorAll(`[data-${dataPrefix}-close]`);
  const backdrops = document.querySelectorAll(`.${backdropClass}`);

  console.log('offcanvas', openButtons, closeButtons, backdrops);
  openButtons.forEach(btn => {
    const target = btn.getAttribute(`data-${dataPrefix}-target`);
    const panel = document.querySelector(target);
    btn.addEventListener('click', () => {
      panel?.classList.add(isOpenClass);
      backdrops.forEach(b => b.classList.add(isOpenClass));
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.closest(panelSelector);
      panel?.classList.remove(isOpenClass);
      backdrops.forEach(b => b.classList.remove(isOpenClass));
    });
  });

  backdrops.forEach(b => {
    b.addEventListener('click', () => {
      document.querySelectorAll(`${panelSelector}.${isOpenClass}`)
        .forEach(p => p.classList.remove(isOpenClass));
      backdrops.forEach(bd => bd.classList.remove(isOpenClass));
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll(`${panelSelector}.${isOpenClass}`)
        .forEach(p => p.classList.remove(isOpenClass));
      backdrops.forEach(bd => bd.classList.remove(isOpenClass));
    }
  });
}
