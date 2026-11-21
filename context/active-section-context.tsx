"use client";

import type { SectionName } from "@/lib/types";
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionValueContextType = {
  activeSection: SectionName;
};

type ActiveSectionActionsContextType = {
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionValueContext =
  createContext<ActiveSectionValueContextType | null>(null);
const ActiveSectionActionsContext =
  createContext<ActiveSectionActionsContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link
  const value = useMemo(() => ({ activeSection }), [activeSection]);
  const actions = useMemo(
    () => ({ setActiveSection, timeOfLastClick, setTimeOfLastClick }),
    [timeOfLastClick]
  );

  return (
    <ActiveSectionValueContext.Provider value={value}>
      <ActiveSectionActionsContext.Provider value={actions}>
        {children}
      </ActiveSectionActionsContext.Provider>
    </ActiveSectionValueContext.Provider>
  );
}

export function useActiveSectionValue() {
  const context = useContext(ActiveSectionValueContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionValue must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}

export function useActiveSectionActions() {
  const context = useContext(ActiveSectionActionsContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionActions must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}
