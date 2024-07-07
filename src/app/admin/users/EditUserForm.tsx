import { useForm } from "@mantine/form";
import { updateUser } from "../serverutil";
import { modals } from "@mantine/modals";
import { Button, Checkbox, Select, Stack } from "@mantine/core";

export function EditUserForm(props: { user: any, branches: any[] }) {
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