import { useState } from 'react';
import { FiUpload } from "react-icons/fi";
import { TbCurrencyReal } from "react-icons/tb";

import { Header } from '../../components/Header';
import { BackButton } from '../../components/BackButton';
import { Input } from '../../components/Input';
import { SelectInput } from '../../components/SelectInput';
import { MultiSelectInput } from '../../components/MultiSelectInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

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
          <h1>Adicionar prato</h1>

          <div>
            <div className="image">
              <label htmlFor="image">Imagem do prato</label>
              <label htmlFor="image"><FiUpload /> Selecione imagem</label>
              <Input
                placeholder="Selecione imagem do prato"
                type="file"
                id="image"
                accept="image/*"
              />
            </div>

            <div className="name">
              <label htmlFor="title">Nome</label>
              <Input
                placeholder="Ex.: Salada Ceasar"
                type="text"
                id="title"
              />
            </div>

            <div className="category">
              <label htmlFor="category">Categoria</label>
              <SelectInput
                id="category"
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            </div>
          </div>

          <div>
            <div className="ingredients">
              <label htmlFor="ingredients">Ingredientes</label>
              <MultiSelectInput
                ingredients={ingredientsList}
                setIngredientsList={setIngredientsList}
              />
            </div>

            <div className="price">
              <label htmlFor="price">Preço</label>
              <Input
                placeholder="00,00"
                type="number"
                id="price"
                icon={TbCurrencyReal}
              />
            </div>
          </div>

          <label htmlFor="description">Descrição</label>
          <TextArea
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          />

          <Button title="Salvar alterações" disabled />

        </Form>
      </Content>

      <Footer />
    </Container>
  )
}