import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useField } from 'formik';

export type SelectFieldOptions = {
    label: string
    value: string | ReadonlyArray<any> | number | undefined
  }

interface ISelectFieldProps {
    label: string,
    name: string,
    id?: string,
    fullWidth?: boolean,
    required?: boolean,
    disabled: boolean,
    options: SelectFieldOptions[]
}

const SelectField = ({name, id, label, required, options, fullWidth, ...othersProps}: ISelectFieldProps)=> {
    const [field] = useField({ name, id, required, ...othersProps });
    return (
        <FormControl fullWidth={fullWidth}>
            <InputLabel id={name.trim()+'-select-label'}>{required?label+' *':label}</InputLabel>
            <Select {...field}  labelId={name.trim()+'-select-label'} id={id} label={required?label+' *':label}>
                {options.map(({label, value}:SelectFieldOptions, index)=> 
                {return <MenuItem key={index} value={value?value:0}>{label}</MenuItem>;})};
            </Select>
        </FormControl>
    );
};

SelectField.defaultProps = {
    required: false,
    disabled: false,
    fullWidth: false
};

export default SelectField;