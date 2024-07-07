"use client";

import { Avatar, Button, Center, Loader, Table, TableTbody, TableTd, TableTh, TableThead, TableTr } from "@mantine/core";
import React from "react";
import { modals } from "@mantine/modals";
import { useAdminData } from "../hooks";
import { EditUserForm } from "./EditUserForm";

export default function UserManagement() {
    const { users, branches, refreshUsers } = useAdminData();

    if (!users || !branches) return <Center><Loader /></Center>

    const editUserModal = (user: any) => {
        modals.open({
            title: `Edit ${user.name}`,
            size: "xl",
            children: <EditUserForm user={user} />,
            onClose: refreshUsers
        })
    };

    return <Table>
        <TableThead>
            <TableTr>
                <TableTh>Avatar</TableTh>
                <TableTh>Name</TableTh>
                <TableTh>Email</TableTh>
                <TableTh>Branch</TableTh>
                <TableTh>Actions</TableTh>
            </TableTr>
        </TableThead>
        <TableTbody>
            {users.map(user => <TableTr key={user.id}>
                <TableTd><Avatar src={user.image} size="sm" /></TableTd>
                <TableTd>{user.name}</TableTd>
                <TableTd>{user.email}</TableTd>
                <TableTd>{branches.find(branch => branch.id == user.branchId)?.name}</TableTd>
                <TableTd>
                    <Button onClick={() => editUserModal(user)}>Edit</Button>
                </TableTd>
            </TableTr>)}
        </TableTbody>
    </Table>
}