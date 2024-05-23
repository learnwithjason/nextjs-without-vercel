import { revalidatePath } from 'next/cache';

export async function GET(_request: Request) {
	revalidatePath('/');
	return new Response('ok');
}
