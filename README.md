# blg-haluy

Telegram-бот для группового чата. Его тегают или отвечают на его сообщение, он отвечает через LLM: с характером из системного промпта, с поиском в интернете, с разбором картинок и ссылок.

## Старт

1. Возьмите ключ на [странице API keys](https://aistudio.google.com/apikey).
2. Скопируйте пример окружения и вставьте ключ и токен бота:

```powershell
copy .env.example .env
```

3. Установите зависимости и запустите бота:

```powershell
npm install
npm run bot
```

Нужен Node.js 24 или новее. `npm run bot` запускает `tsx src/index.ts`.

В `.env` задаются `GEMINI_API_KEY`, `GEMINI_MODEL` и `TELEGRAM_BOT_TOKEN`. Файл в git не попадает. Если модель отвечает `503` и пишет `high demand`, поставьте другую: сейчас стабильно отвечает `gemini-3.5-flash-lite`.

## Как устроен

Один процесс Node. `src/index.ts` только связывает слои: из апдейта собирается запрос, пустой отбрасывается, иначе агент возвращает текст и бот шлёт его в чат.

```text
src/
  index.ts                 старт и связь слоёв
  bot/
    telegram.ts            grammY: тег, реплай, «печатает», нарезка по 4096
    incoming.ts            апдейт Telegram → готовый запрос
  agent/
    client.ts              клиент LLM
    prompt.ts              системный промпт
    reply.ts               один generateContent
```

```mermaid
flowchart LR
  chat[Групповой чат]
  bot[bot]
  agent[agent]
  chat -->|"тег или реплай"| bot
  bot -->|"текст, реплай, картинки"| agent
  agent -->|"ответ"| bot
  bot -->|"реплай в чат"| chat
```

`bot/` понимает Telegram. `agent/` получает уже текст и картинки и один раз вызывает модель. Поиск и чтение ссылок делают инструменты этого вызова.

Импорты идут от корня проекта: `src/agent/client`, без относительных путей и без суффикса `.js`.

Как собирать бота и чего в репозиторий не добавлять, записано в [AGENTS.md](AGENTS.md).

## Проверки

```powershell
npm run lint
npm run lint:fix
npm run typecheck
```

Перед коммитом на изменённых файлах запускаются `eslint --fix`, повторный `eslint` и, если среди них есть TypeScript, `typecheck`.
