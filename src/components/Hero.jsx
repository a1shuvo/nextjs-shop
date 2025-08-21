export default function Hero() {
  return (
    <section className="text-center py-16 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">Welcome to MyShop</h1>
      <p className="text-lg text-gray-600 mb-6">
        Discover amazing products and manage them easily with our simple app.
      </p>
      <a
        href="/products"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow"
      >
        Browse Products
      </a>
    </section>
  );
}
