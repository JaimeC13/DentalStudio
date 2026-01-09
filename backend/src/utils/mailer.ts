import nodemailer from 'nodemailer';


const mail = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    }
});

export const sendMail = async (destinatario: string, nombre: string, apellido: string, fecha: Date, hora: string) => {

    try {
        const info = await mail.sendMail({
        from: `"Dental Studio" <${process.env.SMTP_USER}>`,
        to: destinatario,
        subject: 'Confirmación de cita en Dental Studio',
        html: ` <div style=" font-family: Arial, sans-serif; color: #333;">
                    <h1 style="color: #007bff;">¡Hola <span style="color: #333333;">${nombre} ${apellido}! </span> </h1>
                    
                    <p>Tu cita ha sido agendada exitosamente.</p>
                    <hr style="border: 1px solid #e71919ff;"/>
                    <h3>Detalles de la Cita:</h3>
                    <ul>
                         <li><strong>Fecha:</strong> ${new Date(fecha).toDateString()}</li>
                        <li><strong>Hora:</strong> ${hora}</li>
                        <li><strong>Lugar:</strong> Dental Studio - Consultorio 1</li>
                    </ul>
                    <hr/>
                    <p>Si necesitas cancelar, por favor contáctanos con 24hrs de anticipación.</p>
                    <p style="font-size: 12px; color: #777;">Este es un correo automático, no responder.</p>
                </div>`
        })
        console.log('Correo enviado: ', info.messageId);
        return true;
    
    } catch (error) {   
        console.error('Error al enviar el correo electrónico:', error);
    }
}
