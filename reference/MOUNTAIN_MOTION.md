# Landing mountain motion

The hero contains a real silent 15-second H.264 MP4 camera approach aimed at the sunlit ridge, a moving light-haze plane, an independently moving photographic foreground and a subtle text offset. Scrolling drives different translations for each plane. Video plays once, with pause/resume/replay controls in EN/RU/UA.

The MP4 is rendered from the supplied photograph using FFmpeg, not a generative-video service. Render it with `scripts/render-mountain-video.py` and imageio-ffmpeg on PYTHONPATH. Desktop output is 1600×900; mobile is 960×540, both 24 fps, no audio, fast-start enabled.

Foreground assets were created with the built-in image generation tool using `public/assets/croatian-road.png` as the visual reference. Because the tool returned RGB with a baked checkerboard rather than RGBA, the shipped foreground is composited with a separately generated luminance matte. The original input photograph is unchanged.

## Asset prompts

- Foreground plate: photographic pale-grey Croatian karst rocks and Mediterranean pine branches along the bottom edge and low right corner, matching the reference sunset lighting and dark blue shadows; preserve a wide 16:9 canvas, leave the sky/sea/mountain area empty, no road, text, people or buildings.
- Luminance matte: exact foreground segmentation at 1672×941; solid black for all checkerboard/background, solid white for existing rocks and foliage, matching their organic contours and positions, no interior texture.

## Controls and performance

- No media source is attached under `prefers-reduced-motion`; a static composition remains.
- Data Saver suppresses automatic video loading; the user can explicitly start it.
- Video pauses when the hero leaves the viewport or the document becomes hidden.
- Scroll motion uses passive listeners and requestAnimationFrame, with transforms instead of layout animation. Frames stop when the motion settles.
- All scene listeners, video playback and animation frames are cleaned up on navigation.

## Verified locally

- Desktop and 390 px mobile composition.
- MP4 playback, pause, resume and replay.
- Distinct scroll transforms for the far, atmosphere and near planes.
- Offscreen pause at 0.30 seconds with `ended=false`.
- Mobile source selection uses `approach-mobile.mp4`.
