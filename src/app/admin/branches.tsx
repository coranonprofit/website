"use client";

import { Button, ButtonGroup, Loader, Stack, Table, TableTbody, TableTd, TableTh, TableThead, TableTr, TextInput, Title } from "@mantine/core";

import { createBranch, getAllBranches, updateBranch } from "./serverutil";
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

    React.useEffect(() => {
        if (branches != undefined) return;
        getAllBranches().then(setBranches);
    }, [branches]);

    if (branches == undefined) return <Loader />

    const createBranchModal = () => {
        modals.open({ title: "Create new branch", size: "xl", children: <CreateBranchForm />, onClose: () => getAllBranches().then(setBranches) })
    };

    const editBranchModal = (branch: any) => {
        modals.open({ title: "Edit Branch", size: "xl", children: <EditBranchForm branch={branch} />, onClose: () => getAllBranches().then(setBranches) })
    };

    return <Stack align="end">
        <Button onClick={createBranchModal}>Create a new branch</Button>
        <Table>
            <TableThead>
                <TableTr>
                    <TableTh>ID</TableTh>
                    <TableTh>Name</TableTh>
                    <TableTh>Actions</TableTh>
                </TableTr>
            </TableThead>
            <TableTbody>
                {branches.map(branch => <TableTr key={branch.id}>
                    <TableTd>{branch.id}</TableTd>
                    <TableTd>{branch.name}</TableTd>
                    <TableTd>
                        <ButtonGroup>
                            <Button onClick={() => editBranchModal(branch)}>Edit</Button>
                            <Button variant="filled" color="red">Delete</Button> {/* TODO */}
                        </ButtonGroup>
                    </TableTd>
                </TableTr>)}
            </TableTbody>
        </Table>
    </Stack >;
}