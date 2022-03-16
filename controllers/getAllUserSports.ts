import SportsManModel from "../models/Sportman"

export default {
    getMany: async (req, res, next) => {
        try {
            const userSports = await SportsManModel.find({
                sports: "rugby"
            }).exec();
            console.log("yeppppaaaa vive le rugby")
            res.status(201).json(userSports)

        } catch (error) {
            console.log(error),
                res.status(404)
            next(error)
        }
    },
}