"use client"

import React, {createContext, DetailedHTMLProps, useContext, useState} from 'react';
import Button from "@/app/components/ui/Button";
import Modal from "react-modal";
import ChipGroup from "@/app/components/ui/ChipGroup";
import Chip from "@/app/components/ui/Chip";
import {RiCloseLargeLine} from "@remixicon/react";
import {motion} from 'framer-motion';
import Input from "@/app/components/Input";
import PhoneInput from "@/app/components/PhoneInput";
import Checkbox from "@/app/components/Checkbox";

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

    const Content = (props: any) => {
        return (
            <div
                {...props}
                className="outline-none md:rounded-[32px] rounded-tl-[16px] rounded-tr-[16px] md:p-1x-large px-normal py-large bg-neutral-bg-subtle-default space-y-1x-large flex flex-col xl:max-w-[514px] md:max-w-[480px]">
                <h4>Готовы к изменениям? <br/><span
                    className="hero-text-gradient">Действуйте прямо сейчас!</span>
                </h4>
                <div className="space-y-large">
                    <Input placeholder="Как вас зовут?" onSubtle/>
                    <PhoneInput onSubtle value="fawfwa" onChange={() => {
                    }}/>
                    <ChipGroup className="justify-start gap-small" defaultValue="1">
                        <Chip value="1" onSubtle size="normal">Розница</Chip>
                        <Chip value="2" onSubtle size="normal">Юриспруденция</Chip>
                        <Chip value="3" onSubtle size="normal">Гостиничное дело</Chip>
                        <Chip value="4" onSubtle size="normal">Фитнес</Chip>
                        <Chip value="5" onSubtle size="normal">Медицина</Chip>
                        <Chip value="6" onSubtle size="normal">Другое</Chip>
                    </ChipGroup>
                    <Checkbox onSubtle>Свяжитесь со мной в Telegram</Checkbox>
                    <Input placeholder="Ваш никнейм в telegram" onSubtle/>
                </div>
                <div className="space-y-large">
                    <Button className="w-full">Отправить заявку</Button>
                    <p className="text-body-small text-neutral-text-quaternary text-center">Оставляя заявку,
                        вы
                        соглашаетесь на обработку персональных данных</p>
                </div>
            </div>
        )
    }

    return (
        <Modal
            overlayClassName="flex md:items-center items-end justify-center z-[999] bg-[#00000080] backdrop-blur-[8px] absolute top-[0] left-[0] h-full w-full"
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            className="h-full relative transition-all duration-300"
            contentElement={(props) => (
                <>
                    <Button className="absolute md:right-[32px] md:top-[32px] right-[16px] top-[16px]"
                            onPress={closeModal} variant="ghost"
                            size="1x-large" iconOnly>
                        <RiCloseLargeLine size={16} color="var(--color-neutral-text-primary)"></RiCloseLargeLine>
                    </Button>
                    <motion.div
                        className="max-md:hidden"
                        initial={{opacity: 0, scale: 0.9}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.3, type: "ease-in"}}
                    >
                        <Content props={props}/>
                    </motion.div>
                    <motion.div
                        className="md:hidden"
                        initial={{opacity: 0, translateY: 20}}
                        animate={{opacity: 1, translateY: 0}}
                        transition={{duration: 0.3, type: "ease-in"}}
                    >
                        <Content props={props}/>
                    </motion.div>
                </>
            )}
        >
        </Modal>
    );
};

export default RequestModal;
