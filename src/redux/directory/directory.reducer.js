const INITIAL_STATE = {
  sections:  [{
        title:'Biryani',
        imageUrl:'https://www.mistay.in/travel-blog/content/images/2020/07/hyderbadi-biriyani-1.jpg',
        id:1,
        linkUrl:"shop/biryani"
    },
{
    title:'Pizza',
    imageUrl:'https://wallpapersdsc.net/wp-content/uploads/2015/11/Pizza_HD3.jpg',
    id:2,
    linkUrl:'shop/pizza'
}
,
{
    title:'Chicken',
    imageUrl:'https://i.ytimg.com/vi/nK_DkMYYDfU/maxresdefault.jpg',
    id:3,
    linkUrl:'shop/chicken'
}
,
{
title:'Healthy',
imageUrl:'https://www.thrivenaija.com/wp-content/uploads/2019/12/eating-healthy-food.jpg',
id:4,
size:'large',
linkUrl:'shop/healthy'
},
{
title:'Thali',
imageUrl:'https://s3.scoopwhoop.com/son/thali/gujju.jpg',
id:5,
size:'large',
linkUrl:'shop/thali'
}
    ]
};
const directoryReducer =(state=INITIAL_STATE, action) => {
switch(action.type){
default:
return state;
}
}

export default directoryReducer;