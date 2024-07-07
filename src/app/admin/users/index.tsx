"use client";

import { Avatar, Button, Center, Checkbox, Loader, Select, Stack, Table, TableTbody, TableTd, TableTh, TableThead, TableTr } from "@mantine/core";
import React from "react";
import { updateUser } from "../serverutil";
import { useForm } from "@mantine/form";
import { modals } from "@mantine/modals";
import { useAdminData } from "../hooks";

function UserEditForm(props: { user: any, branches: any[] }) {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: props.user
    });

    const onSubmit = () => {
        updateUser(form.getValues())
        modals.closeAll();
    };

    return <Stack>
        <Select label="Branch" data={props.branches.map(branch => ({ label: branch.name, value: branch.id }))} {...form.getInputProps("branchId")} />
        <Checkbox label="Administrator" {...form.getInputProps('admin', { type: 'checkbox' })} />
        <Button onClick={onSubmit}>Update User</Button>
    </Stack>
}

export default function UserManagement() {
    const { users, branches, refreshUsers } = useAdminData();

    if (!users || !branches) return <Center><Loader /></Center>

    const editUserModal = (user: any) => {
        modals.open({ title: `Edit ${user.name}`, size: "xl", children: <UserEditForm user={user} branches={branches} />, onClose: refreshUsers })
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