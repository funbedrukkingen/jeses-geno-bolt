import { useState } from 'react';
import { Code2, Copy, Check, X } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations } from '@/i18n/translations';

export function EmbedButton() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : '';
  const embedUrl = currentUrl + '?embed=1';
  const iframeCode = `<iframe src="${embedUrl}" width="100%" height="800" style="border:none; max-width:1200px;" title="Generations of Grace — The Genealogy of Jesus"></iframe>`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(iframeCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = iframeCode;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gold text-white shadow-lg flex items-center justify-center hover:bg-gold-dark transition-colors duration-300 group"
        aria-label={t.embedButtonTitle}
        title={t.embedButtonTitle}
      >
        <Code2 className="w-5 h-5" />
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" />

          <div
            className="relative bg-parchment-light rounded-lg shadow-2xl max-w-lg w-full border border-gold/30 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-ink-muted hover:text-ink hover:bg-gold/10 transition-colors z-10"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-2">
                <Code2 className="w-6 h-6 text-gold" strokeWidth={1.5} />
                <h3 className="font-serif text-2xl font-semibold text-ink">
                  {t.embedTitle}
                </h3>
              </div>

              <p className="text-sm text-ink-light leading-relaxed mb-6">
                {t.embedDescription}
              </p>

              {/* Code block */}
              <div className="relative">
                <pre className="bg-ink text-parchment text-xs md:text-sm rounded-lg p-4 pr-12 overflow-x-auto font-mono leading-relaxed">
                  {iframeCode}
                </pre>
                <button
                  onClick={handleCopy}
                  className="absolute top-3 right-3 w-9 h-9 rounded-md bg-parchment/10 hover:bg-parchment/20 flex items-center justify-center text-parchment transition-colors"
                  aria-label={t.embedCopy}
                >
                  {copied ? <Check className="w-4 h-4 text-olive-light" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {copied && (
                <p className="text-xs text-olive-dark mt-3 flex items-center gap-1.5 animate-fade-in">
                  <Check className="w-3.5 h-3.5" />
                  {t.embedCopied}
                </p>
              )}

              {/* Tips */}
              <div className="mt-6 pt-6 border-t border-gold/15">
                <h4 className="font-serif text-sm font-semibold text-ink mb-3">
                  {t.embedTipsTitle}
                </h4>
                <ul className="space-y-2 text-xs text-ink-light">
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">•</span>
                    {t.embedTip1}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">•</span>
                    {t.embedTip2}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold mt-0.5">•</span>
                    {t.embedTip3}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
