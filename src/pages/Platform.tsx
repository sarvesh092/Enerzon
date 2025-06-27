import AnimatedSection from "@/components/AnimatedSection";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Platform = () => {
  const [progressValues, setProgressValues] = useState({
    aggregate: 0,
    frontMeter: 0,
    behindMeter: 0,
  });

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const progressImages = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
  ];

  const energyAssets = [
    {
      src: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Solar Panel Installation",
      title: "Solar Panels",
    },
    {
      src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Energy Storage Battery",
      title: "Battery Storage",
    },
    {
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Wind Energy Farm",
      title: "Wind Energy",
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Smart Grid Technology",
      title: "Smart Grid",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgressValues((prev) => {
        const newValues = { ...prev };

        if (prev.aggregate < 100) {
          newValues.aggregate = Math.min(prev.aggregate + 2, 100);
          if (newValues.aggregate === 100) setCurrentImageIndex(0);
        } else if (prev.frontMeter < 100) {
          newValues.frontMeter = Math.min(prev.frontMeter + 2, 100);
          if (newValues.frontMeter === 100) setCurrentImageIndex(1);
        } else if (prev.behindMeter < 100) {
          newValues.behindMeter = Math.min(prev.behindMeter + 2, 100);
          if (newValues.behindMeter === 100) setCurrentImageIndex(2);
        } else {
          return { aggregate: 0, frontMeter: 0, behindMeter: 0 };
        }

        return newValues;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="w-full">
        <AnimatedSection className="relative h-[550px]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Advanced energy management dashboard"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white animate-dropDown">
              Our Platform
            </h1>
            <p
              className="text-xl text-gray-200 max-w-2xl animate-dropDown"
              style={{ animationDelay: "200ms" }}
            >
              Discover the advanced technology behind Enerzon's intelligent
              energy management system.
            </p>
          </div>
        </AnimatedSection>

        {/* Who Uses Our Platform */}
        <div className="container mx-auto px-4 py-12">
          <AnimatedSection className="mt-24">
            <div>
              <div className="mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-white">
                      Who Uses Our Platform
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                      Energy companies, EV manufacturers, data centres, and
                      power producers use Enerzon's platform to run virtual
                      power plants, integrating a wide range of energy assets.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <span className="px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-sm font-medium text-white border border-white/10">
                        Energy Companies
                      </span>
                      <span className="px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-sm font-medium text-white border border-white/10">
                        EV Manufacturers
                      </span>
                      <span className="px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-sm font-medium text-white border border-white/10">
                        Data Centres
                      </span>
                      <span className="px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-sm font-medium text-white border border-white/10">
                        Power Producers
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 pb-4">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                          <span className="text-2xl">⚡</span>
                        </div>
                        <h3 className="text-xl font-semibold text-white">
                          Energy Alpha
                        </h3>
                      </div>
                      <blockquote className="text-lg text-gray-300 italic border-l-4 border-orange-600 pl-4">
                        "A system operating at 100% Energy Alpha is executing
                        the perfect decision at every millisecond. Anything
                        below that represents unrealised potential — value left
                        on the table."
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Progress Bars and Images Section */}
          <AnimatedSection animation="fadeUp" className="mt-32">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-center mb-16 text-white">
                Energy Management Progress
              </h2>
              <div className="flex flex-col gap-8">
                <div className="flex flex-row gap-8">
                  <div className="flex-1 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-white">
                        Aggregate & VPP
                      </span>
                    </div>
                    <Progress
                      value={progressValues.aggregate}
                      className="h-1 bg-white/10 [&>div]:bg-gradient-to-r [&>div]:from-orange-500 [&>div]:to-red-500"
                    />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-white">
                        Front-of-the-Meter
                      </span>
                    </div>
                    <Progress
                      value={progressValues.frontMeter}
                      className="h-1 bg-white/10 [&>div]:bg-gradient-to-r [&>div]:from-orange-500 [&>div]:to-red-500"
                    />
                  </div>

                  <div className="flex-1 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-white">
                        Behind-the-Meter
                      </span>
                    </div>
                    <Progress
                      value={progressValues.behindMeter}
                      className="h-1 bg-white/10 [&>div]:bg-gradient-to-r [&>div]:from-orange-500 [&>div]:to-red-500"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <div className="relative overflow-hidden rounded-lg shadow-xl">
                    <img
                      src={progressImages[currentImageIndex]}
                      alt="Progress visualization"
                      className="w-full h-80 object-cover transition-all duration-500"
                    />
                    <div
                      key={currentImageIndex}
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 animate-slideUp"
                    >
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-white">
                          {currentImageIndex === 0
                            ? "Aggregate & VPP Progress"
                            : currentImageIndex === 1
                            ? "Front-of-the-Meter Progress"
                            : "Behind-the-Meter Progress"}
                        </h3>
                        <p className="text-gray-200">
                          {currentImageIndex === 0
                            ? "Optimizing energy distribution across the virtual power plant network for maximum efficiency."
                            : currentImageIndex === 1
                            ? "Enhancing grid stability and power quality through advanced front-of-meter solutions."
                            : "Implementing behind-the-meter solutions to optimize local energy consumption and storage."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-32">
            <AnimatedSection animation="fadeUp" delay={100}>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg hover:border-2 hover:border-orange-500 h-72 flex flex-col group">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/20">
                  <span className="text-white text-xl group-hover:text-orange-500">
                    📊
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-orange-500">
                  Real-time Monitoring
                </h3>
                <p className="text-gray-300 flex-1 group-hover:text-orange-500/80">
                  Monitor your energy consumption in real-time with detailed
                  analytics and insights that help you understand your usage
                  patterns.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={200}>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg hover:border-2 hover:border-orange-500 h-72 flex flex-col group">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/20">
                  <span className="text-white text-xl group-hover:text-orange-500">
                    🤖
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-orange-500">
                  AI-Powered Optimization
                </h3>
                <p className="text-gray-300 flex-1 group-hover:text-orange-500/80">
                  Our AI algorithms automatically optimize your energy usage for
                  maximum efficiency and cost savings.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={300}>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg hover:border-2 hover:border-orange-500 h-72 flex flex-col group">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/20">
                  <span className="text-white text-xl group-hover:text-orange-500">
                    🔮
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-orange-500">
                  Predictive Analytics
                </h3>
                <p className="text-gray-300 flex-1 group-hover:text-orange-500/80">
                  Forecast energy needs and prevent costly downtime with
                  predictive analytics and maintenance scheduling.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Energy Assets Section */}
          <AnimatedSection animation="fadeUp" className="mt-32 mb-32">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Energy Infrastructure
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Explore our comprehensive range of energy solutions including
                solar panels, battery storage, and smart grid technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {energyAssets.map((asset, index) => (
                <AnimatedSection
                  key={index}
                  animation="scaleUp"
                  delay={index * 100}
                >
                  <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                    <img
                      src={asset.src}
                      alt={asset.alt}
                      className="w-full h-64 object-cover transition-all duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500 transition-all duration-300 rounded-lg"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h4 className="text-white font-semibold text-lg">
                        {asset.title}
                      </h4>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Technology Deep Dive Section */}
          <div className="mt-32 mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <AnimatedSection animation="slideRight">
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Advanced Circuit Technology
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Our platform leverages state-of-the-art circuit technology to
                  provide unparalleled monitoring and control capabilities for
                  your energy infrastructure.
                </p>
                <ul className="space-y-3">
                  <AnimatedSection animation="slideRight" delay={100}>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-300">
                        High-precision sensor integration
                      </span>
                    </li>
                  </AnimatedSection>
                  <AnimatedSection animation="slideRight" delay={200}>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-300">
                        Real-time data processing
                      </span>
                    </li>
                  </AnimatedSection>
                  <AnimatedSection animation="slideRight" delay={300}>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                      <span className="text-gray-300">
                        Automated optimization algorithms
                      </span>
                    </li>
                  </AnimatedSection>
                </ul>
              </AnimatedSection>
              <AnimatedSection animation="slideLeft" delay={300}>
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Advanced circuit board technology"
                  className="rounded-lg shadow-xl hover-scale"
                />
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slideRight" delay={200}>
                <img
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Sustainable energy landscape"
                  className="rounded-lg shadow-xl hover-scale"
                />
              </AnimatedSection>
              <AnimatedSection animation="slideLeft">
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Environmental Intelligence
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Our platform integrates environmental data and weather
                  patterns to optimize energy usage based on natural conditions
                  and seasonal variations.
                </p>
                <AnimatedSection animation="scaleUp" delay={300}>
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 text-white">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Weather-based optimization</li>
                      <li>• Seasonal usage predictions</li>
                      <li>• Environmental impact monitoring</li>
                      <li>• Carbon footprint reduction</li>
                    </ul>
                  </div>
                </AnimatedSection>
              </AnimatedSection>
            </div>
          </div>

          {/* Call to Action Section */}
          <AnimatedSection
            animation="scaleUp"
            className="mt-32 text-center mb-32"
          >
            <div className="bg-gradient-to-r from-orange-500 via-red-500 to-gray-900 text-white p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Energy Management?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already saving energy and reducing
                costs with our platform.
              </p>
              <div className="space-x-4">
                <Link to="/contact">
                  {" "}
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 hover-scale">
                    Schedule Demo
                  </button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Platform;
