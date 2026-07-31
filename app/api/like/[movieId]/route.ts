import { prisma } from "@/app/utils/prisma";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function POST(request, {params  }){
    const {movieId} = await params
    console.log(movieId)
    const token = await getToken({req: request});
    if(!token) {
        return NextResponse.json({message: "unauthorized"}, {status : 401});
    }
    const user = await prisma.user.update({
        where : {
            email : token.email
        },
        data : {
            MovieLikes : {
                create : [{movieId}]
            }
        }
    });

    return NextResponse.json(user)

} 