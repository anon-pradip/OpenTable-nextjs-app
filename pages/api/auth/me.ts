import { NextApiRequest, NextApiResponse } from "next";
import jwt, { JwtPayload } from "jsonwebtoken";
import * as jose from "jose";
import { PrismaClient } from "@prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  const bearerToken = req.headers["authorization"];
  if (!bearerToken) {
    return res.status(401).json({
      errorMessage: "Unauthorized request (no bearer token)",
    });
  }

  const token = bearerToken?.split(" ")[1] as string;
  if (!token) {
    return res.status(401).json({
      errorMessage: "Unauthorized request(no token only)",
    });
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    await jose.jwtVerify(token, secret);
  } catch (error) {
    return res
      .status(401)
      .json({ errorMessage: "Unauthorized request (invalid token)" });
  }

  let payload: JwtPayload;
  try {
    payload = jwt.decode(token) as JwtPayload;
    if (!payload || typeof payload !== "object") {
      throw new Error("Invalid token payload");
    }
  } catch (error) {
    return res
      .status(401)
      .json({ errorMessage: "Unauthorized request (invalid token)" });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });
  return res.json({
    me: payload,
  });
}
