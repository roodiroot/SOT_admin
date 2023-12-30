import { ImageField, ImageInput } from "react-admin";

const ImagesTub = () => {
  return (
    <ImageInput
      multiple
      source='img'
      accept='image/*'
      label='Загрузите до 5ти изображений'
    >
      <ImageField source='src' title='title' />
    </ImageInput>
  );
};

export default ImagesTub;
