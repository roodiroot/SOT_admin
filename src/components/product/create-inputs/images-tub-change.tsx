import { FileField, ImageInput } from "react-admin";

const ImagesTubEdit = () => {
  function formatLogo(value: any) {
    if (!value || typeof value === "string") {
      return { url: value };
    } else {
      return { url: "Изображения загружены" };
    }
  }
  return (
    <ImageInput
      format={formatLogo}
      multiple
      source='img'
      accept='image/*'
      label='Related pictures'
    >
      <FileField source='url' />
    </ImageInput>
  );
};

export default ImagesTubEdit;
