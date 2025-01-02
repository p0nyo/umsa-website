"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: true, speed: 0.2 })
  ])

  return (
    <div className="embla text-white w-full px-96 transparent-x-gradient opacity-50">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((imagePath) => (
            <div className="embla__slide" key={imagePath}>
              <div className="embla__slide__number overflow-hidden rounded-lg">
                <img src={imagePath}></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
