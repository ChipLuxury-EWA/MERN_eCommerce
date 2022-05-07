import axios from "axios";

export const loginUser = async (email, password) => {
    const { data } = await axios.post(
        "user/login",
        { email, password },
        { Headers: { "Content-Type": "application/json" } }
    );
    return data;
};

export const registerUser = async (name, email, password) => {
    const { data } = await axios.post(
        "user/",
        { name, email, password },
        { Headers: { "Content-Type": "application/json" } }
    );
    return data;
};
