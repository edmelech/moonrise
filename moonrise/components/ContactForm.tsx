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
    <div className='flex flex-col justify-center items-center h-screen bg-white'>
      <div className='contact-container m-4'>
        <img src="/contact.png" alt="contact"  />
      </div>
      <div className='flex justify-center w-1/2 p-3'>
        <p className='text-center custom-text'>Thank you for your interest in moonrise. To speak with a representative, please complete the form below. One of our experts will follow up with you shortly.</p>
      </div>
      <form className='tutorial gap-2 w-3/5' onSubmit={handleSubmit(onSubmit)}>
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
        
        <div className='flex justify-center'>
          <button disabled={isSubmitting} type = "submit" className="custom-button hover:bg-blue-700 text-white m-4 py-4 px-4 rounded w-40">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
       
      </form>
    </div>
    
  );
}

export default ReactHookForm
