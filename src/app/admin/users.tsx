"use client";

import { Avatar, Center, Container, Loader, Table, TableTbody, TableTd, TableTh, TableThead, TableTr } from "@mantine/core";
import React from "react";
import { getAllUsers } from "./serverutil";

export default function UserManagement() {

    const [users, setUsers] = React.useState<any[] | undefined>(undefined);

    React.useEffect(() => {
        getAllUsers().then(setUsers);
    }, []);

    if (!users) return <Center><Loader /></Center>

    return <Table>
        <TableThead>
            <TableTr>
                <TableTh>Avatar</TableTh>
                <TableTh>Name</TableTh>
                <TableTh>Email</TableTh>
            </TableTr>
        </TableThead>
        <TableTbody>
            {users.map(user => <TableTr key={user.id}>
                <TableTd><Avatar src={user.image} size="sm" /></TableTd>
                <TableTd>{user.name}</TableTd>
                <TableTd>{user.email}</TableTd>
            </TableTr>)}
        </TableTbody>
    </Table>
}