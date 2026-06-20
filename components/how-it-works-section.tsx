"use client";
import { motion } from "framer-motion";
import { Eye, Cpu, RefreshCw, Sun, Battery, Fan, Zap, ArrowRight, ArrowDown } from "lucide-react";

const steps = [
  { id: "01", icon: Eye, title: "Cảm biến LDR", desc: "Đo cường độ ánh sáng từ nhiều hướng khác nhau." },
  { id: "02", icon: Cpu, title: "Arduino Uno", desc: "Xử lý dữ liệu từ cảm biến và đưa ra quyết định." },
  { id: "03", icon: RefreshCw, title: "Servo Motor", desc: "Điều chỉnh góc quay của tấm pin mặt trời." },
  { id: "04", icon: Sun, title: "Tấm pin hấp thụ", desc: "Tự động hướng về nơi có ánh sáng mạnh nhất." },
  { id: "05", icon: Zap, title: "Module TP5100", desc: "Mạch sạc pin lithium chuyên dụng, chuyển đổi dòng an toàn." },
  { id: "06", icon: Battery, title: "Pin 18650", desc: "Lưu trữ điện năng, duy trì nguồn ổn định cho hệ thống." },
  { id: "07", icon: Fan, title: "Thiết bị hoạt động", desc: "Quạt mini và đèn LED được cấp nguồn từ pin." },
];

export function HowItWorksSection() {
  return (
    <section id="how" className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <p className="uppercase tracking-[0.3em] text-accent text-xs font-bold mb-3">HOẠT ĐỘNG</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Quy trình hoạt động</h2>
          <p className="max-w-2xl text-lg text-gray-400">Hệ thống tự động theo dõi nguồn sáng, xoay tấm pin và tạo ra điện năng cho các thiết bị.</p>
        </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-10 md:gap-y-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative rounded-2xl border border-accent/10 bg-[#1e2030] p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.08)_0%,transparent_70%)] pointer-events-none" />

                <div className="absolute top-4 right-4 text-4xl font-black text-accent/20 select-none transition-colors duration-300 group-hover:text-accent/40">{step.id}</div>

                <div className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center bg-accent/10 border border-accent/20 mb-4 transition-all duration-300 group-hover:bg-accent group-hover:text-[#282a36] group-hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                  <Icon className="w-6 h-6 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:text-[#282a36]" />
                </div>

                <h3 className="relative z-10 text-lg font-bold text-white mb-2 transition-colors duration-300 group-hover:text-accent">{step.title}</h3>
                <p className="relative z-10 text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">{step.desc}</p>

                {index === 0 && <ArrowRight className="hidden md:block absolute top-1/2 -right-12 -translate-y-1/2 w-6 h-6 text-accent" />}
                {index === 1 && <ArrowRight className="hidden md:block absolute top-1/2 -right-12 -translate-y-1/2 w-6 h-6 text-accent" />}

                {index === 3 && <ArrowRight className="hidden md:block absolute top-1/2 -right-12 -translate-y-1/2 w-6 h-6 text-accent" />}
                {index === 4 && <ArrowRight className="hidden md:block absolute top-1/2 -right-12 -translate-y-1/2 w-6 h-6 text-accent" />}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}