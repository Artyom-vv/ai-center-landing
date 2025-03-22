"use client"

import React, {createContext, useContext, useState} from 'react';
import Button from "@/app/components/ui/Button";
import Modal from "react-modal";
import ChipGroup from "@/app/components/ui/ChipGroup";
import Chip from "@/app/components/ui/Chip";
import {RiCloseLargeLine} from "@remixicon/react";
import {motion} from 'framer-motion';

interface ModalContextType {
    isModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const RequestModalProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <ModalContext.Provider value={{isModalOpen, openModal, closeModal}}>
            {children}
        </ModalContext.Provider>
    );
};

export const useRequestModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};

const RequestModal: React.FC = () => {
    const {isModalOpen, closeModal} = useRequestModal();

    return (
        <Modal
            style={{
                overlay: {
                    backdropFilter: "blur(8px)",
                    zIndex: 999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: 'center',
                    backgroundColor: '#00000080'
                },
            }}
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            className="h-full relative transition-all duration-300"
            contentElement={(props) => (
                <>
                    <Button className="absolute right-[32px] top-[32px]" onPress={closeModal} variant="ghost"
                            size="1x-large" iconOnly>
                        <RiCloseLargeLine size={16} color="var(--color-neutral-text-primary)"></RiCloseLargeLine>
                    </Button>
                    <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.3, type: "ease-in"}}
                    >
                        <div
                            {...props}
                            className="outline-none rounded-[32px] p-1x-large bg-neutral-bg-subtle-default space-y-1x-large flex flex-col max-w-[514px]">
                            <h4>Готовы к изменениям? <br/><span
                                className="hero-text-gradient">Действуйте прямо сейчас!</span>
                            </h4>
                            <div className="space-y-large">
                                <ChipGroup className="justify-start gap-small" defaultValue="1">
                                    <Chip value="1" onSubtle size="normal">Розница</Chip>
                                    <Chip value="2" onSubtle size="normal">Юриспруденция</Chip>
                                    <Chip value="3" onSubtle size="normal">Гостиничное дело</Chip>
                                    <Chip value="4" onSubtle size="normal">Фитнес</Chip>
                                    <Chip value="5" onSubtle size="normal">Медицина</Chip>
                                    <Chip value="6" onSubtle size="normal">Другое</Chip>
                                </ChipGroup>
                            </div>
                            <div className="space-y-large">
                                <Button className="w-full">Отправить заявку</Button>
                                <p className="text-body-small text-neutral-text-quaternary text-center">Оставляя заявку,
                                    вы
                                    соглашаетесь на обработку персональных данных</p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        >
        </Modal>
    );
};

export default RequestModal;
