"use client";

import { Button, ButtonGroup, Loader, Stack, Table, TableTbody, TableTd, TableTh, TableThead, TableTr } from "@mantine/core";

import { modals } from "@mantine/modals";

import React from "react";
import { useAdminData } from "../hooks";
import { CreateBranchForm } from "./CreateBranchForm";
import { EditBranchForm } from "./EditBranchForm";
import { deleteBranchModal } from "./DeleteBranchForm";

export default function BranchManagement() {
    const { branches, users, refreshBranches } = useAdminData();

    if (branches == undefined || users == undefined) return <Loader />

    const createBranchModal = () => {
        modals.open({ title: "Create new branch", size: "xl", children: <CreateBranchForm />, onClose: refreshBranches })
    };

    const editBranchModal = (branch: any) => {
        modals.open({ title: "Edit Branch", size: "xl", children: <EditBranchForm branch={branch} />, onClose: refreshBranches })
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
                            <Button variant="filled" color="red" onClick={() => deleteBranchModal(branch, refreshBranches)}>Delete</Button>
                        </ButtonGroup>
                    </TableTd>
                </TableTr>)}
            </TableTbody>
        </Table>
    </Stack >;
}