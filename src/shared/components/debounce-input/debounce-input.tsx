import { useDebounce } from "@uidotdev/usehooks";
import { FC, useEffect, useState } from 'react';
import { Input, InputProps, InputValue } from '../input/input';

interface DebounceInputProps extends InputProps {
    onDebouncedChange: (value: InputValue) => void;
    debounceTime?: number;
}

export const DebounceInput: FC<DebounceInputProps> = ({
    onDebouncedChange,
    debounceTime = 500,
    value,
    ...props
}) => {
    const [internalValue, setInternalValue] = useState(value); // Valor interno del input que se debouncera
    const debouncedValue = useDebounce(internalValue, debounceTime); // Valor debounced que se actualizará después del tiempo especificado

    // Cuando el valor debounced cambia, notificamos al padre
    useEffect(() => {
        onDebouncedChange(debouncedValue);
    }, [debouncedValue, onDebouncedChange]);

    // Si el value externo cambia (ej: limpieza desde el padre), sincronizamos el input
    useEffect(() => {
        setInternalValue(value);
    }, [value]);

    return (
        <Input
            value={internalValue} // Usamos el valor interno para el input
            onChange={(e) => setInternalValue(e.target.value)} // Actualizamos el valor interno al cambiar el input
            {...props}
        />
    )
}
