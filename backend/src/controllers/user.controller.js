import {authenticateUserService} from '../services/user.service.js'

export const authenticateUser = async (req, res) => {
    res.send(await authenticateUserService(req.body));
};
