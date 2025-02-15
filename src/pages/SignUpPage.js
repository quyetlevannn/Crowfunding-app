import React from 'react';
import LayoutAuthentication from 'layout/LayoutAuthentication';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Label } from 'components/label';
import { Input } from 'components/input';
import FormGroup from 'components/common/FormGroup';
import { Button } from 'components/button';
import { Checkbox } from 'components/checkbox';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IconEyeTonggle } from 'components/icons';
import useToggleValue from 'hooks/useToggleValue';
import { useDispatch } from 'react-redux';
import { authRegister } from 'store/auth/auth-slice';

const schema = yup.object({
    name: yup.string().required('This filed is required'),
    email: yup.string('Invalid email adresss').required('This filed is required'),
    password: yup.string().required('This filed is required').min(8, 'Password must be 8 character '),
})

const SignUpPage = () => {
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit'
    })
    const dispatch = useDispatch();
    const handleSignUp = async (values) => {
        try {
            dispatch(authRegister(values))
            reset({})
        } catch (error) {

        }
    };

    const { value: acceptTerm, handleToggleValue: handleTonggleTerm } = useToggleValue();
    const { value: showPassword, handleToggleValue: handleTogglePassword } = useToggleValue();

    return (
        <LayoutAuthentication heading="SignUp">
            <p className='mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8'>
                Already have an account?{" "}
                <Link to="/login" className='font-medium underline text-primary'>
                    Login
                </Link>
            </p>
            <button className='flex items-center justify-center w-full py-3 mb-2 text-base font-semibold border gap-x-2 border-stone-300 rounded-xl text-text2 dark:text-white'>
                <img srcSet='/icon-gg1.png' alt='icon-gg1' />
                <span>Sign up with google</span>
            </button>
            <p className='p-1 mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 dark:text-white dark:border-darkStroke'>
                Or sign up with email
            </p>
            <form onSubmit={handleSubmit(handleSignUp)}>
                <FormGroup className='flex flex-col gap-x-3'>
                    <Label htmlFor='name'>Full Name *</Label>
                    <Input
                        control={control}
                        name='name'
                        placeholder='Louis Vuitton'
                        error={errors.name?.message}
                    >
                    </Input>
                </FormGroup>

                <FormGroup className='flex flex-col gap-x-3'>
                    <Label htmlFor='email'>Email *</Label>
                    <Input
                        control={control}
                        name='email'
                        type='email'
                        placeholder='Example@gmail.com'
                        error={errors.email?.message}
                    >
                    </Input>
                </FormGroup>

                <FormGroup className='flex flex-col gap-x-3'>
                    <Label htmlFor='password'>Password *</Label>
                    <Input
                        control={control}
                        name='password'
                        type={`${showPassword ? 'text' : 'password'}`}
                        placeholder='Create a password'
                        error={errors.password?.message}
                    >
                        <IconEyeTonggle open={showPassword} onClick={handleTogglePassword}></IconEyeTonggle>
                    </Input>
                </FormGroup>

                <div className='flex items-start mb-5 gap-x-5'>
                    <Checkbox
                        name='term'
                        checked={acceptTerm}
                        onClick={handleTonggleTerm}>
                        <p className='flex-1 text-xs lg:text-sm text-text2 dark:text-text3'>
                            I agree to the
                            <span className='underline text-secondary'>{' '} Terms of Use </span>{' '}
                            and have read and understand the
                            <span className='underline text-secondary'> Privacy policy.</span>
                        </p>
                    </Checkbox>
                </div>
                <Button className='w-full bg-primary' type='submit'>Create my account</Button>
            </form>
        </LayoutAuthentication>
    );
};

export default SignUpPage;