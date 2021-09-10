// import { useGlobalContext } from "./context";
// const {remove} = useGlobalContext();
const reducer = (state,action) => {

    const {type,payload} = action;
    switch(type){
        case 'CLEAR_CART' : 
            return {...state,cart:[]};
        
        case 'REMOVE' :
            var new_cart = state.cart.filter(
                item => item.id !== payload
            );
            console.log("ps");
            return {...state,cart:new_cart};

        case 'INCREASE':
            var new_cart = state.cart.map(item => {
                if(item.id === payload)
                    return {...item, amount: item.amount + 1};
                return item;
            });
            return {...state,cart: new_cart};

        case 'DECREASE' :
            var new_cart = state.cart.map(item => {
                if(item.id === payload){
                    return {...item,amount: item.amount - 1};
                }
                return item;
            }).filter(item => item.amount > 0);
            return {...state,cart:new_cart};

        case 'SET_TOTAL_&_AMOUNT' :
            let {amount,total} = state.cart.reduce((acc,item) => {
                const {amount,price} = item;
                acc.amount += amount;
                acc.total += amount * price;
                return acc;
            },{amount:0, total: 0});
            total = parseFloat(total.toFixed(2));
            return {...state,amount,total};

        case 'LOADING' :
            return {...state,loading:true};

        case 'DISPLAY_CART' :
            return {...state,loading:false,cart:payload};
        
        default :
            throw new Error("no matching action type");
    }
}
export default reducer;