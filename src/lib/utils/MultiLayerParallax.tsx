import React from "react";

interface MultiLayerParallaxProps {
  props: any;
}
export function MultiLayerParallax({ props }: MultiLayerParallaxProps) {
  return (
    <div className="w-full h-screen overflow-hidden relative grid place-items-center"></div>
  );
}
