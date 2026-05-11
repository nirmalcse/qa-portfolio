import { useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  const downloadResume = () => {
    window.open(`${import.meta.env.BASE_URL}resume.pdf`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1f] via-[#0f172a] to-[#020617] text-white">

      {/* NAVBAR */}
      <div className="flex justify-between items-center px-6 py-5 border-b border-white/10 backdrop-blur">
        <h1 className="text-xl font-semibold tracking-tight">Nirmal Kumar</h1>

        <button 
          onClick={downloadResume}
          className="px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-medium hover:scale-105 transition"
        >
          Resume
        </button>
      </div>

      {/* HERO */}
      <section className="text-center py-28 px-6">
        <motion.h2 
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          QA Manager <br />
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            Payments & Fintech
          </span>
        </motion.h2>

        <motion.p 
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="text-lg text-white/70 max-w-2xl mx-auto mb-8"
        >
          Seasoned QA leader with 16+ years of experience driving quality strategy
          for Payment Gateway integrations and 3DS authentication across global
          card networks in the MENA region. Expert in automation, CI/CD, and secure fintech systems.
        </motion.p>

        <motion.div 
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <button 
            onClick={downloadResume}
            className="bg-gradient-to-r from-cyan-400 to-indigo-500 text-black px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Download Resume
          </button>

          <button 
            onClick={() => window.open('https://www.linkedin.com/in/rnirmalkumar/')}
            className="border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </button>
        </motion.div>
      </section>

      {/* METRICS */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { value: "16+", label: "Years QA Experience" },
          { value: "5+", label: "Years DevOps Experience" },
          { value: "MENA", label: "Region Expertise" },
          { value: "99.9%", label: "Transaction Reliability" }
        ].map((item, i) => (
          <motion.div 
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center backdrop-blur"
          >
            <div className="text-3xl font-semibold text-cyan-400">{item.value}</div>
            <div className="text-sm text-white/60">{item.label}</div>
          </motion.div>
        ))}
      </section>

      {/* DOMAIN EXPERTISE */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold mb-8 text-center">Domain Expertise</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Payment Gateway Integrations",
              desc: "End-to-end validation of authorization, capture, refund, and settlement flows"
            },
            {
              title: "3DS Authentication",
              desc: "Hands-on experience with Visa, Mastercard & regional 3DS routing"
            },
            {
              title: "MENA Payments",
              desc: "Deep expertise in regional payment ecosystems and cross-border flows"
            },
            {
              title: "Secure Transactions",
              desc: "PCI compliance, fraud detection, and secure payment validation"
            }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur hover:scale-[1.02] transition"
            >
              <h4 className="text-xl font-semibold mb-2 text-cyan-400">{item.title}</h4>
              <p className="text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT (FIXED) */}
      <section className="max-w-3xl mx-auto text-center px-6 py-16 space-y-4">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>

        <p className="text-white/70 leading-relaxed">
          Seasoned QA Engineering Manager with extensive experience leading
          cross-functional QA and implementation teams in the payments domain.
          Currently driving quality strategy for Payment Gateway integrations
          and 3DS routing across domestic and international card networks in
          the MENA region.
        </p>

        <p className="text-white/70 leading-relaxed">
          Skilled in defining test governance, automation frameworks, and
          end-to-end validation for complex payment ecosystems. With over 5 years
          of DevOps experience, I specialize in CI/CD pipeline optimization and
          delivering secure, scalable, high-quality payment experiences.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold mb-10 text-center">Key Achievements</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Payment Gateway QA",
              desc: "Led QA for complete payment lifecycle including authorization, capture & refunds"
            },
            {
              title: "3DS Routing",
              desc: "Validated secure authentication flows across global card networks"
            },
            {
              title: "CI/CD Automation",
              desc: "Built pipelines using Jenkins & Docker improving release efficiency"
            },
            {
              title: "Automation Framework",
              desc: "Developed Selenium & Appium frameworks for fintech platforms"
            }
          ].map((proj, i) => (
            <motion.div 
              key={proj.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur hover:scale-[1.02] transition"
            >
              <h4 className="text-xl font-semibold mb-2 text-cyan-400">{proj.title}</h4>
              <p className="text-white/70">{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <div className="text-center p-6 text-sm text-white/40 border-t border-white/10">
        © {new Date().getFullYear()} Nirmal Kumar
      </div>

    </div>
  );
}