## Trabalho de pós graduação.

- O trabalho utiliza quatro recursos do grunt:
	- ***sass***: Utilizado para compilar os arquivos `.sass` e enviá-los ao diretório *public/css*.

	- ***copy***: Utilizado para copiar os arquivos importados da pasta *node_modules* para a pasta *public/*.

	- ***uglify***: Utilizado para unir todos os arquivos `.js` e minificá-los.

	- ***cssmin***: Utilizado para unir todos os arquivos `.css`e minificá-los.

### Para rodar o projeto:

- Execute o comando `npm install` ou caso use yarn execute `yarn` .

------------


##### Comandos para executar as tarefas:

`$ grunt sass`: Compila os arquivos `.scss` dentro da pasta *src/styles/sass* para a pasta *public/css*.

`$ grunt copy`: Copia os arquivos da pasta *node_modules/* para a pasta *public/*.

`$ grunt uglify`: Minifica e une os arquivos `.js`.

`$ grunt cssmin`: Minifica e une os arquivos `.css`.

------------

##### Tarefas personalizadas:
`$ grunt generate-css`: Compila os arquivos `.sass`, minifica e une os arquivos `.css`.

`$ grunt generate-js`: Minifica os arquivos `.js` e os une.
