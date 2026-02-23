import Parse from "../lib/parse";
import type { Vinyl } from "../types/vinyl";

const CLASS = "Vinyl";

function toVinyl(obj: Parse.Object): Vinyl {
  return {
    id: obj.id!,
    artist: obj.get("artist") ?? "",
    title: obj.get("title") ?? "",
    year: obj.get("year") ?? undefined,
    genre: obj.get("genre") ?? undefined,
  };
}

function handleParseError(error: unknown) {
  console.error("Parse error:", error);

  if (error instanceof Parse.Error) {
    if (error.code === 119 || error.code === 101) {
      throw new Error("Unauthorized – check Back4App permissions/login.");
    }
    throw new Error(error.message);
  }

  throw error;
}

export async function fetchVinyls(): Promise<Vinyl[]> {
  try {
    const query = new Parse.Query(CLASS);
    query.descending("createdAt");

    const results = await query.find();
    return results.map(toVinyl);

  } catch (err) {
    handleParseError(err);
    return [];
  }
}

export async function createVinyl(v: Omit<Vinyl, "id">): Promise<Vinyl> {
  try {
    const obj = new Parse.Object(CLASS);

    obj.set("artist", v.artist);
    obj.set("title", v.title);

    if (v.year !== undefined) obj.set("year", v.year);
    if (v.genre !== undefined) obj.set("genre", v.genre);

    const saved = await obj.save();
    return toVinyl(saved);

  } catch (err) {
    handleParseError(err);
    throw err;
  }
}

export async function deleteVinyl(id: string): Promise<void> {
  try {
    const obj = new Parse.Object(CLASS);
    obj.id = id;

    await obj.destroy();

  } catch (err) {
    handleParseError(err);
  }
}