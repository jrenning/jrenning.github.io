import React from "react";

type Props = {
  name: string;
};

function PageHeader({ name }: Props) {
  return (
    <div className="flex items-center justify-center text-4xl font-semibold mb-4 dark:text-primary_color_dark text-secondary_color animate-fade_in">
      {name}
    </div>
  );
}

export default PageHeader;
