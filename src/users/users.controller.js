import { response, request } from "express";
import usersModel from "./users.model.js";
import { createAcount } from "../acount/acounts.controller.js";
import bcryptjs from "bcryptjs";


export const createUser = async (req, res) => {
    const { nameUser, nicknameUser, dpiUser, directionUser, celNumberUser,
        emailUser, passwordUser, nameWork, monthlyIncome, tipeUser, favoritesAcounts, acount,
            acountNumber, balanceAcount, limitTransactions, movementAcount } = req.body;

    try {
        const user = usersModel({
            nameUser, nicknameUser, dpiUser, directionUser, celNumberUser,
            emailUser, passwordUser, nameWork, monthlyIncome, tipeUser, favoritesAcounts, acount
        })

        const acount = acountsModel({
            acountNumber, balanceAcount, limitTransactions, movementAcount
        })
        
        const encript = bcryptjs.genSaltSync();
        user.passwordUser = bcryptjs.hashSync(passwordUser, encript);
        

        await user.save();
        await acount.save();
        
        res.status(200).json({
            message: "User created successfully",
            user
        })

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}