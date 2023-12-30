import {
  ArrayInput,
  NumberInput,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

const CollarPricesTub = () => {
  return (
    <ArrayInput source='size' label='Цены'>
      <SimpleFormIterator inline>
        <TextInput source='sizeMm' label='Ширина' helperText={false} />
        <NumberInput
          source='fastex_standard_price'
          label='Фастекс стандартный (застежка пластик)'
          helperText={false}
        />
        <NumberInput
          source='fastex_reinforced_price'
          label='Фастекс усиленный 2-мя полукольцами'
          helperText={false}
        />
        <NumberInput source='slip_price' label='Слип' helperText={false} />
        <NumberInput
          source='martingale_price'
          label='Мартингейл'
          helperText={false}
        />
      </SimpleFormIterator>
    </ArrayInput>
  );
};

export default CollarPricesTub;
