/* правка Юли 14.11: низ главного фото = низ формы. Если текст слева выше формы – уменьшаем заголовок (до 60 %). */
(() => {
  const hero = document.querySelector(".s-hero"), text = document.querySelector(".s-hero__text"),
        photo = document.querySelector(".s-hero__photo"), widget = document.querySelector(".s-hero__widget");
  if (!hero || !text || !photo || !widget) return;
  const MIN_PHOTO = 200 + 22;
  const fit = () => {
    let k = 1; hero.style.setProperty("--h1k", k);
    if (innerWidth < 861) return;
    const need = () => {
      const last = [...text.children].filter((el) => el !== photo).pop();
      return last.getBoundingClientRect().bottom - text.getBoundingClientRect().top + MIN_PHOTO;
    };
    while (k > 0.6 && need() > widget.getBoundingClientRect().height) { k = +(k - 0.04).toFixed(2); hero.style.setProperty("--h1k", k); }
  };
  addEventListener("load", fit); addEventListener("resize", fit); document.fonts && document.fonts.ready.then(fit); fit();
})();
