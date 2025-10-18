<script>
import { createStore } from "./CartStore.svelte.js"
const { cart,  clearCart } = createStore
import Banner from "./Banner.svelte";
const delivery = 1500;
const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
import { push } from 'svelte-spa-router'

// for delivery info
let name = "";
let email = "";
let phoneNumber;

const handleDeliveryInfo = (e) => {
    e.preventDefault()

   

    if(!name || !email || !phoneNumber){
        alert("Field are required")
        return;
    }


    const itemOrder = {
        cart: [...cart],
        deliveryInfo: {
            name, email, phoneNumber
        },
        totalPrice: totalPrice + delivery,
        date: new Date().toLocaleString()
    }

    localStorage.setItem("itemOrder", JSON.stringify(itemOrder))
    clearCart()

    alert("Order placed succefully")
    push("/previewPage")
}
</script>


<section class="w-full h-[300px] bg-gradient-to-br from-slate-600 via-slate-400 to-slate-600 flex items-center justify-center flex-col">
    <h3 class="text-3xl font-[mulish] font-bold text-center">Checkout</h3>
    <a href="/" class="text-base font-[mulish] font-semibold mt-4 text-blue-600 text-center">To Shop</a>
</section>


<div class="my-8 w-[90%] mx-auto h-auto">
    <Banner>
        <div class="w-full h-full flex items-start gap-10">
            <!-- Items orders display -->
            <div class="w-full h-auto px-2 py-4">
                <div>
                    {#if cart.length === 0}
                    <div class="w-full h-full flex items-center justify-center">
                        <p class="text-xl font-extrabold text-gray-600 font-[arimo]">Your Cart is Empty</p>
                    </div>
                    {:else}
                        {#each cart as product}
                            <div class="py-7 border-b flex items-center justify-between">
                                <div class=" flex items-center gap-5">
                                    <div class="lg:w-[100px] w-[60px] lg:h-[100px] h-[60px] rounded-lg">
                                        <img src={product.image} alt="fish" class="w-full h-full object-cover rounded-lg"/>
                                    </div>
                                    <div class="grid grid-cols-3 gap-4">
                                        <div>
                                            <p class="text-base font-[mulish] font-bold">Kg</p>
                                            <p class="text-sm font-[mulish] font-semibold">{product.kg}</p>
                                        </div>
                                        <div>
                                            <p class="text-base font-[mulish] font-bold">Size</p>
                                            <p class="text-sm font-[mulish] font-semibold">{product.size}</p>
                                        </div>
                                        <div>
                                            <p class="text-base font-[mulish] font-bold">Pieces</p>
                                            <p class="text-sm font-[mulish] font-semibold">{product.pieces}</p>
                                        </div>
                                        <div>
                                            <p class="text-base font-[mulish] font-bold">Price</p>
                                            <p class="text-sm font-[mulish] font-semibold">{product.price}</p>
                                        </div>
                                        <div>
                                            <p class="text-base font-[mulish] font-bold">Quantity</p>
                                            <p class="text-sm font-[mulish] font-semibold">{product.quantity}</p>
                                        </div>
                                        <div>
                                            <p class="text-base font-[mulish] font-bold">Total item price</p>
                                            <p class="text-base font-[mulish] font-semibold">#{(product.quantity * product.price).toLocaleString("en-US",{maximumFractionDigits: 2, minimumFractionDigits: 2})}</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                                                
                                </div>
                            </div>
                        {/each}
                    {/if}
                </div>
                <!-- <div class="flex items-center justify-between my-5 px-3">
                    <p class="text-xl font-bold font-[mulish] text-gray-600">Grand Price:</p>
                    <p class="text-xl font-bold font-[mulish] text-gray-600">#{cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString("en-US",{minimumFractionDigits: 2 ,maximumFractionDigits:2})}</p>
                </div> -->
            </div>

            <div class={`w-[50%] h-auto ${cart.length === 0 ? "hidden" : "block"}`}>
                <!-- cart summary -->
                <div class="w-full bg-[#f5f5f5] px-3">
                    <div class="border-b border-gray-600 mb-3">
                        <h3 class="font-bold text-xl font-[mulish] text-center py-3">Cart Summary</h3>
                    </div>

                    <div class="flex items-center justify-between">
                        <p class="font-semibold text-base font-[mulish] py-3">Total Items</p>
                        <p class="font-bold text-base font-[mulish]">{String(cart.length).padStart(2, "0")}</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="font-semibold text-base font-[mulish] py-3">Delivery</p>
                        <p class="font-bold text-base font-[mulish]">#{delivery.toLocaleString("en-US",{minimumFractionDigits: 2 ,maximumFractionDigits:2})}</p>
                    </div>
                    <div class="flex items-center justify-between">
                        <p class="font-semibold text-base font-[mulish] py-3">Total Price</p>
                        <p class="font-bold text-base font-[mulish]">#{totalPrice.toLocaleString("en-US",{minimumFractionDigits: 2 ,maximumFractionDigits:2})}</p>
                    </div>
                    <hr/>
                    <div class="flex items-center justify-between">
                        <p class="font-semibold text-xl text-gray-600 font-[mulish] py-3">Grand Price:</p>
                        <p class="font-bold text-xl text-gray-600 font-[mulish]">#{(totalPrice + delivery).toLocaleString("en-US",{minimumFractionDigits: 2 ,maximumFractionDigits:2})}</p>
                    </div>
                </div>

                <!-- Delivery Info -->
                <form class="w-full bg-[#f5f5f5] p-3 mt-10" on:submit={handleDeliveryInfo}>
                    <div class="border-b border-gray-600 mb-3">
                        <h3 class="font-bold text-xl font-[mulish] text-center py-3">Delivery Info</h3>
                    </div>
                    <div class="w-full h-auto my-3">
                        <label for="name" class="text-base font-normal font-[mulish]">Name</label><br>
                        <input type="text" name="name" id="name" bind:value={name} class="border-2 border-gray-400 w-full h-[40px] mt-1 rounded-md outline-0 px-3 text-base font-[mulish] font-semibold capitalize focus:border-blue-600">
                    </div>
                    <div class="w-full h-auto my-3">
                        <label for="email" class="text-base font-normal font-[mulish] capitalize">email</label><br>
                        <input type="email" name="email" id="email" bind:value={email} class="border-2 border-gray-400 w-full h-[40px] mt-1 rounded-md outline-0 px-3 text-base font-[mulish] font-semibold focus:border-blue-600">
                    </div>
                    <div class="w-full h-auto my-3">
                        <label for="phone" class="text-base font-normal font-[mulish]">Phone Number</label><br>
                        <input type="tel" name="phone" id="phone" bind:value={phoneNumber} class="border-2 border-gray-400 w-full h-[40px] mt-1 rounded-md outline-0 px-3 text-base font-[mulish] font-semibold capitalize focus:border-blue-600">
                    </div>

                    <button type="submit" class="bg-blue-600 text-white w-full h-[40px] text-sm font-[mulish] tracking-wide cursor-pointer rounded-lg">Place Order</button>
                </form>
            </div>
        </div>
    </Banner>
</div>