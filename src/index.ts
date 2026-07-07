app.get('/', (req, res) => {
  res.type('html').send(`
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Nova Hub</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">

<style>
:root {
  --bg-color: #030014;
  --card-bg: rgba(255, 255, 255, 0.03);
  --card-border: rgba(255, 255, 255, 0.08);
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --accent-1: #38bdf8;
  --accent-2: #818cf8;
  --accent-3: #c084fc;
}

* {
  box-sizing: border-box;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

body {
  margin: 0;
  min-height: 100vh;
  background-color: var(--bg-color);
  background-image: 
    radial-gradient(circle at 15% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 85% 30%, rgba(192, 132, 252, 0.15) 0%, transparent 50%);
  color: var(--text-main);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
}

.container {
  width: 90%;
  max-width: 960px;
  padding: 50px;
  background: rgba(10, 10, 15, 0.4);
  border: 1px solid var(--card-border);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 32px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1);
  animation: fadeUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
}

.logo {
  font-size: 26px;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(to right, var(--accent-1), var(--accent-2), var(--accent-3));
  -webkit-background-clip: text;
  color: transparent;
  display: flex;
  align-items: center;
  gap: 8px;
}

nav a {
  color: var(--text-muted);
  text-decoration: none;
  margin-left: 28px;
  font-weight: 600;
  font-size: 14px;
  transition: color 0.3s ease;
  position: relative;
}

nav a:hover {
  color: var(--text-main);
}

nav a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background: linear-gradient(90deg, var(--accent-1), var(--accent-2));
  transition: width 0.3s ease;
  border-radius: 2px;
}

nav a:hover::after {
  width: 100%;
}

.hero-content {
  text-align: left;
  max-width: 650px;
}

h1 {
  font-size: clamp(40px, 6vw, 64px);
  margin: 0;
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: -1.5px;
}

.gradient-text {
  background: linear-gradient(135deg, var(--accent-1) 0%, var(--accent-3) 100%);
  -webkit-background-clip: text;
  color: transparent;
}

p {
  color: var(--text-muted);
  font-size: 18px;
  line-height: 1.6;
  max-width: 500px;
  margin: 24px 0 32px 0;
  font-weight: 300;
}

button {
  padding: 16px 36px;
  border: none;
  border-radius: 100px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px -10px rgba(99, 102, 241, 0.5);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

button:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 15px 25px -10px rgba(139, 92, 246, 0.6);
}

button:active {
  transform: translateY(1px);
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 60px;
}

.card {
  background: var(--card-bg);
  padding: 24px;
  border-radius: 24px;
  border: 1px solid var(--card-border);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.card::before {
  content: "";
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%);
  pointer-events: none;
}

.card:hover {
  transform: translateY(-8px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  background: rgba(255, 255, 255, 0.05);
}

.card h3 {
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
}

.card p {
  margin: 0;
  font-size: 14px;
  color: var(--text-muted);
}

.status {
  color: #34d399 !important;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
}

.status::before {
  content: '';
  display: block;
  width: 8px;
  height: 8px;
  background-color: #34d399;
  border-radius: 50%;
  box-shadow: 0 0 10px #34d399;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .container { padding: 30px; }
  nav { flex-direction: column; gap: 20px; margin-bottom: 40px; }
  nav a { margin: 0 10px; }
  h1 { font-size: 36px; }
}
</style>
</head>

<body>

<div class="container">

  <nav>
    <div class="logo">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
      Nova Hub
    </div>
    <div>
      <a href="/">Home</a>
      <a href="/api-data">API</a>
      <a href="/healthz">Status</a>
    </div>
  </nav>

  <div class="hero-content">
    <h1>
      Build something<br>
      <span class="gradient-text">amazing.</span>
    </h1>

    <p>
      A modern TypeScript + Express website running on Vercel. Fast, clean, and fully customizable for your next big idea.
    </p>

    <button onclick="test()">
      Launch Demo
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    </button>
  </div>

  <div class="cards">
    <div class="card">
      <h3>Server Status</h3>
      <p class="status">Online & Ready</p>
    </div>

    <div class="card">
      <h3>Stack</h3>
      <p>Express.js + TypeScript</p>
    </div>

    <div class="card">
      <h3>Infrastructure</h3>
      <p>Vercel Edge Network</p>
    </div>
  </div>

</div>

<script>
function test(){
  const btn = document.querySelector('button');
  const originalText = btn.innerHTML;
  
  btn.innerHTML = 'Connecting...';
  btn.style.opacity = '0.8';
  
  setTimeout(() => {
    alert("Nova Hub is working 🚀");
    btn.innerHTML = originalText;
    btn.style.opacity = '1';
  }, 400);
}
</script>

</body>
</html>
  `);
});
