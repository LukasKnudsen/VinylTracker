import type { Vinyl } from "../types/vinyl";
import VinylItem from "./VinylItem";

type Props = {
  items: Vinyl[];
  onRemove: (id: string) => void;
};

export default function VinylList({ items, onRemove }: Props) {
  return (
    <section className="w-full">
      <header className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold">My vinyls</h2>
        <span className="text-sm text-muted-foreground">
          {items.length} pieces
        </span>
      </header>

      {items.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border p-6 text-sm text-muted-foreground">
          No vinyls yet.
        </div>
      ) : (
        <ul className="space-y-3">
          {items.map((v) => (
            <VinylItem
              key={v.id}
              vinyl={v}
              onRemove={onRemove}
            />
          ))}
        </ul>
      )}
    </section>
  );
}
