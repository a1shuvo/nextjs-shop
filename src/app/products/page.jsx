import { promises as fs } from "fs";
import Link from "next/link";
import path from "path";

export default async function ProductsPage() {
  // Dynamically read products.json at request time
  const filePath = path.join(process.cwd(), "src/lib/products.json");
  const data = await fs.readFile(filePath, "utf-8");
  const products = JSON.parse(data);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
        Products
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="card bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden flex flex-col"
          >
            {product.image && (
              <figure className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-52 w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </figure>
            )}
            <div className="card-body flex flex-col flex-1 text-center p-6">
              <h2 className="card-title text-xl font-semibold text-blue-800">
                {product.name}
              </h2>
              <p className="text-gray-600 mt-2 flex-1 text-sm">
                {product.description}
              </p>
              <p className="text-lg font-bold text-blue-600 mt-4">
                ${product.price}
              </p>
              <Link
                href={`/products/${product.id}`}
                className="btn btn-primary btn-sm mt-4 rounded-full"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
