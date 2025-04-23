import { supabase } from '../../../../lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const body = await request.json();

    const { data, error } = await supabase
    .from("LANDING")
    .insert([
        {
            image: body.image,
        },
    ])

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data, { status: 201 });
}
