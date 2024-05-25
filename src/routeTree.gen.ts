/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardImport } from './routes/dashboard'

// Create Virtual Routes

const ShowsLazyImport = createFileRoute('/shows')()
const MusicLazyImport = createFileRoute('/music')()
const MoviesLazyImport = createFileRoute('/movies')()
const BooksLazyImport = createFileRoute('/books')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const ShowsLazyRoute = ShowsLazyImport.update({
  path: '/shows',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/shows.lazy').then((d) => d.Route))

const MusicLazyRoute = MusicLazyImport.update({
  path: '/music',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/music.lazy').then((d) => d.Route))

const MoviesLazyRoute = MoviesLazyImport.update({
  path: '/movies',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/movies.lazy').then((d) => d.Route))

const BooksLazyRoute = BooksLazyImport.update({
  path: '/books',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/books.lazy').then((d) => d.Route))

const DashboardRoute = DashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/books': {
      id: '/books'
      path: '/books'
      fullPath: '/books'
      preLoaderRoute: typeof BooksLazyImport
      parentRoute: typeof rootRoute
    }
    '/movies': {
      id: '/movies'
      path: '/movies'
      fullPath: '/movies'
      preLoaderRoute: typeof MoviesLazyImport
      parentRoute: typeof rootRoute
    }
    '/music': {
      id: '/music'
      path: '/music'
      fullPath: '/music'
      preLoaderRoute: typeof MusicLazyImport
      parentRoute: typeof rootRoute
    }
    '/shows': {
      id: '/shows'
      path: '/shows'
      fullPath: '/shows'
      preLoaderRoute: typeof ShowsLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  DashboardRoute,
  BooksLazyRoute,
  MoviesLazyRoute,
  MusicLazyRoute,
  ShowsLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/dashboard",
        "/books",
        "/movies",
        "/music",
        "/shows"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/dashboard": {
      "filePath": "dashboard.tsx"
    },
    "/books": {
      "filePath": "books.lazy.tsx"
    },
    "/movies": {
      "filePath": "movies.lazy.tsx"
    },
    "/music": {
      "filePath": "music.lazy.tsx"
    },
    "/shows": {
      "filePath": "shows.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
