import * as React from "react";
import type { Vinyl } from "../types/vinyl";
import VinylForm from "../components/VinylForm";
import VinylList from "../components/VinylList";
import Header from "../components/Header";
import { fetchVinyls, createVinyl, deleteVinyl } from "../services/vinyls";

export default function Home() {
  const [vinyls, setVinyls] = React.useState<Vinyl[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        const data = await fetchVinyls();
        if (alive) setVinyls(data);
      } catch (e) {
        if (alive) setError(e instanceof Error ? e.message : String(e));
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  async function handleAdd(v: Omit<Vinyl, "id">) {
    try {
      setError(null);
      const saved = await createVinyl(v);
      setVinyls((prev) => [saved, ...prev]);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  }

  async function handleDelete(id: string) {
    try {
      setError(null);
      await deleteVinyl(id);
      setVinyls((prev) => prev.filter((x) => x.id !== id));
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  }

  return (
    <div>
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-6">
        {error && <p className="mb-4 text-red-500">{error}</p>}

        <div className="grid gap-6 md:grid-cols-2">
          <section>
            <VinylForm onSubmit={handleAdd} />
          </section>

          <section>
            {loading ? (
              <p>Loading vinyls</p>
            ) : (
              <VinylList items={vinyls} onRemove={handleDelete} />
            )}
          </section>
        </div>
      </main>
    </div>
  );
}