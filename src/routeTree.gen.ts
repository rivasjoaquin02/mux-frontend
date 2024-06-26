/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthLoginImport } from './routes/auth/login'

// Create Virtual Routes

const ShowsLazyImport = createFileRoute('/shows')()
const MusicLazyImport = createFileRoute('/music')()
const MoviesLazyImport = createFileRoute('/movies')()
const BooksLazyImport = createFileRoute('/books')()
const IndexLazyImport = createFileRoute('/')()
const SettingsIndexLazyImport = createFileRoute('/settings/')()
const ProfileIndexLazyImport = createFileRoute('/profile/')()
const DashboardIndexLazyImport = createFileRoute('/dashboard/')()
const DashboardLibrariesLazyImport = createFileRoute('/dashboard/libraries')()

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

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const SettingsIndexLazyRoute = SettingsIndexLazyImport.update({
  path: '/settings/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/settings/index.lazy').then((d) => d.Route),
)

const ProfileIndexLazyRoute = ProfileIndexLazyImport.update({
  path: '/profile/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/profile/index.lazy').then((d) => d.Route))

const DashboardIndexLazyRoute = DashboardIndexLazyImport.update({
  path: '/dashboard/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/dashboard/index.lazy').then((d) => d.Route),
)

const DashboardLibrariesLazyRoute = DashboardLibrariesLazyImport.update({
  path: '/dashboard/libraries',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/dashboard/libraries.lazy').then((d) => d.Route),
)

const AuthLoginRoute = AuthLoginImport.update({
  path: '/auth/login',
  getParentRoute: () => rootRoute,
} as any)

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
    '/auth/login': {
      id: '/auth/login'
      path: '/auth/login'
      fullPath: '/auth/login'
      preLoaderRoute: typeof AuthLoginImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/libraries': {
      id: '/dashboard/libraries'
      path: '/dashboard/libraries'
      fullPath: '/dashboard/libraries'
      preLoaderRoute: typeof DashboardLibrariesLazyImport
      parentRoute: typeof rootRoute
    }
    '/dashboard/': {
      id: '/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/profile/': {
      id: '/profile/'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/settings/': {
      id: '/settings/'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  BooksLazyRoute,
  MoviesLazyRoute,
  MusicLazyRoute,
  ShowsLazyRoute,
  AuthLoginRoute,
  DashboardLibrariesLazyRoute,
  DashboardIndexLazyRoute,
  ProfileIndexLazyRoute,
  SettingsIndexLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/books",
        "/movies",
        "/music",
        "/shows",
        "/auth/login",
        "/dashboard/libraries",
        "/dashboard/",
        "/profile/",
        "/settings/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
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
    },
    "/auth/login": {
      "filePath": "auth/login.tsx"
    },
    "/dashboard/libraries": {
      "filePath": "dashboard/libraries.lazy.tsx"
    },
    "/dashboard/": {
      "filePath": "dashboard/index.lazy.tsx"
    },
    "/profile/": {
      "filePath": "profile/index.lazy.tsx"
    },
    "/settings/": {
      "filePath": "settings/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
