# desafio-cleiber-rodrigues
An repository to a challenge proposed by StartDB program made in JS

# Objetivo
Este programa em javascript lê a base de dados do arquivo valor-itens.json
e com base em uma entrada com método de pagamento e uma lista de pedidos, o
programa calcula o valor total da compra e aplica descontos ou acrescenta custos
conforme o valor de pagamento

## Comportamento esperado
### Exemplo de chamada da função
Uma chamada da função implementada para este desafio é ilustrada logo abaixo
```
new CaixaDaLanchonete()
  .calcularValorDaCompra('debito', ['chantily,1']);
```

### Outputs
As possibilidades de resposta do programa estão ilustradas abaixo
```
// exemplo de saída do valor da compra
"R$ 6,00"
// exemplo de saída de erro
"Forma de pagamento inválida!"
```

### Descontos e taxas
* Pagamento em dinheiro tem 5% de desconto
* Pagamento a crédito tem acréscimo de 3% no valor total
### Outras regras
* Caso item extra seja informado num pedido que não tenha o respectivo item principal, apresentar mensagem "Item extra não pode ser pedido sem o principal".
* Combos não são considerados como item principal.
* É possível pedir mais de um item extra sem precisar de mais de um principal.
* Se não forem pedidos itens, apresentar mensagem "Não há itens no carrinho de compra!"
* Se a quantidade de itens for zero, apresentar mensagem "Quantidade inválida!".
* Se o código do item não existir, apresentar mensagem "Item inválido!"
* Se a forma de pagamento não existir, apresentar mensagem "Forma de pagamento inválida!"

