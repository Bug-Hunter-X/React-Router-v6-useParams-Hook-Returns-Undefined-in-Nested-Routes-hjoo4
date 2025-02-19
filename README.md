# React Router v6 useParams Issue in Nested Routes

This repository demonstrates a common problem encountered when using the `useParams` hook in React Router v6 within deeply nested routes.  The issue occurs when parent routes don't include the same parameters as their children.  This leads to undefined parameter values in the child component.

## Problem
The `NestedRoutesBug.js` file showcases the problem.  Notice how the nested `ItemDetails` component receives `undefined` for `itemId` when accessing `useParams()` because the parent route (`/items`) does not define `:itemId` in its path. This directly results in the application throwing an error.

## Solution
The `NestedRoutesSolution.js` file provides a solution.  It addresses the issue by implementing proper null checks before accessing the `itemId` parameter from `useParams()`, preventing runtime errors.  Additional error handling or fallback mechanisms could further enhance the robustness of the solution.

## How to reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Navigate to `/items/123` (or a similar path).  Observe the behavior in both the buggy and solution examples.