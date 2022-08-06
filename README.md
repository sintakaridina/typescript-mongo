# API Documentation

this section for explain **API** Typescript MongoDB

Hosted API link : https://sinta-tsmongo.herokuapp.com/

1. Product
   - Create Product
   - Get All Products
   - Get A Product
   - Update Product
   - Delete Product
2. Sale
   - Create Sale Order By Product
   - Get All Sales

## PING API
| Command        | Method | Routes             | Description                          |
| -------------- | ------ | ------------------ | ------------------------------------ |
| PING API | POST   | `/ping` | this endpoint for ping or test the server |

https://sinta-tsmongo.herokuapp.com/ping

### Response

```json
{
  "ping": "success"
}
```

## Product - Create Product
<<<<<<< HEAD

This endpoint for create new data in table product, this can adjust in request data

### Endpoint Create Product

| Command        | Method | Routes             | Description                          |
| -------------- | ------ | ------------------ | ------------------------------------ |
| Product Create | POST   | `/products/create` | this endpoint for create new product |

### Validation

this endpoint using joi validation

### Request

```json
{
  "title": "T-shirt",
  "category": "Fashion",
  "stock": 56
}
```

### Response

```json
{
  "product": {
    "title": "T-shirt",
    "category": "Fashion",
    "stock": 56,
    "_id": "62edbc8bbc6ff07a31233de6",
    "createdAt": "2022-08-06T02:51:32.054Z",
    "updatedAt": "2022-08-06T02:51:32.054Z"
  }
}
```

## Product - Get All Product

=======
This endpoint for create new data in table product, this can adjust in request data 

### Endpoint Create Product

|Command	|Method		|Routes		|Description	|
|-----------|-----------|-----------|---------------|
|Product Create|POST|`/products/create`| this endpoint for create new product

### Validation
this endpoint using joi validation

### Request 
````json
{
    "title": "T-shirt",
    "category": "Fashion",
    "stock": 56
}

````

### Response 
````json
{
    "product": {
        "title": "T-shirt",
        "category": "Fashion",
        "stock": 56,
        "_id": "62edbc8bbc6ff07a31233de6",
        "createdAt": "2022-08-06T02:51:32.054Z",
        "updatedAt": "2022-08-06T02:51:32.054Z"
    }
}
````



## Product - Get All Product
>>>>>>> 52fd441d6d338bd171dc71228d538e2188accd73
This endpoint get all data products, data will show all data in table products

### Endpoint Get All Products

<<<<<<< HEAD
| Command          | Method | Routes          | Description                             |
| ---------------- | ------ | --------------- | --------------------------------------- |
| Get All Products | GET    | `/products/get` | this endpoint for get all data products |

### Request

```json
none
```

### Response

```json
{
  "products": [
    {
      "_id": "62edbc8bbc6ff07a31233de6",
      "title": "T-shirt",
      "category": "Fashion",
      "stock": 56,
      "createdAt": "2022-08-06T02:51:32.054Z",
      "updatedAt": "2022-08-06T02:51:32.054Z"
    }
  ]
}
```

## Product - Get A Product

=======
|Command	|Method		|Routes		|Description	|
|-----------|-----------|-----------|---------------|
|Get All Products|GET|`/products/get`| this endpoint for get all data products


### Request 
````json
none
````

### Response 
````json
{
    "products": [
        {
            "_id": "62edbc8bbc6ff07a31233de6",
            "title": "T-shirt",
            "category": "Fashion",
            "stock": 56,
            "createdAt": "2022-08-06T02:51:32.054Z",
            "updatedAt": "2022-08-06T02:51:32.054Z"
        }
    ]
}
````


## Product - Get A Product
>>>>>>> 52fd441d6d338bd171dc71228d538e2188accd73
This endpoint get a product and send ID params

### Endpoint Get A Product

<<<<<<< HEAD
| Command       | Method | Routes                     | Description                     |
| ------------- | ------ | -------------------------- | ------------------------------- |
| Get A Product | GET    | `/products/get/:productId` | this endpoint for get a product |

### Request

```json
none
```

### Response

```json
{
  "product": {
    "_id": "62edbc8bbc6ff07a31233de6",
    "title": "T-shirt",
    "category": "Fashion",
    "stock": 56,
    "createdAt": "2022-08-06T00:57:47.870Z",
    "updatedAt": "2022-08-06T00:57:47.870Z"
  }
}
```

## Product - Update Product

This endpoint for update a data in table product, this can adjust in request data

### Endpoint Update Product

| Command        | Method | Routes             | Description                      |
| -------------- | ------ | ------------------ | -------------------------------- |
| Product Create | PATCH  | `/products/update` | this endpoint for update product |

### Validation

this endpoint using joi validation

### Request

```json
{
  "title": "T-shirt new"
}
```

### Response

```json
{
  "product": {
    "title": "T-shirt new",
    "category": "Fashion",
    "stock": 56,
    "_id": "62edbc8bbc6ff07a31233de6",
    "updatedAt": "2022-08-06T01:00:25.844Z",
    "createdAt": "2022-08-06T00:57:47.870Z"
  }
}
```

## Product - Delete Product

=======
|Command	|Method		|Routes		|Description	|
|-----------|-----------|-----------|---------------|
|Get A Product|GET|`/products/get/:productId`| this endpoint for get a product


### Request 
````json
none
````

### Response 
````json
{
    "product": {
        "_id": "62edbc8bbc6ff07a31233de6",
        "title": "T-shirt",
        "category": "Fashion",
        "stock": 56,
        "createdAt": "2022-08-06T00:57:47.870Z",
        "updatedAt": "2022-08-06T00:57:47.870Z"
    }
}
````
## Product - Update Product
This endpoint for update a data in table product, this can adjust in request data 

### Endpoint Update Product

|Command	|Method		|Routes		|Description	|
|-----------|-----------|-----------|---------------|
|Product Create|PATCH|`/products/update`| this endpoint for update product

### Validation
this endpoint using joi validation

### Request 
````json
{
    "title": "T-shirt new"
}

````

### Response 
````json
{
    "product": {
        "title": "T-shirt new",
        "category": "Fashion",
        "stock": 56,
        "_id": "62edbc8bbc6ff07a31233de6",
        "updatedAt": "2022-08-06T01:00:25.844Z",
        "createdAt": "2022-08-06T00:57:47.870Z"
    }
}
````


## Product - Delete Product
>>>>>>> 52fd441d6d338bd171dc71228d538e2188accd73
This endpoint for delete product

### Endpoint Delete Product

<<<<<<< HEAD
| Command        | Method | Routes                        | Description                                    |
| -------------- | ------ | ----------------------------- | ---------------------------------------------- |
| Delete Product | DELETE | `/products/delete/:productId` | this endpoint for delete data in table product |

### Request

```json
none
```

### Response

```json
{
  "product": {
    "_id": "62edbc8bbc6ff07a31233de6",
    "title": "T-shirt new",
    "category": "Fashion",
    "stock": 56,
    "createdAt": "2022-08-06T00:57:47.870Z",
    "updatedAt": "2022-08-06T01:00:25.844Z"
  },
  "message": "Deleted"
}
```

## Sale - Create Sale Order By Product

=======
|Command	|Method		|Routes		|Description	|
|-----------|-----------|-----------|---------------|
|Delete Product|DELETE|`/products/delete/:productId`| this endpoint for delete data in table product


### Request 
````json
none
````

### Response 
````json
{
    "product": {
        "_id": "62edbc8bbc6ff07a31233de6",
        "title": "T-shirt new",
        "category": "Fashion",
        "stock": 56,
        "createdAt": "2022-08-06T00:57:47.870Z",
        "updatedAt": "2022-08-06T01:00:25.844Z"
    },
    "message": "Deleted"
}
````

## Sale - Create Sale Order By Product
>>>>>>> 52fd441d6d338bd171dc71228d538e2188accd73
This endpoint for create new data in table sale for order a product

### Endpoint Create Product

<<<<<<< HEAD
| Command        | Method | Routes          | Description                         |
| -------------- | ------ | --------------- | ----------------------------------- |
| Product Create | POST   | `/order/create` | this endpoint for create sale order |

### Validation

this endpoint using joi validation

### Request

```json
{
  "product": "62edd73433d462eada88bf21",
  "total": 20
}
```

### Response

```json
{
  "sale": {
    "total": 20,
    "product": "62edd73433d462eada88bf21",
    "_id": "62edd8062b28315b57ff7bfd",
    "createdAt": "2022-08-06T02:55:02.574Z",
    "updatedAt": "2022-08-06T02:55:02.574Z"
  }
}
```

## Sale - Get All Sales

=======
|Command	|Method		|Routes		|Description	|
|-----------|-----------|-----------|---------------|
|Product Create|POST|`/order/create`| this endpoint for create sale order

### Validation
this endpoint using joi validation

### Request 
````json
{
    "product": "62edd73433d462eada88bf21",
    "total": 20
}

````

### Response 
````json
{
    "sale": {
        "total": 20,
        "product": "62edd73433d462eada88bf21",
        "_id": "62edd8062b28315b57ff7bfd",
        "createdAt": "2022-08-06T02:55:02.574Z",
        "updatedAt": "2022-08-06T02:55:02.574Z"
    }
}
````


## Sale - Get All Sales
>>>>>>> 52fd441d6d338bd171dc71228d538e2188accd73
This endpoint get all data sales, data will show all data in table sales

### Endpoint Get All Sales

<<<<<<< HEAD
| Command          | Method | Routes        | Description                                |
| ---------------- | ------ | ------------- | ------------------------------------------ |
| Get All Products | GET    | `/orders/get` | this endpoint for get all data sales order |

### Request

```json
none
```

### Response

```json
{
  "sales": [
    {
      "_id": "62edd8062b28315b57ff7bfd",
      "total": 20,
      "product": "62edd73433d462eada88bf21",
      "createdAt": "2022-08-06T02:55:02.574Z",
      "updatedAt": "2022-08-06T02:55:02.574Z"
    }
  ]
}
```
=======
|Command	|Method		|Routes		|Description	|
|-----------|-----------|-----------|---------------|
|Get All Products|GET|`/orders/get`| this endpoint for get all data sales order


### Request 
````json
none
````

### Response 
````json
{
    "sales": [
        {
            "_id": "62edd8062b28315b57ff7bfd",
            "total": 20,
            "product": "62edd73433d462eada88bf21",
            "createdAt": "2022-08-06T02:55:02.574Z",
            "updatedAt": "2022-08-06T02:55:02.574Z"
        }
    ]
}
````
>>>>>>> 52fd441d6d338bd171dc71228d538e2188accd73
