import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const energyLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const energyData = [20, 30, 35, 40, 50, 60, 70, 80, 85, 90, 95, 100];

const chartData = {
  labels: energyLabels,
  datasets: [
    {
      label: "Energy Efficiency (%)",
      data: energyData,
      fill: true,
      borderColor: (ctx) => {
        const chart = ctx.chart;
        const { ctx: canvas, chartArea } = chart;
        if (!chartArea) return "#ef4444";
        const gradient = canvas.createLinearGradient(
          chartArea.left,
          0,
          chartArea.right,
          0
        );
        gradient.addColorStop(0, "#ef4444");
        gradient.addColorStop(1, "#22c55e");
        return gradient;
      },
      backgroundColor: (ctx) => {
        const chart = ctx.chart;
        const { ctx: canvas, chartArea } = chart;
        if (!chartArea) return "rgba(34,197,94,0.1)";
        const gradient = canvas.createLinearGradient(
          0,
          chartArea.top,
          0,
          chartArea.bottom
        );
        gradient.addColorStop(0, "rgba(34,197,94,0.2)");
        gradient.addColorStop(1, "rgba(239,68,68,0.05)");
        return gradient;
      },
      pointBackgroundColor: energyData.map((val) =>
        val < 60 ? "#ef4444" : "#22c55e"
      ),
      pointRadius: 6,
      tension: 0.4,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context) => `Efficiency: ${context.parsed.y}%`,
      },
    },
  },
  scales: {
    x: {
      grid: {
        color: "rgba(255,255,255,0.05)",
        display: false,
      },
      ticks: {
        color: "#fff",
        font: { weight: "bold" as const },
      },
    },
    y: {
      min: 0,
      max: 100,
      grid: {
        color: "rgba(255,255,255,0.08)",
        display: true,
      },
      ticks: {
        color: "#fff",
        font: { weight: "bold" as const },
        callback: (val) => `${val}%`,
      },
    },
  },
  maintainAspectRatio: false,
};

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 via-red-500 to-gray-900 text-white py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fadeUp">
            <h1 className="text-6xl font-bold mb-8">
              Revolutionary Energy Solutions
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fadeUp" delay={200}>
            <p className="text-2xl mb-12 max-w-3xl mx-auto text-gray-200">
              Transform your energy management with our cutting-edge platform.
              Optimize consumption, reduce costs, and build a sustainable
              future.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="scaleUp" delay={400}>
            <div className="space-x-6">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-white text-orange-500 hover:bg-gray-100 hover-scale px-8 py-6 text-lg"
                >
                  Request a Demo
                </Button>
              </Link>
              <Link to="/platform">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 hover-scale px-8 py-6 text-lg"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Create New Offerings Section */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slideRight">
              <h2 className="text-4xl font-bold mb-8 text-white">
                Increase revenue and reduce churn with flexibility programs, EV
                services and demand-side innovation — ready to launch, ready to
                scale.
              </h2>
              <div className="space-y-6">
                <AnimatedSection animation="fadeUp" delay={100}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Flexibility Programs
                      </h3>
                      <p className="text-gray-300">
                        Enable customers to participate in demand response and
                        grid services
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fadeUp" delay={200}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🚗</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        EV Services
                      </h3>
                      <p className="text-gray-300">
                        Smart charging and vehicle-to-grid solutions
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
                <AnimatedSection animation="fadeUp" delay={300}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">💡</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Demand-Side Innovation
                      </h3>
                      <p className="text-gray-300">
                        Advanced load management and optimization
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slideLeft" delay={300}>
              <div className="bg-gray-900 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Configure your customer offering
                </h3>
                <div className="space-y-6">
                  <div className="p-4 bg-black/50 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-white">
                      Business Customers
                    </h4>
                    <p className="text-gray-300">
                      Commercial, Industrial and Data Centre customers
                    </p>
                  </div>
                  <div className="p-4 bg-black/50 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-white">
                      Residential Customers
                    </h4>
                    <p className="text-gray-300">
                      Residential customers looking to upgrade their energy
                    </p>
                  </div>
                  <div className="p-4 bg-black/50 rounded-lg">
                    <h4 className="text-lg font-semibold mb-2 text-white">
                      Enabled Asset Types
                    </h4>
                    <div className="space-y-2">
                      <p className="text-gray-300">
                        • Solar - Store energy and earn money
                      </p>
                      <p className="text-gray-300">
                        • EV - Charge, store and discharge
                      </p>
                      <p className="text-gray-300">
                        • BESS - Save and earn money
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* Customer Marquee Section */}
      <section className="bg-black py-8">
        <div className="overflow-hidden relative">
          <div className="flex items-center space-x-16 animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div className="flex items-center space-x-16" key={i}>
                <span className="text-white text-xl font-semibold opacity-70">
                  E.ON
                </span>
                <span className="text-white text-xl font-semibold opacity-70">
                  Fortum
                </span>
                <span className="text-white text-xl font-semibold opacity-70">
                  Varberg Energi
                </span>
                <span className="text-white text-xl font-semibold opacity-70">
                  Greenely
                </span>
                <span className="text-white text-xl font-semibold opacity-70">
                  Vattenfall
                </span>
                <span className="text-white text-xl font-semibold opacity-70">
                  Svea Solar
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-gray-900">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Utilities, supercharged.
            </h2>
            <p className="text-xl text-gray-300">
              Utilities offering new energy services (EaaS) have seen 6% revenue
              growth from new business lines, expected to double within 3 years.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <AnimatedSection animation="scaleUp" delay={100}>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  6% Revenue Growth
                </h3>
                <p className="text-gray-300">
                  Increase revenue by 6% per customer with new energy services
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scaleUp" delay={200}>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">📉</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  50% Lower Churn
                </h3>
                <p className="text-gray-300">
                  Digital-native suppliers offering bundled smart services have
                  churn rates up to 50% lower
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scaleUp" delay={300}>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  5x Faster Launch
                </h3>
                <p className="text-gray-300">
                  Launch new services 5x faster than competition with our
                  platform
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* Glowing Bar Effect */}
      <div className="w-full h-4 my-12 relative flex items-center justify-center">
        <div className="absolute w-2/3 h-4 bg-gradient-to-r from-orange-500 via-red-500 to-gray-900 blur-2xl opacity-60"></div>
        <div className="relative w-2/3 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-gray-900 rounded-full"></div>
      </div>
      {/* Line Graph Section */}
      <section className="bg-black py-20">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">
          Energy Savings Over Time
        </h3>
        <div className="w-full h-[400px] px-16">
          <Line data={chartData} options={chartOptions} />
        </div>
      </section>

      {/* Testimonial/Image Section */}
      <section className=" py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:h-[600px]">
            <div className="relative md:row-span-2 rounded-2xl overflow-hidden min-h-[300px] md:min-h-[600px]">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
                alt="Customer 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <blockquote className="text-2xl font-serif font-medium mb-4">
                  “Working with Enerzon is both commercially rewarding and
                  easy.”
                </blockquote>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
                alt="Customer 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <blockquote className="text-lg font-serif font-medium mb-2">
                  “Peak-shaving is the most appreciated feature by our C&I
                  customers.”
                </blockquote>
                <div className="text-sm font-bold">
                  KLAS KLASSON
                  <br />
                  <span className="font-normal">
                    HEAD OF SALES — VATTENFALL
                  </span>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                alt="Customer 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <blockquote className="text-lg font-serif font-medium mb-2">
                  “Enerzon's platform proves its value when every second counts
                  and grid stability is on the line.”
                </blockquote>
                <div className="text-sm font-bold">
                  TANMOY BARI
                  <br />
                  <span className="font-normal">CEO — GREENELY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
