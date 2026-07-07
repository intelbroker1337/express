app.get('/', (req, res) => {
  res.type('html').send(`
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Nova Hub</title>

<style>
* {
  box-sizing: border-box;
  font-family: Inter, system-ui, Arial, sans-serif;
}

body {
  margin: 0;
  min-height: 100vh;
  background:
    radial-gradient(circle at top, #334155 0%, transparent 35%),
    #050505;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 90%;
  max-width: 900px;
  padding: 40px;
  background: rgba(20,20,20,0.75);
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(15px);
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0,0,0,.5);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.logo {
  font-size: 24px;
  font-weight: 800;
  background: linear-gradient(90deg,#60a5fa,#a78bfa);
  -webkit-background-clip:text;
  color:transparent;
}

nav a {
  color:#aaa;
  text-decoration:none;
  margin-left:20px;
}

nav a:hover {
  color:white;
}

h1 {
  font-size:55px;
  margin:0;
  line-height:1.1;
}

p {
  color:#aaa;
  font-size:18px;
  max-width:600px;
}

button {
  margin-top:25px;
  padding:14px 30px;
  border:none;
  border-radius:14px;
  background:#6366f1;
  color:white;
  font-size:16px;
  cursor:pointer;
  transition:.2s;
}

button:hover {
  transform:translateY(-3px);
  background:#818cf8;
}

.cards {
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
  gap:15px;
  margin-top:40px;
}

.card {
  background:#111;
  padding:20px;
  border-radius:18px;
  border:1px solid rgba(255,255,255,.08);
}

.card h3 {
  margin-top:0;
}

.status {
  color:#22c55e;
}
</style>

</head>

<body>

<div class="container">

<nav>
<div class="logo">⚡ Nova Hub</div>

<div>
<a href="/">Home</a>
<a href="/api-data">API</a>
<a href="/healthz">Status</a>
</div>

</nav>


<h1>
Build something<br>
<span style="color:#818cf8">amazing.</span>
</h1>

<p>
A modern TypeScript + Express website running on Vercel.
Fast, clean and fully customizable.
</p>


<button onclick="test()">
Launch Demo
</button>


<div class="cards">

<div class="card">
<h3>🚀 Server</h3>
<p class="status">Online</p>
</div>

<div class="card">
<h3>⚡ Framework</h3>
<p>Express + TypeScript</p>
</div>

<div class="card">
<h3>☁ Hosting</h3>
<p>Vercel</p>
</div>

</div>


</div>


<script>
function test(){
 alert("Nova Hub is working 🚀")
}
</script>


</body>
</html>
  `)
})
