1- a) *O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?*

Resp: Round ou cost é relacionado a segurança da senha. Salt é a string aleatória que é adicionada ao Hash. Usamos o 12 por ser 
padrão. 

b) *Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por **criptografar** uma string usando o bcryptjs.  ***

c) *Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `compare` do bcryptjs*


2- a) *Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.*

Resp: O cadastro porque é através dele que é gerada a senha.

b) *Faça a alteração do primeiro endpoint*

c) *Faça a alteração do segundo endpoint*

d) *No exercício da aula anterior, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique*
