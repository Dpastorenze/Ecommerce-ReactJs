export const productos = [
  {
    id: 1,
    nombre: "Cepillo Dosificador",
    precio: 1500,
    categoria: "Bazar",
    stock: 5,
    descripcion: "Para todo tipo de lavados , con doble pico de repuesto",

    img: "https://d22fxaf9t8d39k.cloudfront.net/7752bf051218ad763eda56a186a2e4ddc7d2f727f51623907bba6124028f5953196406.jpg",
  },
  {
    id: 2,
    nombre: "Antisalpicada",
    precio: 13000,
    categoria: "Bazar",
    stock: 5,
    descripcion: "Queres lucir impecable luego de una comida , este es tu producto ",
    img: "https://emprendedoresnews.com/wp-content/uploads/2016/08/272987c3ac400cc1ef7e598ce052adb4.jpg.webp",
  },
  {
    id: 3,
    nombre: "Soporte Para Picar ",
    precio: 8900,
    categoria: "Bazar",
    stock: 9,
    descripcion: "No te cortes mas mantene tus huellas digitales intactas",
    img: "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/e1a766af-0926-4930-ba50-519b78f861bd.9e516ff0f9ffe47cdd4438396e44fa0d.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
  },
  {
    id: 4,
    nombre: "Navaja Picadora Huevos/Queso",
    precio: 9900,
    categoria: "Bazar",
    stock: 5,
    descripcion: "Solo tiene buena pinta ",
    img: "https://acdn.mitiendanube.com/stores/001/066/581/products/img-59431-2940c15c5d8457e24315943235088136-640-0.webp",
  },
  {
    id: 5,
    nombre: "Rompehuevos",
    precio: 1999,
    categoria: "Bazar",
    stock: 9,
    descripcion: "Perfeccion si existe .. ",
    img: "https://images.ssstatic.com/cascador-de-huevos-67-310079610_400x400.jpg",
  },
  {
    id: 6,
    nombre: "Cierra Empanadas",
    precio: 5999,
    categoria: "Gastronomia",
    stock: 9,
    descripcion: "Facilidad y productividad si que los hay ... ",
    img: "https://http2.mlstatic.com/D_NQ_NP_704575-MLU72211797381_102023-O.webp",
  },
  {
    id: 7,
    nombre: "Remera Audioritmica",
    precio: 44000,
    categoria: "Indumentaria",
    stock: 10,
    descripcion: "Luci impecable en tu proxima jodita .. ",
    img: "https://scontent.fepa11-1.fna.fbcdn.net/v/t1.18169-9/12647400_10153408850067883_7720962405439666659_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeED9pSy7pKjevt_MKdXmulRI0fd8z1gEz4jR93zPWATPq4_wlvJjc1FgmwnxP1s-bY&_nc_ohc=G2G4Yq2oR3EQ7kNvgEpb84G&_nc_ht=scontent.fepa11-1.fna&oh=00_AYCFtUATkOnaUf1p0SGNzAiVMOmX5zb1mcxCm6H-ZJCC6g&oe=6689B9D4",
  },
  {
    id: 8,
    nombre: "Panturats",
    precio: 14900,
    categoria: "Indumentaria",
    stock: 5,
    descripcion: "Para tu suegra o ese amigo que hace honores , son de piel de camello forradas ",
    img: "https://laverdadnoticias.com/img/2020/02/29/zapatos_de_rata_insolito.jpg?__scale=w:718,h:452,t:2,c:ecefef,q:95",
  },
];
export const getProducts = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(productos);
    }, 2000);
  });
};
export const getProductsByCategory = (category) => {
  return new Promise((res) => {
    const productosFiltrados = productos.filter(
      (prod) => prod.categoria === category
    );
    setTimeout(() => {
      res(productosFiltrados);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((res) => {
    const productoFiltrado = productos.find((prod) => prod.id === parseInt(id));
    setTimeout(() => {
      res(productoFiltrado);
    }, 2000);
  });
};
