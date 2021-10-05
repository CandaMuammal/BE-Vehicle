<p align="center">
     <img src="https://i.postimg.cc/sxYwnYvw/vehiclelogo.png"   alt= border="0" />

</p>
<p align="center">
    <br /> 
    <a href="https://fe-vehicle.vercel.app">View Demo</a>
    ·
    <a href="https://github.com/CandaMuammal/BE-Vehicle/issues">Report Bug</a>
    ·
</p>


---


## Contents

- [About](#about)
- [Packages](#Packages)
- [Installation](#installation)
- [Endpoint](#endpoint)
- [Authors](#authors)

##  About

<p align="justify">Vehicle rental is an apps that provide rental services for many kind of vehicles. Here you can rent motorbikes, cars, van, vespa, even casual bike such as fixie. You can rent the available vehicles with different daily rates based on what kind of vehicle you want to choose. If you have paid the total price, your booking id will be out with your payment ticket.
</p>

##  Packages


#### Built Wth
- ExpressJs
- NodeJs
- MySQL
- JWT

#### Packages (Backend)
      "bcrypt": "^5.0.1",
    "bcryptjs": "^2.4.3",
    "cookie-parser": "^1.4.5",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "eslint": "^7.30.0",
    "express": "^4.17.1",
    "http-errors": "^1.8.0",
    "ip": "^1.1.5",
    "jsonwebtoken": "^8.5.1",
    "md5": "^2.3.0",
    "morgan": "^1.10.0",
    "multer": "^1.4.2",
    "mysql2": "^2.2.5",
    "nodemailer": "^6.6.3",
    "redis": "^3.1.2",
    "uuid": "^8.3.2"


## Installation

- Clone This Repo to your local

```
git clone https://github.com/CandaMuammal/BE-Vehicle
```

- Go To Folder Repo

```
cd BE-Vehicle
```

- Install Module

```
npm install
```

- Type ` npm start` To Start Website

<br/>

## Vehicle Rental - Frontend

:rocket: [`Frontend Vehicle Rental`](https://github.com/CandaMuammal/FE-Vehicle)

<br/>

## Endpoint

#### Reservation Endpoint

|  METHOD  |             API             |                    ACTIONS                    |
| :------: | :-------------------------: | :-------------------------------------------: |
|  `DELETE`   |       /reservation/:id       |              delete reservation            |
|  `POST`   |           /reservation/     |               add reservation             |
|  `GET`   |       /reservation/:id      |              get reservation by id             |
| `GET` |       /reservation        |             get all reservation           |


#### Product Endpoint

|  METHOD  |             API             |                    ACTIONS                    |
| :------: | :-------------------------: | :-------------------------------------------: |
|  `DELETE`   |       /delete/:id       |               delete product           |
|  `POST`   |           /product/     |               add product             |
|  `GET`   |       /product/:id      |              get product by id             |
| `PUT` |       /product/:id        |            update product           |
| `GET` |       /product        |             get all product           |


#### History Endpoint

|  METHOD  |             API             |                    ACTIONS                    |
| :------: | :-------------------------: | :-------------------------------------------: |
|  `DELETE`   |       /history/:id       |               delete history           |
|  `POST`   |           /history/     |               add history             |
|  `GET`   |       /history/:id      |              get history by id             |
| `PUT` |       /history/:id        |            update history           |
| `GET` |       /history        |             get all history           |

#### User Endpoint

|  METHOD  |             API             |                    ACTIONS                    |
| :------: | :-------------------------: | :-------------------------------------------: |
|  `POST`   |       /user/auth/register/:id       |              register user            |
|  `POST`   |           /user/auth/login     |               login user             |
|  `GET`   |       /user/:id      |              get user by id             |
| `PUT` |       /user/:id        |            update user           |
| `GET` |       /user        |             get all user           |


## Authors

:rocket: [Canda Muammal](https://github.com/CandaMuammal)
