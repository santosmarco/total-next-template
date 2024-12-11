import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { Except, SetRequired } from 'type-fest';
import type { z } from 'zod';

export type UseValidatedFormProps<T extends z.ZodTypeAny> = SetRequired<
  Except<
    NonNullable<
      Parameters<typeof useForm<z.input<T>, undefined, z.output<T>>>[0]
    >,
    'resolver'
  >,
  'defaultValues'
>;

export function useValidatedForm<T extends z.ZodTypeAny>(
  schema: T,
  props: UseValidatedFormProps<T>
) {
  return useForm<z.input<T>, undefined, z.output<T>>({
    resolver: zodResolver(schema),
    ...props,
  });
}
