# 01 — CSS токенизация и Theme Switcher

**Требования:** R01, R05, R06, R07, R08, R09, R10, R17, R18
**Blocked by:** —
**Зона:** `src/app/globals.css` · `src/components/theme/`
**Волна:** 1
**Status:** ready

## Что должно заработать

1. В `src/app/globals.css` прописаны CSS-переменные для оранжево-белой темы `[data-theme="orange-white"]`:
   - `--bg-main: #ffffff`
   - `--bg-surface: #f8f9fa`
   - `--bg-surface-hover: #fff8f3`
   - `--text-primary: #111827`
   - `--text-secondary: #4b5563`
   - `--text-muted: #9ca3af`
   - `--accent-orange: #ff6b00`
   - `--accent-orange-hover: #e05d00`
   - `--accent-amber: #ffb800`
   - `--border-subtle: #e5e7eb`
2. Создан `ThemeProvider` (`src/components/theme/ThemeProvider.tsx`), управляющий темой на клиенте с сохранением в `localStorage`.
3. Создан компонент `ThemeSwitcher` (`src/components/theme/ThemeSwitcher.tsx`) с аккуратной кнопкой переключения между Dark Editorial и Orange & White.

## Из брифа, дословно

> «Основной фон: #FFFFFF чистый белый / #F8F9FA светло-серый»
> «Главный акцент: #FF6B00 оранжевый»
> «Переключатель темы (Layout Theme Provider / Switcher) для переключения Dark Editorial <-> Orange & White»

## Критерии приёмки

- [ ] CSS-токены темы `orange-white` успешно объявлены в `globals.css`
- [ ] ThemeProvider меняет атрибут `data-theme` на элементе `<html>` или `<body>`
- [ ] Выбранная тема сохраняется при перезагрузке страницы через `localStorage`
- [ ] Переключатель `ThemeSwitcher` отображается и переключает режим без ошибок
