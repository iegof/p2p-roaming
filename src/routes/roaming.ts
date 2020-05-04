import * as Router from 'koa-router';
import { roamingController } from "../controllers";


const router = new Router();
router.prefix('/provider/api/:lang')
// Routes

// Catalog routes
router.get('/catalogs/:catalog/:id', roamingController.index)
router.get('/catalogs/:catalog', roamingController.index)

// Utils routes
router.get('/utils/:utility', roamingController.index)

// Company Binding routes
router.get('/utils/:utility/company/:tin', roamingController.index)
router.get('/utils/:utility/company', roamingController.index)
router.put('/utils/:utility/company', roamingController.index)
router.post('/utils/:utility/company', roamingController.index)

// Provider Binding routes
router.get('/register/providerbinding/:tin', roamingController.index)
router.put('/register/providerbinding', roamingController.index)
router.post('/register/providerbinding', roamingController.index)

// ProductList
router.get('/:tin/:doctype/productlist/:id', roamingController.index)

// Agent
router.get('/:tin/agent/empowerment/signedfile/{agentEmpowermentId}', roamingController.index)
router.get('/:tin/agent/empowerment/{agentEmpowermentId}', roamingController.index)
router.get('/:tin/agent/empowerment', roamingController.index)
router.post('/:tin/agent/:doctype', roamingController.index)


// Roaming Document routes
router.get('/:tin/:doctype/:side/signedfile/:id', roamingController.index)
router.get('/:tin/:doctype/:side/:id', roamingController.index)
router.get('/:tin/:doctype/:side', roamingController.index)
router.post('/:tin/:doctype/:side', roamingController.index)
router.post('/:tin/:doctype/:side/cancel', roamingController.index)




export default router;