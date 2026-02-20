import * as React from "react"
import type { VinylInput } from "../types/vinyl"
import { Button } from "./ui/button"

type Props = {
    onSubmit: (vinyl: VinylInput) => void
}

export default function VinylForm({ onSubmit }: Props) {
    const [artist, setArtist] = React.useState("")
    const [title, setTitle] = React.useState("")
    const [year, setYear] = React.useState<string>("")
    const [genre, setGenre] = React.useState("")
  
    function handleSubmit(e: React.FormEvent) {
      e.preventDefault()
  
      const trimmedArtist = artist.trim()
      const trimmedTitle = title.trim()
  
      if (!trimmedArtist || !trimmedTitle) return
  
      const yearNumber =
        year.trim() === "" ? undefined : Number.parseInt(year, 10)
  
      onSubmit({
        artist: trimmedArtist,
        title: trimmedTitle,
        year: Number.isFinite(yearNumber) ? yearNumber : undefined,
        genre: genre.trim() === "" ? undefined : genre.trim(),
      })
  
      // reset that shit
      setArtist("")
      setTitle("")
      setYear("")
      setGenre("")
    }

    return (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Artist *</label>
            <input
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              placeholder="E.g. Radiohead"
            />
          </div>
    
          <div className="space-y-2">
            <label className="text-sm font-medium">Title *</label>
            <input
              className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="E.g. In Rainbows"
            />
          </div>
    
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Year</label>
              <input
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                value={year}
                onChange={(e) => {
                  const onlyDigits = e.target.value.replace(/\D/g, "")
                  setYear(onlyDigits.slice(0, 4))
                }}
                placeholder="E.g. 2007"
                inputMode="numeric"
                pattern="\d*"
              />
            </div>
    
            <div className="space-y-2">
              <label className="text-sm font-medium">Genre</label>
              <input
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                placeholder="E.g. Alternative"
              />
            </div>
          </div>
    
          <Button
            type="submit"
            className="w-full text-base font-semibold py-3 border-1 border-primary shadow-md hover:shadow-lg hover:border-primary/80 transition"
          >
            Add vinyl
          </Button>

        </form>
      )
    }