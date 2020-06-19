import React from 'react'
import PropTypes from 'prop-types'

import Container from './styles'
import RestaurantIcon from '@material-ui/icons/Restaurant';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';

function SideBar ({ page, changePage }) {
  return (
    <Container page={page}>
      <li 
        className={page === 'Orders' ? 'active' : ''}
        onClick={() => changePage('Orders')} 
      >
       <RoomServiceIcon style={{ fontSize: 40 }} /><br/> Pedidos
      </li>
      <li
        className={page === 'Categories' ? 'active' : ''}
        onClick={() => changePage('Categories')} 
      >
        <MenuBookIcon style={{ fontSize: 40 }} /><br/>Categorias
      </li>
     
      <li
        className={page === 'Products' ? 'active' : ''}
        onClick={() => changePage('Products')}
      >
       <RestaurantIcon style={{ fontSize: 40 }} /><br/> Produtos
      </li>
	  <li
        className={page === 'Suspensos' ? 'active' : ''}
        onClick={() => changePage('Suspensos')}
      >
       <PauseCircleFilledIcon style={{ fontSize: 40 }} /><br/> Ativar/Suspender Produtos
      </li>
      <li
        className={page === 'Images' ? 'active' : ''}
        onClick={() => changePage('Images')}
      >
       <PhotoCameraIcon style={{ fontSize: 40 }} /><br/> Imagens
      </li>
    </Container>
  )
}

SideBar.propTypes = {
  page: PropTypes.string,
  changePage: PropTypes.func.isRequired
}

SideBar.defaultProps = {
  page: 'Orders'
}

export default SideBar
