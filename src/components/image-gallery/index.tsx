import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface Images {
  url: string;
}
const GalleryPreview = ({ images }: { images: Images[] }) => {
  const newImages = images.map((image: Images) => ({
    original: image.url,
    thumbnail: image.url,
  }));

  console.log(newImages);
  console.log(images);
  return (
    <div>
      <ImageGallery
        showPlayButton={false}
        items={newImages}
        thumbnailPosition={"left"}
      ></ImageGallery>
    </div>
  );
};

export default GalleryPreview;
