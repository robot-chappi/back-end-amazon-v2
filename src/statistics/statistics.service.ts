import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class StatisticsService {
    constructor(private prisma: PrismaService) {}

    async getMain() {
        const ordersCount = await this.prisma.order.count()
        const reviewsCount = await this.prisma.review.count()
        const usersCount = await this.prisma.user.count()
        
        const totalAmount = await this.prisma.order.aggregate({
            _sum: {
                total: true
            }
        })

        // const totalAmount = await this.prisma.order.aggregate({
        //     where: {
        //         userId
        //     },
        //     _sum: {
        //         items: true
        //     }
        // })

        // const sum = await this.prisma.$queryRaw`SELECT sum(price) FROM public."Product"`
        // return sum
        
        return [
            {
                name: 'Orders',
                values: ordersCount
            },
            {
                name: 'Reviews',
                values: reviewsCount
            },
            {
                name: 'Users',
                values: usersCount
            },
            {
                name: 'Total amount',
                values: totalAmount._sum.total || 0
            }
        ]
    }
}
