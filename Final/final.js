'use strict';
let listaProductos = [
    {nombre:"Guantes de Boxeo", 
    descripcion:"Guantes de boxeo rojo de 12 onzas", 
    precio: 22000,
    imagen:"imagenes/guantes.jpg",
    categoria:"boxeo",
    id: 1,
    cont: 0,
    total: 0 },

    {nombre:"Rueda abdominal", 
    descripcion:"Rueda obdominal doble", 
    precio: 4000,
    imagen:"imagenes/rueda.jpg",
    categoria:"gimnasio",
    id: 2,
    cont: 0,
    total: 0 },

    {nombre:"Pantalon", 
    descripcion:"Pantalon largo negro ", 
    precio: 12000,
    imagen:"imagenes/pantalon.jpg",
    categoria:"prendas",
    id: 3,
    cont: 0,
    total: 0 },

    {nombre:"Remera", 
    descripcion:"Remera negra manga larga para hombres", 
    precio: 10000,
    imagen:"imagenes/remera.jpg",
    categoria:"prendas",
    id: 4,
    cont: 0,
    total: 0 },

    {nombre:"Bucal", 
    descripcion:"Bucal protector amarillo", 
    precio: 4000,
    imagen:"imagenes/bucal.jpg",
    categoria:"boxeo",
    id: 5,
    cont: 0,
    total: 0 },

    {nombre:"Mancuerna", 
    descripcion:"Mancuerna de 10 kg", 
    precio: 11000,
    imagen:"imagenes/mancuerna.jpg",
    categoria:"gimnasio",
    id: 6,
    cont: 0,
    total: 0 },

    {nombre:"Zapatilla", 
    descripcion:"Zapatilla de correr para hombres", 
    precio: 21000,
    imagen:"imagenes/zapatillas.jpg",
    categoria:"prendas",
    id: 7,
    cont: 0,
    total: 0 },

    {nombre:"Cabezal", 
    descripcion:"Cabezal protector rojo", 
    precio: 16000,
    imagen:"imagenes/cabezal.jpg",
    categoria:"boxeo",
    id: 8,
    cont: 0,
    total: 0 },

    {nombre:"Colchoneta", 
    descripcion:"Colchoneta verde para yoga", 
    precio: 5000,
    imagen:"imagenes/colchoneta.jpg",
    categoria:"gimnasio",
    id: 9,
    cont: 0,
    total: 0 }
];
let carrito = JSON.parse(localStorage.getItem('compra')) || [];
const contenedorProductos = document.getElementById('contenedorproductos');
const contenedorCarrito = document.getElementById('contenedorcarrito');
const verCarrito = document.getElementById('carrito');
const ventanaCarrito = document.getElementById('ventanacarrito');
const contadorCarrito = document.createElement('p');
contadorCarrito.classList.add('contadorcarrito');
const contadorPrecio = document.createElement('p');
contadorPrecio.classList.add('contadorprecio');
let compraTotal = 0;
let contador = 0;
const filtro = document.getElementById('filtro');
const todo = document.createElement('p');
const boxeo = document.createElement('p');
const gimnasio = document.createElement('p');
const prendas = document.createElement('p');
todo.textContent = 'Todo';
boxeo.textContent = 'Boxeo';
gimnasio.textContent = 'Gimnasio';
prendas.textContent = 'Ropa';
filtro.appendChild(todo);
filtro.appendChild(boxeo);
filtro.appendChild(gimnasio);
filtro.appendChild(prendas);
const detalle = document.createElement('div');
detalle.classList.add('detalle');
const cerrarDetalle=document.createElement('p');
cerrarDetalle.classList.add('cerrardetalle');
const degradado = document.createElement('div');
degradado.classList.add('degradado');
todo.addEventListener('click', ()=>{
    contenedorProductos.textContent = '';
    listaProductos.forEach((productos)=>{
        categoria(productos);
    });
});
const banner = document.getElementById('banner');
const cerrarBanner = document.createElement('p');
cerrarBanner.classList.add('cerrarbanner');
const publicidad = document.createElement('div');
const degradadoBanner = document.createElement('div');
degradadoBanner.classList.add('degradadobanner');

boxeo.addEventListener('click',()=>{
    contenedorProductos.textContent = '';
    listaProductos.forEach((productos)=>{
        if(productos.categoria === 'boxeo'){
            categoria(productos);
        }
    });
    contenedorBanner();
    setTimeout(desaparecerBanner, 10000);
});
gimnasio.addEventListener('click',()=>{
    contenedorProductos.textContent = '';
    listaProductos.forEach((productos)=>{
        if(productos.categoria === 'gimnasio'){
            categoria(productos);
        }
    });
    contenedorBanner();
    setTimeout(desaparecerBanner, 10000);
});
prendas.addEventListener('click',()=>{
    contenedorProductos.textContent = '';
    listaProductos.forEach((productos)=>{
        if(productos.categoria === 'prendas'){
            categoria(productos);
        }
    });
    contenedorBanner();
    setTimeout(desaparecerBanner, 10000);
});
cerrarBanner.addEventListener('click',()=>{
    banner.style.display='none';
    degradadoBanner.style.display='none';
})
const desaparecerBanner =()=>{
    banner.style.display='none';
    degradadoBanner.style.display='none';
}
document.addEventListener('keydown',()=>{
    degradado.style.display='none';
    detalle.style.display='none';
    cerrarDetalle.style.display='none';
    ventanaCarrito.style.display='none';
    degradado.style.display='none';
})
const contenedorBanner = ()=>{
    cerrarBanner.textContent='X';
    banner.appendChild(cerrarBanner);
    banner.appendChild(publicidad);
    contenedor.appendChild(degradadoBanner);
    contenedor.appendChild(banner);
    banner.style.display='block';
    degradadoBanner.style.display='block';
}
const categoria = (productos)=>{
    let div = document.createElement('div');
    let img = document.createElement('img');
    let nom = document.createElement('h3');
    let des = document.createElement('p');
    let cat = document.createElement('p');
    let pre = document.createElement('p');
    let agregar = document.createElement('button');
    agregar.classList.add('agregar');
    div.classList.add('divproductos');
    img.src = productos.imagen;
    nom.textContent = productos.nombre;
    des.textContent = productos.descripcion;
    cat.textContent = 'Categoria: '+productos.categoria;
    pre.textContent = '$'+productos.precio;
    agregar.textContent = 'Agregar al carrito'
    div.appendChild(img);
    div.appendChild(nom);
    div.appendChild(des);
    div.appendChild(cat);
    div.appendChild(pre);
    div.appendChild(agregar);
    contenedorProductos.appendChild(div);
    img.addEventListener('click',()=>{ 
        console.log(cerrarDetalle);
        cerrarDetalle.textContent = 'X'
        degradado.appendChild(detalle);
        contenedor.appendChild(degradado);
        contenedor.appendChild(cerrarDetalle);
        detalle.appendChild(img.cloneNode(true));
        degradado.style.display='block';
        detalle.style.display='block';
        cerrarDetalle.style.display='block';
        });
    cerrarDetalle.addEventListener('click',()=>{
        degradado.style.display='none';
        detalle.style.display='none';
        cerrarDetalle.style.display='none';
    });
    agregar.addEventListener('click', ()=>{
        carrito.push({
            nombre: productos.nombre, 
            descripcion: productos.descripcion, 
            precio: productos.precio,
            imagen: productos.imagen,
            categoria: productos.categoria,
            id: productos.id,
            cont: productos.cont,
            total: productos.total
        });
        carrito.forEach((elementos)=>{
            if(elementos.id == productos.id){
                if(elementos.cont == 0){
                    elementos.cont++;
                }else{
                    carrito.pop({
                        nombre: productos.nombre, 
                        descripcion: productos.descripcion, 
                        precio: productos.precio,
                        imagen: productos.imagen,
                        categoria: productos.categoria,
                        id: productos.id,
                        cont: productos.cont,
                        total: productos.total
                    });
                    elementos.cont++;
                }
            }
        });
        contador=JSON.parse(localStorage.getItem('contador'));
        contador++;
        compraTotal=JSON.parse(localStorage.getItem('compraTotal'));
        compraTotal+= productos.precio;
        contenedorCarrito.appendChild(contadorCarrito);
        contenedorCarrito.appendChild(contadorPrecio);
        localStorage.setItem('contador', JSON.stringify(contador));
        contadorCarrito.textContent = contador;
        localStorage.setItem('compraTotal', JSON.stringify(compraTotal));
        contadorPrecio.textContent = 'Total: $'+JSON.parse(localStorage.getItem('compraTotal'));
        local();
    });
    agregar.addEventListener('mouseover',()=>{
        agregar.style.backgroundColor= 'rgba(109, 109, 109, 0.548)';
    });
    agregar.addEventListener('mouseout',()=>{
        agregar.style.backgroundColor= 'black';
    });
}
let comprar = document.createElement('button');
const carritoCompra = ()=>{
    ventanaCarrito.textContent = '';
    const headerCarrito = document.createElement('div');
    headerCarrito.classList.add('headercarrito');
    let listaDeCompra = document.createElement('h1');
    let cerrarCarrito = document.createElement('p');
    listaDeCompra.textContent = 'Lista de compra';
    cerrarCarrito.textContent = 'X';
    headerCarrito.appendChild(listaDeCompra);
    headerCarrito.appendChild(cerrarCarrito);
    ventanaCarrito.appendChild(headerCarrito);
    carrito.forEach((productos)=>{
        let cuerpoCarrito = document.createElement('div');
        cuerpoCarrito.classList.add('cuerpocarrito');
        let imgCarrito = document.createElement('img');
        let nomCarrito = document.createElement('h3');
        let precioCarrito = document.createElement('p');
        let total = document.createElement('p');
        let cantidad = document.createElement('p');
        let restar = document.createElement('p');
        restar.classList.add('restar');
        let sumar = document.createElement('p');
        sumar.classList.add('sumar');
        let eliminar = document.createElement('span');
        productos.total = productos.cont*productos.precio;
        imgCarrito.src = productos.imagen;
        nomCarrito.textContent = productos.nombre;
        precioCarrito.textContent = 'C/U: $'+productos.precio;
        total.textContent= 'Total: $'+productos.total
        cantidad.textContent = 'Cantidad: '+productos.cont;
        restar.textContent = '-';
        sumar.textContent = '+';
        eliminar.textContent = 'Eliminar';
        eliminar.classList.add('eliminar');
        cuerpoCarrito.appendChild(imgCarrito);
        cuerpoCarrito.appendChild(nomCarrito);
        cuerpoCarrito.appendChild(precioCarrito);
        cuerpoCarrito.appendChild(total);
        cuerpoCarrito.appendChild(cantidad);
        cuerpoCarrito.appendChild(restar);
        cuerpoCarrito.appendChild(sumar);
        cuerpoCarrito.appendChild(eliminar);
        ventanaCarrito.appendChild(cuerpoCarrito);
        eliminar.addEventListener('click',()=>{
            eliminarProducto(productos.id);
        });
        restar.addEventListener('click', ()=>{
            if(productos.cont != 1){
                productos.cont--;
            }
            carritoCompra();
            local();
        });
        sumar.addEventListener('click', ()=>{
            productos.cont++;
            carritoCompra();
            local();
        });
    });
    let footerCarrito = document.createElement('div');
    footerCarrito.classList.add('footercarrito');
    let precioTotal = document.createElement('p');
    precioTotal.textContent = 'Total a pagar: $'+ JSON.parse(localStorage.getItem('compraTotal'));
    comprar.textContent = 'Comprar';
    footerCarrito.appendChild(precioTotal);
    footerCarrito.appendChild(comprar);
    ventanaCarrito.appendChild(footerCarrito);
    cerrarCarrito.addEventListener('click',()=>{
        ventanaCarrito.style.display = 'none';
        degradado.style.display='none';
    });
    ventanaCarrito.style.display = 'block'
    cerrarCarrito.addEventListener('mouseover',()=>{
        cerrarCarrito.style.color='red';
    })
    cerrarCarrito.addEventListener('mouseout',()=>{
        cerrarCarrito.style.color='white';
    })
}
verCarrito.addEventListener('click', ()=>{
    degradado.appendChild(ventanaCarrito);
    contenedor.appendChild(degradado);
    degradado.style.display='block';
    carritoCompra();
});
const eliminarProducto = (id) =>{
    for(let i in carrito){
        if(carrito[i].id === id){
            let posicion = carrito.indexOf(carrito[i]);
            carrito.splice(posicion,1);
        }
    }
    local();
    carritoCompra();
}
listaProductos.forEach((productos)=>{
    categoria(productos);
    banner.style.display='none';
    degradado.style.display='none';
});
const local = () =>{
    localStorage.setItem('compra', JSON.stringify(carrito));
}
const contenedor = document.getElementById('contenedor');
const check = document.createElement('div');
const finalizar = document.createElement('button');
const cancelar = document.createElement('button');
comprar.addEventListener('click', ()=>{
    check.textContent='';
    check.style.display='block';
    const formHeader = document.createElement('div');
    check.classList.add('check');
    const form = document.createElement('div');
    form.classList.add('form');
    const formFooter = document.createElement('div');
    const tituloHeader = document.createElement('h2');
    const nombreLabel = document.createElement('label');
    const nombre = document.createElement('input');
    const telefonoLabel = document.createElement('label');
    const telefono = document.createElement('input');
    const emailLabel = document.createElement('label');
    const email = document.createElement('input');
    const lugarLabel = document.createElement('label');
    const lugar = document.createElement('input');
    const fechaLabel = document.createElement('label');
    const fecha = document.createElement('input');
    const efectivo = document.createElement('input');
    const debito = document.createElement('input');
    const credito= document.createElement('input');
    nombreLabel.textContent='Nombre';
    nombre.type='text';
    telefonoLabel.textContent='Telefono';
    telefono.type ='text';
    emailLabel.textContent='Dirección de correo';
    email.type='text';
    email.placeholder='ejemplo@gmail.com';
    lugarLabel.textContent='Direccion';
    lugar.type='text';
    fechaLabel.textContent='fecha de entrega';
    fecha.type='text';
    fecha.placeholder= '22/07/2024'
    efectivo.type = 'radio';
    efectivo.value= 'efectivo';
    efectivo.name = 'efectivo';
    efectivo.textContent='efectivo';
    debito.type = 'radio';
    debito.value= 'debito';
    debito.name = 'debito';
    debito.textContent='debito';
    credito.type = 'radio';
    credito.value= 'credito';
    credito.name = 'credito';
    credito.textContent='credito';
    cancelar.textContent='Cancelar';
    finalizar.textContent='Finalizar compra';
    tituloHeader.textContent='Checkout'
    formHeader.appendChild(tituloHeader);
    form.appendChild(nombreLabel);
    form.appendChild(nombre);
    form.appendChild(telefonoLabel);
    form.appendChild(telefono);
    form.appendChild(emailLabel);
    form.appendChild(email);
    form.appendChild(lugarLabel);
    form.appendChild(lugar);
    form.appendChild(fechaLabel);
    form.appendChild(fecha);
    form.appendChild(efectivo);
    form.appendChild(debito);
    form.appendChild(credito);
    formFooter.appendChild(cancelar);
    formFooter.appendChild(finalizar);
    check.appendChild(formHeader);
    check.appendChild(form);
    check.appendChild(formFooter);
    contenedor.appendChild(check);
    ventanaCarrito.style.display='none';
});
cancelar.addEventListener('click', ()=>{
    check.style.display='none';
    degradado.style.display='none';
});
finalizar.addEventListener('click', ()=>{
    check.style.display='none';
    degradado.style.display='none';
});