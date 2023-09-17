'use strict';
let listaProductos = [
    {"nombre":"Guantes de Boxeo", 
    "descripcion":"Guantes de boxeo rojo de 12 onzas", 
    "precio": 22000,
    "imagen":"imagenes/guantes.jpg",
    "categoria":"boxeo" },

    {"nombre":"Rueda abdominal", 
    "descripcion":"Rueda obdominal doble", 
    "precio": 4000,
    "imagen":"imagenes/rueda.jpg",
    "categoria":"gimnasio" },

    {"nombre":"Pantalon", 
    "descripcion":"Pantalon largo negro ", 
    "precio": 12000,
    "imagen":"imagenes/pantalon.jpg",
    "categoria":"prendas" },

    {"nombre":"Remera", 
    "descripcion":"Remera negra manga larga para hombres", 
    "precio": 10000,
    "imagen":"imagenes/remera.jpg",
    "categoria":"prendas" },

    {"nombre":"Bucal", 
    "descripcion":"Bucal protector amarillo", 
    "precio": 4000,
    "imagen":"imagenes/bucal.jpg",
    "categoria":"boxeo" },

    {"nombre":"Mancuerna", 
    "descripcion":"Mancuerna de 10 kg", 
    "precio": 11000,
    "imagen":"imagenes/mancuerna.jpg",
    "categoria":"gimnasio" },

    {"nombre":"Zapatilla", 
    "descripcion":"Zapatilla de correr para hombres", 
    "precio": 21000,
    "imagen":"imagenes/zapatillas.jpg",
    "categoria":"prendas" },

    {"nombre":"Cabezal", 
    "descripcion":"Cabezal protector rojo", 
    "precio": 16000,
    "imagen":"imagenes/cabezal.jpg",
    "categoria":"boxeo" },

    {"nombre":"Colchoneta", 
    "descripcion":"Colchoneta verde para yoga", 
    "precio": 5000,
    "imagen":"imagenes/colchoneta.jpg",
    "categoria":"gimnasio" }
]
const contenedor = document.getElementById('contenedor');
const contCarrito = document.querySelector('#contenedorcarrito');
let cont=1;
let box=0, rueda=0, pantalon=0,remera=0, bucal=0, mancuerna=0, zapa=0,cabezal=0,colchoneta=0;
let suma=0;
let resta=0;
let contador = document.createElement('p');
contador.classList.add('contador');
let precio = document.createElement('p');
precio.classList.add('precio');
let contPrecio = document.createElement('div');
contPrecio.classList.add('contprecio')
let proVentana = document.createElement('div');
proVentana.classList.add('proventana');
/*let numbox = document.createElement('p');
let numrueda = document.createElement('p');*/
for(let i in listaProductos){
    let div = document.createElement('div');
    let img = document.createElement('img');
    let nom = document.createElement('h3');
    let des = document.createElement('p');
    let cat = document.createElement('p');
    let pre = document.createElement('p');
    let boton = document.createElement('button');
    boton.classList.add('agregar');
    let boton2 = document.createElement('button');
    let boton3 = document.createElement('button');
    img.src = listaProductos[i].imagen;
    nom.textContent = listaProductos[i].nombre;
    des.textContent = listaProductos[i].descripcion;
    cat.textContent = 'Categoria: '+listaProductos[i].categoria;
    pre.textContent = '$'+listaProductos[i].precio;
    boton3.textContent = 'Detalle del producto';
    boton.textContent = 'Agregar al carrito';
    boton2.textContent = 'Eliminar del carrito';
    div.classList.add('productos')
    div.appendChild(img);
    div.appendChild(nom);
    div.appendChild(des);
    div.appendChild(cat);
    div.appendChild(pre);
    div.appendChild(boton3);
    div.appendChild(boton);
    div.appendChild(boton2);
    contenedor.appendChild(div);
    boton.addEventListener('click', (e) =>{
        suma += listaProductos[i].precio;
        precio.textContent = 'Total: $'+suma;
        if(suma <=0){
            contador.textContent = 0;
            cont=1;
            suma=0
        }else{
            contador.textContent = cont++;
        }
        contPrecio.appendChild(contador);
        contPrecio.appendChild(precio);
        contCarrito.appendChild(contPrecio);
        ventana.appendChild(proVentana);
        
        switch(listaProductos[i]){
            case listaProductos[0]:
                box++
                /*numbox.textContent= box;
                proVentana.appendChild(numbox);*/
                if(box == 1 ){
                proVentana.appendChild(img.cloneNode(true));
                proVentana.appendChild(nom.cloneNode(true));
                }
                break;
            case listaProductos[1]:
                rueda++
                /*numrueda.textContent= rueda;
                proVentana.appendChild(numrueda);*/
                if(rueda == 1 ){
                proVentana.appendChild(img.cloneNode(true));
                proVentana.appendChild(nom.cloneNode(true));
                }
                break;
            case listaProductos[2]:
                pantalon++
                if(pantalon == 1 ){
                proVentana.appendChild(img.cloneNode(true));
                proVentana.appendChild(nom.cloneNode(true));
                }
                break;
            case listaProductos[3]:
                remera++
                if(remera == 1 ){
                proVentana.appendChild(img.cloneNode(true));
                proVentana.appendChild(nom.cloneNode(true));
                }
                break;
            case listaProductos[4]:
                bucal++
                if(bucal == 1 ){
                proVentana.appendChild(img.cloneNode(true));
                proVentana.appendChild(nom.cloneNode(true));
                }
                break;
            case listaProductos[5]:
                mancuerna++
                if(mancuerna == 1 ){
                proVentana.appendChild(img.cloneNode(true));
                proVentana.appendChild(nom.cloneNode(true));
                }
                break;
            case listaProductos[6]:
                zapa++
                if(zapa == 1 ){
                proVentana.appendChild(img.cloneNode(true));
                proVentana.appendChild(nom.cloneNode(true));
                }
                break;
            case listaProductos[7]:
                cabezal++
                if(cabezal == 1 ){
                proVentana.appendChild(img.cloneNode(true));
                proVentana.appendChild(nom.cloneNode(true));
                }
                break;
            case listaProductos[8]:
                colchoneta++
                if(colchoneta == 1 ){
                proVentana.appendChild(img.cloneNode(true));
                proVentana.appendChild(nom.cloneNode(true));
                }
                break;
            default:
        }
        proVentana.style.display='block';
    })
    boton2.addEventListener('click', (f) =>{
        suma -= listaProductos[i].precio;
        if(suma <= 0){
            precio.textContent = 'Total: $'+0;
            contador.textContent = 0;
            cont=1;
            suma=0;

        }else{
            precio.textContent = 'Total: $'+suma;
            contador.textContent = cont--;
        }
        contPrecio.appendChild(contador);
        contPrecio.appendChild(precio);
        contCarrito.appendChild(contPrecio);
    })

    let degradado = document.createElement('div');
    degradado.classList.add('degradado');
    let detalle = document.createElement('div');
    detalle.classList.add('detalle');
    contenedor.appendChild(degradado);
    degradado.appendChild(detalle);
    let proDetalle = document.createElement('div');
    proDetalle.classList.add('prodetalle');
    detalle.appendChild(proDetalle);
    proDetalle.appendChild(img.cloneNode(true));
    proDetalle.appendChild(nom.cloneNode(true));
    proDetalle.appendChild(des.cloneNode(true));
    proDetalle.appendChild(cat.cloneNode(true));
    proDetalle.appendChild(pre.cloneNode(true));
    boton3.addEventListener('click', (g) =>{
        detalle.style.display='block';
        degradado.style.display='block';
    })
    let botonCerrar2 = document.createElement('button');
    botonCerrar2.classList.add('cerrar2');
    botonCerrar2.textContent='X';
    detalle.appendChild(botonCerrar2);
    botonCerrar2.addEventListener('click', (j)=>{
        detalle.style.display='none';
        degradado.style.display='none';
    })
}
let compra = document.querySelector('#contenedorcarrito');
let header = document.querySelector('#header');
let ventana = document.createElement('div');
ventana.classList.add('ventana');

header.appendChild(ventana);

compra.addEventListener('click', (h) =>{
    ventana.style.display='block';
})
let botonCerrar = document.createElement('button');
botonCerrar.classList.add('cerrar');
botonCerrar.textContent='X';
ventana.appendChild(botonCerrar);
botonCerrar.addEventListener('click', (k) =>{
    ventana.style.display='none';
})