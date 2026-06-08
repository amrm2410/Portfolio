# Amr Abbas Design Academy

UI/UX learning platform — 5 courses, community, calendar, leaderboard.

## Repo structure

| Folder | Stack | Owner |
|---|---|---|
| `frontend/` | Next.js 14, TypeScript, Tailwind | Amr |
| `backend/` | Spring Boot 3, Java 21, PostgreSQL | Menna |
| `docs/` | OpenAPI specs, architecture notes | Both |

## Frontend setup

```bash
cd frontend
npm install
npm run dev         # http://localhost:3000
```

## Backend setup

```bash
cd backend
docker-compose up -d        # starts Postgres + Redis
./mvnw spring-boot:run      # http://localhost:8080
```

## Branch convention

| Branch | Purpose |
|---|---|
| `main` | Production-ready only, protected |
| `dev` | Integration branch |
| `feat/KAN-XX` | Feature branches (one per Jira task) |
| `fix/KAN-XX` | Bug fix branches |

## Commit message format

```
feat(KAN-28): add Next.js project bootstrap
fix(KAN-35): correct JWT expiry handling
chore(KAN-27): add gitignore and readme
```
