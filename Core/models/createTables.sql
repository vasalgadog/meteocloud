CREATE TABLE estacion(
    codigoNacional INT NOT NULL PRIMARY KEY,
    nombreEstacion VARCHAR(50) NOT NULL,
    nombreRegion VARCHAR(50) NOT NULL,
    codigoOMM INT,
    codigoOACI INT,
    latitud INT,
    longitud INT,
    altura INT,
    zonaGeografica VARCHAR(50)
);

CREATE TABLE datosEstaciones(
    id INT NOT NULL PRIMARY KEY,
    aguaCaida6Horas VARCHAR(10),
	aguaCaida24Horas VARCHAR(10),
	aguaCaidaDelMinuto VARCHAR(10),
	codigoNacional INT NOT NULL,
	direccionDelViento VARCHAR(10),
	direccionDelViento02MinutosMax VARCHAR(10),
	direccionDelViento10MinutosMax VARCHAR(10),
	direccionDelVientoPromedio2Minutos VARCHAR(10),
	direccionDelVientoPromedio10Minutos VARCHAR(10),
	fuerzaDelViento VARCHAR(10),
	fuerzaDelViento02MinutosMax VARCHAR(10),
	fuerzaDelViento10MinutosMax VARCHAR(10),
	fuerzaDelVientoPromedio2Minutos VARCHAR(10),
	fuerzaDelVientoPromedio10Minutos VARCHAR(10),
	humedadRelativa VARCHAR(10),
	momento DATETIME NOT NULL,
	presionEstacion VARCHAR(10),
	presionNivelDelMar VARCHAR(10),
	presionNivelEstandar: VARCHAR(10),
	puntoDeRocio VARCHAR(10),
	radiacionGlobalInst VARCHAR(10),
	temperatura VARCHAR(10),
	temperatura02Mts VARCHAR(10),
	temperatura10Mts VARCHAR(10),
	temperatura30Mts VARCHAR(10),
	temperaturaMaxima12Horas VARCHAR(10),
	temperaturaMinima12Horas VARCHAR(10)
);