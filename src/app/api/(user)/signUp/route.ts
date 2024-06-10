import prisma from "@/app/libs/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  email: string;
  password: string;
  nickname: string;
  job: "frontend" | "backend" | "devops" | "ai";
  description: string;
}

export async function GET(request: Request) {
  // const body: RequestBody = await request.json();
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);

  return new Response(JSON.stringify(allUsers));
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  console.log("body", body);
  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: await bcrypt.hash(body.password, 10),
      nickname: body.nickname,
      job: body.job,
      description: body.description,
    },
  });

  const { password, ...result } = user;
  return new Response(JSON.stringify(result));
}
