export const OFFICIAL_PHONE = '9686666960';
export const OFFICIAL_PHONE_FORMATTED = '+91 96866 66960';
// Direct calls disabled per user requirement ("dont want to direct call just icons no direct calls only texts")
// We link to WhatsApp text chat instead of tel: protocol
export const OFFICIAL_PHONE_TEXT_URL = `https://wa.me/91${OFFICIAL_PHONE}?text=${encodeURIComponent('Hello HomeLens Team, I need assistance with home loans.')}`;
export const OFFICIAL_PHONE_TEL = OFFICIAL_PHONE_TEXT_URL;

export interface FormSubmissionPayload {
  name?: string;
  phone?: string;
  email?: string;
  loanType?: string;
  loanAmount?: string;
  city?: string;
  bank?: string;
  partnerType?: string;
  message?: string;
  note?: string;
  employment?: string;
  monthlyIncome?: string;
}

export function buildWhatsAppRedirectUrl(payload: FormSubmissionPayload): string {
  let message = `*HOMELENS MORTGAGE INQUIRY*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  if (payload.name) message += `👤 *Applicant:* ${payload.name}\n`;
  if (payload.phone) message += `📞 *Mobile:* ${payload.phone}\n`;
  if (payload.loanType) message += `📋 *Loan Type:* ${payload.loanType}\n`;
  if (payload.loanAmount) message += `💰 *Loan Quantum:* ${payload.loanAmount}\n`;
  if (payload.city) message += `📍 *City:* ${payload.city}\n`;
  if (payload.bank) message += `🏦 *Preferred Bank:* ${payload.bank}\n`;
  if (payload.partnerType) message += `🤝 *Partner Category:* ${payload.partnerType}\n`;
  if (payload.email) message += `✉️ *Email:* ${payload.email}\n`;
  if (payload.employment) message += `💼 *Employment:* ${payload.employment}\n`;
  if (payload.monthlyIncome) message += `💵 *Monthly Income:* ${payload.monthlyIncome}\n`;
  if (payload.message) message += `📝 *Notes:* ${payload.message}\n`;
  if (payload.note && !payload.message) message += `📝 *Notes:* ${payload.note}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `Please review my loan application and connect me with a HomeLens credit manager.`;

  const encoded = encodeURIComponent(message);
  return `https://wa.me/91${OFFICIAL_PHONE}?text=${encoded}`;
}

export function handleFormRedirect(payload: FormSubmissionPayload) {
  const url = buildWhatsAppRedirectUrl(payload);
  // Attempt automatic window redirection
  try {
    const newWindow = window.open(url, '_blank');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = url;
    }
  } catch (err) {
    window.location.href = url;
  }
}

