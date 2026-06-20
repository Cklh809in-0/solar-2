"use client"

import { motion } from "framer-motion"
import { Leaf, GraduationCap, Layout, Eye } from "lucide-react"

const benefits = [
  {
    icon: Layout,
    title: "Thiết kế đơn giản",
    desc: "Cấu tạo dễ hiểu, dễ lắp ráp và phù hợp với học sinh nghiên cứu, học tập.",
    color: "from-accent to-accent",
    shadowColor: "rgba(189, 147, 249, 0.15)",
  },
  {
    icon: Leaf,
    title: "Thân thiện môi trường",
    desc: "Khai thác tối đa nguồn năng lượng tái tạo, giảm phụ thuộc vào điện lưới và nhiên liệu hóa thạch.",
    color: "from-accent to-accent",
    shadowColor: "rgba(80, 250, 123, 0.15)",
  },
  {
    icon: GraduationCap,
    title: "Giá trị giáo dục",
    desc: "Kết hợp lập trình, điện tử và năng lượng tái tạo trong cùng một mô hình.",
    color: "from-accent to-accent",
    shadowColor: "rgba(189, 147, 249, 0.15)",
  },
  {
    icon: Eye,
    title: "Mô phỏng trực quan",
    desc: "Giúp người xem dễ dàng quan sát nguyên lý cảm biến ánh sáng và cơ chế tự động điều chỉnh hướng tấm pin.",
    color: "from-accent to-accent",
    shadowColor: "rgba(241, 250, 140, 0.15)",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="relative overflow-hidden py-16 md:py-32 bg-slate-950/20">
      <div className="pointer-events-none absolute left-1/4 top-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-[#0ea5e9]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/3 -z-10 h-[400px] w-[400px] rounded-full bg-[#0ea5e9]/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-accent drop-shadow-[0_0_14px_rgba(139,233,253,0.3)]">
            Lợi ích 
          </span>
          
          <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-white md:text-5xl lg:text-6xl bg-gradient-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Vì sao Solar Tracker <br />
            <span className="bg-gradient-to-r from-accent via-accent to-accent bg-clip-text text-transparent">
              khác biệt & vượt trội?
            </span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ 
                y: -8,
                scale: 1.015,
                boxShadow: `0 20px 40px ${b.shadowColor}, inset 0 1px 0 0 rgba(255,255,255,0.1)`,
              }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40 p-8 backdrop-blur-md transition-all duration-300 ease-out hover:border-white/15"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div>
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800/80 border border-white/5 shadow-inner transition-transform duration-500 group-hover:rotate-[6deg]">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${b.color} opacity-0 blur-lg transition-all duration-500 group-hover:opacity-40`} />
                  <b.icon className={`h-7 w-7 bg-gradient-to-br ${b.color} bg-clip-text text-white transition-transform duration-300 group-hover:scale-110`} />
                </div>

                <h3 className="text-xl font-bold text-white tracking-wide transition-colors duration-300 group-hover:text-cyan-300">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                  {b.desc}
                </p>
              </div>

              <div className={`absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r ${b.color} transform scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}