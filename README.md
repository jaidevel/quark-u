# { quark-u }

**Smaller. Faster. Fundamental utilities for modern web development.**

`quark-u` is a lightweight SCSS and JavaScript utility framework, built for projects that demand performance, full control, and flexibility — without the overhead of larger frameworks.

- Modular SCSS with configurable component loading.
- Minimal vanilla JS components (modal, offcanvas) with ESM and IIFE support.
- Clean prefixed utility classes (`q-`) to avoid collisions.
- Optimized build scripts for SCSS, JS, and test environments.
- Easy to customize, extend, and integrate into any project.

---

## Getting Started

**Installation:**

> (Coming soon to npm)  
> Until then, clone this repo and build manually.

```bash
git clone https://github.com/your-org/quark-u.git
cd quark-u
npm install
npm run build:all
```

**Usage:**

1. Link the built `dist/quark-u.css` and `dist/quark-u.js` into your project.
2. Initialize the framework:

```html
<script src="dist/quark-u.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', () => {
    if (window.QuarkU?.default) {
      window.QuarkU.default();
    }
  });
</script>
```

Or, if using ES modules:

```javascript
import initQuarkU from 'quark-u';

initQuarkU();
```

---

## SCSS Configuration

You can customize which components are included by overriding settings during import:

```scss
@use "quark-u" with (
  $quark-u-modules: (
    "components/modal": true,
    "components/offcanvas": false
  )
);
```

✅ Only the enabled components will output CSS.  
✅ Keeps final CSS size minimal.

---

## JavaScript Structure

- **IIFE version:** (`dist/quark-u.js`)  
  Loadable directly in browsers.
- **ESM version:** (`dist/quark-u.module.js`)  
  Importable in modern build systems.

Both versions include lightweight vanilla JS components for modal dialogs and offcanvas drawers.

---

## Development Workflow

Available NPM scripts:

| Script | Action |
|:---|:---|
| `npm run build:scss` | Build quark-u SCSS only |
| `npm run build:js` | Build quark-u JS (IIFE + ESM) and copy for docs and test-app |
| `npm run build:all` | Build full quark-u (SCSS + JS) |
| `npm run build:test:css` | Build test-app SCSS only |
| `npm run build:test-js` | Build and bundle test-app JS only |
| `npm run build:test` | Build full test-app (SCSS + JS) |
| `npm run serve:docs` | Serve `/docs/` folder locally |
| `npm run serve:test` | Serve `/test-app/` folder locally |

✅ Smooth local development.  
✅ Real-world testing with `test-app/` structure.

---

## Philosophy

**quark-u** focuses on providing only the essential building blocks you really need — nothing more.

It favors:
- Simplicity over magic.
- Control over convention.
- Modularity over monolith.

---

> Build bigger things with smaller foundations.

---

# 📋 TL;DR

**quark-u** = *tiny foundation, massive possibilities.*
