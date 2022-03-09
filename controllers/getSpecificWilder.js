import WilderModel from "../models/Wilder"

export default {
    getOne: async (req, res, next) => {

        try {
            const getOne = await WilderModel.findOne({
                name: 'Beatriz'
            }).exec();
            console.log("yepaaaa")
            res.status(200).json(getOne)

        } catch (error) {
            console.log(error)
            res.status(404)
            next(error)
        }

    },

    delete: (req, res, next) => {
        const { _id } = req.params;
        WilderModel.deleteOne({ _id })
          .then((result) => {
            if (result.deletedCount === 0) {
              return res.json({
                success: false,
                result: "Cet identifiant n'existe pas",
              });
            }
            res.status(200).json({
              success: true,
              result,
            });
          })
          .catch((err) => {
            console.log(err);
            res.status(400).json({
              success: false,
              result: listErrors(err),
            });
          });
      },

}


