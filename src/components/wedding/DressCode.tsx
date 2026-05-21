import { motion } from "framer-motion";

const palette = [
  { name: "Blush", hex: "#F4D4D4" },
  { name: "Champagne", hex: "#E8D5B7" },
  { name: "Dusty Rose", hex: "#C9A0A0" },
  { name: "Ivory", hex: "#F8F1E5" },
  { name: "Mauve", hex: "#B89BAE" },
  { name: "Sage", hex: "#B8C5A6" },
];

export function DressCode() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-16 md:grid-cols-[1fr_1.4fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-rose-deep">Attire</p>
            <h2 className="mt-4 text-5xl text-primary md:text-6xl">
              Dress in <span className="font-script text-rose">poetry</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Garden-formal. Flowing fabrics, soft tones, romantic silhouettes.
              Avoid white and black — let the palette guide you.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-6 md:gap-8">
            {palette.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex flex-col items-center"
              >
                <div
                  className="glow-hover h-24 w-24 rounded-full shadow-[var(--shadow-soft)] ring-1 ring-white/60 md:h-32 md:w-32"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, white, ${c.hex} 70%)`,
                  }}
                />
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-rose-deep">
                  {c.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
