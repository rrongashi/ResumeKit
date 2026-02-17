import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const UNAUTHORIZED = NextResponse.json(
  { error: 'Unauthorized' },
  { status: 401 }
);

type AuthHandler = (
  userId: string,
  request: Request,
  context?: unknown
) => Promise<NextResponse>;

/**
 * Wraps a route handler: checks auth, returns 401 if not signed in, otherwise calls your handler with userId.
 * Your handler receives (userId, request, context?). Ignore request/context if you don't need them.
 */
export function withAuth(handler: AuthHandler) {
  return async (request: Request, context?: unknown): Promise<NextResponse> => {
    const { userId } = await auth();
    if (!userId) return UNAUTHORIZED;
    return handler(userId, request, context);
  };
}
