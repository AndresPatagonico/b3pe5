import { Router } from 'express';
import { logger } from '../utils/logger.js';

const router = Router();

router.get('/test-logger', (req, res) => {
    logger.debug('Mensaje de prueba - Nivel: debug');
    logger.http('Mensaje de prueba - Nivel: http');
    logger.info('Mensaje de prueba - Nivel: info (Servidor operando correctamente)');
    logger.warning('Mensaje de prueba - Nivel: warning (Recurso escaso o situacion atipica)');
    logger.error('Mensaje de prueba - Nivel: error (Fallo en operacion de cliente o base de datos)');
    logger.fatal('Mensaje de prueba - Nivel: fatal (Falla critica del sistema)');

    res.status(200).json({
        status: 'success',
        message: 'Logs de prueba generados exitosamente en todos los niveles. Revisa la consola y la carpeta /logs.'
    });
});

export const loggerRouter = router;