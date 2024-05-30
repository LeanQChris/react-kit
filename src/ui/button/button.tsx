import React from 'react';
import { IButton } from './button.interface';

function Button({ title, ...rest }: IButton) {
    return (
        <button className='bg-white text-black rounded-xl px-4 py-2 hover:scale-105 transition' {...rest}>
            {title}
        </button>
    )
}

export default Button;
