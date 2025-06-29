module.exports = {
	dialect: "postgres",
	host: "localhost",
	port: 5432,
	username: "postgres",
	password: "postgres",
	database: "devburguer",
	define: {
		timestamps: true, // ajuda a saber quando foi criado ou feito alteração em algum usuario
		underscored: true, // separar palavras com _
		underscoredAll: true, // tudo minusculo
	},
};
