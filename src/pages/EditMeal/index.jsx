import { useEffect, useState } from 'react';
import { FiUpload } from "react-icons/fi";
import { TbCurrencyReal } from "react-icons/tb";
import { useParams } from 'react-router-dom';

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


export function EditMeal() {
  const { updateMeal, meal } = useAuth();
  const params = useParams();

  const [mealTitle, setMealTitle] = useState('');

  const [selectedOption, setSelectedOption] = useState({});

  const [ingredientsList, setIngredientsList] = useState([]);

  const [mealPrice, setMealPrice] = useState(0);

  const [mealDescription, setMealDescription] = useState('');

  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  function handleChangeImage(e) {
    const file = e.target.files[0];
    setImageFile(file);

    const imagePreview = URL.createObjectURL(file);
    setImage(imagePreview)
  };

  async function handleUpdate() {

    const ingredientsListNames = ingredientsList.map(name => { return (name.name) })

    const meal = { id: params.id, title: mealTitle, ingredientsList: ingredientsListNames, price: mealPrice, description: mealDescription, category: selectedOption.value }
    await updateMeal({ meal, imageFile })
  };

  useEffect(() => {
    api.get(`/meals/${params.id}`).then(response => {
      setIngredientsList(response.data.ingredients)
      setMealPrice((response.data.price).toFixed(2))
      const imageUrl = `${api.defaults.baseURL}/files/${response.data.image}`;
      if (!response.data.image) {
        setImage(imagePlaceholder)
      } else {
        setImage(imageUrl)
      }

      function handleCategoryLabel() {
        if (response.data.category === "refeicao") {
          setSelectedOption({ value: "refeicao", label: "Refeição" })
        } else if (response.data.category === "sobremesa") {
          setSelectedOption({ value: "sobremesa", label: "Sobremesa" })
        } else if (response.data.category === "bebida") {
          setSelectedOption({ value: "bebida", label: "Bebida" })
        }
      }

      function handleTitleText() {
        const lowerCase = response.data.title.toLowerCase()
        const firstLetter = lowerCase.charAt(0).toUpperCase()
        const rest = lowerCase.slice(1)
        setMealTitle(firstLetter + rest)
      }

      function handleDescriptionText() {
        const lowerCase = response.data.description.toLowerCase()
        const firstLetter = lowerCase.charAt(0).toUpperCase()
        const rest = lowerCase.slice(1)
        setMealDescription(firstLetter + rest)
      }

      handleTitleText()
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
          {/* IMAGEM PARA TESTES RETIRAR DEPOIS */}
          <h1>Editar prato <img src={image} alt="" /></h1>
          <h1>Editar prato <img src={image} alt="" /></h1>

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
                onChange={handleChangeImage}
              />
            </div>

            <div className="name">
              <label htmlFor="title">Nome</label>
              <Input
                value={mealTitle}
                onChange={(e) => setMealTitle(e.target.value)}
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
              // onChange={() => console.log(selectedOption)}
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
                value={mealPrice} // lidar com os valores exemplo com toFixed e também com virgula
                onChange={(e) => setMealPrice(e.target.value)}
                placeholder={mealPrice}
                type="number"
                id="price"
                icon={TbCurrencyReal}
              />
            </div>
          </div>

          <label htmlFor="description">Descrição</label>
          <TextArea
            value={mealDescription}
            onChange={(e) => setMealDescription(e.target.value)}
            placeholder={mealDescription}
          />

          <div className='btns'>
            <Button title="Excluir prato" />
            <Button title="Salvar alterações" onClick={handleUpdate} />
          </div>

        </Form>
      </Content>

      <Footer />
    </Container>
  )
}