"use client"

import { motion } from "framer-motion"

const team = [
  { 
    name: "Nguyễn Hà Gia Hưng", 
    role: "Lắp ráp - Thiết kế web - Thuyết minh",
    avatar: "/images/hung.jpg" 
  },
  { 
    name: "Đinh Hoàng Khôi", 
    role: "Lập trình - Thiết kế web - Ý tưởng",
    avatar: "/images/khoi.jpg" 
  },
  { 
    name: "Nguyễn Huỳnh Tuấn Kiệt", 
    role: "Hỗ trợ kỹ thuật",
    avatar: "/images/kiet.jpg" 
  },
  { 
    name: "Nguyễn Huy Thông", 
    role: "Thuyết minh",
    avatar: "/images/thong.jpg" 
  },
]

export function TeamSection() {
  return (
    <section id="team" className="relative py-16 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute right-1/4 top-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-[#0ea5e9]/5 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/4 bottom-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-[#0ea5e9]/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-muted-text drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]">
            Đội ngũ
          </span>
          <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-white md:text-5xl bg-gradient-to-b from-white to-[#6272a4] bg-clip-text text-transparent">
            Những người thực hiện dự án
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-black/60 p-5 sm:p-8 text-center backdrop-blur-md transition-all duration-300 ease-out hover:border-white/40"
    >
      <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-md transition-all duration-500 group-hover:rotate-3 group-hover:scale-105 group-hover:border-white/30">
        {member.avatar ? (
          <img
            src={member.avatar}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#44475a] to-[#282a36] text-muted-text font-black text-2xl group-hover:from-[#6272a4] group-hover:to-[#44475a] transition-colors duration-300">
            {member.name.split(" ").pop()?.charAt(0)}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <h3 className="mt-6 text-lg font-bold text-white tracking-wide transition-colors duration-300 group-hover:text-slate-200">
        {member.name}
      </h3>
      
      <p className="mt-1.5 text-xs font-medium text-muted-text tracking-wider transition-colors duration-300 group-hover:text-[#f8f8f2]">
        {member.role}
      </p>

    </motion.div>
  )
}