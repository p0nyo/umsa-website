"use client"

import React, { useState, useEffect, useCallback } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { EventsCarouselButton } from './EventsCarouselButtons'
import AutoScroll from 'embla-carousel-auto-scroll'

type PropType = {
  slides: string[]
  index: number[]
  options?: EmblaOptionsType
}

const EventsCarousel: React.FC<PropType> = (props) => {
  const { slides, options, index } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true
  })

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()

    emblaMainApi.on('select', onSelect).on('reInit', onSelect)
  }, [emblaMainApi, onSelect])

  return (
    <div className="events-carousel text-white">
        <div className="events-carousel-viewport rounded-lg w-full" ref={emblaMainRef}>
            <div className="events-carousel-container w-full">
            {index.map((index) => (
                <div className="events-carousel-slide overflow-hidden" key={index}>
                    <div className="events-carousel-image">
                        <img className="w-full h-full object-cover" src={slides[index]}></img>
                    </div>
                </div>
            ))}
            </div>
        </div>

        <div className="events-buttons">
            <div className="events-buttons-viewport" ref={emblaThumbsRef}>
                <div className="events-buttons-container">
                    {index.map((index) => (
                    <EventsCarouselButton
                        slides={slides[index]}
                        key={index}
                        onClick={() => onThumbClick(index)}
                        selected={index === selectedIndex}
                        index={index}
                    />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default EventsCarousel
