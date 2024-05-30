import React from 'react';
import { IButton } from './button.interface';

export default function Button({ title, ...rest }: IButton) {
    return (
        <button {...rest}>
            {title}
        </button>
    )
}
