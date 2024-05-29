create sequence if not exists unit_id_seq;
create table if not exists unit (
    id int primary key default nextval('unit_id_seq'),
    name varchar(16) not null unique
);