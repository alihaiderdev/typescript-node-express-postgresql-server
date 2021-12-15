module.exports = (sequelize: any, DataTypes: any) => {
	// console.log('datatypes : ', DataTypes);
	const emailTemplate = sequelize.define(
		'emailTemplate',
		{
			// id: {
			// type: DataTypes.UUID,
			// 	defaultValue: sequelize.UUIDV4,
			// 	allowNull: false,
			// 	primaryKey: true,
			// },
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			emailTemplateName: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			emailTemplateSubject: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			emailTemplateBody: {
				// type: DataTypes.STRING('2000'),
				type: DataTypes.STRING,
				allowNull: false,
			},
			isActive: {
				type: DataTypes.BOOLEAN,
				defaultValue: true,
				allowNull: false,
			},
			isDelete: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
				allowNull: false,
			},
		},
		{
			timestamps: true,
		}
	);
	return emailTemplate;
};
