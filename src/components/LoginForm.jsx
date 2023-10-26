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

    const [user, setUser] = useState({
        name: null,
        surname: null,
        fathersName: null,
        email: null,
        password: null,
        dateOfBirth: '',
        group: null,
        phoneNumber: null,
        gender: null
    })

    const handleSubmitButton = () =>{
        if (Object.values(user).every(value => value === value)){
            onSubmit(user)
            setSubmitError(null)
        } else {
            setSubmitError("Invalid submit")
        }
    }
    const handleEmailChange = (email) => {
        if (/^[a-zA-Z0-9_.-]+@[a-z0-9-]+\.[a-z]{1,4}$/.test(email)) {
            setEmailError(null)
            setUser({...user, email})
        } else {
            setEmailError("Invalid Email")
        }
    }

    const handlePasswordChange = (password) => {
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
        if (isTextInputCorrect(name)) {
            setNameError(null)
            setUser({...user, name})
        } else setNameError('Should contain only letters')
    }
    const handleSurnameChange = (surname) => {
        if (isTextInputCorrect(surname)) {
            setSurnameError(null)
            setUser({...user, surname})
        } else setSurnameError('Should contain only letters')
    }
    const handleFathersNameChange = (fathersName) => {
        if (isTextInputCorrect(fathersName)) {
            setFathersNameError(null)
            setUser({...user, fathersName})
        } else setFathersNameError('Should contain only letters')
    }
    const handleDateChange = (date) => {
        const dateOfBirth = new Date(date)
        if (isNaN(dateOfBirth.getTime()) || today.getFullYear() <= dateOfBirth.getFullYear() || today.getFullYear() - 150 >= dateOfBirth.getFullYear()) {
            setDateError("Invalid Date")
        } else {
            setDateError(null)
            setUser({...user, dateOfBirth : dateOfBirth.toString()})
        }
    }
    const handleGroupChange = (group) => {
        setUser({...user, group})
    }

    const handlePhoneNumberChange = (phoneNumber) => {
        if (phoneNumber.includes('_')) {
            setPhoneNumberError("Invalid phone number")
        } else {
            setPhoneNumberError(null)
            setUser({...user, phoneNumber})
        }
    }
    const handleGenderChange = (gender) => setUser({...user, gender})
    const isTextInputCorrect = (text) => /^[a-zA-Z]+$/.test(text)
    const radioOptions = [
            { id: "male", value: "Male", label: "Male" },
            {id: "female", value: "Female", label: "Female" },
            {id: "other", value: "Other", label: "Other" }]
    const selectOptions = [
        { value: "IA-21", label: "IA-21" },
        { value: "IA-22", label: "IA-22" },
        { value: "IA-23", label: "IA-23" },
        { value: "IA-24", label: "IA-24" }
    ]

    const [emailError, setEmailError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    const [nameError, setNameError] = useState(null)
    const [surnameError, setSurnameError] = useState(null)
    const [fathersNameError, setFathersNameError] = useState(null)
    const [dateError, setDateError] = useState(null)
    const [phoneNumberError, setPhoneNumberError] = useState(null)
    const [submitError, setSubmitError] = useState(null)

    return (
        <div className="container h-100">
            <div className="row h-100 d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <form className="bg-dark p-3 p-sm-5 rounded-5">
                        <h2 className="mb-4 mb-sm-5 text-center text-white">Sign up</h2>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <div className="form-floating mb-3">
                                    <EmailInput onChange={handleEmailChange} error={emailError}></EmailInput>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="form-floating mb-3">
                                    <PasswordInput onChange={handlePasswordChange} error={passwordError}></PasswordInput>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="form-floating mb-3">
                                    <TextInput id="name"
                                               placeholder="Name"
                                               htmlFor="name"
                                               onChange={handleNameChange}
                                               error={nameError}>Name</TextInput>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className="form-floating mb-3">
                                    <TextInput id="surname"
                                               placeholder="Surname"
                                               htmlFor="surname"
                                               onChange={handleSurnameChange}
                                               error={surnameError}
                                                >Surname</TextInput>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating mb-3">
                                    <TextInput id="father"
                                               placeholder="Father's name"
                                               htmlFor="father"
                                               onChange={handleFathersNameChange}
                                               error={fathersNameError}>Father's name</TextInput>
                                </div>
                            </div>
                            <div className="col-12 text-white mb-3">
                                <RadioInput
                                    options={radioOptions}
                                    name="gender"
                                    onChange={handleGenderChange}></RadioInput>
                            </div>
                            <div className="col-6 mb-3">
                                <DateInput
                                        label="Date of birth"
                                        placeholder="Date"
                                        error={dateError}
                                        onChange={handleDateChange}
                                        max={new Date(today.getFullYear(), today.getMonth(), today.getDate()).toISOString().split('T')[0]}></DateInput>
                            </div>
                            <div className="col-6 mb-3">
                                <SelectInput
                                        label="Group"
                                        options={selectOptions}
                                        onChange={handleGroupChange}></SelectInput>
                            </div>
                            <div className="col-12 mb-3">
                                <PhoneNumberInput
                                        onChange={handlePhoneNumberChange}
                                        error={phoneNumberError}></PhoneNumberInput>
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