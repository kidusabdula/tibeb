import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  const { payment_intent_id, status } = await request.json();

  // Update transaction status
  const { data: transaction, error: transactionError } = await supabase
    .from('transactions')
    .update({ status })
    .eq('stripe_payment_intent_id', payment_intent_id)
    .select()
    .single();

  if (transactionError) return NextResponse.json({ error: transactionError.message }, { status: 500 });

  // Update order status based on transaction status
  const orderStatus = status === 'succeeded' ? 'processing' : 'failed';
  const { error: orderError } = await supabase
    .from('orders')
    .update({ status: orderStatus, updated_at: new Date() })
    .eq('id', transaction.order_id);

  if (orderError) return NextResponse.json({ error: orderError.message }, { status: 500 });

  return NextResponse.json({ success: true });
}
