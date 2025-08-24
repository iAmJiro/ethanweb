import React from "react";

function Home() {
  const features = [
    {
      icon: "fas fa-award",
      title: "Clear & Value-Focused",
      description: "Fast, reliable service for rental property maintenance",
    },
    {
      icon: "fas fa-retweet",
      title: "Professional & Trustworthy",
      description: "Honest quotes and no hidden costs",
    },
    {
      icon: "fas fa-fingerprint",
      title: "Bold & Confident",
      description: "Skilled in a wide range of small construction jobs",
    },
    {
      icon: "fas fa-fingerprint",
      title: "Friendly & Service-Oriented",
      description:
        "Respect for tenants, landlords, and property managers alike",
    },
  ];

  return (
    <div className="bg-gray-100 text-black">
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 flex items-center justify-center min-h-[75vh] w-full overflow-hidden w-screen">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1267&q=80')",
          }}
        >
          <div className="absolute w-full h-full bg-black opacity-60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white">
            Your story starts with us.
          </h1>
          <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
            We’re here to take the stress out of property upkeep so you can
            focus on the bigger picture. Whether it’s a quick repair or ongoing
            maintenance, EGH Construction is the team you can count on.
          </p>
          <button className="mt-8 px-6 py-3 bg-white text-white font-semibold rounded-full shadow hover:bg-gray-200 transition duration-200">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-neutral-900 py-20 -mt-24 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-y-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="w-full md:w-3/12 px-4 text-center flex justify-center"
              >
                <div className="bg-white text-black shadow-lg rounded-lg p-6 w-full max-w-sm">
                  <div className="p-3 inline-flex items-center justify-center w-12 h-12 mb-5 rounded-full bg-[#C79134] text-white">
                    <i className={feature.icon}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-base">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Magic AI Blocks Section */}
      <section className="bg-neutral-900 grid min-h-screen p-8 place-items-center">
        <div className="container grid grid-cols-1 gap-8 my-auto lg:grid-cols-2">
          {[
            {
              category: "Technology",
              title: "At EGH Construction",
              description:
                "We’re a small, hands-on construction business specialising in property maintenance and minor building works. We understand that keeping rental properties in good shape is just as important as major renovations—and that’s where we come in.",
              image:
                "https://bucket.material-tailwind.com/magic-ai/06b38f84f9669f766048c469ce861b81880378273a11ae9badaedfc32868ef44.jpg",
            },
            {
              category: "Expansion",
              title: "Expanding Our Service Network",
              description:
                "We focus on small-scale construction, repairs, and upkeep that landlords, property managers, and homeowners can rely on. From fixing rotten timber and repairing fences to refreshing interiors and taking care of general wear-and-tear, we handle the jobs that keep properties safe, functional, and looking their best.",
              image:
                "https://bucket.material-tailwind.com/magic-ai/e7aa235a7bc5f504db1c66e27ece08f8118b1da6b21c013500391afcd572cf7d.jpg",
            },
            {
              category: "Sustainability",
              title: "Sustainable Practices for a Greener Future",
              description:
                "As a small business, we pride ourselves on being reliable, affordable, and easy to deal with. We keep communication clear, turn up on time, and deliver quality workmanship every step of the way.",
              image:
                "https://bucket.material-tailwind.com/magic-ai/dc74a867f21afc734166a6d37c08beaba4ff040664ba8ccce918e054264ad68d.jpg",
            },
          ].map((block, index) => (
            <div
              key={index}
              className="relative flex-col bg-transparent text-gray-700 shadow-none grid gap-2 sm:grid-cols-2 rounded-xl"
            >
              <div className="relative overflow-hidden bg-white shadow-lg rounded-xl">
                <img
                  src={block.image}
                  alt={block.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6 px-2 sm:pr-6 sm:pl-4">
                <p className="text-sm font-semibold mb-4">{block.category}</p>
                <a
                  href="#"
                  className="text-xl font-semibold leading-snug text-blue-gray-900 mb-2 transition-colors hover:text-gray-700"
                >
                  {block.title}
                </a>
                <p className="text-base text-gray-500 mb-8">
                  {block.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
