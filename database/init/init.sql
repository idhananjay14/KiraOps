CREATE DATABASE auth;
CREATE DATABASE products;
CREATE DATABASE orders;
CREATE DATABASE users;

\connect products

CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price NUMERIC(10,2) NOT NULL,
    image_url TEXT,
    category VARCHAR(100)
);

INSERT INTO products (
    name,
    description,
    price,
    image_url,
    category
)
VALUES
(
    'Silk Evening Dress',
    'Elegant handcrafted silk evening dress.',
    7999.00,
    '/images/dress.jpg',
    'Dresses'
),
(
    'Leather Handbag',
    'Premium leather handbag for everyday luxury.',
    6499.00,
    '/images/handbag.jpg',
    'Bags'
),
(
    'Pearl Necklace',
    'Classic freshwater pearl necklace.',
    4999.00,
    '/images/necklace.jpg',
    'Jewelry'
),
(
    'Cashmere Coat',
    'Soft cashmere winter coat.',
    12999.00,
    '/images/coat.jpg',
    'Outerwear'
),
(
    'Gold Bracelet',
    'Minimal 18K gold bracelet.',
    8999.00,
    '/images/bracelet.jpg',
    'Jewelry'
),
(
    'Chanel No. 5',
    'Luxury fragrance.',
    12999.00,
    '/images/chanel.avif',
    'Beauty'
),
(
    'Luxury Skincare Set',
    'Premium skincare collection.',
    8999.00,
    '/images/skincare.jpg',
    'Beauty'
);

\connect users

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

\connect orders

CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    product_name VARCHAR(255) NOT NULL,
    product_image TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    status VARCHAR(50) DEFAULT 'PENDING',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);