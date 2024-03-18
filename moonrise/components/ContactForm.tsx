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
      <form className='tutorial gap-2' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex gap-2'>  
          <input {...register("firstName")} 
            type="text" 
            placeholder="First Name" 
            className='p-3 rounded-md'
          />
          <input {...register("lastName")} 
            type="text" 
            placeholder="Last Name" 
            className='p-3 rounded-md'
          />
        </div>

        <div className='flex gap-2'>
          <input {...register("company")} 
            type="text" 
            placeholder="Company" 
            className='p-3 rounded-md'
          />
          <input {...register("jobTitle")} 
            type="text" 
            placeholder="Job Title" 
            className='p-3 rounded-md'
          />
        </div>
        
        <div className='flex gap-2'>
          <input {...register("email")} 
            type="text" 
            placeholder="Email" 
            className='p-3 rounded-md'
          />
          <input {...register("phoneNumber")} 
            type="text" 
            placeholder="Phone Number" 
            className='p-3 rounded-md'
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

// const ContactForm: React.FC = () => {
//   return (
//     <div className='flex flex-col flex-center items-center w-full min-h-screen px-5 py-5 bg-white'>
//       <div className='flex flex-col py-8 items-center'>
//         <p className='text-[#003030] pb-8'>contact</p>
//         <p className='text-[#003030]'>Thank you for your interest in moonrise. To speak with a representative, please complete the form below. One of our experts will follow up with you shortly.</p>
//       </div>

//       <div className='flex border w-2/3'> 
//         <form className='flex flex-col w-full'>
//           <div className='flex w-full'>
//             <div className='w-1/2 px-2'>
//               <p className='text-[#003030]'>First Name</p>
//               <input type="text" placeholder="Type here" className="input input-bordered w-full" />
//             </div>
//             <div className='w-1/2 px-2'>
//               <p className='text-[#003030]'>Last Name</p>
//               <input type="text" placeholder="Type here" className="input input-bordered w-full" />
//             </div>
//           </div>
//           <div className='flex w-full'>
//             <div className='w-1/2 px-2'>
//               <p className='text-[#003030]'>Company</p>
//               <input type="text" placeholder="Type here" className="input input-bordered w-full" />
//             </div>
//             <div className='w-1/2 px-2'>
//               <p className='text-[#003030]'>Job Title</p>
//               <input type="text" placeholder="Type here" className="input input-bordered w-full" />
//             </div>
//           </div>
//           <div className='flex w-full'>
//             <div className='w-1/2 px-2'>
//               <p className='text-[#003030]'>E-mail</p>
//               <input type="text" placeholder="Type here" className="input input-bordered w-full" />
//             </div>
//             <div className='w-1/2 px-2'>
//               <p className='text-[#003030]'>Phone Number</p>
//               <input type="text" placeholder="Type here" className="input input-bordered w-full" />
//             </div>
//           </div>
//           <CountryList />
//         </form>
//       </div>
//     </div>
//   )
// }

// export default ContactForm