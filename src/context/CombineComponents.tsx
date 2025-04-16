import { FC, PropsWithChildren } from "react";

export const CombineComponents = (...components: FC<PropsWithChildren>[]) => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }: PropsWithChildren) => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }: PropsWithChildren) => <>{children}</>
  );
};
