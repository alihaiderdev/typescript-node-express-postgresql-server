const express = require('express');
import {
	getEmailTemplates,
	postEmailTemplate,
	updateEmailTemplate,
	deleteEmailTemplate,
	getEmailTemplate,
} from '../controllers/emailTemplateController';

const router = express.Router();

// app.post('/emails', postEmailTemplate);
// app.get('/emails', getEmailTemplates);
// app.get('/emails/:id', getEmailTemplateById);
// app.patch('/emails/:id', updateEmailTemplate);
// app.delete('/emails/:id', deleteEmailTemplate);

router.route('/').get(getEmailTemplates).post(postEmailTemplate);
router
	.route('/:id')
	.get(getEmailTemplate)
	.delete(deleteEmailTemplate)
	.patch(updateEmailTemplate);

export default router;
