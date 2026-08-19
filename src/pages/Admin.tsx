import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { useLanguage } from '../context/LanguageContext';
import { Product, ProductCategory, PriceMode } from '../types';
import { 
  Plus, 
  Edit3, 
  Trash2, 
  RotateCcw, 
  Save, 
  X, 
  Check, 
  DollarSign, 
  HelpCircle, 
  ShieldAlert, 
  Layers,
  Tag
} from 'lucide-react';

export const Admin: React.FC = () => {
  const { products, addProduct, updateProduct, deleteProduct, resetCatalog } = useShop();
  const { t, language } = useLanguage();

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form Fields State
  const [namePt, setNamePt] = useState('');
  const [nameEn, setNameEn] = useState('');
  const [category, setCategory] = useState<ProductCategory>('ac');
  const [priceMode, setPriceMode] = useState<PriceMode>('exposed');
  const [price, setPrice] = useState<string>('35000');
  const [image, setImage] = useState('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80');
  const [descPt, setDescPt] = useState('');
  const [descEn, setDescEn] = useState('');
  const [specsPt, setSpecsPt] = useState('');
  const [specsEn, setSpecsEn] = useState('');
  const [inStock, setInStock] = useState(true);
  const [featured, setFeatured] = useState(false);

  const resetForm = () => {
    setNamePt('');
    setNameEn('');
    setCategory('ac');
    setPriceMode('exposed');
    setPrice('35000');
    setImage('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80');
    setDescPt('');
    setDescEn('');
    setSpecsPt('');
    setSpecsEn('');
    setInStock(true);
    setFeatured(false);
    setEditingId(null);
    setIsEditing(false);
  };

  const handleOpenAdd = () => {
    resetForm();
    setIsEditing(true);
  };

  const handleOpenEdit = (p: Product) => {
    setEditingId(p.id);
    setNamePt(p.name.pt);
    setNameEn(p.name.en);
    setCategory(p.category);
    setPriceMode(p.priceMode);
    setPrice(p.price !== undefined ? p.price.toString() : '');
    setImage(p.image);
    setDescPt(p.description.pt);
    setDescEn(p.description.en);
    setSpecsPt((p.specs.pt || []).join(', '));
    setSpecsEn((p.specs.en || []).join(', '));
    setInStock(p.inStock);
    setFeatured(!!p.featured);
    setIsEditing(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedSpecsPt = specsPt.split(',').map(s => s.trim()).filter(Boolean);
    const formattedSpecsEn = specsEn.split(',').map(s => s.trim()).filter(Boolean);

    const productPayload = {
      name: {
        pt: namePt || 'Novo Produto',
        en: nameEn || namePt || 'New Product'
      },
      category,
      description: {
        pt: descPt || 'Descrição do produto.',
        en: descEn || descPt || 'Product description.'
      },
      specs: {
        pt: formattedSpecsPt.length ? formattedSpecsPt : ['Alta eficiência', 'Garantia EMFORMA'],
        en: formattedSpecsEn.length ? formattedSpecsEn : ['High efficiency', 'EMFORMA Warranty']
      },
      image: image || 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
      priceMode,
      price: priceMode === 'exposed' ? parseFloat(price) || 0 : undefined,
      inStock,
      featured
    };

    if (editingId) {
      updateProduct({
        ...productPayload,
        id: editingId
      });
    } else {
      addProduct(productPayload);
    }

    resetForm();
  };

  const handleDelete = (id: string) => {
    if (window.confirm(t('admin_confirm_delete'))) {
      deleteProduct(id);
    }
  };

  const formatPrice = (val?: number) => {
    if (val === undefined) return '-';
    return val.toLocaleString('pt-MZ', { minimumFractionDigits: 2 }) + ' MT';
  };

  return (
    <div className="space-y-10 pb-16">
      
      {/* Page Header */}
      <section className="bg-brand-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Área de Administração
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold">{t('admin_title')}</h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            {t('admin_sub')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Action Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Layers className="w-5 h-5 text-brand-blue" />
              Catálogo de Produtos ({products.length} itens)
            </h2>
            <p className="text-xs text-slate-500">
              Altere entre preços explícitos e "Preço sob consulta" em tempo real.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={resetCatalog}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold flex items-center gap-2 transition-colors"
              title="Restaura os produtos padrão de fábrica"
            >
              <RotateCcw className="w-4 h-4 text-slate-500" />
              <span>{t('admin_reset_btn')}</span>
            </button>

            <button
              onClick={handleOpenAdd}
              className="bg-brand-blue hover:bg-brand-blue-dark text-white text-xs font-extrabold px-5 py-2.5 rounded-xl shadow flex items-center gap-2 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>{t('admin_add_product')}</span>
            </button>
          </div>
        </div>

        {/* Create / Edit Form Modal */}
        {isEditing && (
          <div className="bg-white rounded-2xl border-2 border-brand-blue shadow-xl p-6 sm:p-8 space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="text-lg font-extrabold text-brand-navy flex items-center gap-2">
                {editingId ? <Edit3 className="w-5 h-5 text-brand-blue" /> : <Plus className="w-5 h-5 text-brand-blue" />}
                {editingId ? t('admin_edit_product') : t('admin_add_product')}
              </h3>
              <button 
                onClick={resetForm}
                className="text-slate-400 hover:text-slate-700 p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* PRICE MODE SELECTION BLOCK (CORE USER REQUIREMENT) */}
              <div className="bg-amber-50 border-2 border-amber-300 p-5 rounded-2xl space-y-3">
                <label className="block text-sm font-extrabold text-amber-900 flex items-center gap-2">
                  <Tag className="w-4 h-4 text-amber-700" />
                  {t('admin_price_mode_label')}
                </label>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Mode Exposed */}
                  <label 
                    onClick={() => setPriceMode('exposed')}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-start gap-3 ${
                      priceMode === 'exposed'
                        ? 'bg-white border-brand-navy shadow-md ring-2 ring-brand-blue/30'
                        : 'bg-amber-100/50 border-amber-200 hover:bg-white'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="priceMode" 
                      checked={priceMode === 'exposed'}
                      onChange={() => setPriceMode('exposed')}
                      className="mt-1"
                    />
                    <div>
                      <span className="font-bold text-slate-800 text-xs block">{t('admin_mode_exposed')}</span>
                      <span className="text-[11px] text-slate-500">
                        O valor em Meticais (MT) fica visível aos clientes na loja.
                      </span>
                    </div>
                  </label>

                  {/* Mode On Request */}
                  <label 
                    onClick={() => setPriceMode('on_request')}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-start gap-3 ${
                      priceMode === 'on_request'
                        ? 'bg-white border-amber-600 shadow-md ring-2 ring-amber-500/30'
                        : 'bg-amber-100/50 border-amber-200 hover:bg-white'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="priceMode" 
                      checked={priceMode === 'on_request'}
                      onChange={() => setPriceMode('on_request')}
                      className="mt-1"
                    />
                    <div>
                      <span className="font-bold text-amber-900 text-xs block">{t('admin_mode_on_request')}</span>
                      <span className="text-[11px] text-amber-800">
                        O produto exibirá o selo "Preço sob consulta" e botão para cotação.
                      </span>
                    </div>
                  </label>
                </div>

                {/* Price input field if exposed */}
                {priceMode === 'exposed' && (
                  <div className="pt-2">
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      {t('admin_field_price')} *
                    </label>
                    <div className="relative max-w-xs">
                      <DollarSign className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                      <input
                        type="number"
                        required={priceMode === 'exposed'}
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        placeholder="Ex: 45000"
                        className="w-full pl-9 pr-12 py-2.5 rounded-xl border border-slate-300 text-sm font-bold outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                      <span className="absolute right-3 top-2.5 text-xs font-bold text-slate-500">MT</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Product Basic Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t('admin_field_name_pt')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={namePt}
                    onChange={e => setNamePt(e.target.value)}
                    placeholder="Ex: Ar Condicionado Split Inverter 18000 BTU"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t('admin_field_name_en')}
                  </label>
                  <input
                    type="text"
                    value={nameEn}
                    onChange={e => setNameEn(e.target.value)}
                    placeholder="Ex: Split Inverter Air Conditioner 18000 BTU"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t('admin_field_category')}
                  </label>
                  <select
                    value={category}
                    onChange={e => setCategory(e.target.value as ProductCategory)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-brand-blue bg-white"
                  >
                    <option value="ac">Ar Condicionado (AC)</option>
                    <option value="refrigeration">Refrigeração Comercial/Industrial</option>
                    <option value="ventilation">Ventilação & Exaustão</option>
                    <option value="parts">Peças & Compressores</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t('admin_field_image')}
                  </label>
                  <input
                    type="text"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
              </div>

              {/* Descriptions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t('admin_field_desc_pt')}
                  </label>
                  <textarea
                    rows={3}
                    value={descPt}
                    onChange={e => setDescPt(e.target.value)}
                    placeholder="Resumo do produto em português..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t('admin_field_desc_en')}
                  </label>
                  <textarea
                    rows={3}
                    value={descEn}
                    onChange={e => setDescEn(e.target.value)}
                    placeholder="Product summary in English..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t('admin_field_specs_pt')}
                  </label>
                  <input
                    type="text"
                    value={specsPt}
                    onChange={e => setSpecsPt(e.target.value)}
                    placeholder="Capacidade: 18.000 BTU, Gás R32, Classe A++"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t('admin_field_specs_en')}
                  </label>
                  <input
                    type="text"
                    value={specsEn}
                    onChange={e => setSpecsEn(e.target.value)}
                    placeholder="Capacity: 18,000 BTU, R32 Gas, Class A++"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
              </div>

              {/* Toggles */}
              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700">
                  <input
                    type="checkbox"
                    checked={inStock}
                    onChange={e => setInStock(e.target.checked)}
                    className="rounded text-brand-blue focus:ring-brand-blue w-4 h-4"
                  />
                  <span>{t('admin_field_stock')}</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-700">
                  <input
                    type="checkbox"
                    checked={featured}
                    onChange={e => setFeatured(e.target.checked)}
                    className="rounded text-brand-blue focus:ring-brand-blue w-4 h-4"
                  />
                  <span>Destacar na Página Inicial</span>
                </label>
              </div>

              {/* Submit / Cancel Buttons */}
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-5 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  {t('admin_cancel_btn')}
                </button>

                <button
                  type="submit"
                  className="bg-brand-navy hover:bg-brand-navy-dark text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow flex items-center gap-2 transition-colors"
                >
                  <Save className="w-4 h-4 text-brand-blue-light" />
                  <span>{t('admin_save_btn')}</span>
                </button>
              </div>

            </form>
          </div>
        )}

        {/* Existing Products Table */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-extrabold uppercase text-slate-500 tracking-wider">
                  <th className="p-4">Produto</th>
                  <th className="p-4">Categoria</th>
                  <th className="p-4">Modo de Preço</th>
                  <th className="p-4">Preço (MT)</th>
                  <th className="p-4">Estado</th>
                  <th className="p-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {products.map(p => {
                  const name = p.name[language] || p.name.pt;
                  const isExposed = p.priceMode === 'exposed';

                  return (
                    <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 font-bold text-slate-800">
                        <div className="flex items-center gap-3">
                          <img src={p.image} alt={name} className="w-10 h-10 object-cover rounded-lg border border-slate-100 shrink-0" />
                          <span className="line-clamp-1">{name}</span>
                        </div>
                      </td>

                      <td className="p-4 uppercase text-slate-500 font-semibold">{p.category}</td>

                      <td className="p-4">
                        {isExposed ? (
                          <span className="inline-block px-2.5 py-1 text-[11px] font-extrabold bg-blue-50 text-brand-navy rounded-md border border-blue-200">
                            Exposto
                          </span>
                        ) : (
                          <span className="inline-block px-2.5 py-1 text-[11px] font-extrabold bg-amber-100 text-amber-800 rounded-md border border-amber-200">
                            Sob Consulta
                          </span>
                        )}
                      </td>

                      <td className="p-4 font-extrabold text-slate-900">
                        {isExposed ? formatPrice(p.price) : <span className="text-slate-400 font-normal">Sob Consulta</span>}
                      </td>

                      <td className="p-4">
                        {p.inStock ? (
                          <span className="text-emerald-600 font-bold flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" /> Stock
                          </span>
                        ) : (
                          <span className="text-rose-500 font-bold">Sem Stock</span>
                        )}
                      </td>

                      <td className="p-4 text-right space-x-2">
                        <button
                          onClick={() => handleOpenEdit(p)}
                          className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors inline-flex items-center gap-1 font-bold"
                          title="Editar"
                        >
                          <Edit3 className="w-3.5 h-3.5 text-brand-blue" />
                          <span>Editar</span>
                        </button>

                        <button
                          onClick={() => handleDelete(p.id)}
                          className="p-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg transition-colors inline-flex items-center gap-1 font-bold"
                          title="Eliminar"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </section>

    </div>
  );
};
