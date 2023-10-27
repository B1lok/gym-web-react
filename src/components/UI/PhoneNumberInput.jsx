import React from 'react';
import {InputMask} from 'primereact/inputmask';

const PhoneNumberInput = ({onChange, error}) => {
    return (
        <>
            <InputMask
                aria-label="phone number" className="form-control fs-5" id="phone" name="phone"
                mask="+38(099)999-99-99" placeholder="+38(0__)___-__-__" required
                onChange={e => onChange(e.target.value)}
            />
            {error && <span className="text-danger">{error}</span>}
        </>
    );
};

export default PhoneNumberInput;