"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

// compile all contexts
export default function GigaContext({
    children,
}: {
    children: any,
}) {
    
    const [isBranchesOpen, setIsBranchesOpen] = useState(false);    

    const providers : any[] = [
        [
            BranchesMenuContext.Provider,
            {
                isBranchesOpen: isBranchesOpen,
                setIsBranchesOpen: setIsBranchesOpen
            }
        ]
    ]

    return (
        <>
            {providers.reduceRight(
                (accumulation: any, [Provider, value]: any) => {
                    return <Provider value={value}>
                        {accumulation}
                    </Provider>
                },
                children
            )} 
        </>
       ) 
}

// branch menu state
export const BranchesMenuContext = createContext<{
    isBranchesOpen: boolean,
    setIsBranchesOpen: Dispatch<SetStateAction<boolean>>,
}>({
    isBranchesOpen: false,
    setIsBranchesOpen: () => { },
});