CREATE DATABASE federico20220822;
USE federico20220822;

DROP TABLE IF EXISTS tresource_type;
CREATE TABLE IF NOT EXISTS tresource_type(
	idResourceType int AUTO_INCREMENT,
	created datetime DEFAULT CURRENT_TIMESTAMP,
	descrip varchar(200),
	PRIMARY KEY(idResourceType)
);

DROP TABLE IF EXISTS tresource;
CREATE TABLE IF NOT EXISTS tresource (
	idResource int AUTO_INCREMENT,
    created datetime DEFAULT CURRENT_TIMESTAMP,
    descrip varchar(200),
    idResourceType int REFERENCES tresource_type (idResourceType),
    PRIMARY KEY(idResource)
);

INSERT INTO tresource_type (descrip)
VALUES ("Vídeo"), ("PDF Documentación"), ("PDF Enunciado"), ("PDF Solución");

INSERT INTO tresource (descrip, idResourceType)
VALUES
("REPORTE_22_08_20.MP4", (SELECT idResourceType FROM tresource_type WHERE descrip = "Vídeo")),
("DOCUMENTACION_VENTAS", (SELECT idResourceType FROM tresource_type WHERE descrip = "PDF Documentación")),
("PROBLEMAS VERSION 2022", (SELECT idResourceType FROM tresource_type WHERE descrip = "PDF Enunciado")),
("SOLUCIONES VERSION 2022", (SELECT idResourceType FROM tresource_type WHERE descrip = "PDF Solución")),
("REPORTE_15_05_22.MP4", 1),
("REPORTE_01_02_15.MP4", 1),
("DOCUMENTACION_COMPRAS", 2),
("PROBLEMAS VERSION 2021", 3),
("PROBLEMAS VERSION 2020", 3),
("PROBLEMAS VERSION 2019", 3);

SELECT tresource_type.descrip AS Tipo, COUNT(tresource_type.idResourceType) AS Cantidad_de_Registros FROM tresource_type
INNER JOIN tresource
ON tresource.idResourceType = tresource_type.idResourceType
GROUP BY tresource_type.idResourceType
ORDER BY COUNT(tresource_type.idResourceType) DESC;