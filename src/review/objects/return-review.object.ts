import { Prisma } from "@prisma/client";
import { returnUserObject } from "src/user/objects/return-user.object";

export const returnReviewObject: Prisma.ReviewSelect = {
    user: {
        select: returnUserObject
    },
    id: true,
    rating: true,
    text: true,
    createdAt: true
}