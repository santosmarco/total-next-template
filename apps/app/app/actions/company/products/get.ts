'use server';

import { auth } from '@repo/auth/server';
import { database } from '@repo/database';
import { log } from '@repo/observability/log';
import { redirect } from 'next/navigation';

export const getProducts = async () => {
  try {
    const { orgId } = await auth();

    if (!orgId) {
      redirect('/sign-in');
    }

    const products = await database.product.findMany({
      where: {
        organizationId: orgId,
      },
    });

    return products;
  } catch (error) {
    log.error((error as Error).message, { error });
    throw error;
  }
};
