# Milkshake Admin Portal

This is a React-based Single Page Application (SPA) designed to manage milkshake inventory. 

## Features
* **Client-Side Routing:** Navigate between Home, Shop, and Admin pages without reloading.
* **CRUD Operations:** Read, Create, Update, and Delete milkshake data.
* **Custom Hooks:** Uses a custom `useMilkshakes` hook for data fetching.
* **Simulated Backend:** Powered by `json-server`.

## Setup Instructions
1. Run `npm install` to download dependencies.
2. Run `npm run dev` to start the React frontend.
3. Open a second terminal and run `npx json-server --watch db.json --port 3001` to start the database.