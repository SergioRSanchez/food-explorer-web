import { useEffect, useState } from 'react';
import { FiUpload } from "react-icons/fi";
import { TbCurrencyReal } from "react-icons/tb";
import { Link } from 'react-router-dom';

import { api } from '../../services/api';

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

  const [mealTitle, setMealTitle] = useState('');

  const [selectedOption, setSelectedOption] = useState({});

  const [ingredientsList, setIngredientsList] = useState([]);

  const [ingredientToAdd, setIngredientToAdd] = useState('');

  const [mealPrice, setMealPrice] = useState(0);

  const [mealDescription, setMealDescription] = useState('')

  useEffect(() => {
    api.get("/meals/1").then(response => {
      setMealTitle(response.data.title)
      setIngredientsList(response.data.ingredients)
      setMealPrice(response.data.price)

      function handleCategoryLabel() {
        if (response.data.category === "refeicao") {
          setSelectedOption({ value: "refeicao", label: "Refeição" })
        } else if (response.data.category === "sobremesa") {
          setSelectedOption({ value: "sobremesa", label: "Sobremesa" })
        } else if (response.data.category === "bebida") {
          setSelectedOption({ value: "bebida", label: "Bebida" })
        }
      }

      function handleDescriptionText() {
        const lowerCase = response.data.description.toLowerCase()
        const firstLetter = lowerCase.charAt(0).toUpperCase()
        const rest = lowerCase.slice(1)
        setMealDescription(firstLetter + rest)
      }

      handleCategoryLabel()
      handleDescriptionText()

    }).catch(error => {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('An unexpected error occurred. Please try again later.');
      }
    })
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <BackButton to="/" />

        <Form>
          <h1>Editar prato</h1>
          <h1>Editar prato</h1>

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