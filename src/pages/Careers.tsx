import { Button } from "@/components/ui/button";
import { useRef } from "react";

const Careers = () => {
  const fileInputRef = useRef(null);

  const handleResumeClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("File uploaded:", file.name);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">🚀 Join Our Team</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Help us shape the future of energy. We're building innovative
            solutions and need driven individuals to join our journey.
          </p>
        </header>

        <section className="mb-20 max-w-4xl mx-auto text-left">
          <h2 className="text-4xl font-extrabold mb-6 text-orange-400">
            Why Work With Us
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed space-y-4">
            We’re more than just a company — we’re a mission-driven team
            committed to building the future of energy and sustainability.
            <br />
            <br />
            At our core, we value trust, collaboration, and continuous growth.
            We foster an open, inclusive environment where every voice is heard
            and every idea has impact. Whether you’re remote or on-site, we
            prioritize flexibility, work-life balance, and creating space for
            innovation to thrive.
            <br />
            <br />
            Joining us means you’ll receive competitive compensation and equity,
            access to comprehensive health and wellness benefits, and
            opportunities for professional development. You’ll work with
            cutting-edge technology alongside passionate people who care deeply
            about their craft — and the planet.
            <br />
            <br />
            If you're excited about making a real impact, growing your career,
            and working in a culture that supports you personally and
            professionally, we’d love to meet you.
          </p>
        </section>

        <section className="bg-gray-900 p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center">
            📌 Open Positions
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "Senior AI Engineer",
                desc: "Lead the development of machine learning algorithms for energy optimization.",
                location: "Full-time • Remote • San Francisco, CA",
              },
              {
                title: "Energy Systems Analyst",
                desc: "Analyze energy data to improve our platform's insights and performance.",
                location: "Full-time • Hybrid • Austin, TX",
              },
              {
                title: "Product Manager",
                desc: "Own the product strategy and roadmap of our platform.",
                location: "Full-time • Remote • New York, NY",
              },
            ].map((role, index) => (
              <div
                key={index}
                className="border-l-4 border-orange-500 pl-5 py-4 flex justify-between items-center gap-6 flex-wrap md:flex-nowrap"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-1">{role.title}</h3>
                  <p className="text-gray-400 mb-1">{role.desc}</p>
                  <span className="text-sm text-orange-400">
                    {role.location}
                  </span>
                </div>

                <Button
                  onClick={handleResumeClick}
                  variant="outline"
                  className=" text-orange-400 bg-transparent border-orange-400 px-5 py-2 rounded-full font-normal cursor-pointer hover:bg-transparent hover:text-orange-400"
                >
                  Apply
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              Don't see the perfect role? We're always open to great talent.
            </p>
            <button
              onClick={handleResumeClick}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:from-orange-600 hover:to-red-600 transition"
            >
              📎 Send Us Your Resume
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf,.doc,.docx"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;
