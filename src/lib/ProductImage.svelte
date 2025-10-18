

<script>
    import Banner from "./Banner.svelte";

    const shopItem = [
        {id: 1, kg: 1, pieces: 2, size: "large size", image: "fish.jpg"},
        {id: 2, kg: 4, pieces: 6, size: "medium size", image: "fish.jpg"},
        {id: 3, kg: 3, pieces: 3, size: "medium size", image: "fish.jpg"},
        {id: 4, kg: 6, pieces: 2, size: "small size", image: "fish.jpg"},
        {id: 5, kg: 2, pieces: 2, size: "small size", image: "fish.jpg"},
        {id: 6, kg: 4, pieces: 6, size: "medium size", image: "fish.jpg"},
        {id: 7, kg: 1, pieces: 2, size: "large size", image: "fish.jpg"},
        {id: 8, kg: 6, pieces: 8, size: "Medium size", image: "fish.jpg"},
    ]
</script>

<div class="overflow-x-auto px-4">
    <Banner>
        <div class="flex justify-start items-center gap-10 w-full">
            {#each shopItem as item}
                <div class="bg-[#f4f4f4]  min-w-[250px] w-full h-[auto] flex items-center justify-center flex-col pt-3 rounded-md">
                    <div class="w-[150px] h-[150px]">
                        <img src={item.image} alt="fish" class="w-full h-full object-contain">
                    </div>
                    <div class="text-center mt-2">
                        <p class="text-base font-semibold text-gray-700 font-[mulish]">{item.kg} Kg</p>
                        <p class="text-base font-semibold text-gray-700 font-[mulish]">{item.pieces} pieces</p>
                        <p class="text-base font-semibold text-gray-700 font-[mulish]">{item.size}</p>
                    </div>
                </div>
            {/each}
        </div>
    </Banner>
</div>


