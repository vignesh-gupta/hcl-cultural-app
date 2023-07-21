import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "./ui/select";
import { FormControl } from "./ui/form";

const DropdownInput = ({field}: {field: any}) => {
  return (
    <FormControl>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Domain" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="agriculture">Agriculture</SelectItem>
          <SelectItem value="Mining">Mining</SelectItem>
          <SelectItem value="Utilities">Utilities</SelectItem>
          <SelectItem value="Construction">Construction</SelectItem>
          <SelectItem value="Manufacturing">Manufacturing</SelectItem>
          <SelectItem value="Wholesale Trade">Wholesale Trade</SelectItem>
          <SelectItem value="Retail Trade">Retail Trade</SelectItem>
          <SelectItem value="Transportation and Warehousing">
            Transportation and Warehousing
          </SelectItem>
          <SelectItem value="Information and Cultural Industries">
            Information and Cultural Industries
          </SelectItem>
          <SelectItem value="Finance and Insurance">
            Finance and Insurance
          </SelectItem>
          <SelectItem value="Real Estate and Rental Leasing">
            Real Estate and Rental Leasing
          </SelectItem>
          <SelectItem value="Professional , Scientific and Technical Services">
            Professional , Scientific and Technical Services
          </SelectItem>
          <SelectItem value="Management of Companies and Enterprises">
            Management of Companies and Enterprises
          </SelectItem>
          <SelectItem value="Administrative and Support, Waste Management, and Remediation Services">
            Administrative and Support, Waste Management, and Remediation
            Services
          </SelectItem>
          <SelectItem value="Educational Services">
            Educational Services
          </SelectItem>
          <SelectItem value="Health Care and Social Assistance">
            Health Care and Social Assistance
          </SelectItem>
          <SelectItem value="Arts, Entertainment and Recreation">
            Arts, Entertainment and Recreation
          </SelectItem>
          <SelectItem value="Accommodation and Food Services">
            Accommodation and Food Services
          </SelectItem>
          <SelectItem value="Other Services">Other Services</SelectItem>
          <SelectItem value="Public Administration">
            Public Administration
          </SelectItem>
        </SelectContent>
      </Select>
    </FormControl>
  );
};

export default DropdownInput;
