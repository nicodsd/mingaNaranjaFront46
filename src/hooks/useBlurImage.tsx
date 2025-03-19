import React, { useEffect, useState } from "react";

//Arriba la logica para usar dentro de la funcion de mapeo de las imagenes
export const useDynamicSrc = (hd: string, low: string) => {
  const [src, set] = useState(low ?? undefined);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      set(hd);
    };
  }, []);

  return [src, src !== hd];
};

//mapea la imagen segun disponibilidad de la imagen cargada primero y le agrega filtros :P
export const BlurImage = ({ src, lowSrc }: { src: string; lowSrc: string }) => {
  const [dynamicSrc, blur] = useDynamicSrc(src, lowSrc); //este queda undefined por eso marca error
  return (
    <img
      style={{
        filter: blur ? "blur(20px)" : "none",
        clipPath: "inset(0)",
        transition: "filter 0.8s ease-out",
      }}
      className="w-[70%] h-screen object-cover hidden sm:block"
      src={typeof dynamicSrc === "string" ? dynamicSrc : undefined}
      alt={typeof dynamicSrc === "string" ? dynamicSrc : undefined}
    />
  );
};
