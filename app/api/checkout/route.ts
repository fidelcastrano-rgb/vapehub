import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Helper to create the transporter lazily
function getMailTransporter() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      address,
      items,
      subtotal,
      shippingMethod,
      shippingFee,
      grandTotal,
      paymentMethod,
      paymentDetails,
    } = body;

    // Validate inputs
    if (!name || !email || !phone || !address || !items || items.length === 0) {
      return NextResponse.json({ error: 'Missing required order details.' }, { status: 400 });
    }

    // Build Order Items HTML Table
    const itemsTableHtml = items
      .map(
        (item: any) => `
      <tr style="border-bottom: 1px solid #eee;">
        <td style="padding: 10px; text-align: left; font-family: sans-serif; font-size: 14px; color: #333;">
          <strong>${item.name}</strong><br/>
          <span style="font-size: 12px; color: #666;">Variant: ${item.variant}</span>
        </td>
        <td style="padding: 10px; text-align: center; font-family: sans-serif; font-size: 14px; color: #333;">${item.qty}</td>
        <td style="padding: 10px; text-align: right; font-family: sans-serif; font-size: 14px; color: #333;">£${item.price.toFixed(2)}</td>
        <td style="padding: 10px; text-align: right; font-family: sans-serif; font-size: 14px; color: #333; font-weight: bold;">£${(item.price * item.qty).toFixed(2)}</td>
      </tr>
    `
      )
      .join('');

    // Format specific payment detail text
    let paymentDetailsHtml = '';
    if (paymentMethod === 'Crypto') {
      paymentDetailsHtml = `
        <p><strong>Cryptocurrency Coin:</strong> ${paymentDetails.cryptoCoin || 'N/A'}</p>
        <p><strong>Transaction ID (TXID) / Sender Address:</strong> <code>${paymentDetails.txid || 'N/A'}</code></p>
      `;
    } else if (paymentMethod === 'Gift Card') {
      paymentDetailsHtml = `
        <p><strong>Gift Card Brand:</strong> ${paymentDetails.giftCardBrand || 'N/A'}</p>
        <p><strong>Card Code (Claim Code):</strong> <code>${paymentDetails.giftCardCode || 'N/A'}</code></p>
        <p><strong>Card PIN / Extra Details:</strong> ${paymentDetails.giftCardPin || 'N/A'}</p>
        <p><strong>Denomination Amount:</strong> £${paymentDetails.giftCardAmount || 'N/A'}</p>
      `;
    } else if (paymentMethod === 'Bank Transfer') {
      paymentDetailsHtml = `
        <p><strong>Payment Reference Used:</strong> <code>${paymentDetails.bankReference || 'N/A'}</code></p>
        <p><strong>Bank Confirmation Name:</strong> ${paymentDetails.bankSenderName || 'N/A'}</p>
      `;
    }

    // Construct ADMIN Notification HTML
    const adminEmailHtml = `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; font-family: Arial, sans-serif; background-color: #ffffff; color: #333;">
        <div style="background-color: #111111; padding: 15px; border-radius: 6px 6px 0 0; text-align: center; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px; letter-spacing: 1px; color: #ff3b30;">[THE VAPE HUB UK] NEW ORDER RECEIVED</h2>
          <p style="margin: 5px 0 0 0; font-size: 12px; color: #aaa;">Status: Pending Processing (Discreet Dispatch Required)</p>
        </div>
        
        <div style="padding: 20px;">
          <h3 style="color: #ff3b30; border-bottom: 2px solid #eee; padding-bottom: 5px;">Customer Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Discreet Shipping Address:</strong></p>
          <p style="background-color: #f9f9f9; padding: 12px; border-radius: 4px; border-left: 4px solid #ff3b30; font-family: monospace; white-space: pre-line; margin-top: 5px;">${address}</p>

          <h3 style="color: #ff3b30; border-bottom: 2px solid #eee; padding-bottom: 5px; margin-top: 30px;">Payment Details</h3>
          <p><strong>Payment Type:</strong> <span style="background-color: #ffeaeb; color: #ff3b30; padding: 3px 8px; border-radius: 4px; font-weight: bold;">${paymentMethod}</span></p>
          <div style="background-color: #fcfcfc; border: 1px solid #eee; padding: 15px; border-radius: 6px; margin-top: 10px;">
            ${paymentDetailsHtml}
          </div>

          <h3 style="color: #ff3b30; border-bottom: 2px solid #eee; padding-bottom: 5px; margin-top: 30px;">Order Summary</h3>
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <thead>
              <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                <th style="padding: 10px; text-align: left; font-size: 13px; color: #555;">Item</th>
                <th style="padding: 10px; text-align: center; font-size: 13px; color: #555;">Qty</th>
                <th style="padding: 10px; text-align: right; font-size: 13px; color: #555;">Price</th>
                <th style="padding: 10px; text-align: right; font-size: 13px; color: #555;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${itemsTableHtml}
            </tbody>
          </table>

          <div style="margin-top: 20px; border-top: 2px solid #eee; padding-top: 15px;">
            <table style="width: 100%; text-align: right;">
              <tr>
                <td style="padding: 4px 0; color: #666; font-size: 14px;">Subtotal:</td>
                <td style="padding: 4px 0; font-weight: bold; width: 120px; font-size: 14px;">£${subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td style="padding: 4px 0; color: #666; font-size: 14px;">Shipping (${shippingMethod}):</td>
                <td style="padding: 4px 0; font-weight: bold; font-size: 14px;">£${shippingFee.toFixed(2)}</td>
              </tr>
              <tr style="font-size: 18px; color: #ff3b30;">
                <td style="padding: 8px 0; font-weight: bold; border-top: 1px solid #ddd;">Grand Total:</td>
                <td style="padding: 8px 0; font-weight: bold; border-top: 1px solid #ddd;">£${grandTotal.toFixed(2)}</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #fff9e6; border: 1px solid #ffeeba; border-radius: 6px; padding: 15px; margin-top: 30px; font-size: 13px; color: #856404; line-height: 1.5;">
            <strong>⚠️ Dispatch Protocol:</strong> Sells contain classifications subject to restricted vape guidelines. Pack discreetly using blank white-label packaging. Never include invoices or branding inside the package. Ensure next day dispatch.
          </div>
        </div>
      </div>
    `;

    // Construct CLIENT Confirmation HTML
    const clientEmailHtml = `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; font-family: Arial, sans-serif; background-color: #ffffff; color: #333;">
        <div style="background-color: #03a9f4; padding: 20px; border-radius: 6px 6px 0 0; text-align: center; color: #ffffff;">
          <h2 style="margin: 0; font-size: 22px; font-weight: bold;">THE VAPE HUB UK</h2>
          <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">Order Confirmation &amp; Discreet Shipping Receipt</p>
        </div>
        
        <div style="padding: 20px;">
          <p style="font-size: 16px; line-height: 1.5;">Hello <strong>${name}</strong>,</p>
          <p style="font-size: 14px; line-height: 1.5; color: #555;">
            Thank you for shopping at <strong>The Vape Hub UK</strong>. We have received your order details and payment submission. Your privacy is our highest priority, so your package is already being processed under our <strong>strict discreet shipping protocols</strong> (no branding, no labels showing contents, plain packaging).
          </p>

          <div style="background-color: #e3f2fd; border-left: 4px solid #03a9f4; padding: 12px; border-radius: 4px; margin: 20px 0; font-size: 13px; color: #0d47a1; line-height: 1.5;">
            <strong>🛡️ Privacy Guarantee:</strong> Your bank/payment description will be registered under generic household terms. The courier box will be entirely blank, and next day courier dispatch is being scheduled.
          </div>

          <h3 style="color: #03a9f4; border-bottom: 2px solid #eee; padding-bottom: 5px;">Order Information</h3>
          <p style="font-size: 14px;"><strong>Payment Method Selected:</strong> ${paymentMethod}</p>
          <p style="font-size: 14px;"><strong>Delivery Method:</strong> ${shippingMethod}</p>
          
          <h4 style="color: #333; margin-top: 20px; margin-bottom: 5px;">Discreet Shipping Address:</h4>
          <p style="background-color: #f9f9f9; padding: 12px; border-radius: 4px; font-family: monospace; font-size: 13px; color: #555; white-space: pre-line; border: 1px solid #eee;">${address}</p>

          <h3 style="color: #03a9f4; border-bottom: 2px solid #eee; padding-bottom: 5px; margin-top: 30px;">Items Ordered</h3>
          <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
            <thead>
              <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                <th style="padding: 10px; text-align: left; font-size: 13px; color: #555;">Item</th>
                <th style="padding: 10px; text-align: center; font-size: 13px; color: #555;">Qty</th>
                <th style="padding: 10px; text-align: right; font-size: 13px; color: #555;">Price</th>
                <th style="padding: 10px; text-align: right; font-size: 13px; color: #555;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${itemsTableHtml}
            </tbody>
          </table>

          <div style="margin-top: 20px; border-top: 2px solid #eee; padding-top: 15px;">
            <table style="width: 100%; text-align: right;">
              <tr>
                <td style="padding: 4px 0; color: #666; font-size: 14px;">Subtotal:</td>
                <td style="padding: 4px 0; font-weight: bold; width: 120px; font-size: 14px;">£${subtotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td style="padding: 4px 0; color: #666; font-size: 14px;">Shipping:</td>
                <td style="padding: 4px 0; font-weight: bold; font-size: 14px;">£${shippingFee.toFixed(2)}</td>
              </tr>
              <tr style="font-size: 18px; color: #03a9f4;">
                <td style="padding: 8px 0; font-weight: bold; border-top: 1px solid #ddd;">Grand Total:</td>
                <td style="padding: 8px 0; font-weight: bold; border-top: 1px solid #ddd;">£${grandTotal.toFixed(2)}</td>
              </tr>
            </table>
          </div>

          <div style="margin-top: 30px; text-align: center; border-t: 1px solid #eee; padding-top: 20px;">
            <p style="font-size: 13px; color: #888; margin-bottom: 15px;">If you have any questions or would like to send payment receipts directly to our dispatch crew:</p>
            <div style="display: inline-block;">
              <a href="https://wa.me/447341056054" target="_blank" style="background-color: #25d366; color: #ffffff; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px; margin-right: 10px;">Chat on WhatsApp</a>
              <a href="mailto:sales@thevapehub.co.uk" style="background-color: #333333; color: #ffffff; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px;">Email Support</a>
            </div>
          </div>
        </div>
        
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 0 0 6px 6px; text-align: center; font-size: 11px; color: #777; border-top: 1px solid #eee;">
          &copy; ${new Date().getFullYear()} The Vape Hub UK. Fully verified, discreetly shipped.
        </div>
      </div>
    `;

    // Attempt to send real emails via transporter
    const transporter = getMailTransporter();
    let emailSent = false;
    let transportError = '';

    if (transporter) {
      try {
        const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER;
        const adminEmail = process.env.ADMIN_EMAIL || 'sales@thevapehub.co.uk';

        // Send to Admin
        await transporter.sendMail({
          from: `"The Vape Hub UK Orders" <${fromEmail}>`,
          to: adminEmail,
          subject: `[Vape Hub Order] New request from ${name} - £${grandTotal.toFixed(2)}`,
          html: adminEmailHtml,
        });

        // Send to Client
        await transporter.sendMail({
          from: `"The Vape Hub UK" <${fromEmail}>`,
          to: email,
          subject: `Your Order Confirmation [The Vape Hub UK] - £${grandTotal.toFixed(2)}`,
          html: clientEmailHtml,
        });

        emailSent = true;
      } catch (err: any) {
        transportError = err.message || String(err);
        console.error('Mail transport error:', err);
      }
    }

    // Return response indicating status. If nodemailer wasn't configured,
    // we clearly denote simulated state so the UI can preview the exact emails.
    return NextResponse.json({
      success: true,
      emailSent,
      simulation: !transporter,
      transportError,
      recipientEmails: {
        admin: process.env.ADMIN_EMAIL || 'sales@thevapehub.co.uk',
        client: email,
      },
      emails: {
        admin: {
          subject: `[Vape Hub Order] New request from ${name} - £${grandTotal.toFixed(2)}`,
          html: adminEmailHtml,
        },
        client: {
          subject: `Your Order Confirmation [The Vape Hub UK] - £${grandTotal.toFixed(2)}`,
          html: clientEmailHtml,
        },
      },
    });
  } catch (error: any) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: error.message || 'Internal server error.' }, { status: 500 });
  }
}
