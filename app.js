
const ingresos = [
    new Ingreso('Salario', 2100),
    new Ingreso('Venta coche', 1500)
];

const egresos = [
    new Egreso('Renta', 900),
    new Egreso('Ropa', 400)
];


const totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
};

const totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
};

const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2
    });
};

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', {
        style: 'percent',
        minimumFractionDigits: 2
    });
};


const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos();

    console.log(formatoMoneda(presupuesto));
    console.log(formatoPorcentaje(porcentajeEgreso));
    console.log(formatoMoneda(totalIngresos()));
    console.log(formatoMoneda(totalEgresos()));
};
