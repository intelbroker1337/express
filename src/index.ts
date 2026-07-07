app.get("/", (req, res) => {
  res.type("html").send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Abstract Hub</title>

<style>
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Inter,Arial,sans-serif;
}

body{
height:100vh;
overflow:hidden;
background:#05060A;
color:white;
display:flex;
justify-content:center;
align-items:center;
position:relative;
}

/* Animated Grid */
body::before{
content:"";
position:absolute;
inset:0;
background:
linear-gradient(rgba(0,255,255,.08) 1px, transparent 1px),
linear-gradient(90deg, rgba(0,255,255,.08) 1px, transparent 1px);
background-size:40px 40px;
animation:gridMove 12s linear infinite;
opacity:.4;
}

@keyframes gridMove{
from{transform:translateY(0);}
to{transform:translateY(40px);}
}

/* Glow */
body::after{
content:"";
position:absolute;
width:700px;
height:700px;
background:radial-gradient(circle,#00c8ff33,transparent 70%);
filter:blur(60px);
animation:pulse 5s ease-in-out infinite;
}

@keyframes pulse{
50%{
transform:scale(1.2);
opacity:.5;
}
}

.panel{
position:relative;
z-index:2;
width:900px;
background:rgba(10,12,18,.75);
backdrop-filter:blur(25px);
border:1px solid rgba(0,255,255,.15);
border-radius:24px;
padding:40px;
box-shadow:
0 0 40px rgba(0,255,255,.12),
0 0 120px rgba(0,150,255,.08);
}

nav{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:60px;
}

.logo{
font-size:30px;
font-weight:800;
letter-spacing:3px;
color:#7df9ff;
text-shadow:0 0 15px #00d9ff;
}

.links a{
margin-left:25px;
text-decoration:none;
color:#b5c7d6;
transition:.25s;
}

.links a:hover{
color:white;
}

.hero{
display:grid;
grid-template-columns:1.2fr .8fr;
gap:50px;
align-items:center;
}

h1{
font-size:58px;
line-height:1;
margin-bottom:20px;
}

h1 span{
color:#00d9ff;
text-shadow:0 0 20px #00d9ff;
}

p{
color:#9ba8b4;
line-height:1.8;
font-size:18px;
margin-bottom:35px;
}

button{
padding:15px 34px;
background:#00bfff;
border:none;
border-radius:14px;
font-size:16px;
cursor:pointer;
color:white;
transition:.25s;
box-shadow:0 0 20px rgba(0,191,255,.4);
}

button:hover{
transform:translateY(-4px);
box-shadow:0 0 35px rgba(0,191,255,.8);
}

.cards{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:18px;
}

.card{
padding:25px;
background:rgba(255,255,255,.03);
border:1px solid rgba(255,255,255,.08);
border-radius:18px;
transition:.25s;
}

.card:hover{
transform:translateY(-6px);
border-color:#00d9ff;
box-shadow:0 0 25px rgba(0,217,255,.3);
}

.card h3{
margin-bottom:8px;
color:#7df9ff;
}

.card p{
font-size:15px;
margin:0;
}

.footer{
margin-top:50px;
display:flex;
justify-content:space-between;
color:#667;
font-size:14px;
}
</style>

</head>

<body>

<div class="panel">

<nav>
<div class="logo">ABSTRACT</div>

<div class="links">
<a href="/">Home</a>
<a href="/api-data">API</a>
<a href="/healthz">Status</a>
</div>

</nav>

<div class="hero">

<div>

<h1>
Future.<br>
<span>Unlocked.</span>
</h1>

<p>
A futuristic TypeScript + Express dashboard powered by Vercel.
Ultra fast. Minimal. Cyber inspired.
</p>

<button onclick="launch()">
Launch System
</button>

</div>

<div class="cards">

<div class="card">
<h3>⚡ Runtime</h3>
<p>Express + TypeScript</p>
</div>

<div class="card">
<h3>☁ Cloud</h3>
<p>Vercel Edge</p>
</div>

<div class="card">
<h3>🚀 Performance</h3>
<p>Optimized</p>
</div>

<div class="card">
<h3>🛰 Status</h3>
<p style="color:#00ff99;">ONLINE</p>
</div>

</div>

</div>

<div class="footer">
<div>Abstract Framework</div>
<div>v1.0</div>
</div>

</div>

<script>
function launch(){
alert("System Online 🚀");
}
</script>

</body>
</html>
`);
});
