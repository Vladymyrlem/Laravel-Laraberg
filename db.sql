-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 16, 2022 at 01:46 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT = @@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS = @@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION = @@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laraberg-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs`
(
    `id`         bigint(20) UNSIGNED                     NOT NULL,
    `uuid`       varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `connection` text COLLATE utf8mb4_unicode_ci         NOT NULL,
    `queue`      text COLLATE utf8mb4_unicode_ci         NOT NULL,
    `payload`    longtext COLLATE utf8mb4_unicode_ci     NOT NULL,
    `exception`  longtext COLLATE utf8mb4_unicode_ci     NOT NULL,
    `failed_at`  timestamp                               NOT NULL DEFAULT current_timestamp()
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations`
(
    `id`        int(10) UNSIGNED                        NOT NULL,
    `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `batch`     int(11)                                 NOT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`)
VALUES (1, '2014_10_12_000000_create_users_table', 1),
       (2, '2014_10_12_100000_create_password_resets_table', 1),
       (3, '2019_02_08_105647_create_blocks_contents_tables', 1),
       (4, '2019_08_19_000000_create_failed_jobs_table', 1),
       (5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
       (6, '2021_11_12_153947_remove_blocks_contents_tables', 1),
       (7, '2022_09_11_151738_create_posts_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets`
(
    `email`      varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `token`      varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `created_at` timestamp                               NULL DEFAULT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens`
(
    `id`             bigint(20) UNSIGNED                     NOT NULL,
    `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `tokenable_id`   bigint(20) UNSIGNED                     NOT NULL,
    `name`           varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `token`          varchar(64) COLLATE utf8mb4_unicode_ci  NOT NULL,
    `abilities`      text COLLATE utf8mb4_unicode_ci              DEFAULT NULL,
    `last_used_at`   timestamp                               NULL DEFAULT NULL,
    `expires_at`     timestamp                               NULL DEFAULT NULL,
    `created_at`     timestamp                               NULL DEFAULT NULL,
    `updated_at`     timestamp                               NULL DEFAULT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts`
(
    `id`         bigint(20) UNSIGNED                     NOT NULL,
    `title`      varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `slug`       varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `content`    text COLLATE utf8mb4_unicode_ci         NOT NULL,
    `status`     varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `created_at` timestamp                               NULL DEFAULT NULL,
    `updated_at` timestamp                               NULL DEFAULT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `slug`, `content`, `status`, `created_at`, `updated_at`)
VALUES (6, 'Test Post', 'TestPost',
        '<!-- wp:heading {\"level\":1} --><h1>Hello World</h1><!-- /wp:heading --><!-- wp:paragraph --><p></p><!-- /wp:paragraph --><!-- wp:paragraph --><p>This is from Laraberg Gutenberg Like editor for laravel.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p></p><!-- /wp:paragraph --><!-- wp:image {\"sizeSlug\":\"large\"} --><figure class=\"wp-block-image size-large\"><img src=\"https://via.placeholder.com/550x650\" alt=\"\"/><figcaption>This is placeholder image</figcaption></figure><!-- /wp:image --><!-- wp:quote --><blockquote class=\"wp-block-quote\"><p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.</p><cite>Lorem Guy</cite></blockquote><!-- /wp:quote --><!-- wp:paragraph --><p></p><!-- /wp:paragraph -->',
        'publish', '2022-09-14 05:00:23', '2022-09-14 05:00:23'),
       (7, 'Carousel Ui Test', 'Carousel Ui Test',
        '<!-- wp:test/slider {\"section_id\":\"CarouselUiTest\",\"section_title\":\"Carousel Ui Test\",\"section_description\":\"Carousel Ui Test\",\"blocks\":[{\"title\":\"Carousel Ui Test 2\",\"content\":\"Carousel Ui Test 2\",\"image\":\"https://via.placeholder.com/1320x500\",\"buttonText\":\"Carousel Ui Btn\",\"buttonLink\":\"https://images.unsplash.com/photo-1615963244664-5b845b2025ee?ixlib=rb-1.2.1\\u0026ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8\\u0026auto=format\\u0026fit=crop\\u0026w=500\\u0026q=60\",\"sequence\":2},{\"title\":\"Carousel Ui Test 3\",\"content\":\"Carousel Ui Test 3\",\"image\":\"https://via.placeholder.com/1320x500\",\"buttonText\":\"Carousel Ui Btn 3\",\"buttonLink\":\"https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?ixlib=rb-1.2.1\\u0026ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8\\u0026auto=format\\u0026fit=crop\\u0026w=500\\u0026q=60\",\"sequence\":3},{\"title\":\"Carousel Ui Test 1\",\"content\":\"Carousel Ui Test 1\",\"image\":\"https://via.placeholder.com/1320x500\",\"buttonText\":\"Carousel Ui Btn 1\",\"buttonLink\":\"https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1\\u0026ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8\\u0026auto=format\\u0026fit=crop\\u0026w=500\\u0026q=60\",\"sequence\":1}],\"style\":\"center\"} --><div class=\"wp-block-test-slider\"><h2 class=\"h2\">Carousel Ui Test</h2><p class=\"lead\">Carousel Ui Test</p><div id=\"CarouselUiTest\" class=\"carousel slide\" data-bs-ride=\"carousel\"><div class=\"carousel-indicators\"><button type=\"button\" data-bs-target=\"#CarouselUiTest\" data-bs-slide-to=\"0\" class=\"active\" aria-label=\"Slide 1\"></button><button type=\"button\" data-bs-target=\"#CarouselUiTest\" data-bs-slide-to=\"1\" class=\"\" aria-label=\"Slide 1\"></button><button type=\"button\" data-bs-target=\"#CarouselUiTest\" data-bs-slide-to=\"2\" class=\"\" aria-label=\"Slide 1\"></button></div><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"https://via.placeholder.com/1320x500\" alt=\"Carousel Ui Test 2\"/><div class=\"container\"><div class=\"carousel-caption \"><h1>Carousel Ui Test 2</h1><p>Carousel Ui Test 2</p><p><a class=\"btn btn-lg btn-primary\" href=\"https://images.unsplash.com/photo-1615963244664-5b845b2025ee?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60\">Carousel Ui Btn</a></p></div></div></div><div class=\"carousel-item \"><img src=\"https://via.placeholder.com/1320x500\" alt=\"Carousel Ui Test 3\"/><div class=\"container\"><div class=\"carousel-caption \"><h1>Carousel Ui Test 3</h1><p>Carousel Ui Test 3</p><p><a class=\"btn btn-lg btn-primary\" href=\"https://images.unsplash.com/photo-1605092676920-8ac5ae40c7c8?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60\">Carousel Ui Btn 3</a></p></div></div></div><div class=\"carousel-item \"><img src=\"https://via.placeholder.com/1320x500\" alt=\"Carousel Ui Test 1\"/><div class=\"container\"><div class=\"carousel-caption \"><h1>Carousel Ui Test 1</h1><p>Carousel Ui Test 1</p><p><a class=\"btn btn-lg btn-primary\" href=\"https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60\">Carousel Ui Btn 1</a></p></div></div></div></div><button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#CarouselUiTest\" data-bs-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"visually-hidden\">Previous</span></button><button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#CarouselUiTest\" data-bs-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"visually-hidden\">Next</span></button></div></div><!-- /wp:test/slider -->',
        'publish', '2022-09-14 05:06:29', '2022-09-14 05:10:33'),
       (8, 'Sections Test', 'Sections Test',
        '<!-- wp:test/sections {\"section_id\":\"SectionsTest\",\"section_title\":\"Sections Test\",\"section_description\":\"Sections Test\",\"blocks\":[{\"title\":\"Sections Test 2\",\"content\":\"Sections Test 2\",\"image\":\"https://via.placeholder.com/200x200\",\"buttonText\":\"Sections Test 2\",\"buttonLink\":\"https://via.placeholder.com/200x200\",\"sequence\":2},{\"title\":\"Sections Test 3\",\"content\":\"Sections Test 3\",\"image\":\"https://via.placeholder.com/200x200\",\"buttonText\":\"Sections Test 3\",\"buttonLink\":\"https://via.placeholder.com/200x200\",\"sequence\":3},{\"title\":\"Sections Test 1\",\"content\":\"Sections Test 1\",\"image\":\"https://via.placeholder.com/200x200\",\"buttonText\":\"Sections Test 1\",\"buttonLink\":\"https://via.placeholder.com/200x200\",\"sequence\":1}],\"style\":\"center\"} --><div id=\"SectionsTest\" class=\"wp-block-test-sections\"><h2 class=\"h2\">Sections Test</h2><p class=\"lead\">Sections Test</p><div class=\"container\"><div class=\"row\"><div class=\"col-lg-4 text-center\"><div class=\"border rounded p-5\"><div class=\"mb-4 text-center\"><img src=\"https://via.placeholder.com/200x200\" alt=\"Sections Test 2\"/></div><h2>Sections Test 2</h2><p>Sections Test 2</p><p><a class=\"btn btn-secondary\" href=\"https://via.placeholder.com/200x200\">Sections Test 2</a></p></div></div><div class=\"col-lg-4 text-center\"><div class=\"border rounded p-5\"><div class=\"mb-4 text-center\"><img src=\"https://via.placeholder.com/200x200\" alt=\"Sections Test 3\"/></div><h2>Sections Test 3</h2><p>Sections Test 3</p><p><a class=\"btn btn-secondary\" href=\"https://via.placeholder.com/200x200\">Sections Test 3</a></p></div></div><div class=\"col-lg-4 text-center\"><div class=\"border rounded p-5\"><div class=\"mb-4 text-center\"><img src=\"https://via.placeholder.com/200x200\" alt=\"Sections Test 1\"/></div><h2>Sections Test 1</h2><p>Sections Test 1</p><p><a class=\"btn btn-secondary\" href=\"https://via.placeholder.com/200x200\">Sections Test 1</a></p></div></div></div></div></div><!-- /wp:test/sections -->',
        'publish', '2022-09-14 05:12:46', '2022-09-16 06:00:34'),
       (9, 'InfoBox', 'InfoBox',
        '<!-- wp:test/info-box {\"title\":\"InfoBox\",\"description\":\"InfoBox\",\"image\":\"https://via.placeholder.com/500x300\",\"buttonText\":\"InfoBox\",\"buttonLink\":\"https://via.placeholder.com/500x300\"} --><div class=\"row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative\" class=\"wp-block-test-info-box\"><div class=\"col-8 p-4 d-flex flex-column position-static\"><h3 class=\"mb-0\">InfoBox</h3><p class=\"card-text mb-auto\">InfoBox</p><a href=\"https://via.placeholder.com/500x300\" class=\"stretched-link\">InfoBox</a></div><div class=\"col-4 d-none d-lg-block\"><img class=\"img-fluid\" height=\"300\" src=\"https://via.placeholder.com/500x300\" alt=\"InfoBox\"/></div></div><!-- /wp:test/info-box --><!-- wp:test/info-box {\"title\":\"InfoBox 2\",\"description\":\"InfoBox 2\",\"image\":\"https://via.placeholder.com/500x300\",\"buttonText\":\"InfoBox\",\"buttonLink\":\"https://via.placeholder.com/500x300\",\"style\":\"right\"} --><div class=\"row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative\" class=\"wp-block-test-info-box\"><div class=\"col-4 d-none d-lg-block\"><img class=\"img-fluid\" height=\"300\" src=\"https://via.placeholder.com/500x300\" alt=\"InfoBox 2\"/></div><div class=\"col-8 p-4 d-flex flex-column position-static\"><h3 class=\"mb-0\">InfoBox 2</h3><p class=\"card-text mb-auto\">InfoBox 2</p><a href=\"https://via.placeholder.com/500x300\" class=\"stretched-link\">InfoBox</a></div></div><!-- /wp:test/info-box -->',
        'publish', '2022-09-14 05:22:59', '2022-09-14 05:25:42');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users`
(
    `id`                bigint(20) UNSIGNED                     NOT NULL,
    `name`              varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `email`             varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `email_verified_at` timestamp                               NULL DEFAULT NULL,
    `password`          varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
    `remember_token`    varchar(100) COLLATE utf8mb4_unicode_ci      DEFAULT NULL,
    `created_at`        timestamp                               NULL DEFAULT NULL,
    `updated_at`        timestamp                               NULL DEFAULT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8mb4
  COLLATE = utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
    ADD PRIMARY KEY (`id`),
    ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
    ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
    ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
    ADD PRIMARY KEY (`id`),
    ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
    ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`, `tokenable_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
    ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
    ADD PRIMARY KEY (`id`),
    ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
    MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
    MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 8;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
    MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
    MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
    MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT = @OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS = @OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION = @OLD_COLLATION_CONNECTION */;
