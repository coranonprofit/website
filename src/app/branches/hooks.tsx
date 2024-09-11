"use client";

import React from "react";
import { getAllBranches } from "./server";


export function useBranches() {
    const [branches, setBranches] = React.useState<any[] | undefined>(undefined);

    React.useEffect(() => {
        getAllBranches().then(setBranches);
    }, []);

    return {branches: branches, refreshBranches: () => getAllBranches().then(setBranches)};
}