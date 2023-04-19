function ordenarPorPropiedad(arr, propiedad) {
    return arr.sort((a, b) => a[propiedad] - b[propiedad]);
  }

  
  const personas = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'María', edad: 25 },
    { nombre: 'Pedro', edad: 40 },
  ];
  
  const personasOrdenadasPorEdad = ordenarPorPropiedad(personas, 'edad');
  
  console.log(personasOrdenadasPorEdad);
