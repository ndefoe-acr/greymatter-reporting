# QuickStart Guide

Get the ReliaQuest MDR Analytics Dashboard up and running in minutes.

## Prerequisites

- **Node.js** 18+ and npm
- **PostgreSQL** 14+ (installed locally)
- **Git**

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/jafoca/greymatter-reporting.git
cd greymatter-reporting
```

### 2. Start PostgreSQL

Ensure PostgreSQL is running:

```bash
# macOS (Homebrew)
brew services start postgresql@14

# Linux (systemd)
sudo systemctl start postgresql

# Verify it's running
psql --version
```

### 3. Create Database

```bash
createdb rq_analytics
```

### 4. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Configure environment (update if needed)
cp .env.example .env  # If .env doesn't exist, create it with:
# DATABASE_URL="postgresql://YOUR_USERNAME@localhost:5432/rq_analytics"
# PORT=3000
# RQ_API_URL="https://greymatter.myreliaquest.com/graphql"
# RQ_API_KEY="your-api-key-here"
# SYNC_INTERVAL_MINUTES=15

# Run database migrations
npx prisma migrate deploy

# Generate Prisma client
npx prisma generate

# Run tests (optional)
npm test

# Start backend server
npm run dev
```

The backend will start on **http://localhost:3000**

### 5. Frontend Setup

Open a new terminal:

```bash
cd frontend

# Install dependencies
npm install

# Run tests (optional)
npm test

# Start frontend dev server
npm run dev
```

The frontend will start on **http://localhost:5173**

### 6. Access the Application

Open your browser and navigate to:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000/api/stats/kpi

## Quick Commands Reference

### Backend
```bash
cd backend
npm run dev          # Start development server
npm test            # Run tests
npx prisma studio   # Open Prisma Studio (database GUI)
npx prisma migrate dev --name <name>  # Create new migration
```

### Frontend
```bash
cd frontend
npm run dev         # Start development server
npm test           # Run tests
npm run build      # Build for production
npm run preview    # Preview production build
```

## Troubleshooting

### PostgreSQL Connection Issues

**Error**: `Can't reach database server at localhost:5432`

**Solution**:
```bash
# Check if PostgreSQL is running
brew services list  # macOS
sudo systemctl status postgresql  # Linux

# Start PostgreSQL
brew services start postgresql@14  # macOS
sudo systemctl start postgresql  # Linux
```

### Database Authentication Issues

**Error**: `User was denied access on the database`

**Solution**: Update `backend/.env` with your PostgreSQL username:
```bash
DATABASE_URL="postgresql://YOUR_USERNAME@localhost:5432/rq_analytics"
```

Replace `YOUR_USERNAME` with your system username (run `whoami` to find it).

### Port Already in Use

**Error**: `Port 3000 is already in use`

**Solution**:
```bash
# Find and kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or change the port in backend/.env
PORT=3001
```

### Missing Dependencies

**Error**: `Cannot find module...`

**Solution**:
```bash
# Backend
cd backend && rm -rf node_modules package-lock.json && npm install

# Frontend
cd frontend && rm -rf node_modules package-lock.json && npm install
```

## Environment Variables

### Backend (.env)

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user@localhost:5432/rq_analytics` |
| `PORT` | Backend server port | `3000` |
| `RQ_API_URL` | ReliaQuest API endpoint | `https://greymatter.myreliaquest.com/graphql` |
| `RQ_API_KEY` | ReliaQuest API key | Required |
| `SYNC_INTERVAL_MINUTES` | Sync frequency | `15` |

## Project Structure

```
greymatter-reporting/
├── backend/              # Node.js/Express API
│   ├── src/
│   │   ├── services/    # Business logic
│   │   ├── worker/      # Background sync worker
│   │   ├── routes/      # API routes
│   │   └── app.ts       # Express app
│   ├── tests/           # Vitest tests
│   └── prisma/          # Database schema & migrations
└── frontend/            # React/Vite app
    ├── src/
    │   ├── components/  # React components
    │   ├── services/    # API client
    │   └── utils/       # Utilities (PDF export)
    └── tests/           # Component tests
```

## Next Steps

- **Configure API Key**: Update `RQ_API_KEY` in `backend/.env` with your actual ReliaQuest API key
- **Customize Metrics**: Modify `backend/src/services/statsService.ts` to add more metrics
- **Add Charts**: Extend the dashboard with Recharts visualizations
- **Deploy**: See deployment guides for production setup

## Support

For issues or questions:
- Check the [walkthrough documentation](docs/walkthrough.md)
- Review the [implementation plan](docs/plans/2025-11-20-initial-app-design.md)
- Open an issue on GitHub

---

**Happy coding!** 🚀
