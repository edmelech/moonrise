'use client';

import React from 'react'
import Image from 'next/image';
import { SubmitHandler, useForm } from 'react-hook-form'
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendContactForm } from '../lib/api'
import { useState } from 'react'
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
  Select,
} from "@chakra-ui/react";
import schema from '@/lib/formSchema';
import MoonriseLogo from './MoonriseLogo'
// import CountryList from './CountryList'
import { m } from 'framer-motion';



type FormFields = z.infer<typeof schema>;

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

const ReactHookForm = () => {
  const { 
    register, 
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
   } = useForm<FormFields>({
    resolver: zodResolver(schema),
   });
   
  const [state, setState] = useState({ isLoading: false, error: "" });
  const [touched, setTouched] = useState({});
  const toast = useToast();

  const { isLoading, error } = state;

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));

    console.log('form data:', data);

    try {
      await sendContactForm(data); // Call the sendContactForm function with form data
      reset()
      console.log("Submitting form...");
      toast ({
        title: "Message sent",
        description: "Thank you for your interest in moonrise. One of our experts will follow up with you shortly",
        status: "success",
        duration: 6000,
        position: "top",
      });
      setState({ ...state, isLoading: false, error: "" });

    } catch (error) {
      console.error('Error submitting form:', error);
      setState({ ...state, isLoading: false, error: "Failed to send email. Please try again later." });
      toast({
        title: "Submission failed",
        description: "There was an issue submitting the form. Please try again.",
        status: "error",
        duration: 6000,
        position: "top",
      });
    }

    console.log(data) 
  }

 
  return (
    <div className='flex flex-col justify-center items-center min-h-screen bg-white'>
      <div className='contact-container m-4' >
        <Image src="/contact.png" alt="contact" width={400} height={100}  />
      </div>
      {error && (
        <span className={`text-red-500`}>{error}</span>
      )}
      <div className='flex justify-center w-1/2 p-3'>
        <p className='text-center custom-text'>Thank you for your interest in moonrise. To speak with a representative, please complete the form below. One of our experts will follow up with you shortly.</p>
      </div>
      <form className='tutorial gap-2 w-full sm:w-3/5 form-mobile-padding' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col sm:flex-row gap-2'>  
          <div className='flex flex-col flex-1'>
            <FormControl isInvalid={!!errors.name}>
              <label htmlFor='name' className='custom-text pb-2'>Full Name</label>
              <Input {...register("name")} 
                type="text" 
                id="name"
                className={`p-3 rounded-md flex-1 bg-transparent border border-green-950 custom-text ${errors.name ? 'error-border' : ''}`}
              />
              {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
            </FormControl>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-2'>
          <div className='flex flex-col flex-1'>
            <label htmlFor='company' className='custom-text pb-2'>Company</label>
            <Input {...register("company")} 
              type="text" 
              id='company'
              className='p-3 rounded-md flex-1 bg-transparent border border-green-950 custom-text'
            />
          </div>
          <div className='flex flex-col flex-1'>
            <label htmlFor='jobTitle' className='custom-text pb-2'>Job Title</label>
            <Input {...register("jobTitle")} 
              type="text" 
              id='jobTitle'
              className='p-3 rounded-md flex-1 bg-transparent border border-green-950 custom-text'
            />
          </div>
        </div>
        
        <div className='flex flex-col sm:flex-row gap-2 '>
          <div className='flex flex-col flex-1 '>
            <label htmlFor='email' className='custom-text pb-2'>Email</label>
            <Input {...register("email")} 
              type="text" 
              id='email'
              className={`p-3 rounded-md flex-1 bg-transparent border border-green-950 custom-text ${errors.email ? 'error-border' : ''}`}
            />
            {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
          </div>
          <div className='flex flex-col flex-1 '>
            <label htmlFor='phoneNumber' className='custom-text pb-2'>Phone number</label>
            <Input {...register("phoneNumber")} 
              type="text" 
              id='phoneNumber'
              className={`p-3 rounded-md flex-1 bg-transparent border border-green-950 custom-text ${errors.phoneNumber ? 'error-border' : ''}`}  
            />
            {errors.phoneNumber && <span className='text-red-500'>{errors.phoneNumber.message}</span>}
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-2'>  
          <div className='flex flex-col flex-1'>
            <label htmlFor='country' className='custom-text pb-2'>Country</label>
            <Input {...register("country")} 
              type="text" 
              id="country"
              className={`p-3 rounded-md flex-1 bg-transparent border border-green-950 custom-text`}
            />
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <label htmlFor='msg' className='custom-text pb-2'>How can we help you?</label>
          <Textarea {...register("msg")} 
            id='msg'
            className={`p-3 rounded-md flex-1 bg-transparent border border-green-950 custom-text ${errors.msg ? 'error-border' : ''}`}
         
          />
          {errors.msg && <span className='text-red-500'>{errors.msg.message}</span>}
        </div>
    

        <div className='flex justify-center'>
          <button disabled={Object.keys(errors).length > 0 || isSubmitting} type="submit" className="custom-button hover:bg-green-500 text-white m-4 py-4 px-4 rounded w-40">
            {isSubmitting ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              <span className="ml-2">Submitting...</span>
            </div>
          ) : (
            "Submit"
          )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReactHookForm
