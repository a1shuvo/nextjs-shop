export default function Hero() {
  return (
    <section className="hero min-h-[400px] bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-4 text-blue-900">
            Welcome to MyShop
          </h1>
          <p className="text-xl text-blue-800 mb-8">
            Discover amazing products and manage them easily with our simple,
            elegant app.
          </p>
          <a
            href="/products"
            className="btn btn-primary btn-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Browse Products
          </a>
        </div>
      </div>
    </section>
  );
}
