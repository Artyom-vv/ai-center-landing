"use client"

import {ReactNode, useContext, createContext} from "react";

interface BusinessStepContextType {
    size: number;
    stepIncrement: number;
}

export const BusinessStepContext = createContext<BusinessStepContextType | undefined>(undefined);

interface BusinessStepProviderProps {
    size: number;
    stepIncrement: number;
    children: ReactNode;
}

export function BusinessStepsWrapper({size, stepIncrement, children}: BusinessStepProviderProps) {
    return (
        <BusinessStepContext.Provider value={{size, stepIncrement}}>
            <div className="flex xl:flex-row flex-col md:gap-normal gap-large xl:items-end items-start">
                {children}
            </div>
        </BusinessStepContext.Provider>
    );
}


export function useBusinessStepContext(): BusinessStepContextType {
    const context = useContext(BusinessStepContext);
    if (!context) {
        throw new Error("useBusinessStepContext must be used within a BusinessStepProvider");
    }
    return context;
}