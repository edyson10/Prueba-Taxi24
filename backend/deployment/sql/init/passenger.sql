DO $$ BEGIN RAISE NOTICE 'Executing passengers.sql'; END $$;

CREATE DATABASE passengers_db;

CREATE TABLE passengers (
  id UUID PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(100) NOT NULL
);