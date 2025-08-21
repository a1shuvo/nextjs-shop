import products from "@/lib/products.json";
import Link from "next/link";

export default function ProductHighlights() {
  const highlights = products.slice(0, 3);

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-900">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {highlights.map((p) => (
          <div
            key={p.id}
            className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden group"
          >
            {p.image && (
              <figure className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </figure>
            )}
            <div className="card-body text-center px-6 py-4">
              <h3 className="card-title text-xl font-semibold text-blue-800 mb-2">
                {p.name}
              </h3>
              <p className="text-lg font-bold text-black-600 mb-4">${p.price}</p>
              <Link
                href={`/products/${p.id}`}
                className="btn btn-primary btn-sm rounded-full px-6 hover:scale-105 transition-transform duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
