import {
  ArrayInput,
  NumberInput,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

const LeashPricesTub = () => {
  return (
    <ArrayInput source='size_2' label='Цены'>
      <SimpleFormIterator inline>
        <TextInput source='length' label='Длина' helperText={false} />
        <NumberInput source='price' label='Цена' helperText={false} />
      </SimpleFormIterator>
    </ArrayInput>
  );
};

export default LeashPricesTub;
