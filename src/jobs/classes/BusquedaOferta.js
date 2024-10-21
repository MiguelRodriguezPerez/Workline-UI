export class BusquedaOferta {
  constructor({
    puesto = null,
    tipoContrato = null,
    ciudad = null,
    salarioAnualMinimo = null,
    modalidad = null,
  } = {}) {
    this.puesto = puesto;                 // Puesto de trabajo buscado               // Sector
    this.tipoContrato = tipoContrato;     // Tipo de contrato
    this.ciudad = ciudad;                 // Ciudad       // Lista de requisitos
    this.salarioAnualMinimo = salarioAnualMinimo;  // Salario anual mínimo
    this.modalidad = modalidad;           // Modalidad de trabajo (presencial, remoto, etc.)
  }

  // Puedes añadir métodos si es necesario
  // Por ejemplo, para imprimir el objeto como string
  toString() {
    return JSON.stringify(this, null, 2);
  }
}