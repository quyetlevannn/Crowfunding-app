import { Button, ButtonGoogle } from 'components/button';
import LayoutAuthentication from 'layout/LayoutAuthentication';
import React from 'react';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormGroup from 'components/common/FormGroup';
import { useForm } from 'react-hook-form';
import { Label } from 'components/label';
import { Input } from 'components/input';
import useToggleValue from 'hooks/useToggleValue';
import { IconEyeTonggle } from 'components/icons';
import { useDispatch } from 'react-redux';
import { authLogin } from 'store/auth/auth-slice';

const schema = yup.object({
    email: yup.string().email().required('This filed is required'),
    password: yup.string().required('This filed is required').min(8, 'Password must be 8 character '),
})
const SignInPage = () => {
    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onSubmit'
    })
    const { value: showPassword, handleToggleValue: handleTogglePassword } = useToggleValue();

    const dispatch = useDispatch()
    const handleSignIn = (values) => {
        dispatch(authLogin(values))
    }

    return (
        <LayoutAuthentication heading='Welcome Back!'>
            <p className='mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8'>
                Don't have an account?{" "}
                <Link to="/register" className='font-medium underline text-primary'>
                    Sign up
                </Link>
            </p>
            <ButtonGoogle text='Sign in with google' ></ButtonGoogle>
            <form onSubmit={handleSubmit(handleSignIn)}>
                <FormGroup className='flex flex-col gap-x-3'>
                    <Label className='mt-8' htmlFor='email'>Email *</Label>
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
                    <Label htmlFor='password' className='mt-1'>Password *</Label>
                    <Input
                        control={control}
                        name='password'
                        type={`${showPassword ? 'text' : 'password'}`}
                        placeholder='Enter a password'
                        error={errors.password?.message}
                    >
                        <IconEyeTonggle
                            open={showPassword}
                            onClick={handleTogglePassword}>
                        </IconEyeTonggle>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <div className='text-right'>
                        <span className='inline-block font-medium text-primary'>
                            Forgot password
                        </span>
                    </div>
                </FormGroup>
                <Button className='w-full bg-primary ' type='submit'>
                    Sign in
                </Button>

            </form>
        </LayoutAuthentication>
    );
};

export default SignInPage;