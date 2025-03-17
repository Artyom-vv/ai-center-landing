"use client";

import React, {FC} from 'react';
import Modal from "react-modal";
import Button from "@/app/components/ui/Button";
import {RiCloseLargeLine, RiTelegram2Fill} from "@remixicon/react";

export interface MobileMenuProps {
    isOpen: boolean;
    onClose?: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({isOpen, onClose}) => {
    return (
        <Modal
            style={{
                overlay: {zIndex: 999, backgroundColor: '#0000004D'},
            }}
            isOpen={isOpen}
            contentLabel="Example Modal"
            className="mt-4 h-full relative transition-all duration-300"
            contentElement={() => (
                <div className="bg-neutral-bg-surface h-full flex flex-col">
                    <div className="header py-normal px-[68px]">
                        <Button onPress={onClose} variant="secondary" iconOnly>
                            <RiCloseLargeLine size={16} color="var(--color-neutral-text-primary)"></RiCloseLargeLine>
                        </Button>
                    </div>
                    <div className="grow flex flex-col justify-center gap-large px-[68px]">
                        <h2>ИИ для бизнеса</h2>
                        <h2>Этапы внедрения</h2>
                        <h2>Наши тарифы</h2>
                    </div>
                    <div className="py-large border-t-[1px] border-solid border-t-neutral-border-on-surface-default px-[68px] flex gap-normal items-center">
                        <div className="space-y-[8px] grow">
                            <p className="text-body-big font-medium text-neutral-text-heading">Центр ИИ-трансформации</p>
                            <p className="text-body-big text-neutral-text-secondary">© 2025 все права защищены</p>
                        </div>
                        <Button iconOnly>
                            <RiTelegram2Fill size={16} color="var(--color-neutral-solid-white)"></RiTelegram2Fill>
                        </Button>
                    </div>
                </div>
            )}
        >
        </Modal>
    );
};

export default MobileMenu;
