"use server"

import { formSchema } from "@/constants/schema"
import prisma  from "@/lib/prisma";
import * as z from "zod";

export async function submitSurveyAction(values: z.infer<typeof formSchema>){

  return await prisma.survey.create({
    data: {
      organization: values.org,
      persona: values.role,
      surveyQ1: values.surveyQ1[0],
      surveyQ2: values.surveyQ2[0],
      surveyQ3: values.surveyQ3[0],
      surveyQ4: values.surveyQ4[0],
      surveyQ5: values.surveyQ5[0],
      surveyQ6: values.surveyQ6[0],
      domain: values.domain,
      experience: values.experience,
    },
  }); 
}

export async function getSurveyAction(){
  return await prisma.survey.findMany({
    select:{
      domain: true
    }
  });
}