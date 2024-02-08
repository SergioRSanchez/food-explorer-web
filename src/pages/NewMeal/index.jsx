import { useState } from 'react';
import { FiUpload } from "react-icons/fi";
import { TbCurrencyReal } from "react-icons/tb";

import { Header } from '../../components/Header';
import { BackButton } from '../../components/BackButton';
import { Input } from '../../components/Input';
import { SelectInput } from '../../components/SelectInput';
import { MultiSelectInput } from '../../components/MultiSelectInput';

import { Container, Content, Form } from './styles';

export function NewMeal() {
  const [openSelect, setOpenSelect] = useState(false);

  function handleSelectValues() {
    setOpenSelect(!openSelect)
  }

  const [selectedOption, setSelectedOption] = useState(null);

  const [ingredientsList, setIngredientsList] = useState([
    { id: 1, title: 'Pão Naan' },
    { id: 2, title: 'Gergelim' }
  ]);

  const [ingredientToAdd, setIngredientToAdd] = useState('');

  return (
    <Container>
      <Header />

      <Content>
        <BackButton />

        <Form>
          <h1>Novo prato</h1>

          <label htmlFor="image">Imagem do prato</label>
          <label htmlFor="image"><FiUpload /> Selecione imagem</label>
          <Input
            placeholder="Selecione imagem do prato"
            type="file"
            id="image"
            accept="image/*"
          />

          <label htmlFor="title">Nome</label>
          <Input
            placeholder="Ex.: Salada Ceasar"
            type="text"
            id="title"
          />


          <label htmlFor="category">Categoria</label>
          <SelectInput
            id="category"
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />

          <label htmlFor="ingredients">Ingredientes</label>
          <MultiSelectInput
            ingredients={ingredientsList}
            setIngredientsList={setIngredientsList}
          />

          <label htmlFor="price">Preço</label>
          <Input
            placeholder="00,00"
            type="number"
            id="price"
            icon={TbCurrencyReal}
          />

        </Form>
      </Content>
    </Container>
  )
}