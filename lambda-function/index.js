import styles from "./mail.module.css"
const { DateTime } = require('luxon');
const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'sa-east-1' });

exports.handler = async (event) => {
    const bogotaDateTime = DateTime.now().setZone('America/Bogota');
    const formattedDateTime = bogotaDateTime.toFormat('MM/dd/yyyy-HH:mm:ss');

    try {
        console.log('Event:', JSON.stringify(event, null, 2));

        // Use the event body directly without parsing
        const orderData = event.body;
        console.log('Order Data:', JSON.stringify(orderData, null, 2));

        const user = orderData.user;
        const order = orderData.order;
        const total = orderData.total;
        
        // Generate order number using the current date and time, and the user's email 
        const orderNumber = `${formattedDateTime}-${user.email}`

        // Generate product table
        let productTable = `
            <table class="${styles.table}">
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                </tr>
        `;

        order.forEach(item => {
            productTable += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.amount}</td>
                    <td>$${item.subtotal}</td>
                </tr>
            `;
        });

        productTable += '</table>';

        // Format the email body
        const emailBody = `      
         <style>
                .table {
                    width: 100%;
                    border-collapse: collapse;
                }
                .table th, .table td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }
                .table th {
                    background-color: #f2f2f2;
                    font-weight: bold;
                }
                .table tr:nth-child(even) {
                    background-color: #f9f9f9;
                }
                .table tr:hover {
                    background-color: #ddd;
                }
                .thank-you {
                    text-align: center;
                    margin: 20px 0;
                }
                .thank-you .title {
                    font-size: 1.5em;
                    margin-bottom: 10px;
                }
                .thank-you .text {
                    font-size: 1em;
                }
            </style>
            <div class="thank-you">
                <h2 class="title">¡Gracias ${user.name}, por realizar tu pedido con nosotros!</h2>
                <p class="text">En un momento nuestro equipo de ventas se comunicará contigo para coordinar el envío de tus productos.</p>
            </div>
            <h1>Here is a summary of your order:</h1>
            <p><strong>Order number:</strong> ${orderNumber}</p>
            <h2>Order Confirmation</h2>
            <p><strong>Nombre:</strong> ${user.name}</p>
            <p><strong>Ciudad:</strong> ${user.city}</p>
            <p><strong>Direccion:</strong> ${user.address}</p>
            <p><strong>Barrio:</strong> ${user.neighborhood}</p>
            <p><strong>Localidad:</strong> ${user.locality}</p>
            <p><strong>Telefono de contacto:</strong> ${user.phone}</p>
            <p><strong>Correo electronico:</strong> ${user.email}</p>
            <p><strong>Comentarios:</strong> ${user.comments}</p>
            <h2>Productos</h2>
            ${productTable}
            <p><strong>Subtotal:</strong> $${total.price}</p>
            <p><strong>VAT:</strong> $${total.vat}</p>
            <p><strong>Total:</strong> $${total.price}</p>
            <p>¡Gracias por realizar tu pedido con nosotros!</p>
            <p>En un momento nuestro equipo de ventas se comunicará contigo para coordinar el envío de tus productos.</p>
        `;
        

        // Send email using SES
        await sendEmail('alcortecarnescol@gmail.com', 'alcortecarnescol@gmail.com', user.email, 'Order Confirmation', emailBody);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' })
        };
    } catch (error) {
        console.error('Error:', error);

        // Return detailed error information
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error sending email', error: error.message })
        };
    }
};

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
