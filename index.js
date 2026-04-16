function currentTimeMs() {
  document.querySelector("[data-testid='test-user-time']").textContent =
    Date.now();
}
currentTimeMs();
setInterval(currentTimeMs, 1000);
