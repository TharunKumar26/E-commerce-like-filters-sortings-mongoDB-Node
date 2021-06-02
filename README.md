# E-commerce-like-filters-sortings-mongoDB-Node
E-commerce-like-filters-sortings-mongoDB-Node

#Setup

1. yarn install or npm install in the root folder
2. npm start



## queries
type - type of the product ['Sneakers','Sliders']
color - color ['red','blue','yellow']
sort - (1 or -1) for (sorting products by review)
sort_price - (1 or -1) for (sorting products by price)
page - page number to get products list according to that page(each page contains 10 products)


## example endpoints

1. http://localhost:3000/shoes?type=Sneakers&type=Sliders

2. http://localhost:3000/shoes?type=Sneakers&type=Sliders&price=1

2. http://localhost:3000/shoes?type=Sneakers&type=Sliders&price=1&sort_price=-1

2. http://localhost:3000/shoes?type=Sneakers&type=Sliders&price=1&sort_price=-1&page=1
