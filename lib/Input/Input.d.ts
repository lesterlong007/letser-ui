/**
 * @name Input
 * @author Lester
 * @date 2021-06-03 15:08
 */
import React, { InputHTMLAttributes } from 'react';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    clear?: boolean;
    search?: boolean;
    value?: string;
    onChange?: (val: any) => void;
}
declare const Input: React.FC<InputProps>;
export default Input;
