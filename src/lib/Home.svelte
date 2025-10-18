<script>
  import Header from "./Header.svelte";
  import Banner from "./Banner.svelte";
  import Shop from "./Shop.svelte";
  import ProductImage from "./ProductImage.svelte";
  import Cart from  "./Cart.svelte"

  let isCartOpen = false
  
  const openCart = () =>{
    isCartOpen = true
  }
  const closeCart = () =>{
    isCartOpen = false
  }
</script>


  <Header {openCart}/>
<Banner>
<section class="w-[90%] h-[300px] bg-gradient-to-br from-slate-400 via-blue-200 to-slate-400 mx-auto my-10 rounded-2xl flex items-center justify-center flex-col">
    <h1 class="text-4xl text-blue-900 font-[arimo] font-extrabold">Get your Smoked or Raw Cat Fish at Affordable Price</h1>
    <button class="bg-blue-400 mt-4 w-[140px] h-[40px] relative rounded-full group overflow-hidden">
        <span class="absolute inset-0 bg-blue-600 rounded-full translate-y-[100%] group-hover:translate-0 transition-all duration-300 cursor-pointer"></span>
        
        <span class="relative text-base font-[mulish] font-semibold tracking-wide cursor-pointer text-white group-hover:inset-0 transition-all duration-300 group-hover:-translate-y-full translate-y-0">Order Now</span>
    </button>
</section>
</Banner>
<div class="w-[95%] mx-auto my-10 p-10">
<ProductImage />
</div>

<div class="w-[95%] mx-auto my-10 p-10 flex items-start flex-col gap-7 bg-[#d3ebf9cb]">
<div class="w-full">
    <Shop/>
</div>
</div>
<Cart {isCartOpen} {closeCart}/>