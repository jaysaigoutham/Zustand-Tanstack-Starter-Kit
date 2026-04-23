# Zustand React Starter Kit

A small learning-oriented React app that demonstrates:

- Zustand global state management
- Notes CRUD with a local JSON server backend
- TanStack Query integration for server-state handling
- Basic Vitest store tests

## Tech Stack

- React 19
- Vite 8
- Zustand 5
- @tanstack/react-query 5
- json-server
- Vitest + Testing Library

## Project Structure

```text
src/
	Components/
		Counter/               # Counter UI
		Notes/                 # Notes feature UI
		TanstackNotes/         # Notes UI with TanStack Query
		Contexts/              # Context example provider
	Hooks/
		useTanstackNotes.js    # React Query hook for notes
	Requests/
		requests.js            # Fetch helpers used by React Query
	Services/
		notes.js               # Fetch helpers used by Zustand notes store
	Store/
		CounterStore.jsx       # Zustand counter store
		NoteStore.jsx          # Zustand notes store + actions
		*.test.js              # Store tests
	main.jsx                 # App entry and QueryClient setup
db.json                    # json-server data source
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Start the API server

```bash
npm run server
```

This starts json-server on `http://localhost:3001` and exposes `http://localhost:3001/notes`.

### 3) Start the React app

```bash
npm run dev
```

Open the URL shown by Vite (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run server` - Run json-server on port 3001

## Demo Modes

The active demo is currently rendered from `src/main.jsx`.

Available components:

- `CounterApp` - Zustand counter example
- `Notes` - Zustand notes example with backend
- `TanstackApp` - Notes example powered by React Query

To switch demos, update the component rendered inside `QueryClientProvider` in `src/main.jsx`.

## Notes API

The app expects note objects shaped like:

```json
{
	"id": 1,
	"content": "Example note",
	"important": false
}
```

Base endpoint used by the app:

- `GET /notes`
- `POST /notes`
- `PUT /notes/:id`

## Testing

Store test files are present in `src/Store`, including:

- `CounterStore.test.js`
- `CounterStoreUpdated.test.js`

If you want a dedicated script, add this to `package.json`:

```json
"test": "vitest"
```

Then run:

```bash
npm run test
```

## Learning Focus

This repo is intentionally simple and ideal for practicing:

- Selecting Zustand state slices with custom hooks
- Separating UI, store, and request/service layers
- Comparing client-state (Zustand) vs server-state (TanStack Query)
