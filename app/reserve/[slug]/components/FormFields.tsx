import React from "react";
import { Input } from "../../../../components/exportFiles";

const FormFields = () => {
  return (
    <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 place-items-start mt-7 max-w-xl w-full">
      <Input label="First name" />
      <Input label="Last name" />
      <Input label="Phone number" />
      <Input label="Email" />
      <Input label="Occasion (optional)" />
      <Input label="Requests (optional)" />
    </div>
  );
};

export default FormFields;
