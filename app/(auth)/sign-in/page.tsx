'use client'

import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputFields";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form"

const SignIn = () => {

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<SignInFormData>({
        defaultValues: {
            email: "",
            password: ""
        },

        mode: 'onBlur',
    })

    const onSubmit = async (data: SignInFormData) => {
        try {
            console.log(data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <h1 className="form-title">Log in to your Account</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full">
                <InputField
                    name='email'
                    label='Email'
                    placeholder='Enter your Email'
                    register={register}
                    error={errors.email}
                    validation={{ required: "Email is required" }}
                    type="email"
                />

                <InputField
                    name='password'
                    label='Password'
                    placeholder='Enter your Password'
                    register={register}
                    error={errors.password}
                    validation={{
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be atleast 6 characters"
                        }
                    }}
                    type='password'
                />
                <Button className='yellow-btn w-full mt-5'>Log In</Button>
                <FooterLink text="Don't have an account?" linkText="Create an account" href="/sign-up" />
            </form>
        </>
    )
}

export default SignIn