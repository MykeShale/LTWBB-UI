import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, phone, amount, frequency, paymentMethod, category, message, anonymous } = body;
    
    if (!name || !email || !phone || !amount || !frequency || !paymentMethod) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate phone number (Kenya format)
    const phoneRegex = /^(\+254|0)?[7][0-9]{8}$/;
    const cleanPhone = phone.replace(/\s/g, '').replace('+', '');
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: 'Invalid phone number. Use format: 07XX XXX XXX or +2547XX XXX XXX' },
        { status: 400 }
      );
    }

    // Validate amount
    if (isNaN(amount) || amount < 100) {
      return NextResponse.json(
        { error: 'Minimum donation amount is KES 100' },
        { status: 400 }
      );
    }

    // Format phone number for M-Pesa (ensure it starts with 254)
    const formattedPhone = cleanPhone.startsWith('0') ? `254${cleanPhone.substring(1)}` : cleanPhone;

    // Here you would typically:
    // 1. Process payment with M-Pesa Daraja API
    // 2. Save donation record to database (Supabase)
    // 3. Send receipt to donor via email and SMS
    // 4. Update fundraising totals
    // 5. Send notification to admin
    
    console.log('Donation submission:', {
      name: anonymous ? 'Anonymous' : name,
      email,
      phone: formattedPhone,
      amount,
      frequency,
      paymentMethod,
      category,
      message,
      anonymous,
      timestamp: new Date().toISOString()
    });

    // M-Pesa Integration Placeholder
    // In production, you would call Safaricom Daraja API here:
    // - STK Push for M-Pesa payments
    // - C2B for paybill/till number callbacks
    // - Transaction status checking
    
    if (paymentMethod === 'mpesa') {
      // Simulate M-Pesa STK Push
      console.log('Initiating M-Pesa STK Push to:', formattedPhone);
      // await initiateSTKPush(formattedPhone, amount, 'LTWBB Donation');
    }

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000));

    return NextResponse.json(
      { 
        message: 'Thank you for your donation! Your contribution will help us continue providing mental health support to communities across Kenya.',
        transactionId: `LTWBB${Date.now()}`,
        amount,
        paymentMethod,
        nextSteps: paymentMethod === 'mpesa' 
          ? 'Check your phone for the M-Pesa STK Push prompt to complete the payment.'
          : 'Please complete the bank transfer using the provided details.',
        success: true 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Donation processing error:', error);
    return NextResponse.json(
      { error: 'Payment processing failed. Please try again.' },
      { status: 500 }
    );
  }
}
