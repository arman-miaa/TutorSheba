const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const bcrypt = require("bcryptjs");


const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // ✅ Update this to match frontend URL
    credentials: true, // ✅ Required for cookies
  })
);
app.use(cookieParser()); // ✅ Ensure cookie-parser is used
app.use(express.json());


// MongoDB Connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7argw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB!");

    // Collections
    const tutorCollection = client.db("tutorDB").collection("tutors");
    const studentCollection = client.db("tutorDB").collection("students");
    const usersCollection = client.db("tutorDB").collection("users");

    // JWT Token Generation
    function generateToken(user) {
      return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "7d" });
    }

    // Middleware to Verify JWT Token
    function verifyToken(req, res, next) {
      const token = req.cookies?.token;
      if (!token) {
        return res.status(401).send({ message: "Unauthorized" });
      }
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return res.status(401).send({ message: "Invalid Token" });
        }
        req.user = decoded;
        next();
      });
    }

    // User Login API
    app.post("/login", async (req, res) => {
      const { email, password } = req.body;
      const user = await usersCollection.findOne({ email });
      if (!user || user.password !== password) {
        return res.status(401).send({ message: "Invalid Credentials" });
      }
      const token = generateToken({ email: user.email });
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });
      res.send({ message: "Login Successful", token });
    });

    // Assuming 'verifyToken' middleware is already defined
    app.get("/profile", verifyToken, async (req, res) => {
      try {
        // Fetch the user from the database using the email from the token
        const user = await usersCollection.findOne({ email: req.user.email });

        // If user is found, send the user data in the response
        if (user) {
          res.send(user);
        } else {
          // If no user found, return a 404 error
          res.status(404).send({ message: "User not found" });
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).send({ message: "Error fetching user data", error });
      }
    });

    // Logout API
    app.post("/logout", (req, res) => {
      res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      });
      res.send({ message: "Logged out successfully" });
    });

    // Add Tutors & Students
    // Add Tutor (Signup)
    app.post("/tutors", async (req, res) => {
      try {
        const { email, name, subject, password } = req.body;

        // Check if the user already exists
        const existingUser = await usersCollection.findOne({ email });
        if (existingUser) {
          return res.status(400).send({ message: "User already exists!" });
        }

        // Hash the password before storing
        const hashedPassword = await bcrypt.hash(password, 10);

        // Add the tutor to the 'tutors' collection
        const tutor = { email, name, subject, password: hashedPassword };
        await tutorCollection.insertOne(tutor);

        // Add the tutor to the 'users' collection as well
        const user = { email, password: hashedPassword, name, role: "tutor" };
        await usersCollection.insertOne(user);

        // Generate token
        const token = generateToken({ email });

        // Set the token as an HTTP-only cookie
     res.cookie("token", token, {
       httpOnly: true,
       secure: process.env.NODE_ENV === "production", // Only secure in production
       sameSite: "none",
     });


        res
          .status(200)
          .send({ message: "Tutor registered successfully", token });
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error registering tutor", error });
      }
    });

    // Add Student (Signup)
    app.post("/students", async (req, res) => {
      try {
        const { email, name, grade, password } = req.body;

        // Check if the user already exists
        const existingUser = await usersCollection.findOne({ email });
        if (existingUser) {
          return res.status(400).send({ message: "User already exists!" });
        }

        // Hash the password before storing
        const hashedPassword = await bcrypt.hash(password, 10);

        // Add the student to the 'students' collection
        const student = { email, name, grade, password: hashedPassword };
        await studentCollection.insertOne(student);

        // Add the student to the 'users' collection as well
        const user = { email, password: hashedPassword, name, role: "student" };
        await usersCollection.insertOne(user);

        // Generate token
        const token = generateToken({ email });

        // Set the token as an HTTP-only cookie
        res.cookie("token", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        });

        res
          .status(200)
          .send({ message: "Student registered successfully", token });
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error registering student", error });
      }
    });
  } finally {
    // await client.close(); // Uncomment this in production
  }
}
run().catch(console.dir);

// Root Route
app.get("/", (req, res) => {
  res.send("TutorSheba server is running");
});

// Start Server
app.listen(port, () => {
  console.log(`TutorSheba server running on port ${port}`);
});
