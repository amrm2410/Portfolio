# Project: Amr Portfolio

## Structure

- `frontend/` — Next.js 15 app (TypeScript, Tailwind v4)
- `backend/amr-uiux/` — Spring Boot 4 REST API (Java 21, Maven)
- `docs/` — project documentation

## Running the App

### Backend (Spring Boot)

```powershell
cd backend/amr-uiux
.\mvnw.cmd spring-boot:run
```

Runs on `http://localhost:8080`. Requires Java 21.

### Frontend (Next.js)

```powershell
cd frontend
npm run dev
```

Runs on `http://localhost:3001`.

## Build

```powershell
# Backend
cd backend/amr-uiux
.\mvnw.cmd clean package

# Frontend
cd frontend
npm run build
```
