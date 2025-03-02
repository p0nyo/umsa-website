"use client"

import React, { useState, useEffect, useCallback, useRef } from 'react'
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

  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({x:0, y:0})
  const containerRef = useRef<HTMLDivElement | null>(null);
  const handleMouseMove = (event: MouseEvent) => {
    if (containerRef.current) {
      const containerBounds = containerRef.current.getBoundingClientRect();
      
      // Adjust for scroll position by adding window.scrollX and window.scrollY
      const x = event.clientX + window.scrollX - containerBounds.left;
      const y = event.clientY + window.scrollY - containerBounds.top;
  
      setMousePosition({ x, y });
    }
  };

  useEffect(() => {
    const container = document.querySelector(".events-carousel-container-image");

    if (container) {
      container.addEventListener('mousemove', handleMouseMove as EventListener);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove as EventListener);
      }
    };
  }, []);

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
        <div className="events-carousel-viewport w-full" ref={emblaMainRef}>
            <div className="events-carousel-container w-full">
            {index.map((index) => (
                <div className="events-carousel-slide overflow-hidden" key={index}>
                    <div ref={containerRef}className="events-carousel-container-image relative p-4 events-carousel-image group">
                        <img className="w-full h-full object-cover group-hover:opacity-50 transition-opacity duration-300 rounded-md" src={slides[index]}></img>
                        <p className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-5xl font-medium left-0 bottom-0">malaysian mania</p>
                        <p className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-2xl font-semibold right-0 bottom-0">26.10.23</p>
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
