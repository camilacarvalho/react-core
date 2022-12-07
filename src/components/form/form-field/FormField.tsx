import { Box, FormHelperText, TextField } from '@mui/material';
import { useField } from 'formik';

interface IFormFieldProps {
    label: string,
    name: string,
    id?: string,
    type?: string,
    fullWidth?: boolean,
    required?: boolean,
    disabled?: boolean
}
const FormField = ({ name, id, label, fullWidth, type, required, disabled, ...othersProps }: IFormFieldProps) => {
    const [field, meta] = useField({ name, id, type, required, ...othersProps });
    return (
        <Box>
            <TextField disabled={disabled} required={required} error={!!meta.error} {...field} fullWidth={fullWidth} label={label} name={name} id={id ?? name} type={type} />
            {meta.error && <FormHelperText error id={`${id}-error`}>
                {meta.error}
            </FormHelperText>}
        </Box>
    );
};

FormField.defaultProps = {
    type: 'text',
    required: false,
    disabled: false,
    fullWidth: false
};

export default FormField;