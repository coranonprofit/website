import { Avatar, Button, Menu, MenuDropdown, MenuItem, MenuLabel, MenuTarget } from "@mantine/core";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function AccountIcon() {
    const { data: session } = useSession();

    if (!session) {
        return <Button onClick={() => signIn()}>Login</Button>
    }

    return <Menu>
        <MenuTarget>
            <Avatar src={session?.user?.image} />
        </MenuTarget>
        <MenuDropdown>
            <MenuLabel>Hello, {session?.user?.name}</MenuLabel>
            <MenuItem component={Link} href="/account">My Account</MenuItem>
            <MenuItem onClick={() => signOut()}>Logout</MenuItem>
        </MenuDropdown>
    </Menu>
}