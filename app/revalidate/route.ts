import { revalidatePath } from 'next/cache';

export const dynamic = 'force-dynamic';

export async function GET(_request: Request) {
	revalidatePath('/');

	return new Response('ok');
}
