DO $$ BEGIN RAISE NOTICE 'Executing trips.sql'; END $$;

CREATE DATABASE trips_db;

CREATE TABLE trips (
  id UUID PRIMARY KEY,
  passenger_id UUID NOT NULL,
  driver_id UUID,
  origin TEXT NOT NULL,
  destination TEXT NOT NULL,
  status VARCHAR(20) NOT NULL,
  start_time TIMESTAMP,
  end_time TIMESTAMP,
  price NUMERIC
);