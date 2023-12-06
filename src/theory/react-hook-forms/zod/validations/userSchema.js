import {z} from 'zod'

export const plans = ['basic', 'premium', 'medium'];

export const userSchema = z.object({
    name: z
           .string()
           .min(3, {message: 'Name must be at least 3 characters long'})
           .max(200, {message: 'Name must be less than 200 characters long'}),
    email: z
            .string()
            .email({message: 'Enter a valid Email'}),
    password: z
                .string()
                .min(6, {message: 'Password must be at least 6 characters long'}),
    confirmPassword: z
                      .string()
                      .min(6, {message: 'Confirm Password must be at least 6 characters long'}),
    weight: z
                .string()
                .refine(weight => !isNaN(parseFloat(weight)),{message: 'Weight must be a number'}),
    // plan: z
    //         .emun(plans, {
    //             errorMap: () => ({message: 'Please select a valid plan'})
    //         })

}).refine(data => data.password === data.confirmPassword, {
    message: 'Password do not match with confirm password',
    path: ['confirmPassword']
})