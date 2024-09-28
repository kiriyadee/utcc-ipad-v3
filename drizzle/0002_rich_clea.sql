CREATE TABLE IF NOT EXISTS "students" (
	"id" text PRIMARY KEY NOT NULL,
	"student_id" serial NOT NULL,
	"frist_name" varchar(255),
	"last_name" varchar(255),
	"email" varchar(255),
	"phone" varchar(255),
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
