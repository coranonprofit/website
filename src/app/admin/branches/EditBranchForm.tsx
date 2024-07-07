import { useForm } from "@mantine/form";
import { updateBranch } from "../serverutil";
import { modals } from "@mantine/modals";
import { Button, Stack, TextInput } from "@mantine/core";

export function EditBranchForm(props: { branch: any }) {
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