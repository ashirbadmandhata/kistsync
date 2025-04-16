"use client"

import { useEffect, useState } from "react"
import SplashScreen from "./SplashScreen"

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 2000) // splash duration in ms

    return () => clearTimeout(timer)
  }, [])

  if (!isReady) return <SplashScreen />

  return <>{children}</>
}
