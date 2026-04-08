import { Router } from "express";

const router = Router();

const products = [
    { id: 1, name: "iPhone 15", price: 1000 }
];

router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: products
    });
});

export default router;