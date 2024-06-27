const { DateTime } = require('luxon');
const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'sa-east-1' });

exports.handler = async (event) => {
    const bogotaDateTime = DateTime.now().setZone('America/Bogota');
    const formattedDateTime = bogotaDateTime.toFormat('MM/dd/yyyy-HH:mm:ss');

    // Use the event body directly without parsing

    try {
        console.log('Event:', JSON.stringify(event, null, 2));


        const orderData = event.body;
        console.log('Order Data:', JSON.stringify(orderData, null, 2));

        const user = orderData.user;
        const order = orderData.order;
        const total = orderData.total;

        // Generate order number using the current date and time, and the user's email 
        const orderNumber = `${formattedDateTime}-${user.email}`

        // Generate product table
        let productTable = `
        <table style="max-width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;;">
        <tr style="font-size: 16px;">
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2; font-weight: bold;">Producto</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2; font-weight: bold;">Cantidad</th>
            <th style="border: 1px solid #ddd; padding: 8px; text-align: left; background-color: #f2f2f2; font-weight: bold;">Precio</th>
        </tr>
        `;

        order.forEach((item, index) => {
            productTable += `
                <tr style="background-color: ${index % 2 === 0 ? '#f9f9f9' : 'transparent'}; font-size: 14px;">
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">${item.name}</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">${item.amount}</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: left;">$${item.subtotal}</td>
                </tr>
            `;
        });

        productTable += '</table>';

        // Format email body
        const emailBody = `
           <body style="margin: 0; 
            padding: 0;
            box-sizing: border-box;
            font-family: 'Roboto', sans-serif;
            color: black;">
    <div style="text-align: center; margin: 0 0 20px 0; padding: 48px 24px; font-family: 'Roboto', sans-serif; text-align: center;  background-color: rgba(46, 125, 50, 0.3);">     
        <h2 style="font-size: 1.5em; margin: 2rem 0 0.5rem; font-weight: 600; font-size: 30px;">¡Gracias ${user.name}, por realizar tu pedido con nosotros!</h2>
        <p style="font-size: 1em;">En un momento nuestro equipo de ventas se comunicará contigo para coordinar el envío de tus productos.</p>
    </div>
    <div style="margin: 2rem 0.5rem 2rem 1.3rem;">
    <h1 style="margin: 1.5rem 0; font-size: 24px;">Aquí está el resumen de tu orden:</h1>
    <p style="margin: 1rem 0;"><strong>Número de orden:</strong> ${orderNumber}</p>
    <h2 style="margin: 1.5rem 0; font-size: 20px;">Confirmación de la orden</h2>
    <p style="margin: 1rem 0;"><strong>Nombre:</strong> ${user.name}</p>
    <p style="margin: 1rem 0;"><strong>Ciudad:</strong> ${user.city}</p>
    <p style="margin: 1rem 0;"><strong>Dirección:</strong> ${user.address}</p>
    <p style="margin: 1rem 0;"><strong>Barrio:</strong> ${user.neighborhood}</p>
    <p style="margin: 1rem 0;"><strong>Localidad:</strong> ${user.locality}</p>
    <p style="margin: 1rem 0;"><strong>Teléfono de contacto:</strong> ${user.phone}</p>
    <p style="margin: 1rem 0;"><strong>Correo electrónico:</strong> ${user.email}</p>
    <p style="margin: 1rem 0;"><strong>Comentarios:</strong> ${user.comments}</p>
    <h2 style="margin: 1.5rem 0;font-size: 20px;">Productos</h2>
        ${productTable}
    <p><strong>Subtotal:</strong> $${total.price}</p>
    <p><strong>VAT:</strong> $${total.vat}</p>
    <p><strong>Total:</strong> $${total.price}</p>
    <p style="margin: 2rem 0 0rem;">¡Gracias por realizar tu pedido con nosotros!</p>
    <p style="margin: 1rem 0 3rem;">En un momento nuestro equipo de ventas se comunicará contigo para coordinar el envío de tus productos.</p>
    </div>
</div>
</body>
        `;
        
        await sendEmail('alcortecarnescol@gmail.com', 'alcortecarnescol@gmail.com', user.email, 'Confirmación de orden Al Corte', emailBody);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' })
        };
    } catch (error) {
        console.error('Error:', error);

        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error sending email', error: error.message })
        };
    }
};

// Send an email using Amazon SES
async function sendEmail(from, to1, to2, subject, body) {
    const params = {
        Source: from,
        Destination: { ToAddresses: [to1, to2] },
        Message: {
            Subject: { Data: subject },
            Body: { Html: { Data: body } }
        }
    };

    return ses.sendEmail(params).promise();
}