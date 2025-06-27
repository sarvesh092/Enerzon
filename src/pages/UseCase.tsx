import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, Battery, Car, Zap, Server, Power } from "lucide-react";

const UseCases = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1500&q=80"
            alt="Energy management"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            A complete suite for energy companies.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            We understand the challenges energy companies face in managing
            customer offers. That's why our platform is built to handle all
            flexibility needs seamlessly.
          </motion.p>
        </div>
      </section>

      {/* Residential Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We cover all assets,
              <br />
              under the same roof.
            </h2>
            <p className="text-xl text-gray-300">
              Effortlessly optimise energy use without disrupting daily routines
              for home-owners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <UseCaseCard
              icon={<Zap className="w-8 h-8" />}
              title="Solar"
              description="Control your customers' solar panels to reduce output at critical times. Ease grid pressure and boost renewable efficiency."
            />
            <UseCaseCard
              icon={<Car className="w-8 h-8" />}
              title="Electric vehicles"
              description="Harness vehicle-to-grid (V2G) technology. Tap into EV batteries, balance grid fluctuations, and unlock new revenue streams."
            />
            <UseCaseCard
              icon={<Home className="w-8 h-8" />}
              title="Home EV Chargers"
              description="Manage home EV chargers to influence charging patterns. Smooth peak demand and maximise grid capacity."
            />
            <UseCaseCard
              icon={<Battery className="w-8 h-8" />}
              title="Home batteries"
              description="Control home batteries to store excess solar power. Balance local usage and provide reliable backup during outages."
            />
          </div>
        </div>
      </section>

      {/* Solar Energy Management Section - Moved up */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1500&q=80"
            alt="Solar Energy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl font-bold mb-6"
            >
              Solar Energy Management
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-200"
            >
              Optimize your solar assets with intelligent monitoring and control
              systems.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Data Centers Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Big power.
              <br />
              Small package.
            </h2>
            <p className="text-xl text-gray-300">
              Optimise and monetise critical infrastructure without compromising
              reliability or performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <UseCaseCard
              icon={<Battery className="w-8 h-8" />}
              title="BESS"
              description="Take charge of utility-scale battery storage. Quickly dispatch stored energy, stabilise grid frequency, and seize market opportunities."
            />
            <UseCaseCard
              icon={<Power className="w-8 h-8" />}
              title="Dynamic consumption"
              description="Shift consumption intelligently. Reduce costs, flatten peak loads, and align demand with renewable generation."
            />
            <UseCaseCard
              icon={<Server className="w-8 h-8" />}
              title="UPS"
              description="Use data-centre UPS assets proactively. Balance loads, ease demand spikes, and boost grid stability—without sacrificing backup power."
            />
          </div>
        </div>
      </section>

      {/* C&I Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=1500&q=80"
            alt="Industrial energy"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Grow your earnings.
              <br />
              Cut-down on costs.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300"
            >
              Maximise efficiency of C&I assets without operational disruptions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden group"
            >
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1500&q=80"
                alt="Commercial Solar"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 p-8"
              >
                <h3 className="text-3xl font-bold mb-2">
                  Commercial Solar & BESS
                </h3>
                <p className="text-gray-200">
                  Take control of commercial solar assets and battery storage.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Side - Content with Animated Features */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                <div className="text-orange-500 mt-2">
                  <Zap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Match Generation to Demand
                  </h3>
                  <p className="text-gray-400 text-lg">
                    Optimize your solar generation to align with peak demand
                    periods, reducing grid reliance and maximizing revenue from
                    surplus energy.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                <div className="text-orange-500 mt-2">
                  <Battery className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Intelligent Storage
                  </h3>
                  <p className="text-gray-400 text-lg">
                    Leverage battery storage to capture excess generation and
                    deploy it during high-value periods, enhancing your energy
                    arbitrage opportunities.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                <div className="text-orange-500 mt-2">
                  <Power className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">
                    Load Management
                  </h3>
                  <p className="text-gray-400 text-lg">
                    Proactively shift energy usage to off-peak times, reducing
                    costs and optimizing renewable energy utilization.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1500&q=80"
            alt="Smart Grid"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl font-bold mb-6"
            >
              Smart Grid Integration
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-200"
            >
              Connect and optimize your energy assets with our intelligent grid
              management platform.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            We handle the complexity. You get the results.
            <br />
            Let's connect.
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Whether you're browsing or ready to be amazed, we'd love to talk.
          </p>
          <Link to="/contact">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors">
              Book an intro
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

// UseCase Card Component
const UseCaseCard = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative group"
    >
      <div className="absolute -inset-[1px] bg-gradient-to-r from-orange-500 via-red-500 to-gray-900 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-xl group-hover:bg-white/10 transition-all duration-300">
        <div className="text-orange-500 group-hover:text-black transition-colors duration-300 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-black transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 group-hover:text-black transition-colors duration-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default UseCases;
