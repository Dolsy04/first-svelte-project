
<script>
    import Banner from "./Banner.svelte";
    import { PanelRightClose, Plus, Trash2, Minus  } from 'lucide-svelte';
    import { createStore } from "./CartStore.svelte.js"
    const { cart, increamentQuntity, decreamentQuntity, removeCart, clearCart } = createStore
    let {isCartOpen, closeCart} = $props();
</script>

<div class={`lg:w-[40%] md:w-[50%] w-[95%] h-screen fixed top-0 bg-white z-30 transition-all duration-300 ${isCartOpen ? "right-0" : "right-[-100%]"}`}>
    <Banner>
        <div class="w-full h-full">
            <div class="w-full px-2 py-4 shadow flex items-center justify-between sticky top-0">
                <h3 class="text-lg font-[arimo] font-bold text-gray-700">My Cart ({String(cart.length).padStart(2, "0")})</h3>

                <button class="text-red-600 font-[mulish] text-sm cursor-pointer"><PanelRightClose onclick={closeCart}/></button>
            </div>

            <div class="w-full lg:h-[500px] md:h-[550px] h-[400px] overflow-y-scroll px-2 py-4">
                <div>
                    {#if cart.length === 0}
                    <div class="w-full h-full flex items-center justify-center">
                        <p class="text-xl font-extrabold text-gray-600 font-[arimo]">Your Cart is Empty</p>
                    </div>
                    {:else}
                        {#each cart as product}
                            <div class="py-7 border-b flex items-center justify-between">
                                <div class=" flex items-center gap-2">
                                    <div class="lg:w-[100px] w-[60px] lg:h-[80px] h-[60px] rounded-lg">
                                        <img src={product.image} alt="fish" class="w-full h-full object-cover rounded-lg"/>
                                    </div>
                                    <div class="">
                                        <p class="text-sm font-[mulish]">{product.kg}Kg</p>
                                        <p class="text-sm font-[mulish]">{product.size}</p>
                                        <p class="text-sm font-[mulish]">{product.pieces} Pieces</p>
                                        <p class="text-sm font-[mulish]">Price: {(product.price).toLocaleString("en-US",{minimumFractionDigits: 2 ,maximumFractionDigits:2})}</p>
                                        <p class="text-sm font-[mulish]">Quantity: {product.quantity}</p>
                                    </div>
                                </div>

                                <div>
                                    <div class="flex items-center justify-between"> 
                                        <div class="flex items-center gap-4">
                                            <button class="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center font-extrabold text-sm cursor-pointer" onclick={()=>increamentQuntity(product.id)}><Plus size={15}/></button>
                                            <p class="text-sm font-[mulish] font-semibold">{product.quantity}</p>
                                            <button class="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center font-extrabold text-sm cursor-pointer" onclick={()=>decreamentQuntity(product.id)}><Minus size={15}/></button>
                                        </div>
                                        <Trash2 class="text-red-600 cursor-pointer" size={20} onclick={()=>removeCart(product.id)}/>
                                    </div>
                                    <p class="text-sm font-[mulish] font-semibold mt-2">Total Price: {(product.price * product.quantity).toLocaleString("en-US",{minimumFractionDigits: 2 ,maximumFractionDigits:2})}</p>
                                    
                                </div>
                            </div>
                        {/each}
                    {/if}
                </div>
                <div class="flex items-center justify-between my-5 px-3">
                    <p class="text-xl font-bold font-[mulish] text-gray-600">Grand Price:</p>
                    <p class="text-xl font-bold font-[mulish] text-gray-600">#{cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString("en-US",{minimumFractionDigits: 2 ,maximumFractionDigits:2})}</p>
                </div>

                <div class="flex items-center justify-between my-5 px-3 gap-4">
                    <button onclick={()=>{clearCart(), closeCart()}} class="bg-red-600 text-white font-semibold font-[mulish] text-base w-full h-[44px] rounded-md cursor-pointer">Clear Cart</button>
                    <button class="bg-green-600 text-white font-semibold font-[mulish] text-base w-full h-[44px] rounded-md cursor-pointer"><a href="#/checkout">Proceed to checkout</a></button>
                </div>
            </div>

        </div>
    </Banner>
</div>
