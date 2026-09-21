# Remix of BeeCore Secure Login

Recreate the attached BeeCore login page as accurately as possible. Treat the screenshot as the visual source of truth and keep the design clean, minimal, sleek, thin, and premium.

Keep the existing compact BeeCore header: logo and BeeCore on the left, sun icon, gold theme toggle, and moon icon on the right. Keep the header simple with a subtle translucent background and thin bottom border.

Use a very light white/cool-gray background with only a few extremely subtle abstract thin gold/gray lines and soft shapes. Do not use a beehive/hexagon pattern, heavy gradients, large decorations, or busy graphics. The background should have plenty of clean empty space.

In the center, recreate the frosted white login card from the screenshot with the same proportions, rounded corners, subtle transparency, thin border, and soft shadow. Keep all spacing and sizing visually close to the reference.

Inside the card, preserve this exact hierarchy:

BeeCore gold emblem

BeeCore

Admin Panel

SECURE ACCESS divider

Email address field

Password field with visibility icon

Remember me / Forgot password?

Dark rounded Sign In button with gold loading ring

OR divider

Blue outlined Continue with Telegram button

Small security authorization message

Use clean SVG icons matching the reference. Keep typography modern, restrained, and proportional. Do not add extra text, navigation, cards, illustrations, or unnecessary UI.

Add a functional light/dark theme toggle. It should smoothly change the header, background, login card, inputs, borders, text, icons, and decorative accents while preserving the same layout. Save the selected theme so it remains after refreshing.

Add simple frontend test interactions:

Password eye icon toggles visibility.

Sign In validates the fields.

Empty fields show a clean warning result.

Invalid email shows an error result.

Valid input shows the gold loading ring inside the Sign In button for about 3-5 seconds.

Then show a small custom success alert with a check icon saying “Login Successful”.

Telegram button shows a simple informational alert saying “Telegram authentication is not connected yet.”

Alerts should be minimal, rounded, clean, and consistent with the BeeCore design.

No real authentication or backend connection.

Most important: do not over-design it. Keep the result very close to the screenshot with thin elements, subtle decoration, restrained colors, generous whitespace, precise alignment, and a polished premium appearance.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e398ca5b-3fc1-4e3d-8345-07be180241f1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
