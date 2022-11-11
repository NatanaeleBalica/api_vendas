import { Router} from 'express';

const routers = Router();

routers.get('/', (resquest, response) => {
    return response.json({ message: 'Hello World' });
});

export default routers;