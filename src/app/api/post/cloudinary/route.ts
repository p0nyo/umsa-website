import { NextRequest } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { file, resource_type, folder } = body;

    if (!file) {
      return new Response(JSON.stringify({ error: 'Missing file data' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const uploadResponse = await cloudinary.uploader.upload(file, {
      resource_type: resource_type || 'image',
      folder: folder,
    });

    return new Response(JSON.stringify({
      url: uploadResponse.secure_url,
      public_id: uploadResponse.public_id
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Upload error:', error);
    return new Response(JSON.stringify({ error: 'Upload failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
