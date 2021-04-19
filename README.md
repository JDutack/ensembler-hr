# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



<!-- guardo data
HEADER STYLES
import styled from 'styled-components';

export const HeaderAll = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  height: 110px;
  @media (max-width: 790px) {
    height: 85px;
  }
  @media (max-width: 650px) {
    height: 60px;
  }
`;
export const HeaderImg = styled.img`
  width: 86px;
  height: 86px;
  transition-duration: 1.5s;
  &:hover {
    -webkit-filter: blur(100px);
    filter: blur(100px);
  }
  @media (max-width: 790px) {
    width: 66px;
    height: 66px;
  }
  @media (max-width: 650px) {
    width: 46px;
    height: 46px;
  }
`;

export const Navegacion = styled.nav`
  display: flex;
  flex-direction: row;
`;

export const HeaderLink = styled.div`
  border-radius: 50px;
  font-family: 'Rubik', sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  padding: 14px 40px;
  transition: background-color 1.3s, font-weight 1s;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    background-color: var(--headerHover);
    font-weight: 500;
  }
  @media (max-width: 970px) {
    font-size: 12px;
    padding: 6px 20px;
  }
  @media (max-width: 650px) {
    font-size: 8px;
    padding: 0 10px;
  }
`;
export const ImageLink = styled.div`
  /* margin: 1px; */
  padding: 10px 20px;
  height: min-content;

  &:hover {
  }

  @media (max-width: 865px) {
  }
  @media (max-width: 650px) {
  }
`;

HEADER COMP
import React from 'react';

import { Link, NavLink } from 'react-router-dom';
import icoImg from '../assets/ofkkbMI.png';
import {
  HeaderAll,
  HeaderImg,
  Navegacion,
  HeaderLink,
  ImageLink,
} from '../styles/componentStyles/HeaderStyles';

const Header = () => {
  return (
    <HeaderAll>
      <ImageLink>
        <Link to="/">
          <HeaderImg src={icoImg} alt="isologotipo" />
        </Link>
      </ImageLink>
      <Navegacion>
        <HeaderLink>
          <NavLink
            style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
            to="/"
            activeStyle={{
              backgroundColor: 'var(--headerHover)',
              fontWeight: '500',
              borderRadius: '50px',
              padding: '14px 40px',
            }}
          >
            Home
          </NavLink>
        </HeaderLink>
        <HeaderLink>
          <NavLink
            style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
            to="/quienessomos"
            activeStyle={{
              backgroundColor: 'var(--headerHover)',
              fontWeight: '500',
              borderRadius: '50px',
              padding: '14px 40px',
            }}
          >
            Nosotros
          </NavLink>
        </HeaderLink>
        <HeaderLink>
          <NavLink
            style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
            to="/capacitaciones"
            activeStyle={{
              backgroundColor: 'var(--headerHover)',
              fontWeight: '500',
              borderRadius: '50px',
              padding: '14px 40px',
            }}
          >
            Capacitaciones
          </NavLink>
        </HeaderLink>
        <HeaderLink>
          <NavLink
            style={{ textDecoration: 'none', color: ' var(--headerLink)' }}
            to="/contacto"
            activeStyle={{
              backgroundColor: 'var(--headerHover)',
              fontWeight: '500',
              borderRadius: '50px',
              padding: '14px 40px',
            }}
          >
            Contacto
          </NavLink>
        </HeaderLink>
      </Navegacion>
    </HeaderAll>
  );
};

export default Header;


















 -->