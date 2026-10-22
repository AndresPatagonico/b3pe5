import { Router } from 'express';
import { MockController } from '../controllers/mock.controller.js';

const router = Router();

router.get('/users', MockController.getMockUsers);
router.get('/products', MockController.getMockProducts);
router.post('/seed', MockController.seedData);

export const mockRouter = router;