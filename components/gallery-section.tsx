"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { useCarousel } from "@/hooks/useCarousel"
import { productImages } from "@/data/content"

const VIDEO_SRC = "/videos/video%20thuyet%20minh%20moi.mp4"

function DotNav({
  count,
  active,
  onClick,
}: {
  count: number
  active: number
  onClick: (i: number) => void
}) {
  return (
    <div className="flex gap-2" role="tablist">
      {Array.from({ length: count }, (_, i) => (
        <motion.button
          key={i}
          role="tab"
          aria-selected={i === active}
          onClick={() => onClick(i)}
          className="h-2 rounded-full transition-all"
          animate={{
            width: i === active ? 32 : 8,
            backgroundColor: i === active ? "#0ea5e9" : "#6272a4",
          }}
          whileHover={{ scale: 1.2 }}
        />
      ))}
    </div>
  )
}

export function GallerySection() {
  const { index, item, goTo, next, prev, togglePause, isPaused } =
    useCarousel(productImages, 5000)

  return (
    <section id="gallery" className="relative py-16 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute left-1/3 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-[#44475a]/20 blur-[130px]" />

      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-muted-text">
            Thư viện
          </span>
          <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-white md:text-5xl bg-gradient-to-b from-white to-[#6272a4] bg-clip-text text-transparent">
            Hình ảnh & Video thực tế
          </h2>
        </motion.div>

        <motion.div
          className="relative rounded-2xl border border-white/5 bg-black/60 p-3 sm:p-5 overflow-hidden backdrop-blur-md"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="rounded-xl overflow-hidden border border-white/5 relative bg-[#1e1f29] select-none">
            <motion.img
                key={index}
                src={item.url}
                alt={item.title}
                className="w-full aspect-video object-cover pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
                draggable={false}
              />

            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-white/70">{item.desc}</p>
            </motion.div>

            <button
              onClick={togglePause}
              className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
              aria-label={isPaused ? "Tiếp tục" : "Tạm dừng"}
            >
              {isPaused ? <Play size={16} /> : <Pause size={16} />}
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <motion.button
              onClick={prev}
              className="p-3 sm:p-2 rounded-lg bg-[#44475a] hover:bg-[#6272a4] text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Ảnh trước"
            >
              <ChevronLeft size={24} />
            </motion.button>

            <DotNav count={productImages.length} active={index} onClick={goTo} />

            <motion.button
              onClick={next}
              className="p-3 sm:p-2 rounded-lg bg-[#44475a] hover:bg-[#6272a4] text-white transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Ảnh sau"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </motion.div>

        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="group relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/5 bg-black/50 p-2.5 backdrop-blur-md transition-all duration-300 ease-out hover:border-white/40"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
              <video
                src={VIDEO_SRC}
                controls
                className="w-full h-full"
              />
              <div className="pointer-events-none absolute top-5 left-5 flex items-center gap-2 rounded-md bg-black/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md border border-white/10 shadow-lg">
                <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                VIDEO MÔ PHỎNG VẬN HÀNH DỰ ÁN
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
