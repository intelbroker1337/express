import express from "express"

const app = express()

app.use(express.static("public"))

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>TS Test</title>
      <link rel="stylesheet" href="/style.css">
    </head>
    <body>
      <h1>TypeScript + Express Works 🚀</h1>
      <button id="btn">Click</button>

      <script>
        document.getElementById("btn").onclick = () => {
          alert("Working!")
        }
      </script>
    </body>
    </html>
  `)
})

export default app
