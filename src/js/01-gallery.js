import "./init.js"

import { images } from "../data/images"

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector(".gallery");

gallery.innerHTML = images.map(({ preview, original, description }, index) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${original}">
            <img class="gallery-image" src="${preview}" data-source="${original}" data-index="${index}" alt="${description}" />
        </a>
    </li>
`).join("");

new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
});
