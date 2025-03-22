import { useState, useEffect } from "react";

const breakpoints = {
    xl: `(min-width: 1440px)`,
    md: `(min-width: 768px)`,
    sm: `(min-width: 0)`,
};

type Breakpoint = keyof typeof breakpoints | "xs";

export const useBreakpoint = (): Breakpoint => {
    const [breakpoint, setBreakpoint] = useState<Breakpoint>("xs");

    useEffect(() => {
        const getBreakpoint = (): Breakpoint => {
            if (window.matchMedia(breakpoints.xl).matches) return "xl";
            if (window.matchMedia(breakpoints.md).matches) return "md";
            if (window.matchMedia(breakpoints.sm).matches) return "sm";
            return "xs";
        };

        const updateBreakpoint = () => setBreakpoint(getBreakpoint());

        const mediaQueries = Object.values(breakpoints).map((query) => {
            const mediaQuery = window.matchMedia(query);
            mediaQuery.addEventListener("change", updateBreakpoint);
            return mediaQuery;
        });

        updateBreakpoint();

        return () => {
            mediaQueries.forEach((mediaQuery) =>
                mediaQuery.removeEventListener("change", updateBreakpoint)
            );
        };
    }, []);

    return breakpoint;
};