import { FC } from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export const Container: FC<ContainerProps> = ({ children }): JSX.Element => {
  return (
    <section className="h-screen">
      <div className="text-center w-full h-full flex flex-col justify-center items-center sm:mx-0 mx-auto">
        {children}
      </div>
    </section>
  );
};
