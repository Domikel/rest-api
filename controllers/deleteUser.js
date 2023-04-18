import { User } from "../app.js";
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteduser = await User.findByIdAndDelete(id);

    res.json({ success: true, data: deleteduser });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
};
