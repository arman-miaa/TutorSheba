const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());



const uri =
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7argw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
      );
      

   
const tutorCollection = client.db("tutorDB").collection("tutors");
const studentCollection = client.db("tutorDB").collection("students");

app.post("/tutors", async (req, res) => {
  try {
    const tutor = req.body;
    const result = await tutorCollection.insertOne(tutor);
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error adding tutor", error });
  }
});

app.post("/students", async (req, res) => {
  try {
    const student = req.body;
    const result = await studentCollection.insertOne(student);
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Error adding student", error });
  }
});



  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





app.get("/", async (req, res) => {
    res.send('tutorsheba server is running')
})

app.listen(port, () => {
    console.log(`tutorsheba server is running on port ${port}`);
})