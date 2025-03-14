"use client";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useMemo, useRef } from "react";
import { Group } from "three";
import ImageCard from "./card/image-card";
import { imageUrls } from "./image-data";

export default function ImageGlobeV3({ progress }: { progress: number }) {
  const groupRef = useRef<Group>(null);
  const { camera } = useThree();
  useEffect(() => {
    if (!groupRef.current) return;

    const ctx = gsap.context(() => {
      if (!groupRef?.current) return;

      if (progress >= 100) {
        // Animate the camera to move inside the sphere
        gsap.to(camera.position, {
          z: 5, // Move camera to the center of the sphere
          duration: 3,
          ease: "power2.inOut",
        });

        // Capture the current rotation values
        const {} = groupRef.current.rotation;

        // Smoothly transition the rotation to zero
        gsap.to(groupRef.current.rotation, {
          y: 0,
          z: 0,
          duration: 3.5,
          ease: "power3.out",
          onComplete: () => {
            if (!groupRef.current) return;
            gsap.to(groupRef.current.rotation, {
              z: 0,
              duration: 4, // Slower easing for a smooth stop
              ease: "power4.out",
            });
          },
        });
      }
    }, [groupRef, progress, camera]);

    return () => ctx.revert();
  }, [progress, camera]);

  useFrame(() => {
    if (!groupRef.current) return;
    const GroupRef = groupRef.current;

    if (progress < 100) {
      // More natural football-like rotation
      //   GroupRef.rotation.x += 0.008;
      GroupRef.rotation.y += 0.008;
      // GroupRef.rotation.z += 0.009
      //   GroupRef.rotation.z = Math.sin(Date.now() * 0.001) * 0.006;
    }
  });

  const images = useMemo(
    () =>
      imageUrls.map((item, index) => (
        <ImageCard
          progress={progress}
          key={`${index}-${item}`}
          index={index}
          imageUrl={item}
          total={imageUrls.length}
        />
      )),
    [progress]
  );

  return <group ref={groupRef}>{images}</group>;
}
