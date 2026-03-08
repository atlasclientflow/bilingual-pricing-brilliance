// Simple PDF generator using browser print functionality
// (jspdf/html2canvas removed to avoid heavy dependencies)

interface Service { id: string; name: string; price: number; }

export const generateQuotePdf = (
  selectedServices: string[],
  customerInfo: { name: string; email: string; phone: string; company: string; notes: string },
  services: Service[],
  total: number,
  t: (en: string, ar: string) => string,
  isRtl: boolean
) => {
  const selected = services.filter(s => selectedServices.includes(s.id));
  
  const content = `
    <html>
    <head><title>Quote - Ahmed Mo Kireldin</title>
    <style>
      body { font-family: ${isRtl ? 'Cairo' : 'Inter'}, sans-serif; direction: ${isRtl ? 'rtl' : 'ltr'}; padding: 40px; }
      h1 { color: #4e54c8; } 
      table { width: 100%; border-collapse: collapse; margin: 20px 0; }
      th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
      th { background: #4e54c8; color: white; }
      .total { font-size: 1.5em; color: #ff6b6b; font-weight: bold; }
    </style></head>
    <body>
      <h1>${t("Professional Quote", "عرض سعر احترافي")}</h1>
      <p><strong>${t("Date", "التاريخ")}:</strong> ${new Date().toLocaleDateString()}</p>
      <p><strong>${t("Client", "العميل")}:</strong> ${customerInfo.name}</p>
      <p><strong>${t("Email", "البريد")}:</strong> ${customerInfo.email}</p>
      ${customerInfo.company ? `<p><strong>${t("Company", "الشركة")}:</strong> ${customerInfo.company}</p>` : ''}
      <table>
        <thead><tr><th>${t("Service", "الخدمة")}</th><th>${t("Price", "السعر")}</th></tr></thead>
        <tbody>
          ${selected.map(s => `<tr><td>${s.name}</td><td>$${s.price}</td></tr>`).join('')}
        </tbody>
      </table>
      <p class="total">${t("Total", "المجموع")}: $${total}</p>
      ${customerInfo.notes ? `<p><strong>${t("Notes", "ملاحظات")}:</strong> ${customerInfo.notes}</p>` : ''}
      <hr/>
      <p>Ahmed Mo Kireldin | ahmedmokireldin@gmail.com | +201004101309</p>
    </body></html>
  `;

  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.print();
  }
};
