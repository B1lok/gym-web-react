import React, {useEffect, useRef} from 'react';
import IMask from 'imask';
import * as events from "events";

const usePhoneMask = () => {
    const phoneInputRef = useRef(null);

    useEffect(() => {
        const maskOptions = {
            mask: '+{38}(\\000)000-00-00',
            lazy: false,
        };
        const mask = IMask(phoneInputRef.current, maskOptions);

        return () => {
            mask.destroy();
        };
    }, []);

    return phoneInputRef;
};

const PhoneNumberInput = ({onChange, error}) => {
    const phoneInputRef = usePhoneMask();

    return (
        <>
            <input aria-label="phone number" className="form-control fs-5" id="phone" name="phone"
                   placeholder="Phone number" required type="text" onChange={e => onChange(e.target.value)}
                    ref={phoneInputRef}/>
            {error && <span className="text-danger" id="phoneError">{error}</span>}
        </>
    );
};

export default PhoneNumberInput;