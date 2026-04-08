import {Router} from "express";

const router = Router();

const arrivals = [
    {
        id: 1,
        name: "arrival1",
        quantity: 10,
        date: 1717401600000,
        products: [
            {id: 1, name: "iPhone 15", category: "phone", price: 700},
            {id: 2, name: "iPhone 15", category: "phone", price: 700},
            {id: 3, name: "iPhone 15", category: "phone", price: 700},
            {id: 4, name: "iPhone 15", category: "phone", price: 700},
            {id: 5, name: "iPhone 15", category: "phone", price: 700},
            {id: 6, name: "iPhone 15", category: "phone", price: 700},
            {id: 7, name: "iPhone 15", category: "phone", price: 700},
            {id: 8, name: "iPhone 15", category: "phone", price: 700},
            {id: 9, name: "iPhone 15", category: "phone", price: 700},
            {id: 10, name: "iPhone 15", category: "phone", price: 700}
        ]
    },
    {
        id: 2,
        name: "arrival2",
        quantity: 10,
        date: 1717488000000,
        products: [
            {id: 11, name: "iPhone 14", category: "phone", price: 600},
            {id: 12, name: "iPhone 14", category: "phone", price: 600},
            {id: 13, name: "iPhone 14", category: "phone", price: 600},
            {id: 14, name: "iPhone 14", category: "phone", price: 600},
            {id: 15, name: "iPhone 14", category: "phone", price: 600},
            {id: 16, name: "iPhone 14", category: "phone", price: 600},
            {id: 17, name: "iPhone 14", category: "phone", price: 600},
            {id: 18, name: "iPhone 14", category: "phone", price: 600},
            {id: 19, name: "iPhone 14", category: "phone", price: 600},
            {id: 20, name: "iPhone 14", category: "phone", price: 600}
        ]
    },
    {
        id: 3,
        name: "arrival3",
        quantity: 10,
        date: 1717574400000,
        products: [
            {id: 21, name: "iPhone 13", category: "phone", price: 550},
            {id: 22, name: "iPhone 13", category: "phone", price: 550},
            {id: 23, name: "iPhone 13", category: "phone", price: 550},
            {id: 24, name: "iPhone 13", category: "phone", price: 550},
            {id: 25, name: "iPhone 13", category: "phone", price: 550},
            {id: 26, name: "iPhone 13", category: "phone", price: 550},
            {id: 27, name: "iPhone 13", category: "phone", price: 550},
            {id: 28, name: "iPhone 13", category: "phone", price: 550},
            {id: 29, name: "iPhone 13", category: "phone", price: 550},
            {id: 30, name: "iPhone 13", category: "phone", price: 550}
        ]
    },
    {
        id: 4,
        name: "arrival4",
        quantity: 10,
        date: 1717660800000,
        products: [
            {id: 31, name: "iPhone 12", category: "phone", price: 500},
            {id: 32, name: "iPhone 12", category: "phone", price: 500},
            {id: 33, name: "iPhone 12", category: "phone", price: 500},
            {id: 34, name: "iPhone 12", category: "phone", price: 500},
            {id: 35, name: "iPhone 12", category: "phone", price: 500},
            {id: 36, name: "iPhone 12", category: "phone", price: 500},
            {id: 37, name: "iPhone 12", category: "phone", price: 500},
            {id: 38, name: "iPhone 12", category: "phone", price: 500},
            {id: 39, name: "iPhone 12", category: "phone", price: 500},
            {id: 40, name: "iPhone 12", category: "phone", price: 500}
        ]
    },
    {
        id: 5,
        name: "arrival5",
        quantity: 10,
        date: 1717747200000,
        products: [
            {id: 41, name: "iPhone 11", category: "phone", price: 400},
            {id: 42, name: "iPhone 11", category: "phone", price: 400},
            {id: 43, name: "iPhone 11", category: "phone", price: 400},
            {id: 44, name: "iPhone 11", category: "phone", price: 400},
            {id: 45, name: "iPhone 11", category: "phone", price: 400},
            {id: 46, name: "iPhone 11", category: "phone", price: 400},
            {id: 47, name: "iPhone 11", category: "phone", price: 400},
            {id: 48, name: "iPhone 11", category: "phone", price: 400},
            {id: 49, name: "iPhone 11", category: "phone", price: 400},
            {id: 50, name: "iPhone 11", category: "phone", price: 400}
        ]
    }
];

const getAllProducts = () =>
    arrivals.flatMap((arrival) => arrival.products);

router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: arrivals,
    });
});

router.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = arrivals.findIndex((a) => a.id === id);

    if (index === -1) {
        return res.status(404).json({success: false, message: "Arrival not found"});
    }

    const deleted = arrivals.splice(index, 1)[0];
    res.status(200).json({success: true, data: deleted});
});

router.post("/", (req, res) => {
    const {name, products} = req.body;
    console.log("Incoming request:", req.body);

    if (!name || !products || !Array.isArray(products) || products.length === 0) {
        return res.status(400).json({success: false, message: "Invalid data"});
    }

    try {
        const allProducts = getAllProducts();

        const fullProducts = products.map((p) => {
            const productFromDB = allProducts.find((prod) => prod.id === p.id);
            if (!productFromDB) {
                throw new Error(`Product with id ${p.id} not found`);
            }
            return {...productFromDB};
        });

        const totalQuantity = products.length;

        const newArrival = {
            id: arrivals.length ? arrivals[arrivals.length - 1].id + 1 : 1,
            name,
            products: fullProducts,
            quantity: totalQuantity,
            date: Date.now(),
        };

        arrivals.push(newArrival);

        res.status(201).json({success: true, data: newArrival});
    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message: (error).message});
    }
});

export default router;