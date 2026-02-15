import * as React from "react"
import VinylList from "../components/VinylList"
import VinylForm from "../components/VinylForm"
import type { Vinyl, VinylInput } from "../types/vinyl"

export default function Home() {
  const [items, setItems] = React.useState<Vinyl[]>([])

  function addVinyl(input: VinylInput) {
    const newVinyl: Vinyl = {
      id: crypto.randomUUID(),
      ...input,
    }
    setItems((prev) => [newVinyl, ...prev])
  }

  function removeVinyl(id: string) {
    const confirmed = window.confirm(
      "Are you sure, you want to delete this vinyl?"
    )
  
    if (!confirmed) return
  
    setItems((prev) => prev.filter((v) => v.id !== id))
  }
  
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl p-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-background p-6">
          <h2 className="text-lg font-semibold">Add vinyls</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Fill in the fields and add to your list.
          </p>

          <VinylForm onSubmit={addVinyl} />
        </div>

          <div className="rounded-xl border border-border bg-background p-6">
            <VinylList items={items} onRemove={removeVinyl} />        
          </div>
      </div>
    </div>
  )
}