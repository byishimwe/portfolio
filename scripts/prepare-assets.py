"""Optimize fresh captures; never reads the reference /images directory."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import json

public = Path('public')
public.mkdir(exist_ok=True)
dimensions = {}
for source in Path('tmp/captures').glob('*.png'):
    image = Image.open(source).convert('RGB')
    image.save(public / f'{source.stem}.webp', quality=90, method=6)
    dimensions[source.stem] = {'width': image.width, 'height': image.height}
    print(source.stem, image.size, (public / f'{source.stem}.webp').stat().st_size)
Path('app/content/image-dimensions.json').write_text(json.dumps(dimensions, indent=2))

font_path = 'C:/Windows/Fonts/arial.ttf'
font = ImageFont.truetype(font_path, 45)
small = ImageFont.truetype(font_path, 18)
for slug, title, name, color in [
    ('cafe-bliss','Café Bliss','cafe-desktop','#E8DED1'),
    ('imizi','IMIZI Training Club','imizi-desktop','#252624'),
    ('quad','Quad','quad-desktop','#E1E7E8'),
]:
    source = public / f'{name}.webp'
    if not source.exists():
        continue
    canvas = Image.new('RGB',(1200,630),'#F4F1EB')
    draw = ImageDraw.Draw(canvas)
    draw.text((40,30),'PRINCE ARNAUD ISHIMWE / SELECTED WORK',font=small,fill='#595A55')
    draw.text((40,68),title,font=font,fill='#20211F')
    draw.rectangle((40,145,1160,595),fill=color)
    image = Image.open(source)
    image.thumbnail((1040,410),Image.Resampling.LANCZOS)
    canvas.paste(image,((1200-image.width)//2,165+(410-image.height)//2))
    canvas.save(public / f'social-{slug}.webp',quality=90,method=6)
canvas = Image.new('RGB',(1200,630),'#F4F1EB')
draw = ImageDraw.Draw(canvas)
draw.text((60,45),'PRINCE ARNAUD ISHIMWE / INDEPENDENT PRACTICE',font=small,fill='#595A55')
display=ImageFont.truetype(font_path,80)
for i,line in enumerate(['Digital experiences','built to be','remembered.']):
    draw.text((60,150+i*100),line,font=display,fill='#20211F')
draw.line((60,555,1140,555),fill='#D7D2C8',width=1)
draw.text((60,580),'DESIGN & FRONTEND DEVELOPMENT / RWANDA',font=small,fill='#595A55')
canvas.save(public / 'social-home.webp',quality=92,method=6)
