import React from 'react';
import { IButton } from './button.interface';

function Button({ title, ...rest }: IButton) {
    return (
        <button {...rest}>
            {title}
        </button>
    )
}

export default Button;
