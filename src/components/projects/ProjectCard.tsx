import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  children?: any;
  title: string;
  link: string;
  skills: string[];
  image?: string;
  alt?: string;
  description: string;
};

type TagProps = {
  name: string;
};

function Tag({ name }: TagProps) {
  const random_colors = [
    "#ffb3ba",
    "#ffdfba",
    "#ffffba",
    "#baffc9",
    "#bae1ff",
    "#dedaf4",
    "#e4f1ee",
  ];

  let color = random_colors[Math.floor(Math.random() * random_colors.length)];
  return (
    <div
      className="rounded-md shadow-sm px-2 py-1"
      style={{ backgroundColor: color }}
    >
      {name}
    </div>
  );
}

function ProjectCard({
  children,
  title,
  skills,
  image,
  alt,
  link,
  description,
}: Props) {
  return (
    <div className="p-8 mx-4 rounded-md shadow-xl bg-tertiary_color hover:scale-[102%]">
      <h1 className="mb-2 text-2xl font-bold text-center m dark:text-secondary_color">
        {title}
      </h1>
      <div className="flex space-x-8 items-center justify-center mb-4 dark:text-secondary_color">
        {skills.map((skill, index: number) => (
          <Tag name={skill} />
        ))}
      </div>
      {/* <div className="p-1 mb-4 border-2 border-black border-solid bg-primary_color">
        {image && (
          <Image
            src={image}
            alt={alt}
            className=" image-border"
            layout="responsive"
            width={20}
            height={20}
          />
        )}
      </div> */}
      <p className="dark:text-secondary_color">{description}</p>

      {/* Extra stuff  */}
      {children}
      <a href={link ? link : ""} target="_blank" rel="noreferrer">
        <div className="flex items-center justify-center mt-12">
          <button className="button-standard-primary">See More</button>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
