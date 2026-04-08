import express from "express";
const router = express.Router();

const users = [
    {
        id: 1,
        name: "Mr. Cat",
        email: "cat@gmail.com",
        avatar: "https://www.dailypaws.com/thmb/nwNtJnMRSJ33nbdzrdsRwSJHMfU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/anime-cat-names-1204854078-2000-d34f509ae54943d8b78cfb4bf9ba0678.jpg",
        auth: {
            token: "",
            tokenExpirationDate: "",
            refreshToken: "",
            refreshTokenExpirationDate: "",
        },
    },
    {
        id: 2,
        name: "Ms. Dog",
        email: "dog@gmail.com",
        avatar: "https://www.dailypaws.com/thmb/nwNtJnMRSJ33nbdzrdsRwSJHMfU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/anime-cat-names-1204854078-2000-d34f509ae54943d8b78cfb4bf9ba0678.jpg",
        auth: {
            token: "",
            tokenExpirationDate: "",
            refreshToken: "",
            refreshTokenExpirationDate: "",
        },
    },
];

router.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, data: user });
});

export default router;