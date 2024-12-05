const myObjects = [
    {
        id: 1,
        name: "Procesador Intel Core i9-13900K",
        description: "Procesador de 24 núcleos y 32 hilos con tecnología Intel Turbo Boost Max 3.0.",
        category: "procesadores",
        price: 659.99,
        image: "https://http2.mlstatic.com/D_NQ_NP_770256-MLA52252657806_112022-O.webp"
    },
    {
        id: 2,
        name: "Tarjeta gráfica NVIDIA GeForce RTX 4090",
        description: "Tarjeta gráfica de alta gama con 24 GB de VRAM GDDR6X.",
        category: "tarjetas graficas",
        price: 1599.99,
        image: "https://m.media-amazon.com/images/I/51EL-FaK4XL._AC_SL1002_.jpg"
    },
    {
        id: 3,
        name: "Placa base ASUS ROG Maximus Z790 Hero",
        description: "Placa base ATX con socket LGA1700 para procesadores Intel de 12ª y 13ª generación.",
        category: "placas base",
        price: 599.99,
        image: "https://dlcdnwebimgs.asus.com/gain/A3777166-EF70-4D33-915B-EC65CF77CAE5/w717/h525"
    },
    {
        id: 4,
        name: "Memoria RAM DDR5 32GB (2x16GB) Corsair Vengeance RGB Pro",
        description: "Kit de memoria RAM de alta velocidad con RGB personalizable.",
        category: "memorias ram",
        price: 299.99,
        image: "https://http2.mlstatic.com/D_NQ_NP_851158-MLU74827865221_022024-O.webp"
    },
    {
        id: 5,
        "name": "Disco duro sólido (SSD) Samsung 990 PRO 2TB",
        "description": "SSD NVMe PCIe Gen4x4 de alta velocidad y gran capacidad.",
        "category": "almacenamiento",
        "price": 399.99,
        "image": "https://dcdn.mitiendanube.com/stores/001/818/530/products/am_mesa-de-trabajo-11-1cf72a742e4766534e16879054690504-1024-1024.jpg"
    }
];

export async function getProductsByCategory(categoryId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(myObjects.filter((product) => product.category === categoryId));
        }, 1000);
    });
};

export async function getAllCategories() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const categories = [...new Set(myObjects.map((product) => product.category))];
            resolve(categories);
        }, 1000);
    });
}

export async function getProductById(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(myObjects.find((product) => product.id === parseInt(id, 10)));
        }, 1000);
    });
};

export async function getAllProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(myObjects);
        }, 1000);
    });
};