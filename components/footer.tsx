"use client"

import { Sun } from "lucide-react"

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-white/10 py-8"
    >
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-[#282a36]">
              <Sun className="h-4 w-4" />
            </span>
            <span className="text-sm font-bold text-white">
              Solar
            </span>
          </div>

          <p className="flex-1 text-center text-xs text-muted-text">
            © 2026 cklh809in && hn9x
          </p>

          <p className="text-xs text-muted-text text-right">
            Trường THCS Hòa Tân, xã Tân Nhuận Đông, tỉnh Đồng Tháp
          </p>
          
        </div>
      </div>
    </footer>
  )
}