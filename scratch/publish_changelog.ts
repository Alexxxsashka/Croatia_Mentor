import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const changelog = await prisma.changelog.create({
    data: {
      version: "v1.2.0",
      titleUa: "🚀 Оновлення v1.2.0: Безпека профілю, SMS-підтвердження та миттєвий вхід через Google",
      titleRu: "🚀 Обновление v1.2.0: Безопасность профиля, SMS-подтверждение и мгновенный вход через Google",
      titleEn: "🚀 Update v1.2.0: Profile Security, SMS OTP Verification & Instant Google Sign-in",
      contentUa: `[b]🔒 1. Захист та безпека акаунту[/b]
• [b]Захист особистого кабінету[/b]: Сторінки дашборду, профілю та налаштувань повністю захищені на рівні сервера. Доступ до навчального прогресу можливий лише після входу.
• [b]Безпечна зміна пароля[/b]: Додано функцію швидкої зміни пароля в один клік із миттєвим надсиланням листа підтвердження.
• [b]Відновлення доступу[/b]: Додано посилання «Забули пароль?» на сторінці авторизації.

[b]📲 2. Прив'язка мобільного телефону по SMS[/b]
• [b]SMS OTP Підтвердження[/b]: Прив'язка та зміна номера телефону здійснюються через зручне модальне вікно з 6-значним SMS-кодом.
• [b]Фоновий захист reCAPTCHA[/b]: Підключено рекапчу Enterprise без необхідності вирішувати пазли вручну.

[b]⚡ 3. Миттєвий вхід через Google[/b]
• [b]Авторизація в 1 клік[/b]: Вхід через Google став ще швидшим та надійнішим — ваш прогрес та аватар підтягуються з першої секунди.
• [b]Плавний оверлей завантаження[/b]: Додано анімований індикатор авторизації, що усуває миготіння кнопок та затримки.

[b]🎨 4. Покращення інтерфейсу[/b]
• [b]Плавний вихід з акаунту[/b]: Натискання «Вийти» безпомилково перенаправляє на головну сторінку вашої мови.`,
      contentRu: `[b]🔒 1. Защита и безопасность аккаунта[/b]
• [b]Защита личного кабинета[/b]: Страницы личного кабинета, профиля и настроек полностью защищены на уровне сервера. Доступ к прогрессу возможен только после входа.
• [b]Безопасная смена пароля[/b]: Добавлена функция быстрой смены пароля в один клик с мгновенной отправкой письма подтверждения.
• [b]Восстановление доступа[/b]: Добавлена ссылка «Забыли пароль?» на странице входа.

[b]📲 2. Привязка мобильного телефона по SMS[/b]
• [b]SMS OTP Подтверждение[/b]: Привязка и изменение номера телефона происходят через удобное модальное окно с 6-значным SMS-кодом.
• [b]Фоновая защита reCAPTCHA[/b]: Подключена рекапча Enterprise без необходимости решать картинки вручную.

[b]⚡ 3. Мгновенный вход через Google[/b]
• [b]Авторизация в 1 клик[/b]: Вход через Google стал еще быстрее и надежнее — ваш прогресс и аватар подтягиваются с первой секунды.
• [b]Плавный оверлей загрузки[/b]: Добавлен анимированный индикатор авторизации, исключающий задержки и мигание кнопок.

[b]🎨 4. Улучшения интерфейса[/b]
• [b]Плавный выход из профиля[/b]: Нажатие кнопки «Выйти» без ошибок перенаправляет на главную страницу вашего языка.`,
      contentEn: `[b]🔒 1. Enhanced Account Security[/b]
• [b]Protected Routes[/b]: Dashboard, Profile, and Admin pages are strictly secured at the server level. Access requires an authenticated session.
• [b]Secure Password Reset[/b]: Added 1-click password reset via instant verification email.
• [b]Account Recovery[/b]: Added "Forgot password?" link on the sign-in page.

[b]📲 2. SMS OTP Phone Verification[/b]
• [b]SMS OTP Verification[/b]: Mobile phone updates now require 6-digit SMS verification.
• [b]Background reCAPTCHA[/b]: Integrated reCAPTCHA Enterprise for seamless bot protection.

[b]⚡ 3. Instant Google Sign-in[/b]
• [b]1-Click Auth[/b]: Social login now syncs NextAuth sessions instantly with no lag.
• [b]Smooth Loading Overlay[/b]: Added fullscreen loading indicator for seamless login transitions.

[b]🎨 4. UI & Performance Improvements[/b]
• [b]Clean Logout[/b]: Signing out cleanly redirects to your localized homepage.`,
    },
  });

  console.log("Successfully published changelog:", changelog.id, changelog.version);
}

main()
  .catch((err) => {
    console.error("Error publishing changelog:", err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
