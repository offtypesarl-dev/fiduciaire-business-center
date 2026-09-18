#!/usr/bin/env python3
"""Compose the 1200x630 social-preview card (og.png) from real brand assets.
Deterministic — no invented data. Brand: navy #0c2643 -> #081b30, gold #dac176."""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
NAVY = (12, 38, 67)      # #0c2643
NAVY_DEEP = (8, 27, 48)  # #081b30
GOLD = (218, 193, 118)   # #dac176
GOLD_LT = (228, 206, 142)  # #e4ce8e
WHITE = (245, 247, 250)
MUTED = (176, 190, 205)

FONT = "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf"
FONT_R = "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf"

def f(size, bold=True):
    return ImageFont.truetype(FONT if bold else FONT_R, size)

# --- background: vertical navy gradient ---
bg = Image.new("RGB", (W, H), NAVY)
top, bot = NAVY, NAVY_DEEP
for y in range(H):
    t = y / H
    r = int(top[0] + (bot[0]-top[0])*t)
    g = int(top[1] + (bot[1]-top[1])*t)
    b = int(top[2] + (bot[2]-top[2])*t)
    bg.paste((r, g, b), (0, y, W, y+1))
img = bg
d = ImageDraw.Draw(img)

# --- faint oversized logo mark watermark bottom-right ---
mark = Image.open("public/logo-mark.png").convert("RGBA")
wm = mark.resize((520, 520))
alpha = wm.split()[3].point(lambda a: int(a * 0.06))
wm.putalpha(alpha)
img.paste(wm, (W-360, H-300), wm)

PAD = 72

# --- logo (full horizontal) top-left ---
logo = Image.open("public/logo-full.png").convert("RGBA")
lw = 430
lh = int(logo.height * lw / logo.width)
logo = logo.resize((lw, lh))
img.paste(logo, (PAD, PAD-6), logo)

# --- headline ---
y = PAD + lh + 46
d.text((PAD, y), "Expertise comptable &", font=f(60), fill=WHITE)
y += 74
d.text((PAD, y), "création d’entreprise", font=f(60), fill=GOLD_LT)

# --- sub / area served ---
y += 96
d.text((PAD, y), "El Jadida  ·  Casablanca  ·  Maroc", font=f(33, bold=False), fill=MUTED)

# --- gold rule ---
y += 66
d.line([(PAD, y), (PAD+300, y)], fill=GOLD, width=3)

# --- bottom band: trust + contact ---
by = H - PAD - 30
d.text((PAD, by), "Comptabilité · Fiscalité · Création · Audit", font=f(28), fill=GOLD)
tag = "depuis 2015"
tw = d.textlength(tag, font=f(28, bold=False))
d.text((W-PAD-tw, by), tag, font=f(28, bold=False), fill=MUTED)

img.save("public/og.png", "PNG")
print("wrote public/og.png", img.size)
