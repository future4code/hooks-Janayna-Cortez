USE `hooks-4313387-janayna-cortez`;
-- Exercicio 01

CREATE TABLE Empresa (
id INT PRIMARY KEY,
name VARCHAR(255) NOT NULL UNIQUE,
title VARCHAR(255) NOT NULL,
date DATE NOT NULL
);

SELECT * FROM Empresa;

-- Exercicio 02
INSERT INTO Empresa ( id, name, title, date)
VALUES (001, 'LabeSky', 'LSy', '2023/10/05'),
	   (002, 'Labefy', 'LSy', '2024/01/06'),
       (003, 'AstroZoom', 'AZm', '2022/12/20');

-- Exercicio 03
-- Letra A
ALTER TABLE Empresa DROP COLUMN title;
DESCRIBE Empresa;

-- Letra B 
ALTER TABLE Empresa 
CHANGE date dueDate DATE NOT NULL;

DESCRIBE Empresa;

-- Letra C
SELECT * FROM Funcionarios;
DESCRIBE Funcionarios;

ALTER TABLE Funcionarios 
MODIFY email VARCHAR(255);

-- Exercicio 4
-- Letra A    
ALTER TABLE Empresa ADD description TEXT;

-- Letra B   
UPDATE Empresa
SET description = "Projeto de sistema em nuvem da Labenu." 
WHERE id = 001;

UPDATE Empresa
SET description = "Projeto de sistema de gerenciamento de músicas da Labenu."
WHERE id = 002;

UPDATE Empresa
SET description = 'Projeto de rede de comunicação da Labenu.'
WHERE id = 003;

-- Exercicio 5
-- Letra A    
SELECT dueDate FROM Empresa ORDER BY dueDate DESC;

-- Letra B 
SELECT name, dueDate FROM Empresa ORDER BY dueDate ASC LIMIT 2;
