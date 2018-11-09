-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Nov 09, 2018 at 02:10 AM
-- Server version: 5.6.42
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pacificpoke`
--

--
-- Dumping data for table `PokemonEvolvesTo`
--

INSERT INTO `PokemonEvolvesTo` (`EvolveToPID`, `EvolveFromPID`, `AtLevel`) VALUES
(2, 1, 16),
(3, 2, 32),
(5, 4, 16),
(6, 5, 36),
(8, 7, 16),
(9, 8, 36),
(11, 10, 7),
(12, 11, 10),
(14, 13, 7),
(15, 14, 10),
(17, 16, 18),
(18, 17, 36),
(20, 19, 20),
(22, 21, 20),
(24, 23, 22),
(26, 25, NULL),
(28, 27, 22),
(30, 29, 16),
(31, 30, NULL),
(33, 32, 16),
(34, 33, NULL),
(36, 35, NULL),
(38, 37, NULL),
(40, 39, NULL),
(42, 41, 22),
(44, 43, 21),
(45, 44, NULL),
(47, 46, 24),
(49, 48, 31),
(51, 50, 26),
(53, 52, 28),
(55, 54, 33),
(57, 56, 28),
(59, 58, NULL),
(61, 60, 25),
(62, 61, NULL),
(64, 63, 16),
(65, 64, NULL),
(67, 66, 28),
(68, 67, NULL),
(70, 69, 21),
(71, 70, NULL),
(73, 72, 30),
(75, 74, 25),
(76, 75, NULL),
(78, 77, 40),
(80, 79, 37),
(82, 81, 30),
(85, 84, 31),
(87, 86, 34),
(89, 88, 38),
(91, 90, NULL),
(93, 92, 25),
(94, 93, NULL),
(97, 96, 26),
(99, 98, 28),
(101, 100, 30),
(103, 102, NULL),
(105, 104, 28),
(110, 109, 35),
(112, 111, 42),
(117, 116, 32),
(119, 118, 33),
(121, 120, NULL),
(130, 129, 20),
(134, 133, NULL),
(135, 133, NULL),
(136, 133, NULL),
(139, 138, 40),
(141, 140, 40),
(148, 147, 30),
(149, 148, 55);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
