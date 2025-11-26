import { Menu as MuiMenu } from "@mui/material"
import { ReactNode } from "react"

interface MenuProps {
    anchorEl: null | HTMLElement;
    open: boolean;
    onClose: () => void;
    children: ReactNode;
    anchorOrigin?: {
        vertical: 'top' | 'center' | 'bottom';
        horizontal: 'left' | 'center' | 'right';
    };
    transformOrigin?: {
        vertical: 'top' | 'center' | 'bottom';
        horizontal: 'left' | 'center' | 'right';
    };
}

export const Menu = ({
    anchorEl,
    open,
    onClose,
    children,
    anchorOrigin = {
        vertical: 'bottom',
        horizontal: 'left',
    },
    transformOrigin = {
        vertical: 'top',
        horizontal: 'left',
    }
}: MenuProps) => {
    return (
        <MuiMenu
            anchorEl={anchorEl}
            open={open}
            onClose={onClose}
            anchorOrigin={anchorOrigin}
            className="border-radius-[8px]"
        >
            {children}
        </MuiMenu>
    )
}