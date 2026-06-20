"use client"

import { useState, useEffect, useCallback, useRef } from 'react'

export function useCarousel<T>(items: T[], intervalMs = 5000) {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % items.length)
      }, intervalMs)
    }
  }, [items.length, intervalMs, isPaused])

  useEffect(() => {
    startTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [startTimer])

  const goTo = useCallback(
    (idx: number) => {
      setIndex(idx)
    },
    []
  )

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % items.length)
    startTimer()
  }, [items.length, startTimer])

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + items.length) % items.length)
    startTimer()
  }, [items.length, startTimer])

  const pause = useCallback(() => setIsPaused(true), [])
  const resume = useCallback(() => setIsPaused(false), [])

  const togglePause = useCallback(() => {
    setIsPaused((p) => !p)
  }, [])

  return { index, item: items[index], goTo, next, prev, pause, resume, togglePause, isPaused }
}
