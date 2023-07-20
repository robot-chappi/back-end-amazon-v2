import { Prisma } from "@prisma/client";
import { returnCategoryObject } from "src/category/objects/return-category.object";
import { returnReviewObject } from "src/review/objects/return-review.object";

export const productReturnObject: Prisma.ProductSelect = {
    images: true,
    description: true,
    id: true,
    name: true,
    price: true,
    createdAt: true,
    slug: true,
    category: {
        select: returnCategoryObject
    },
    reviews: {
        select: returnReviewObject,
        orderBy: {
            createdAt: 'desc'
        }
    }
}

export const productReturnObjectFullest: Prisma.ProductSelect = {
    ...productReturnObject,
    // reviews: {
    //     select: returnReviewObject
    // },
    // category: {
    //     select: returnCategoryObject
    // }
}