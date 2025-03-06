import React from 'react'

type PropType = {
  selected: boolean
  slides: string
  onClick: () => void
}

export const EventsCarouselButton: React.FC<PropType> = (props) => {
  const { slides, selected, onClick } = props

  return (
    <div
      className={'events-buttons-slide'.concat(
        selected ? ' events-buttons-slide--selected' : ''
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="events-buttons-slide-number italic transform opacity-50 hover:opacity-100 transition-opacity duration-200"
      >
        <img className="rounded-sm w-full h-2/3 object-cover" src={slides}></img>
      </button>
    </div>
  )
}
