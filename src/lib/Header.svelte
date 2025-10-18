<script>
    import { ShoppingCart } from 'lucide-svelte';
    import { User } from 'lucide-svelte';
    import { fly } from "svelte/transition";
    let isOpen = $state(false)
    let {openCart} = $props();
    import { createStore } from "./CartStore.svelte.js"
    const { cart } = createStore

</script>

<header class="w-full bg-[#add8e6] px-10 py-4 flex items-center justify-between sticky top-0 z-20">
    <div class="text-2xl font-extrabold text-blue-800 font-[arimo] uppercase"><a href="/">Smokey</a></div>
    <div class="flex item-center gap-6">
        <button class="relative inline-block group" onclick={openCart}>
            <ShoppingCart class="cursor-pointer text-blue-800"/>
            <div class="absolute -top-3 -right-3 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                <p class="text-xs text-white font-[mulish]">{cart.length}</p>
            </div>
        </button>
        <div class="relative inline-block group">
            <User class="cursor-pointer text-green-800" onclick={() => (isOpen = !isOpen)}/>

            {#if isOpen}
                <div in:fly={{ y: 10, duration: 300}} out:fly={{ y: 10, duration: 300}} class="flex items-start flex-col gap-3 px-2 py-2 bg-blue-500 mt-2 w-[90px] absolute -left-10  rounded-md">
                    <button class="text-sm font-[mulish] text-white cursor-pointer hover:text-yellow-400 transition-colors duration-300 focus:text-yellow-400 active:text-yellow-400">Sign up</button>
                    <button class="text-sm font-[mulish] text-white cursor-pointer hover:text-yellow-400 transition-colors duration-300 focus:text-yellow-400 active:text-yellow-400 ">Log out</button>
                </div>
            {/if}
        </div>
    </div>
</header>