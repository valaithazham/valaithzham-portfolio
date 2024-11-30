const products = [
  {
    id: 1,
    name: "Premium Product",
    price: "$99.99",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    description: "High-quality premium product with exceptional features",
  },
  {
    id: 2,
    name: "Essential Package",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description: "Essential features for your everyday needs",
  },
  {
    id: 3,
    name: "Pro Bundle",
    price: "$149.99",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f",
    description: "Professional bundle with advanced capabilities",
  },
];

export default function Products() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center ">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our selection of premium products designed to enhance your experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-64"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {product.name}
                  </h3>
                  <span className="text-lg font-bold text-primary">
                    {product.price}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {product.description}
                </p>
                <button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}