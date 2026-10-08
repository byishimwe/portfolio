from pathlib import Path
from PIL import Image, ImageOps, ImageDraw

out = Path('tmp/reference-review')
out.mkdir(parents=True, exist_ok=True)
for folder in Path('images').iterdir():
    files = sorted(folder.glob('*.png'))
    for start in range(0, len(files), 12):
        batch = files[start:start+12]
        sheet = Image.new('RGB', (1600, 300 * ((len(batch)+3)//4)), '#eee9e1')
        draw = ImageDraw.Draw(sheet)
        for i, file in enumerate(batch):
            thumb = ImageOps.contain(Image.open(file).convert('RGB'), (390, 260))
            x, y = (i%4)*400, (i//4)*300
            sheet.paste(thumb, (x,y))
            draw.text((x+5,y+267), f'{start+i+1}: {file.stem}', fill='#222')
        sheet.save(out / f'{folder.name}-{start//12}.jpg')
