interface WompiConfig {
  publicKey: string;
  environment: 'test' | 'production';
}

interface PaymentIntentData {
  amount_in_cents: number;
  currency: string;
  reference: string;
  customer_email: string;
  redirect_url?: string;
}

interface PaymentSource {
  type: 'CARD' | 'NEQUI' | 'PSE';
  token?: string;
  customer_email: string;
  acceptance_token: string;
  user_legal_id_type?: string;
  user_legal_id?: string;
}

export class WompiClient {
  private config: WompiConfig;
  private baseUrl: string;

  constructor(config: WompiConfig) {
    this.config = config;
    this.baseUrl =
      config.environment === 'production'
        ? 'https://api.wompi.co/v1'
        : 'https://api-sandbox.wompi.co/v1';
  }

  async createAcceptanceToken(): Promise<string> {
    const response = await fetch(`${this.baseUrl}/merchants/${this.config.publicKey}`);
    const merchant = await response.json();
    
    const acceptanceResponse = await fetch(
      `${this.baseUrl}/merchants/${this.config.publicKey}/acceptance_token`
    );
    const acceptance = await acceptanceResponse.json();
    
    return acceptance.data.acceptance_token;
  }

  async createPaymentSource(data: PaymentSource): Promise<any> {
    const response = await fetch(`${this.baseUrl}/payment_sources`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.config.publicKey}`,
      },
      body: JSON.stringify(data),
    });

    return response.json();
  }

  async createTransaction(data: {
    amount_in_cents: number;
    currency: string;
    signature: string;
    customer_email: string;
    reference: string;
    payment_source_id: string;
  }): Promise<any> {
    const response = await fetch(`${this.baseUrl}/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.WOMPI_PRIVATE_KEY}`,
      },
      body: JSON.stringify(data),
    });

    return response.json();
  }

  createSignature(data: {
    reference: string;
    amount_in_cents: number;
    currency: string;
  }): string {
    const crypto = require('crypto');
    const concatenated = `${data.reference}${data.amount_in_cents}${data.currency}${process.env.WOMPI_INTEGRITY_SECRET}`;
    return crypto.createHash('sha256').update(concatenated).digest('hex');
  }

  async getTransaction(id: string): Promise<any> {
    const response = await fetch(`${this.baseUrl}/transactions/${id}`, {
      headers: {
        'Authorization': `Bearer ${process.env.WOMPI_PRIVATE_KEY}`,
      },
    });

    return response.json();
  }
}

export const wompiClient = new WompiClient({
  publicKey: process.env.NEXT_PUBLIC_WOMPI_PUBLIC_KEY!,
  environment: process.env.NODE_ENV === 'production' ? 'production' : 'test',
});