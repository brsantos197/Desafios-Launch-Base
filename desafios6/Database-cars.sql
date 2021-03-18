CREATE TABLE "customers" (
  "id" SERIAL PRIMARY KEY,
  "name" text,
  "code_person" text UNIQUE,
  "gender" text,
  "birth" date,
  "addresses_id" int
);

CREATE TABLE "agencies" (
  "id" SERIAL PRIMARY KEY,
  "name" text,
  "adress_id" int UNIQUE,
  "phone" text,
  "email" text,
  "order_id" int
);

CREATE TABLE "adresses" (
  "id" SERIAL PRIMARY KEY,
  "city" street,
  "street" text,
  "number" text,
  "district" text,
  "region" text
);

CREATE TABLE "cars" (
  "id" SERIAL PRIMARY KEY,
  "model_id" number,
  "plate" text UNIQUE,
  "color" text,
  "fuel_type" text,
  "status" boolean
);

CREATE TABLE "models" (
  "id" SERIAL PRIMARY KEY,
  "brand" text,
  "model" text,
  "age" date
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY,
  "customer_code" text,
  "agencie_id" int,
  "created_at" timestamp DEFAULT (now)
);

CREATE TABLE "cars_order" (
  "cars_order_id" SERIAL PRIMARY KEY,
  "car_plate" text,
  "order_id" int
);

ALTER TABLE "agencies" ADD FOREIGN KEY ("adress_id") REFERENCES "adresses" ("id");

ALTER TABLE "models" ADD FOREIGN KEY ("id") REFERENCES "cars" ("model_id");

ALTER TABLE "orders" ADD FOREIGN KEY ("id") REFERENCES "cars_order" ("order_id");

ALTER TABLE "orders" ADD FOREIGN KEY ("customer_code") REFERENCES "customers" ("code_person");

ALTER TABLE "cars" ADD FOREIGN KEY ("plate") REFERENCES "cars_order" ("car_plate");

ALTER TABLE "orders" ADD FOREIGN KEY ("agencie_id") REFERENCES "agencies" ("order_id");
