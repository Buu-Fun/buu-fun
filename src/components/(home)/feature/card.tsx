import React from "react";

const BlurredBackgroundEffect = () => {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-black">
      {/* Background Image (Blurred) */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-lg"
        style={{
          backgroundImage: "url(/path-to-your-image.png)",
        }}
      />

      {/* Unblurred Center Card */}
      <div className="relative z-10 bg-transparent p-4 rounded-lg">
        <div className="w-[300px] h-[450px] bg-cover bg-center rounded-xl shadow-lg"
          style={{
            backgroundImage: "url(/path-to-your-image.png)",
            backdropFilter: "blur(0px)",
          }}
        />
      </div>
    </div>
  );
};

export default BlurredBackgroundEffect;
