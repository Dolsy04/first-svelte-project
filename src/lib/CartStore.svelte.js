export function createCart(){
    let cart = $state(JSON.parse(localStorage.getItem("cart")) || [])

    function saveCart(){
         localStorage.setItem("cart", JSON.stringify(cart))
    }

    function addToCart(product){
        const exisitngProduct = cart.find(item => item.id === product.id)
    
        if (exisitngProduct){
            alert("Product already in cart, Edit quantity in cart");
        }else{
            cart.push({...product, quantity: 1})
        }
        saveCart()
    }
    
    function increamentQuntity(productId){
        const item = cart.find(item => item.id === productId)
        if(item) item.quantity += 1
        saveCart()
    }
    function decreamentQuntity(productId){
        const item = cart.find(item => item.id === productId)
        if(!item) return;


        if(item.quantity > 1){
            item.quantity -= 1
        }else{
            removeCart(productId)
        }
        saveCart()
    }

    function removeCart(productId){
        const index = cart.findIndex(item => item.id === productId)
        if(index !== -1) cart.splice(index, 1)
        saveCart()
    }
    
    function clearCart(){
        cart = [];
        localStorage.setItem('cart', JSON.stringify([]));
    }

    return {addToCart, cart, removeCart, clearCart, increamentQuntity, decreamentQuntity}
}

export const createStore = createCart()