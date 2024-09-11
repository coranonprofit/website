import { useForm } from "@mantine/form";
import { updateUser } from "../serverutil";
import { modals } from "@mantine/modals";
import { Button, Checkbox, Stack } from "@mantine/core";
import { BranchSelect } from "@/app/components/BranchSelect.client";

export function EditUserForm(props: { user: any }) {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: props.user
    });

    const onSubmit = () => {
        updateUser(form.getValues())
        modals.closeAll();
    };

    return <Stack>
        <BranchSelect label="Branch" {...form.getInputProps("branchId")} />
        <Checkbox label="Administrator" {...form.getInputProps('admin', { type: 'checkbox' })} />
        <Button onClick={onSubmit}>Update User</Button>
    </Stack>
}