const products = {
    alimentos: {
        elaborados: [
            {
                id: 'ae1',
                name: 'Bowl de Salmón y Quinoa',
                price: 8500,
                description: 'Salmón fresco, quinoa, palta, edamame y salsa de sésamo.',
                image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
                category: 'elaborados'
            },
            {
                id: 'ae2',
                name: 'Wrap de Pollo Pesto',
                price: 6200,
                description: 'Pollo grillado, mozzarella, rúcula y pesto casero en masa integral.',
                image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80',
                category: 'elaborados'
            },
            {
                id: 'ae3',
                name: 'Ensalada Caesar Kale',
                price: 5900,
                description: 'Kale masajeado, crutones integrales, parmesano y aderezo light.',
                image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80',
                category: 'elaborados'
            },
            {
                id: 'ae4',
                name: 'Tostón de Palta & Huevo',
                price: 4500,
                description: 'Pan de masa madre, palta pisada, huevo poché y semillas de zapallo.',
                image: 'https://images.unsplash.com/photo-1525351484163-7529414395d8?auto=format&fit=crop&w=800&q=80',
                category: 'elaborados'
            },
            {
                id: 'ae5',
                name: 'Buddha Bowl Vegano',
                price: 7800,
                description: 'Hummus, falafel, remolacha asada, espinaca y dressing de tahini.',
                image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
                category: 'elaborados'
            }
        ],
        envasados: [
            {
                id: 'an1',
                name: 'Granola Proteica (500g)',
                price: 4500,
                description: 'Avena, miel, nueces y whey protein sabor vainilla.',
                image: 'https://images.unsplash.com/photo-1517643336717-b76921319246?auto=format&fit=crop&w=800&q=80',
                category: 'envasados'
            },
            {
                id: 'an2',
                name: 'Mantequilla de Maní Natural',
                price: 3800,
                description: '100% maní tostado, sin azúcar ni aceites añadidos.',
                image: 'https://images.unsplash.com/photo-1518105658661-d7904499d08e?auto=format&fit=crop&w=800&q=80',
                category: 'envasados'
            },
            {
                id: 'an3',
                name: 'Mix de Frutos Secos (250g)',
                price: 3200,
                description: 'Almendras, nueces, anacardos y pasas de uva.',
                image: 'https://images.unsplash.com/photo-1596910547037-846b7dd4cdd8?auto=format&fit=crop&w=800&q=80',
                category: 'envasados'
            },
            {
                id: 'an4',
                name: 'Barritas Energéticas (x6)',
                price: 4200,
                description: 'Dátiles, cacao y almendras. Sin azúcar agregada.',
                image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80',
                category: 'envasados'
            }
        ]
    },
    suplementos: [
        {
            id: 's1',
            name: 'Whey Protein Isolate',
            price: 28000,
            description: 'Proteína aislada de rápida absorción. 25g de proteína por scoop.',
            image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=800&q=80',
            category: 'suplementos'
        },
        {
            id: 's2',
            name: 'Creatina Monohidrato',
            price: 15000,
            description: 'Potencia y fuerza muscular. 100% pura y micronizada.',
            image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=800&q=80',
            category: 'suplementos'
        },
        {
            id: 's3',
            name: 'Multivitamínico Sport',
            price: 12000,
            description: 'Complejo de vitaminas y minerales para alto rendimiento.',
            image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
            category: 'suplementos'
        },
        {
            id: 's4',
            name: 'Pre-Workout Energy',
            price: 18500,
            description: 'Energía explosiva y enfoque. Con Cafeína y Beta-Alanina.',
            image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=800&q=80', // Reusing placeholder style
            category: 'suplementos'
        },
        {
            id: 's5',
            name: 'Omega 3 Fish Oil',
            price: 11000,
            description: 'Salud cardiovascular y articular. Alta concentración de EPA/DHA.',
            image: 'https://images.unsplash.com/photo-1550505193-42e74d156b50?auto=format&fit=crop&w=800&q=80',
            category: 'suplementos'
        }
    ]
};
