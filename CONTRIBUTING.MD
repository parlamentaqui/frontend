### Política de Branches  

#### *main*

A branch *main* é a branch de produção, onde ficará a versão estável do projeto. Ela estará bloqueada para commits e para pushs.

#### *devel*

A branch *devel* é a branch de desenvolvimento, onde o trabalho das outras branchs será unificado e onde será criada uma versão estável para mesclar com a *main*.
Assim como a *main* ela está bloqueada para commits e pushs.

#### Nome das Branches  

As branchs de desenvolvimento de features serão criadas a partir da branch *devel* com a nomenclatura padrão `x_nome_da_issue`, onde o `x` representa o código de rastreio da issue.

### Política de Commits

Os commits devem ser feitos usando o parâmetro `-s` para indicar sua assinatura no commit.

```
git commit -s
```

A issue em questão deve ser citada no commit, para isso, basta adicionar `#<numero_da_issue>`.

```
 #5 Fazendo guia de contribuição
```

**Por padrão, o caracter `#` define uma linha de comentário no arquivo da mensagem do commit. Para resolver este problema, use o commando:**

```
git config --local core.commentChar '!'
```

Igualmente, para commits em dupla deve ser usado o comando `-s` , e deve ser adicionado a assinatura da sua dupla.

```
git commit -s
```

Comentário do commit:

```
#5 Fazendo guia de contribuição

Signed-off-by: John Winston Ono Lennon <jwolennon@gmail.com>

Co-authored-by: James Paul McCartney <jpaulm@gmail.com>

```

Para commits que encerram a resolução de uma issue, deve-se iniciar a mensagem do commit com `Fix #<numero_da_issue> <mensagem>`, para que a issue seja [encerrada automaticamente](https://help.github.com/articles/closing-issues-using-keywords/) quando mesclada na `main`.

Exemplo de comentário do commit:

```
Fix #5 Finalizando guia de contribuição do projeto
```

Para commits que incluem uma pequena mudança em uma issue que já teve sua resolução encerrada, deve-se iniciar a mensagem do commit com `HOTFIX #<numero_da_issue> <mensagem>`

Exemplo de comentário do commit:

```
HOTFIX #5 Atualizando guia de contribuição do projeto
```
