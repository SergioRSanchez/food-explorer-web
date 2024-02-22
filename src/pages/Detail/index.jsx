import { useEffect, useState } from 'react';
import { FiChevronLeft } from "react-icons/fi";

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Menu } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { Dish } from '../../components/Dish';
import { BackButton } from '../../components/BackButton';

import { Container, Content } from './styles';

export function Detail() {
  const [openMenu, setOpenMenu] = useState(false);

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
    api.get("/meals/1").then(response => {
      setMealTitle(response.data.title)
      setIngredientsList(response.data.ingredients)
      setMealPrice(response.data.price.toFixed(2))

      function handleDescriptionText() {
        const lowerCase = response.data.description.toLowerCase()
        const firstLetter = lowerCase.charAt(0).toUpperCase()
        const rest = lowerCase.slice(1)
        setMealDescription(firstLetter + rest)
      }

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
            />
          </Content>


          <Footer />
        </>

        : <Menu onClickHandleMenu={handleOpenMenu} />
      }
    </Container>
  )
}