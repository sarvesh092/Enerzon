import AnimatedSection from "@/components/AnimatedSection";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative min-h-[800px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1500&q=80"
            alt="Modern organization teamwork"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-gray-700 bg-clip-text text-transparent animate-dropDown">
            A Powerhouse
          </h1>
          <p
            className="text-xl text-gray-200 max-w-2xl animate-dropDown mb-12"
            style={{ animationDelay: "200ms" }}
          >
            The people of Enerzon come from leading global companies like Tesla,
            iZettle, BYD, CMS Energy and TSMC – bringing deep expertise in
            scaling technology, driving innovation, and solving complex
            challenges across industries.
          </p>

          {/* Organization Values Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center">
              <span className="text-4xl mb-2">💡</span>
              <h4 className="font-bold mb-1 text-white">Innovation</h4>
              <p className="text-sm text-gray-300">
                Pushing boundaries in energy technology and digital solutions.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center">
              <span className="text-4xl mb-2">🤝</span>
              <h4 className="font-bold mb-1 text-white">Collaboration</h4>
              <p className="text-sm text-gray-300">
                Working together across disciplines to achieve more.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center">
              <span className="text-4xl mb-2">🌱</span>
              <h4 className="font-bold mb-1 text-white">Sustainability</h4>
              <p className="text-sm text-gray-300">
                Building a cleaner, more resilient energy future.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center text-center">
              <span className="text-4xl mb-2">🔒</span>
              <h4 className="font-bold mb-1 text-white">Trust & Security</h4>
              <p className="text-sm text-gray-300">
                Delivering reliable, secure solutions for all partners.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16 mt-22">
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-gray-900 mx-auto mb-16"></div>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Energy that adapts. Systems that endure.
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden mb-12">
              <div className="absolute -left-4 top-0 w-2 h-full bg-gradient-to-b from-orange-500 to-red-500"></div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Create lasting change.
              </h3>
              <p className="text-gray-300">
                Our solutions are designed to help Europe keep the lights
                on—making energy systems stronger, communities safer, and the
                continent more sustainable. Whether it's protecting essential
                infrastructure, supporting independence, or helping Europe lead
                the way in clean energy, we're here to ensure the future stays
                bright.
              </p>
            </div>
            <div className="relative overflow-hidden">
              <div className="absolute -left-4 top-0 w-2 h-full bg-gradient-to-b from-red-500 to-black"></div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                With the best of the best.
              </h3>
              <p className="text-gray-300">
                At Enerzon, we look out for each other. Our team is built on
                trust, collaboration, and a shared passion for making our energy
                future stronger and more reliable. We focus on creating an
                environment where everyone can thrive, grow, and do meaningful
                work together.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="relative mb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black -skew-y-3"></div>
          <div className="relative z-10 py-20 px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">F</span>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Drawing from this experience, we started Enerzon to
                    transform energy systems with the same focus on scalability,
                    efficiency, and impact that has reshaped industries like
                    fintech, entertainment, and logistics.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">
                      Scalability
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Building systems that grow with your needs
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">
                      Efficiency
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Optimizing every aspect of energy management
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">Impact</h4>
                    <p className="text-gray-300 text-sm">
                      Creating meaningful change in the industry
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                    <h4 className="font-semibold text-white mb-2">
                      Innovation
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Pushing boundaries in energy technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-gray-900 mx-auto mb-16 md:mb-32"></div>
        <div className="border-t border-b border-gray-800 py-8 md:py-16 mb-16 md:mb-32">
          {/* Header Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-end mb-8 md:mb-12">
            <div className="text-center md:text-left">
              <span className="block text-xs font-semibold tracking-widest mb-2 text-gray-400">
                BENCHMARK
              </span>
            </div>
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-white">
                Full transparency.
              </h2>
            </div>
          </div>

          {/* First Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Stats items with consistent mobile styling */}
            <div className="text-center md:text-left">
              <span className="block text-4xl md:text-7xl font-serif font-bold bg-gradient-to-r from-orange-500 via-red-500 to-gray-900 bg-clip-text text-transparent">
                +122%
              </span>
              <span className="block mt-2 text-xs md:text-sm font-bold uppercase tracking-wide text-gray-400">
                FCR-D PERFORMANCE VS MARKET*
              </span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-7xl font-serif font-bold bg-gradient-to-r from-orange-500 via-red-500 to-gray-900 bg-clip-text text-transparent">
                +152%
              </span>
              <span className="block mt-2 text-xs md:text-sm font-bold uppercase tracking-wide text-gray-400">
                FORECASTED MMO PERFORMANCE
              </span>
            </div>
            <div className="text-center md:text-right">
              <span className="block text-4xl md:text-7xl font-serif font-bold bg-gradient-to-r from-orange-500 via-red-500 to-gray-900 bg-clip-text text-transparent">
                1+ Million
              </span>
              <span className="block mt-2 text-xs md:text-sm font-bold uppercase tracking-wide text-gray-400">
                API-CALLS ON OUR PLATFORM
              </span>
            </div>
          </div>

          {/* Second Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center md:text-left">
              <span className="block text-4xl md:text-7xl font-serif font-bold bg-gradient-to-r from-orange-500 via-red-500 to-gray-900 bg-clip-text text-transparent">
                {">"}90%
              </span>
              <span className="block mt-2 text-xs md:text-sm font-bold uppercase tracking-wide text-gray-400">
                CAPACITY-MODELING PREDICTABILITY BY THE END OF 2024
              </span>
            </div>
            <div className="text-center">
              <span className="block text-4xl md:text-7xl font-serif font-bold bg-gradient-to-r from-orange-500 via-red-500 to-gray-900 bg-clip-text text-transparent">
                Zero
              </span>
              <span className="block mt-2 text-xs md:text-sm font-bold uppercase tracking-wide text-gray-400">
                SECURITY ISSUES
              </span>
            </div>
            <div className="text-center md:text-right">
              <span className="block text-4xl md:text-7xl font-serif font-bold bg-gradient-to-r from-orange-500 via-red-500 to-gray-900 bg-clip-text text-transparent">
                €11.7m
              </span>
              <span className="block mt-2 text-xs md:text-sm font-bold uppercase tracking-wide text-gray-400">
                VENTURE BACKED MUSCLES
              </span>
            </div>
          </div>
        </div>

        {/* Investors Section */}
        <div className="text-center mb-28 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black -skew-y-3"></div>
          <div className="relative z-10 py-16">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Our Investors
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
              We've been fortunate to be backed by some of world's biggest names
              in venture capital and impact investing.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12">
              <div className="text-center">
                <h3 className="font-bold text-white">General Catalyst</h3>
                <p className="text-gray-400">Lead Investor</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-white">Norrsken VC</h3>
                <p className="text-gray-400">Impact Investor</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-white">La Famiglia</h3>
                <p className="text-gray-400">Strategic Partner</p>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-white">Greens</h3>
                <p className="text-gray-400">Sustainability Focus</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Text Section */}
        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-gray-900 mx-auto"></div>
        <div className="text-center py-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent font-serif">
            Complex problems demand decisive action. Get in touch.
          </h2>
          <p className="text-2xl text-gray-300 font-light italic">
            Whether you're browsing or ready to level up, we'd love to talk.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
