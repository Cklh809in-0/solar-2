"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-16 md:pt-40 md:pb-28">
      <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-[#0ea5e9]/15 blur-[150px]" />
      <div className="pointer-events-none absolute top-1/4 right-1/4 h-[420px] w-[420px] rounded-full bg-[#0ea5e9]/8 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -left-32 h-[420px] w-[420px] rounded-full bg-[#0ea5e9]/8 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 md:gap-12 px-5 md:px-8 lg:grid-cols-2">
        <div>


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-2xl font-bold leading-[1.2] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl will-change-transform"
          >
            Mô hình cảm biến
            <br />
            ánh sáng
            <br />
            <span className="text-white">
              Mặt Trời
            </span>
            <br />
            <span className="text-white">
              thông minh
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-pretty text-base md:text-lg leading-relaxed text-muted-foreground"
          >
            Mô hình cảm biến ánh sáng Mặt Trời thông minh được xây dựng nhằm minh họa nguyên lý tận dụng năng lượng mặt trời hiệu quả hơn. Hệ thống sử dụng cảm biến ánh sáng kết hợp với Arduino để tự động điều chỉnh tấm pin theo hướng có ánh sáng mạnh nhất, góp phần nâng cao hiệu suất hấp thụ năng lượng.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#how"
              className="brand-gradient-bg rounded-full px-7 py-3.5 text-sm font-semibold text-[#282a36] transition-transform hover:scale-105"
            >
              Nguyên lý hoạt động
            </a>
            <a
              href="#team"
              className="glass rounded-full px-7 py-3.5 text-sm font-medium text-foreground transition-transform hover:scale-105"
            >
              Đội ngũ
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative will-change-transform"
        >
          <div className="absolute inset-0 -z-10 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,transparent,#0ea5e9_40%,#0ea5e9_60%,transparent)] opacity-30" />
            <div className="animate-float relative mx-auto aspect-square w-full max-w-[30rem] overflow-hidden rounded-2xl border border-white/5">
            <img
              src="/solar-tracker-hero.png"
              alt="Mô hình cảm biến ánh sáng mặt trời thông minh"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#problem"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 1.8, repeat: Number.POSITIVE_INFINITY } }}
        className="mx-auto mt-16 flex w-fit flex-col items-center gap-2 text-xs text-muted-foreground"
      >
        Cuộn để khám phá
        <ArrowDown className="h-4 w-4" />
      </motion.a>
    </section>
  )
}