import {
  ArrayInput,
  NumberInput,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

const HarnessPricesTub = () => {
  return (
    <ArrayInput source='size_3' label='Цены'>
      <SimpleFormIterator inline>
        <TextInput source='size' label='Размер' helperText={false} />
        <TextInput
          source='description_size'
          label='Описание'
          helperText={false}
        />
        <NumberInput source='price' label='Цена' helperText={false} />
      </SimpleFormIterator>
    </ArrayInput>
  );
};

export default HarnessPricesTub;
