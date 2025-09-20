# 🧪 React Lab: Kanto Pokédex (151)

## 🔗 How to Start (Fork & Clone with SSH)

1. Go to the GitHub repo link your TA shared.
2. Click the **Fork** button (top right) to copy it to your own GitHub account.
3. On your fork’s page, click the green **Code** button → choose **SSH**.
4. Copy the SSH link (it looks like `git@github.com:<your-username>/pokedex-lab-starter.git`).
5. In your terminal, clone your fork:

   ```bash
   git clone git@github.com:<your-username>/pokedex-lab-starter.git
   cd pokedex-lab-starter
   ```
6. Follow the setup steps below.

> ⚠️ If you’ve never set up SSH with GitHub, see [GitHub’s docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) to add your SSH key first.

---

## 🎯 Goal

Render all **151 Kanto Pokémon** in a responsive grid **after pressing a button**. You’ll complete the TODOs in two files:

* `src/components/Pokedex.jsx` (main container & data fetching)
* `src/components/PokemonCard.jsx` (child card, props)

---

## 0) Prereqs & Setup (Skip to part C, go back up to the top if you have any problems)

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

### B. Install dependencies

Inside the project:

```bash
npm install
```

> If you see errors about Node version, go back to step **A**.

### C. Run the dev server

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

Follow the inline comments labeled **TODO Step 1…13** to complete the logic and rendering.

Key ideas you’ll practice:

* `useState` for UI state
* `useEffect` with a **dependency array** (`[started]`) so the fetch triggers **after** the button press
* Mapping fetched data into `{ id, name, sprite }`
* Conditional rendering for **loading** and **error**

### `src/components/PokemonCard.jsx` (complete the TODO)

This child component receives **props** and renders a simple card with the sprite as the **background** and the Pokémon’s **id** and **name**. Fill in the two “hmmm…” lines with the correct values from `props`. (Hint in the file shows how to access `props.sprite`.)

---

## 2) Step-by-Step Tasks (student checklist)

1. **Open `src/components/Pokedex.jsx`**

   * Implement **TODO Step 2a–2d**: define all the states (`started`, `pokemon`, `loading`, `error`).
   * In the `useEffect`, implement **Step 3** early-return when not started.
   * Inside `loadKanto151()`:

     * **Step 4**: set `error=""`, `loading=true`, `pokemon=[]`.
     * **Step 5**: `fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")`, then `await res.json()`.
     * **Next**: map results to `{ id, name, sprite }`.
     * **Step 6**: `setPokemon(list)`; **Step 7–8**: handle error/loading.
   * **Step 9**: call `loadKanto151()`; **Step 10**: dependency array `[started]`.
   * **Step 11–12**: wire the button and show conditional text (Loaded vs Load).
   * **Step 13**: map `pokemon` to `<PokemonCard … />` with `key`, `id`, `name`, and `sprite`.

2. **Open `src/components/PokemonCard.jsx`**

   * Replace the “hmmm…” placeholders with the real values from `props`:

     * Top line → **padded id** like `#001`
     * Second line → Pokémon **name** (CSS capitalize is already provided).
   * Confirm background is using `props.sprite`.

3. **Run & Test**

   * `npm run dev`
   * Click **Load All 151 Pokémon** → verify the grid fills with Pokémon.

---

## 3) Common Errors & Fixes

* **`vite: command not found`** → Run `npm install` again, verify Node version.
* **`Error: Failed to load Pokémon`** → Try again; API may have rate-limited.
* **Blank page / Red screen** → Check console for typos (e.g., `sprtie` instead of `sprite`).

---

## 4) "You did it!" Checklist

* [ ] Clicking the button loads **151 Pokémon** into the grid
* [ ] Each card shows **#id** (3-digit padded) and **name**
* [ ] No extra console errors
* [ ] Code compiles with `npm run dev`

---

## 5) Stretch Ideas (optional)

* Add a **Reset** button.
* Show a **count badge** like “Showing 151”.
* Style the cards with colors or type badges.

---

## 6) Reflection Questions

* Why does `useEffect` depend on `[started]` instead of `[]`?
* How do we derive the Pokémon ID from the API data?
* What are the trade-offs of using a sprite as a **background image** vs an `<img>` tag?

---

Do you want me to also **add a GitHub Classroom version** (so they don’t even have to manually fork) in case you want auto-submission/grading?
