import prisma from "@/app/lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  email: string;
  password: string;
  nickname: string;
  job: "frontend" | "backend" | "devops" | "ai";
  description: string;
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
  return new Response(
    JSON.stringify({
      success: true,
      message: "회원가입 완료",
      error: null,
      data: result,
    })
  );
}
