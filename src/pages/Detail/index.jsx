import { useEffect, useState } from 'react';
import { FiChevronLeft } from "react-icons/fi";

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { Dish } from '../../components/Dish';
import { BackButton } from '../../components/BackButton';

import imagePlaceholder from '../../assets/placeholder.jpg';

import { Container, Content } from './styles';

export function Detail() {
  const [openMenu, setOpenMenu] = useState(false);

  const [image, setImage] = useState(null);

  const [mealTitle, setMealTitle] = useState('');

  const [ingredientsList, setIngredientsList] = useState([]);

  const [mealPrice, setMealPrice] = useState(0);

  const [mealDescription, setMealDescription] = useState('');

  const [quantity, setQuantity] = useState(1);

  const [totalPrice, setTotalPrice] = useState(0);

  function increaseQuantity() {
    setQuantity(quantity + 1)
  }

  function decreaseQuantity() {
    setQuantity(quantity - 1)
  }

  function handleOpenMenu() {
    setOpenMenu(!openMenu)
  }

  useEffect(() => {


    setTotalPrice((mealPrice * quantity).toFixed(2))
  }, [quantity]);

  useEffect(() => {
    api.get("/meals/3").then(response => {
      setIngredientsList(response.data.ingredients)
      setMealPrice(response.data.price.toFixed(2))
      const imageUrl = `${api.defaults.baseURL}/files/${response.data.image}`;
      if (!response.data.image) {
        setImage(imagePlaceholder)
      } else {
        setImage(imageUrl)
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
      {!openMenu
        ?
        <>
          <Header onClickHandleMenu={handleOpenMenu} />

          <Content>
            <BackButton to="/" />

            <Dish
              title={mealTitle}
              description={mealDescription}
              ingredientsList={ingredientsList}
              price={mealPrice}
              totalPrice={totalPrice}
              quantity={quantity}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              image={image}
            />
          </Content>


          <Footer />
        </>

        : <Menu onClickHandleMenu={handleOpenMenu} />
      }
    </Container>
  )
}