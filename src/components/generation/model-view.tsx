// import React, { Suspense, useRef, useState } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import {
//   OrbitControls,
//   Stage,
//   useGLTF,
//   Environment,
//   ContactShadows,
// } from "@react-three/drei";
// import { Vector3 } from "three";
// import { ThreeElements } from "@react-three/fiber/dist/declarations/src";

// type Primitive = ThreeElements["primitive"];

// interface ThreeDViewerProps {
//   index: number;
//   modelPath: string;
//   id: string;
// }

// function Model({ url, id, index }: { url: string; index: number; id: string }) {
//   const { scene } = useGLTF(url);
//   const ref = useRef<Primitive>(null);

//   useFrame(() => {
//     if (!ref.current) return;
//     ref.current.rotation.y += 0.003;
//   });

//   return (
//     <primitive
//       key={`model-primitive-${url}-${index}-${id}`}
//       ref={ref}
//       object={scene}
//       scale={1.5}
//       position={[0, 0, 0]}
//     />
//   );
// }

// function CameraController() {
//   const { camera } = useThree();
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const controlsRef = useRef<any>(null);

//   React.useEffect(() => {
//     camera.position.set(0, 0, 0);
//     camera.lookAt(new Vector3(0, 0, 0));
//   }, [camera]);

//   return (
//     <OrbitControls
//       ref={controlsRef}
//       enablePan={true}
//       enableZoom={true}
//       minPolarAngle={Math.PI / 4}
//       maxPolarAngle={Math.PI / 1.5}
//       minDistance={3}
//       maxDistance={8}
//       makeDefault
//     />
//   );
// }

// const ThreeDViewer = ({ modelPath, id, index }: ThreeDViewerProps) => {
//   const [isLoading, setIsLoading] = useState(true);

//   return (
//     <div
//       className="relative z-[99999]"
//       id="three-canvas-container"
//       style={{
//         width: "100%",
//         height: "100%",
//         position: "relative",
//       }}
//     >
//       {isLoading && (
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="w-8 h-8  border-t-transparent rounded-full animate-spin" />
//         </div>
//       )}
//       <Canvas
//         key={`model-canvas-${modelPath.trim()}-${id}-${index}`}
//         className="pointer-events-auto"
//         shadows
//         // style={}
//         dpr={[1, 1]}
//         camera={{ position: [0, 5, 0], fov: 35 }}
//         onCreated={() => setIsLoading(false)}
//       >
//         <Suspense fallback={null}>
//           <Stage intensity={1} environment="studio" adjustCamera={true}>
//             <Model id={id} index={index} url={modelPath} />
//           </Stage>
//           <ContactShadows
//             rotation-x={Math.PI / 2}
//             position={[0, -1.4, 0]}
//             opacity={0.75}
//             width={10}
//             height={10}
//             blur={2.6}
//             far={2}
//           />
//           <Environment preset="studio" />
//         </Suspense>
//         <CameraController />
//       </Canvas>
//     </div>
//   );
// };

// export default ThreeDViewer;
