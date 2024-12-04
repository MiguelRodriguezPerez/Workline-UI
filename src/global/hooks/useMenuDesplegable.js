import { useState } from 'react';

export const useMenuDesplegable = (menuId) => {
    const [isOpen, setOpen] = useState(false);

    const openMenu = () => {
        const menuDesplegable = document.getElementById(menuId);
        if (menuDesplegable) {
            setOpen(true);
            menuDesplegable.style.width = '100%';
        }
    };

    const closeMenu = () => {
        const menuDesplegable = document.getElementById(menuId);
        if (menuDesplegable) {
            setOpen(false);
            menuDesplegable.style.width = '0%';
        }
    };

    return {
        openMenu,
        closeMenu
    };
};
