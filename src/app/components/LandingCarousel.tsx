"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const LandingCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, speed: 0.2 })
  ])

  return (
    <div className="landing-carousel text-white w-full px-96 transparent-x-gradient opacity-50 pointer-events-none">
      <div className="landing-viewport pointer-events-none" ref={emblaRef}>
        <div className="landing-container pointer-events-none">
          {slides.map((imagePath) => (
            <div className="landing-slide" key={imagePath}>
              <div className="landing-slide-image h-64 w-full overflow-hidden rounded-lg mx-2">
                <img className="object-cover w-full h-full mx-2 rounded-lg" src={imagePath}></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LandingCarousel
