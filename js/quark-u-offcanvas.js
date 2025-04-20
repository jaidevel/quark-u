// quark-u-offcanvas.js
export default function initOffcanvas() {
  const DATA = {
    panel: 'q-offcanvas',
    target: 'q-offcanvas-target',
    close: 'q-offcanvas-close'
  };
  const OPEN_CLASS = 'is-open';

  // Backdrop singleton
  const backdrop = {
    el: null,
    create() {
      if (this.el) return;
      this.el = document.createElement('div');
      this.el.className = 'q-offcanvas-backdrop';
      document.body.appendChild(this.el);
      this.el.addEventListener('click', closeActive);
    },
    show() {
      this.create();
      requestAnimationFrame(() =>
        this.el.classList.add(OPEN_CLASS)
      );
      document.body.classList.add('q-offcanvas-open'); // for body‑lock if desired
    },
    hide() {
      if (!this.el) return;
      this.el.classList.remove(OPEN_CLASS);
      document.body.classList.remove('q-offcanvas-open');
    }
  };

  // Track current open panel
  let activePanel = null;
  function closeActive() {
    if (!activePanel) return;
    activePanel.classList.remove(OPEN_CLASS);
    backdrop.hide();
    activePanel = null;
  }

  function openPanel(id) {
    closeActive();
    const panel = document.querySelector(`[data-${DATA.panel}="${id}"]`);
    if (!panel) return;
    panel.classList.add(OPEN_CLASS);
    activePanel = panel;
    backdrop.show();
  }

  // Bind open buttons
  document.querySelectorAll(`[data-${DATA.target}]`)
    .forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute(`data-${DATA.target}`);
        openPanel(id);
      });
    });

  // Bind close buttons inside panels
  document.querySelectorAll(`[data-${DATA.close}]`)
    .forEach(btn => {
      btn.addEventListener('click', closeActive);
    });

  // ESC key closes active
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeActive();
  });
}
