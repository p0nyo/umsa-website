import { supabase } from '../../../../lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
    const body = await request.json();

    const { id, title, date, link, cloudinary_id, image } = body;

    const { data, error } = await supabase
    .from("EVENTS")
    .update({
            title,
            date,
            link,
            image,
            cloudinary_id,
    })
    .eq("id", id);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data, { status: 200 });
}
