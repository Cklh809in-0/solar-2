"use client"

import { motion } from "framer-motion"

const tech = [
  { 
    name: "Arduino Uno", 
    desc: "Bộ vi điều khiển trung tâm xử lý logic và điều khiển toàn bộ hệ thống cảm biến, động cơ.",
    imgSrc: "/boxuly.png"
  },
  { 
    name: "4 cảm biến LDR", 
    desc: "Đo cường độ ánh sáng theo 4 hướng khác nhau giúp xác định tọa độ mặt trời một cách chính xác.",
    imgSrc: "/ldr.png"
  },
  { 
    name: "2 động cơ Servo", 
    desc: "Xoay tấm pin theo 2 trục (ngang/dọc) tối ưu góc đón ánh sáng dựa trên dữ liệu vi điều khiển.",
    imgSrc: "/servo.png"
  },
  { 
    name: "Tấm pin mini", 
    desc: "Chuyển hóa quang năng từ ánh sáng Mặt Trời thành điện năng cung cấp hiệu quả cho hệ thống.",
    imgSrc: "/tamnangluong.png"
  },
  { 
    name: "2 Pin 18650", 
    desc: "Lưu trữ điện năng năng lượng mặt trời, có thể nạp xả nhiều lần đảm bảo duy trì nguồn điện ổn định.",
    imgSrc: "/pin.png"
  },
  { 
    name: "Module TP5100", 
    desc: "Mạch quản lý sạc pin lithium chuyên dụng an toàn với hiệu suất chuyển đổi dòng điện cao.",
    imgSrc: "/sac.png"
  },
]

export function TechnologiesSection() {
  return (
    <section id="tech" className="relative py-16 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-[#0ea5e9]/5 blur-[160px]" />
      
      <div className="mx-auto max-w-7xl px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-bold uppercase tracking-[4px] text-accent">Công nghệ</span>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-white md:text-5xl bg-gradient-to-r from-white via-[#0ea5e9]/30 to-[#6272a4] bg-clip-text text-transparent">
            Phần cứng đứng sau hệ thống
          </h2>
          <p className="mt-4 text-pretty text-sm md:text-base leading-relaxed text-muted-text max-w-2xl">
            Mỗi linh kiện được lựa chọn để đảm bảo độ tin cậy, chi phí hợp lý và dễ dàng tái tạo cho mục đích học tập.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {tech.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.45, delay: (i % 2) * 0.1 }}
              className="group relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8 rounded-3xl p-[2px] min-h-[200px] sm:min-h-[260px] overflow-hidden transition-all duration-300 select-none bg-[#44475a]/40"
            >
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none overflow-hidden rounded-3xl">
                <div className="absolute top-1/2 left-1/2 h-[300%] w-[300%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(14,165,233,0.15)_0%,transparent_60%)]" />
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 rounded-[22px] bg-black/90 backdrop-blur-xl p-5 sm:p-8 md:p-10 w-full h-full min-h-[196px] sm:min-h-[256px]">
                
                <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100 bg-gradient-to-br from-[#0ea5e9]/10 via-[#0ea5e9]/5 to-transparent rounded-[22px] pointer-events-none" />

                <div className="relative aspect-square w-24 sm:w-32 shrink-0 overflow-hidden rounded-2xl bg-black/50">
                  <img 
                    src={t.imgSrc} 
                    alt={t.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex-1 text-center sm:text-left relative z-20">
                  <h3 className="text-xl font-bold text-white tracking-tight transition-colors group-hover:text-accent">
                    {t.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-text group-hover:text-[#f8f8f2] transition-colors">
                    {t.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}