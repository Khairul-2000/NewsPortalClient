"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="relative h-16 w-16">
          <Image
            src="/logo.png"
            alt="StreamLine Logo"
            width={64}
            height={64}
            className="rounded animate-pulse"
          />
          <div className="absolute inset-0 border-t-2 border-primary rounded-full animate-spin"></div>
        </div>
        <div className="text-xl font-normal">News Portal</div>
        <div className="flex gap-2 mt-2">
          <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  )
}
