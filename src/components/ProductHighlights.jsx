import products from "@/lib/products.json";
import Link from "next/link";

export default function ProductHighlights() {
  const highlights = products.slice(0, 3); // show first 3

  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {highlights.map((p) => (
          <div key={p.id} className="border rounded-lg p-4 shadow">
            <h3 className="font-semibold text-lg">{p.name}</h3>
            <p className="text-gray-600">${p.price}</p>
            <Link href={`/products/${p.id}`} className="text-blue-600 mt-2 inline-block">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
