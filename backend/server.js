require("dotenv").config()

const upload = require("./multer")
const cloudinary = require("./config/cloudinary")
const streamifier = require("streamifier")
const Memory = require("./models/Memory")
const express = require("express")
const cors = require("cors")

const connectDB = require("./config/db")

const app = express()

connectDB()

// Middleware
app.use(cors())
app.use(express.json())

// Port
const PORT = 2000

// Home Route
app.get("/", (req, res) => {

  res.send("Backend Server Running 💖")

})

// Login Route
app.post("/login", (req, res) => {

  const { password } = req.body

  // Correct Password
  if (password === "pratibha") {

    return res.status(200).json({

      success: true,
      message: "Access Granted 💖"

    })

  }

  // Wrong Password
  return res.status(401).json({

    success: false,
    message: "Wrong Secret Password 💔"

  })

})

app.post("/add-memory", upload.single("image"), async (req, res) => {

  try {

    const { title, description, date } = req.body

    let imageUrl = ""

    const streamUpload = () => {

      return new Promise((resolve, reject) => {

        const stream = cloudinary.uploader.upload_stream(

          { folder: "our-story-memories" },

          (error, result) => {

            if (result) {

              resolve(result)

            }

            else {

              reject(error)

            }

          }

        )

        streamifier.createReadStream(req.file.buffer).pipe(stream)

      })

    }

    const result = await streamUpload()

    imageUrl = result.secure_url

    const newMemory = new Memory({

      title,
      description,
      image: imageUrl,
      date

    })

    await newMemory.save()

    res.status(201).json({

      success: true,
      message: "Memory Added Successfully 💖"

    })

  }

  catch (error) {

    console.log(error)

    res.status(500).json({

      success: false,
      message: "Image Upload Failed 😭"

    })

  }

})

app.get("/memories", async (req, res) => {

  try {

    const memories = await Memory.find()

    res.status(200).json({

      success: true,
      memories

    })

  }

  catch (error) {

    res.status(500).json({

      success: false,
      message: "Failed To Fetch Memories 😭"

    })

  }

})

app.get("/memories", async (req, res) => {

  try {

    const memories = await Memory.find()

    res.status(200).json({

      success: true,
      memories

    })

  }

  catch (error) {

    res.status(500).json({

      success: false,
      message: "Failed To Fetch Memories 😭"

    })

  }

})

// Start Server
app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`)

})