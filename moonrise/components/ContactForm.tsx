import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import MoonriseLogo from './MoonriseLogo'
import CountryList from './CountryList'

const schema = z.object({
  email: z.string().email(),
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  company: z.string(),
  jobTitle: z.string(),
  phoneNumber: z.string().min(7),
});

type FormFields = z.infer<typeof schema>;

const ReactHookForm = () => {
  const { 
    register, 
    handleSubmit,
    formState: { errors, isSubmitting },
   } = useForm<FormFields>({
    resolver: zodResolver(schema),
   });
   

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(data);
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <form className='tutorial gap-2 w-96' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex gap-2'>  
          <input {...register("firstName")} 
            type="text" 
            placeholder="First Name" 
            className='p-3 rounded-md w-full'
          />
          <input {...register("lastName")} 
            type="text" 
            placeholder="Last Name" 
            className='p-3 rounded-md w-full'
          />
        </div>

        <div className='flex gap-2'>
          <input {...register("company")} 
            type="text" 
            placeholder="Company" 
            className='p-3 rounded-md w-full'
          />
          <input {...register("jobTitle")} 
            type="text" 
            placeholder="Job Title" 
            className='p-3 rounded-md w-full'
          />
        </div>
        
        <div className='flex gap-2'>
          <input {...register("email")} 
            type="text" 
            placeholder="Email" 
            className='p-3 rounded-md w-full'
          />
          <input {...register("phoneNumber")} 
            type="text" 
            placeholder="Phone Number" 
            className='p-3 rounded-md w-full'
          />
        </div>
    
        {errors.lastName && <div className='text-red-500'>{errors.lastName.message}</div>}
        {errors.email && <div className='text-red-500'>{errors.email.message}</div>}
        {errors.firstName && <div className='text-red-500'>{errors.firstName.message}</div>}
        

        <button disabled={isSubmitting} type = "submit">
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
    
  );
}

export default ReactHookForm
