"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLenis } from "lenis/react"
import { Sun, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Giới thiệu", href: "#top" },
  { label: "Vấn đề", href: "#problem" },
  { label: "Giải pháp", href: "#solution" },
  { label: "Lợi ích", href: "#benefits" },
  { label: "Công nghệ", href: "#tech" },
  { label: "Hoạt động", href: "#how" },
  { label: "Thư viện", href: "#gallery" },
  { label: "Đội ngũ", href: "#team" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("#top")
  const lenis = useLenis()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions)

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el && lenis) {
      lenis.scrollTo(el as HTMLElement, { offset: -80 })
      setActiveSection(href)
    }
    setOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-4 z-50 mx-auto max-w-[90rem] px-4"
    >
      <div
  className={`mx-auto flex w-full items-center justify-between rounded-full border px-6 py-2.5 transition-all duration-500 ${
    scrolled
      ? "border-white/10 bg-[#44475a]/80 backdrop-blur-xl shadow-2xl"
      : "border-white/10 bg-[#44475a]/40 backdrop-blur-md"
  }`}
>
  <div className="flex items-center gap-6"> 
    <button onClick={() => scrollTo("#top")} className="flex items-center gap-2 group">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-accent transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(14,165,233,0.8)]">
        <Sun className="h-4 w-4 fill-current" />
      </span>
      <span className="text-sm font-bold text-white whitespace-nowrap">
        Solar
      </span>
    </button>
  </div>

  <nav className="hidden items-center gap-1 md:flex">
    {navLinks.map((link) => {
      const isActive = activeSection === link.href
      return (
        <button
          key={link.href}
          onClick={() => scrollTo(link.href)}
          className={`relative rounded-full px-3 py-1.5 text-xs font-bold text-white transition-all ${
            isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
          }`}
        >
          {isActive && (
            <motion.div
              layoutId="navCapsule"
              className="absolute inset-0 -z-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/20"
            />
          )}
          {link.label}
        </button>
      )
    })}
  </nav>

  <button onClick={() => setOpen(!open)} className="md:hidden text-white">
    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
  </button>
</div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-2 rounded-2xl bg-[#44475a]/95 p-3 md:hidden">
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => scrollTo(link.href)} className="block w-full py-3 text-left text-sm font-bold text-white min-h-[44px]">
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}