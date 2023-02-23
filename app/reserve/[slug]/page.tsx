import React from "react";
import { Button, Typography } from "../../../components/exportFiles";

import HeroSection from "@/components/HeroSection";
import ImgDesc from "./components/ImgDesc";
import FormFields from "./components/FormFields";

const ReservePage = () => {
  return (
    <div className="">
      <HeroSection />
      <div className=" flex flex-col juce items-center">
        <Typography variant="h5" className="mb-5 underline underline-offset-2">
          You're almost done
        </Typography>

        {/* Image and description */}
        <ImgDesc />

        {/* form fields */}
        <FormFields />
        <Button
          color="red"
          ripple={true}
          className=" mt-4 w-full max-w-xl text-base"
        >
          Complete Reservation
        </Button>
        <Typography className=" max-w-xl w-full mt-4">
          By clicking ....
        </Typography>
      </div>
    </div>
  );
};

export default ReservePage;
