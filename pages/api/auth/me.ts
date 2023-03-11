import { NextApiRequest, NextApiResponse } from "next";
import * as jose from "jose";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bearerToken = req.headers["authorization"];
  if (!bearerToken) {
    res.status(401).json({
      errorMessage: "Unauthorized request",
    });
  }

  const token = bearerToken?.split(" ")[1] as string;
  if (!token) {
    res.status(401).json({
      errorMessage: "Unauthorized request",
    });
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    await jose.jwtVerify(token, secret);
  } catch (error) {
    res.status(401).json({ errorMessage: "Unauthorized request" });
  }

  return res.json({
    me: "pradip subedi",
  });
}
