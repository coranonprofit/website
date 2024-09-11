"use client"

import React from "react";
import { getAllBranches, getAllUsers } from "./serverutil";

export function useAdminData() {
    const [branches, setBranches] = React.useState<any[] | undefined>(undefined);
    const [users, setUsers] = React.useState<any[] | undefined>(undefined);

    React.useEffect(() => {
        getAllBranches().then(setBranches);
        getAllUsers().then(setUsers);
    }, []);

    return {
        branches: branches,
        refreshBranches: () => getAllBranches().then(setBranches),
        users: users,
        refreshUsers: () => getAllUsers().then(setUsers)
    };
}