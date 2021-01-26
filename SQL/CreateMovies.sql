create table CINEMA
 (id int not null,
nome varchar(50) not null,
localizacao varchar(50) not null,
dtfundacao varchar(10) not null,
CONSTRAINT CINEMA_PK PRIMARY KEY(id));
 

create table ESTUDIO
 (id int not null,
nome varchar(50) not null,
dono varchar(50) NOT NULL,
dtfundacao varchar(10) not null,
lucros int not null,
morada varchar(150) not null,
nporta int not null,
codpostal char(9) not null,
CONSTRAINT ESTUDIO_PK PRIMARY KEY(id));
 

create table ATOR
 (id int not null,
nome varchar(50) not null,
bi int not null,
nss int not null,
nacionalidade VARCHAR(20) NOT NULL,
dtnasc varchar(10) not null,
sexo char(1) not null,
CONSTRAINT ATOR_PK PRIMARY KEY(id));


create table REALIZADOR
 (id int not null,
nome varchar(50) not null,
contato varchar(25) not null,
ator int,
CONSTRAINT REALIZADOR_PK PRIMARY KEY(id));



create table FILME
 (id int not null,
nome varchar(50) not null,
nomept varchar(50),
ano int not null,
duracao int not null,
custo int not null,
realizador int not null,
estudio int not null,
CONSTRAINT FILME_PK PRIMARY KEY(id));



create table GENERO
 (id int not null,
genero varchar(25) not null,
CONSTRAINT GENERO_PK PRIMARY KEY(id));



create table GENERO_FILME
 (id int not null,
filme int not null,
genero int not null,
CONSTRAINT GENERO_FILME_PK PRIMARY KEY(id));


create table ATOR_CONTATO
 (id int not null,
ator int not null,
contato varchar(50) not null,
CONSTRAINT ATOR_CONTATO_PK PRIMARY KEY(id));


create table PAPEL
 (id int not null,
papel varchar(25) not null,
CONSTRAINT PAPEL_PK PRIMARY KEY(id));


create table ATOR_PAPEL
 (id int not null,
ator int not null,
papel int not null,
CONSTRAINT ATOR_PAPEL_PK PRIMARY KEY(id));


create table ATOR_FILME
 (id int not null,
ator int not null,
filme int not null,
cache int not null,
personagem varchar(50) not null,
CONSTRAINT ATOR_FILME_PK PRIMARY KEY(id));
 

create table FILME_CINEMA
 (id int not null,
cinema int not null,
filme int not null,
CONSTRAINT FILME_CINEMA_PK PRIMARY KEY(id));
 

alter table ATOR_CONTATO add constraint
FK_ATOR_CONTATO foreign key (ator) references ATOR (id);
 

alter table FILME add constraint
FK_ESTUDIO_FILME foreign key (estudio) references ESTUDIO (id);

alter table FILME add constraint
FK_REALIZADOR_FILME foreign key (realizador) references REALIZADOR (id);
 

alter table GENERO_FILME add constraint
FK_FILME_GENERO_FILME foreign key (filme) references FILME (id);

alter table GENERO_FILME add constraint
FK_GENERO_GENERO_FILME foreign key (genero) references GENERO (id);


alter table FILME_CINEMA add constraint
FK_CINEMA_FILME_CINEMA foreign key (cinema) references CINEMA (id);

alter table FILME_CINEMA add constraint
FK_FILME_FILME_CINEMA foreign key (filme) references FILME (id);


alter table REALIZADOR add constraint
FK_ATOR_REALIZADOR foreign key (ator) references ATOR (id);
	

alter table ATOR_FILME add constraint
FK_ATOR_ATOR_FILME foreign key (ator) references ATOR (id);
	
alter table ATOR_FILME add constraint
FK_FILME_ATOR_FILME foreign key (filme) references FILME (id);
	

alter table ATOR_PAPEL add constraint
FK_ATOR_ATOR_PAPEL foreign key (ator) references ATOR (id);

alter table ATOR_PAPEL add constraint
FK_PAPEL_ATOR_PAPEL foreign key (papel) references PAPEL (id);
