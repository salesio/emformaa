import { Product } from '../types';

export const initialProducts: Product[] = [
  {
    id: 'prod-1',
    name: {
      pt: 'Ar Condicionado Split Inverter 12.000 BTU',
      en: 'Split Inverter Air Conditioner 12,000 BTU'
    },
    category: 'ac',
    description: {
      pt: 'Sistema de climatização de elevada eficiência energética R32 com tecnologia Inverter e operação ultra-silenciosa.',
      en: 'High efficiency R32 climate system featuring Inverter technology and ultra-quiet operation.'
    },
    specs: {
      pt: ['Capacidade: 12.000 BTU', 'Gás Refrigerante: R32', 'Eficiência: Classe A++', 'Filtro Anti-bacteriano'],
      en: ['Capacity: 12,000 BTU', 'Refrigerant: R32', 'Efficiency: Class A++', 'Anti-bacterial Filter']
    },
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    priceMode: 'exposed',
    price: 34500,
    inStock: true,
    featured: true
  },
  {
    id: 'prod-2',
    name: {
      pt: 'Câmara Frigorífica Comercial 3x3m (Modular)',
      en: 'Modular Commercial Cold Room 3x3m'
    },
    category: 'refrigeration',
    description: {
      pt: 'Câmara de conservação de frescos e congelados para supermercados, talhos e restaurantes com painéis isolantes de poliuretano.',
      en: 'Cold storage room for fresh and frozen goods in supermarkets, butcher shops, and restaurants with polyurethane panels.'
    },
    specs: {
      pt: ['Dimensões: 300x300x240cm', 'Painéis: 100mm PUR', 'Unidade Condensadora Silenciosa', 'Porta Pivotante com Fechadura'],
      en: ['Dimensions: 300x300x240cm', 'Panels: 100mm PUR', 'Silent Condensing Unit', 'Hinged Door with Lock']
    },
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    priceMode: 'on_request',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-3',
    name: {
      pt: 'Ar Condicionado Cassete 4 Vias 36.000 BTU',
      en: '4-Way Ceiling Cassette Air Conditioner 36,000 BTU'
    },
    category: 'ac',
    description: {
      pt: 'Ideal para escritórios, salas de reunião e lojas comerciais. Distribuição de ar 360º e bomba de dreno integrada.',
      en: 'Ideal for offices, conference rooms, and commercial retail. 360º air flow and built-in drain pump.'
    },
    specs: {
      pt: ['Capacidade: 36.000 BTU', 'Alimentação: Trifásico 380V', 'Fluxo de ar 360º', 'Controlo Remoto Sem Fios'],
      en: ['Capacity: 36,000 BTU', 'Power: Three-phase 380V', '360º Air Distribution', 'Wireless Remote Controller']
    },
    image: 'https://images.unsplash.com/photo-1631545806085-efb5f7e7fdfd?auto=format&fit=crop&w=800&q=80',
    priceMode: 'exposed',
    price: 89000,
    inStock: true,
    featured: true
  },
  {
    id: 'prod-4',
    name: {
      pt: 'Cortina de Ar Comercial 1.5 Metros',
      en: 'Commercial Air Curtain 1.5 Meters'
    },
    category: 'ventilation',
    description: {
      pt: 'Barreira térmica eficaz contra insetos, poeira e perda de ar frio nas entradas de estabelecimentos comerciais.',
      en: 'Effective thermal barrier against insects, dust, and cold air loss at commercial entrances.'
    },
    specs: {
      pt: ['Largura: 1500mm', 'Velocidade do ar: 11 m/s', 'Baixo Nível Sonoro', 'Controlo Remoto Incluído'],
      en: ['Width: 1500mm', 'Air Speed: 11 m/s', 'Low Noise Level', 'Remote Control Included']
    },
    image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=800&q=80',
    priceMode: 'exposed',
    price: 19500,
    inStock: true,
    featured: false
  },
  {
    id: 'prod-5',
    name: {
      pt: 'Chiller Industrial Água Gelada 50 TR',
      en: '50 TR Industrial Water Chiller'
    },
    category: 'refrigeration',
    description: {
      pt: 'Sistema centralizado de arrefecimento industrial para processos fabris, edifícios comerciais e hospitais.',
      en: 'Centralized industrial cooling system for manufacturing plants, commercial buildings, and medical centers.'
    },
    specs: {
      pt: ['Capacidade: 50 TR (175 kW)', 'Compressor Scroll Tandem', 'Refrigerante Ecológico R410A', 'Painel CLP Microprocessado'],
      en: ['Capacity: 50 TR (175 kW)', 'Tandem Scroll Compressor', 'Eco Refrigerant R410A', 'Microprocessed PLC Panel']
    },
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    priceMode: 'on_request',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-6',
    name: {
      pt: 'Exaustor Centrífugo para Cozinhas Industriais',
      en: 'Centrifugal Exhaust Fan for Commercial Kitchens'
    },
    category: 'ventilation',
    description: {
      pt: 'Exaustão de fumos e gorduras para restaurantes, hotéis e refeitórios industriais. Motor fora do fluxo de ar.',
      en: 'Fume and grease extraction system for restaurants, hotels, and industrial canteens.'
    },
    specs: {
      pt: ['Caudal: 4.500 m³/h', 'Motor IP55 Trifásico', 'Resistente a Altas Temperaturas', 'Turbina Pá Recuada'],
      en: ['Airflow: 4,500 m³/h', 'IP55 3-Phase Motor', 'High Temperature Resistant', 'Backward Curved Impeller']
    },
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    priceMode: 'exposed',
    price: 42000,
    inStock: true,
    featured: false
  },
  {
    id: 'prod-7',
    name: {
      pt: 'Compressor Hermético de Refrigeração 2HP R404A',
      en: '2HP R404A Hermetic Refrigeration Compressor'
    },
    category: 'parts',
    description: {
      pt: 'Compressor de substituição de alta fiabilidade para unidades condensadoras comerciais e balcões frios.',
      en: 'High-reliability replacement compressor for commercial condensing units and display cases.'
    },
    specs: {
      pt: ['Potência: 2 HP', 'Refrigerante: R404A / R507', 'Tensão: 220V 50Hz', 'Aplicação: Média/Baixa Pressão'],
      en: ['Power: 2 HP', 'Refrigerant: R404A / R507', 'Voltage: 220V 50Hz', 'Application: Medium/Low Back Pressure']
    },
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    priceMode: 'exposed',
    price: 26800,
    inStock: true,
    featured: false
  },
  {
    id: 'prod-8',
    name: {
      pt: 'Sistema VRF Central Multizona 14 HP',
      en: '14 HP Multizone Central VRF System'
    },
    category: 'ac',
    description: {
      pt: 'Solução inteligente de fluxo de refrigerante variável para edifícios comerciais de vários andares.',
      en: 'Intelligent variable refrigerant flow solution for multi-story commercial buildings.'
    },
    specs: {
      pt: ['Capacidade: 14 HP (40 kW)', 'Suporta até 24 unidades interiores', 'Inverter DC Total', 'Controlo Centralizado IP'],
      en: ['Capacity: 14 HP (40 kW)', 'Supports up to 24 indoor units', 'Full DC Inverter', 'IP Centralized Control']
    },
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    priceMode: 'on_request',
    inStock: true,
    featured: true
  }
];
