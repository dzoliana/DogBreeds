//components/details/BreedDetail.js
import classes from "./BreedDetail.module.css";
import { useEffect } from "react";
import { useDogContext } from "@/contexts/DogContext";
import { useRouter } from "next/router";

function BreedDetail(props) {
  const { selectedImage, setSelectedImage } = useDogContext();
  const router = useRouter();
  const { breed } = router.query;

  useEffect(() => {
    if (localStorage.getItem("selectedImage") != null)
      setSelectedImage(parseInt(localStorage.getItem("selectedImage"), 10));
  }, []);

  useEffect(() => {
    if (selectedImage != null) {
      localStorage.setItem("selectedImage", selectedImage);
    }
  }, [selectedImage]);

  function selectImageHandler(index) {
    if (selectedImage === index) {
      setSelectedImage(null);
      localStorage.removeItem("selectedImage");
    } else {
      setSelectedImage(index);
      localStorage.setItem("selectedImage", selectedImage);
    }
  }

  return (
    <div className={classes.breedDetail}>
      <h2>{breed} images</h2>
      <div className={classes.imageGrid}>
        {props.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${props.breed} ${index}`}
            className={`${
              selectedImage === index ? classes.selected : classes.image
            }`}
            style={
              selectedImage === index ? { border: "2px solid #d2893b" } : null
            }
            onClick={() => selectImageHandler(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default BreedDetail;
