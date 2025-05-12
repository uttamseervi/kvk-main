import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma-client'

// The handler for the API route
export default async function POST(req: NextApiRequest, res: NextApiResponse) {

    try {
        const { name, email, phone, subject, message } = req.body

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Name, Email, and Message are required.' })
        }

        // Save the contact form data to the database using Prisma
        const newContact = await prisma.contact.create({
            data: {
                name,
                email,
                phone,
                subject,
                message,
            },
        })

        // Respond with the saved contact data
        res.status(200).json(newContact)
    } catch (error) {
        console.error('Error saving contact:', error)
        res.status(500).json({ error: 'Failed to save contact information.' })

    }
}
