import type { Vinyl } from "../types/vinyl";

type Props = {
  vinyl: Vinyl;
  onRemove: (id: string) => void;
};

export default function VinylItem({ vinyl, onRemove }: Props) {
  return (
      <li
        className="
          group
          rounded-lg border border-border bg-background p-3
          flex flex-col gap-1 relative
        "
      >
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-medium leading-none">
          {vinyl.artist} - <span className="font-semibold">{vinyl.title}</span>
        </h3>

        {vinyl.year && (
          <span className="text-sm text-muted-foreground">{vinyl.year}</span>
        )}
      </div>

      {vinyl.genre && (
        <p className="text-sm text-muted-foreground">{vinyl.genre}</p>
      )}

      <button
        onClick={() => onRemove(vinyl.id)}
        className="
        absolute bottom-2 right-3
        text-xs text-red-500
        opacity-0 group-hover:opacity-100
        transition-opacity
      "
      >
        Remove vinyl
      </button>
    </li>
  );
}
