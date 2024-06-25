import Librarian_details from "../models/librarian.js";
import bcrypt from 'bcrypt';

export async function authenticateUser(req, res) {
    try {
      const { email, password } = req.body;
      const user = await Librarian_details.findOne({ where: { email } });
  
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      if (user.password !== password) {
        return res.status(401).json({ error: "Invalid password" });
      }
  
      const {   name } = user;
      res.json({  name});
    } catch (error) {
      console.error("Error authenticating user:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  export async function getAllUsers(req, res) {
    try {
      const users = await Librarian_details.findAll();
      res.json(users);
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }