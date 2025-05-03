import { NextRequest } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { public_id, resource_type } = body;

    if (!public_id) {
      return new Response(JSON.stringify({ error: 'Missing public_id' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const deleteResponse = await cloudinary.uploader.destroy(public_id, {
      resource_type: resource_type || 'image',
    });

    return new Response(JSON.stringify(deleteResponse), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Delete error:', error);
    return new Response(JSON.stringify({ error: 'Delete failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
