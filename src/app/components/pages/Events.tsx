"use client"
import Bounded from "@/app/components/Bounded";
import EventsCarousel from "../EventsCarousel";
import { EmblaOptionsType } from 'embla-carousel'
import { useEffect, useState } from "react";

const OPTIONS: EmblaOptionsType = { loop: true };

type RequestType = {
  id: number;
  title: string;
  image: string;
  date: string;
  link: string;
};

type EventType = {
  src: string;
  name: string;
  date: string;
  link: string;
};

export default function Events() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [index, setIndex] = useState<number[]>([]);

  const getEvents = async () => {
      const response = await fetch('/api/get/events');
      const data = await response.json()

      if (data) {
        const transformedData = data.map((event: RequestType) => ({
          src: event.image, 
          name: event.title, 
          date: event.date,
          link: event.link, 
        }));
        setEvents(transformedData);
        setIndex(Array.from(Array(data.length).keys()));
      } else {
        console.log("No data received");
        setEvents([]);
      }
  };

  useEffect(() => {
    getEvents();
  }, []);



  return (
    <div className="relative bg-starImg bg-cover h-auto sm:min-h-screen" id="events">
      <div className="absolute inset-0 bg-blueOverlay opacity-65"></div>
      <Bounded
        className="relative text-white"
      >
        <div>
          <p className="text-4xl sm:text-8xl text-center sm:text-start transparent-y-gradient pb-6 sm:pb-16"> 
              <span className="font-light">
                  events by
              </span> 
              <span className="font-bold">
                  &nbsp;umsa. 
              </span>
          </p>
          <div className="flex flex-col-reverse sm:grid sm:grid-cols-6 gap-x-10 gap-y-6 sm:gap-y-0 justify-center items-center">
            <div className="sm:col-span-4">
              {events.length > 0 ? (
                <EventsCarousel index={index} slides={events} options={OPTIONS} />
              ) : (
                <p className="text-white">Loading events...</p>
              )}
            </div>
            <div className="sm:col-span-2 h-full items-start justify-start">
              <div className="flex flex-col gap-y-3 text-start">
                <p className="text-4xl font-extrabold hidden sm:block">Join our events!</p>
                <p className="flex flex-col text-center sm:text-start">
                  <span className="font-medium text-sm sm:text-lg">
                    Looking for something fun and meaningful to do? We&apos;ve got a range of exciting events lined up, perfect for all interests!
                  </span>
                  <br></br>
                  <span className="font-light text-xs sm:text-sm">
                    Whether you&apos;re into exploring diverse cultures, making new friends, or learning something new, there&apos;s always something for you here. Check out our upcoming events and find the one that suits your vibe.
                  </span>
                </p>
                <div className="flex w-full justify-center sm:justify-start">
                  <a href="https://linktr.ee/Umsanz" target="_blank">
                    <div className="flex gap-x-4 items-center justify-center bg-white rounded-md p-3 scale-hover">
                      <p className="text-umsaBlue text-xl font-bold">upcoming events!</p>
                      <img className="h-6" src="/blue-arrow.svg" alt=""></img>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <img className="absolute bottom-0 right-0 translate-y-2/3 -translate-x-2/3 w-3/4 -z-50 opacity-15" draggable="false" src="/umsa-globe.svg" alt="UMSA Globe"></img> */}
      </Bounded>
    </div>
  );
};
