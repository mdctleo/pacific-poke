-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Nov 08, 2018 at 03:16 AM
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
-- Dumping data for table `Items`
--

INSERT INTO `Items` (`IID`, `ItemName`, `Effect`, `Cost`) VALUES
(1, 'Master Ball', 'Captures any Pokemon (only one exists)', NULL),
(2, 'Ultra Ball', 'Capture highNULLlevel Pokemon', 1200),
(3, 'Great Ball', 'Capture medium level Pokemon', 600),
(4, 'Poke Ball', 'Capture lowNULLlevel Pokemon', 200),
(5, 'Town Map', 'Map of the island. Shows your location', NULL),
(6, 'Bicycle', 'Travel at double speed', 0),
(8, 'Safari Ball', 'Capture Pokemon in Safari Zone', NULL),
(10, 'Moon Stone', 'Used to evolve Nidorino, Nidorina, Clefairy and Jigglypuff', NULL),
(11, 'Antidote', 'Cure Poison status', 100),
(12, 'Burn Heal', 'Cure Burn status', 250),
(13, 'Ice Heal', 'Cures Frozen status', 250),
(14, 'Awakening', 'Cure Sleep status', 200),
(15, 'Paralyze Heal', 'Cure Paralyze status', 200),
(16, 'Full Restore', 'Cures all status changes and restores all HP', 3000),
(17, 'Max Potion', 'Recover all HP', 2500),
(18, 'Hyper Potion', 'Recover 200 HP', 1500),
(19, 'Super Potion', 'Recovers 70 HP', 700),
(20, 'Potion', 'Recover 20 HP', 300),
(29, 'Escape Rope', 'Teleport to last visited Pokemon Center', 550),
(30, 'Repel', 'Protect from weak wild Pokemon ambush for 100 steps', 350),
(31, 'Old Amber', 'Used for cloning Aerodactyl in Cinnabar Island lab', NULL),
(32, 'Fire Stone', 'Use to evolve Growlithe, Vulpix and Eevee', 2100),
(33, 'Thunder Stone', 'Used to evolve Pikachu and Eevee', 2100),
(34, 'Water Stone', 'Used to evolve Poliwhirl, Shellder, Staryu and Eeve', 2100),
(35, 'HP Up', 'Boosts HP Max', 9800),
(36, 'Protein', 'Boosts Attack stat', 9800),
(37, 'Iron', 'Boosts Defense stat', 9800),
(38, 'Carbos', 'Boost Speed stat', 9800),
(39, 'Calcium', 'Boost Special stat', 9800),
(40, 'Rare Candy', 'Instant level gain', NULL),
(41, 'Dome Fossil', 'Used for cloning Kabuto in Cinnabar Island Lab', NULL),
(42, 'Helix Fossil', 'Used for cloning Omanyte in Cinnabar Island Lab', NULL),
(43, 'Secret Key', 'Unlocks Cinnabar Island Gym', NULL),
(45, 'Bike Voucher', 'Redeem at Cerulean Bike Shop for free bike', NULL),
(46, 'X Accuracy', 'Temporarily raise Accuracy in battle', 950),
(47, 'Leaf Stone', 'Used to evolve Gloom, Weepinbell and Exeggcute', 2100),
(48, 'Card Key', 'Unlock Silph Co. doors', NULL),
(49, 'Nugget', 'Sell for money', NULL),
(51, 'Poke Doll', 'Escape from battle. Exchange for TM 31 in Saffron City', 1000),
(52, 'Full Heal', 'Cures all status changes', 600),
(53, 'Revive', 'Recovers fainted Pokemon to 1/2 health', 1500),
(54, 'Max Revive', 'Recovers fainted Pokemon to full health', NULL),
(55, 'Guard Spec.', 'Protects temporarily from Special attack', 700),
(56, 'Super Repel', 'Protect from  wild Pokemon ambush for 200 steps', 500),
(57, 'Max Repel', 'Protect from wild Pokemon ambush for 250 steps', 700),
(58, 'Dire Hit', 'Temporarily raises likelihood of Critical Hit in battle', 650),
(59, 'Coin', 'Used to lay slots', NULL),
(60, 'Fresh Water', 'Restores 50 HP', 200),
(61, 'Soda Pop', 'Recovers 60 HP', 300),
(62, 'Lemonade', 'Recovers 80 HP', 350),
(63, 'S.S. Ticket', 'Entrance ticket to S.S. Anne (Vermilion)', NULL),
(64, 'Gold Teeth', 'Give to Safari Zone Warden for HM 04', NULL),
(65, 'X Attack', 'Temporarily raise Attack in battle', 500),
(66, 'X Defend', 'Temporarily raise Defense in battle', 550),
(67, 'X Speed', 'Temporarily raise Speed in battle', 350),
(68, 'X Special', 'Temporarily raise Special in battle', 350),
(69, 'Coin Case', 'Holds up to 9,999 Casino coins', NULL),
(70, 'Oak\'s Parcel', 'Give to Professor Oak in exchange for Pokedex', NULL),
(71, 'Item Finder', 'Reveals hidden items', NULL),
(72, 'Silph Scope', 'Makes ghosts visible (Pokemon Tower)', NULL),
(73, 'Poke Flute', 'Cures Sleep status and wakes up Snorlax', NULL),
(74, 'Lift Key', 'Used to unlock elevators in Rocket Hideout (Celadon)', NULL),
(75, 'EXP. All', 'Automaticall divides up EXP gained in battle  to whole party', NULL),
(76, 'Old Rod', 'Fish for lowNULLlevel Pokemon', NULL),
(77, 'Good Rod', 'Fish for medium level Pokemon', NULL),
(78, 'Super Rod', 'Fish for lowNULL to highNULLlevel Pokemon', NULL),
(79, 'PP Up', 'Boosts maximum PP', NULL),
(80, 'Ether', 'Restore 10 PP (one technique)', NULL),
(81, 'Max Ether', 'Restores PP to one technique', NULL),
(82, 'Elixir', 'Restores 10 PP (all techniques)', NULL),
(83, 'Max Elixir', 'Restores PP to all techniques', NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
