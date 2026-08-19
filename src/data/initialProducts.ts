import { Product } from '../types';

export const initialProducts: Product[] = [
  {
    id: 'prod-1',
    name: {
      pt: 'Ar Condicionado Split Inverter High-Wall 12.000 BTU',
      en: 'Split Inverter Wall-Mounted Air Conditioner 12,000 BTU'
    },
    category: 'ac',
    description: {
      pt: 'Sistema mural de climatização residencial e de escritório com refrigerante R32, filtro antibacteriano e consumo de energia reduzido até 60%.',
      en: 'Wall-mounted residential and office climate system featuring R32 refrigerant, anti-bacterial filter, and up to 60% energy savings.'
    },
    specs: {
      pt: ['Capacidade: 12.000 BTU', 'Gás Refrigerante: R32 Ecológico', 'Eficiência: Classe A+++', 'Filtro HD Anti-bacteriano', 'Garantia: 3 Anos'],
      en: ['Capacity: 12,000 BTU', 'Refrigerant: Eco R32', 'Efficiency: Class A+++', 'HD Anti-bacterial Filter', 'Warranty: 3 Years']
    },
    image: './images/Instalancao-de-AC-Maputo.jpg',
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
      pt: 'Câmara de conservação de frescos e congelados para supermercados, talhos e restaurantes com painéis isolantes de poliuretano 100mm.',
      en: 'Cold storage room for fresh and frozen goods in supermarkets, butcher shops, and restaurants with 100mm PUR polyurethane panels.'
    },
    specs: {
      pt: ['Dimensões: 300x300x240cm', 'Painéis: 100mm PUR Densidade High', 'Unidade Condensadora Silenciosa', 'Porta Pivotante com Fechadura de Emergência'],
      en: ['Dimensions: 300x300x240cm', 'Panels: 100mm PUR High Density', 'Silent Condensing Unit', 'Hinged Door with Safety Lock']
    },
    image: './images/conte-com-a-emforma.jpg',
    priceMode: 'on_request',
    inStock: true,
    featured: true
  },
  {
    id: 'prod-3',
    name: {
      pt: 'Ar Condicionado Cassete 4 Vias Teto 36.000 BTU',
      en: '4-Way Ceiling Cassette Air Conditioner 36,000 BTU'
    },
    category: 'ac',
    description: {
      pt: 'Ideal para escritórios comerciais, auditórios e restaurantes. Distribuição de ar a 360º com bomba de condensados incorporada.',
      en: 'Ideal for commercial offices, auditoriums, and restaurants. 360º airflow distribution with built-in condensate pump.'
    },
    specs: {
      pt: ['Capacidade: 36.000 BTU', 'Alimentação: Trifásico 380V / 50Hz', 'Fluxo de ar 360º Silencioso', 'Painel Ultrafino de Embutir'],
      en: ['Capacity: 36,000 BTU', 'Power: Three-phase 380V / 50Hz', '360º Silent Airflow', 'Ultra-slim Flush Panel']
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
      pt: 'Ar Condicionado Chão-Teto Inverter 48.000 BTU',
      en: 'Floor-Ceiling Heavy Duty Inverter AC 48,000 BTU'
    },
    category: 'ac',
    description: {
      pt: 'Equipamento flexível para fixação no chão ou no teto, projetado para grandes áreas de loja e salas comerciais.',
      en: 'Flexible unit for floor or ceiling mounting, engineered for large commercial retail spaces and halls.'
    },
    specs: {
      pt: ['Capacidade: 48.000 BTU', 'Alcance do fluxo de ar: até 15 metros', 'Controlo remoto digital', 'Rearranque automático pós-corte'],
      en: ['Capacity: 48,000 BTU', 'Airflow throw: up to 15 meters', 'Digital remote controller', 'Auto restart after power outage']
    },
    image: './images/escolher-emforma.jpg',
    priceMode: 'exposed',
    price: 115000,
    inStock: true,
    featured: false
  },
  {
    id: 'prod-5',
    name: {
      pt: 'Cortina de Ar Comercial 1.5 Metros',
      en: 'Commercial Air Curtain 1.5 Meters'
    },
    category: 'ventilation',
    description: {
      pt: 'Barreira térmica eficaz contra insetos, poeira e perda de ar condicionado nas entradas de lojas e estabelecimentos.',
      en: 'Effective thermal barrier against insects, dust, and air conditioning loss at retail store entrances.'
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
    id: 'prod-6',
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
    id: 'prod-7',
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
    id: 'prod-8',
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
    id: 'prod-9',
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
