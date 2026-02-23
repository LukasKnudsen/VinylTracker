import Parse from "../lib/parse";
import type { Vinyl } from "../types/vinyl";

const CLASS = "Vinyl";

function toVinyl(obj: Parse.Object): Vinyl {
  return {
    id: obj.id!, 
    artist: (obj.get("artist") ?? "") as string,
    title: (obj.get("title") ?? "") as string,
    year: (obj.get("year") ?? undefined) as number | undefined,
    genre: (obj.get("genre") ?? undefined) as string | undefined,
  };
}

export async function fetchVinyls(): Promise<Vinyl[]> {
  const q = new Parse.Query(CLASS);
  q.descending("createdAt");
  const results = await q.find();
  return results.map(toVinyl);
}

export async function createVinyl(v: Omit<Vinyl, "id">): Promise<Vinyl> {
  const obj = new Parse.Object(CLASS);
  obj.set("artist", v.artist);
  obj.set("title", v.title);
  if (v.year !== undefined) obj.set("year", v.year);
  if (v.genre !== undefined) obj.set("genre", v.genre);

  const saved = await obj.save();
  return toVinyl(saved);
}

export async function deleteVinyl(id: string): Promise<void> {
  const obj = new Parse.Object(CLASS);
  obj.id = id;
  await obj.destroy();
}