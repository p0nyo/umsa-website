import { supabase } from '../../../../lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
    const body = await request.json();

    const { id, name, role, image, socials } = body;

    const { data, error } = await supabase
    .from("EVENTS")
    .update({
            name,
            role,
            image,
            socials,
    })
    .eq("id", id);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data, { status: 200 });
}
