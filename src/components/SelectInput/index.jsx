import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Select from 'react-select'


import { Container } from './styles';

export function SelectInput({ selectedOption, setSelectedOption }) {
  const options = [
    { value: 'refeicao', label: 'Refeição' },
    { value: 'sobremesa', label: 'Sobremesa' },
    { value: 'bebida', label: 'Bebida' }
  ]

  return (
    <Container>
      <Select
        options={options}
        value={selectedOption}
        onChange={setSelectedOption}
        classNamePrefix="react-select"
        isSearchable
        styles={{
          control: (provided) => ({
            ...provided,
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            boxShadow: 'none',
            borderRadius: '8px',
            height: '48px',
            padding: '0 4px',
            cursor: 'pointer',
            '&:hover': {
              borderColor: 'transparent'
            }
          }),
        }}
      />

    </Container>
  )
}