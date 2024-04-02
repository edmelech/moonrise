import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import MoonriseLogo from './MoonriseLogo'
import CountryList from './CountryList'

const enquieries = [
  "We are looking for hiring assistance",
  "I am looking for vacancies",
  "I want to work at moonrise",
  "I have a different enquiry"
]

const countries = [
  "Canada",
  "UK",
  "USA",
]

const schema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1, { message: "Please enter your first name" }),
  lastName: z.string().min(1, { message: "Please enter your last name" }),
  company: z.string(),
  jobTitle: z.string(),
  phoneNumber: z.string().regex(/^\d{7,}$/i, { message: "Phone number must contain at least 7 digits" }),
  country: z.string().min(1, "Please select a country"),
  enquieries: z.string().min(1, "Please select an enquiry"),
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
          <div className='flex flex-col flex-1'>
            <label htmlFor='firstName' className='custom-text pb-2'>First Name</label>
            <input {...register("firstName")} 
              type="text" 
              id="firstName"
              className='p-3 rounded-md flex-1 bg-transparent border border-green-950 custom-text'
            />
          </div>
          <div className='flex flex-col flex-1'>
            <label htmlFor='lastName' className='custom-text pb-2'>Last Name</label>
            <input {...register("lastName")} 
              type="text" 
              id='lastName'
              className='p-3 rounded-md flex-1 bg-transparent border border-green-950 custom-text'
            />
          </div>
        </div>

        <div className='flex gap-2'>
          <div className='flex flex-col flex-1'>
            <label htmlFor='company' className='custom-text pb-2'>Company</label>
            <input {...register("company")} 
              type="text" 
              id='company'
              className='p-3 rounded-md flex-1 bg-transparent border border-green-950 custom-text'
            />
          </div>
          <div className='flex flex-col flex-1'>
            <label htmlFor='jobTitle' className='custom-text pb-2'>Job Title</label>
            <input {...register("jobTitle")} 
              type="text" 
              id='jobTitle'
              className='p-3 rounded-md flex-1 bg-transparent border border-green-950 custom-text'
            />
          </div>
        </div>
        
        <div className='flex gap-2 '>
          <div className='flex flex-col flex-1 '>
            <label htmlFor='email' className='custom-text pb-2'>Email</label>
            <input {...register("email")} 
              type="text" 
              id='email'
              className='p-3 rounded-md flex-1 bg-transparent border border-green-950 custom-text'
            />
          </div>
          <div className='flex flex-col flex-1 '>
            <label htmlFor='phone' className='custom-text pb-2'>Phone number</label>
            <input {...register("phoneNumber")} 
              type="text" 
              id='phone'
              className='p-3 rounded-md flex-1 bg-transparent border border-green-950 custom-text'
            />
          </div>
        </div>
        <div className='flex flex-col flex-1'>
          <label htmlFor='country' className='custom-text pb-2'>Country</label>
          <select {...register("country")}
            id='country'
            className='p-3 rounded-md flex-1 bg-transparent border border-green-950 text-slate-500'
            defaultValue=""
          >
            <option value="" disabled>
              Select a country
            </option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div className='flex flex-col flex-1'>
          <label htmlFor='country' className='custom-text pb-2'>How Can We Help You</label>
          <select {...register("country")}
            id='country'
            className='p-3 rounded-md flex-1 bg-transparent border border-green-950 text-slate-500'
            defaultValue=""
          >
            <option value="" disabled>
              Select one...
            </option>
            {enquieries.map((enquiery, index) => (
              <option key={index} value={enquiery}>
                {enquiery}
              </option>
            ))}
          </select>
        </div>
    
        {/* {errors.lastName && <div className='text-red-500'>{errors.lastName.message}</div>}
        {errors.email && <div className='text-red-500'>{errors.email.message}</div>}
        {errors.firstName && <div className='text-red-500'>{errors.firstName.message}</div>}
        {errors.phoneNumber && <div className='text-red-500'>{errors.phoneNumber.message}</div>}
         */}
        <div className='flex justify-center'>
          <button disabled={isSubmitting} type="submit" className="custom-button hover:bg-blue-700 text-white m-4 py-4 px-4 rounded w-40">
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
       
      </form>
        {errors && (
          <div className="text-red-500">
            {Object.values(errors).map((error, index) => (
              <p key={index}>{error.message}</p>
            ))}
          </div>
      )}


    </div>
    
  );
}

export default ReactHookForm
