import Image from "next/image";
import React from "react";
import {
  ThemeProvider,
  Button,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "../../../../components/exportFiles";

const ImgDesc = () => {
  return (
    <div className=" flex flex-col space-y-2 space-x-0 md:space-x-2 md:space-y-0 md:flex-row">
      <Image
        src="/pic.png"
        alt="image reserve"
        height={200}
        width={200}
        className=" h-32 object-contain "
      />
      <div className=" flex flex-col space-y-3">
        <Typography variant="h3">Aiana restaurant collective</Typography>
        <div className=" flex space-x-1">
          <Typography>Tues 22, 2023</Typography>
          <Typography> 7:30 pm</Typography>
          <Typography>3 people</Typography>
        </div>
      </div>
    </div>
  );
};

export default ImgDesc;
