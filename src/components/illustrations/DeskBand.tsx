export function DeskBand({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden
      className={`wood-band relative h-10 w-full ${flip ? "rotate-180" : ""}`}
      style={{
        clipPath:
          "polygon(0% 40%, 3% 20%, 7% 45%, 11% 15%, 15% 42%, 19% 25%, 23% 48%, 27% 18%, 31% 40%, 35% 22%, 39% 46%, 43% 20%, 47% 44%, 51% 16%, 55% 42%, 59% 26%, 63% 48%, 67% 18%, 71% 40%, 75% 24%, 79% 46%, 83% 20%, 87% 44%, 91% 16%, 95% 42%, 100% 24%, 100% 100%, 0% 100%)",
      }}
    />
  );
}
