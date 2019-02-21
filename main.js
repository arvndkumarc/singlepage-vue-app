var app = new Vue({
  el: '#app',
  data:{
    product: 'Socks',
    image:'green_socks.png',
    inventory:15,
    details: ["80% cotton", "20% polyster", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: 'green_socks.png'
      },
      {
        variantId: 2234,
        variantColor: "darkblue",
        variantImage: 'blue_socks.png'
      }
    ],
    cart:0
  },
methods:{
  addToCart: function () {
    this.cart += 1
  },
  updateProduct: function (variantImage){
    this.image= variantImage

  }
}
})
