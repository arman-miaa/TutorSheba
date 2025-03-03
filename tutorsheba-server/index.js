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
    origin: ["http://localhost:5173", "https://tutor-sheba-beta.vercel.app"],
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
    const jobsCollection = client.db("tutorDB").collection("jobs");
    const premiumTutorsCollection = client
      .db("tutorDB")
      .collection("premiumTutors");
    const parentsReviewsCollection = client
      .db("tutorDB")
      .collection("parentsReviews");
    const tutorsReviewsCollection = client
      .db("tutorDB")
      .collection("tutorsReviews");
    const serviceCollection = client
      .db("tutorDB")
      .collection("services");

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
    // User Login API

    app.post("/login", async (req, res) => {
      const { identifier, password } = req.body;

      console.log("🔹 Received login request:", identifier, password);

      const user = await usersCollection.findOne({
        $or: [{ email: identifier }, { phone: identifier }],
      });

      console.log("🔹 Found User:", user);

      if (!user) {
        console.log("❌ User not found!");
        return res.status(401).send({ message: "Invalid Credentials" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      console.log("🔹 Password Valid:", isPasswordValid);

      if (!isPasswordValid) {
        console.log("❌ Invalid Password!");
        return res.status(401).send({ message: "Invalid Credentials" });
      }

      const token = generateToken({ email: user.email, role: user.role });

      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      });

      console.log("✅ Login Successful!");

      res.send({
        message: "Login Successful",
        user: {
          email: user.email,
          number: user.phone,
          name: user.name,
          role: user.role,
        },
      });
    });

    // Assuming 'verifyToken' middleware is already defined
    app.get("/profile", verifyToken, async (req, res) => {
      try {
        const { email, phone } = req.user; // Assuming 'req.user' contains 'email' or 'phone'

        let user;
        if (email) {
          // If the user is a tutor (has an email), search by email
          user = await usersCollection.findOne({ email });
        } else if (phone) {
          // If the user is a student (has a phone), search by phone number
          user = await usersCollection.findOne({ phone });
        }

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
          secure: process.env.NODE_ENV === "production", // ❌ Secure only in production
          sameSite: "lax", // ✅ Better compatibility
        });

        res
          .status(200)
          .send({ message: "Tutor registered successfully", token });
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error registering tutor", error });
      }
    });

    app.post("/students", async (req, res) => {
      console.log("Received Student Data:", req.body); // Debugging

      try {
        const { name, phone, password, role } = req.body;

        if (!phone || !name || !password || !role) {
          return res.status(400).send({ message: "All fields are required!" });
        }

        // Check if the user already exists
        const existingUser = await usersCollection.findOne({ phone });
        if (existingUser) {
          return res.status(400).send({ message: "User already exists!" });
        }

        // Hash the password before storing
        const hashedPassword = await bcrypt.hash(password, 10);

        // Add the student to the 'students' collection
        const student = { name, phone, password: hashedPassword, role };
        await studentCollection.insertOne(student);

        // Add the student to the 'users' collection as well
        const user = { phone, password: hashedPassword, name, role };
        await usersCollection.insertOne(user);

        // Generate token
        const token = generateToken({ phone });

        // Set the token as an HTTP-only cookie
        res.cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
        });

        res
          .status(200)
          .send({ message: "Student registered successfully", token });
      } catch (error) {
        console.error("Error registering student:", error);
        res.status(500).send({ message: "Error registering student", error });
      }
    });

    app.get("/premiumTutors", async (req, res) => {
      const result = await premiumTutorsCollection.find().toArray();
      res.send(result);
    });

    app.post("/premiumTutors", async (req, res) => {
      const tutor = req.body;
      const result = await premiumTutorsCollection.insertOne(tutor);
      res.send(result);
    });

    app.get("/parentsReviews", async (req, res) => {
      const result = await parentsReviewsCollection.find().toArray();
      res.send(result);
    });
    app.get("/tutorsReviews", async (req, res) => {
      const result = await tutorsReviewsCollection.find().toArray();
      res.send(result);
    });
    app.get("/services", async (req, res) => {
      const result = await serviceCollection.find().toArray();
      res.send(result);
    });


    app.get("/jobs", async (req, res) => {
      const result = await jobsCollection.find().toArray();
      res.send(result);
    });

        app.get("/jobs/:id", async (req, res) => {
          const jobId = req.params.id;
          const query = { _id: new ObjectId(jobId) };
          const result = await jobsCollection.findOne(query);
          res.send(result);
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
