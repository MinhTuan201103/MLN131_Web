"use client"

import { cn } from "@/lib/utils"
import {
  getPresentationCaption,
  getPresentationImage,
  getPresentationImageFocus,
  IMAGE_SLOT_GUIDE,
} from "@/lib/presentation-images"
import { ImageIcon, Link2Off } from "lucide-react"
import { ReactNode, useState } from "react"

interface MediaBlockProps {
  /** Số thứ tự ảnh 0–24 — URL + chú thích từ lib/presentation-images.ts */
  imageSlot?: number
  src?: string
  alt: string
  suggest?: string
  /** Ghi đè chú thích (ưu tiên hơn PRESENTATION_CAPTIONS) */
  caption?: string
  /** Chữ phủ trên ảnh (đáy khung), không thay chú thích dưới */
  overlay?: ReactNode
  className?: string
  aspect?: "video" | "square" | "wide" | "hero" | "galleryMain" | "gallerySide" | "pillar"
  /** contain = hiện trọn ảnh (không cắt góc); cover = phủ kín khung */
  fit?: "contain" | "cover"
  captionSize?: "normal" | "large"
}

const aspectClass = {
  video: "min-h-[260px] md:min-h-[340px] aspect-[4/3]",
  square: "min-h-[240px] md:min-h-[300px] aspect-square max-w-full",
  wide: "min-h-[240px] md:min-h-[300px] aspect-[2/1]",
  hero: "min-h-[300px] md:min-h-[420px] aspect-[4/3] md:aspect-[3/2]",
  galleryMain: "min-h-[320px] md:min-h-[440px] w-full",
  gallerySide: "min-h-[200px] md:min-h-[260px] w-full flex-1",
  pillar: "min-h-[280px] sm:min-h-[340px] md:min-h-[400px] lg:min-h-[440px] aspect-[3/4] w-full",
}

const focusClass = {
  top: "object-top",
  center: "object-center",
  bottom: "object-bottom",
}

export function MediaBlock({
  imageSlot,
  src: srcProp,
  alt,
  suggest,
  caption: captionProp,
  overlay,
  className,
  aspect = "video",
  fit = "contain",
  captionSize = "normal",
}: MediaBlockProps) {
  const resolvedSrc =
    srcProp ?? (imageSlot !== undefined ? getPresentationImage(imageSlot) : undefined)
  const guide = imageSlot !== undefined ? IMAGE_SLOT_GUIDE[imageSlot] : undefined
  const hint = suggest ?? guide?.suggest
  const captionFromFile =
    imageSlot !== undefined ? getPresentationCaption(imageSlot) : undefined
  const displayCaption = captionProp ?? captionFromFile
  const focus =
    imageSlot !== undefined ? getPresentationImageFocus(imageSlot) : "center"
  const [loadError, setLoadError] = useState(false)
  const showImage = resolvedSrc && !loadError

  const imgFitClass =
    fit === "contain"
      ? "object-contain object-center"
      : cn("object-cover", focusClass[focus])

  return (
    <figure className={cn("group w-full", className)}>
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden border border-monument-grey bg-surface-container-low",
          aspectClass[aspect]
        )}
      >
        {showImage ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={resolvedSrc}
              src={resolvedSrc}
              alt={alt}
              className={cn("w-full h-full exhibition-image-hover", imgFitClass)}
              onError={() => setLoadError(true)}
            />
            {overlay && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent px-6 py-5 md:px-8 md:py-6 pointer-events-none">
                {overlay}
              </div>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
            {loadError && resolvedSrc ? (
              <>
                <Link2Off className="w-10 h-10 text-revolutionary-red" />
                <p className="font-label-mono text-sm text-revolutionary-red uppercase font-semibold">
                  URL không tải được
                </p>
                <p className="text-sm text-on-surface-variant break-all max-w-full px-4 line-clamp-3">
                  {resolvedSrc}
                </p>
              </>
            ) : (
              <>
                <ImageIcon className="w-10 h-10 text-monument-grey" />
                {imageSlot !== undefined && (
                  <p className="font-label-mono text-xl font-bold text-revolutionary-red">
                    Hình #{imageSlot}
                  </p>
                )}
                <p className="font-label-mono text-sm uppercase tracking-widest text-golden-silk font-semibold">
                  Gắn URL — presentation-images.ts
                </p>
                {hint && (
                  <p className="text-base text-on-surface max-w-xs leading-relaxed">
                    {hint}
                  </p>
                )}
              </>
            )}
          </div>
        )}
      </div>

      {displayCaption && (
        <figcaption
          className={cn(
            "mt-4 px-3 text-center leading-snug max-w-full mx-auto text-on-surface font-normal",
            captionSize === "large" ? "text-lg md:text-xl" : "text-base md:text-lg"
          )}
        >
          {displayCaption}
        </figcaption>
      )}
    </figure>
  )
}
