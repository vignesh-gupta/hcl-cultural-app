import * as z from "zod";

export const formSchema = z.object({
  org: z.string().min(2, {
    message: "Organization Name must be at least 3 characters.",
  }),
  domain: z.string().min(8, {
    message: "Domain Name must be at least 8 characters.",
  }),
  role: z.string().min(2, {
    message: "Domain Name must be at least 2 characters.",
  }),
  experience: z.string().min(8, {
    message: "Experience must be selected from drop down.",
  }),
  // orgLvl: z.string().min(8, {
  //   message: "Level in Organization must be selected from drop down.",
  // }),
  // department: z.string().min(8, {
  //   message: "Department Name must be at least 2 characters",
  // }),
  // region: z.string().min(8, {
  //   message: "Region must be selected from drop down.",
  // }),
  // country: z.string().min(8, {
  //   message: "Country must be selected from drop down.",
  // }),
  surveyQ1: z.number().array().min(1, {
    message: "Answer must be selected from drop down.",
  }),
  surveyQ2: z.number().array().min(1, {
    message: "Answer must be selected from drop down.",
  }),
  surveyQ3: z.number().array().min(1, {
    message: "Answer must be selected from drop down.",
  }),
  surveyQ4: z.number().array().min(1, {
    message: "Answer must be selected from drop down.",
  }),
  surveyQ5: z.number().array().min(1, {
    message: "Answer must be selected from drop down.",
  }),
  surveyQ6: z.number().array().min(1, {
    message: "Answer must be selected from drop down.",
  }),
});
