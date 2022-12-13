import { ConfirmationModal } from '../components/modal';
import React, { useContext, useState } from 'react';

type ModalContextType = {
    showConfirmation: (title: string, message: string, handleClickOnConfirm: ()=> void) => void
};

const ModalConfirmationContext = React.createContext<ModalContextType>({} as ModalContextType);

const ModalConfirmationContextProvider = ({children}: {children: React.ReactNode}) => {

    const [ openModal, setOpenModal ] = React.useState(false);
    const [ content, setContent ] = useState<{title: string, message: string, handleClickOnConfirm: ()=> void}>();

    const confirmation: ModalContextType = {
        showConfirmation: (title: string, message: string, handleClickOnConfirm: ()=> void )=> {
            setContent({title, message, handleClickOnConfirm});
            setOpenModal(true);
        }
    };
    return (
        <ModalConfirmationContext.Provider value={confirmation}>
            {children}
            <ConfirmationModal title={content?.title} message={content?.message??''} onConfirm={()=> {content?.handleClickOnConfirm(); setOpenModal(false);}} onCancel={()=> setOpenModal(false)} open={openModal} />
        </ModalConfirmationContext.Provider>
    );
};

const useModalConfirmationContext = ():ModalContextType => useContext(ModalConfirmationContext);
export {
    useModalConfirmationContext,
};

export default ModalConfirmationContextProvider;