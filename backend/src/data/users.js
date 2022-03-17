import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin",
        email: "admin@gmail.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "Avi Cohen",
        email: "avi@gmail.com",
        password: bcrypt.hashSync("123456", 10),
    },
    {
        name: "Noah Cohen",
        email: "noah@gmail.com",
        password: bcrypt.hashSync("123456", 10),
    },
];

export default users;
