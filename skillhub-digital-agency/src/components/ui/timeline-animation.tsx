'use client'

import React, { useEffect, useState } from 'react'
import { motion, useInView, Variants } from 'framer-motion'

// ─────────────────────────────────────────────────────────────────────────────
// TimelineContent
// Wraps any element/tag and reveals it with a custom variant once its
// timelineRef parent scrolls into view. animationNum staggers the delay.
// ─────────────────────────────────────────────────────────────────────────────

interface TimelineContentProps {
  as?: React.ElementType
  children: React.ReactNode
  animationNum: number
  timelineRef: React.RefObject<HTMLElement>
  customVariants: Variants
  className?: string
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
}

export function TimelineContent({
  as: Component = 'div',
  children,
  animationNum,
  timelineRef,
  customVariants,
  className,
  ...rest
}: TimelineContentProps) {
  const isInView = useInView(timelineRef, { once: true, amount: 0.2 })
  const MotionComponent = motion(Component as any)

  return (
    <MotionComponent
      custom={animationNum}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={customVariants}
      className={className}
      {...rest}
    >
      {children}
    </MotionComponent>
  )
}