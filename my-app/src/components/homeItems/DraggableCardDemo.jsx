import React from "react";
import { Link } from "react-router-dom";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

import car1 from "../../img/car1.jpg";
import nature1 from "../../img/nature1.jpg";

export function DraggableCardDemo() {
  const items = [
    {
      title: "Cars",
      image: car1,
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Nature",
      image: nature1,
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Portrait",
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Japan",
      image:
        "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    // {
    //   title: "Norway",
    //   image:
    //     "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3",
    //   className: "absolute top-20 right-[35%] rotate-[2deg]",
    // },
    // {
    //   title: "New Zealand",
    //   image:
    //     "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3",
    //   className: "absolute top-24 left-[45%] rotate-[-7deg]",
    // },
    {
      title: "You can drag me!",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <DraggableCardContainer
      className="
        relative flex w-full items-center justify-center overflow-clip
        h-[80vh] md:h-screen   /* <— fills screen on desktop, a bit shorter on mobile */
      "
    >
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-xl font-black text-white md:text-4xl">
        Click the titles to explore the gallery.
      </p>

      {items.map((item, index) => {
        const slug = item.title.toLowerCase().replace(/\s+/g, "-");

        return (
          <DraggableCardBody
            key={slug + index}
            className={`
              ${item.className}
              shadow-xl shadow-black/30 rounded-xl
              p-2 sm:p-4
              h-[300px] sm:h-[380px]
              w-[200px] sm:w-[300px]
            `}
          >
            <img
              src={item.image}
              alt={item.title}
              className="
                pointer-events-none relative z-10
                rounded-xl object-cover
                h-[180px] w-full
                sm:h-[250px]
              "
            />

            <h3 className="mt-2 text-center text-lg sm:text-2xl font-bold">
              <Link
                to={`/gallery/${slug}`}
                className="!text-black dark:!text-black hover:!text-white hover:underline transition"
              >
                {item.title}
              </Link>
            </h3>
          </DraggableCardBody>
        );
      })}
    </DraggableCardContainer>
  );
}
