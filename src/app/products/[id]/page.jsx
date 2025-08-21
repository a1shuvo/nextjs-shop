import products from "@/lib/products.json";
import Link from "next/link";

export default function ProductDetailPage({ params }) {
  const { id } = params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
        <h1 className="text-3xl font-bold mb-4 text-red-600">
          Product Not Found
        </h1>
        <Link
          href="/products"
          className="btn btn-outline btn-primary rounded-full"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center py-12 px-4">
      <div className="max-w-6xl w-full bg-base-200 rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row md:gap-8">
        {/* Image Section */}
        {product.image ? (
          <div className="md:w-1/2 relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 md:h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ) : (
          <div className="md:w-1/2 bg-gray-200 h-96 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}

        {/* Content Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center space-y-4">
          <h1 className="text-3xl font-bold text-blue-800">{product.name}</h1>
          <p className="text-gray-700 text-base">{product.description}</p>
          <p className="text-blue-600 font-semibold text-2xl">
            ${product.price}
          </p>

          <div className="flex gap-4 flex-wrap mt-4">
            <Link
              href="/products"
              className="btn btn-primary rounded-full px-6 hover:scale-105 transition-transform"
            >
              Back to Products
            </Link>
            <button className="btn btn-outline btn-secondary rounded-full px-6 hover:scale-105 transition-transform">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
