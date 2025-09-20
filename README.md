# 🧪 React Lab: Kanto Pokédex (151)

## Goal

Render all **151 Kanto Pokémon** in a responsive grid **after pressing a button**. You’ll complete the TODOs in two files:

* `src/components/Pokedex.jsx` (main container & data fetching)&#x20;
* `src/components/PokemonCard.jsx` (child card, props)&#x20;

---

## 0) Prereqs & Setup (everyone does this)

### A. Check Node.js version

Vite (current) **requires Node 20.19+ or 22.12+**.
Run:

```bash
node -v
```

* If it prints something like `v18.x.x`: you must upgrade.

**Fastest fix with nvm (recommended):**

```bash
# install nvm if you don’t have it
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# restart your terminal, then:
nvm install 22
nvm use 22
node -v   # should be >= v22.12.0
```

> Tip: To switch back later, run `nvm use 18` (or whatever you had).

### B. Unzip the starter

1. Download and unzip the file your TA provided.
2. `cd` into the project folder in your terminal.

### C. Install dependencies

Inside the project:

```bash
npm install
```

> If you see errors about Node version, go back to step **A**.

### D. Run the dev server

```bash
npm run dev
```

You should see a local URL (e.g., `http://localhost:5173`). Open it in your browser.

**If you see `vite: command not found` in the script:**

* You ran `npm run dev` before `npm install`, or your Node version is too old to install Vite correctly.
* Fix: re-run `npm install`, verify Node version (step **A**), then `npm run dev`.

---

## 1) What you’ll build

You’ll complete TODOs so that:

* A button appears → when clicked, it fetches the first 151 Pokémon and renders them in a grid.
* Each card uses the **sprite as the background** and shows the Pokémon’s **#id** and **name**.

You’ll edit these files only:

### `src/components/Pokedex.jsx` (complete the TODOs)

This file sets up:

* State for **started**, **pokemon**, **loading**, **error**
* A `useEffect` that fetches **once** after you press the button
* Renders a button, states, and the grid of `PokemonCard`s

Follow the inline comments labeled **TODO Step 1…13** to complete the logic and rendering.&#x20;

Key ideas you’ll practice:

* `useState` for UI state
* `useEffect` with a **dependency array** (`[started]`) so the fetch triggers **after** the button press (be ready to explain “why only when `started` changes?” in discussion)
* Mapping fetched data into `{ id, name, sprite }`
* Conditional rendering for **loading** and **error**

### `src/components/PokemonCard.jsx` (complete the TODO)

This child component receives **props** and renders a simple card with the sprite as the **background** and the Pokémon’s **id** and **name**. Fill in the two “hmmm…” lines with the correct values from `props`. (Hint in the file shows how to access `props.sprite`.)&#x20;

---

## 2) Step-by-Step Tasks (student checklist)

1. **Open `src/components/Pokedex.jsx`**

   * Implement **TODO Step 2a–2d**: define all the states (`started`, `pokemon`, `loading`, `error`).&#x20;
   * In the `useEffect`, implement **Step 3** early-return when not started.&#x20;
   * Inside `loadKanto151()`:

     * **Step 4**: set `error=""`, `loading=true`, `pokemon=[]`.&#x20;
     * **Step 5**: `fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")`, then `await res.json()`. (You can assume 200 OK for this lab; a robust version would check `res.ok`.)&#x20;
     * **Next**: map results to `{ id, name, sprite }`. The file shows the URL trick to derive `id` from `p.url`, and to build the sprite URL. Save into `list`.&#x20;
     * **Step 6**: `setPokemon(list)`; **Step 7–8**: set error if needed and stop loading in `finally`.&#x20;
   * **Step 9**: call `loadKanto151()`; **Step 10**: dependency array `[started]`.&#x20;
   * **Step 11–12**: wire the button `onClick={() => setStarted(true)}` and show button text conditionally (Loaded vs Load). Show loading & error messages.&#x20;
   * **Step 13**: map `pokemon` to `<PokemonCard … />` with `key`, `id`, `name`, and `sprite` props.&#x20;

2. **Open `src/components/PokemonCard.jsx`**

   * Replace the “hmmm…” placeholders with the real values from `props`:

     * Top line should render the **padded id** like `#001` (you can use `String(props.id).padStart(3, "0")`)
     * Second line should render the **capitalized name**; a simple way is CSS `textTransform: "capitalize"` (already provided).
   * Confirm background is using `props.sprite` (already scaffolded).&#x20;

3. **Run & Test**

   * `npm run dev`
   * Click **Load All 151 Pokémon** → verify the grid fills with Pokémon.

---

## 3) Common Errors & Quick Fixes

* **`vite: command not found`** after `npm run dev`

  * You probably skipped `npm install`, or your Node version prevented Vite from installing.
  * Fix: run `node -v` (must be 20.19+ or 22.12+), then `npm install`, then `npm run dev`.

* **`Error: Failed to load Pokémon` shows up**

  * Network hiccup or rate-limit. Just click the button again, or refresh the page and retry.

* **Blank page / Red screen**

  * Check the browser devtools **Console** for the first error line.
  * Typical mistakes: a missing prop name (e.g., `sprite` spelled `sprtie`), forgetting to return JSX, or not exporting default components.

---

## 4) "You did it!" Checklist

* [ ] Clicking the button loads **151 Pokémon** into the grid
* [ ] Each card shows **#id** (3-digit padded) and **name**
* [ ] No extra console errors
* [ ] Code compiles with `npm run dev`

---

## 5) Stretch Ideas (optional)

* Add a **“Reset”** button to clear the grid and allow re-loading.
* Show a **count badge**: “Showing 151”.
* Make cards focusable/accessible (keyboard tab outlines, `aria-label` including name/id).

---

## 6) Reflection Questions (for discussion)

* Why does `useEffect` depend on `[started]` instead of `[]`? What would happen if it were `[]`?&#x20;
* Where do we **derive** the Pokémon ID from, and why is that efficient?&#x20;
* What are the trade-offs of using the sprite **as a background image** vs an `<img>` tag?&#x20;

---
