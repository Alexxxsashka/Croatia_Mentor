import Image from 'next/image';

export function lessonCover(type: string) {
  return `/assets/learning/${type === 'grammar' ? 'grammar' : ['listening','dictation'].includes(type) ? 'audio' : type === 'reading' ? 'travel' : 'words'}.png`;
}

export function LessonCover({type, compact = false}: {type: string; compact?: boolean}) {
  return <span className={compact ? 'lesson-cover compact' : 'lesson-cover'} aria-hidden="true">
    <Image src={lessonCover(type)} alt="" fill sizes={compact ? '80px' : '(max-width: 640px) 90vw, 400px'} />
  </span>;
}
