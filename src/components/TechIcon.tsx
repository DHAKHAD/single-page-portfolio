import { StaticImageData } from "next/image";
import React from "react";

type TechIconProps = {
  component: React.ElementType | StaticImageData | string; // Support React components, images, and string paths
};

export const TechIcon = ({ component }: TechIconProps) => {
  if (typeof component === "string") {
    // If component is a string (e.g., a path to an image)
    return (
      <img
        src={component}
        alt="Tech Icon"
        className="size-10 fill-[url(#tech-icon-gradient)]"
      />
    );
  } else if (typeof component === "object" && "src" in component) {
    // If component is an imported image (StaticImageData)
    return (
      <img
        src={component.src}
        alt="Tech Icon"
        className="size-10 fill-[url(#tech-icon-gradient)]"
      />
    );
  }

  // If component is a React component
  const Component = component as React.ElementType;
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="fgb(110 230 183)" />
          <stop offset="100%" stopColor="fgb(56 189 248)" />
        </linearGradient>
      </svg>
    </>
  );
};
