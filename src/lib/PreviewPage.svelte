<script>
import { CircleCheck } from 'lucide-svelte';
const order = $state(JSON.parse(localStorage.getItem("itemOrder")) || [])
const { cart, deliveryInfo, totalPrice, date } = order
</script>

<section class="w-full h-screen flex items-center justify-center">
    <div class="w-[800px] h-[600px] overflow-y-auto bg-[#f4f4f4] py-10 px-3">
        <div class="flex items-center justify-center flex-col gap-3">
            <CircleCheck />
            <div>
                <h3 class="text-2xl font-bold">Order placed succefully</h3>
                <a href="/" class="mb-3 text-center w-full text-blue-600 flex items-center justify-center flex-col">Back to shop</a>
            </div>
        </div>

        <div>
            <div>
                <h3 class="text-xl font-[mulish] mb-4 font-bold text-gray-600">Delivery Info</h3>

                <div class="">
                    <p class="text-base font-semibold font-[mulish]">Name: <span class="font-bold">{deliveryInfo.name}</span></p>
                    <p class="text-base font-semibold font-[mulish]">Name: <span class="font-bold">{deliveryInfo.email}</span></p>
                    <p class="text-base font-semibold font-[mulish]">Name: <span class="font-bold">{deliveryInfo.phoneNumber}</span></p>
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                    <div>
                        <h3 class="text-xl font-[mulish] mt-4 font-bold text-gray-600">Order Details</h3>
                        <p class="text-base font-[mulish] mb-4 font-bold text-gray-600">Number of item order: ({String(cart.length).padStart(2, "0")})</p>
                    </div>
                    <p>Order Date & Time: {date}</p>
                </div>
                <div>
                    {#each cart as cart}
                        <div class="border mb-2 p-2">
                            <p class="text-base font-semibold font-[mulish] ">Product Name: <span class="font-bold">Smoked Fish</span></p>
                            <p class="text-base font-semibold font-[mulish] ">Product KG:  <span class="font-bold">{cart.kg}</span></p>
                            <p class="text-base font-semibold font-[mulish] ">Product Size:  <span class="font-bold">{cart.size}</span></p>
                            <p class="text-base font-semibold font-[mulish] ">Product Pieces:  <span class="font-bold">{cart.pieces}</span></p>
                            <p class="text-base font-semibold font-[mulish] ">Product Quantity:  <span class="font-bold">{cart.quantity}</span></p>
                            <p class="text-base font-semibold font-[mulish] ">Product Price:  <span class="font-bold">#{(cart.price).toLocaleString("en-US",{minimumFractionDigits: 2 ,maximumFractionDigits:2})}</span></p>
                        </div>
                    {/each}
                </div>
                <div class="flex items-end justify-end mt-3 font-bold text-2xl font-[mulish]">
                    <p>Total Price: <span>#{(totalPrice).toLocaleString("en-US",{minimumFractionDigits: 2 ,maximumFractionDigits:2})}</span></p>
                </div>
            </div>
        </div>
    </div>
</section>