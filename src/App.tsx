import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Sun, Moon, Download } from "lucide-react";
import { useRef } from "react";

export default function App() {

  // 🌗 Theme toggle
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  // 📄 Resume
  const downloadResume = () => {
    window.open(`${import.meta.env.BASE_URL}resume.pdf`, "_blank");
  };

  // 🔢 Counter Component
  const Counter = ({ value }: { value: number }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (inView) {
        let start = 0;
        const end = value;
        const duration = 1200;
        const step = end / (duration / 16);

        const timer = setInterval(() => {
          start += step;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
      }
    }, [inView]);

    return <span ref={ref}>{count}+</span>;
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1f] via-[#0f172a] to-[#020617] text-white transition-colors duration-500">

      {/* NAVBAR */}
      <div className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <h1 className="font-semibold text-lg tracking-tight">Nirmal Kumar</h1>

        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full border border-white/20 hover:bg-white hover:text-black transition"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Resume */}
          <button
            onClick={downloadResume}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-medium hover:scale-105 transition"
          >
            <Download size={14} /> Resume
          </button>
        </div>
      </div>

      {/* HERO */}
      <section className="text-center py-28 px-6">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          QA Engineering Manager <br />
          <span className="bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            Payments & Fintech
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="text-lg text-white/70 max-w-2xl mx-auto mb-8"
        >
          Driving quality strategy, automation, and DevOps excellence across
          Payment Gateway integrations and 3DS authentication for global card
          networks in the MENA region.
        </motion.p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={downloadResume}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-medium hover:scale-105 transition"
          >
            Download Resume
          </button>

          <button
            onClick={() => window.open("https://www.linkedin.com/in/rnirmalkumar/")}
            className="px-6 py-3 rounded-full border border-white/30 hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </button>
        </div>
      </section>

      {/* METRICS */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { value: 16, label: "Years Experience" },
          { value: 5, label: "DevOps Experience" },
          { value: 25, label: "Projects Delivered" },
          { value: 10, label: "Teams Led" }
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-white/5 backdrop-blur border border-white/10 rounded-2xl text-center"
          >
            <div className="text-3xl font-bold text-cyan-400">
              <Counter value={item.value} />
            </div>
            <div className="text-sm text-white/60">{item.label}</div>
          </motion.div>
        ))}
      </section>

      {/* ABOUT */}
      <section className="max-w-3xl mx-auto text-center px-6 py-16">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>
        <p className="text-white/70 leading-relaxed mb-4">
          Seasoned QA Engineering Manager with 16+ years of experience leading 
          large-scale quality initiatives in fintech and payments. Currently driving 
          Payment Gateway integrations and 3DS routing across global card networks 
          in the MENA region.
        </p>

        <p className="text-white/70 leading-relaxed">
        Expert in automation frameworks, CI/CD pipelines, and DevOps practices,
        delivering secure, scalable, and high-performance systems.
       </p>
      </section>

      {/* EXPERTISE */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold text-center mb-10">Core Expertise</h3>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Payment Gateway QA",
            "3DS Authentication",
            "Automation (Selenium, Appium)",
            "CI/CD (Jenkins, Docker)",
            "Performance Testing",
            "Fintech Security & Compliance"
          ].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-xl border border-white/10 bg-white/5 hover:scale-[1.02] transition"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <div className="text-center py-6 text-white/40 border-t border-white/10">
        © {new Date().getFullYear()} Nirmal Kumar
      </div>
    </div>
  );
}