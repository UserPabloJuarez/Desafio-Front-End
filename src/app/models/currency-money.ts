export class Moneys{

    /*static moneyInJson( obj: Object ){
        return new Moneys(
            obj['id'],
            obj['codigoDivisa'],
            obj['nombre'],      
            obj['tipoCambio'],
        );
    }*/

constructor(
    public id:           number,
    public codigoDivisa: string,
    public nombre:       string,
    public tipoCambio:   number,
){}

}