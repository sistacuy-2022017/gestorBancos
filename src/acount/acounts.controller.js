import { response, request } from "express";

export const createAcount = async (req, res) => {
    const { acountNumber, balanceAcount, limitTransactions, movementAcount } = req.body;
    
    try{
        const acount = acountsModel({
            acountNumber, balanceAcount, limitTransactions, movementAcount
        })

        await acount.save();

        res.status(200).json({
            message: "Acount created successfully",
            acount
        })
    }catch(error){
        res.status(400).json({ message: error.message });
    }

};