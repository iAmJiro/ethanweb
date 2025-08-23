import React from 'react';

export default function CoffeeLandingPage() {
  const products = [
    {
      title: 'Single Origin Blend',
      price: '$14.99',
      description:
        'Our most popular blend, featuring beans from a single farm in Ethiopia. Notes of chocolate, berries, and citrus.',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    },
    {
      title: 'Dark Roast Blend',
      price: '$12.99',
      description:
        'A bold and flavorful blend of beans from Brazil, Colombia, and Indonesia. Notes of caramel, nuts, and tobacco.',
      image: 'https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7',
    },
    {
      title: 'Espresso Supreme',
      price: '$13.49',
      description:
        'Rich and intense espresso blend with a velvety finish. Perfect for your morning ritual or afternoon recharge.',
      image: 'https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7',
    },
  ];

  return (
    <main className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white w-screen overflow-hidden">
      {/* Hero Section */}
      <section className="bg-blue-600 py-20 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-white font-bold text-5xl leading-tight mb-6">
              Discover the world's best coffee
            </h1>
            <p className="text-white text-xl mb-8">
              From hand-picked farms to your cup, we source the finest beans and roast them to perfection.
            </p>
            <a
              href="#featured"
              className="inline-block px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-700 hover:text-white transition duration-200"
            >
              Shop now
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://plus.unsplash.com/premium_photo-1675716443562-b771d72a3da7"
              alt="Coffee beans"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="featured" className="py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-base mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{product.price}</span>
                    <button className="px-4 py-2 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}