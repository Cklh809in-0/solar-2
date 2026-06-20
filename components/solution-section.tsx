"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const points = [
  "4 cảm biến LDR phát hiện hướng có ánh sáng mạnh nhất",
  "2 động cơ servo xoay tấm pin theo 2 trục linh hoạt",
  "Arduino xử lý dữ liệu và điều khiển theo thời gian thực",
  "Quạt mini tích hợp đèn LED sử dụng nguồn điện chung để minh họa khả năng cung cấp điện cho các thiết bị nhỏ.",
]

export function SolutionSection() {
  return (
    <section id="solution" className="relative py-16 md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[130px]" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5">
            <img
              src="/gallery-prototype.png"
              alt="Mô hình solar tracker với servo và cảm biến"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="order-1 lg:order-2"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-primary">Giải pháp</span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Một hệ thống tự động xoay theo Mặt Trời
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Solar Tracker AI liên tục đo cường độ ánh sáng từ 4 hướng và tự động điều chỉnh góc tấm pin để luôn hướng về
            nguồn sáng mạnh nhất, tối ưu hóa lượng điện thu được.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="brand-gradient-bg mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[#282a36]">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-foreground/90">{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
