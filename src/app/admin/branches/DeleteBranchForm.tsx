import { Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { deleteBranch } from "../serverutil";

export const deleteBranchModal = (branch: any, refreshBranches: () => void) => {
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
            refreshBranches();
        }
    });
};