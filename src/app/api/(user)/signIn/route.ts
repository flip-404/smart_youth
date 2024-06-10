import prisma from "@/app/libs/prisma";
import { signJwtAccessToken } from "@/app/libs/jwt";
import * as bcrypt from "bcrypt";
import client from "@/app/libs/prisma";

interface RequestBody {
  email: string;
  password: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();

  const user = await client.user.findFirst({
    where: {
      email: body.email,
    },
  });

  if (user && (await bcrypt.compare(body.password, user.password))) {
    const { password, ...userWithoutPass } = user;

    const accessToken = signJwtAccessToken(userWithoutPass);
    const result = {
      ...userWithoutPass,
      accessToken,
    };

    console.log("성공");
    return new Response(JSON.stringify(result));
  } else {
    console.log("실패");
    return new Response(JSON.stringify(null));
  }
}
