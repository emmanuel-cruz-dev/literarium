import Loader from "../components/ui/Loader";
import { FC, Suspense } from "react";
import { SuspenseRouteProps } from "types/types";

const SuspenseRoute: FC<SuspenseRouteProps> = ({
  element: Element,
  fallback = <Loader />,
}) => (
  <Suspense fallback={fallback}>
    <Element />
  </Suspense>
);

export default SuspenseRoute;
