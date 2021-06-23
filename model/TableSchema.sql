CREATE TABLE "users" (
  "verified" boolean,
  "id" SERIAL PRIMARY KEY,
  "name" text,
  "email" text,
  "college" text,
  "phonenumber" text,
  "password" varchar,
  "isAdmin" boolean
);

CREATE TABLE "events" (
  "event_id" text,
  "event_name" text,
  "date" date
);

CREATE TABLE "event_registration" (
  "event_id" text,
  "user_id" text
);

CREATE TABLE "goodies_registration" (
  "goodie_id" text,
  "user_id" text
);

CREATE TABLE "goodies" (
  "goodie_id" text,
  "goodie_name" text,
  "price" text
);

CREATE TABLE "pronite_registration" (
  "pronite_id" text,
  "user_id" text
);

CREATE TABLE "pronite" (
  "pronite_id" text,
  "pronite_name" text,
  "fee" text,
  "date" date
);

ALTER TABLE "event_registration" ADD FOREIGN KEY ("event_id") REFERENCES "events" ("event_id");

ALTER TABLE "event_registration" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "goodies_registration" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "goodies_registration" ADD FOREIGN KEY ("goodie_id") REFERENCES "goodies" ("goodie_id");

ALTER TABLE "pronite_registration" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "pronite_registration" ADD FOREIGN KEY ("pronite_id") REFERENCES "pronite" ("pronite_id");
