import cloudinary from '@/lib/cloudinary';
import { supabase } from '../../../../lib/supabase';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const body = await request.json();

    const { data, error } = await supabase
    .from("EVENTS")
    .insert([
        {
            title: body.title,
            date: body.date,
            link: body.link,
            image: body.image,
            cloudinary_id: body.cloudinary_id,
        },
    ])

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data, { status: 201 });
}
