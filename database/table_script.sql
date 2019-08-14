CREATE TABLE IF NOT EXISTS user(
	id int not null auto_increment,
    nome varchar(255) not null,
    email varchar(255) not null unique,
    state varchar(255) not null,
    primary key(id)
);

CREATE TABLE IF NOT EXISTS solar_data(
	id int not null auto_increment,
    provider varchar(255),
    installation_dt varchar(25),
    system_size double,
    zip_code varchar(25),
    state varchar(50),
    cost double,
    primary key(id)
);