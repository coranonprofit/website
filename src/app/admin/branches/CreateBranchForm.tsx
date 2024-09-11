import { useForm } from "@mantine/form";
import { createBranch } from "../serverutil";
import { modals } from "@mantine/modals";
import { Button, Stack, TextInput } from "@mantine/core";

export function CreateBranchForm() {
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