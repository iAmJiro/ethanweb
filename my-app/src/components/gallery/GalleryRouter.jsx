import React from "react";
import { useParams } from "react-router-dom";
import Cars from "./Cars";
import Nature from "./Nature";
import Portrait from "./Portrait";

// later you can add: import Japan from "./Japan"; etc.

const galleryMap = {
  cars: Cars,
  nature: Nature,
  portrait: Portrait,
  // "the-narrator": TheNarrator,
  // iceland: Iceland,
  // japan: Japan,
  // norway: Norway,
  // "new-zealand": NewZealand,
};

export default function GalleryRouter() {
  const { slug } = useParams();
  const GalleryComponent = galleryMap[slug];

  if (!GalleryComponent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-xl">Gallery not found.</p>
      </div>
    );
  }

  return <GalleryComponent />;
}
