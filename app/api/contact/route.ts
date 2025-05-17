import prisma from '@/lib/prisma-client'
import { NextRequest, NextResponse } from 'next/server'
import { ResendEmailTemplate } from "@/components/EmailTemplate";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { name, email, phone, subject, message } = await req.json()
        console.log(name, email, phone, subject, message)

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Name, Email, and Message are required.' }, { status: 400 })
        }
        const template = `
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.5 }}>
    <h2>Resend Request Details</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong></p>
    <p style={{ whiteSpace: 'pre-line' }}>${message}</p>
  </div>
        `


        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: "rishimanjunath15@gmail.com",
            subject: subject,
            html: template,
        });
        if (error) console.log("tje error is ", error)
        console.log("the email data is ", data)

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
        console.log("the new contact is ", newContact)
        return NextResponse.json({ response: newContact }, { status: 201 })

    } catch (error) {
        console.error('Error saving contact:', error)
        return NextResponse.json({ error: 'Failed to save contact information.' }, { status: 500 })
    }
}





