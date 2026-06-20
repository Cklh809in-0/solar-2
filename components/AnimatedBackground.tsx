"use client"

import { useMemo, useState, useEffect, type FC } from 'react'
import { motion } from 'framer-motion'

const StarField: FC = () => {
  const stars = useMemo(
    () =>
      Array.from({ length: 200 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 0.5,
        delay: Math.random() * 8,
        duration: Math.random() * 4 + 2,
        opacity: Math.random() * 0.8 + 0.2,
      })),
    [],
  )

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((s) => (
        <motion.div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
          }}
          animate={{
            opacity: [s.opacity, s.opacity * 0.1, s.opacity],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

const Nebula: FC = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <motion.div
      className="absolute top-[5%] left-[0%] w-[900px] h-[900px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(14,165,233,0.25) 0%, rgba(14,165,233,0.05) 40%, transparent 70%)',
        filter: 'blur(100px)',
      }}
      animate={{ x: [0, 150, 0], y: [0, -80, 0] }}
      transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-[10%] right-[5%] w-[700px] h-[700px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(14,165,233,0.18) 0%, rgba(14,165,233,0.03) 40%, transparent 70%)',
        filter: 'blur(100px)',
      }}
      animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
      transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 60%)',
        filter: 'blur(100px)',
      }}
      animate={{ scale: [1, 1.5, 1], rotate: [0, 360] }}
      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
    />
  </div>
)

const ShootingStar: FC<{ delay: number; top: number; duration: number }> = ({
  delay, top, duration,
}) => (
  <motion.div
    className="absolute w-[2px] h-[2px] rounded-full"
    style={{
      top: `${top}%`,
      background:
        'linear-gradient(to right, transparent, rgba(14,165,233,0.9), rgba(14,165,233,0))',
      boxShadow: '0 0 6px 2px rgba(14,165,233,0.3)',
    }}
    animate={{
      left: ['-5vw', '105vw'],
      opacity: [0, 1, 1, 0],
      width: [2, 80, 120, 150],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'linear',
      repeatDelay: 8,
    }}
  />
)

const CosmicDust: FC = () => {
  const dust = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 0.5,
        delay: Math.random() * 10,
        duration: Math.random() * 25 + 20,
        driftX: (Math.random() - 0.5) * 80,
        driftY: (Math.random() - 0.5) * 60,
      })),
    [],
  )

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {dust.map((d) => (
        <motion.div
          key={d.id}
          className="absolute rounded-full bg-[#0ea5e9]/20"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
          }}
          animate={{
            x: [0, d.driftX, 0],
            y: [0, d.driftY, 0],
            opacity: [0.05, 0.4, 0.05],
          }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

const OrbitalRings: FC = () => (
  <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
    {[300, 450, 600].map((size, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border border-[#0ea5e9]/15"
        style={{ width: size, height: size }}
        animate={{
          rotate: [0, i % 2 === 0 ? 360 : -360],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 20 + i * 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div
          className="w-2 h-2 rounded-full bg-[#0ea5e9]/50 absolute"
          style={{ top: '0', left: '50%', transform: 'translate(-50%, -50%)' }}
        />
      </motion.div>
    ))}
  </div>
)

const FloatingGrid: FC = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.04]">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }}
    />
  </div>
)

export const AnimatedBackground: FC = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
  return (
    <>
      <Nebula />
      <StarField />
      <FloatingGrid />
      <OrbitalRings />
      <CosmicDust />
      <ShootingStar delay={0} top={15} duration={1.8} />
      <ShootingStar delay={8} top={45} duration={2.2} />
      <ShootingStar delay={16} top={70} duration={1.5} />
      <ShootingStar delay={25} top={30} duration={2} />
      <ShootingStar delay={34} top={85} duration={1.3} />
      <ShootingStar delay={42} top={55} duration={2.5} />
    </>
  )
}
