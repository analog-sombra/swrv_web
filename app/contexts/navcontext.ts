import { createContext } from "react";

type TodoContextType = {
    isNavOpen: boolean
    setNavOpen: (val: boolean) => void;
}

const NavContext = createContext<TodoContextType>({
    isNavOpen: false,
    setNavOpen: (val) => { }
});

const NavContextProvier = NavContext.Provider;
const NavContextConsumer = NavContext.Consumer;

export { NavContext, NavContextConsumer, NavContextProvier };