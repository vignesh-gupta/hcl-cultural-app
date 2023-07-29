import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/constants/schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { domains, surveyQuestions } from "@/constants/mapingConstants";
import RatingOptions from "./RatingOptions";
import { SurveyQuestion } from "@/types";
import { submitSurveyAction } from "@/actions";

const SurveyForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      org: "wdsasdas",
      domain: "Health Care and Social Assistance",
      role: "asdasd",
      experience: "1-2 years",
      surveyQ1: "3",
      surveyQ2: "3",
      surveyQ3: "3",
      surveyQ4: "1",
      surveyQ5: "3",
      surveyQ6: "4",
      // orgLvl: "",
      // department: "",
      // region: "",
      // country: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    let res = await submitSurveyAction(values)
    console.log(res);
    
    if(res.id){
      alert("Survey Submitted Successfully")
    }

    form.reset();
  }

  return (
    <div className="mx-16">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="org"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is the name of your Organization?</FormLabel>
                <FormControl>
                  <Input placeholder="HCLTECH" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="domain"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What Domain do you work in?</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Domain" />
                    </SelectTrigger>
                    <SelectContent>
                      {domains.map((domain) => (
                        <SelectItem key={domain} value={domain}>
                          {domain}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is your persona (Job Role)?</FormLabel>
                <FormControl>
                  <Input placeholder="HCLTECH" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  How long have you been employed in your current role?
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Experience" />
                    </SelectTrigger>
                    <SelectContent>
                      {[
                        "Less than a year",
                        "1-2 years",
                        "3-5 years",
                        "6-10 years",
                        "11+ years",
                      ].map((experience) => (
                        <SelectItem key={experience} value={experience}>
                          {experience}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* {[...surveyQuestions].splice(1).map((question: SurveyQuestion, i: number) => ( */}
            <FormField
              key={surveyQuestions[0].value}
              control={form.control}
              name={surveyQuestions[0].value}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{surveyQuestions[0].question}</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Domain" />
                      </SelectTrigger>
                      <RatingOptions />
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          {/* ))} */}

          {/* Testing other ways */}

          
            <FormField
              key={surveyQuestions[1].value}
              control={form.control}
              name={surveyQuestions[1].value} 
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{surveyQuestions[1].question}</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Domain" />
                      </SelectTrigger>
                      <RatingOptions />
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

          {/* End of testing */}
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default SurveyForm;
