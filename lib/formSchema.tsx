import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(1, { message: "Please enter your full name" }),
  company: z.string(),
  jobTitle: z.string(),
  phoneNumber: z.string().regex(/^\d{7,}$/i, { message: "Phone number must contain at least 7 digits" }),
  country: z.string().min(1, "Please select a country"),
  msg: z.string().min(1, "Please enter a message"),
});

export default schema;