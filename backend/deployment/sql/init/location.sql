DO $$ BEGIN RAISE NOTICE 'Executing location.sql'; END $$;

CREATE DATABASE location_db;

CREATE TABLE locations (
  id UUID PRIMARY KEY,
  driver_id UUID NOT NULL,
  latitude DOUBLE PRECISION NOT NULL,
  longitude DOUBLE PRECISION NOT NULL,
  timestamp TIMESTAMP NOT NULL
);