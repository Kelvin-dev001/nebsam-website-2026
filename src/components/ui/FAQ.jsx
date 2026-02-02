export default function FAQ({ items = [] }) {
  if (!items.length) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">FAQs</h2>
      <div className="space-y-3">
        {items.map((x, i) => (
          <details
            key={i}
            className="rounded-xl border p-4"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <summary className="cursor-pointer font-medium">{x.q}</summary>
            <p className="mt-2 text-sm text-[color:var(--muted)]">{x.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}