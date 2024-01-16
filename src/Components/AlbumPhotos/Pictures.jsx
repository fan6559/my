import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import aze from "../Images/aze.jpg";
import cde from "../Images/cde.jpg";
import efr from "../Images/efr.jpg";
import ert from "../Images/ert.jpg";
import ght from "../Images/ght.jpg";
import ijk from "../Images/ijk.jpg";
import nop from "../Images/nop.jpg";
import tuv from "../Images/tuv.jpg";
import oiu from "../Images/oiu.jpg";
import zaf from "../Images/zaf.jpg";
import aic from "../Images/aic.jpg";
import fgh from "../Images/fgh.jpg";
import mlh from "../Images/mlh.jpg";

const photos = [
  { id: "aze", src: aze, width: 1080, height: 1620, key: "uniqueKey1" },
  { id: "cde", src: cde, width: 1080, height: 1620, key: "uniqueKey2" },
  { id: "efr", src: efr, width: 1080, height: 1620, key: "uniqueKey3" },
  { id: "ert", src: ert, width: 1080, height: 700, key: "uniqueKey4" }, 
  { id: "ght", src: ght, width: 1080, height: 700, key: "uniqueKey5" },
  { id: "ijk", src: ijk, width: 1080, height: 1620, key: "uniqueKey6"},
  { id: "nop", src: nop, width: 1080, height: 1620, key: "uniqueKey7"},
  { id: "oiu", src: oiu, width: 1080, height: 800, key: "uniqueKey8"}, 
  { id: "tuv", src: tuv, width: 1080, height: 1620, key: "uniqueKey8"},
  { id: "zaf", src: zaf, width: 1080, height: 1620, key: "uniqueKey8"},
  { id: "aic", src: aic, width: 1080, height: 1620, key: "uniqueKey8"},
  { id: "fgh", src: fgh, width: 1080, height: 800, key: "uniqueKey8"},
  { id: "mlh", src: mlh, width: 1080, height: 1620, key: "uniqueKey8"},

];

const slides = photos.map(({ src, width, height }) => ({ src, width, height }));

export default function Pictures() {
  const [index, setIndex] = useState(-1);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleClick = (item) => {
    if (item && item.index !== undefined) {
      const { index } = item;
      setIndex(index);
      setLightboxOpen(true);
    }
  };

  return (
    <div id="'pictures">
      <PhotoAlbum layout="columns" photos={photos} onClick={handleClick} />
      <Lightbox
        slides={slides}
        open={lightboxOpen}
        index={index}
        close={() => setLightboxOpen(false)}
      />
    </div>
  );
}


