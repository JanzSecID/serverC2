<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Januar Nur Santoso - Portfolio</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <style>
    body { background: #000; color: #e5e7eb; font-family: 'Courier New', monospace; }
    .circle-progress { transition: stroke-dashoffset 2s ease-in-out; }
    .logo-ios { border-radius: 50%; box-shadow: 0 0 20px rgba(0, 255, 0, 0.5); }
    .terminal-text { animation: typing 3s steps(30, end) infinite; }
    @keyframes typing {
      from { width: 0; }
      to { width: 100%; }
    }
  </style>
</head>
<body>
  <!-- 3D Canvas for Background Animation -->
  <canvas id="bgCanvas" class="fixed inset-0 z-0"></canvas>

  <div class="relative z-10 max-w-4xl mx-auto p-6">
    <!-- Header with Circular Logo -->
    <header class="text-center mb-12">
      <img src="https://lightwallpapers.com/downloads/anime-mafia/18.fius0aaviam8nsj.jpg:large.jpg" alt="Profile Logo" class="logo-ios w-32 h-32 mx-auto mb-4">
      <h1 class="text-4xl font-bold text-green-400">Januar Nur Santoso</h1>
      <p class="text-xl text-gray-300">Analisis Website Exploit Dan Source Code Malware</p>
    </header>

    <!-- About Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-green-400 mb-4">Tentang Saya</h2>
      <p class="text-gray-300">
        Saya seorang penggiat keamanan siber yang fokus pada analisis eksploitasi website dan penelitian kode sumber malware. Dengan keahlian di berbagai bahasa pemrograman, saya membangun solusi untuk mendeteksi dan mencegah ancaman siber.
      </p>
    </section>

    <!-- Skills Section with Circular Progress -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-green-400 mb-4">Keahlian</h2>
      <div class="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
        <div>
          <svg class="w-24 h-24 mx-auto" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#1f2937" stroke-width="10"/>
            <circle id="sql-progress" cx="50" cy="50" r="45" fill="none" stroke="#3b82f6" stroke-width="10" stroke-dasharray="283" stroke-dashoffset="85"/>
          </svg>
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg" alt="SQL Logo" class="w-8 h-8 mx-auto mt-2">
          <p class="text-gray-300">SQL (70%)</p>
        </div>
        <div>
          <svg class="w-24 h-24 mx-auto" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#1f2937" stroke-width="10"/>
            <circle id="python-progress" cx="50" cy="50" r="45" fill="none" stroke="#facc15" stroke-width="10" stroke-dasharray="283" stroke-dashoffset="57"/>
          </svg>
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg" alt="Python Logo" class="w-8 h-8 mx-auto mt-2">
          <p class="text-gray-300">Python (80%)</p>
        </div>
        <div>
          <svg class="w-24 h-24 mx-auto" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#1f2937" stroke-width="10"/>
            <circle id="bash-progress" cx="50" cy="50" r="45" fill="none" stroke="#10b981" stroke-width="10" stroke-dasharray="283" stroke-dashoffset="113"/>
          </svg>
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gnubash.svg" alt="Bash Logo" class="w-8 h-8 mx-auto mt-2">
          <p class="text-gray-300">Bash (60%)</p>
        </div>
        <div>
          <svg class="w-24 h-24 mx-auto" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#1f2937" stroke-width="10"/>
            <circle id="php-progress" cx="50" cy="50" r="45" fill="none" stroke="#8b5cf6" stroke-width="10" stroke-dasharray="283" stroke-dashoffset="85"/>
          </svg>
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/php.svg" alt="PHP Logo" class="w-8 h-8 mx-auto mt-2">
          <p class="text-gray-300">PHP (70%)</p>
        </div>
        <div>
          <svg class="w-24 h-24 mx-auto" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#1f2937" stroke-width="10"/>
            <circle id="nodejs-progress" cx="50" cy="50" r="45" fill="none" stroke="#22c55e" stroke-width="10" stroke-dasharray="283" stroke-dashoffset="57"/>
          </svg>
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg" alt="Node.js Logo" class="w-8 h-8 mx-auto mt-2">
          <p class="text-gray-300">Node.js (80%)</p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-green-400 mb-4">Kontak</h2>
      <p class="text-gray-300">
        Hubungi saya melalui Instagram: 
        <a href="https://instagram.com/networdkpk_" class="text-green-400 hover:underline" target="_blank">networdkpk_</a>
      </p>
    </section>

    <!-- Terminal Effect -->
    <div class="text-center">
      <p class="terminal-text text-green-400 text-lg inline-block overflow-hidden whitespace-nowrap">
        $ whoami: Januar Nur Santoso | Hacker Mode Activated
      </p>
    </div>
  </div>

  <script>
    // Three.js 3D Background (Rotating Cube)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bgCanvas'), alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();

    // Resize Handler
    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    // Progress Circle Animation
    const progressCircles = [
      { id: 'sql-progress', offset: 85 },
      { id: 'python-progress', offset: 57 },
      { id: 'bash-progress', offset: 113 },
      { id: 'php-progress', offset: 85 },
      { id: 'nodejs-progress', offset: 57 }
    ];

    progressCircles.forEach(circle => {
      const element = document.getElementById(circle.id);
      setTimeout(() => {
        element.style.strokeDashoffset = circle.offset;
      }, 500);
    });
  </script>
</body>
</html>
