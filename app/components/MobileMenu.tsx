"use client";

import React, {FC} from 'react';
import Modal from "react-modal";
import Button from "@/app/components/ui/Button";
import {RiCloseLargeLine, RiTelegram2Fill} from "@remixicon/react";
import {links} from "@/app/components/Header";

export interface MobileMenuProps {
    isOpen: boolean;
    onClose?: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({isOpen, onClose}) => {

    const onLinkClick = (callback: () => void) => {
        callback();
        onClose?.()
    }

    return (
        <Modal
            style={{
                overlay: {zIndex: 999, backgroundColor: '#0000004D'},
            }}
            isOpen={isOpen}
            className="mt-4 h-full relative transition-all duration-300"
            contentElement={() => (
                <div className="bg-neutral-bg-surface h-full flex flex-col overflow-y-auto">
                    <div className="header py-normal md:px-[68px] max-md:container">
                        <Button onPress={onClose} variant="secondary" iconOnly>
                            <RiCloseLargeLine size={16} color="var(--color-neutral-text-primary)"></RiCloseLargeLine>
                        </Button>
                    </div>
                    <div className="grow flex flex-col justify-center gap-large md:px-[68px] max-md:container my-large">
                        {links.map(({text, onClick}, index) => (
                            <a key={index} onClick={() => onLinkClick(onClick)} href="#" className="no-underline">
                                <h2>{text}</h2>
                            </a>
                        ))}
                    </div>
                    <div
                        className="py-large border-t-[1px] border-solid border-t-neutral-border-on-surface-default md:px-[68px] max-md:container flex md:flex-row flex-col md:gap-normal gap-large md:items-center">
                        <div className="space-y-[8px] grow">
                            <p className="text-body-big font-medium text-neutral-text-heading">Центр
                                ИИ-трансформации</p>
                            <p className="text-body-big text-neutral-text-secondary">© 2025 все права защищены</p>
                        </div>
                        <Button className="md:flex hidden" iconOnly>
                            <RiTelegram2Fill size={16} color="var(--color-neutral-solid-white)"></RiTelegram2Fill>
                        </Button>
                        <Button
                            className="md:hidden flex w-full"
                            leftIcon={<RiTelegram2Fill size={16}
                                                       color="var(--color-neutral-solid-white)"></RiTelegram2Fill>}
                        >
                            Мы в Telegram
                        </Button>
                    </div>
                </div>
            )}
        >
        </Modal>
    );
};

export default MobileMenu;
