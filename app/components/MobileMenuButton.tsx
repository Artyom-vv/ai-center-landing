"use client"

import React, {useState} from 'react';
import Button from "@/app/components/ui/Button";
import {RiMenuLine} from "@remixicon/react";
import MobileMenu from "@/app/components/MobileMenu";

const MobileMenuButton = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <MobileMenu onClose={() => setIsMobileMenuOpen(false)} isOpen={isMobileMenuOpen}/>
            <Button onPress={() => setIsMobileMenuOpen(true)} variant="secondary" iconOnly>
                <RiMenuLine size={16} color="var(--color-neutral-text-primary)"></RiMenuLine>
            </Button>
        </>
    );
};

export default MobileMenuButton;
