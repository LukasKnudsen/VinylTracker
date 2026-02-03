import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">404</h1>
      <Link to="/" className="underline">
        Go home
      </Link>
    </div>
  )
}