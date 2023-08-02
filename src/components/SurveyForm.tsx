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
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Slider } from "./ui/slider";
import Loading from "./Loading";

const SurveyForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      org: "HCLTECH",
      domain: "Health Care and Social Assistance",
      role: "SDE",
      experience: "1-2 years",
      surveyQ1: [3],
      surveyQ2: [3],
      surveyQ3: [3],
      surveyQ4: [4],
      surveyQ5: [3],
      surveyQ6: [4],
      // orgLvl: "",
      // department: "",
      // region: "",
      // country: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values.surveyQ4);
    let res = await submitSurveyAction(values);
    console.log(res);

    if (res.id) {
      alert("Survey Submitted Successfully");
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
                <FormLabel className="text-xs md:text-base">
                  What is the name of your Organization?
                </FormLabel>
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
                <FormLabel className="text-xs md:text-base">
                  What Domain do you work in?
                </FormLabel>
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
                <FormLabel className="text-xs md:text-base">
                  What is your persona (Job Role)?
                </FormLabel>
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
                <FormLabel className="text-xs md:text-base">
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

          {surveyQuestions.map((question: SurveyQuestion, i: number) => (
            <FormField
              control={form.control}
              key={question.value}
              name={question.value}
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-xs md:text-base">
                    {question.question}
                  </FormLabel>
                  <div className="flex flex-col gap-2">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                      <FormItem className="flex items-center space-x-3 space-y-0 text-muted-foreground">
                        <FormLabel className="text-xs font-normal md:text-sm">
                          {question.label.min}
                        </FormLabel>
                      </FormItem>
                      <FormItem className="items-center justify-center hidden space-x-3 space-y-0 sm:flex text-muted-foreground">
                        <FormLabel className="text-xs font-normal md:text-sm">
                          {question.label.mid}
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center justify-end space-x-3 space-y-0 text-muted-foreground">
                        <FormLabel className="text-xs font-normal md:text-sm">
                          {question.label.max}
                        </FormLabel>
                      </FormItem>
                    </div>
                    <Slider
                      defaultValue={[Number(field.value[0])]}
                      onValueChange={field.onChange}
                      min={1}
                      max={5}
                    />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type="submit">{form.formState.isSubmitting? <Loading />: "Submit"}</Button>
        </form>
      </Form>
    </div>
  );
};

export default SurveyForm;
