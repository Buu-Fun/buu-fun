import { ThreeDCubeOne } from "@/assets/Image";
import "@google/model-viewer";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface ModelViewerComponentProps {
  src: string;
  poster?: string | null;
  alt?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export default function ModelViewer({
  src,
  poster,
  alt = "A 3D model",
}: ModelViewerComponentProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const stopPropagation = (e: Event) => {
      e.stopPropagation();
    };
    ref.current.addEventListener("mousedown", stopPropagation);
    ref.current.addEventListener("touchcancel", stopPropagation);
    ref.current.addEventListener("touchend", stopPropagation);
    ref.current.addEventListener("touchmove", stopPropagation);
    ref.current.addEventListener("wheel", stopPropagation);
    ref.current.addEventListener("touchstart", stopPropagation);
    return () => {
      if (!ref.current) return;
      ref.current.removeEventListener("mousedown", stopPropagation);
      ref.current.removeEventListener("touchcancel", stopPropagation);
      ref.current.removeEventListener("touchend", stopPropagation);
      ref.current.removeEventListener("touchmove", stopPropagation);
      ref.current.removeEventListener("wheel", stopPropagation);
      ref.current.removeEventListener("touchstart", stopPropagation);
    };
  });
  return (
    <div
      // onTouch
      ref={ref}
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
      onTouchCancel={(e) => {
        e.stopPropagation();
      }}
      onTouchEnd={(e) => {
        e.stopPropagation();
      }}
      onTouchMove={(e) => {
        e.stopPropagation();
      }}
      onTouchStart={(e) => {
        e.stopPropagation();
      }}
      onWheel={(e) => {
        e.stopPropagation();
      }}
      className="w-full h-full "
    >
      <model-viewer
        style={
          {
            width: "100%",
            height: "100%",
            display: "block",
            "--poster-size": "cover",
            "--poster-color": "transparent",
            "--progress-mask": "none",
            "--progress-bar-height": "0px",
            pointerEvents: "auto",
          } as React.CSSProperties
        }
        src={src}
        ios-src=""
        poster={poster ?? ""}
        alt={alt}
        // skybox-image=""
        environment-image=""
        shadow-intensity={0}
        exposure={3}
        seamless-poster
        camera-controls
        auto-rotate
        touch-action="pan-y"
        interaction-prompt="none"
        ar
      >
        <div className="lighting" slot="lighting">
          <div
            className="lighting-point"
            // style="transform: translate3d(10m, 10m, 10m)"
            style={{
              transform: "translate3d(10m, 10m, 10m)",
            }}
          ></div>
          <div
            className="lighting-point"
            // style="transform: translate3d(-10m, -10m, -10m)"
            style={{
              transform: "translate3d(-10m, -10m, -10m)",
            }}
          ></div>
          <div
            className="lighting-point"
            style={{
              transform: "translate3d(-10m, 10m, -10m)",
            }}
            // style="transform: translate3d(-10m, 10m, -10m)"
          ></div>
        </div>
        <div
          id="lazy-load-poster"
          className="overflow-hidden w-full h-full"
          slot="poster"
        >
          <Image
            src={poster ?? ThreeDCubeOne.src}
            alt="model preview image"
            width={720}
            height={720}
            className="w-full h-full object-cover"
          />
        </div>
      </model-viewer>
    </div>
  );
}
