import { PrismaClient } from '@prisma/client'

const prisma:any = new PrismaClient()

// // Reuse Prisma client during hot reloading in development
// if (process.env.NODE_ENV === 'development') {
//   globalThis.prisma = prisma
// }

export default prisma
