# VIP Forex AI Pro — iPhone starter

This is a **front-end prototype**, not a live trading bot. It deliberately shows no prices and emits no BUY/SELL calls until a verified market-data backend is connected.

## Included
- Responsive iPhone-first dashboard
- Eight requested real-FX symbols
- OTC explicitly disabled
- 1-minute and 5-minute configuration display
- PWA manifest and service worker
- Notification permission and local test notification
- Push-event handler ready for a properly configured server

## Important limitations
1. Quotex does not publish a public developer trading API. Do not provide Quotex passwords, session cookies, or SSIDs to unofficial tools.
2. A third-party feed is not automatically identical to Quotex's executable quote. Before any signal is enabled, compare symbol mapping, bid/ask or payout quote, timestamps, candle boundaries, and spread. If stale or mismatched, return `NO TRADE`.
3. iPhone web push requires the site to be hosted over HTTPS, added to the Home Screen, user permission, a service worker, and a server that sends standards-compliant Web Push (VAPID). The buttons here only request permission and send a local test notification; remote push is not connected.
4. The app does not place trades. No strategy can guarantee a win rate. Backtest and forward-test before risking money.

## Deploy
Host the contents of this folder at the root of an HTTPS website. Keep API keys on a server, never in `app.js` or other browser files.

## iPhone install
In Safari, open the HTTPS website → Share → Add to Home Screen → enable “Open as Web App” → Add. Open the new Home Screen icon, then tap **Enable notifications**.

## Next backend work
- Select a licensed/reputable FX market-data provider with M1/M5 candles and live ticks.
- Implement server-side feed normalization and freshness checks.
- Implement EMA(9/21/50), RSI(14), MACD(12/26/9), ADX(14), ATR(14), support/resistance and price-action rules.
- Backtest by pair and timeframe with realistic spread, payout, slippage and expiry assumptions.
- Add VAPID push subscription storage and server-side push delivery.
- Keep signal generation disabled until feed-to-Quotex quote validation and out-of-sample testing pass.
