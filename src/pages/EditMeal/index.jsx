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

export function EditMeal() {
  const [mealTitle, setMealTitle] = useState('Salada Ceasar');

  const [selectedOption, setSelectedOption] = useState({ value: 'refeicao', label: 'Refeição' });

  const [ingredientsList, setIngredientsList] = useState([
    { id: 1, title: 'Pão Naan' },
    { id: 2, title: 'Gergelim' }
  ]);

  const [ingredientToAdd, setIngredientToAdd] = useState('');

  const [mealPrice, setMealPrice] = useState(40.00);

  const [mealDescription, setMealDescription] = useState('A Salada César é uma opção refrescante para o verão.')

  return (
    <Container>
      <Header />

      <Content>
        <BackButton />

        <Form>
          <h1>Editar prato</h1>
          <h1>Adicionar prato</h1>

          <div>
            <div className="image">
              <label htmlFor="image">Imagem do prato</label>
              <label htmlFor="image"><FiUpload /> Selecione imagem para alterá-la</label>
              <label htmlFor="image"><FiUpload /> Selecione imagem</label>
              <Input
                placeholder="Selecione nova imagem do prato"
                type="file"
                id="image"
                accept="image/*"
              />
            </div>

            <div className="name">
              <label htmlFor="title">Nome</label>
              <Input
                value={mealTitle}
                placeholder={mealTitle}
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
                value={mealPrice.toFixed(2)}
                placeholder={mealPrice.toFixed(2)}
                type="number"
                id="price"
                icon={TbCurrencyReal}
              />
            </div>
          </div>

          <label htmlFor="description">Descrição</label>
          <TextArea
            value={mealDescription}
            placeholder={mealDescription}
          />

          <div className='btns'>
            <Button title="Excluir prato" />
            <Button title="Salvar alterações" disabled />
          </div>

        </Form>
      </Content>

      <Footer />
    </Container>
  )
}