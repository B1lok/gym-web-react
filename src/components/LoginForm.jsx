import React, {useState} from 'react';
import EmailInput from "./UI/EmailInput";
import PasswordInput from "./UI/PasswordInput";
import TextInput from "./UI/TextInput";
import RadioInput from "./UI/RadioInput";
import DateInput from "./UI/DateInput";
import SelectInput from "./UI/SelectInput";
import PhoneNumberInput from "./UI/PhoneNumberInput";
import SubmitButton from "./UI/SubmitButton";

const LoginForm = ({onSubmit}) => {
    const today = new Date()
    const initialUser = {
        name: null,
        surname: null,
        fathersName: null,
        gender: null,
        dateOfBirth: '',
        email: null,
        password: null,
        phoneNumber: null,
        group: null
    }
    const [user, setUser] = useState(initialUser)

    const resetInputFields = () => {
        setEmailValue('');
        setPasswordValue('');
        setNameValue('');
        setSurnameValue('');
        setFathersNameValue('');
        setGenderValue('');
        setDateValue('');
        setGroupValue('');
        setPhoneNumberValue('');
    };

    const handleSubmitButton = () => {
        if (Object.values(user).every(value => value !== null && value !== '')) {
            onSubmit(user)
            setSubmitError(null)
            setUser(initialUser)
            resetInputFields()
        } else {
            setSubmitError("Invalid submit")
        }
    }

    const handleEmailChange = (email) => {
        setEmailValue(email)
        if (/^[a-zA-Z0-9_.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(email)) {
            setEmailError(null)
            setUser({...user, email})
        } else {
            setEmailError("Invalid email")
        }
    }

    const handlePasswordChange = (password) => {
        setPasswordValue(password)
        if (!/^.{8,}$/.test(password)) {
            setPasswordError('Must contain at least 8 symbols');
        } else if (!/^(?=.*[a-z])/.test(password)) {
            setPasswordError('Must contain at least one lower case letter');
        } else if (!/^(?=.*[A-Z])/.test(password)) {
            setPasswordError('Must contain at least one upper case letter');
        } else if (!/^(?=.*\d)/.test(password)) {
            setPasswordError('Must contain at least one digit');
        } else {
            setPasswordError(null);
            setUser({...user, password})
        }
    }

    const handleNameChange = (name) => {
        setNameValue(name)
        if (isTextInputCorrect(name)) {
            setNameError(null)
            setUser({...user, name})
        } else setNameError('Should contain only letters')
    }

    const handleSurnameChange = (surname) => {
        setSurnameValue(surname)
        if (isTextInputCorrect(surname)) {
            setSurnameError(null)
            setUser({...user, surname})
        } else setSurnameError('Should contain only letters')
    }

    const handleFathersNameChange = (fathersName) => {
        setFathersNameValue(fathersName)
        if (isTextInputCorrect(fathersName)) {
            setFathersNameError(null)
            setUser({...user, fathersName})
        } else setFathersNameError('Should contain only letters')
    }

    const handleGenderChange = (gender) => {
        setGenderValue(gender)
        if (gender === null) {
            setGenderError("Choose gender")
        } else {
            setUser({...user, gender})
        }
    }

    const handleDateChange = (date) => {
        setDateValue(date)
        const dateOfBirth = new Date(date)
        if (isNaN(dateOfBirth.getTime()) || dateOfBirth.getFullYear() > today.getFullYear() || dateOfBirth.getFullYear() < today.getFullYear() - 150) {
            setDateError("Invalid date")
        } else {
            setDateError(null)
            setUser({...user, dateOfBirth: dateOfBirth.toISOString().split('T')[0]})
        }
    }

    const handleGroupChange = (group) => {
        setGroupValue(group)
        if (group === null || group === "") {
            setUser({...user, group: null})
            setGroupError("Choose group")
        } else {
            setUser({...user, group})
            setGroupError(null)
        }
    }

    const handlePhoneNumberChange = (phoneNumber) => {
        setPhoneNumberValue(phoneNumber)
        if (phoneNumber.includes('_')) {
            setPhoneNumberError("Invalid phone number")
        } else {
            setPhoneNumberError(null)
            setUser({...user, phoneNumber})
        }
    }

    const isTextInputCorrect = (text) => /^[a-zA-Z]+$/.test(text)

    const radioOptions = [
        {id: "male", value: "Male", label: "Male"},
        {id: "female", value: "Female", label: "Female"},
        {id: "other", value: "Other", label: "Other"}]

    const selectOptions = [
        {value: "IA-21", label: "IA-21"},
        {value: "IA-22", label: "IA-22"},
        {value: "IA-23", label: "IA-23"},
        {value: "IA-24", label: "IA-24"}
    ]

    const [emailError, setEmailError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    const [nameError, setNameError] = useState(null)
    const [surnameError, setSurnameError] = useState(null)
    const [fathersNameError, setFathersNameError] = useState(null)
    const [genderError, setGenderError] = useState(null)
    const [dateError, setDateError] = useState(null)
    const [groupError, setGroupError] = useState(null)
    const [phoneNumberError, setPhoneNumberError] = useState(null)
    const [submitError, setSubmitError] = useState(null)

    const [emailValue, setEmailValue] = useState(null)
    const [passwordValue, setPasswordValue] = useState(null)
    const [nameValue, setNameValue] = useState(null)
    const [surnameValue, setSurnameValue] = useState(null)
    const [fathersNameValue, setFathersNameValue] = useState(null)
    const [genderValue, setGenderValue] = useState(null)
    const [dateValue, setDateValue] = useState(null)
    const [groupValue, setGroupValue] = useState(null)
    const [phoneNumberValue, setPhoneNumberValue] = useState(null)

    return (
        <div className="container h-100">
            <div className="row h-100 d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <form className="bg-dark p-3 p-sm-5 rounded-5">
                        <h2 className="mb-4 mb-sm-5 text-center text-white">Sign up</h2>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <div className="form-floating mb-3">
                                    <EmailInput onChange={handleEmailChange} value={emailValue}
                                                error={emailError}></EmailInput>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="form-floating mb-3">
                                    <PasswordInput
                                        onChange={handlePasswordChange}
                                        error={passwordError} value={passwordValue}>
                                    </PasswordInput>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="form-floating mb-3">
                                    <TextInput
                                        id="name"
                                        placeholder="Name"
                                        htmlFor="name"
                                        onChange={handleNameChange}
                                        error={nameError} value={nameValue}>
                                        Name
                                    </TextInput>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="form-floating mb-3">
                                    <TextInput
                                        id="surname"
                                        placeholder="Surname"
                                        htmlFor="surname"
                                        onChange={handleSurnameChange}
                                        error={surnameError} value={surnameValue}>
                                        Surname
                                    </TextInput>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating mb-3">
                                    <TextInput
                                        id="father"
                                        placeholder="Father's name"
                                        htmlFor="father"
                                        onChange={handleFathersNameChange}
                                        error={fathersNameError} value={fathersNameValue}>
                                        Father's name
                                    </TextInput>
                                </div>
                            </div>
                            <div className="col-12 text-white mb-3">
                                <RadioInput
                                    name="gender"
                                    options={radioOptions}
                                    onChange={handleGenderChange}
                                    error={genderError} value={genderValue}>
                                </RadioInput>
                            </div>
                            <div className="col-6 mb-3">
                                <DateInput
                                    label="Date of birth"
                                    placeholder="Date"
                                    max={new Date(today.getFullYear(), today.getMonth(), today.getDate()).toISOString().split('T')[0]}
                                    onChange={handleDateChange}
                                    error={dateError} value={dateValue}>
                                </DateInput>
                            </div>
                            <div className="col-6 mb-3">
                                <SelectInput
                                    label="Group"
                                    options={selectOptions}
                                    onChange={handleGroupChange}
                                    error={groupError} value={groupValue}>
                                </SelectInput>
                            </div>
                            <div className="col-12 mb-3">
                                <PhoneNumberInput
                                    onChange={handlePhoneNumberChange}
                                    error={phoneNumberError} value={phoneNumberValue}>
                                </PhoneNumberInput>
                            </div>
                        </div>
                        <SubmitButton value="Sign up" error={submitError} onClick={handleSubmitButton}></SubmitButton>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;