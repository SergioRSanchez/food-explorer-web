import { useState } from 'react';
import { FiUpload } from "react-icons/fi";

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

          <label htmlFor="name">Nome</label>
          <Input
            placeholder="Ex.: Salada Ceasar"
            type="text"
            id="name"
          />


          <label htmlFor="category">Categoria</label>
          <SelectInput
            id="category"
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />

          <label htmlFor="ingredients">Ingredientes</label>
          <MultiSelectInput
            id="ingredients"
          />

        </Form>
      </Content>
    </Container>
  )
}