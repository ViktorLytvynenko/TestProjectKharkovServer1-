import {Router} from "express";

const router = Router();

const products = [{
    id: 1,
    image: "/img/iphone.jpg",
    name: "iPhone 1",
    type: "phone",
    guarantee: {start: "2023-01-01", end: "2024-01-01"},
    status: false,
    price: 60,
    arrivalName: ""
}, {
    id: 2,
    image: "/img/iphone.jpg",
    name: "iPhone 2",
    type: "phone",
    guarantee: {start: "2023-02-01", end: "2024-02-01"},
    status: false,
    price: 70,
    arrivalName: ""
}, {
    id: 3,
    image: "/img/iphone.jpg",
    name: "iPhone 3",
    type: "phone",
    guarantee: {start: "2023-03-01", end: "2024-03-01"},
    status: false,
    price: 80,
    arrivalName: ""
}, {
    id: 4,
    image: "/img/iphone.jpg",
    name: "iPhone 4",
    type: "phone",
    guarantee: {start: "2023-04-01", end: "2024-04-01"},
    status: false,
    price: 90,
    arrivalName: ""
}, {
    id: 5,
    image: "/img/iphone.jpg",
    name: "iPhone 5",
    type: "phone",
    guarantee: {start: "2023-05-01", end: "2024-05-01"},
    status: false,
    price: 100,
    arrivalName: ""
}, {
    id: 6,
    image: "/img/iphone.jpg",
    name: "iPhone 6",
    type: "phone",
    guarantee: {start: "2023-06-01", end: "2024-06-01"},
    status: false,
    price: 150,
    arrivalName: ""
}, {
    id: 7,
    image: "/img/iphone.jpg",
    name: "iPhone 7",
    type: "phone",
    guarantee: {start: "2023-07-01", end: "2024-07-01"},
    status: false,
    price: 200,
    arrivalName: ""
}, {
    id: 8,
    image: "/img/iphone.jpg",
    name: "iPhone 8",
    type: "phone",
    guarantee: {start: "2023-08-01", end: "2024-08-01"},
    status: false,
    price: 250,
    arrivalName: ""
}, {
    id: 9,
    image: "/img/iphone.jpg",
    name: "iPhone 9",
    type: "phone",
    guarantee: {start: "2023-09-01", end: "2024-09-01"},
    status: false,
    price: 300,
    arrivalName: ""
}, {
    id: 10,
    image: "/img/iphone.jpg",
    name: "iPhone 10",
    type: "phone",
    guarantee: {start: "2023-10-01", end: "2024-10-01"},
    status: false,
    price: 350,
    arrivalName: ""
}, {
    id: 11,
    image: "/img/iphone.jpg",
    name: "iPhone 11",
    type: "smartphone",
    guarantee: {start: "2023-11-01", end: "2024-11-01"},
    status: true,
    price: 400,
    arrivalName: "arrival1"
}, {
    id: 12,
    image: "/img/iphone.jpg",
    name: "iPhone 12",
    type: "smartphone",
    guarantee: {start: "2023-12-01", end: "2024-12-01"},
    status: true,
    price: 500,
    arrivalName: "arrival2"
}, {
    id: 13,
    image: "/img/iphone.jpg",
    name: "iPhone 13",
    type: "smartphone",
    guarantee: {start: "2024-01-01", end: "2025-01-01"},
    status: true,
    price: 550,
    arrivalName: "arrival3"
}, {
    id: 14,
    image: "/img/iphone.jpg",
    name: "iPhone 14",
    type: "smartphone",
    guarantee: {start: "2024-02-01", end: "2025-02-01"},
    status: true,
    price: 600,
    arrivalName: "arrival4"
}, {
    id: 15,
    image: "/img/iphone.jpg",
    name: "iPhone 15",
    type: "smartphone",
    guarantee: {start: "2024-03-01", end: "2025-03-01"},
    status: true,
    price: 700,
    arrivalName: "arrival5"
}, {
    id: 16,
    image: "/img/iphone.jpg",
    name: "iPhone 16",
    type: "smartphone",
    guarantee: {start: "2024-04-01", end: "2025-04-01"},
    status: false,
    price: 800,
    arrivalName: ""
}, {
    id: 17,
    image: "/img/iphone.jpg",
    name: "iPhone 17",
    type: "smartphone",
    guarantee: {start: "2025-05-01", end: "2026-05-01"},
    status: false,
    price: 900,
    arrivalName: ""
},];

router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: products
    });
});

router.delete("/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === productId);

    if (index === -1) {
        return res.status(404).json({success: false, message: "Product not found"});
    }

    products.splice(index, 1);
    res.status(200).json({success: true, message: "Product deleted"});
});

export default router;