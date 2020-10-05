--	use master
--go

--if exists(Select * FROM SysDataBases WHERE name='BDProduct')
--BEGIN
--	DROP DATABASE BDProduct
--END
--go


--CREATE DATABASE BDProduct
--ON(
--	NAME=BDProduct,
--	FILENAME='D:\BDProduct.mdf'
--)
--go

USE BDProductMSSQL
go
-----TABLAS
CREATE TABLE Producto(
	IdProducto int NOT NULL IDENTITY(1,1) Primary key,
	ImgProducto varchar(200) NOT NULL
) 
go
insert into Producto values ('auriculares.jpg')
insert into Producto values ('calculadora.jpg')
insert into Producto values ('celular.jpg')
insert into Producto values ('dvd.jpg')
insert into Producto values ('pc.jpg')
insert into Producto values ('play5.jpg')
insert into Producto values ('tablet.jpg')
insert into Producto values ('teclado.jpg')
insert into Producto values ('tv.jpg')
insert into Producto values ('xbox.jpg')

 select * from producto
 --select * from producto where IdProducto=2
 --drop table Producto
--Update Producto Set  ImgProducto='sdf.jpg' where IdProducto=12