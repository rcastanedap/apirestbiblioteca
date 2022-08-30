-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-08-2022 a las 17:59:21
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `apirestrubi`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `descripcion` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `editorial` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `autor` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fecha` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `genero` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tracks`
--

CREATE TABLE `tracks` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `descripcion` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `duracion` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `autor` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `fecha` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `genero` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `tracks`
--

INSERT INTO `tracks` (`id`, `nombre`, `descripcion`, `duracion`, `autor`, `fecha`, `genero`) VALUES
(1, 'Nazis', 'En 1945 despues de la segunda guerra mundia', '1 hora', 'Nicola ', '12-12-12', 'Historia');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `apellido` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `genero` varchar(10) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `password` varchar(500) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `telefono` varchar(200) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `genero`, `email`, `password`, `telefono`) VALUES
(2, 'hola ', 'hola', 'hola', 'hola@gmail.com', '$2b$10$uy9mOz226XtHmVHHpYqeruLDQc3D1OncQfFIJ9VcaIMxY3EDoKZR6', 'hola'),
(7, 'Rubi Ismari ', 'Castañeda', 'Femenino', 'programacion@gmail.com', '$2b$10$8ZIPB.7Azyp4cM39u782geNHprUsRtvJJgiVsHv5VI9c/y7U/vw0G', '30264110'),
(9, 'Rubi Ismari ', 'Castañeda', 'Femenino', 'holassss@gmail.com', '$2b$10$pdbgxAnkILstTPswRAyypuhrDRAytnKowjYVY7VYXncFzLHhdYv62', '30264110'),
(10, 'Rubi Ismari ', 'Castañeda', 'Femenino', 'holassssss@gmail.com', '$2b$10$C88ky29GZN4zYWbsYH.ZAOjYgkgVI/QoC9ql2ejuT2jy5wskrYobK', '30264110');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tracks`
--
ALTER TABLE `tracks`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `tracks`
--
ALTER TABLE `tracks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
