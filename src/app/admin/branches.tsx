"use client";

import { Button, ButtonGroup, Loader, Stack, Table, TableTbody, TableTd, TableTh, TableThead, TableTr, Text, TextInput, Title } from "@mantine/core";

import { createBranch, deleteBranch, getAllBranches, getAllUsers, updateBranch } from "./serverutil";
import { modals } from "@mantine/modals";

import { useForm } from '@mantine/form';
import React from "react";

function CreateBranchForm() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: ''
        }
    });

    const onSubmit = () => {
        createBranch(form.getValues().name);
        modals.closeAll();
    };

    return <Stack>
        <TextInput label="Name" description="The name of the branch" {...form.getInputProps('name')} />
        <Button onClick={onSubmit}>Create branch</Button>
    </Stack>
}

function EditBranchForm(props: { branch: any }) {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: props.branch
    });

    const onSubmit = () => {
        updateBranch(form.getValues());
        modals.closeAll();
    };

    return <Stack>
        <TextInput label="Name" description="The name of the branch" {...form.getInputProps('name')} />
        <Button onClick={onSubmit}>Update branch</Button>
    </Stack>
}

export default function BranchManagement() {
    const [branches, setBranches] = React.useState<any[] | undefined>(undefined);
    const [users, setUsers] = React.useState<any[] | undefined>(undefined);

    React.useEffect(() => {
        getAllBranches().then(setBranches);
        getAllUsers().then(setUsers);
    }, []);

    if (branches == undefined || users == undefined) return <Loader />

    const createBranchModal = () => {
        modals.open({ title: "Create new branch", size: "xl", children: <CreateBranchForm />, onClose: () => getAllBranches().then(setBranches) })
    };

    const editBranchModal = (branch: any) => {
        modals.open({ title: "Edit Branch", size: "xl", children: <EditBranchForm branch={branch} />, onClose: () => getAllBranches().then(setBranches) })
    };

    const deleteBranchModal = (branch: any) => {
        modals.openConfirmModal({
            title: "Are you sure you want to delete this branch?",
            children: <Text>
                If you proceed, almost all data pertaining to the branch '{branch.name}' will be removed from the server.
                This operation is <b>NOT</b> reversable.
                <b>You cannot undo this.</b>
            </Text>,
            labels: { confirm: "Yes, I am sure.", cancel: "WAIT!" },
            onConfirm: () => {
                deleteBranch(branch.id);
                getAllBranches().then(setBranches);
            }
        });
    };

    return <Stack align="end">
        <Button onClick={createBranchModal}>Create a new branch</Button>
        <Table>
            <TableThead>
                <TableTr>
                    <TableTh>ID</TableTh>
                    <TableTh>Name</TableTh>
                    <TableTh>Members</TableTh>
                    <TableTh>Actions</TableTh>
                </TableTr>
            </TableThead>
            <TableTbody>
                {branches.map(branch => <TableTr key={branch.id}>
                    <TableTd>{branch.id}</TableTd>
                    <TableTd>{branch.name}</TableTd>
                    <TableTd>{users.filter(user => user.branchId == branch.id).length}</TableTd>
                    <TableTd>
                        <ButtonGroup>
                            <Button onClick={() => editBranchModal(branch)}>Edit</Button>
                            <Button variant="filled" color="red" onClick={() => deleteBranchModal(branch)}>Delete</Button>
                        </ButtonGroup>
                    </TableTd>
                </TableTr>)}
            </TableTbody>
        </Table>
    </Stack >;
}