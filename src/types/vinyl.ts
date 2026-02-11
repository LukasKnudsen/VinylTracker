export type Vinyl = {
  id: string
  artist: string
  title: string
  year?: number
  genre?: string
}

export type VinylInput = Omit<Vinyl, "id">