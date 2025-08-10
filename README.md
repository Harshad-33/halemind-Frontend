# Halemind Frontend (Starter)

This is a starter React + Vite + Tailwind frontend for a Halemind-like site.
It is intended to run locally and connect to a Spring Boot backend later.

## Quick start

1. Install Node.js (v18+ recommended).
2. In project root:
```bash
npm install
npm run dev
```
3. Open the site at http://localhost:5173

## Backend

- The project expects API endpoints under `/api`:
  - `GET /api/files` - list downloads
  - `POST /api/contact` - submit contact form
  - `GET /api/admin/contacts` - admin contacts
- Vite dev server proxies `/api` to `http://localhost:8080` by default.

## Notes

- This is a frontend-only starter. Backend (Spring Boot + MySQL) should be created separately.
- The UI is intentionally simple and easy to extend.
