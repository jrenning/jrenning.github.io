import React from "react";

type Props = {
  name: string;
};

function PageHeader({ name }: Props) {
  return (
    <div
      className="text-4xl 
    flex justify-center
     items-center font-semibold text-secondary_color my-8"
    >
      {name}
    </div>
  );
}

export default PageHeader;
