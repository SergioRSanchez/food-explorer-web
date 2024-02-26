import { useState } from 'react';
import { FiUpload } from "react-icons/fi";
import { TbCurrencyReal } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

import { Header } from '../../components/Header';
import { BackButton } from '../../components/BackButton';
import { Input } from '../../components/Input';
import { SelectInput } from '../../components/SelectInput';
import { MultiSelectInput } from '../../components/MultiSelectInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { Footer } from '../../components/Footer';

import imagePlaceholder from '../../assets/placeholder.jpg';

import { Container, Content, Form } from './styles';

export function NewMeal() {
  const { createMeal, meal } = useAuth();
  const navigate = useNavigate();


  const [mealTitle, setMealTitle] = useState('');

  const [selectedOption, setSelectedOption] = useState({});

  const [ingredientsList, setIngredientsList] = useState([]);

  const [mealPrice, setMealPrice] = useState('');

  const [mealDescription, setMealDescription] = useState('');

  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);


  const [ingredientToAdd, setIngredientToAdd] = useState('');

  function handleTitleText(e) {
    const lowerCase = e.target.value
    const firstLetter = lowerCase.charAt(0).toUpperCase()
    const rest = lowerCase.slice(1)
    setMealTitle(firstLetter + rest)
  }

  function handleDescriptionText(e) {
    const lowerCase = e.target.value
    const firstLetter = lowerCase.charAt(0).toUpperCase()
    const rest = lowerCase.slice(1)
    setMealDescription(firstLetter + rest)
  }

  async function handleCreate() {
    const ingredientsListNames = ingredientsList.map(name => { return (name.name) })

    const meal = { title: mealTitle, ingredients: ingredientsListNames, price: mealPrice, description: mealDescription, category: selectedOption.value }
    await createMeal({ meal })
    navigate('/')
    // console.log(meal)
  }

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
                value={mealTitle}
                onChange={handleTitleText}
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
                value={mealPrice}
                onChange={(e) => setMealPrice(Number(e.target.value))}
              />
            </div>
          </div>

          <label htmlFor="description">Descrição</label>
          <TextArea
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            value={mealDescription}
            onChange={handleDescriptionText}
          />

          <Button
            title="Salvar alterações"
            onClick={handleCreate}
            disabled={mealTitle === '' || mealPrice === '' || mealDescription === '' || selectedOption === {} || ingredientsList === []}
          />

        </Form>
      </Content>

      <Footer />
    </Container>
  )
}