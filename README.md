# Shopkie - E-Commerce Application

A full-stack e-commerce web application built with the **MERN Stack** (MongoDB, Express, React, Node.js). Users can browse products, search via search bar, filter by category/gender, add items to cart, view related products, and enjoy a seamless shopping experience with smooth pagination.

## 🔗 Live Link

**Frontend:** https://shopkie.netlify.app 

##Backend APIs:##

*  **feed:** baseurl/shopkie/products?page=pageno
*  **singleproduct:** baseurl/shopkie/products/id
*  **relatedProducts:** baseurl/shopkie/related?category=categoryname
*  ** searchproducts:** baseurl/shopkie/search?q=searchquery


## 🚀 Deployment Tech

*   **Frontend:** Netlify
*   **Backend:** Render
*   **Database:** MongoDB Atlas

## 🛠️ Tech Stack

### Frontend
*   **React.js:** UI library
*   **React Context:** For cart state management
*   **tailwind css:** Styling and responsive design
*   **Axios:** For API requests

### Backend
*   **Node.js:** JavaScript runtime
*   **Express.js:** Web framework for APIs
*   **MongoDB:** NoSQL database
*   **Mongoose:** ODM for MongoDB

## 🚀 Features

*   **Product Search:** Find products using the search bar
*   **Add to Cart:** Users can add products to their cart (using React Context)
*   **Pagination:** Browse products with easy pagination
*   **Category Filter:** Shop products by category
*   **Gender Filter:** Filter products by gender (Men, Women, Unisex)
*   **Related Products:** Show related products on single product page
*   **Responsive Design:** Works on mobile, tablets, and desktops

## 📂 Project Structure

```text
shopkie/
│
├── backend/                # Node.js + Express API
│   ├── utils/             # Database connection
│   ├── controllers/        # API logic
│   ├── models/             # MongoDB models
│   ├── routes/             # API routes
│   ├── .env                # Environment variables
│   └── index.js           # Entry point
│
├── frontend/               # React App
│   ├── src/
|   |   ├──assets/         # images
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── context/       # Cart context
│   │   ├── App.js         # Main App
│   │   └── index.js       # Entry point
│   └── public/
│
└── README.md               # Project documentation
