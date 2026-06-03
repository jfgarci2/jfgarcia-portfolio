"""Upscale dashboard captures for sharper retina display (recruiter portfolio)."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parents[1] / "public" / "work"
TARGET_WIDTH = 1920
MIN_WIDTH_TO_UPSCALE = 1400
WEBP_QUALITY = 90


def sharpen(im: Image.Image) -> Image.Image:
    return im.filter(ImageFilter.UnsharpMask(radius=1.2, percent=130, threshold=2))


def upscale_file(path: Path) -> None:
    im = Image.open(path).convert("RGB")
    w, h = im.size
    if w >= MIN_WIDTH_TO_UPSCALE:
        return
    scale = TARGET_WIDTH / w
    new_size = (TARGET_WIDTH, max(1, round(h * scale)))
    out = im.resize(new_size, Image.Resampling.LANCZOS)
    out = sharpen(out)
    out.save(path, "WEBP", quality=WEBP_QUALITY, method=6)
    print(f"upscaled {path.relative_to(ROOT.parent)}: {w}x{h} -> {new_size[0]}x{new_size[1]}")


def main() -> None:
    for webp in sorted(ROOT.rglob("*.webp")):
        upscale_file(webp)


if __name__ == "__main__":
    main()
