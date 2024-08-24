
  const productData = [
    {
      id: 1, //Unique identifier for the product
      name: "Product 1", // Name of the product
      description: "Men's Clothing", // Description of the product
      imgUrl: "https://cdn.occtoo-media.com/995cf62a-7759-4681-a516-370aaabfd325/40d8c26d-4dcb-5e71-b4f0-9c4d5eea295a/245636-7773_01.jpg?format=xl", // URL of the product image
      newPrice: 49.99, //  new Price of the product
      oldPrice: 59.99, // Old price of the product
      category: "men", // Category to which the product belongs
      rating: 4, //Average rating of the product
    },
    {
      id: 2,
      name: "Product 2",
      description: "Men's Clothing",
      imgUrl: "https://wxalbum-10001658.image.myqcloud.com/wxalbum/264897/20210823205620/1a78ebf84fc53421c26d30d833cffc0a.jpg",
      newPrice: 59.99,
      oldPrice: 69.99,
      category: "men",
      rating: 3,
    },
    {
      id: 3,
      name: "Product 3",
      description: "Men's Clothing",
      imgUrl: "https://litb-cgis.rightinthebox.com/images/500x500/202310/bps/product/inc/upxabm1698386340210.jpg",
      newPrice: 69.99,
      oldPrice: 79.99,
      category: "men",
      rating: 5,
    },
    {
      id: 4,
      name: "Product 4",
      description: "Men's Clothing",
      imgUrl: "https://italianvega.in/cdn/shop/products/br1_480x480.webp?v=1688372604",
      newPrice: 49.99,
      oldPrice: 59.99,
      category: "men",
      rating: 4,
    },
    {
      id: 5,
      name: "Product 5",
      description: "Men's Clothing",
      imgUrl: "https://img-va.myshopline.com/image/store/1702700021307/c138d637fa4413e073e0ddc21ef96ccd.jpg?w=800&h=800",
      newPrice: 59.99,
      oldPrice: 69.99,
      category: "men",
      rating: 3,
    },
    {
      id: 6,
      name: "Product 6",
      description: "Men's Clothing",
      imgUrl: "https://i.pinimg.com/736x/73/da/e7/73dae7ccf2c86d0c1ab76c26e7150b85.jpg",
      newPrice: 69.99,
      oldPrice: 79.99,
      category: "men",
      rating: 5,
    },
    {
      id: 7,
      name: "Product 7",
      description: "Women's Clothing",
      imgUrl: "https://i.pinimg.com/736x/db/a7/dc/dba7dc1d6b67b6ec40067150dc160e7b.jpg",
      newPrice: 99.99,
      oldPrice: 119.99,
      category: "women",
      rating: 4,
    },
    {
      id: 8,
      name: "Product 8",
      description: "Women's Clothing",
      imgUrl: "https://i.pinimg.com/originals/eb/a3/fb/eba3fb87058c09168b0212e6b88d3be0.jpg",
      newPrice: 89.99,
      oldPrice: 109.99,
      category: "women",
      rating: 3,
    },
    {
      id: 9,
      name: "Product 9",
      description: "Women's Clothing",
      imgUrl: "https://i.pinimg.com/736x/99/5e/00/995e00edbbf45f806c6e02c4f06edd58.jpg",
      newPrice: 109.99,
      oldPrice: 129.99,
      category: "women",
      rating: 5,
    },
    {
      id: 10,
      name: "Product 10",
      description: "Women's Clothing",
      imgUrl: "https://th.bing.com/th/id/OIP.py4_IbHlPVY5esAXENRdTwHaJQ?rs=1&pid=ImgDetMain",
      newPrice: 99.99,
      oldPrice: 119.99,
      category: "women",
      rating: 4,
    },
    {
      id: 11,
      name: "Product 11",
      description: "Women's Clothing",
      imgUrl: "https://i.pinimg.com/736x/37/22/ef/3722efbf53df17ec1e7744c993ca4e77.jpg",
      newPrice: 89.99,
      oldPrice: 109.99,
      category: "women",
      rating: 3,
    },
    {
      id: 12,
      name: "Product 12",
      description: "Women's Clothing",
      imgUrl: "https://i.pinimg.com/originals/11/51/f6/1151f603781eda91464be2a8586f4784.jpg",
      newPrice: 89.99,
      oldPrice: 109.99,
      category: "women",
      rating: 3,
    },
    {
      id: 13,
      name: "Product 13",
      description: "Kids Clothing",
      imgUrl: "https://i.pinimg.com/originals/11/51/f6/1151f603781eda91464be2a8586f4784.jpg",
      newPrice: 109.99,
      oldPrice: 129.99,
      category: "kids",
      rating: 5,
    },
    {
      id: 14,
      name: "Product 14",
      description: "Kids Clothing",
      imgUrl: "https://i.pinimg.com/originals/6a/b6/0e/6ab60ef5c2a25ae8dc397846e7438b7b.png",
      newPrice: 29.99,
      oldPrice: 39.99,
      category: "kids",
      rating: 4,
    },
    {
      id: 15,
      name: "Product 15",
      description: "Kids Clothing",
      imgUrl: "https://i.pinimg.com/474x/d5/8e/bd/d58ebd6e88e5761ec80d6648a9ac534c.jpg",
      newPrice: 34.99,
      oldPrice: 44.99,
      category: "kids",
      rating: 3,
    },
    {
      id: 16,
      name: "Product 16",
      description: "Kids Clothing",
      imgUrl: "https://i.pinimg.com/originals/ab/c2/87/abc287bfb5c0edb2a315562025fa0c4a.jpg",
      newPrice: 24.99,
      oldPrice: 34.99,
      category: "kids",
      rating: 5,
    },
    {
      id: 17,
      name: "Product 17",
      description: "Kids Clothing",
      imgUrl: "https://th.bing.com/th/id/OIP.CGmmutcuUv036r65L3gcQgAAAA?rs=1&pid=ImgDetMain",
      newPrice: 24.99,
      oldPrice: 34.99,
      category: "kids",
      rating: 5,
    },
    {
      id: 18,
      name: "Product 18",
      description: "Kids Clothing",
      imgUrl: "https://th.bing.com/th/id/R.2b21dd1ad66333b13b1fca9fc451dbfd?rik=jrQ7vCcvjtKc5A&pid=ImgRaw&r=0",
      newPrice: 24.99,
      oldPrice: 34.99,
      category: "kids",
      rating: 5,
    },
    {
      id: 19,
      name: "Product 19",
      description: "Women's Clothing",
      imgUrl: "http://localhost:3000/static/media/women15.97928c3a7cbae9be1ecf.jpg",
      newPrice: 150.0,
      oldPrice: 180.0,
      category: "women",
      rating: 4,
    },
    {
      id: 20,
      name: "Product 20",
      description: "Women's Clothing",
      imgUrl: "http://localhost:3000/static/media/women14.f3bc06f8a4f85908e455.jpg",
      newPrice: 200.0,
      oldPrice: 250.0,
      category: "women",
      rating: 4.5,
    },
    {
      id: 21,
      name: "Product 21",
      description: "Women's Clothing",
      imgUrl: "http://localhost:3000/static/media/women13.0d44b8bd4aa3afa59f13.jpg",
      newPrice: 100.0,
      oldPrice: 130.0,
      category: "women",
      rating: 3.5,
    },
    {
      id: 22,
      name: "Product 22",
      description: "Men's Clothing",
      imgUrl: "http://localhost:3000/static/media/menn.5021315a4a652227dbc2.jfif",
      newPrice: 180.0,
      oldPrice: 210.0,
      category: "men",
      rating: 4.8,
    },
    {
      id: 23,
      name: "Product 23",
      description: "Men's Clothing",
      imgUrl: "http://localhost:3000/static/media/men2.cca1b3b47feef19c81a9.jfif",
      newPrice: 120.0,
      oldPrice: 150.0,
      category: "men",
      rating: 4.2,
    },
    {
      id: 24,
      name: "Product 24",
      description: "Men's Clothing",
      imgUrl: "http://localhost:3000/static/media/men3.d9107d2efdc2555511ff.jfif",
      newPrice: 140.0,
      oldPrice: 170.0,
      category: "men",
      rating: 4.7,
    },
    {
      id: 25,
      name: "Product 25",
      description: "Kids Clothing",
      imgUrl: "http://localhost:3000/static/media/kid2.73cd96f252bfe9663da2.jpg",
      newPrice: 110.0,
      oldPrice: 140.0,
      category: "kids",
      rating: 4.3,
    },
    {
      id: 26,
      name: "Product 26",
      description: "Kids Clothing",
      imgUrl: "http://localhost:3000/static/media/kid3.450c6838bbd5f4a9eeea.jpg",
      newPrice: 130.0,
      oldPrice: 160.0,
      category: "kids",
      rating: 4.1,
    },
    {
      id: 27,
      name: "Product 27",
      description: "Kids Clothing",
      imgUrl: "http://localhost:3000/static/media/kid1.327f9efd6fae76d87855.jpg",
      newPrice: 130.0,
      oldPrice: 160.0,
      category: "kids",
      rating: 4.1,
    },
  ];
  
  export default productData;