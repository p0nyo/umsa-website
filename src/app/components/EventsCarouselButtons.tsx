import React from 'react'

type PropType = {
  selected: boolean
  index: number
  slides: string
  onClick: () => void
}

export const EventsCarouselButton: React.FC<PropType> = (props) => {
  const { slides, selected, index, onClick } = props

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
        <img className="rounded-md" src={slides}></img>
      </button>
    </div>
  )
}
