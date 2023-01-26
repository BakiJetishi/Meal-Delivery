-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Jan 26, 2023 at 09:45 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reactmeals`
--

-- --------------------------------------------------------

--
-- Table structure for table `meals`
--

CREATE TABLE `meals` (
  `id` int(11) NOT NULL,
  `title` varchar(55) NOT NULL,
  `body` longtext NOT NULL,
  `price` float NOT NULL,
  `meal_type` varchar(20) NOT NULL,
  `img_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meals`
--

INSERT INTO `meals` (`id`, `title`, `body`, `price`, `meal_type`, `img_url`) VALUES
(33, 'Bacon Burger', 'This is the best burger!', 23, 'Chicken', 'http://localhost/REACT-PHP/PHP/images/3.png'),
(34, 'Blueberry Shake', 'This is the best burger', 2.99, 'Drinks', 'http://localhost/REACT-PHP/PHP/images/3.png'),
(35, 'Pizza', 'This is the best burger', 3.99, 'Pizza', 'http://localhost/REACT-PHP/PHP/images/63a4e654df0a54.png'),
(36, 'Apricot Chicken', 'This is the best burger', 6.99, 'Chicken', 'http://localhost/REACT-PHP/PHP/images/63a4e703ab5642.png'),
(37, 'Apricot Chicken', 'This is the best burger', 4.99, 'Chicken', 'http://localhost/REACT-PHP/PHP/images/63a4e76edadd92.png'),
(38, 'Bacon Burger', 'This is the best burger', 3.99, 'Burgers', 'http://localhost/REACT-PHP/PHP/images/63a4e8387dfc11.png'),
(39, 'Chocolate Muffin', 'This is the best burger', 1.99, 'Desserts', 'http://localhost/REACT-PHP/PHP/images/63a4e87c62f748.png'),
(40, 'Grand Italiano', 'This is the best burger', 9.99, 'Pizza', 'http://localhost/REACT-PHP/PHP/images/63a4e928960827.png'),
(41, 'Iced Tea Bottle', 'This is the best burger', 3.99, 'Drinks', 'http://localhost/REACT-PHP/PHP/images/63a4e96138ef26.png'),
(42, 'Kiwi Smoothie', 'This is the best burger', 2.49, 'Drinks', 'http://localhost/REACT-PHP/PHP/images/63a4e9af3c76d9.png');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` longtext NOT NULL,
  `img_url` varchar(255) NOT NULL,
  `created_at` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `body`, `img_url`, `created_at`) VALUES
(1, '10 Reasons To Do A Digital Detox Challenge', 'Taciti adipiscing. Senectus ligula libero facilisis cubilia molestie leo mi taciti nam erat ac dictumst congue, ridiculus sodales Molestie viverra curae;. Morbi duis elit fermentum ante consequat leo, imperdiet auctor ut. Donec. Volutpat. Montes malesuada hymenaeos convallis dapibus semper risus hac cum aliquam tincidunt in mattis sapien euismod scelerisque lacinia habitasse. Fames suspendisse tortor laoreet nulla eu elit, tellus phasellus ridiculus nec morbi tellus sagittis vel class nibh sem mauris tempor libero curabitur. Nullam sem consectetuer malesuada mattis litora lorem porttitor. Ipsum dis Sodales vitae aptent per proin etiam eros. Id suscipit mus per. Est tincidunt ornare mattis. Dignissim velit. Mattis. Sodales sollicitudin. Eget eu. Fusce porta ligula conubia. Facilisi molestie. Sit. Tempor mus blandit primis netus nisi eleifend. Integer luctus risus in. Amet penatibus primis fermentum convallis iaculis inceptos id venenatis, class risus molestie leo in ridiculus dapibus sapien duis commodo sodales quisque at habitant praesent lobortis eget metus etiam adipiscing. Posuere penatibus nibh massa non senectus ullamcorper, porta litora blandit bibendum ad, luctus ornare purus nostra mattis cubilia hymenaeos lectus curae; tempus tellus lorem sit interdum, phasellus lectus eros ridiculus, dictumst blandit cursus mi auctor praesent sagittis volutpat nam aliquet purus odio. Euismod velit porta ante eros lacus convallis, nullam curae; ac venenatis netus non mattis nec. Felis lacus dapibus etiam felis phasellus scelerisque praesent dui, neque ad elementum adipiscing convallis curae;. Enim lobortis mattis cras auctor praesent ornare viverra, ultrices turpis gravida litora ipsum dignissim turpis libero tristique dictum nunc velit. Magna ultrices integer. Aliquet. Odio, sociosqu non. Fermentum potenti hac tempus pellentesque, pulvinar lectus consequat, hac urna ultrices tortor neque.', 'http://localhost/REACT-PHP/PHP/images/news1.jpg', '2023-01-24'),
(2, 'The Ultimate Hangover Burger: Egg in a Hole Burger Grilled Cheese', 'Inceptos. Luctus penatibus. Fusce molestie fusce cras lacinia nonummy facilisis pellentesque. Litora taciti Hac, dignissim mi pellentesque torquent scelerisque, facilisi suspendisse primis nec, platea lacinia nam montes facilisi eu dui leo per vehicula mus, lobortis iaculis quis sollicitudin per massa ligula consectetuer Curabitur vulputate. Eros vestibulum elementum lorem neque ornare. Vehicula Quisque eget per lectus viverra pharetra eleifend. Pretium, interdum nisi. Duis ad ad nisi dictumst ultrices. Parturient nunc blandit ad lorem nonummy lorem placerat montes netus nunc rhoncus penatibus. Sollicitudin suscipit porta praesent. Metus semper scelerisque vulputate orci odio neque congue. Laoreet imperdiet ante. Metus eget etiam a sagittis montes penatibus. Molestie eros facilisi orci senectus facilisi nascetur. Elementum cursus interdum cursus. Parturient habitasse lacus nascetur, ridiculus ut sociosqu primis litora mattis libero at est varius arcu sed class mi iaculis vitae cursus donec gravida orci quis. Cubilia ultrices nibh id laoreet, venenatis imperdiet torquent, auctor rutrum suscipit sollicitudin pharetra phasellus nostra elementum Convallis habitant lacus senectus risus. Vitae ut Venenatis. Aptent semper. Fringilla vulputate curae; phasellus hendrerit senectus dis. Dictumst cursus commodo non magnis mollis parturient congue faucibus posuere habitasse, imperdiet consequat feugiat sed, accumsan maecenas laoreet elementum fringilla enim rhoncus fusce sem congue vulputate feugiat. Justo accumsan porta dignissim taciti egestas sodales, nostra sagittis vulputate eget velit elit lectus dictum orci platea sem erat porttitor libero lorem, mus nec augue lacinia ipsum condimentum malesuada luctus duis, conubia torquent, nulla tortor eget. Sociosqu a leo consequat phasellus vivamus sapien. Rutrum. Mauris est congue ultricies dolor. Ligula facilisis lacus. Hac eget. Integer aptent ornare sagittis cum litora vivamus egestas taciti nostra dignissim Purus sociis nulla ad habitant iaculis lectus eros consectetuer dis cum accumsan hac sed nam velit aliquet luctus, facilisis vestibulum elementum eget pharetra mi ad. Bibendum urna taciti class pharetra cursus odio. Adipiscing posuere sapien nunc velit sociosqu. Auctor velit posuere. Nam donec habitant volutpat hymenaeos lorem nostra magnis Congue laoreet felis nullam. Massa lorem, rhoncus sem convallis eros senectus molestie fusce habitant accumsan sapien. In maecenas pretium sociis aliquam fames urna ornare dignissim viverra fermentum convallis litora rhoncus sem quis. Hymenaeos viverra. Lacus interdum vulputate. Semper blandit Fermentum dui tempor elit purus lobortis Duis porttitor sagittis lectus. Lacinia felis mi rhoncus iaculis libero suspendisse dis. Magnis, vestibulum. Magnis vestibulum Consectetuer sociis adipiscing luctus faucibus. Blandit suscipit vestibulum quam maecenas tincidunt cursus diam est tristique eget bibendum euismod justo duis vestibulum mollis pretium magna. Sociosqu Sem integer, dictum. Augue eleifend faucibus accumsan platea praesent aliquet ultricies faucibus fames consectetuer phasellus. Litora gravida Tempor posuere ad risus suspendisse dictumst volutpat Potenti ornare arcu hymenaeos amet Ipsum cum montes tincidunt hac pede habitant.', 'http://localhost/REACT-PHP/PHP/images/news2.jpg', '2023-01-24'),
(3, 'Traditional Soft Pretzels with Sweet Beer Cheeseee', 'Nam imperdiet mi Libero ad sociosqu sit felis mus malesuada ad nec inceptos sapien. Nam netus morbi aliquet lacus facilisi viverra platea aptent varius egestas inceptos auctor diam. Inceptos volutpat scelerisque metus ligula iaculis cubilia. Nunc quisque accumsan. Curae; Leo platea ultrices sagittis consectetuer fermentum mollis laoreet proin nullam praesent senectus eu magnis commodo molestie turpis. Per Gravida ultrices elit porta consectetuer id pede pulvinar et ligula per nisi arcu et eros cras. Metus sem vestibulum volutpat torquent aenean, inceptos sollicitudin. Augue tristique magnis suscipit faucibus magna vehicula posuere lectus id ornare torquent, class. Nec netus hendrerit habitant scelerisque habitant nonummy aenean enim nibh. Pulvinar ut potenti phasellus dolor pharetra per ornare penatibus Fringilla sapien sem dui a lorem fringilla penatibus fames ad, senectus curae; at facilisis. Purus convallis hymenaeos erat taciti sollicitudin egestas lacus pellentesque ullamcorper bibendum tempus primis dolor erat erat. Ut fringilla nulla odio libero eros varius iaculis vel risus, augue. Bibendum at sociis. Nec molestie laoreet quis imperdiet. Pede lacus eleifend magna molestie fusce. Turpis quam suscipit mollis eleifend eget ultricies tristique scelerisque varius vulputate litora ipsum, porta rhoncus augue montes proin fusce tristique odio. Ridiculus elit integer cras morbi nonummy egestas dapibus cursus. Fermentum integer tortor. Hendrerit a. Condimentum feugiat elementum fermentum. Faucibus molestie vitae eros. Consectetuer. Suscipit quisque per volutpat felis semper nam a platea fames elementum, leo, rhoncus aenean purus, elementum nisi quisque. Elit penatibus cras leo primis libero primis elit dignissim velit torquent arcu nec non tincidunt euismod metus metus justo eget diam molestie malesuada justo gravida nascetur ante auctor pede cum accumsan. Senectus. Aptent ad enim nec. Malesuada elementum ullamcorper sem lacinia tristique vitae faucibus penatibus id malesuada diam dignissim ridiculus parturient varius ac dolor ad erat laoreet praesent sodales Eleifend non justo metus sem. Laoreet suspendisse nonummy nulla felis sodales. Mattis felis.', 'http://localhost/REACT-PHP/PHP/images/news3.jpg', '2023-01-24');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `name` varchar(155) NOT NULL,
  `number` varchar(100) NOT NULL,
  `country` varchar(155) NOT NULL,
  `city` varchar(155) NOT NULL,
  `street` varchar(155) NOT NULL,
  `postalcode` varchar(155) NOT NULL,
  `dop` datetime NOT NULL DEFAULT current_timestamp(),
  `meal_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `name`, `number`, `country`, `city`, `street`, `postalcode`, `dop`, `meal_id`, `qty`) VALUES
(1, 'asdsa', '3423432', 'test', '34234', '', '1', '2023-01-25 15:56:54', 1, 1),
(2, 'asdsa', '3423432', 'test', '34234', '', '1', '2023-01-25 16:03:16', 1, 1),
(12, 'test', '43434', 'test', 'test', '', '1063', '2023-01-25 16:33:56', 40, 1),

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `date` varchar(255) NOT NULL,
  `email` varchar(55) NOT NULL,
  `name` varchar(55) NOT NULL,
  `number` varchar(155) NOT NULL,
  `requests` text NOT NULL,
  `seats` int(11) NOT NULL,
  `time` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`id`, `date`, `email`, `name`, `number`, `requests`, `seats`, `time`) VALUES
(1, '34234', 'test', 'asdsa', '3423432', 'asdasd', 1, 'test'),
(2, '2023-01-12', 'test@test.com', 'test', '34324', 'rewrwerwr', 3, '16:45');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(40) NOT NULL,
  `access_token` varchar(255) NOT NULL,
  `username` varchar(35) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `access_token`, `username`) VALUES
(1, 'abc@gmail.com', 'a29c57c6894dee6e8251510d58c07078ee3f49bf', '262ed987bda598ae77d6d4f1a0fd2ca4f71d5b507fa3621d61e63ef44b8aa009e903aa40707b3b2fdd12610819f345f0b05c365b04680eca925265d691c854d8', ''),
(7, 'hello@gmail.com', 'f2ef3d6891c73a5b601473dcaadb66ee6492a099', '5f3a3d3d765cfd38f942c1273faea769a884e0076cbd9f5dc25ac309e7610e7fee4b8cfbf1e93b85364fa89f3c5418007bb89575c7dd8d140d8c5aaeced806a2', ''),
(8, 'test@test.com', '94ba69fdd6ac7c1576e4b079514aa04004822824', 'fb5fac53eab81ea9cb3ec030cda2b4c4da2c8a827fb5349770f5b3d99754344178355b5b3f8f2bbdcecf2000ba3d0d8a9432cb084f689469a3b42bf421e04c9f', ''),
(9, 'abcc@gmail.com', '1bfe76a453e484de74a2cd5fc44bbb10b55b2f92', '', ''),
(10, 'test1@test.com', '719855e8f4ebd94341277b0b0d50b75c5187133f', 'f89f144f395cf9d78d9ed4e81027ea03583153bafdf7a76e46bd19d351a2edea56e25df0c9975184ff89c791f1072a9add7e206ade494a71a0b237db6df22ca3', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `meals`
--
ALTER TABLE `meals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `meals`
--
ALTER TABLE `meals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
