import React from 'react';
import { useShop } from '../context/ShopContext';
import { useLanguage } from '../context/LanguageContext';
import { X, Trash2, Plus, Minus, Send, Mail, ShoppingBag, AlertCircle } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, clearCart } = useShop();
  const { t, language } = useLanguage();

  if (!isCartOpen) return null;

  const pricedItems = cart.filter(item => item.product.priceMode === 'exposed' && item.product.price);
  const onRequestItems = cart.filter(item => item.product.priceMode === 'on_request');

  const totalPricedAmount = pricedItems.reduce(
    (sum, item) => sum + (item.product.price || 0) * item.quantity,
    0
  );

  const formatPrice = (val: number) => {
    return val.toLocaleString('pt-MZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' MT';
  };

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let message = `*PEDIDO / SOLICITAÇÃO DE COTAÇÃO - EMFORMA*\n\n`;
    message += `Olá! Gostaria de efectuar o seguinte pedido a partir do website:\n\n`;

    cart.forEach((item, index) => {
      const prodName = item.product.name[language] || item.product.name.pt;
      if (item.product.priceMode === 'exposed' && item.product.price) {
        message += `${index + 1}. *${prodName}*\n   Qtd: ${item.quantity} | Preço: ${formatPrice(item.product.price * item.quantity)}\n`;
      } else {
        message += `${index + 1}. *${prodName}*\n   Qtd: ${item.quantity} | *Preço sob consulta*\n`;
      }
    });

    if (totalPricedAmount > 0) {
      message += `\n*Subtotal dos produtos com preço:* ${formatPrice(totalPricedAmount)}`;
    }

    if (onRequestItems.length > 0) {
      message += `\n*Nota:* Inclui ${onRequestItems.length} item(ns) sob consulta de cotação.`;
    }

    message += `\n\nPor favor, confirmem a disponibilidade e procedimentos para o fornecimento em Maputo. Obrigado!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/258821622018?text=${encoded}`, '_blank');
  };

  const handleEmailCheckout = () => {
    if (cart.length === 0) return;

    let body = `Solicitação de Cotação e Encomenda - EMFORMA%0D%0A%0D%0A`;
    cart.forEach((item, index) => {
      const prodName = item.product.name[language] || item.product.name.pt;
      if (item.product.priceMode === 'exposed' && item.product.price) {
        body += `${index + 1}. ${prodName} (Qtd: ${item.quantity}) - ${formatPrice(item.product.price * item.quantity)}%0D%0A`;
      } else {
        body += `${index + 1}. ${prodName} (Qtd: ${item.quantity}) - Preço sob consulta%0D%0A`;
      }
    });

    body += `%0D%0ASubtotal Estimado: ${formatPrice(totalPricedAmount)}%0D%0A`;
    window.location.href = `mailto:climatizacao@emformaa.co.mz?subject=Pedido%20de%20Cotação%20-%20EMFORMA&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Overlay Backdrop */}
      <div 
        onClick={toggleCart}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-5 bg-brand-navy text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-brand-blue-light" />
              <div>
                <h2 className="text-lg font-bold">{t('cart_title')}</h2>
                <p className="text-xs text-slate-300">{cart.length} item(ns) selecionado(s)</p>
              </div>
            </div>
            <button 
              onClick={toggleCart}
              className="p-1.5 hover:bg-slate-700/60 rounded-full text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400 space-y-3">
                <ShoppingBag className="w-16 h-16 stroke-1 text-slate-300" />
                <p className="text-base font-semibold text-slate-600">{t('cart_empty')}</p>
                <p className="text-xs text-slate-400 max-w-xs">
                  Navegue pela nossa loja para adicionar equipamentos de ar condicionado ou refrigeração.
                </p>
              </div>
            ) : (
              cart.map((item) => {
                const name = item.product.name[language] || item.product.name.pt;
                const isExposed = item.product.priceMode === 'exposed' && item.product.price !== undefined;

                return (
                  <div 
                    key={item.product.id}
                    className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex gap-4 items-center"
                  >
                    <img 
                      src={item.product.image} 
                      alt={name} 
                      className="w-16 h-16 object-cover rounded-lg border border-slate-100 shrink-0" 
                    />

                    <div className="flex-1 min-w-0 space-y-1">
                      <h4 className="text-sm font-bold text-slate-800 truncate">{name}</h4>
                      
                      {/* Price Tag */}
                      <div>
                        {isExposed ? (
                          <span className="text-sm font-extrabold text-brand-navy">
                            {formatPrice(item.product.price! * item.quantity)}
                          </span>
                        ) : (
                          <span className="inline-block px-2 py-0.5 text-xs font-bold bg-amber-100 text-amber-800 rounded-md">
                            {t('price_on_request')}
                          </span>
                        )}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 pt-1">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold px-2">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Trash Remove */}
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-2 text-slate-400 hover:text-rose-600 transition-colors"
                      title={t('cart_item_remove')}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {cart.length > 0 && (
            <div className="p-5 bg-white border-t border-slate-200 space-y-4">
              {/* Summary details */}
              <div className="space-y-1.5 text-sm">
                {totalPricedAmount > 0 && (
                  <div className="flex justify-between items-center text-slate-700">
                    <span>{t('cart_total_priced')}</span>
                    <span className="text-lg font-extrabold text-brand-navy">{formatPrice(totalPricedAmount)}</span>
                  </div>
                )}

                {onRequestItems.length > 0 && (
                  <div className="flex items-center gap-2 text-xs bg-amber-50 text-amber-800 p-2.5 rounded-lg border border-amber-200">
                    <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
                    <span>{t('cart_items_on_request')} {onRequestItems.length} item(ns)</span>
                  </div>
                )}
              </div>

              {/* Checkout Action Buttons */}
              <div className="space-y-2 pt-1">
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('cart_checkout_whatsapp')}</span>
                </button>

                <button
                  onClick={handleEmailCheckout}
                  className="w-full bg-brand-navy hover:bg-brand-navy-dark text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t('cart_checkout_email')}</span>
                </button>
              </div>

              <div className="text-center pt-1">
                <button
                  onClick={clearCart}
                  className="text-xs text-slate-400 hover:text-rose-600 underline transition-colors"
                >
                  Limpar Carrinho
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
