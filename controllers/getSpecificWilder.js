import WilderModel from "../models/Wilder"

export default {
  getAll: async (req, res) => {
    await WilderModel.find()
      .then((result) => {
        res.status(200).json({
          success: true,
          result,
        });
      })
      .catch((err) => {
        res.status(400).json({
          success: false,
          result: listErrors(err),
        });
      });
  },
  getOne: async (req, res, next) => {

    try {
      const getOne = await WilderModel.findOne({
        name: 'tb'
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
    const {
      _id
    } = req.params;
    WilderModel.deleteOne({
        _id
      })
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

  update: (req, res) => {
    const {
      _id,
      name,
      city,
      skills
    } = req.body;
    WilderModel.updateOne({
        _id
      }, {
        name,
        city,
        skills
      })
      .then((result) => {
        console.log(result);
        if (result.matchedCount === 0) {
          return res.json({
            success: false,
            result: "cet identifiant n'existe pas"
          })
        }
        res.json({
          success: true,
          result
        })

      }).catch((err) => {
        res.json({
          success: false,
          result: listErrors(err)
        })

      });
  },

  find: (req, res) => {
    const {
      _id
    } = req.params;
    WilderModel.find({
      _id
    }).then((result) => {
      if (!result) {
        return res.json({
          succes: false,
          result: "cet identifiant nexiste pas"
        })
      }
      res.json({
        succes: true,
        result
      })
      console.log(result);
    }).catch((err) => {
      console.log(err)
    })

  }

}