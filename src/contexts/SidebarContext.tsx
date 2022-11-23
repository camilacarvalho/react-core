import React, { createContext, useCallback, useContext, useState } from 'react';

interface ISidebarOption {
    icon: string;
    path: string;
    label: string;
}

interface ISideBarContextData {
    isSidebarOpen: boolean;
    toggleSidebarOpen:() => void;
    sidebarOptions: ISidebarOption[];
    setSidebarOptions: (newSidebarOptions: ISidebarOption[]) => void
}


const SidebarContext = createContext({} as ISideBarContextData);

export const useSidebarContext = () => {
    return useContext(SidebarContext);
};

export const AppSidebarProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [sidebarOptions, setSidebarOptions] = useState<ISidebarOption[]>([]);

    const toggleSidebarOpen = useCallback(()=> {
        setIsSidebarOpen(oldSidebarOpen => !oldSidebarOpen);
    }, []);

    const handleSidebarOptions = useCallback((newSidebarOptions: ISidebarOption[])=> {
        setSidebarOptions(newSidebarOptions);
    }, []);

    return (<SidebarContext.Provider value={{isSidebarOpen, toggleSidebarOpen, sidebarOptions, setSidebarOptions:handleSidebarOptions}}>
        {children}
    </SidebarContext.Provider>);
};