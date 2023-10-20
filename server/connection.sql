CREATE DATABASE chat;

use chat;

CREATE TABLE mensajes (
  id INT NOT NULL AUTO_INCREMENT,
  persona1 VARCHAR(255) NOT NULL,
  persona2 VARCHAR(255) NOT NULL,
  mensaje TEXT NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

INSERT INTO mensajes (id, persona1, persona2, mensaje) VALUES
(1, 'Melissa', 'Rodrigo', "Primer mensaje"),
