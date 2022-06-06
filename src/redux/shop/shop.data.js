const SHOP_DATA={
  
  biryani:{
    id: 1,
    title: 'Biryani',
    routeName: 'biryanis',
    items: [
      {
        id: 1,
        name: 'Chicken Hyderabadi Dum Biryani',
        imageUrl: 'https://www.crazymasalafood.com/wp-content/images/Chicken-Dum-Biryani-with-Jeera-Rice.png',
        price: 460
      },
      {
        id: 2,
        name: 'Tandoori Chicken Biryani',
        imageUrl: 'https://i.pinimg.com/originals/0f/2b/bd/0f2bbdaf08f853bc8a72206297d2b2de.jpg',
        price: 475
      },
      {
        id: 3,
        name: 'Chicken Tikka Biryani',
        imageUrl: 'http://www.bradshawtandoori.com/images/IMG_0397.JPG',
        price: 485
      },
      {
        id: 4,
        name: 'Kolkata Chicken Biryani',
        imageUrl: 'https://img.starbiz.com/resize/750x-/2020/02/11/best-chicken-biryani-in-kolkata-487a.jpg',
        price: 760
      },
      {
        id: 5,
        name: 'Lucknowi chicken Biryani',
        imageUrl: 'https://www.thillaismasala.com/wp-content/uploads/2020/12/Lucknowi-Chicken-Biryani-768x432.jpg',
        price: 510
      },
      {
        id: 6,
        name: 'Afghani Mutton Biryani',
        imageUrl: 'https://hamariweb.com/recipes/images/recipeimages/183.jpg',
        price: 399
      },
      {
        id: 7,
        name: 'Veg Dum Biryani',
        imageUrl: 'https://recipebook.io/recipe/wp-content/uploads/2019/11/xhdpi-1.jpg',
        price: 250
      },
      {
        id: 8,
        name: 'Special Colaba Chicken Biryani',
        imageUrl: 'https://i.ytimg.com/vi/cHgh6eAOgPY/maxresdefault.jpg',
        price: 349
      },
      {
        id: 9,
        name: 'Special Egg Biryani',
        imageUrl: 'https://i.ytimg.com/vi/OTYxcRnv9Qo/maxresdefault.jpg',
        price: 16
      }
    ]
  },
 pizza: {
    id: 2,
    title: 'Pizza',
    routeName: 'pizzas',
    items: [
      {
        id: 10,
        name: 'Chicken Cheese Pizza',
        imageUrl: 'https://i.pinimg.com/736x/e9/e5/5a/e9e55ae9da568dd6f5dff89cdd94f1d9.jpg',
        price: 170
      },
      {
        id: 11,
        name: 'Chicken Corn Pizza',
        imageUrl: 'https://www.cookawesome.com/wp-content/uploads/2016/02/74-Awesome-Barbecue-Chicken-and-Corn-Pizza-Recipe.jpg',
        price: 210
      },
      {
        id: 12,
        name: 'Chicken Tikka Pizza',
        imageUrl: 'https://theovenist.com/wp-content/uploads/2020/06/IMG_20200610_203927-2-scaled.jpg',
        price: 210
      },
      {
        id: 13,
        name: 'Paneer Tikka Pizza',
        imageUrl: 'https://mybarindia.com/wp-content/uploads/2019/06/Paneer-Tikka-Pizza.jpg',
        price: 188
      },
      {
        id: 14,
        name: 'Simply Veggie Pizza',
        imageUrl: 'https://thebestblogrecipes.com/wp-content/uploads/2017/06/Garden-Veggie-Pizza.jpg',
        price: 160
      },
      {
        id: 15,
        name: 'Veg Exotica Pizza',
        imageUrl: 'https://vegplatter.in/files/public/images/partner/menu/4/veg%20deluxe%20pizza.png',
        price: 230
      },
      {
        id: 16,
        name: 'Maggi Pizza',
        imageUrl: 'https://foodtasted.org/wp-content/uploads/2019/05/maggie_pizza-recipe.jpg',
        price: 190
      },
      {
        id: 17,
        name: 'Margherita Cheese Pizza',
        imageUrl: 'https://www.pngjoy.com/pngm/384/7099757_cheese-pizza-slice-double-cheese-margherita-pizza-hd.png',
        price: 125
      }
    ]
  },
  chicken:{
    id: 3,
    title: 'Chicken',
    routeName: 'chickens',
    items: [
      {
        id: 18,
        name: 'Chicken 65',
        imageUrl: 'https://www.foodscorners.com/wp-content/uploads/2017/04/chicken-65.jpg',
        price: 325
      },
      {
        id: 19,
        name: 'Tandoori Chicken',
        imageUrl: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Tandoori-Chicken.jpg',
        price: 290
      },
      {
        id: 20,
        name: 'Chicken Handi',
        imageUrl: 'https://i.pinimg.com/originals/38/eb/e0/38ebe07d99b675a79df6f37dd3da5a0c.jpg',
        price: 390
      },
      {
        id: 21,
        name: 'Butter Chicken',
        imageUrl: 'http://dailynewsgazette.com/wp-content/uploads/2019/01/indian-butter-chicken-recipe-simplyrecipes-com.jpg',
        price: 165
      },
      {
        id: 22,
        name: 'Chicken Chilli',
        imageUrl: 'https://hintofhelen.com/wp-content/uploads/2020/03/Chilli-Chicken-Recipe-Hint-of-Helen-30-1.jpg',
        price: 185
      }
    ]
  },
  healthy:{
    id: 4,
    title: 'Healthy',
    routeName: 'healthys',
    items: [
      {
        id: 23,
        name: 'Dal Khichdi',
        imageUrl: 'https://www.cookwithmanali.com/wp-content/uploads/2016/04/Moong-Dal-Khichdi.jpg',
        price: 125
      },
      {
        id: 24,
        name: 'Fruit Salad',
        imageUrl: 'https://www.chelseasmessyapron.com/wp-content/uploads/2014/04/The-BEST-EVER-Fruit-Salad.jpg',
        price: 100
      },
      {
        id: 25,
        name: 'Palak Khichdi',
        imageUrl: 'https://i.pinimg.com/originals/34/b6/85/34b685b7d78a42462b0db7bded7f1a2f.jpg',
        price: 199
      },
      {
        id: 26,
        name: 'Pineapple Juice',
        imageUrl: 'https://3.bp.blogspot.com/-T6UUfH6AxMQ/VVL_2it1NGI/AAAAAAAA2DY/uimHcVCSwOU/s1600/pure%2Bpineapple%2Bjuice.jpg',
        price: 120
      },
      {
        id: 27,
        name: 'Veg Clear Soup',
        imageUrl: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl-archanaskitchen.com/Veg_Clear_Soup_Recipe.jpg',
        price: 145
      },
      {
        id: 28,
        name: 'Tomato Soup',
        imageUrl: 'https://www.cookingclassy.com/wp-content/uploads/2020/10/tomato-soup-7.jpg',
        price: 135
      },
      {
        id: 29,
        name: 'Tomato Uttapam',
        imageUrl: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Jyothi_Rajesh/Tomato_Uttapam.jpg',
        price: 120
      }
    ]
  },
  thali:{
    id: 5,
    title: 'Thali',
    routeName: 'thalis',
    items: [
      {
        id: 30,
        name: 'Veg Regular Thali',
        imageUrl: 'https://www.watscooking.com/images/dish/large/Veg_Thali1.png',
        price: 199
      },
      {
        id: 31,
        name: 'Non Veg Regular Thali',
        imageUrl: 'http://www.iagtok.com/wp-content/uploads/2018/01/chicken-thali.jpg',
        price: 320
      },
      {
        id: 32,
        name: 'Chicken Thali',
        imageUrl: 'https://imgmedia.lbb.in/media/2019/11/5de0bda5c39984002b723e43_1575009701861.jpg',
        price: 325
      },
      {
        id: 33,
        name: 'Gujarati Thali',
        imageUrl: 'https://curlytales.com/wp-content/uploads/2017/07/gujarati-thali.jpg',
        price: 225
      },
      {
        id: 34,
        name: 'Rajasthani Thali',
        imageUrl: 'https://www.foodreviewonline.com/new/wp-content/uploads/2019/02/Rajdhani-Mumbai-05-min.jpg',
        price: 240
      },
      {
        id: 35,
        name: 'Maharashtrian Thali',
        imageUrl: 'https://vanitascorner.com/wp-content/uploads/2020/03/Maharashtrian-festive-thali.jpg',
        price: 300
      }
    ]
 
}
}

export default SHOP_DATA;