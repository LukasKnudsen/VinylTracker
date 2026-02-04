import VinylList from "../components/VinylList";
import type { Vinyl } from "../types/vinyl";

const demo: Vinyl[] = [

];


export default function Home() {
  
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl p-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-background p-6">
          <h2 className="text-lg font-semibold">Add vinyls</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            In dev
          </p>
        </div>

        <div className="rounded-xl border border-border bg-background p-6">
          <VinylList items={demo} />
        </div>
      </div>
    </div>
  );
}