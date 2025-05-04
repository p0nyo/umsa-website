import { supabase } from '../../../../lib/supabase';
import { NextResponse, NextRequest } from 'next/server';


export async function DELETE(request: NextRequest) {
    const body = await request.json();
    const { id } = body;

    const { data, error } = await supabase
    .from("EVENTS")
    .delete()
    .eq("id", id);

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data, { status: 200 });
}