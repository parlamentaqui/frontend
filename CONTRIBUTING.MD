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
Signed-off-by: James Paul McCartney <jpaulm@gmail.com>
```

Para que ambos envolvidos no commit sejam incluidos como contribuintes no gráfico de commits do GitHub, basta incluir a instrução `Co-authored-by:` na mensagem:

```
#5 Fazendo guia de contribuição

Signed-off-by: John Winston Ono Lennon <jwolennon@gmail.com>
Signed-off-by: James Paul McCartney <jpaulm@gmail.com>

Co-authored-by: John Winston Ono Lennon <jwolennon@gmail.com>
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
