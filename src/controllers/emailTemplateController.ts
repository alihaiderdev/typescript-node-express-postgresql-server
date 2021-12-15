import db from '../models/index';
import { Request, Response } from 'express';
import { QueryResult } from 'pg';

export const postEmailTemplate = async (req: Request, res: Response) => {
	try {
		console.log('reqBody : ', req.body);

		let data: QueryResult = await db.emailTemplate.create(req.body);
		res.status(200).json({ message: 'success', data });
	} catch (error) {
		console.log('Error : ', error);
		res.status(400).json({ error });
	}
};

export const getEmailTemplate = async (req: Request, res: Response) => {
	try {
		let data = await db.emailTemplate.findByPk(req.params.id);
		// let data = await db.emailTemplate.findOne({
		// 	where: { id: req.params.id },
		// });
		let response: object;
		if (data.isDelete) {
			response = {
				message: `Record against this id (${req.params.id}) is not exist`,
			};
		} else {
			response = { message: 'success', data };
		}
		res.status(200).json(response);
	} catch (error) {
		res.status(400).json({ error });
	}
};

export const updateEmailTemplate = async (req: Request, res: Response) => {
	try {
		await db.emailTemplate.update(req.body, {
			where: { id: req.params.id },
		});
		let updatedData: QueryResult = await db.emailTemplate.findByPk(
			req.params.id
		);
		res.status(200).json({ message: 'successs', data: updatedData });
	} catch (error) {
		console.log('Error : ', error);
		res.status(400).json({ error });
	}
};

export const deleteEmailTemplate = async (req: Request, res: Response) => {
	try {
		// let data = await db.emailTemplate.destroy({ where: { id: req.params.id } });
		await db.emailTemplate.update(
			{ isDelete: true },
			{
				where: { id: req.params.id },
			}
		);
		let updatedData: QueryResult = await db.emailTemplate.findByPk(
			req.params.id
		);
		res.status(200).json({ message: 'success', data: updatedData });
	} catch (error) {
		console.log('Error : ', error);
		res.status(400).json({ error });
	}
};

export const getEmailTemplates = async (req: Request, res: Response) => {
	try {
		let { count, rows } = await db.emailTemplate.findAndCountAll({
			where: { isDelete: false },
		});
		res.status(200).json({ message: 'success', count, data: rows });
	} catch (error) {
		console.log('Error : ', error);
		res.status(400).json({ error });
	}
};

// export {
// 	getEmailTemplates,
// 	postEmailTemplate,
// 	updateEmailTemplate,
// 	deleteEmailTemplate,
// 	getEmailTemplate,
// };
