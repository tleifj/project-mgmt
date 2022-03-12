
import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
    const {
      query: { id },
      method,
    } = req

    const prisma = new PrismaClient();

    if (method === 'GET') {
        console.log(id);
        
        const task = await prisma.task.findUnique({
            where: {
            id: parseInt(id),
            },
        })
        res.status(200).json({ success: true, data: task })
    }

    if (method === 'PUT') {
        const { body } = req
        const { data } = await prisma.task.update({
            where: { id: parseInt(id) },
            data: {
            ...body,
            },
        })
        res.status(200).json(data)
    }

}