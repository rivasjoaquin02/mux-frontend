import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/movies')({
  component: () => <div>Hello /media/movies!</div>
})