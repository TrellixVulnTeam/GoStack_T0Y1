const path = require('path')

module.exports = {
	//path tem como primeiro parâmetro o diretório atual, o src e o arquivo index.js. Essa forma é muito mais garantida pois se estivermos usando o windows a barra que divide as pastas é invertida
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	devServer: {
		static: {
			contentBase: path.resolve(__dirname, 'public'),
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				//excluir node_modules pois a responsabilidade de usar o babel é da própria biblioteca
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			}
		]
	}
}
/**
 * basicamente o que estamos fazendo com esse código é converter os arquivos.js que não estão dentro da pasta node_modules usando o babel

 * o babel-loader quem faz a conversão dos arquivos para formatos que todos os navegadores reconhecerão - para instalá-lo use o comando yarn add babel-loader no terminal

*/

