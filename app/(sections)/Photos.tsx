"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PhotoAlbum, { Photo } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { Great_Vibes } from "next/font/google";

import { fadeInVariant } from "../page";

import "react-photo-album/masonry.css";
import "yet-another-react-lightbox/styles.css";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

type GalleryPhoto = Photo & {
  original: string;
};

const originals = [
  // { id: "photo1_rtwnb5", version: "v1781449357" },
  // { id: "photo2_rysihp", version: "v1783181397" },
  { id: "photo3_tcwm8w", version: "v1783181629" },
  // { id: "photo4_hdyumg", version: "v1783181697" },
  { id: "photo5_wofds0", version: "v1783181690" },
  // { id: "photo6_zzxsxw", version: "v1781449753" },
  // { id: "photo7_crya75", version: "v1783182879" },
  // { id: "photo8_i7k7o8", version: "v1783183017" },
  { id: "photo9_qnrghz", version: "v1783183115" },
  { id: "photo10_qjujm5", version: "v1783183508" },
  // { id: "photo11_jqn5g0", version: "v1783183655" },
  { id: "photo12_ejysc1", version: "v1783183776" },
  { id: "photo13_qnc8us", version: "v1783183912" },
  // { id: "photo14_tgitpk", version: "v1783183978" },
  { id: "photo15_mbkqcs", version: "v1783183981" },
  { id: "photo16_dlkd2q", version: "v1783183980" },
];

const aspectRatios = [
  { width: 1, height: 1, crop: "ar_1:1" },
  { width: 4, height: 5, crop: "ar_4:5" },
  { width: 3, height: 4, crop: "ar_3:4" },
  { width: 2, height: 3, crop: "ar_2:3" },
  { width: 9, height: 16, crop: "ar_9:16" },
];

const pattern = [0, 3, 1, 4, 2, 1, 3, 0, 4, 2, 0, 1, 4, 3, 2, 0];

const photos: GalleryPhoto[] = originals.map((image, index) => {
  const ratio = aspectRatios[pattern[index]];

  return {
    src: `https://res.cloudinary.com/dvqe9mwrs/image/upload/c_fill,g_auto,${ratio.crop},w_800,f_auto,q_auto/${image.version}/${image.id}.webp`,
    original: `https://res.cloudinary.com/dvqe9mwrs/image/upload/f_auto,q_auto,w_1920/${image.version}/${image.id}.webp`,
    width: ratio.width,
    height: ratio.height,
  };
});

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const Photos = () => {
  const [index, setIndex] = useState(-1);

  return (
    <section className="px-6 py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeInVariant}
        className="mx-auto mb-20 max-w-3xl text-center"
      >
        <motion.div variants={containerVariant}>
          <motion.span
            variants={itemVariant}
            className="block text-[10px] md:text-xs uppercase tracking-[0.4em] text-army-400 font-medium"
          >
            OUR GALLERY
          </motion.span>

          <motion.h2
            variants={itemVariant}
            className={`${greatVibes.className} mt-5 text-5xl md:text-6xl lg:text-7xl text-army-950`}
          >
            A Glimpse of Us
          </motion.h2>

          <motion.div
            variants={itemVariant}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <div className="h-px w-20 bg-army-300" />
            <div className="h-2 w-2 rounded-full bg-army-400" />
            <div className="h-px w-20 bg-army-300" />
          </motion.div>

          <motion.p
            variants={itemVariant}
            className="mx-auto mt-8 max-w-xl text-[10px] md:text-xs uppercase tracking-[0.3em] leading-7 text-army-400"
          >
            Moments captured with love, laughter, and the promise of forever.
          </motion.p>
        </motion.div>
      </motion.div>

      <PhotoAlbum
        layout="masonry"
        photos={photos}
        columns={(containerWidth) => {
          if (containerWidth < 640) return 2;
          if (containerWidth < 1024) return 3;
          return 5;
        }}
        spacing={8}
        padding={0}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={photos.map((photo) => ({
          src: photo.original,
        }))}
      />
    </section>
  );
};