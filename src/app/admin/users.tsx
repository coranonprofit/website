"use client";

import { Avatar, Center, Container, Loader, Table, TableTbody, TableTd, TableTh, TableThead, TableTr } from "@mantine/core";
import React from "react";
import { getAllBranches, getAllUsers } from "./serverutil";

export default function UserManagement() {

    const [users, setUsers] = React.useState<any[] | undefined>(undefined);
    const [branches, setBranches] = React.useState<any[] | undefined>(undefined);

    React.useEffect(() => {
        getAllUsers().then(setUsers);
        getAllBranches().then(setBranches);
    }, []);

    if (!users || !branches) return <Center><Loader /></Center>

    return <Table>
        <TableThead>
            <TableTr>
                <TableTh>Avatar</TableTh>
                <TableTh>Name</TableTh>
                <TableTh>Email</TableTh>
                <TableTh>Branch</TableTh>
            </TableTr>
        </TableThead>
        <TableTbody>
            {users.map(user => <TableTr key={user.id}>
                <TableTd><Avatar src={user.image} size="sm" /></TableTd>
                <TableTd>{user.name}</TableTd>
                <TableTd>{user.email}</TableTd>
                <TableTd>{branches.find(branch => branch.id == user.branchId)?.name}</TableTd>
            </TableTr>)}
        </TableTbody>
    </Table>
}