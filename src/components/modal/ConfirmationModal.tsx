import { Button, Modal, Typography, Box } from '@mui/material';
import { ReactNode } from 'react';

type ConfirmationModalProps = {
    open: boolean,
    title?: string,
    message: string,
    confirmText?: string,
    onCancel: () => void,
    onConfirm: () => void,
    children?: ReactNode
};

const style =  {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 3,
};

const ConfirmationModal = ({ open, title, message, confirmText, onCancel, onConfirm, children }: ConfirmationModalProps) => {
    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {message || children}
                    </Typography>
                    <Box display="flex" gap={1} mt={2} justifyContent="flex-end">
                        <Button variant="outlined" onClick={onCancel}>
                            Cancelar
                        </Button>
                        <Button variant="contained" onClick={onConfirm}>
                            {confirmText}
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default ConfirmationModal;
ConfirmationModal.defaultProps = {
    title: 'Confirmar',
    open: false,
    confirmText: 'Sim'

};