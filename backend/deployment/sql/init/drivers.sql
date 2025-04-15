DO $$ BEGIN RAISE NOTICE 'Executing driver.sql'; END $$;

CREATE DATABASE drivers_db;

CREATE TABLE drivers (
  id UUID PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  email VARCHAR(100) NOT NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'available'
);