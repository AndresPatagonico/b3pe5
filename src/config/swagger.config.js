import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
        title: 'ShipNow API - Documentacion Oficial',
        version: '1.0.0',
        description: 'API REST profesional desarrollada para ShipNow, estructurada bajo una arquitectura por capas (Controller-Service-Repository), con sistema de mocking, manejo centralizado de errores y logging estructurado con Winston.',
        },
        servers: [
        {
            url: 'http://localhost:8080',
            description: 'Servidor de desarrollo local',
        },
        ],
        tags: [
        { name: 'Users', description: 'Operaciones relacionadas con la gestion de usuarios' },
        { name: 'Orders', description: 'Gestion y control de pedidos de envios' },
        { name: 'Deliveries', description: 'Asignacion y seguimiento de entregas y repartidores' },
        { name: 'Mocks', description: 'Generacion de datos falsos y carga masiva (Seed) en base de datos' },
        { name: 'Logger', description: 'Herramienta interna de diagnostico y validacion de niveles de log' }
        ],
        components: {
        schemas: {
            User: {
            type: 'object',
            properties: {
                _id: { type: 'string', example: '65f1a2b3c4d5e6f7a8b9c0d1' },
                first_name: { type: 'string', example: 'Carlos' },
                last_name: { type: 'string', example: 'Gomez' },
                email: { type: 'string', example: 'carlos.gomez@example.com' },
                role: { type: 'string', enum: ['ADMIN', 'USER', 'DELIVERY'], example: 'USER' }
            }
            },
            Order: {
            type: 'object',
            properties: {
                _id: { type: 'string', example: '65f1a2b3c4d5e6f7a8b9c0d2' },
                user: { type: 'string', example: '65f1a2b3c4d5e6f7a8b9c0d1' },
                total_price: { type: 'number', example: 1500.50 },
                priority: { type: 'string', enum: ['LOW', 'MEDIUM', 'HIGH'], example: 'HIGH' },
                status: { type: 'string', enum: ['PENDING', 'PROCESSING', 'COMPLETED', 'CANCELLED'], example: 'PENDING' }
            }
            },
            Delivery: {
            type: 'object',
            properties: {
                _id: { type: 'string', example: '65f1a2b3c4d5e6f7a8b9c0d3' },
                order: { type: 'string', example: '65f1a2b3c4d5e6f7a8b9c0d2' },
                delivery_man: { type: 'string', example: '65f1a2b3c4d5e6f7a8b9c0d4' },
                shipping_address: { type: 'string', example: 'Av. Corrientes 1234, CABA' },
                status: { type: 'string', example: 'ASSIGNED' }
            }
            },
            ErrorResponse: {
            type: 'object',
            properties: {
                status: { type: 'string', example: 'error' },
                error: { type: 'string', example: 'InvalidParamError' },
                message: { type: 'string', example: 'La cantidad solicitada para la generacion de datos es invalida.' },
                cause: { type: 'string', example: 'El parametro "qty" recibido ("-2") no es valido.' }
            }
            },
            SuccessResponse: {
            type: 'object',
            properties: {
                status: { type: 'string', example: 'success' },
                payload: { type: 'object', example: {} }
            }
            }
        }
        }
    },
    apis: ['./src/routes/*.js'], // Lee las anotaciones JSDoc directamente de los archivos de rutas
};

const specs = swaggerJSDoc(swaggerOptions);

export const setupSwagger = (app) => {
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));
};