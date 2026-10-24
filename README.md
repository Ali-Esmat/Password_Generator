# 🔐 Password Generator

A sleek, responsive, and secure **single-page password generator application** built using vanilla web technologies. It features dynamic length validation, customizable character pools (numbers and symbols) via interactive sliding toggle switches, custom cursor state management, and a highly polished "Click-to-Copy" utility that prevents browser highlights on spam clicks.

---

## ✨ Features

* **Dual Password Generation:** Instantly outputs two unique cryptographic strings matching your specified constraints.
* **Smart Input Validation:** Protects against browser crashes by enforcing an explicit length ceiling (≤ 64 characters), blocking negative integers, and filtering out empty fields or spaces.
* **Interactive Toggles:** Custom-styled sliding UI components using pure CSS pseudo-elements (`::before`) to smoothly filter numbers and symbols out of the generation algorithm.
* **Protected Clipboard Routing:** Uses modern `navigator.clipboard` APIs tied directly to background HTML `data-password` attributes, safeguarding your generation workspace from layout hover texts.

---

## 🛠️ Built With

* **HTML5:** Semantic element structures and custom data metrics (`data-*`).
* **CSS3:** Modern Flexbox positioning, CSS state pseudo-classes (`:hover`, `:not`, `:checked`), and virtual elements (`::before`, `::after`).
* **Vanilla JavaScript:** Clean ECMAScript standard loops, math random indices, and micro-task promises (`.then()`, `.catch()`).

---

## 📁 Project Structure

```text
password-generator/
│
├── index.html          # Structural UI layout and inputs
├── style.css           # Theme styling, layout, and toggles
└── script.js           # Password algorithms and clipboard event routing
```

---

## 🚀 Quick Setup & Usage

1. **Clone or download** the project files into a single directory.
2. Open **`index.html`** directly inside any modern standard browser (Chrome, Edge, Firefox, Safari).
3. **How to run a pass:**
   * Enter your preferred password length into the input element (e.g., `12`).
   * Toggle **"Include Symbols"** or **"Include Numbers"** according to your layout preferences.
   * Click **Generate Passwords**.
   * Move your cursor over either result box to see the **"Click to Copy 📋"** overlay text.
   * Click the box once to instantly save it to your clipboard. The UI will temporarily shift to **"Copied! ✅"** for 1.5 seconds while freezing out other hover states.

---

## ⚙️ Core Technical Highlights

### 1. Zero-Footprint Pseudo Anchors
Instead of clutched layout layers, the hover mechanics lock securely inside the element bounds through relative positioning rules:
```css
.result-el {
    position: relative;
    box-sizing: border-box;
}
```

### 2. State-Driven Element Routing
Hover animations and pointer indications completely hide until data is injected by the core JS engine, preventing ghost interactions on initial load:
```css
.result-el[data-password],
.result-el.copied {
    cursor: pointer;
}
```

### 3. Case-Insensitive Class Switching
State monitoring flags are systematically controlled across callbacks using native, strict-cased JavaScript parameters:
```javascript
targetDiv.classList.add('copied');
setTimeout(() => {
    targetDiv.classList.remove('copied');
}, 1500);
```

