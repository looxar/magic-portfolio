"use client"

import { Flex } from "@/once-ui/components";
import MasonryGrid from "@/components/gallery/MasonryGrid";
import { baseURL } from "@/app/resources";
import { generateGallery, person } from "@/app/resources/content";
import { useEffect, useState } from "react";
import { GalleryData } from "@/once-ui/interfaces";

export default function Gallery() {
  const [gallery, setGallery] = useState<GalleryData | null>(null);

  useEffect(() => {
    generateGallery().then(setGallery);
  }, []);

  if (!gallery) return <div>Loading gallery...</div>;

  return (
    <Flex fillWidth>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: gallery.title,
            description: gallery.description,
            url: `https://${baseURL}/gallery`,
            image: gallery.images.map((image) => ({
              "@type": "ImageObject",
              url: `${baseURL}${image.src}`,
              description: image.alt,
            })),
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <MasonryGrid images={gallery.images} />
    </Flex>
  );
}

