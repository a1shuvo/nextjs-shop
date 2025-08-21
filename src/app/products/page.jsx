import Link from "next/link";
import products from "@/lib/products.json";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center py-8">Products</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow rounded-lg p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-blue-600 font-bold mb-4">${product.price}</p>
            </div>
            <Link
              href={`/products/${product.id}`}
              className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg text-center"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
