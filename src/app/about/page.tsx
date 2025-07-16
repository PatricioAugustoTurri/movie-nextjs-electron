import Link from "next/link";

function AboutPage() {
  return (
    <div>
      <section className="bg-white text-gray-800 px-6 mb-12 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 border-b-2 border-gray-300 pb-2">
          About the Project
        </h1>

        <p className="mb-6 leading-relaxed">
          This website has been developed with the goal of providing a reliable
          and enriched movie catalog, powered by
          <strong className="text-red-600">The Movie Database (TMDb)</strong> as
          its primary data source. Our platform offers quick and visual access
          to up-to-date information about films, actors, and upcoming releases,
          with a focus on user experience.
        </p>

        <p className="mb-6 leading-relaxed">
          We firmly believe in the cultural and artistic value of cinema, and we
          strive to present each title with accuracy, clarity, and context. The
          site is designed for both passionate film lovers and casual users
          looking to discover their next favorite movie.
        </p>

        <p className="mb-6 leading-relaxed">
          We are committed to maintaining an intuitive interface, modern
          features such as genre-based browsing, trailers, and rankings, and an
          aesthetic that aligns with current digital design standards.
        </p>

        <p className="leading-relaxed">
          For inquiries, suggestions, or collaborations, feel free to reach out
          through our{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            contact form
          </Link>{" "}
          or via social media channels.
        </p>
      </section>
      <section className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Project Timeline</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>April 2024:</strong> Initial concept and research phase.
          </li>
          <li>
            <strong>July 2024:</strong> Integration of TMDb API and core feature
            planning.
          </li>
          <li>
            <strong>October 2024:</strong> Public beta launch with catalog and
            search tools.
          </li>
          <li>
            <strong>January 2025:</strong> Full release with trailer support and
            multilingual options.
          </li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Technologies We Use</h2>
        <ul className="grid grid-cols-2 gap-4 text-gray-700">
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>TypeScript</li>
          <li>The Movie Database (TMDb) API</li>
          <li>Vercel Hosting</li>
          <li>React Hooks & SWR</li>
        </ul>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">What Our Users Say</h2>
        <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-600">
          “A visually stunning and practical way to explore movies. I found a
          hidden gem thanks to this site!” — Amanda L.
        </blockquote>
      </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">
              How are movies selected for the catalog?
            </p>
            <p className="text-gray-700">
              We source data directly from TMDb based on popularity, genre, and
              release date filters.
            </p>
          </div>
          <div>
            <p className="font-medium">Can I recommend a movie?</p>
            <p className="text-gray-700">
              Yes! Use our contact form to suggest titles or features you’d like
              to see added.
            </p>
          </div>
          <div>
            <p className="font-medium">Is the site free to use?</p>
            <p className="text-gray-700">
              Absolutely. All features are freely available without
              subscriptions or ads.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
