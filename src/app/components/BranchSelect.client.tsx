"use client";

import { Select, Skeleton } from "@mantine/core";
import React from "react";
import { getBranchList } from "./BranchSelect.server";

export function BranchSelect(props: any) {

    const [branches, setBranches] = React.useState<any[] | undefined>(undefined);

    React.useEffect(() => {
        getBranchList().then(setBranches);
    }, []);

    if(!branches) return <Skeleton />

    return <Select
        data={branches.map(branch => ({ label: branch.name, value: branch.id }))}
        {...props}
    />
}