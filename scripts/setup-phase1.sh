#!/bin/bash

# Phase 1 Setup Script for Kabootr

set -e

echo "🚀 Setting up Kabootr Phase 1..."

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed. Please install pnpm first:"
    echo "   npm install -g pnpm"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Copy environment file
if [ ! -f apps/web/.env ]; then
    echo "📝 Creating .env file..."
    cp apps/web/.env.example apps/web/.env
    echo "⚠️  Please edit apps/web/.env with your configuration"
fi

# Start infrastructure
echo "🐳 Starting infrastructure (PostgreSQL, Redis, MinIO)..."
cd infra
docker-compose up -d
cd ..

# Generate database schema
echo "🗄️  Generating database schema..."
cd packages/db
pnpm db:generate
cd ../..

echo ""
echo "✅ Phase 1 setup complete!"
echo ""
echo "📋 Next steps:"
echo "   1. Edit apps/web/.env with your configuration"
echo "   2. Run 'pnpm dev' to start the development server"
echo "   3. Visit http://localhost:3000"
echo ""
