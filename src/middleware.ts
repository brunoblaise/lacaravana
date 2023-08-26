import { NextRequest, NextResponse } from 'next/server';
export default function middleware(req: NextRequest, res: NextResponse) {
	const token = req.cookies.get('token')?.value;

	if (token === undefined) {
		return NextResponse.redirect(new URL('/signin', req.url));
	}
}

export const config = {
	matcher: '/dashboard/:path*', //The matcher specifies the URL patterns that this middleware will be applied to.
};
