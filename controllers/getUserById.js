import { User } from "../models/user.js";
export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    /* const user = await UserCollection.findOne({_id:id}) */

    const user = await User.findById(id);
    if (user) {
      res.json({ success: true, data: user });
    } else {
      res.json({ success: false, message: "please provide valid id" });
    }
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};
