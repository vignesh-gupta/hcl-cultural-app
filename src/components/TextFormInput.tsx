import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { UseFormReturn } from 'react-hook-form';

const TextFormInput = ({form} : {form:  UseFormReturn<{username: string;}, any, undefined>}) => {
  return (
    <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is the name of your Organization?</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
  )
}

export default TextFormInput