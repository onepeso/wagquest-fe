const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white py-6 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">About WagQuest</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700">
            At WagQuest, our mission is to help dog owners discover new and
            exciting adventures with their furry friends. We believe that every
            dog deserves the opportunity to explore, play, and bond with their
            human companions in a safe and enjoyable environment.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>
              Curated list of dog-friendly locations, including parks, trails,
              beaches, and more
            </li>
            <li>
              Detailed information about each location, including amenities,
              rules, and restrictions
            </li>
            <li>
              User reviews and ratings to help you make informed decisions
            </li>
            <li>
              Ability to save your favorite locations and create personalized
              adventure plans
            </li>
            <li>
              Connect with other dog owners and join community events and
              meetups
            </li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-4">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <ul className="text-lg text-gray-700">
            <li>Email: info@pawadventures.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Main St, Anytown, USA</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
