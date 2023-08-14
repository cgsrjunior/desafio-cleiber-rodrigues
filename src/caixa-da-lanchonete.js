class CaixaDaLanchonete {
    menu = require('./valor-itens.json');
    total_value = 0.00;
    item_computed = false;
    arr = [];
    isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    itemExists(){
        return this.partial_value === this.total_value;
    }

    paymentExists(payment){
        switch(payment){
            case 'dinheiro':
            case 'debito':
            case 'credito':
                return true;
            default:
                return false;
        }
    }

    calcPercentPayment(total_amt, payment){
        switch (payment){
            case "dinheiro":
                return (total_amt * 0.05) * - 1.00;
            case "credito":
                return total_amt * 0.03;
            default:
                return 0.00;
        }
    }

    checkIfExtraItem(item){
        return (item == "chantily") || (item == "queijo");
    }

    //This 
    checkExtraRequest(list_items,extra_item){
        //One of the required items needs to be satisfied
        switch(extra_item){
            case "chantily":
                var required_items = ['cafe'];
                break;
            default:
                var required_items = ['sanduiche'];
        }
        for(var item of list_items){
            //Need to parse item by comma
            //item[0] is the code
            //item[0] is the quantity
            item = item.split(',');
            for (var req of required_items){
                if(item[0] === req){
                    return true;
                }
            }
        }
        return false;
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        if(this.isEmpty(itens)){
            return "Não há itens no carrinho de compra!";
        }
        else{
            if(this.paymentExists(metodoDePagamento)){
                for(let item in itens){
                    //Need to parse item by comma
                    //Arr 0 is the code
                    //Arr 1 is the quantity
                    this.arr = itens[item].split(',');
                    for(var obj of this.menu){
                        if(this.arr[0] == obj["code"]){
                            //We need to check if an secundary item are requested without the principal one
                            if(this.checkIfExtraItem(this.arr[0])){
                                if(!(this.checkExtraRequest(itens,this.arr[0]))){
                                    return "Item extra não pode ser pedido sem o principal";
                                }
                            }
                            if(parseInt(this.arr[1]) > 0){
                                this.total_value = this.total_value + (obj["price"] * parseInt(this.arr[1]));
                                this.item_computed = true;
                            }
                            else{
                                return "Quantidade inválida";
                            }
                        }
                    }
                    //Need to confirm if an item was computed by code
                    if(this.item_computed){
                        this.item_computed = false;
                    }
                    else{
                        return "Item inválido!";
                    }
                }
            }
            else{
                return "Forma de pagamento inválida!";
            }
            //After make the total sum of the items, we need to calculate the percent of payment method
            this.total_value = this.total_value + this.calcPercentPayment(this.total_value,metodoDePagamento);

            //Now we format the value for two decimal places
            var total_str = this.total_value.toFixed(2);
            //Now we format the final answer with items calculated
            total_str = total_str.toString();
            total_str = "R$ " + total_str.replace('.', ',');
            return total_str;
        }
    }
}

//Testes realizados
// caixa = new CaixaDaLanchonete();
//console.log(caixa.menu);
//console.log("\n");
//console.log(caixa.calcularValorDaCompra('debito', []));
//console.log(caixa.calcularValorDaCompra('dinheiro', ['cafe,0','chantily,1']));
//console.log(caixa.calcularValorDaCompra('crebito', ['cafe,1','chantily,1']));
//console.log(caixa.calcularValorDaCompra('dinheiro', ['chantily,1']));
//console.log(caixa.calcularValorDaCompra('debito', ['cafe,1','chantily,1']));
//console.log(caixa.calcularValorDaCompra('debito', ['cafe,1','chantily,1']));
//console.log(caixa.calcularValorDaCompra('credito', ['combo1,3','chantily,2']));
//console.log(caixa.calcularValorDaCompra('credito', ['salgado,3','queijo,2']));
//console.log(caixa.calcularValorDaCompra('credito', ['combo1,1','cafe,2']));
//console.log(caixa.calcularValorDaCompra('dinheiro', ['combo1,1','cafe,2']));
//console.log(caixa.calcularValorDaCompra('credito', ['combo1,3','queijo,2']));
//console.log(caixa.calcularValorDaCompra('dinheiro', ['combo1,1','cafe,2']));
//console.log(caixa.calcularValorDaCompra('dinheiro', ['batata,1','cafe,2']));

export { CaixaDaLanchonete };
