import products from "@/lib/products.json";
import Link from "next/link";

// Next.js automatically provides the params object for dynamic routes
export default function ProductDetailPage({ params }) {
  const { id } = params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <Link href="/products" className="text-blue-600 underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-6">
      <div className="bg-white shadow-lg rounded-lg max-w-2xl p-8 w-full">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-700 mb-6">{product.description}</p>
        <p className="text-blue-600 font-bold text-xl mb-6">${product.price}</p>
        <Link
          href="/products"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
}
