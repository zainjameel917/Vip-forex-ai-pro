const symbols = ["EUR/USD","EUR/JPY","GBP/USD","GBP/JPY","USD/JPY","AUD/USD","USD/CAD","EUR/GBP"];
const pairs = document.getElementById("pairs");
symbols.forEach(s => {
  const el = document.createElement("div");
  el.className = "pair";
  el.innerHTML = `<b>${s}</b><small>Real FX · <span class="waiting">Waiting for verified feed</span></small>`;
  pairs.appendChild(el);
});
if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("/sw.js").catch(() => {});
}
document.getElementById("notify").addEventListener("click", async () => {
  if (!("Notification" in window)) { alert("Notifications are not supported in this browser."); return; }
  const permission = await Notification.requestPermission();
  alert(permission === "granted"
    ? "Permission granted. Server push is not configured yet; this app cannot send remote alerts until hosting and a push server are connected."
    : "Notification permission was not granted.");
});
document.getElementById("test").addEventListener("click", async () => {
  if (!("Notification" in window)) { alert("Notifications are not supported."); return; }
  if (Notification.permission !== "granted") { alert("First enable notifications. On iPhone, add this website to Home Screen and open it as an app."); return; }
  if ("serviceWorker" in navigator) {
    const reg = await navigator.serviceWorker.ready;
    await reg.showNotification("VIP Forex AI Pro", { body: "Test alert only. No live trading signal.", icon: "/icon.svg" });
  } else {
    new Notification("VIP Forex AI Pro", { body: "Test alert only. No live trading signal." });
  }
});
