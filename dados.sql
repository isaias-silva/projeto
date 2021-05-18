CREATE DATABASE cadastro
default character set utf8
default collate utf8_general_ci;
use cadastro;
create table `pessoas`(
`id` int not null auto_increment,
`pessoas` varchar(30) not null,
`nascimento` date,
`sexo` enum('M','F'),
`peso` decimal(5,2),
`altura` decimal(3,2),
`nacionalidade` varchar(20) DEFAULT 'BRASIL',
primary key(id)
)default charset=utf8;
