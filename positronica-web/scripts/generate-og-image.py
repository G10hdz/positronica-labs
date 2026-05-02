"""Generate og-image.png (1200x630) for Positronica Labs social sharing."""
from playwright.sync_api import sync_playwright
from pathlib import Path

HTML = """<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Orbitron:wght@700;900&family=Space+Grotesk:wght@400;500&display=swap" rel="stylesheet" />
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  width: 1200px;
  height: 630px;
  overflow: hidden;
  background: #0e0e14;
  font-family: 'Inter', sans-serif;
  position: relative;
}

/* Background radial glow */
.glow-center {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 700px 400px at 60% 40%, rgba(196,181,227,0.10) 0%, transparent 70%),
    radial-gradient(ellipse 400px 300px at 15% 80%, rgba(70,90,121,0.18) 0%, transparent 60%),
    linear-gradient(160deg, #111118 0%, #0e0e14 60%, #12101a 100%);
}

/* Orbital ring decorations */
.ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(196,181,227,0.10);
}
.ring-1 { width: 520px; height: 520px; top: -120px; right: -80px; }
.ring-2 { width: 340px; height: 340px; top: -30px; right: 30px; border-color: rgba(196,181,227,0.06); }
.ring-3 { width: 180px; height: 180px; top: 60px; right: 120px; border-color: rgba(196,181,227,0.14); }

/* Dot on ring */
.dot {
  position: absolute;
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #C4B5E3;
  box-shadow: 0 0 12px 4px rgba(196,181,227,0.5);
  top: 76px; right: 206px;
}

/* Content */
.content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 64px 72px;
}

.eyebrow {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.22em;
  color: #8B7BA8;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.brand {
  font-family: 'Orbitron', sans-serif;
  font-weight: 900;
  font-size: 72px;
  letter-spacing: 0.04em;
  line-height: 1;
  color: #F0EBF8;
  text-shadow: 0 0 60px rgba(196,181,227,0.25);
  margin-bottom: 8px;
}

.brand span {
  color: #C4B5E3;
}

.tagline {
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  font-size: 22px;
  color: #9B92B0;
  letter-spacing: 0.01em;
  margin-top: 20px;
  max-width: 560px;
  line-height: 1.5;
}

/* Bottom bar */
.bottom {
  position: absolute;
  bottom: 48px;
  left: 72px;
  right: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.divider-line {
  position: absolute;
  bottom: 100px;
  left: 72px;
  width: 480px;
  height: 1px;
  background: linear-gradient(90deg, rgba(196,181,227,0.3), transparent);
}

.domain {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #5a4f6a;
  letter-spacing: 0.06em;
}

.badge {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #C4B5E3;
  border: 1px solid rgba(196,181,227,0.25);
  padding: 5px 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
</style>
</head>
<body>
  <div class="glow-center"></div>
  <div class="ring ring-1"></div>
  <div class="ring ring-2"></div>
  <div class="ring ring-3"></div>
  <div class="dot"></div>

  <div class="content">
    <div class="eyebrow">Applied AI Lab · Latin America</div>
    <div class="brand">POSITRONICA<br><span>LABS</span></div>
    <div class="tagline">Building agentic systems<br>for equitable operations.</div>
  </div>

  <div class="divider-line"></div>
  <div class="bottom">
    <div class="domain">positronicalabs.dev</div>
    <div class="badge">Women-Led</div>
  </div>
</body>
</html>"""

def main():
    out_path = Path(__file__).parent.parent / "public" / "og-image.png"
    out_path.parent.mkdir(exist_ok=True)

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={"width": 1200, "height": 630})
        page.set_content(HTML, wait_until="networkidle")
        page.screenshot(path=str(out_path), clip={"x": 0, "y": 0, "width": 1200, "height": 630})
        browser.close()

    print(f"Generated: {out_path} ({out_path.stat().st_size // 1024}KB)")

if __name__ == "__main__":
    main()
