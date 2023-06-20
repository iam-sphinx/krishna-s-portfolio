import React, { createContext, useState, useEffect } from 'react';
import { useViewportScroll, motion } from 'framer-motion';

const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
  const { scrollY } = useViewportScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const unsubscribeScroll = scrollY.onChange(() => {
      setScrollProgress(scrollY.get());
    });

    return () => {
      unsubscribeScroll();
    };
  }, [scrollY]);

  return (
    <ScrollContext.Provider value={scrollProgress}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
export { ScrollContext };
