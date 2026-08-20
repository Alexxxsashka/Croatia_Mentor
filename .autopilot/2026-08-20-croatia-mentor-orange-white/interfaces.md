# Границы и контракты проекта (Croatia Mentor Redesign)

## Правила проекта

- **Стек:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Prisma, NextAuth v5, next-intl.
- **Команды сборки:** `npm run build`, `npm run dev`, `npm run lint`.
- **Строгий запрет:** Не менять `prisma/schema.prisma`, бэкенд API-маршруты, логику авторизации или Server Actions.

## Границы, решённые в спецификации

| Модуль | Владеет | Выставляет | Прячет |
|---|---|---|---|
| `theme-provider` | Состоянием выбранной темы (`dark` / `orange-white`) | `useTheme()`, `setTheme()`, атрибут `data-theme` на `<html>` | Логику взаимодействия с `localStorage` / cookie |
| `theme-switcher` | Кнопкой переключения темы в шапке/меню | Компонент `<ThemeSwitcher />` | Анимацию элементов переключателя |
| `ui-components` | Тематизированным стилем компонентов | Реактивные UI-компоненты (Hero, Navigation, Cards, Chat) | Применение CSS-переменных темы `--bg-main`, `--accent-orange` и т.д. |

## Зоны ответственности тасков

- **Таск 01:** `src/app/globals.css`, `src/components/theme/` (Токены, ThemeProvider, ThemeSwitcher).
- **Таск 02:** `src/components/`, `src/app/[locale]/` (Адаптация дизайна компонентов и страниц под обе темы).
- **Таск 03:** `src/` (Итоговая сборка `npm run build` и проверка).
