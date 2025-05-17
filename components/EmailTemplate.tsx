// import * as React from 'react';

interface ResendEmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}

export const ResendEmailTemplate: React.FC<ResendEmailTemplateProps> = ({
  name,
  email,
  subject,
  phone,
  message,
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.5 }}>
    <h2>Resend Request Details</h2>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Subject:</strong> {subject}</p>
    <p><strong>Phone:</strong> {phone}</p>
    <p><strong>Message:</strong></p>
    <p style={{ whiteSpace: 'pre-line' }}>{message}</p>
  </div>
);
