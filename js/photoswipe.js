import PhotoSwipeLightbox from "./photoswipe-lightbox.esm.min.js";
const lightboxPhoto = new PhotoSwipeLightbox({
  gallerySelector: "main.homepage > div.divider.photo > div > a",
  showAnimationDuration: 666,
  imageClickAction: "close",
  bgOpacity: "0.9",
  pswpModule: "./photoswipe.esm.min.js",
  pswpCSS: "./photoswipe.min.css",
});
const lightboxRewards = new PhotoSwipeLightbox({
  gallerySelector:
    "main.homepage > section.volume > div.descriptions, main.detail > section.files",
  childSelector: "a",
  showAnimationDuration: 666,
  imageClickAction: "next",
  bgOpacity: "0.9",
  pswpModule: "./photoswipe.esm.min.js",
  pswpCSS: "./photoswipe.min.css",
});
const lightboxPhotos = new PhotoSwipeLightbox({
  gallerySelector:
    "main.homepage > section.volume > ul, main.detail > section.photos > ul",
  childSelector: "a",
  showHideAnimationType: "fade",
  showAnimationDuration: 666,
  imageClickAction: "next",
  bgOpacity: "0.9",
  loop: false,
  pswpModule: "./photoswipe.esm.min.js",
  pswpCSS: "./photoswipe.min.css",
});
lightboxPhoto.init();
lightboxRewards.init();
lightboxPhotos.on("close", () => {
  if (
    lightboxPhotos.pswp.currItemData.element.offsetTop >
    window.pageYOffset + window.innerHeight
  )
    goTo(
      lightboxPhotos.pswp.currItemData.element.offsetTop -
        document.querySelector("header").scrollHeight -
        parseFloat(getComputedStyle(document.documentElement).fontSize) * 1
    );
});
lightboxPhotos.init();
