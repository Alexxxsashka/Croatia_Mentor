"use client";

import {useEffect, useRef, useState} from 'react';
import {useLocale} from 'next-intl';
import {Pause, Play, RotateCcw} from 'lucide-react';
import './mountain-scene.css';

const assets='/assets/mountain/';
const labels={
  ru:{pause:'Пауза движения',play:'Включить движение',replay:'Повторить приближение'},
  ua:{pause:'Пауза руху',play:'Увімкнути рух',replay:'Повторити наближення'},
  en:{pause:'Pause motion',play:'Play motion',replay:'Replay approach'},
};

export function MountainScene(){
  const locale=useLocale();
  const text=labels[locale as keyof typeof labels]||labels.en;
  const scene=useRef<HTMLDivElement>(null);
  const video=useRef<HTMLVideoElement>(null);
  const manuallyPaused=useRef(false);
  const resume=useRef<()=>void>(()=>{});
  const [playing,setPlaying]=useState(false);
  const [ended,setEnded]=useState(false);

  useEffect(()=>{
    const el=scene.current,film=video.current,hero=el?.closest<HTMLElement>('.hero');
    if(!el||!film||!hero)return;
    const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
    const connection=(navigator as Navigator & {connection?:{saveData?:boolean}}).connection;
    let visible=false,frame=0,position=0;
    const source=()=>{
      if(!film.getAttribute('src')){
        film.src=assets+(window.matchMedia('(max-width: 700px)').matches?'approach-mobile.mp4':'approach.mp4');
        film.load();
      }
    };
    const render=()=>{
      frame=0;
      if(preference.matches||manuallyPaused.current||!visible||document.hidden)return;
      const bounds=hero.getBoundingClientRect();
      const target=Math.max(0,Math.min(-bounds.top,bounds.height));
      position+=(target-position)*0.12;
      const progress=position/Math.max(bounds.height,1);
      const time=Math.min(film.currentTime/15,1);
      const push=time*time*(3-2*time);
      el.style.setProperty('--far-y',`${position*0.25}px`);
      el.style.setProperty('--far-scale',String(1.025+progress*0.055));
      el.style.setProperty('--haze-y',`${position*0.1}px`);
      el.style.setProperty('--near-y',`${-position*0.12}px`);
      el.style.setProperty('--near-scale',String(1.015+push*0.10+progress*0.11));
      hero.style.setProperty('--hero-copy-y',`${-position*0.045}px`);
      if(!film.paused||Math.abs(target-position)>0.15)frame=requestAnimationFrame(render);
    };
    const schedule=()=>{if(!frame)frame=requestAnimationFrame(render)};
    const sync=()=>{
      if(preference.matches||manuallyPaused.current||!visible||document.hidden){film.pause();return}
      if(!connection?.saveData&&!film.ended){source();void film.play().catch(()=>{})}
      schedule();
    };
    resume.current=()=>{source();void film.play().catch(()=>{});schedule()};
    const onPreference=()=>{
      if(preference.matches){el.removeAttribute('style');hero.style.removeProperty('--hero-copy-y');position=0}
      sync();
    };
    const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;sync()},{threshold:0});
    observer.observe(hero);
    film.addEventListener('play',schedule);
    window.addEventListener('scroll',schedule,{passive:true});
    window.addEventListener('resize',schedule,{passive:true});
    document.addEventListener('visibilitychange',sync);
    preference.addEventListener('change',onPreference);
    return()=>{
      observer.disconnect();cancelAnimationFrame(frame);film.pause();
      film.removeEventListener('play',schedule);
      window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);
      document.removeEventListener('visibilitychange',sync);preference.removeEventListener('change',onPreference);
      hero.style.removeProperty('--hero-copy-y');resume.current=()=>{};
    };
  },[]);

  const toggle=()=>{
    const film=video.current;
    if(!film)return;
    if(playing){manuallyPaused.current=true;film.pause();return}
    manuallyPaused.current=false;
    if(film.ended){film.currentTime=0;setEnded(false)}
    resume.current();
  };
  const label=ended?text.replay:playing?text.pause:text.play;
  const Control=ended?RotateCcw:playing?Pause:Play;
  return <>
    <div className="mountain-scene" ref={scene} aria-hidden="true">
      <div className="mountain-backdrop" data-depth="far">
        <video ref={video} muted playsInline preload="none" poster="/assets/croatian-road.png" tabIndex={-1}
          onPlay={()=>setPlaying(true)} onPause={()=>setPlaying(false)} onEnded={()=>{setPlaying(false);setEnded(true)}}/>
      </div>
      <div className="mountain-atmosphere" data-depth="atmosphere"/>
      <div className="mountain-foreground" data-depth="near"/>
    </div>
    <button className="mountain-motion-control" onClick={toggle} aria-label={label} title={label}><Control size={14}/><span>{label}</span></button>
  </>;
}
