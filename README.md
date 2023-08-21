Aqui podemos ver a diferença entre uma operação bloqueante e uma operação não-bloqueante, na pratica, utilizando uma requisição http.

E vamos além testando carga utilizando o autocannon.

Alguns testes que fiz, chegaram a 30k de registros inseridos no mongodb, em 10 segundos. Claro que pode ir além, com outras configurações do autocannon.

Também estamos utilizando o modulo cluster do nodejs, para subir varios processos, e deixar nossa aplicação redundante.

para rodar esse projeto:

altere a variavel de ambiente, no script "start" do arquivo package.json, para o seu ip do mongodb.

após isso você pode abrir dois terminais.

em um você roda o `npm start`

no outro você pode rodar o `npm test`

...
uma aplicação feita para estudo.