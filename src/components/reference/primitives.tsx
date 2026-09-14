"use client";
import type {ComponentProps} from 'react';
import {Link} from '@/i18n/navigation';
import {ArrowRight, ArrowDown, ArrowUp, Route, Clock3, Languages, Sparkles, Play, Circle} from 'lucide-react';
const icons = {ArrowRight, ArrowDown, ArrowUp, Route, Clock3, Languages, Sparkles, Play};
export function ReferenceIcon({name='ArrowRight', size=20}: {name?:string;size?:number}) {
  const Icon = icons[name as keyof typeof icons] || Circle;
  return <Icon size={size} strokeWidth={1.6} aria-hidden="true"/>;
}
export function ReferenceLink({to='', ...props}: Omit<ComponentProps<typeof Link>,'href'> & {to?:string}) {
  return <Link href={to.startsWith('/')?to:`/${to}`} {...props}/>;
}
