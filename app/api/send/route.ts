import { EmailTemplate } from '../../_components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req,res) {
    const resp = await req.json();
    try {
        const data = await resend.emails.send({
            from: 'File-Sharing-App@resend.dev',
            to: ['harshit70803hs@gmail.com'],
            subject: resp.fullName + " share File With You",
            react: EmailTemplate({ resp }),
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}
