#!/bin/bash

echo "=========================================="
echo "  SIH 2025 Website - Quick Setup Script"
echo "=========================================="
echo

echo "Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to install dependencies"
    exit 1
fi

echo
echo "Updating browser database..."
npm run update-browsers

echo
echo "Building the frontend..."
npm run build
if [ $? -ne 0 ]; then
    echo "ERROR: Failed to build the frontend"
    exit 1
fi

echo
echo "=========================================="
echo "  Setup Complete!"
echo "=========================================="
echo
echo "The website is ready to run!"
echo
echo "To start the development server:"
echo "  npm run dev"
echo
echo "Then open: http://localhost:5000"
echo