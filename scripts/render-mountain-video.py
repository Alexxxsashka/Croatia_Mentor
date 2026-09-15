"""Render the supplied still into an actual silent H.264 camera push-in.

Run with imageio-ffmpeg available on PYTHONPATH. No service keys are needed.
This is a deterministic camera animation, not generative video synthesis.
"""
from pathlib import Path
import subprocess
import imageio_ffmpeg

root = Path(__file__).resolve().parents[1]
source = root / 'public/assets/croatian-road.png'
destination = root / 'public/assets/mountain'
destination.mkdir(parents=True, exist_ok=True)
frames = 360
# Smooth velocity at each end, aimed at the sunlit peak rather than image centre.
t = f'on/{frames - 1}'
zoom = f'1+0.16*(3*pow({t},2)-2*pow({t},3))'
for filename, size, quality in [('approach.mp4', '1600x900', '22'), ('approach-mobile.mp4', '960x540', '24')]:
    filters = f"scale=3344:-1,zoompan=z='{zoom}':x='(iw-iw/zoom)*0.78':y='(ih-ih/zoom)*0.28':d={frames}:s={size}:fps=24,format=yuv420p"
    subprocess.run([
        imageio_ffmpeg.get_ffmpeg_exe(), '-y', '-hide_banner', '-loglevel', 'warning',
        '-i', str(source), '-vf', filters, '-frames:v', str(frames), '-an',
        '-c:v', 'libx264', '-preset', 'slow', '-crf', quality,
        '-movflags', '+faststart', str(destination / filename),
    ], check=True)
    print(f'{filename}: {(destination / filename).stat().st_size:,} bytes')
