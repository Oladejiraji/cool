import { getRouterContext, Outlet } from "@tanstack/react-router";
import { motion, useIsPresent } from "framer-motion";
import { cloneDeep } from "lodash";
import { forwardRef, useContext, useRef } from "react";

const AnimatedOutlet = forwardRef<HTMLDivElement>((_, ref) => {
  const RouterContext = getRouterContext();

  const routerContext = useContext(RouterContext);

  const renderedContext = useRef(routerContext);

  const isPresent = useIsPresent();

  if (isPresent) {
    renderedContext.current = cloneDeep(routerContext);
  }

  return (
    <motion.div
      ref={ref}
      //   initial={{ y: 0 }}
      // animate={{ y: "100%" }}
      //   exit={{ y: 0 }}
    >
      <RouterContext.Provider value={renderedContext.current}>
        {/* <div className="flex items-center gap-1">
          {AppRoutes.map((route, i) => (
            <Link key={i} to={route.path} className="underline">
              {route.name}
            </Link>
          ))}
        </div> */}
        <Outlet />
      </RouterContext.Provider>
    </motion.div>
  );
});

export default AnimatedOutlet;
