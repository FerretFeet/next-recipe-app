CREATE SEQUENCE IF NOT EXISTS user_id_seq START 1;
create table if not exists user_account (
    id INT primary key default nextval('user_id_seq'),
    username varchar(16) not null unique
);
