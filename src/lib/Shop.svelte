
<script>
    import Banner from "./Banner.svelte";
    import { createStore } from "./CartStore.svelte.js"
    const { cart, addToCart } = createStore

    const shopItem = [
        {id: 1, kg: 1, pieces: 2, size: "large size", image: "fish.jpg", price: 5500},
        {id: 2, kg: 4, pieces: 6, size: "medium size", image: "fish.jpg",price: 7000},
        {id: 3, kg: 3, pieces: 3, size: "medium size", image: "fish.jpg",price: 1500},
        {id: 4, kg: 6, pieces: 2, size: "small size", image: "fish.jpg",price: 6500},
        {id: 5, kg: 2, pieces: 2, size: "small size", image: "fish.jpg",price: 2500},
        {id: 6, kg: 4, pieces: 6, size: "medium size", image: "fish.jpg",price: 4000},
        {id: 7, kg: 1, pieces: 2, size: "large size", image: "fish.jpg",price: 3500},
        {id: 8, kg: 6, pieces: 8, size: "Medium size", image: "fish.jpg",price: 6500},
    ]

</script>


<div class="">
    <Banner>
        <div class="flex justify-center items-center flex-wrap gap-10 w-full">
            {#each shopItem as product}
                <div class="bg-[#f4f4f4]  max-w-[250px] w-full h-[auto] flex items-center justify-center flex-col pt-3 rounded-md">
                    <div class="w-[150px] h-[150px]">
                        <img src={product.image} alt="fish" class="w-full h-full object-contain">
                    </div>
                    <div class="text-center mt-2">
                        <p class="text-base font-semibold text-gray-700 font-[mulish]">{product.kg} Kg</p>
                        <p class="text-base font-semibold text-gray-700 font-[mulish]">{product.pieces} pieces</p>
                        <p class="text-base font-semibold text-gray-700 font-[mulish]">{product.size} - #{product.price.toLocaleString("en-US",{minimumFractionDigits: 2 ,maximumFractionDigits:2})}</p>
                    </div>

                    <button onclick={()=> addToCart(product)} class="mt-2 w-full h-[40px] bg-green-600 text-white cursor-pointer">Add to cart</button>
                </div>
            {/each}
        </div>
    </Banner>
</div>