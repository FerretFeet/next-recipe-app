create sequence if not exists tag_id_seq;
create table if not exists tag (
    id int primary key default nextval('tag_id_seq'),
    name varchar(16) not null unique
);